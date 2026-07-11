"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Code2,
  FolderKanban,
  Trophy,
  Contact,
  ExternalLink,
  LogOut,
  Save,
  AlertTriangle,
  Loader2
} from "lucide-react";
import { useToast } from "@/components/admin/Toast";
import { HeroAboutEditor } from "@/components/admin/HeroAboutEditor";
import { SkillsEditor } from "@/components/admin/SkillsEditor";
import { ProjectsEditor } from "@/components/admin/ProjectsEditor";
import { AchievementsEducationEditor } from "@/components/admin/AchievementsEducationEditor";
import { ContactMetaEditor } from "@/components/admin/ContactMetaEditor";
import type { PortfolioData } from "@/lib/schema/portfolio.schema";
// ... (omitted unchanged lines for replacement targeting)

type Tab = "hero" | "skills" | "projects" | "achievements" | "contact";

const tabs: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "hero", label: "Hero & About", icon: LayoutDashboard },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "achievements", label: "Achievements & Education", icon: Trophy },
  { id: "contact", label: "Contact & Meta", icon: Contact }
];


export default function AdminDashboardPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<Tab>("hero");
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [writable, setWritable] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);

  // Load data on mount
  useEffect(() => {
    fetch("/api/admin/update")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load data");
        return res.json();
      })
      .then((json) => {
        setData(json.data);
        setWritable(json.writable);
        setLoading(false);
      })
      .catch((err) => {
        showToast(err.message, "error");
        setLoading(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDataChange = useCallback((updated: PortfolioData) => {
    setData(updated);
    setHasChanges(true);
  }, []);

  const handleSave = async () => {
    if (!data || !writable) return;
    setSaving(true);

    try {
      const res = await fetch("/api/admin/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const json = await res.json();

      if (res.ok && json.success) {
        showToast("Changes saved successfully!", "success");
        setHasChanges(false);
      } else if (res.status === 403) {
        showToast(json.error || "Read-only in production", "error");
      } else {
        // Zod validation errors
        const errorMsg = json.errors
          ? json.errors.map((e: { path: string[]; message: string }) => `${e.path.join(".")}: ${e.message}`).join("; ")
          : json.error || "Save failed";
        showToast(errorMsg, "error");
      }
    } catch {
      showToast("Network error. Please try again.", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="login-page">
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-muted)" }}>
          <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} />
          Loading dashboard…
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="login-page">
        <div style={{ color: "#ff6b6b" }}>Failed to load portfolio data. Check the console for errors.</div>
      </div>
    );
  }

  const disabled = !writable;

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2>CMS</h2>
          <span>Admin</span>
        </div>
        <div className="admin-sidebar-divider" />

        <nav>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                className={`admin-tab-btn${activeTab === tab.id ? " is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="admin-tab-icon"><Icon size={18} /></span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="admin-sidebar-divider" />
        <div className="admin-sidebar-footer">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="admin-sidebar-link"
          >
            <span className="admin-tab-icon"><ExternalLink size={16} /></span>
            <span>View Site</span>
          </a>
          <button type="button" className="admin-sidebar-link danger" onClick={handleLogout}>
            <span className="admin-tab-icon"><LogOut size={16} /></span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-main-header">
          <div>
            <h1>{tabs.find((t) => t.id === activeTab)?.label}</h1>
            <p>Edit your portfolio content below{disabled ? " (read-only)" : ""}</p>
          </div>
          {!disabled && (
            <button
              type="button"
              className="admin-btn admin-btn-primary"
              onClick={handleSave}
              disabled={saving || !hasChanges}
            >
              {saving ? (
                <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
              ) : (
                <Save size={16} />
              )}
              {saving ? "Saving…" : "Save Changes"}
            </button>
          )}
        </div>

        {disabled && (
          <div className="admin-readonly-banner">
            <AlertTriangle size={20} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <strong>Read-only mode.</strong> Content editing is only available in local development.
              Run <code>npm run dev</code> locally, make your edits at <code>/admin</code>, then commit and push to deploy.
            </div>
          </div>
        )}

        {activeTab === "hero" && <HeroAboutEditor data={data} onChange={handleDataChange} disabled={disabled} />}
        {activeTab === "skills" && <SkillsEditor data={data} onChange={handleDataChange} disabled={disabled} />}
        {activeTab === "projects" && <ProjectsEditor data={data} onChange={handleDataChange} disabled={disabled} />}
        {activeTab === "achievements" && <AchievementsEducationEditor data={data} onChange={handleDataChange} disabled={disabled} />}
        {activeTab === "contact" && <ContactMetaEditor data={data} onChange={handleDataChange} disabled={disabled} />}
      </main>
    </div>
  );
}
