"use client";

import { useState, useRef, useEffect } from "react";
import { Plus, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { TagEditor } from "./TagEditor";
import { IconResolver } from "@/components/IconResolver";
import { availableIcons } from "@/components/IconResolver";
import type { PortfolioData } from "@/lib/schema/portfolio.schema";

type SkillsEditorProps = {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
  disabled?: boolean;
};

function IconPicker({
  value,
  onChange,
  disabled
}: {
  value: string;
  onChange: (icon: string) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = availableIcons.filter((icon) =>
    icon.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="icon-picker-wrapper" ref={ref}>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          className="admin-btn admin-btn-outline admin-btn-sm"
          onClick={() => !disabled && setOpen(!open)}
          disabled={disabled}
          style={{ gap: 6, minWidth: 120 }}
        >
          <IconResolver iconName={value} size={16} />
          {value || "Select…"}
        </button>
      </div>
      {open && (
        <div className="icon-picker-dropdown">
          <div style={{ padding: 8, borderBottom: "1px solid var(--border)" }}>
            <input
              className="admin-input"
              placeholder="Search icons…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
              style={{ fontSize: "0.82rem" }}
            />
          </div>
          {filtered.map((icon) => (
            <button
              key={icon}
              type="button"
              className={`icon-picker-option${icon === value ? " is-selected" : ""}`}
              onClick={() => {
                onChange(icon);
                setOpen(false);
                setSearch("");
              }}
            >
              <IconResolver iconName={icon} size={16} />
              {icon}
            </button>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: "12px 14px", color: "var(--text-dim)", fontSize: "0.82rem" }}>
              No icons match &ldquo;{search}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export { IconPicker };

export function SkillsEditor({ data, onChange, disabled }: SkillsEditorProps) {
  const updateGroups = (groups: PortfolioData["skillGroups"]) => {
    onChange({ ...data, skillGroups: groups });
  };

  const moveGroup = (index: number, direction: -1 | 1) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= data.skillGroups.length) return;
    const updated = [...data.skillGroups];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    updateGroups(updated);
  };

  const removeGroup = (index: number) => {
    updateGroups(data.skillGroups.filter((_, i) => i !== index));
  };

  const addGroup = () => {
    updateGroups([
      ...data.skillGroups,
      { title: "", icon: "Code2", note: "", skills: [] }
    ]);
  };

  return (
    <>
      {data.skillGroups.map((group, index) => (
        <div className="admin-card" key={index}>
          <div className="admin-card-header">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <IconResolver iconName={group.icon} size={18} />
              <h3>{group.title || `Skill Group ${index + 1}`}</h3>
            </div>
            {!disabled && (
              <div style={{ display: "flex", gap: 4 }}>
                <button
                  type="button"
                  className="admin-btn admin-btn-outline admin-btn-icon"
                  onClick={() => moveGroup(index, -1)}
                  disabled={index === 0}
                  aria-label="Move up"
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  type="button"
                  className="admin-btn admin-btn-outline admin-btn-icon"
                  onClick={() => moveGroup(index, 1)}
                  disabled={index === data.skillGroups.length - 1}
                  aria-label="Move down"
                >
                  <ChevronDown size={14} />
                </button>
                <button
                  type="button"
                  className="admin-btn admin-btn-danger admin-btn-icon"
                  onClick={() => removeGroup(index)}
                  aria-label="Delete group"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            )}
          </div>

          <div className="admin-grid-2">
            <div className="admin-field">
              <label className="admin-label">Title</label>
              <input
                className="admin-input"
                value={group.title}
                onChange={(e) => {
                  const updated = [...data.skillGroups];
                  updated[index] = { ...group, title: e.target.value };
                  updateGroups(updated);
                }}
                disabled={disabled}
              />
            </div>
            <div className="admin-field">
              <label className="admin-label">Icon</label>
              <IconPicker
                value={group.icon}
                onChange={(icon) => {
                  const updated = [...data.skillGroups];
                  updated[index] = { ...group, icon };
                  updateGroups(updated);
                }}
                disabled={disabled}
              />
            </div>
          </div>

          <div className="admin-field">
            <label className="admin-label">Note</label>
            <textarea
              className="admin-textarea"
              value={group.note}
              onChange={(e) => {
                const updated = [...data.skillGroups];
                updated[index] = { ...group, note: e.target.value };
                updateGroups(updated);
              }}
              rows={2}
              disabled={disabled}
            />
          </div>

          <div className="admin-field">
            <label className="admin-label">Skills</label>
            <TagEditor
              tags={group.skills}
              onChange={(skills) => {
                const updated = [...data.skillGroups];
                updated[index] = { ...group, skills };
                updateGroups(updated);
              }}
              placeholder="Add skill…"
              disabled={disabled}
            />
          </div>
        </div>
      ))}

      {!disabled && (
        <button type="button" className="admin-btn admin-btn-outline" onClick={addGroup}>
          <Plus size={16} />
          Add Skill Group
        </button>
      )}
    </>
  );
}
