import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (submitting) return;
    setSubmitting(true)
    try {
      const res = await axios.post("/api/v1/auth/client", { email, name, message })
      if (res.data.success) {
        toast.success(res.data.message)
        setTimeout(() => {
          navigate('/')
        }, 1500)
      } else {
        toast.error(res.data.message)
        setSubmitting(false)
      }
    } catch (error) {
      toast.error('something went wrong')
      setSubmitting(false)
    }
  }

  return (
    <Layout>
      <section className="contact-section py-5 min-vh-80 d-flex align-items-center">
        {/* Background Glowing Blur Orbs */}
        <div className="orb-contact-1"></div>
        <div className="orb-contact-2"></div>

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="row g-5 align-items-center">

            {/* Left Content Column (Banner Heading & Details) */}
            <div className="col-lg-5 pe-lg-5 animate-fade-in">
              <h1 className="contact-banner-title">
                Let's create something <span className="text-gradient">extraordinary</span> together.
              </h1>
              <p className="contact-banner-subtitle">
                Have a project in mind, want to collaborate, or just want to chat about technology? Drop a message, and let's build something beautiful.
              </p>

              {/* Minimal Contact Details List */}
              <div className="contact-minimal-list">
                <div className="contact-minimal-item">
                  <div className="contact-minimal-icon bg-email">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div>
                    <span className="d-block text-muted small fw-semibold">Email Me Directly</span>
                    <a href="mailto:saurabhsaini736@gmail.com" className="fw-semibold">
                      saurabhsaini736@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-minimal-item">
                  <div className="contact-minimal-icon bg-phone">
                    <i className="ri-phone-line"></i>
                  </div>
                  <div>
                    <span className="d-block text-muted small fw-semibold">Call Me</span>
                    <a href="tel:+916398080037" className="fw-semibold">
                      +91 63980 80037
                    </a>
                  </div>
                </div>

                <div className="contact-minimal-item">
                  <div className="contact-minimal-icon bg-location">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <div>
                    <span className="d-block text-muted small fw-semibold">Location</span>
                    <span className="fw-semibold">New Delhi, India</span>
                  </div>
                </div>
              </div>

              {/* Social Connections Inline Row */}
              <div className="d-flex align-items-center gap-3">
                <span className="text-muted small text-uppercase tracking-wider fw-bold">Connect:</span>
                <a href="https://github.com/saurabh-saini" target="_blank" rel="noreferrer" className="social-pill github">
                  <i className="ri-github-line"></i>
                </a>
                <a href="https://linkedin.com/in/saurabh-saini-141a94184/" target="_blank" rel="noreferrer" className="social-pill linkedin">
                  <i className="ri-linkedin-line"></i>
                </a>
                <a href="mailto:saurabhsaini736@gmail.com" target="_blank" rel="noreferrer" className="social-pill email">
                  <i className="ri-mail-line"></i>
                </a>
              </div>
            </div>

            {/* Right Column (Sleek Form Card) */}
            <div className="col-lg-7">
              <div className="glass-card p-5">
                <h3 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                  <i className="ri-chat-smile-2-line text-primary"></i> Send a Message
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="custom-input-group">
                    <label htmlFor="name" className="custom-label">
                      <i className="ri-user-line text-primary"></i> Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="custom-input-group">
                    <label htmlFor="email" className="custom-label">
                      <i className="ri-mail-line text-primary"></i> Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control custom-input"
                      id="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="custom-input-group">
                    <label htmlFor="message" className="custom-label">
                      <i className="ri-message-3-line text-primary"></i> Your Message
                    </label>
                    <textarea
                      className="form-control custom-input"
                      id="message"
                      rows="5"
                      placeholder="Tell me about your project or inquiry..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit-contact w-100" disabled={submitting}>
                    {submitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-fill me-2"></i> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact