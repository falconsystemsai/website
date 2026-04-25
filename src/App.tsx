import React from "react";
import { logo } from "./logo";

const dealSignals = [
  "County foreclosure auction calendars",
  "Bank REO feeds and distressed listing tags",
  "Lis pendens and notice-of-default filings",
  "Rent rolls, cap rate comps, and neighborhood trend deltas",
];

const userOutputs = [
  "Deal score (0-100) based on margin, risk, and velocity",
  "12-month upside/downside cash-flow scenarios",
  "Neighborhood and asset-level risk flags",
  "Action checklist for underwriting, outreach, and due diligence",
];

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "#020617",
  color: "#e2e8f0",
  fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
};

const containerStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "0 24px",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(148,163,184,0.25)",
  borderRadius: "16px",
  padding: "24px",
};

export function App() {
  return (
    <main style={pageStyle}>
      <header
        style={{ borderBottom: "1px solid rgba(148,163,184,0.2)", background: "#020617" }}
      >
        <div
          style={{
            ...containerStyle,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingBottom: "20px",
            gap: "16px",
          }}
        >
          <img src={logo} alt="Falcon logo" style={{ height: "48px", width: "auto" }} />
          <span
            style={{
              border: "1px solid rgba(34,211,238,0.5)",
              borderRadius: "999px",
              padding: "6px 14px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#67e8f9",
              background: "rgba(34,211,238,0.08)",
            }}
          >
            AI Deal Intelligence
          </span>
        </div>
      </header>

      <section style={{ ...containerStyle, paddingTop: "72px", paddingBottom: "42px" }}>
        <p style={{ margin: 0, color: "#67e8f9", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "12px" }}>
          Falcon Systems
        </p>
        <h1 style={{ fontSize: "clamp(2.1rem, 5vw, 3.8rem)", lineHeight: 1.12, margin: "16px 0 0", color: "#fff" }}>
          Real estate deals surfaced by autonomous AI agents.
        </h1>
        <p style={{ marginTop: "22px", maxWidth: "760px", color: "#cbd5e1", fontSize: "1.15rem", lineHeight: 1.6 }}>
          We rebuilt Falcon around one mission: continuously scan foreclosure and pre-foreclosure multifamily opportunities,
          then publish clear, investor-ready analysis to this platform.
        </p>
      </section>

      <section
        style={{
          ...containerStyle,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          paddingBottom: "26px",
        }}
      >
        <article style={cardStyle}>
          <h2 style={{ margin: "0 0 12px", color: "#fff", fontSize: "1.5rem" }}>What our agents monitor</h2>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "#cbd5e1", lineHeight: 1.7 }}>
            {dealSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </article>

        <article style={cardStyle}>
          <h2 style={{ margin: "0 0 12px", color: "#fff", fontSize: "1.5rem" }}>What users receive</h2>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "#cbd5e1", lineHeight: 1.7 }}>
            {userOutputs.map((output) => (
              <li key={output}>{output}</li>
            ))}
          </ul>
        </article>
      </section>

      <section style={{ ...containerStyle, paddingTop: "10px", paddingBottom: "20px" }}>
        <article
          style={{
            ...cardStyle,
            border: "1px solid rgba(34,211,238,0.45)",
            background: "rgba(15,23,42,0.9)",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "18px", color: "#fff", fontSize: "1.5rem" }}>Live analysis format</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px", color: "#cbd5e1", lineHeight: 1.6 }}>
            <p style={{ margin: 0 }}><strong style={{ color: "#fff" }}>Asset:</strong> 42-unit multifamily, Sun Belt secondary market.</p>
            <p style={{ margin: 0 }}><strong style={{ color: "#fff" }}>Status:</strong> Pre-foreclosure, notice filed within the last 14 days.</p>
            <p style={{ margin: 0 }}><strong style={{ color: "#fff" }}>Projected entry discount:</strong> 18% below trailing market comps.</p>
            <p style={{ margin: 0 }}><strong style={{ color: "#fff" }}>AI conviction:</strong> 87/100 with moderate renovation risk.</p>
          </div>
        </article>
      </section>

      <section style={{ ...containerStyle, paddingTop: "18px", paddingBottom: "72px" }}>
        <div
          style={{
            borderRadius: "16px",
            border: "1px solid rgba(148,163,184,0.3)",
            padding: "28px",
            background: "linear-gradient(90deg, rgba(34,211,238,0.1), rgba(59,130,246,0.09), rgba(99,102,241,0.09))",
          }}
        >
          <h2 style={{ margin: 0, color: "#fff", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>Built for investors who move fast.</h2>
          <p style={{ margin: "14px 0 0", color: "#cbd5e1", maxWidth: "760px", lineHeight: 1.65 }}>
            Falcon agents collect, rank, and explain multifamily distress opportunities so your team can spend time making
            offers—not hunting fragmented data.
          </p>
          <a
            href="mailto:info@falconsystems.ai?subject=Falcon%20Deal%20Intelligence"
            style={{
              display: "inline-block",
              marginTop: "20px",
              borderRadius: "10px",
              background: "#67e8f9",
              color: "#0f172a",
              padding: "12px 20px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Request Early Access
          </a>
        </div>
      </section>
    </main>
  );
}
