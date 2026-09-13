"use client";

import React from "react";
import { Flame, ExternalLink, ShieldCheck, History, Info } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

export default function LiveBurnExplorer() {
  return (
    <section style={{ padding: "60px 0 80px 0", background: "rgba(15, 13, 21, 0.3)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="badge-fire" style={{ marginBottom: "12px" }}>
            <History size={14} color="var(--primary-gold)" />
            <span>TRANSPARENT ON-CHAIN VERIFICATION</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            ON-CHAIN DEVOUR LOGS & VERIFICATION
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "620px", margin: "8px auto 0 auto" }}>
            50% of Swap Fees buy & burn $LUNC directly into Terra Classic&apos;s burn address. All transactions are 100% public on Terra Finder.
          </p>
        </div>

        {/* Verification Card Container */}
        <div
          className="glass-card"
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {/* Burn Target Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
              paddingBottom: "24px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <ShieldCheck size={28} color="#10B981" />
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#FFF" }}>
                  Verified Terra Classic Burn Address
                </h3>
                <span className="font-mono" style={{ fontSize: "0.88rem", color: "var(--primary-gold)", wordBreak: "break-all" }}>
                  {TOKEN_CONFIG.burnAddress}
                </span>
              </div>
            </div>

            <a
              href={`https://finder.terra.money/classic/address/${TOKEN_CONFIG.burnAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: "10px 18px", fontSize: "0.85rem" }}
            >
              <span>Verify on Terra Finder</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Real Status Notice */}
          <div
            style={{
              background: "rgba(255, 77, 0, 0.06)",
              border: "1px solid rgba(255, 77, 0, 0.2)",
              borderRadius: "var(--radius-md)",
              padding: "24px",
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <div style={{ background: "rgba(255, 77, 0, 0.2)", padding: "10px", borderRadius: "10px" }}>
              <Info size={22} color="var(--primary-gold)" />
            </div>
            <div>
              <h4 style={{ color: "#FFF", fontSize: "1.05rem", fontWeight: 700, marginBottom: "6px" }}>
                Automatic 24h Burn Trigger
              </h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                As soon as trading volume is generated on <strong>Terraport LaunchPump</strong>, Creator Swap Fees accumulate in the Devour Vault and execute automated market buybacks of $LUNC every 24 hours. All resulting transaction hashes will be displayed live on-chain.
              </p>
            </div>
          </div>

          {/* Direct CTA */}
          <div style={{ textAlign: "center" }}>
            <a
              href={TOKEN_CONFIG.launchpumpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "14px 32px", fontSize: "1rem" }}
            >
              <Flame size={20} />
              <span>Generate Devour Volume on LaunchPump</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
