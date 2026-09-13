"use client";

import React, { useState } from "react";
import EmberParticlesCanvas from "@/components/EmberParticlesCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DevourDashboard from "@/components/DevourDashboard";
import DevourCalculator from "@/components/DevourCalculator";
import MechanicFlow from "@/components/MechanicFlow";
import Tokenomics from "@/components/Tokenomics";
import HowToBuy from "@/components/HowToBuy";
import LiveBurnExplorer from "@/components/LiveBurnExplorer";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyCA = () => {
    if (!TOKEN_CONFIG.contractAddress) return;
    navigator.clipboard.writeText(TOKEN_CONFIG.contractAddress);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => setCopied(false), 2500);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Dynamic Ember Particle Background */}
      <EmberParticlesCanvas />

      {/* Notice & Status Banner */}
      <div style={{ background: "linear-gradient(90deg, rgba(255,77,0,0.2) 0%, rgba(255,157,0,0.2) 100%)", borderBottom: "1px solid rgba(255, 77, 0, 0.35)", padding: "12px 16px", textAlign: "center", fontSize: "0.86rem", color: "#FFD2B2", position: "relative", zIndex: 100 }}>
        <span>⚠️ <strong>Archived Project Showcase & Mathematical Simulator</strong>: The $DEVOUR token was never deployed due to the permanent shutdown of Terraport LaunchPump. This interface is open-source and preserved strictly as a Web3 UI showcase and burn fee simulator.</span>
      </div>

      {/* Header */}
      <Navbar onCopyCA={handleCopyCA} copied={copied} />

      {/* Main Hero Banner */}
      <Hero onCopyCA={handleCopyCA} copied={copied} />

      {/* Devour Metrics Dashboard */}
      <DevourDashboard />

      {/* Devour Mechanic Flow */}
      <MechanicFlow />

      {/* Calculator Projection Engine */}
      <DevourCalculator />

      {/* Tokenomics & TerraPump Specs */}
      <Tokenomics />

      {/* Step-by-Step How to Buy Guide */}
      <HowToBuy />

      {/* On-Chain Burn Verification Engine */}
      <LiveBurnExplorer />

      {/* Footer */}
      <Footer />

      {/* Toast Feedback */}
      {showToast && (
        <div className="toast-notice">
          <CheckCircle size={20} color="#10B981" />
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>Contract Address Copied!</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Ready to paste in Terra Station or Terraport TerraPump
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
