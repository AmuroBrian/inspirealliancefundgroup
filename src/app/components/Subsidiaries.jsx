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
  "clinicadebeleza.png",
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
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
    width: isMobile ? "140px" : "180px",
    height: isMobile ? "80px" : "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    margin: isMobile ? "8px" : "12px",
    flex: "0 0 auto",
  };

  const logoStyle = (logo) => {
    // Simplified logo sizing for better mobile compatibility
    const baseStyle = {
      objectFit: "contain",
      transition: "transform 0.2s ease",
    };

    if (logo === "ingi.png") {
      return {
        ...baseStyle,
        width: "180%",
        height: "180%",
        objectFit: "cover",
      };
    }

    // Specific sizing for certain logos
    if (logo === "iprosperity.png") {
      return {
        ...baseStyle,
        maxWidth: isMobile ? "140px" : "200px",
        maxHeight: isMobile ? "50px" : "80px",
      };
    }

    if (logo === "alliance-global.png") {
      return {
        ...baseStyle,
        maxWidth: isMobile ? "100px" : "140px",
        maxHeight: isMobile ? "35px" : "55px",
      };
    }

    if (logo === "meg.png") {
      return {
        ...baseStyle,
        maxWidth: isMobile ? "110px" : "130px",
        maxHeight: isMobile ? "40px" : "50px",
      };
    }

    if (logo === "clinicadebeleza.png") {
      return {
        ...baseStyle,
        maxWidth: isMobile ? "130px" : "170px",
        maxHeight: isMobile ? "50px" : "70px",
      };
    }

    // Default sizing for other logos
    return {
      ...baseStyle,
      maxWidth: isMobile ? "100px" : "130px",
      maxHeight: isMobile ? "45px" : "60px",
    };
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: isMobile ? "auto" : 400,
        background: "#fff",
        padding: isMobile ? "30px 0" : "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: containerWidth,
          margin: "0 auto",
          padding: isMobile ? "0 16px" : "0 20px",
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: isMobile ? 24 : 32,
            marginBottom: 8,
            color: "#000",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Our Subsidiaries
        </h2>
        <div
          style={{
            width: isMobile ? 60 : 80,
            height: 4,
            background: "#009fe3",
            borderRadius: 2,
            margin: isMobile ? "0 auto 30px auto" : "0 0 40px 0",
          }}
        />

        {isMobile ? (
          // Mobile layout: Single column with all logos
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              width: "100%",
            }}
          >
            {[...leftLogos, ...rightLogos].map((logo) => (
              <div key={logo} style={logoBox}>
                <img
                  src={`/subsidiarieslogo/${logo}`}
                  alt={logo.replace(/\..+$/, "")}
                  style={logoStyle(logo)}
                  onError={(e) => {
                    console.log(`Failed to load image: ${logo}`);
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          // Desktop layout: Two columns with divider
          <div
            style={{
              display: "flex",
              gap: 40,
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            {/* Left Column */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              {leftLogos.map((logo) => (
                <div key={logo} style={logoBox}>
                  <img
                    src={`/subsidiarieslogo/${logo}`}
                    alt={logo.replace(/\..+$/, "")}
                    style={logoStyle(logo)}
                    onError={(e) => {
                      console.log(`Failed to load image: ${logo}`);
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              style={{
                width: 2,
                background: "#d9d9d9",
                minHeight: 320,
                alignSelf: "stretch",
              }}
            />

            {/* Right Column */}
            <div
              style={{
                flex: 2,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {rightLogos.map((logo) => (
                <div key={logo} style={logoBox}>
                  <img
                    src={`/subsidiarieslogo/${logo}`}
                    alt={logo.replace(/\..+$/, "")}
                    style={logoStyle(logo)}
                    onError={(e) => {
                      console.log(`Failed to load image: ${logo}`);
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subsidiaries;
