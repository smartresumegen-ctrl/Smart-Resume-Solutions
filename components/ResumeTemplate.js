import React from 'react'

export default function ResumeTemplate({ resumeData, template = 'modern' }) {
  // Parse resume data (in real app, this would be structured data)
  // For now, we'll format the text content nicely
  
  const parseContent = (content) => {
    if (!content) return null
    const lines = content.split('\n')
    return lines
  }

  const ModernTemplate = () => (
    <div className="resume-container modern-template" style={styles.container}>
      <div style={styles.modernHeader}>
        <h1 style={styles.modernName}>{resumeData.name || 'Resume'}</h1>
        <div style={styles.modernContact}>
          {resumeData.email && <span>{resumeData.email}</span>}
          {resumeData.phone && <span> • {resumeData.phone}</span>}
          {resumeData.location && <span> • {resumeData.location}</span>}
        </div>
      </div>
      
      <div style={styles.modernContent}>
        {parseContent(resumeData.content)?.map((line, index) => {
          if (line.trim() === '') return <div key={index} style={{ height: '8px' }} />
          
          // Detect section headers (all caps or specific keywords)
          if (line.toUpperCase() === line && line.length > 3 && line.length < 40) {
            return (
              <h2 key={index} style={styles.modernSectionHeader}>
                {line}
              </h2>
            )
          }
          
          // Detect bullet points
          if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            return (
              <div key={index} style={styles.modernBullet}>
                • {line.replace(/^[•\-]\s*/, '')}
              </div>
            )
          }
          
          // Regular text
          return <div key={index} style={styles.modernText}>{line}</div>
        })}
      </div>
    </div>
  )

  const ClassicTemplate = () => (
    <div className="resume-container classic-template" style={styles.container}>
      <div style={styles.classicHeader}>
        <h1 style={styles.classicName}>{resumeData.name || 'Resume'}</h1>
        <div style={styles.classicContact}>
          {resumeData.email && <div>{resumeData.email}</div>}
          {resumeData.phone && <div>{resumeData.phone}</div>}
          {resumeData.location && <div>{resumeData.location}</div>}
        </div>
      </div>
      
      <div style={styles.classicDivider}></div>
      
      <div style={styles.classicContent}>
        {parseContent(resumeData.content)?.map((line, index) => {
          if (line.trim() === '') return <div key={index} style={{ height: '10px' }} />
          
          if (line.toUpperCase() === line && line.length > 3 && line.length < 40) {
            return (
              <h2 key={index} style={styles.classicSectionHeader}>
                {line}
              </h2>
            )
          }
          
          if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            return (
              <div key={index} style={styles.classicBullet}>
                • {line.replace(/^[•\-]\s*/, '')}
              </div>
            )
          }
          
          return <div key={index} style={styles.classicText}>{line}</div>
        })}
      </div>
    </div>
  )

  const ProfessionalTemplate = () => (
    <div className="resume-container professional-template" style={styles.container}>
      <div style={styles.professionalHeader}>
        <h1 style={styles.professionalName}>{resumeData.name || 'Resume'}</h1>
        <div style={styles.professionalContact}>
          {resumeData.email} {resumeData.phone && `| ${resumeData.phone}`} {resumeData.location && `| ${resumeData.location}`}
        </div>
      </div>
      
      <div style={styles.professionalContent}>
        {parseContent(resumeData.content)?.map((line, index) => {
          if (line.trim() === '') return <div key={index} style={{ height: '10px' }} />
          
          if (line.toUpperCase() === line && line.length > 3 && line.length < 40) {
            return (
              <h2 key={index} style={styles.professionalSectionHeader}>
                {line}
              </h2>
            )
          }
          
          if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            return (
              <div key={index} style={styles.professionalBullet}>
                • {line.replace(/^[•\-]\s*/, '')}
              </div>
            )
          }
          
          return <div key={index} style={styles.professionalText}>{line}</div>
        })}
      </div>
    </div>
  )

  // Render the selected template
  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    professional: ProfessionalTemplate,
  }

  const TemplateComponent = templates[template] || ModernTemplate

  return <TemplateComponent />
}

// Styles for each template
const styles = {
  container: {
    width: '816px',
    minHeight: '1056px',
    padding: '60px',
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  
  // Modern Template Styles
  modernHeader: {
    borderBottom: '3px solid #2563eb',
    paddingBottom: '20px',
    marginBottom: '30px',
  },
  modernName: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1e40af',
    margin: '0 0 8px 0',
  },
  modernContact: {
    fontSize: '12px',
    color: '#666',
  },
  modernContent: {
    fontSize: '11px',
    lineHeight: '1.6',
  },
  modernSectionHeader: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: '20px',
    marginBottom: '10px',
    borderBottom: '2px solid #93c5fd',
    paddingBottom: '5px',
  },
  modernBullet: {
    marginLeft: '20px',
    marginBottom: '4px',
    fontSize: '11px',
  },
  modernText: {
    marginBottom: '4px',
    fontSize: '11px',
  },
  
  // Classic Template Styles
  classicHeader: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  classicName: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#000',
    margin: '0 0 10px 0',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  classicContact: {
    fontSize: '11px',
    color: '#333',
  },
  classicDivider: {
    height: '2px',
    backgroundColor: '#000',
    marginBottom: '25px',
  },
  classicContent: {
    fontSize: '11px',
    lineHeight: '1.7',
  },
  classicSectionHeader: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000',
    marginTop: '20px',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    borderBottom: '1px solid #000',
    paddingBottom: '3px',
  },
  classicBullet: {
    marginLeft: '25px',
    marginBottom: '5px',
    fontSize: '11px',
  },
  classicText: {
    marginBottom: '5px',
    fontSize: '11px',
  },
  
  // Professional Template Styles
  professionalHeader: {
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '15px',
    marginBottom: '25px',
  },
  professionalName: {
    fontSize: '30px',
    fontWeight: '600',
    color: '#111827',
    margin: '0 0 5px 0',
  },
  professionalContact: {
    fontSize: '11px',
    color: '#6b7280',
  },
  professionalContent: {
    fontSize: '11px',
    lineHeight: '1.6',
  },
  professionalSectionHeader: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#374151',
    marginTop: '20px',
    marginBottom: '10px',
    paddingBottom: '5px',
    borderBottom: '1px solid #d1d5db',
  },
  professionalBullet: {
    marginLeft: '20px',
    marginBottom: '4px',
    fontSize: '11px',
  },
  professionalText: {
    marginBottom: '4px',
    fontSize: '11px',
  },
}