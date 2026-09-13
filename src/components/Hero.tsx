"use client";

import React from "react";
import Image from "next/image";
import { Flame, ExternalLink, Copy, Check, ShieldCheck, Zap, ArrowDown } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

interface HeroProps {
  onCopyCA: () => void;
  copied: boolean;
}

export default function Hero({ onCopyCA, copied }: HeroProps) {
  const hasContractAddress = Boolean(TOKEN_CONFIG.contractAddress);

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      {/* Background Ambient Glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255, 77, 0, 0.25) 0%, rgba(255, 157, 0, 0.08) 40%, rgba(0, 0, 0, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* Top Announcement Badge */}
        <div style={{ display: "inline-flex", marginBottom: "24px" }}>
          <div className="badge-fire card-breathe" style={{ padding: "8px 18px", gap: "10px" }}>
            <span className="pulse-dot" />
            <span>TERRAPORT LAUNCHPUMP EXCLUSIVE</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ color: "#FFF", fontWeight: 700 }}>24H AUTOMATED DEVOUR</span>
          </div>
        </div>

        {/* Dragon Emblem Visual */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <div
            className="flame-glow"
            style={{
              position: "relative",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              padding: "6px",
              background: "linear-gradient(135deg, #FF9D00, #FF4D00, #00A3FF)",
              boxShadow: "0 0 50px rgba(255, 77, 0, 0.5), 0 0 100px rgba(255, 157, 0, 0.25)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid #0F0D15",
              }}
            >
              <Image
                src={TOKEN_CONFIG.logoPath}
                alt={`${TOKEN_CONFIG.name} Emblem`}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Floating Token Tag */}
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #FF4D00, #D82B00)",
                color: "#FFF",
                fontWeight: 900,
                fontSize: "0.85rem",
                padding: "4px 16px",
                borderRadius: "20px",
                boxShadow: "0 4px 15px rgba(255, 77, 0, 0.6)",
                whiteSpace: "nowrap",
                letterSpacing: "1px",
              }}
            >
              {TOKEN_CONFIG.ticker} {TOKEN_CONFIG.symbol}
            </div>
          </div>
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-1px",
            marginBottom: "20px",
            maxWidth: "960px",
            margin: "0 auto 20px auto",
          }}
        >
          THE ULTIMATE <span className="gradient-text-fire">LUNC BURNING BEAST</span> ON TERRA CLASSIC
        </h1>

        {/* Hero Subtitle */}
        <p
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
            color: "var(--text-muted)",
            maxWidth: "780px",
            margin: "0 auto 36px auto",
            fontWeight: 400,
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "#FFF" }}>{TOKEN_CONFIG.name} ({TOKEN_CONFIG.ticker})</strong> feeds on trading volume to permanently incinerate $LUNC supply. 
          A portion of all Creator Swap Fees generated on LaunchPump is automatically used to buy & burn $LUNC every 24 hours.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <a
            href={TOKEN_CONFIG.launchpumpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "16px 36px", fontSize: "1.1rem" }}
          >
            <Flame size={22} />
            <span>Trade {TOKEN_CONFIG.ticker} on LaunchPump</span>
            <ExternalLink size={18} />
          </a>

          <a href="#calculator" className="btn-secondary" style={{ padding: "16px 32px", fontSize: "1.05rem" }}>
            <Zap size={20} color="var(--primary-gold)" />
            <span>Calculate Burn Projection</span>
          </a>
        </div>

        {/* Contract Address Interactive Banner */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: "16px 20px",
            background: "rgba(15, 13, 21, 0.9)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(255, 77, 0, 0.3)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", textAlign: "left", flex: 1, minWidth: "220px" }}>
            <ShieldCheck size={22} color="var(--primary-gold)" />
            <div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", textTransform: "uppercase", letterSpacing: "1px" }}>
                Official Contract Address (CW20)
              </span>
              <span className="font-mono" style={{ fontSize: "0.95rem", color: "#FFF", fontWeight: 600, wordBreak: "break-all" }}>
                {hasContractAddress ? TOKEN_CONFIG.contractAddress : "Live on Terraport LaunchPump"}
              </span>
            </div>
          </div>

          {hasContractAddress ? (
            <button
              onClick={onCopyCA}
              className="btn-primary"
              style={{
                padding: "10px 20px",
                fontSize: "0.85rem",
                borderRadius: "var(--radius-md)",
                whiteSpace: "nowrap",
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span>{copied ? "Copied!" : "Copy CA"}</span>
            </button>
          ) : (
            <a
              href={TOKEN_CONFIG.launchpumpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: "10px 20px",
                fontSize: "0.85rem",
                borderRadius: "var(--radius-md)",
                whiteSpace: "nowrap",
              }}
            >
              <ExternalLink size={16} />
              <span>View on LaunchPump</span>
            </a>
          )}
        </div>

        {/* Scroll Indicator */}
        <div style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}>
          <a
            href="#mechanic"
            style={{
              color: "var(--text-dim)",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.85rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
          >
            <span>EXPLORE DEVOUR MECHANIC</span>
            <ArrowDown size={16} style={{ animation: "bounce 2s infinite" }} />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
}
