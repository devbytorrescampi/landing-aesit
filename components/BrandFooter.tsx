type BrandFooterProps = {
  name?: string;
  url?: string;
  instagram?: string;
  linkedin?: string;
  primaryColor?: string;
  mutedColor?: string;
  borderColor?: string;
};

export default function BrandFooter({
  name = "TorresCampi Soft",
  url = "https://torrescampisoft.com",
  instagram = "https://www.instagram.com/torrescampisoft",
  linkedin = "https://ar.linkedin.com/company/torrescampisoft",
  primaryColor = "#16a34a",
  mutedColor = "#6b7280",
  borderColor = "#e5e7eb",
}: BrandFooterProps) {
  return (
    <footer
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "1.25rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        fontSize: "0.75rem",
        color: mutedColor,
        borderTop: `1px solid ${borderColor}`,
      }}
    >
      <span>devBy</span>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontWeight: 600,
          color: primaryColor,
          textDecoration: "none",
        }}
        onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
        onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
      >
        {name}
      </a>
      <span style={{ color: borderColor }}>·</span>
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        style={{ color: mutedColor, opacity: 1, transition: "opacity 0.15s" }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={{ color: mutedColor, opacity: 1, transition: "opacity 0.15s" }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    </footer>
  );
}
