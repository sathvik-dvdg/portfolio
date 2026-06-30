import type { Project } from "@/data/portfolio";

type ProjectVisualProps = {
  visual: Project["visual"];
};

export function ProjectVisual({ visual }: ProjectVisualProps) {
  return (
    <div className={`project-visual project-visual-${visual}`} aria-hidden="true">
      {visual === "graph" ? (
        <>
          <span className="node node-a" />
          <span className="node node-b" />
          <span className="node node-c" />
          <span className="node node-d danger" />
          <span className="edge edge-one" />
          <span className="edge edge-two" />
          <span className="edge edge-three" />
          <span className="visual-label">GraphSAGE IDS</span>
        </>
      ) : null}

      {visual === "health" ? (
        <>
          <span className="health-bar bar-one" />
          <span className="health-bar bar-two" />
          <span className="health-bar bar-three" />
          <span className="pulse-line" />
          <span className="visual-label">handoff validated</span>
        </>
      ) : null}

      {visual === "vision" ? (
        <>
          <span className="face-ring" />
          <span className="landmark lm-one" />
          <span className="landmark lm-two" />
          <span className="landmark lm-three" />
          <span className="landmark lm-four" />
          <span className="confidence">0.88</span>
          <span className="visual-label">stress probability</span>
        </>
      ) : null}

      {visual === "tasks" ? (
        <>
          <span className="task-line checked" />
          <span className="task-line" />
          <span className="task-line short" />
          <span className="auth-pill">JWT</span>
          <span className="visual-label">RBAC queue</span>
        </>
      ) : null}
    </div>
  );
}
