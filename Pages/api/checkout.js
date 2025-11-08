const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { resumeId, email } = req.body

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'AI-Generated Professional Resume',
              description: 'Your personalized, ATS-optimized resume',
            },
            unit_amount: 2999,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}&resume_id=${resumeId}`,
      cancel_url: `${req.headers.origin}/generate`,
      customer_email: email,
      metadata: {
        resumeId: resumeId,
      },
    })

    res.status(200).json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    res.status(500).json({ 
      message: 'Payment setup failed. Please try again.',
      error: error.message 
    })
  }
}