"use client";

import React from "react";
import { Flame, ShoppingCart, Vault, FireExtinguisher, Sparkles, CheckCircle2 } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

export default function MechanicFlow() {
  const steps = [
    {
      num: "01",
      icon: <ShoppingCart size={28} color="var(--primary-gold)" />,
      title: "3% Swap Fee Generation",
      desc: `Community trades ${TOKEN_CONFIG.ticker} on Terraport Finance LaunchPump. Every buy and sell generates a 3% protocol Swap Fee.`,
      badge: "3% Swap Fee",
    },
    {
      num: "02",
      icon: <Vault size={28} color="var(--lunc-blue)" />,
      title: "Automated 50/50 Fee Split",
      desc: "Swap Fees are split automatically: 50% (1.5%) is routed to the LUNC Devour Burn Vault, and 50% (1.5%) to Development.",
      badge: "50/50 Fee Split",
    },
    {
      num: "03",
      icon: <Flame size={28} color="var(--primary-orange)" />,
      title: "24-Hour Devour Buyback",
      desc: "Every 24 hours, the Burn Vault executes an automated market buy of $LUNC on Terraport using its 50% fee share.",
      badge: "Market Buyback",
    },
    {
      num: "04",
      icon: <FireExtinguisher size={28} color="#FF1A00" />,
      title: "Permanent LUNC Incineration",
      desc: "Purchased $LUNC is transferred directly to Terra Classic's official burn address (terra1sk06e3...), incinerating supply forever.",
      badge: "Supply Reduction",
    },
  ];

  return (
    <section id="mechanic" style={{ padding: "80px 0", background: "rgba(15, 13, 21, 0.4)" }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div className="badge-fire" style={{ marginBottom: "12px" }}>
            <Sparkles size={14} color="var(--primary-gold)" />
            <span>BEAST ARCHITECTURE</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            HOW THE DEVOUR MECHANIC WORKS
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "680px", margin: "10px auto 0 auto" }}>
            A transparent <strong>3% Swap Fee model</strong>: 50% for daily $LUNC buyback & burn, and 50% for project development.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid-4" style={{ position: "relative" }}>
          {steps.map((step) => (
            <div
              key={step.num}
              className="glass-card"
              style={{
                padding: "32px 24px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "rgba(255, 77, 0, 0.3)",
                  }}
                >
                  {step.num}
                </span>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "14px",
                    padding: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.icon}
                </div>
              </div>

              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--primary-gold)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                {step.badge}
              </span>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFF", marginBottom: "12px" }}>
                {step.title}
              </h3>

              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verified Burn Link Note */}
        <div
          style={{
            marginTop: "48px",
            textAlign: "center",
            padding: "20px",
            background: "rgba(255, 77, 0, 0.08)",
            borderRadius: "var(--radius-md)",
            border: "1px solid rgba(255, 77, 0, 0.2)",
            maxWidth: "760px",
            margin: "48px auto 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <CheckCircle2 size={20} color="#10B981" />
          <span style={{ fontSize: "0.95rem", color: "#FFF" }}>
            Official Burn Destination: <strong className="font-mono" style={{ color: "var(--primary-gold)" }}>{TOKEN_CONFIG.burnAddress}</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
