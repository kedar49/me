export function GlowingDot() {
  return (
    <div className="relative">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse z-10">
        <div className="absolute -inset-1 rounded-full shadow-[0_0_6px] shadow-primary/70 animate-ping z-10 opacity-75" />
      </div>
      <div className="absolute -inset-2 rounded-full bg-primary/20 animate-pulse delay-150" />
    </div>
  );
}
