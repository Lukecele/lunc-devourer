"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Flame, ExternalLink, Copy, Check, Menu, X } from "lucide-react";
import { TOKEN_CONFIG } from "@/config/token";

interface NavbarProps {
  onCopyCA: () => void;
  copied: boolean;
}

export default function Navbar({ onCopyCA, copied }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hasCA = Boolean(TOKEN_CONFIG.contractAddress);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        width: "100%",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(7, 6, 9, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255, 77, 0, 0.15)"
          : "1px solid transparent",
        padding: "16px 0",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo Brand */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div
            style={{
              position: "relative",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--primary-orange)",
              boxShadow: "0 0 15px rgba(255, 77, 0, 0.5)",
            }}
          >
            <Image
              src={TOKEN_CONFIG.logoPath}
              alt={TOKEN_CONFIG.name}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FFF", letterSpacing: "0.5px" }}>
                DEVOURER
              </span>
              <span className="badge-fire" style={{ padding: "2px 8px", fontSize: "0.7rem" }}>
                {TOKEN_CONFIG.ticker}
              </span>
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginTop: "-2px" }}>
              Terra Classic Burn Engine
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          <a href="#devour-stats" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            Burn Tracker
          </a>
          <a href="#mechanic" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            Devour Mechanic
          </a>
          <a href="#calculator" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            Burn Calculator
          </a>
          <a href="#tokenomics" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            Tokenomics
          </a>
          <a href="#how-to-buy" style={{ color: "var(--text-muted)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
            How to Buy
          </a>
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {hasCA && (
            <button
              onClick={onCopyCA}
              className="btn-secondary"
              style={{ padding: "10px 16px", fontSize: "0.85rem" }}
              title="Copy Contract Address"
            >
              {copied ? <Check size={16} color="#10B981" /> : <Copy size={16} />}
              <span style={{ display: "none" }} className="ca-btn-text">
                {copied ? "Copied!" : "CA"}
              </span>
            </button>
          )}

          <a
            href={TOKEN_CONFIG.launchpumpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "0.9rem" }}
          >
            <Flame size={18} />
            <span>Buy on LaunchPump</span>
            <ExternalLink size={14} style={{ opacity: 0.8 }} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "#FFF",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "rgba(15, 13, 21, 0.96)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--primary-orange)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <a href="#devour-stats" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFF", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}>
            🔥 Burn Tracker
          </a>
          <a href="#mechanic" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFF", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}>
            ⚙️ Devour Mechanic
          </a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFF", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}>
            🧮 Burn Calculator
          </a>
          <a href="#tokenomics" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFF", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}>
            📊 Tokenomics
          </a>
          <a href="#how-to-buy" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFF", textDecoration: "none", fontSize: "1.1rem", fontWeight: 600 }}>
            🛒 How to Buy
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .ca-btn-text {
            display: inline !important;
          }
        }
      `}</style>
    </header>
  );
}
