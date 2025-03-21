import React from "react";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add a small delay to ensure smooth transition
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              setVisible(true);
            });
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "10px", // Small margin to trigger slightly earlier
      }
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
      style={{
        WebkitTransform: isVisible ? "none" : "translateY(20vh)",
        transform: isVisible ? "none" : "translateY(20vh)",
      }}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
