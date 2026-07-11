"use client";

import { useState } from "react";
import { Download, Send, Check } from "lucide-react";
import { contactLinks, resumeHref } from "@/data/portfolio";

export function ContactGrid() {
  const [copied, setCopied] = useState(false);

  const emailLink = contactLinks.find((link) => link.label === "Email");
  const emailAddress = emailLink ? emailLink.href.replace("mailto:", "") : "sathvik.devadiga88@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Copy to clipboard
    navigator.clipboard.writeText(emailAddress).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }).catch((err) => {
      console.error("Failed to copy email: ", err);
    });
  };

  return (
    <>
      <div className="contact-grid">
        <div className="contact-links">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            const isEmail = link.label === "Email";
            return (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                onClick={isEmail ? handleCopyEmail : undefined}
              >
                <Icon size={20} />
                <span>
                  <strong>{link.label}</strong>
                  {link.text}
                </span>
              </a>
            );
          })}
        </div>
        <div className="availability-panel">
          <p className="section-label">Availability</p>
          <h3>Based in Mangalore, available globally.</h3>
          <p>
            Available for remote opportunities globally and on-site roles across India. Response
            time is typically within 24 hours.
          </p>
          <div className="availability-actions">
            <a
              className="btn btn-primary"
              href={emailLink?.href || `mailto:${emailAddress}`}
              onClick={handleCopyEmail}
            >
              Say Hello
              <Send size={18} />
            </a>
            <a className="btn btn-outline" href={resumeHref} download>
              Resume
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>

      {copied && (
        <div className="toast-container">
          <div className="toast">
            <span className="toast-icon">
              <Check size={18} />
            </span>
            <span className="toast-message">
              Email copied to clipboard! ({emailAddress})
            </span>
          </div>
        </div>
      )}
    </>
  );
}
