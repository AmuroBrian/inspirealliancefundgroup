import React from "react";

const leftLogos = ["ingi.png", "unb.png", "gmfc.png.png"];

const rightLogos = [
  "ayala-land.png",
  "iprosperity.png",
  "rlc.png",
  "smdc.png",
  "meg.png",
  "alliance-global.png",
  "acehardware.png",
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 700);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
};

const Subsidiaries = () => {
  const isMobile = useIsMobile();
  const containerWidth = isMobile ? "100%" : 1200;
  const logoBox = {
    width: isMobile ? 120 : 180,
    height: isMobile ? 54 : 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    margin: isMobile ? "2px 0" : 0,
  };
  const logoStyle = (logo) => {
    if (logo === "ingi.png") {
      return {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      };
    }
    return {
      maxWidth:
        logo === "iprosperity.png"
          ? isMobile
            ? 120
            : 300
          : logo === "alliance-global.png"
          ? isMobile
            ? 79
            : 165
          : logo === "meg.png"
          ? isMobile
            ? 90
            : 140
          : isMobile
          ? 80
          : 140,
      maxHeight:
        logo === "iprosperity.png"
          ? isMobile
            ? 32
            : 120
          : logo === "alliance-global.png"
          ? isMobile
            ? 26
            : 65
          : logo === "meg.png"
          ? isMobile
            ? 28
            : 50
          : isMobile
          ? 24
          : 50,
      objectFit: "contain",
    };
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: isMobile ? 200 : 400,
        background: "#fff",
        padding: isMobile ? "20px 0" : "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: containerWidth,
          margin: "0 auto",
          padding: isMobile ? "0 8px" : 0,
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: isMobile ? 22 : 32,
            marginBottom: 8,
            color: "#000",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Our Subsidiaries
        </h2>
        <div
          style={{
            width: isMobile ? 50 : 80,
            height: 4,
            background: "#009fe3",
            borderRadius: 2,
            margin: isMobile ? "0 auto 20px auto" : "0 0 32px 0",
          }}
        />
        <div
          style={{
            display: isMobile ? "block" : "flex",
            gap: isMobile ? 0 : 0,
            width: "100%",
          }}
        >
          {/* Left Column */}
          <div
            style={{
              flex: 1,
              display: isMobile ? "flex" : "flex",
              flexDirection: isMobile ? "row" : "column",
              flexWrap: isMobile ? "wrap" : "nowrap",
              alignItems: "center",
              justifyContent: isMobile ? "center" : undefined,
              gap: 0,
              marginBottom: isMobile ? 8 : 0,
            }}
          >
            {leftLogos.map((logo) => (
              <div key={logo} style={logoBox}>
                <img
                  src={`/subsidiarieslogo/${logo}`}
                  alt={logo.replace(/\..+$/, "")}
                  style={logoStyle(logo)}
                />
              </div>
            ))}
          </div>
          {/* Divider */}
          {!isMobile && (
            <div
              style={{
                width: 2,
                background: "#d9d9d9",
                minHeight: 320,
                alignSelf: "center",
              }}
            />
          )}
          {/* Right Column */}
          <div
            style={{
              flex: 2,
              display: isMobile ? "flex" : "grid",
              gridTemplateColumns: isMobile ? undefined : "repeat(3, 1fr)",
              flexDirection: isMobile ? "row" : undefined,
              flexWrap: isMobile ? "wrap" : undefined,
              alignItems: "center",
              justifyContent: isMobile ? "center" : undefined,
              gap: 0,
              marginTop: isMobile ? 8 : 0,
            }}
          >
            {rightLogos.map((logo) => (
              <div key={logo} style={logoBox}>
                <img
                  src={`/subsidiarieslogo/${logo}`}
                  alt={logo.replace(/\..+$/, "")}
                  style={logoStyle(logo)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsidiaries;
