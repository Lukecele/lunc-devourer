"use client";

import React, { useState, useEffect } from "react";
import { Flame, Clock, ShieldAlert, Coins, RefreshCw, Sparkles, ExternalLink, Code2 } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

export default function DevourDashboard() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  // Live 24-hour cycle countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="devour-stats" style={{ padding: "60px 0" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="badge-fire" style={{ marginBottom: "12px" }}>
            <Flame size={14} color="var(--primary-gold)" />
            <span>PROTOCOL FEE SPLIT ENGINE</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            DEVOUR DASHBOARD & METRICS
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "660px", margin: "8px auto 0 auto" }}>
            <strong>{TOKEN_CONFIG.swapFeePercent}% Swap Fees</strong> generated on LaunchPump are split 50/50: <strong>50% to buy & burn $LUNC</strong> every 24 hours, and <strong>50% to Development & Growth</strong>.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid-4">
          {/* Card 1: Burn Cycle Countdown */}
          <div className="glass-card card-breathe" style={{ padding: "28px", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                Next 24h Devour Trigger
              </span>
              <div style={{ background: "rgba(255, 77, 0, 0.2)", padding: "8px", borderRadius: "12px", border: "1px solid rgba(255, 77, 0, 0.4)" }}>
                <Clock size={20} color="var(--primary-gold)" />
              </div>
            </div>
            <div className="font-mono gradient-text-fire" style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.3rem)", fontWeight: 900, lineHeight: 1.1 }}>
              {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <RefreshCw size={14} style={{ animation: "spin 10s linear infinite" }} />
              <span>Automated 24h Buy & Burn Cycle</span>
            </div>
          </div>

          {/* Card 2: Swap Fee Split */}
          <div className="glass-card" style={{ padding: "28px", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                Swap Fee Structure
              </span>
              <div style={{ background: "rgba(255, 157, 0, 0.15)", padding: "8px", borderRadius: "12px", border: "1px solid rgba(255, 157, 0, 0.3)" }}>
                <ShieldAlert size={20} color="var(--primary-gold)" />
              </div>
            </div>
            <div className="font-mono" style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.3rem)", fontWeight: 900, color: "var(--primary-gold)" }}>
              {TOKEN_CONFIG.swapFeePercent}% SWAP FEE
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px", fontSize: "0.8rem", color: "var(--text-main)", fontWeight: 600 }}>
              <span style={{ color: "#10B981" }}>🔥 50% Burn (1.5%)</span>
              <span>•</span>
              <span style={{ color: "var(--lunc-blue)" }}>🛠️ 50% Dev (1.5%)</span>
            </div>
          </div>

          {/* Card 3: Burn Target */}
          <div className="glass-card" style={{ padding: "28px", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                Burn Target Asset
              </span>
              <div style={{ background: "rgba(0, 163, 255, 0.15)", padding: "8px", borderRadius: "12px", border: "1px solid rgba(0, 163, 255, 0.3)" }}>
                <Coins size={20} color="var(--lunc-blue)" />
              </div>
            </div>
            <div className="font-mono gradient-text-lunc" style={{ fontSize: "clamp(1.6rem, 2.2vw, 2.1rem)", fontWeight: 900 }}>
              $LUNC BURN
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <Sparkles size={14} color="var(--lunc-blue)" />
              <span>Terra Classic Incineration Address</span>
            </div>
          </div>

          {/* Card 4: Launch Platform Status */}
          <div className="glass-card" style={{ padding: "28px", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                Launch Platform
              </span>
              <div style={{ background: "rgba(255, 157, 0, 0.15)", padding: "8px", borderRadius: "12px", border: "1px solid rgba(255, 157, 0, 0.3)" }}>
                <Flame size={20} color="var(--primary-gold)" />
              </div>
            </div>
            <div style={{ fontSize: "clamp(1.3rem, 1.8vw, 1.6rem)", fontWeight: 800, color: "#FFF" }}>
              LAUNCHPUMP
            </div>
            <a
              href={TOKEN_CONFIG.launchpumpUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "12px",
                fontSize: "0.8rem",
                color: "var(--primary-gold)",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              <span>terraport.finance/launchpump</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
