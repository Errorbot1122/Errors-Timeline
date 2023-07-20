import TimelineClip from "./TimelineClip.jsx"

function TimelineLayer(properties) {
  return (
    <div className="max-h-20 h-20 w-full flex border border-0 border-b-2 border-slate-900 bg-transparent">
      <div className="h-full w-48 sticky border border-0 border-r-2 border-slate-300 bg-slate-600" >
        <h4>{properties.name}</h4>
      </div>
      <div className="h-full w-4 bg-slate-750" />

      <TimelineClip />
    </div>
  );
}

export default TimelineLayer;