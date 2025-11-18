const PDFDocument = require('pdfkit')

// Generate PDF for Classic style
function generateClassicPDF(resumeData) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50, size: 'LETTER' })
      const chunks = []

      doc.on('data', (chunk) => chunks.push(chunk))
      doc.on('end', () => resolve(Buffer.concat(chunks)))
      doc.on('error', reject)

      // Parse resume content
      const { name, email, phone, location, content } = resumeData

      // Header
      doc.fontSize(24).font('Helvetica-Bold').text(name, { align: 'center' })
      doc.moveDown(0.3)
      
      // Contact info
      const contactInfo = [email, phone, location].filter(Boolean).join(' | ')
      doc.fontSize(10).font('Helvetica').text(contactInfo, { align: 'center' })
      doc.moveDown(0.5)
      
      // Divider line
      doc.moveTo(50, doc.y).lineTo(562, doc.y).stroke()
      doc.moveDown(1)

      // Process content sections
      const sections = content.split(/\n(?=[A-Z\s]{2,})\n/)
      
      sections.forEach((section) => {
        const lines = section.trim().split('\n')
        if (lines.length === 0) return

        // Section header
        const header = lines[0].trim()
        if (header.length > 0 && header === header.toUpperCase()) {
          doc.fontSize(14).font('Helvetica-Bold').text(header, { underline: true })
          doc.moveDown(0.5)

          // Section content
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim()
            if (line.length === 0) {
              doc.moveDown(0.3)
              continue
            }

            if (line.startsWith('•') || line.startsWith('-')) {
              doc.fontSize(10).font('Helvetica').text(line, { indent: 20 })
            } else {
              doc.fontSize(10).font('Helvetica').text(line)
            }
            doc.moveDown(0.2)
          }
          doc.moveDown(0.5)
        } else {
          doc.fontSize(10).font('Helvetica').text(section.trim())
          doc.moveDown(0.5)
        }
      })

      doc.end()
    } catch (error) {
      reject(error)
    }
  })
}

// Generate PDF for Modern style
function generateModernPDF(resumeData) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50, size: 'LETTER' })
      const chunks = []

      doc.on('data', (chunk) => chunks.push(chunk))
      doc.on('end', () => resolve(Buffer.concat(chunks)))
      doc.on('error', reject)

      const { name, email, phone, location, content } = resumeData

      // Modern header with color accent
      doc.rect(0, 0, 612, 120).fill('#2563eb')
      
      // Name in white on blue background
      doc.fontSize(28).font('Helvetica-Bold').fillColor('#ffffff')
      doc.text(name, 50, 40, { align: 'center' })
      doc.moveDown(0.5)
      
      // Contact info in white
      const contactInfo = [email, phone, location].filter(Boolean).join(' • ')
      doc.fontSize(11).font('Helvetica').fillColor('#ffffff')
      doc.text(contactInfo, { align: 'center' })
      
      // Reset to black text
      doc.fillColor('#000000')
      doc.y = 140

      // Process content sections
      const sections = content.split(/\n(?=[A-Z\s]{2,})\n/)
      
      sections.forEach((section) => {
        const lines = section.trim().split('\n')
        if (lines.length === 0) return

        const header = lines[0].trim()
        if (header.length > 0 && header === header.toUpperCase()) {
          // Section header with blue color
          doc.fontSize(16).font('Helvetica-Bold').fillColor('#2563eb')
          doc.text(header)
          doc.moveDown(0.3)
          
          // Blue underline
          doc.moveTo(50, doc.y).lineTo(200, doc.y).lineWidth(2).strokeColor('#2563eb').stroke()
          doc.moveDown(0.5)
          
          // Reset to black for content
          doc.fillColor('#000000')

          // Section content
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim()
            if (line.length === 0) {
              doc.moveDown(0.3)
              continue
            }

            if (line.startsWith('•') || line.startsWith('-')) {
              doc.fontSize(10).font('Helvetica').text(line, { indent: 20 })
            } else {
              doc.fontSize(10).font('Helvetica').text(line)
            }
            doc.moveDown(0.2)
          }
          doc.moveDown(0.5)
        }
      })

      doc.end()
    } catch (error) {
      reject(error)
    }
  })
}

// Generate PDF for Executive style
function generateExecutivePDF(resumeData) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 60, size: 'LETTER' })
      const chunks = []

      doc.on('data', (chunk) => chunks.push(chunk))
      doc.on('end', () => resolve(Buffer.concat(chunks)))
      doc.on('error', reject)

      const { name, email, phone, location, content } = resumeData

      // Executive header with bold styling
      doc.fontSize(32).font('Helvetica-Bold').text(name.toUpperCase(), { align: 'left' })
      doc.moveDown(0.3)
      
      // Thick divider line
      doc.moveTo(60, doc.y).lineTo(552, doc.y).lineWidth(3).stroke()
      doc.moveDown(0.5)
      
      // Contact info
      doc.fontSize(10).font('Helvetica')
      doc.text(`Email: ${email}`, { continued: true }).text(`  |  Phone: ${phone || 'N/A'}`)
      if (location) {
        doc.text(`Location: ${location}`)
      }
      doc.moveDown(1)

      // Process content sections
      const sections = content.split(/\n(?=[A-Z\s]{2,})\n/)
      
      sections.forEach((section) => {
        const lines = section.trim().split('\n')
        if (lines.length === 0) return

        const header = lines[0].trim()
        if (header.length > 0 && header === header.toUpperCase()) {
          // Bold section header
          doc.fontSize(18).font('Helvetica-Bold').text(header, { underline: false })
          doc.moveDown(0.2)
          
          // Underline
          doc.moveTo(60, doc.y).lineTo(300, doc.y).lineWidth(1.5).stroke()
          doc.moveDown(0.5)

          // Section content with emphasis
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim()
            if (line.length === 0) {
              doc.moveDown(0.3)
              continue
            }

            if (line.startsWith('•') || line.startsWith('-')) {
              doc.fontSize(11).font('Helvetica').text(line, { indent: 25 })
            } else {
              // Check if line might be a job title or company (all caps or bold-worthy)
              const isTitle = line === line.toUpperCase() || line.includes('|') || /^\*\*/.test(line)
              if (isTitle) {
                doc.fontSize(12).font('Helvetica-Bold').text(line.replace(/\*\*/g, ''))
              } else {
                doc.fontSize(11).font('Helvetica').text(line)
              }
            }
            doc.moveDown(0.25)
          }
          doc.moveDown(0.7)
        }
      })

      doc.end()
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  generateClassicPDF,
  generateModernPDF,
  generateExecutivePDF
}