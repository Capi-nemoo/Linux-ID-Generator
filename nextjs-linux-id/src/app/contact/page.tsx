'use client';
import { useState } from 'react';
import TopBar from '../components/TopBar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('> Sending message...');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('> Message sent successfully! ✓');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }, 1500);
  };

  const clearForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('> Form cleared.');
    setTimeout(() => setStatus(''), 2000);
  };

  return (
    <div className="terminal-container">
      <TopBar />
      <div className="terminal-content">
        <div className="contact-page">
          
          <div className="contact-ascii">
            <pre className="contact-title">{`
  ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
 ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
 ██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
 ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
 ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝   `}</pre>
          </div>

          <div className="contact-info">
            <div className="section-title">
              <pre>{`
 ██████╗ ██████╗ ███╗   ███╗███╗   ███╗██╗   ██╗███╗   ██╗██╗ ██████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██╔═══██╗████╗ ████║████╗ ████║██║   ██║████╗  ██║██║██╔════╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
██║     ██║   ██║██╔████╔██║██╔████╔██║██║   ██║██╔██╗ ██║██║██║     ███████║   ██║   ██║██║   ██║██╔██╗ ██║
██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║██║╚██╗██║██║██║     ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║╚██████╔╝██║ ╚████║██║╚██████╗██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝`}</pre>
            </div>
            <div className="channels-info">
              <pre>{`
   [E] EMAIL    : hello@example.com
   [G] GITHUB   : github.com/username  
   [T] TWITTER  : @username
   [L] LINKEDIN : linkedin.com/in/username`}</pre>
            </div>
            <div className="response-title">
              <pre>{`
██████╗ ███████╗███████╗██████╗  ██████╗ ███╗   ██╗███████╗███████╗    ████████╗██╗███╗   ███╗███████╗███████╗
██╔══██╗██╔════╝██╔════╝██╔══██╗██╔═══██╗████╗  ██║██╔════╝██╔════╝    ╚══██╔══╝██║████╗ ████║██╔════╝██╔════╝
██████╔╝█████╗  ███████╗██████╔╝██║   ██║██╔██╗ ██║███████╗█████╗         ██║   ██║██╔████╔██║█████╗  ███████╗
██╔══██╗██╔══╝  ╚════██║██╔═══╝ ██║   ██║██║╚██╗██║╚════██║██╔══╝         ██║   ██║██║╚██╔╝██║██╔══╝  ╚════██║
██║  ██║███████╗███████║██║     ╚██████╔╝██║ ╚████║███████║███████╗       ██║   ██║██║ ╚═╝ ██║███████╗███████║
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝       ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝`}</pre>
            </div>
            <div className="response-bars">
              <pre>{`
   EMAIL   ████████████████████░░░░ ~24 hours
   GITHUB  ████████████████████████ same day
   SOCIAL  ████████████░░░░░░░░░░░░ 1-2 days
   URGENT  ████████████████████████ <4 hours`}</pre>
            </div>
          </div>

          <div className="contact-form-section">
            <pre className="form-header">{`
 > MESSAGE TERMINAL - ENTER YOUR DATA:`}</pre>
            
            <form onSubmit={handleSubmit} className="ascii-form">
              <div className="form-row">
                <label>NAME    :</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="ascii-input" 
                  placeholder="Your name here"
                  required
                />
              </div>
              
              <div className="form-row">
                <label>EMAIL   :</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="ascii-input" 
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="form-row">
                <label>SUBJECT :</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="ascii-input" 
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div className="form-row message-row">
                <label>MESSAGE :</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="ascii-textarea" 
                  placeholder="Type your message here..."
                  rows={6}
                  required
                />
              </div>
              
              <div className="form-buttons">
                <button type="submit" className="tui-button send-btn">
                  <span className="tui-bracket">[</span>
                  <span className="tui-text">SEND MESSAGE</span>
                  <span className="tui-bracket">]</span>
                </button>
                <button type="button" onClick={clearForm} className="tui-button clear-btn">
                  <span className="tui-bracket">[</span>
                  <span className="tui-text">CLEAR FORM</span>
                  <span className="tui-bracket">]</span>
                </button>
              </div>
            </form>
            
            {status && (
              <div className="form-status">
                <pre>{status}</pre>
              </div>
            )}
          </div>

          <div className="system-status">
            <pre>{`
 > SYSTEM STATUS:

   [●] INBOX MONITORING  : ACTIVE
   [●] AUTO-REPLY        : ENABLED  
   [●] SPAM FILTER       : OPERATIONAL
   [●] ENCRYPTION        : TLS 1.3

   LAST UPDATED: ${new Date().toLocaleString()}`}</pre>
          </div>

        </div>
      </div>
    </div>
  );
}
