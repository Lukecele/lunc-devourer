"use client";

import React from "react";
import { Compass, CheckCircle2, Circle, Flame } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

export default function Roadmap() {
  const phases = [
    {
      phase: "PHASE 1",
      title: "Genesis & Devour Ignition",
      status: "COMPLETED",
      items: [
        `Creation of ${TOKEN_CONFIG.ticker} token on Terraport Finance LaunchPump`,
        "Official LUNC Devourer Beast branding & custom logo release",
        "Initial community launch & burn vault initialization",
        "Launch of 24h automated 3% Swap Fee split engine (50% Burn / 50% Dev)",
      ],
    },
    {
      phase: "PHASE 2",
      title: "100 Million LUNC Milestone",
      status: "IN PROGRESS",
      items: [
        "First 100,000,000 $LUNC incinerated proof event",
        "Live web burn dashboard & real-time fee calculator",
        "Community Telegram Burn Bot integration with Terra Finder tx verification",
        "Co-marketing campaigns across Terra Classic ecosystem communities",
      ],
    },
    {
      phase: "PHASE 3",
      title: "LaunchPump DEX Graduation",
      status: "UPCOMING",
      items: [
        "Bonding curve completion & DEX graduation on Terraport Finance",
        "Permanent liquidity locking on Terraport main pool",
        "Devour Smart Vault V2 upgrade for zero-gas batch burning",
        "Coincodex & CoinGecko / CoinMarketCap tracking submissions",
      ],
    },
    {
      phase: "PHASE 4",
      title: "Global Ecosystem Expansion",
      status: "UPCOMING",
      items: [
        "Burn alliances with top Terra Classic L1 Validators",
        "Special Devour incinerator events based on milestone volume",
        "Cross-chain burn bridges for LUNC incinerator expansion",
        "Governance voting for future Devour Vault optimizations",
      ],
    },
  ];

  return (
    <section id="roadmap" style={{ padding: "80px 0", background: "rgba(15, 13, 21, 0.5)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="badge-fire" style={{ marginBottom: "12px" }}>
            <Compass size={14} color="var(--primary-gold)" />
            <span>INCINERATION PATHWAY</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            DEVOUR ROADMAP
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "660px", margin: "10px auto 0 auto" }}>
            Strategic milestones driving continuous trading volume and irreversible $LUNC burn scale.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid-2">
          {phases.map((p) => (
            <div
              key={p.phase}
              className="glass-card"
              style={{
                padding: "32px",
                position: "relative",
                border: p.status === "IN PROGRESS" ? "1px solid var(--primary-orange)" : "1px solid var(--bg-card-border)",
                boxShadow: p.status === "IN PROGRESS" ? "0 0 25px rgba(255, 77, 0, 0.15)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "var(--primary-gold)",
                    letterSpacing: "1px",
                  }}
                >
                  {p.phase}
                </span>

                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    background: p.status === "COMPLETED" ? "rgba(16, 185, 129, 0.15)" : p.status === "IN PROGRESS" ? "rgba(255, 77, 0, 0.2)" : "rgba(255, 255, 255, 0.06)",
                    color: p.status === "COMPLETED" ? "#10B981" : p.status === "IN PROGRESS" ? "var(--primary-gold)" : "var(--text-muted)",
                    border: p.status === "COMPLETED" ? "1px solid rgba(16, 185, 129, 0.3)" : p.status === "IN PROGRESS" ? "1px solid var(--primary-orange)" : "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {p.status}
                </span>
              </div>

              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#FFF", marginBottom: "20px" }}>
                {p.title}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {p.items.map((item, itemIdx) => (
                  <div key={itemIdx} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    {p.status === "COMPLETED" ? (
                      <CheckCircle2 size={18} color="#10B981" style={{ marginTop: "2px", flexShrink: 0 }} />
                    ) : p.status === "IN PROGRESS" && itemIdx === 0 ? (
                      <Flame size={18} color="var(--primary-orange)" style={{ marginTop: "2px", flexShrink: 0 }} />
                    ) : (
                      <Circle size={16} color="var(--text-dim)" style={{ marginTop: "3px", flexShrink: 0 }} />
                    )}
                    <span style={{ fontSize: "0.92rem", color: p.status === "COMPLETED" || (p.status === "IN PROGRESS" && itemIdx === 0) ? "var(--text-main)" : "var(--text-muted)", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
