"use client";

import React from "react";
import Image from "next/image";
import { Flame, ExternalLink, ShieldCheck } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#070609",
        borderTop: "1px solid rgba(255, 77, 0, 0.15)",
        paddingTop: "60px",
        paddingBottom: "40px",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  position: "relative",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--primary-orange)",
                }}
              >
                <Image src={TOKEN_CONFIG.logoPath} alt={TOKEN_CONFIG.name} fill style={{ objectFit: "cover" }} />
              </div>
              <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "#FFF" }}>
                {TOKEN_CONFIG.name}
              </span>
            </div>

            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "340px" }}>
              {TOKEN_CONFIG.description}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="badge-fire" style={{ fontSize: "0.75rem" }}>
                🔥 100% AUTOMATED BURN
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={{ color: "#FFF", fontSize: "0.95rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Protocol
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <li>
                <a href="#devour-stats" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                  Burn Metrics
                </a>
              </li>
              <li>
                <a href="#mechanic" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                  Devour Mechanic
                </a>
              </li>
              <li>
                <a href="#calculator" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                  Burn Calculator
                </a>
              </li>
              <li>
                <a href="#tokenomics" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                  Tokenomics
                </a>
              </li>
            </ul>
          </div>

          {/* Launch & DEX Links */}
          <div>
            <h4 style={{ color: "#FFF", fontSize: "0.95rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Launch Platform
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <li>
                <a
                  href={TOKEN_CONFIG.launchpumpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--primary-gold)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <span>Terraport LaunchPump</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://terraport.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <span>Terraport Finance</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://finder.terra.money"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <span>Terra Finder Explorer</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Burn Target */}
          <div style={{ background: "rgba(15, 13, 21, 0.8)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid rgba(255, 77, 0, 0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <ShieldCheck size={18} color="#10B981" />
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFF" }}>
                Official LUNC Burn Address
              </span>
            </div>
            <p className="font-mono" style={{ fontSize: "0.78rem", color: "var(--primary-gold)", wordBreak: "break-all", background: "rgba(0,0,0,0.4)", padding: "8px", borderRadius: "6px" }}>
              {TOKEN_CONFIG.burnAddress}
            </p>
            <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", display: "block", marginTop: "8px" }}>
              50% of Swap fees are sent directly to this address.
            </span>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            textAlign: "center",
            fontSize: "0.8rem",
            color: "var(--text-dim)",
          }}
        >
          <p style={{ maxWidth: "800px" }}>
            Disclaimer: {TOKEN_CONFIG.name} ({TOKEN_CONFIG.ticker}) is a community token created on Terraport LaunchPump. Cryptocurrency trading involves financial risk.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>© {new Date().getFullYear()} {TOKEN_CONFIG.name}. Built with</span>
            <Flame size={14} color="var(--primary-orange)" />
            <span>for Terra Classic.</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
