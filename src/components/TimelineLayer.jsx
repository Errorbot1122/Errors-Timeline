import React from "react";

import TimelineClip from "./TimelineClip.jsx";

import test_thumbnail from "../assets/test_thumbnail.png";

function TimelineLayer(properties) {
  return (
    // Shorten layer height from h-20 to h-12 when minimized
    <div className="max-h-16 h-16 w-full flex border-0 border-b-2 border-slate-900 bg-transparent">
      {/* Layer Name stuff */}
      <div className="h-full w-48 sticky flex items-center border-0 border-r-2 border-slate-300 bg-slate-600">
        {/* Toggle Minimized when clicked */}
        <h4 className="font-medium text-slate-200">{properties.name}</h4>
      </div>

      {/* Separator */}
      <div className="h-full w-4 bg-slate-750" />

      <TimelineClip name="Epic Clip" thumbnailSrc={test_thumbnail} width={50} />
    </div>
  );
}

export default TimelineLayer;
