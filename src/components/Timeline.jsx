import TimelineLayer from "./TimelineLayer.jsx"

function Timeline() {
  return (
    <div className="h-screen w-screen min-w-100 min-h-48 flex mt-3 md:px-2">

      <div className="w-full h-full bg-slate-700 border border-4 border-slate-900 overflow-y-auto overflow-x-scroll">

        <TimelineLayer />
        <TimelineLayer />
        <TimelineLayer />
        <TimelineLayer />
        <TimelineLayer />
        <TimelineLayer />
        <TimelineLayer />
        <TimelineLayer />
        <TimelineLayer />

      </div>

    </div>
  );
}

export default Timeline;