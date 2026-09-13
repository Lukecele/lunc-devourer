"use client";

import React, { useState } from "react";
import { Calculator, Flame, Sparkles, Sliders } from "lucide-react";
import confetti from "canvas-confetti";
import { TOKEN_CONFIG } from "@/config/token";

export default function DevourCalculator() {
  const [dailyVolume, setDailyVolume] = useState<number>(50000); // USD
  const [luncPrice, setLuncPrice] = useState<number>(0.000085); // USD per LUNC

  // 3% Swap Fee = 1.5% Burn + 1.5% Dev
  const totalSwapFeeUsd = dailyVolume * (TOKEN_CONFIG.swapFeePercent / 100);
  const burnUsd = dailyVolume * (TOKEN_CONFIG.swapFeePercent / 100) * (TOKEN_CONFIG.burnSharePercent / 100);
  const devUsd = dailyVolume * (TOKEN_CONFIG.swapFeePercent / 100) * (TOKEN_CONFIG.devSharePercent / 100);

  // Daily LUNC Burned = burnUsd / luncPrice
  const dailyLuncBurned = Math.floor(burnUsd / luncPrice);
  const monthlyLuncBurned = dailyLuncBurned * 30;
  const yearlyLuncBurned = dailyLuncBurned * 365;

  const triggerIncinerateSimulation = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#FF4D00", "#FF9D00", "#10B981", "#FFFFFF"],
    });
  };

  return (
    <section id="calculator" style={{ padding: "80px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="badge-fire" style={{ marginBottom: "12px" }}>
            <Calculator size={14} color="var(--primary-gold)" />
            <span>FEE SPLIT & BURN CALCULATOR</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            3% SWAP FEE CALCULATOR
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "680px", margin: "10px auto 0 auto" }}>
            Calculates exact 24h allocations based on <strong>3% Swap Fees</strong> on LaunchPump: 50% (1.5%) for $LUNC Burn & 50% (1.5%) for Development.
          </p>
        </div>

        {/* Calculator Layout */}
        <div
          className="glass-card"
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Controls Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
                <label style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFF", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Sliders size={18} color="var(--primary-gold)" />
                  24h LaunchPump Trading Volume
                </label>
                <span className="font-mono" style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--primary-gold)" }}>
                  ${dailyVolume.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={1000000}
                step={5000}
                value={dailyVolume}
                onChange={(e) => setDailyVolume(Number(e.target.value))}
                style={{
                  width: "100%",
                  height: "8px",
                  borderRadius: "4px",
                  outline: "none",
                  accentColor: "var(--primary-orange)",
                  cursor: "pointer",
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-dim)", marginTop: "6px" }}>
                <span>$5K</span>
                <span>$250K</span>
                <span>$500K</span>
                <span>$1M+</span>
              </div>
            </div>

            {/* Quick volume preset pills */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[10000, 50000, 250000, 1000000].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setDailyVolume(preset)}
                  style={{
                    background: dailyVolume === preset ? "rgba(255, 77, 0, 0.25)" : "rgba(255, 255, 255, 0.05)",
                    border: dailyVolume === preset ? "1px solid var(--primary-orange)" : "1px solid rgba(255, 255, 255, 0.1)",
                    color: dailyVolume === preset ? "#FFF" : "var(--text-muted)",
                    padding: "8px 14px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  ${(preset / 1000).toLocaleString()}K / day
                </button>
              ))}
            </div>

            {/* Protocol Fee Breakdown Box */}
            <div style={{ background: "rgba(0, 0, 0, 0.35)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                <span style={{ color: "var(--text-muted)" }}>Total Swap Fee Rate:</span>
                <span style={{ color: "#FFF", fontWeight: 700 }}>{TOKEN_CONFIG.swapFeePercent}%</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem" }}>
                <span style={{ color: "var(--text-muted)" }}>24h Total Swap Fees:</span>
                <span className="font-mono" style={{ color: "var(--primary-gold)", fontWeight: 700 }}>${totalSwapFeeUsd.toLocaleString()} USD</span>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px", display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                <span style={{ color: "#10B981", fontWeight: 600 }}>🔥 50% LUNC Burn Share:</span>
                <span className="font-mono" style={{ color: "#10B981", fontWeight: 700 }}>${burnUsd.toLocaleString()} USD</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                <span style={{ color: "var(--lunc-blue)", fontWeight: 600 }}>🛠️ 50% Development Share:</span>
                <span className="font-mono" style={{ color: "var(--lunc-blue)", fontWeight: 700 }}>${devUsd.toLocaleString()} USD</span>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div
            style={{
              background: "linear-gradient(145deg, rgba(255, 77, 0, 0.1) 0%, rgba(15, 13, 21, 0.8) 100%)",
              border: "1px solid rgba(255, 77, 0, 0.3)",
              borderRadius: "var(--radius-md)",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Flame size={24} color="var(--primary-gold)" />
              <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#FFF" }}>
                24H BURN & DEV ALLOCATION
              </span>
            </div>

            <div>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", display: "block" }}>
                Daily LUNC Burned (50% Fee Share)
              </span>
              <div className="font-mono gradient-text-fire" style={{ fontSize: "1.9rem", fontWeight: 900, marginTop: "4px" }}>
                🔥 {dailyLuncBurned.toLocaleString()} LUNC
              </div>
              <span style={{ fontSize: "0.78rem", color: "#10B981", display: "block", marginTop: "2px" }}>
                Equivalenti a ${burnUsd.toLocaleString()} USD acquistati & bruciati ogni 24h
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <div style={{ background: "rgba(0,0,0,0.3)", padding: "14px", borderRadius: "10px" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>30-Day LUNC Burn</span>
                <div className="font-mono" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#FFF", marginTop: "2px" }}>
                  {monthlyLuncBurned.toLocaleString()}
                </div>
              </div>
              <div style={{ background: "rgba(0,0,0,0.3)", padding: "14px", borderRadius: "10px" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>30-Day Dev Fund</span>
                <div className="font-mono" style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--lunc-blue)", marginTop: "2px" }}>
                  ${(devUsd * 30).toLocaleString()} USD
                </div>
              </div>
            </div>

            <button
              onClick={triggerIncinerateSimulation}
              className="btn-primary"
              style={{ width: "100%", padding: "14px", fontSize: "0.95rem" }}
            >
              <Sparkles size={18} />
              <span>Simula Calcolo Swap Fees</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 850px) {
          .glass-card {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
