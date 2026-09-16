export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-10 top-10 h-28 w-28 rounded-blob bg-sun/60 animate-float" />
      <div className="absolute right-4 top-24 h-16 w-16 rounded-full bg-sky/50 animate-floatSlow" />
      <div className="absolute left-1/3 bottom-0 h-20 w-20 rounded-blob bg-coral/40 animate-float" style={{ animationDelay: "1.2s" }} />
      <div className="absolute right-1/4 bottom-10 h-12 w-12 rounded-full bg-leaf/50 animate-floatSlow" style={{ animationDelay: "0.6s" }} />
      <svg className="absolute right-10 top-4 h-14 w-14 text-plum/50 animate-wiggle" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" />
      </svg>
    </div>
  );
}
