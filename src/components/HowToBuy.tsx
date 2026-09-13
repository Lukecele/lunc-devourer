"use client";

import React from "react";
import { Wallet, ArrowRightLeft, ExternalLink, Flame } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

export default function HowToBuy() {
  const steps = [
    {
      step: "Step 1",
      title: "Get a Terra Classic Wallet",
      desc: "Install Terra Station Wallet or Keplr Wallet browser extension. Ensure it is connected to the Terra Classic (LUNC) mainnet.",
      icon: <Wallet size={24} color="var(--primary-gold)" />,
    },
    {
      step: "Step 2",
      title: "Fund with $LUNC",
      desc: `Transfer $LUNC tokens to your wallet address to use for purchasing ${TOKEN_CONFIG.ticker} and paying gas fees.`,
      icon: <Flame size={24} color="var(--primary-orange)" />,
    },
    {
      step: "Step 3",
      title: "Open Terraport LaunchPump",
      desc: `Navigate to ${TOKEN_CONFIG.launchpumpUrl} and connect your Terra Station or Keplr wallet.`,
      icon: <ExternalLink size={24} color="var(--lunc-blue)" />,
    },
    {
      step: "Step 4",
      title: `Swap for ${TOKEN_CONFIG.ticker} & Feed the Fire`,
      desc: `Select ${TOKEN_CONFIG.ticker}, enter the amount of $LUNC, and execute the swap. Your trade automatically contributes to the 24h burn engine!`,
      icon: <ArrowRightLeft size={24} color="#10B981" />,
    },
  ];

  return (
    <section id="how-to-buy" style={{ padding: "80px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div className="badge-fire" style={{ marginBottom: "12px" }}>
            <Flame size={14} color="var(--primary-gold)" />
            <span>QUICK START GUIDE</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>
            HOW TO BUY ON TERRAPORT LAUNCHPUMP
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: "640px", margin: "10px auto 0 auto" }}>
            Join the Devour Army in 4 simple steps and start feeding the Terra Classic burn engine.
          </p>
          <div style={{ background: "rgba(255, 77, 0, 0.08)", border: "1px solid rgba(255, 77, 0, 0.25)", borderRadius: "10px", padding: "12px 18px", maxWidth: "600px", margin: "16px auto 0 auto", color: "#FFB088", fontSize: "0.85rem" }}>
            ℹ️ <em>Terraport LaunchPump has ceased operations. The guide below is preserved strictly as a historical product design archive.</em>
          </div>
        </div>

        {/* Steps Cards Grid */}
        <div className="grid-4" style={{ marginBottom: "48px" }}>
          {steps.map((s) => (
            <div
              key={s.step}
              className="glass-card"
              style={{
                padding: "28px 22px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="badge-fire" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>
                  {s.step}
                </span>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px", borderRadius: "10px" }}>
                  {s.icon}
                </div>
              </div>

              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFF" }}>
                {s.title}
              </h3>

              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.5, flex: 1 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div
          className="glass-card card-breathe"
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            padding: "32px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFF" }}>
            READY TO JOIN THE LUNC DEVOUR ARMY?
          </h3>
          <p style={{ color: "var(--text-muted)", maxWidth: "550px", fontSize: "0.95rem" }}>
            Every trade generates creator fees that permanently incinerate $LUNC. Trade {TOKEN_CONFIG.ticker} live on Terraport LaunchPump now.
          </p>
          <a
            href={TOKEN_CONFIG.launchpumpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "16px 36px", fontSize: "1.1rem" }}
          >
            <Flame size={22} />
            <span>Launch App on Terraport</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
