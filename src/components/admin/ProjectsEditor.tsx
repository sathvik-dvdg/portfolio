"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, ChevronUp, ChevronDown, X, Save } from "lucide-react";
import { TagEditor } from "./TagEditor";
import { IconPicker } from "./SkillsEditor";
import { IconResolver } from "@/components/IconResolver";
import { ConfirmModal } from "./ConfirmModal";
import type { PortfolioData, ProjectData, ProjectVisual } from "@/lib/schema/portfolio.schema";

type ProjectsEditorProps = {
  data: PortfolioData;
  onChange: (data: PortfolioData) => void;
  disabled?: boolean;
};

const VISUAL_OPTIONS: ProjectVisual[] = ["graph", "health", "social", "shield", "cart"];

function emptyProject(): ProjectData {
  return {
    id: `proj_${Date.now()}`,
    name: "",
    meta: "",
    icon: "Code2",
    description: "",
    metrics: [],
    stack: [],
    href: "https://",
    visual: "graph"
  };
}

export function ProjectsEditor({ data, onChange, disabled }: ProjectsEditorProps) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<ProjectData>(emptyProject());
  const [isNew, setIsNew] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const updateProjects = (projects: ProjectData[]) => {
    onChange({ ...data, projects });
  };

  const openAdd = () => {
    setEditForm(emptyProject());
    setIsNew(true);
    setEditIndex(-1);
  };

  const openEdit = (index: number) => {
    setEditForm({ ...data.projects[index] });
    setIsNew(false);
    setEditIndex(index);
  };

  const closeEdit = () => {
    setEditIndex(null);
    setIsNew(false);
  };

  const saveProject = () => {
    if (isNew) {
      updateProjects([...data.projects, editForm]);
    } else if (editIndex !== null && editIndex >= 0) {
      const updated = [...data.projects];
      updated[editIndex] = editForm;
      updateProjects(updated);
    }
    closeEdit();
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      updateProjects(data.projects.filter((_, i) => i !== deleteIndex));
      setDeleteIndex(null);
    }
  };

  const moveProject = (index: number, direction: -1 | 1) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= data.projects.length) return;
    const updated = [...data.projects];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    updateProjects(updated);
  };

  // Project edit form
  if (editIndex !== null) {
    return (
      <div className="admin-card">
        <div className="admin-card-header">
          <h3>{isNew ? "Add New Project" : `Edit: ${editForm.name || "Untitled"}`}</h3>
          <button
            type="button"
            className="admin-btn admin-btn-outline admin-btn-icon"
            onClick={closeEdit}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="admin-grid-2">
          <div className="admin-field">
            <label className="admin-label">Project Name</label>
            <input
              className="admin-input"
              value={editForm.name}
              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              placeholder="e.g. GraphSentinel"
              disabled={disabled}
            />
          </div>
          <div className="admin-field">
            <label className="admin-label">Meta Subtitle</label>
            <input
              className="admin-input"
              value={editForm.meta}
              onChange={(e) => setEditForm({ ...editForm, meta: e.target.value })}
              placeholder="e.g. Cyber Defense - Python, GNN"
              disabled={disabled}
            />
          </div>
        </div>

        <div className="admin-grid-2">
          <div className="admin-field">
            <label className="admin-label">Icon</label>
            <IconPicker
              value={editForm.icon}
              onChange={(icon) => setEditForm({ ...editForm, icon })}
              disabled={disabled}
            />
          </div>
          <div className="admin-field">
            <label className="admin-label">Visual Type</label>
            <select
              className="admin-select"
              value={editForm.visual}
              onChange={(e) => setEditForm({ ...editForm, visual: e.target.value as ProjectVisual })}
              disabled={disabled}
            >
              {VISUAL_OPTIONS.map((v) => (
                <option key={v} value={v}>
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="admin-field">
          <label className="admin-label">Description</label>
          <textarea
            className="admin-textarea"
            value={editForm.description}
            onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
            rows={4}
            placeholder="Describe the project…"
            disabled={disabled}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">GitHub / Project URL</label>
          <input
            className="admin-input"
            value={editForm.href}
            onChange={(e) => setEditForm({ ...editForm, href: e.target.value })}
            placeholder="https://github.com/…"
            disabled={disabled}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Metrics</label>
          <TagEditor
            tags={editForm.metrics}
            onChange={(metrics) => setEditForm({ ...editForm, metrics })}
            placeholder="Add metric…"
            disabled={disabled}
          />
        </div>

        <div className="admin-field">
          <label className="admin-label">Tech Stack</label>
          <TagEditor
            tags={editForm.stack}
            onChange={(stack) => setEditForm({ ...editForm, stack })}
            placeholder="Add tech…"
            disabled={disabled}
          />
        </div>

        {!disabled && (
          <div className="admin-actions">
            <button
              type="button"
              className="admin-btn admin-btn-primary"
              onClick={saveProject}
              disabled={!editForm.name.trim()}
            >
              <Save size={16} />
              {isNew ? "Add Project" : "Save Changes"}
            </button>
            <button
              type="button"
              className="admin-btn admin-btn-outline"
              onClick={closeEdit}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    );
  }

  // Project list view
  return (
    <>
      {data.projects.map((project, index) => (
        <div className="project-list-item" key={project.id}>
          <div className="project-list-icon">
            <IconResolver iconName={project.icon} size={18} />
          </div>
          <div className="project-list-info">
            <h4>{project.name}</h4>
            <p>{project.meta}</p>
          </div>
          {!disabled && (
            <div className="project-list-actions">
              <button
                type="button"
                className="admin-btn admin-btn-outline admin-btn-icon"
                onClick={() => moveProject(index, -1)}
                disabled={index === 0}
                aria-label="Move up"
              >
                <ChevronUp size={14} />
              </button>
              <button
                type="button"
                className="admin-btn admin-btn-outline admin-btn-icon"
                onClick={() => moveProject(index, 1)}
                disabled={index === data.projects.length - 1}
                aria-label="Move down"
              >
                <ChevronDown size={14} />
              </button>
              <button
                type="button"
                className="admin-btn admin-btn-outline admin-btn-icon"
                onClick={() => openEdit(index)}
                aria-label="Edit"
              >
                <Pencil size={14} />
              </button>
              <button
                type="button"
                className="admin-btn admin-btn-danger admin-btn-icon"
                onClick={() => setDeleteIndex(index)}
                aria-label="Delete"
              >
                <Trash2 size={14} />
              </button>
            </div>
          )}
        </div>
      ))}

      {!disabled && (
        <button
          type="button"
          className="admin-btn admin-btn-outline"
          onClick={openAdd}
          style={{ marginTop: 8 }}
        >
          <Plus size={16} />
          Add Project
        </button>
      )}

      {deleteIndex !== null && (
        <ConfirmModal
          title="Delete Project"
          message={`Are you sure you want to delete "${data.projects[deleteIndex]?.name}"? This action cannot be undone.`}
          confirmLabel="Delete"
          onConfirm={confirmDelete}
          onCancel={() => setDeleteIndex(null)}
          danger
        />
      )}
    </>
  );
}
