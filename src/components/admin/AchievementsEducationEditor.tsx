"use client";

import { useState } from "react";
import { Plus, Trash2, Pencil, X, Save } from "lucide-react";
import { IconPicker } from "./SkillsEditor";
import { IconResolver } from "@/components/IconResolver";
import { ConfirmModal } from "./ConfirmModal";
import type { PortfolioData, AchievementData, EducationData } from "@/lib/schema/portfolio.schema";

type AchievementsEducationEditorProps = {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
  disabled?: boolean;
};

function AchievementForm({
  achievement,
  onChange,
  onSave,
  onCancel,
  disabled,
  isNew
}: {
  achievement: AchievementData;
  onChange: (a: AchievementData) => void;
  onSave: () => void;
  onCancel: () => void;
  disabled?: boolean;
  isNew: boolean;
}) {
  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <h3>{isNew ? "Add Achievement" : `Edit: ${achievement.title || "Untitled"}`}</h3>
        <button type="button" className="admin-btn admin-btn-outline admin-btn-icon" onClick={onCancel}>
          <X size={16} />
        </button>
      </div>
      <div className="admin-grid-2">
        <div className="admin-field">
          <label className="admin-label">Title</label>
          <input className="admin-input" value={achievement.title} onChange={(e) => onChange({ ...achievement, title: e.target.value })} disabled={disabled} />
        </div>
        <div className="admin-field">
          <label className="admin-label">Organization</label>
          <input className="admin-input" value={achievement.organization} onChange={(e) => onChange({ ...achievement, organization: e.target.value })} disabled={disabled} />
        </div>
      </div>
      <div className="admin-grid-2">
        <div className="admin-field">
          <label className="admin-label">Date</label>
          <input className="admin-input" value={achievement.date} onChange={(e) => onChange({ ...achievement, date: e.target.value })} disabled={disabled} />
        </div>
        <div className="admin-field">
          <label className="admin-label">Badge</label>
          <input className="admin-input" value={achievement.badge} onChange={(e) => onChange({ ...achievement, badge: e.target.value })} disabled={disabled} />
        </div>
      </div>
      <div className="admin-field">
        <label className="admin-label">Description</label>
        <textarea className="admin-textarea" value={achievement.description} onChange={(e) => onChange({ ...achievement, description: e.target.value })} rows={3} disabled={disabled} />
      </div>
      {!disabled && (
        <div className="admin-actions">
          <button type="button" className="admin-btn admin-btn-primary" onClick={onSave} disabled={!achievement.title.trim()}>
            <Save size={16} /> {isNew ? "Add" : "Save"}
          </button>
          <button type="button" className="admin-btn admin-btn-outline" onClick={onCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}

function EducationForm({
  item,
  onChange,
  onSave,
  onCancel,
  disabled,
  isNew
}: {
  item: EducationData;
  onChange: (e: EducationData) => void;
  onSave: () => void;
  onCancel: () => void;
  disabled?: boolean;
  isNew: boolean;
}) {
  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <h3>{isNew ? "Add Education" : `Edit: ${item.degree || "Untitled"}`}</h3>
        <button type="button" className="admin-btn admin-btn-outline admin-btn-icon" onClick={onCancel}>
          <X size={16} />
        </button>
      </div>
      <div className="admin-grid-2">
        <div className="admin-field">
          <label className="admin-label">Degree</label>
          <input className="admin-input" value={item.degree} onChange={(e) => onChange({ ...item, degree: e.target.value })} disabled={disabled} />
        </div>
        <div className="admin-field">
          <label className="admin-label">Institution</label>
          <input className="admin-input" value={item.institution} onChange={(e) => onChange({ ...item, institution: e.target.value })} disabled={disabled} />
        </div>
      </div>
      <div className="admin-grid-2">
        <div className="admin-field">
          <label className="admin-label">Year</label>
          <input className="admin-input" value={item.year} onChange={(e) => onChange({ ...item, year: e.target.value })} disabled={disabled} />
        </div>
        <div className="admin-field">
          <label className="admin-label">Score</label>
          <input className="admin-input" value={item.score} onChange={(e) => onChange({ ...item, score: e.target.value })} disabled={disabled} />
        </div>
      </div>
      <div className="admin-field">
        <label className="admin-label">Icon</label>
        <IconPicker value={item.icon} onChange={(icon) => onChange({ ...item, icon })} disabled={disabled} />
      </div>
      {!disabled && (
        <div className="admin-actions">
          <button type="button" className="admin-btn admin-btn-primary" onClick={onSave} disabled={!item.degree.trim()}>
            <Save size={16} /> {isNew ? "Add" : "Save"}
          </button>
          <button type="button" className="admin-btn admin-btn-outline" onClick={onCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export function AchievementsEducationEditor({ data, onChange, disabled }: AchievementsEducationEditorProps) {
  const [editAchIndex, setEditAchIndex] = useState<number | null>(null);
  const [achForm, setAchForm] = useState<AchievementData>({ title: "", organization: "", date: "", badge: "", description: "" });
  const [isNewAch, setIsNewAch] = useState(false);
  const [deleteAchIndex, setDeleteAchIndex] = useState<number | null>(null);

  const [editEduIndex, setEditEduIndex] = useState<number | null>(null);
  const [eduForm, setEduForm] = useState<EducationData>({ degree: "", institution: "", year: "", score: "", icon: "GraduationCap" });
  const [isNewEdu, setIsNewEdu] = useState(false);
  const [deleteEduIndex, setDeleteEduIndex] = useState<number | null>(null);

  // Achievement CRUD
  const saveAch = () => {
    if (isNewAch) {
      onChange({ ...data, achievements: [...data.achievements, achForm] });
    } else if (editAchIndex !== null) {
      const updated = [...data.achievements];
      updated[editAchIndex] = achForm;
      onChange({ ...data, achievements: updated });
    }
    setEditAchIndex(null);
  };

  const confirmDeleteAch = () => {
    if (deleteAchIndex !== null) {
      onChange({ ...data, achievements: data.achievements.filter((_, i) => i !== deleteAchIndex) });
      setDeleteAchIndex(null);
    }
  };

  // Education CRUD
  const saveEdu = () => {
    if (isNewEdu) {
      onChange({ ...data, education: [...data.education, eduForm] });
    } else if (editEduIndex !== null) {
      const updated = [...data.education];
      updated[editEduIndex] = eduForm;
      onChange({ ...data, education: updated });
    }
    setEditEduIndex(null);
  };

  const confirmDeleteEdu = () => {
    if (deleteEduIndex !== null) {
      onChange({ ...data, education: data.education.filter((_, i) => i !== deleteEduIndex) });
      setDeleteEduIndex(null);
    }
  };

  return (
    <>
      {/* Achievements */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Achievements</h3>
        </div>

        {editAchIndex !== null ? (
          <AchievementForm
            achievement={achForm}
            onChange={setAchForm}
            onSave={saveAch}
            onCancel={() => setEditAchIndex(null)}
            disabled={disabled}
            isNew={isNewAch}
          />
        ) : (
          <>
            <div className="admin-item-list">
              {data.achievements.map((ach, i) => (
                <div key={i} className="admin-item-row">
                  <div className="admin-item-row-info">
                    <h4>{ach.title}</h4>
                    <p>{ach.organization} · {ach.date}</p>
                  </div>
                  {!disabled && (
                    <div className="admin-item-row-actions">
                      <button type="button" className="admin-btn admin-btn-outline admin-btn-icon" onClick={() => { setAchForm({ ...ach }); setIsNewAch(false); setEditAchIndex(i); }} aria-label="Edit">
                        <Pencil size={14} />
                      </button>
                      <button type="button" className="admin-btn admin-btn-danger admin-btn-icon" onClick={() => setDeleteAchIndex(i)} aria-label="Delete">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {!disabled && (
              <button type="button" className="admin-btn admin-btn-outline admin-btn-sm" onClick={() => { setAchForm({ title: "", organization: "", date: "", badge: "", description: "" }); setIsNewAch(true); setEditAchIndex(-1); }} style={{ marginTop: 12 }}>
                <Plus size={14} /> Add Achievement
              </button>
            )}
          </>
        )}
      </div>

      {/* Education */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Education</h3>
        </div>

        {editEduIndex !== null ? (
          <EducationForm
            item={eduForm}
            onChange={setEduForm}
            onSave={saveEdu}
            onCancel={() => setEditEduIndex(null)}
            disabled={disabled}
            isNew={isNewEdu}
          />
        ) : (
          <>
            <div className="admin-item-list">
              {data.education.map((edu, i) => (
                <div key={i} className="admin-item-row">
                  <div className="project-list-icon">
                    <IconResolver iconName={edu.icon} size={18} />
                  </div>
                  <div className="admin-item-row-info">
                    <h4>{edu.degree}</h4>
                    <p>{edu.institution} · {edu.year}</p>
                  </div>
                  {!disabled && (
                    <div className="admin-item-row-actions">
                      <button type="button" className="admin-btn admin-btn-outline admin-btn-icon" onClick={() => { setEduForm({ ...edu }); setIsNewEdu(false); setEditEduIndex(i); }} aria-label="Edit">
                        <Pencil size={14} />
                      </button>
                      <button type="button" className="admin-btn admin-btn-danger admin-btn-icon" onClick={() => setDeleteEduIndex(i)} aria-label="Delete">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {!disabled && (
              <button type="button" className="admin-btn admin-btn-outline admin-btn-sm" onClick={() => { setEduForm({ degree: "", institution: "", year: "", score: "", icon: "GraduationCap" }); setIsNewEdu(true); setEditEduIndex(-1); }} style={{ marginTop: 12 }}>
                <Plus size={14} /> Add Education
              </button>
            )}
          </>
        )}
      </div>

      {deleteAchIndex !== null && (
        <ConfirmModal
          title="Delete Achievement"
          message={`Are you sure you want to delete "${data.achievements[deleteAchIndex]?.title}"? This action cannot be undone.`}
          confirmLabel="Delete"
          onConfirm={confirmDeleteAch}
          onCancel={() => setDeleteAchIndex(null)}
          danger
        />
      )}

      {deleteEduIndex !== null && (
        <ConfirmModal
          title="Delete Education Entry"
          message={`Are you sure you want to delete "${data.education[deleteEduIndex]?.degree}"? This action cannot be undone.`}
          confirmLabel="Delete"
          onConfirm={confirmDeleteEdu}
          onCancel={() => setDeleteEduIndex(null)}
          danger
        />
      )}
    </>
  );
}
