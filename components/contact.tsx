"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/ravi-thalari-72b34b275/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:talariravi0808@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919346376604", label: "Phone" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Let's Connect</h2>
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
          Have a testing project or want to discuss QA strategies? I'd love to hear from you. Reach out and let's
          collaborate.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Whether you have a QA project, want to discuss testing strategies, or just want to connect, feel free to
                reach out. I'm always interested in new opportunities and collaborations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <a
                  href="mailto:talariravi0808@gmail.com"
                  className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail size={20} />
                  <span>talariravi0808@gmail.com</span>
                </a>
                <a
                  href="tel:+919346376604"
                  className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone size={20} />
                  <span>+91-9346376604</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
