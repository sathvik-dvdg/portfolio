"use client";

import { Plus, Trash2 } from "lucide-react";
import { TagEditor } from "./TagEditor";
import type { PortfolioData } from "@/lib/schema/portfolio.schema";

type HeroAboutEditorProps = {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
  disabled?: boolean;
};

export function HeroAboutEditor({ data, onChange, disabled }: HeroAboutEditorProps) {
  const updateField = <K extends keyof PortfolioData>(key: K, value: PortfolioData[K]) => {
    onChange({ ...data, [key]: value });
  };

  return (
    <>
      {/* Hero Chips */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Hero Chips</h3>
        </div>
        <div className="admin-field">
          <label className="admin-label">Focus Area Tags</label>
          <TagEditor
            tags={data.heroChips}
            onChange={(tags) => updateField("heroChips", tags)}
            placeholder="Add a chip…"
            disabled={disabled}
          />
        </div>
      </div>

      {/* Hero Stats */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Hero Stats Bar</h3>
        </div>
        <div className="admin-field">
          <label className="admin-label">Stats (shown below CTA buttons)</label>
          <TagEditor
            tags={data.heroStats}
            onChange={(tags) => updateField("heroStats", tags)}
            placeholder="Add a stat…"
            disabled={disabled}
          />
        </div>
      </div>

      {/* About Paragraphs */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>About Paragraphs</h3>
        </div>
        {data.aboutParagraphs.map((paragraph, index) => (
          <div className="admin-field" key={index}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <label className="admin-label" style={{ margin: 0 }}>
                Paragraph {index + 1}
              </label>
              {!disabled && data.aboutParagraphs.length > 1 && (
                <button
                  type="button"
                  className="admin-btn admin-btn-danger admin-btn-sm"
                  onClick={() => {
                    const updated = data.aboutParagraphs.filter((_, i) => i !== index);
                    updateField("aboutParagraphs", updated);
                  }}
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
            <textarea
              className="admin-textarea"
              value={paragraph}
              onChange={(e) => {
                const updated = [...data.aboutParagraphs];
                updated[index] = e.target.value;
                updateField("aboutParagraphs", updated);
              }}
              rows={3}
              disabled={disabled}
            />
          </div>
        ))}
        {!disabled && (
          <button
            type="button"
            className="admin-btn admin-btn-outline admin-btn-sm"
            onClick={() => updateField("aboutParagraphs", [...data.aboutParagraphs, ""])}
          >
            <Plus size={14} />
            Add Paragraph
          </button>
        )}
      </div>

      {/* Stats Grid */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Stats Grid</h3>
        </div>
        {data.stats.map((stat, index) => (
          <div className="admin-field" key={index}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <label className="admin-label" style={{ margin: 0 }}>
                Stat {index + 1}
              </label>
              {!disabled && data.stats.length > 1 && (
                <button
                  type="button"
                  className="admin-btn admin-btn-danger admin-btn-sm"
                  onClick={() => {
                    const updated = data.stats.filter((_, i) => i !== index);
                    updateField("stats", updated);
                  }}
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
            <div className="admin-grid-2">
              <div>
                <label className="admin-label">Value</label>
                <input
                  className="admin-input"
                  value={stat.value}
                  onChange={(e) => {
                    const updated = [...data.stats];
                    updated[index] = { ...stat, value: e.target.value };
                    updateField("stats", updated);
                  }}
                  disabled={disabled}
                />
              </div>
              <div>
                <label className="admin-label">Label</label>
                <input
                  className="admin-input"
                  value={stat.label}
                  onChange={(e) => {
                    const updated = [...data.stats];
                    updated[index] = { ...stat, label: e.target.value };
                    updateField("stats", updated);
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
            onClick={() => updateField("stats", [...data.stats, { value: "", label: "" }])}
            style={{ marginTop: 8 }}
          >
            <Plus size={14} />
            Add Stat
          </button>
        )}
      </div>
    </>
  );
}
