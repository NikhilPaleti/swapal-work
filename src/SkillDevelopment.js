import React from "react";

var w = window.innerWidth;

// Temporary: renders the standalone Ausbildung page from public/ until it is converted to React.
// Kept as .htm on purpose - static hosts with clean URLs (e.g. `serve -s`) redirect *.html
// to an extensionless path that falls back to the SPA, which then nests inside itself.
const SkillDevelopment = () => {
  // Grow the iframe to its content height so the page scrolls as one document
  const fitToContent = (e) => {
    const frame = e.target;
    const doc = frame.contentDocument;
    new frame.contentWindow.ResizeObserver(() => {
      frame.style.height = doc.documentElement.offsetHeight + "px";
    }).observe(doc.documentElement);
  };

  return (
    <iframe
      title="Ausbildung in Germany"
      src={`${process.env.PUBLIC_URL}/ausbildung-germany.htm`}
      onLoad={fitToContent}
      scrolling="no"
      style={{
        display: "block",
        width: "100%",
        // Fill the first screen until the page has loaded and can be measured
        height: "100vh",
        border: 0,
        // Clear the fixed NavBar: MUI Toolbar is 56px below 600px wide, 64px above; the logo is 5vmax tall
        marginTop: w < 600 ? "max(56px, 5vmax)" : "max(64px, 5vmax)",
      }}
    />
  );
};

export default SkillDevelopment;
