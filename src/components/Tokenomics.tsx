"use client";

import React from "react";
import { PieChart, Lock, Flame, Code2 } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

export default function Tokenomics() {
  const specs = [
    { label: "Token Name", value: TOKEN_CONFIG.name },
    { label: "Token Symbol", value: `${TOKEN_CONFIG.ticker} / ${TOKEN_CONFIG.symbol}` },
    { label: "Blockchain Network", value: "Terra Classic (LUNC CW20)" },
    { label: "Launch Platform", value: "Terraport Finance LaunchPump" },
    { label: "Swap Fee", value: `${TOKEN_CONFIG.swapFeePercent}% Total Swap Fee` },
    { label: "LUNC Burn Share", value: "50% of Fees (1.5% Volume)" },
    { label: "Development Share", value: "50% of Fees (1.5% Volume)" },
    { label: "Devour Execution Cycle", value: "Every 24 Hours Automated" },
  ];

  return (
    <section id="tokenomics" style={{ padding: "80px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div className="badge-fire" style={{ marginBottom: "12px" }}>
            <PieChart size={14} color="var(--primary-gold)" />
            <span>BEAST ARCHITECTURE</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            TOKENOMICS & SPECIFICATIONS
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "660px", margin: "10px auto 0 auto" }}>
            Clean protocol economics featuring a <strong>3% Swap Fee</strong> on LaunchPump: 50% for daily $LUNC supply destruction and 50% for project development.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid-4" style={{ marginBottom: "48px" }}>
          {specs.map((item) => (
            <div
              key={item.label}
              className="glass-card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>
                {item.label}
              </span>
              <span className="font-mono" style={{ fontSize: "1.1rem", fontWeight: 800, color: "#FFF" }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Highlights banner */}
        <div
          className="glass-card"
          style={{
            padding: "36px",
            background: "linear-gradient(135deg, rgba(255, 77, 0, 0.08) 0%, rgba(15, 13, 21, 0.9) 100%)",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ background: "rgba(255, 77, 0, 0.2)", padding: "12px", borderRadius: "12px", border: "1px solid rgba(255,77,0,0.3)" }}>
              <Flame size={24} color="var(--primary-gold)" />
            </div>
            <div>
              <h4 style={{ color: "#FFF", fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}>
                50% LUNC Burn Engine
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Half of all Swap Fees (1.5% of total volume) is dedicated exclusively to buying back $LUNC from the open market every 24 hours and sending it to the burn address.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ background: "rgba(16, 185, 129, 0.2)", padding: "12px", borderRadius: "12px", border: "1px solid rgba(16,185,129,0.3)" }}>
              <Code2 size={24} color="#10B981" />
            </div>
            <div>
              <h4 style={{ color: "#FFF", fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}>
                50% Development & Growth
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                The remaining half of Swap Fees (1.5% of total volume) funds continuous protocol development, marketing, audit security, and DEX liquidity growth.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{ background: "rgba(0, 163, 255, 0.2)", padding: "12px", borderRadius: "12px", border: "1px solid rgba(0,163,255,0.3)" }}>
              <Lock size={24} color="var(--lunc-blue)" />
            </div>
            <div>
              <h4 style={{ color: "#FFF", fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}>
                LaunchPump Protocol Security
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Deployed on Terraport Finance LaunchPump ensuring transparent bonding curve liquidity and automated graduation to the main DEX pool.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .glass-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
