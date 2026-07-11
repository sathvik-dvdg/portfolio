"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { TagEditor } from "./TagEditor";
import { IconPicker } from "./SkillsEditor";
import { IconResolver } from "@/components/IconResolver";
import { ConfirmModal } from "./ConfirmModal";
import type { PortfolioData } from "@/lib/schema/portfolio.schema";

type ContactMetaEditorProps = {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
  disabled?: boolean;
};

export function ContactMetaEditor({ data, onChange, disabled }: ContactMetaEditorProps) {
  const [deleteLinkIndex, setDeleteLinkIndex] = useState<number | null>(null);

  const confirmDeleteLink = () => {
    if (deleteLinkIndex !== null) {
      onChange({ ...data, contactLinks: data.contactLinks.filter((_, i) => i !== deleteLinkIndex) });
      setDeleteLinkIndex(null);
    }
  };

  return (
    <>
      {/* Contact Links */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Contact Links</h3>
        </div>
        {data.contactLinks.map((link, index) => (
          <div className="admin-field" key={index} style={{ padding: "12px 0", borderBottom: index < data.contactLinks.length - 1 ? "1px solid var(--border)" : "none" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <IconResolver iconName={link.icon} size={16} />
                <span style={{ fontWeight: 600, fontSize: "0.88rem" }}>{link.label || `Contact ${index + 1}`}</span>
              </div>
              {!disabled && data.contactLinks.length > 1 && (
                <button
                  type="button"
                  className="admin-btn admin-btn-danger admin-btn-icon"
                  onClick={() => setDeleteLinkIndex(index)}
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
            <div className="admin-grid-2">
              <div>
                <label className="admin-label">Label</label>
                <input
                  className="admin-input"
                  value={link.label}
                  onChange={(e) => {
                    const updated = [...data.contactLinks];
                    updated[index] = { ...link, label: e.target.value };
                    onChange({ ...data, contactLinks: updated });
                  }}
                  disabled={disabled}
                />
              </div>
              <div>
                <label className="admin-label">Display Text</label>
                <input
                  className="admin-input"
                  value={link.text}
                  onChange={(e) => {
                    const updated = [...data.contactLinks];
                    updated[index] = { ...link, text: e.target.value };
                    onChange({ ...data, contactLinks: updated });
                  }}
                  disabled={disabled}
                />
              </div>
            </div>
            <div className="admin-grid-2" style={{ marginTop: 8 }}>
              <div>
                <label className="admin-label">Link URL</label>
                <input
                  className="admin-input"
                  value={link.href}
                  onChange={(e) => {
                    const updated = [...data.contactLinks];
                    updated[index] = { ...link, href: e.target.value };
                    onChange({ ...data, contactLinks: updated });
                  }}
                  disabled={disabled}
                />
              </div>
              <div>
                <label className="admin-label">Icon</label>
                <IconPicker
                  value={link.icon}
                  onChange={(icon) => {
                    const updated = [...data.contactLinks];
                    updated[index] = { ...link, icon };
                    onChange({ ...data, contactLinks: updated });
                  }}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        ))}
        {!disabled && (
          <button
            type="button"
            className="admin-btn admin-btn-outline admin-btn-sm"
            onClick={() => onChange({ ...data, contactLinks: [...data.contactLinks, { label: "", text: "", href: "", icon: "Mail" }] })}
            style={{ marginTop: 8 }}
          >
            <Plus size={14} /> Add Contact Link
          </button>
        )}
      </div>

      {/* Open Source Highlights */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Open Source Highlights</h3>
        </div>
        {data.openSourceHighlights.map((item, index) => (
          <div className="admin-field" key={index}>
            <div className="admin-grid-2">
              <div>
                <label className="admin-label">Value</label>
                <input
                  className="admin-input"
                  value={item.value}
                  onChange={(e) => {
                    const updated = [...data.openSourceHighlights];
                    updated[index] = { ...item, value: e.target.value };
                    onChange({ ...data, openSourceHighlights: updated });
                  }}
                  disabled={disabled}
                />
              </div>
              <div>
                <label className="admin-label">Label</label>
                <input
                  className="admin-input"
                  value={item.label}
                  onChange={(e) => {
                    const updated = [...data.openSourceHighlights];
                    updated[index] = { ...item, label: e.target.value };
                    onChange({ ...data, openSourceHighlights: updated });
                  }}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Footer Links</h3>
        </div>
        {data.footerLinks.map((link, index) => (
          <div className="admin-field" key={index}>
            <div className="admin-grid-2">
              <div>
                <label className="admin-label">Label</label>
                <input
                  className="admin-input"
                  value={link.label}
                  onChange={(e) => {
                    const updated = [...data.footerLinks];
                    updated[index] = { ...link, label: e.target.value };
                    onChange({ ...data, footerLinks: updated });
                  }}
                  disabled={disabled}
                />
              </div>
              <div>
                <label className="admin-label">URL</label>
                <input
                  className="admin-input"
                  value={link.href}
                  onChange={(e) => {
                    const updated = [...data.footerLinks];
                    updated[index] = { ...link, href: e.target.value };
                    onChange({ ...data, footerLinks: updated });
                  }}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resume & Nav */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Site Meta</h3>
        </div>
        <div className="admin-field">
          <label className="admin-label">Resume File Path</label>
          <input
            className="admin-input"
            value={data.resumeHref}
            onChange={(e) => onChange({ ...data, resumeHref: e.target.value })}
            disabled={disabled}
          />
        </div>
        <div className="admin-field">
          <label className="admin-label">Nav Items</label>
          <TagEditor
            tags={data.navItems.map((n) => `${n.label}:${n.href}`)}
            onChange={(tags) => {
              const navItems = tags.map((t) => {
                const [label, ...rest] = t.split(":");
                return { label, href: rest.join(":") || "#" };
              });
              onChange({ ...data, navItems });
            }}
            placeholder='Add nav item (format: "Label:#section")…'
            disabled={disabled}
          />
        </div>

        {/* Tailored Resumes List */}
        <div className="admin-field" style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
          <label className="admin-label" style={{ fontWeight: 600, fontSize: "0.95rem" }}>Tailored Resumes</label>
          <p className="admin-label" style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: -4, marginBottom: 12 }}>
            Map custom role slugs (e.g. <code>devops</code>) to tailored resume PDFs (e.g. <code>/sathvik-resume-devops.pdf</code>). Access at <code>yourdomain.com/resume/[role]</code>.
          </p>

          {(data.tailoredResumes || []).map((resume, index) => (
            <div key={index} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <input
                  className="admin-input"
                  placeholder="Role slug (e.g. devops)"
                  value={resume.role}
                  onChange={(e) => {
                    const updated = [...(data.tailoredResumes || [])];
                    updated[index] = { ...resume, role: e.target.value };
                    onChange({ ...data, tailoredResumes: updated });
                  }}
                  disabled={disabled}
                />
              </div>
              <div style={{ flex: 2 }}>
                <input
                  className="admin-input"
                  placeholder="File path (e.g. /sathvik-resume-devops.pdf)"
                  value={resume.href}
                  onChange={(e) => {
                    const updated = [...(data.tailoredResumes || [])];
                    updated[index] = { ...resume, href: e.target.value };
                    onChange({ ...data, tailoredResumes: updated });
                  }}
                  disabled={disabled}
                />
              </div>
              {!disabled && (
                <button
                  type="button"
                  className="admin-btn admin-btn-danger admin-btn-icon"
                  onClick={() => {
                    if (window.confirm(`Delete tailored resume link for "${resume.role || "unnamed role"}"?`)) {
                      const updated = (data.tailoredResumes || []).filter((_, i) => i !== index);
                      onChange({ ...data, tailoredResumes: updated });
                    }
                  }}
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          ))}

          {!disabled && (
            <button
              type="button"
              className="admin-btn admin-btn-outline admin-btn-sm"
              onClick={() => {
                const current = data.tailoredResumes || [];
                onChange({ ...data, tailoredResumes: [...current, { role: "", href: "" }] });
              }}
              style={{ marginTop: 8 }}
            >
              <Plus size={14} /> Add Tailored Resume
            </button>
          )}
        </div>
      </div>

      {deleteLinkIndex !== null && (
        <ConfirmModal
          title="Delete Contact Link"
          message={`Are you sure you want to delete "${data.contactLinks[deleteLinkIndex]?.label || "this contact link"}"? This action cannot be undone.`}
          confirmLabel="Delete"
          onConfirm={confirmDeleteLink}
          onCancel={() => setDeleteLinkIndex(null)}
          danger
        />
      )}
    </>
  );
}
