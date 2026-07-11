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

      {visual === "social" ? (
        <>
          <span className="orbit-hub" />
          <span className="orbit-user user-one" />
          <span className="orbit-user user-two" />
          <span className="orbit-user user-three" />
          <span className="radar-sweep" />
          <span className="visual-label">Orbit Social Discover</span>
        </>
      ) : null}

      {visual === "shield" ? (
        <>
          <span className="shield-base" />
          <span className="redact-bar bar-a" />
          <span className="redact-bar bar-b" />
          <span className="scan-line" />
          <span className="visual-label">PII Shield Redact</span>
        </>
      ) : null}

      {visual === "cart" ? (
        <>
          <span className="cart-outline" />
          <span className="cart-item item-one" />
          <span className="cart-item item-two" />
          <span className="checkout-progress" />
          <span className="visual-label">Shopping Cart Flow</span>
        </>
      ) : null}
    </div>
  );
}
