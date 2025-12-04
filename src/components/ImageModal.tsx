import { useEffect, useContext } from "react";
import { ShowImageContext } from "@/ShowImageProvider";
import type { CSSProperties } from "react";

export default function ImageModal() {
  const { state, setState } = useContext(ShowImageContext);
  const { isOpen, src } = state;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e:any) => {
      if (e.key === "Escape") {
        setState({ isOpen: false, src: "" });
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setState]);

  if (!isOpen || !src) return null;

  const overlayStyle : CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalStyle : CSSProperties = {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageContainerStyle : CSSProperties = {
    width: "100%",
    height: "100%",
    overflow: "auto",       // Allow scrolling inside the image container
    WebkitOverflowScrolling: "touch", // Smooth scroll on iOS
  };

  const imageStyle : CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    touchAction: "pinch-zoom", // Enable pinch zoom on mobile
  };

  return (
    <div
      style={overlayStyle}
      onClick={() => setState({ isOpen: false, src: "" })}
    >
      <div
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={imageContainerStyle}>
          <img src={src} alt="Modal" style={imageStyle} />
        </div>
      </div>
    </div>
  );
}
