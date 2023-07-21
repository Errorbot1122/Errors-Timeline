import React from "react";

function checkOverflow(element) {
  return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
};

function TimelineClip({ width, name, thumbnailSrc }) {
  // Defaulting
  const widthStyle = width ? Math.floor(width / 4) + "rem" : "8rem";
  const imgAlt = name ? name + "'s Image" : null;

  const [isOverflowing, setIsOverflowing] = React.useState(false);

  const clipRef = React.useRef(null)

  function setup() {
    setIsOverflowing(checkOverflow(clipRef.current));
  }

  // Run setup when Element is loaded
  React.useEffect(setup, []);

  return (
    <div
      ref={clipRef}
      style={{ width: widthStyle }}
      className="h-full flex bg-blue-600 text-slate-200 border-2 border-blue-400 rounded-lg overflow-hidden"
    >
      {/* Only show thumbnail image If the layer is not minimized AND it if it even exists */}
      {thumbnailSrc && !isOverflowing ? (
        <div className="h-full aspect-video flex items-center justify-center">
          <img className="h-full" src={thumbnailSrc} alt={imgAlt} />
        </div>
      ) : null}

      <p className="mx-2 flex text-sm font-medium">{name}</p>
    </div>
  );
}

export default TimelineClip;
