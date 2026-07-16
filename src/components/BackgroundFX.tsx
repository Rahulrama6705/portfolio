export default function BackgroundFX() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 90%)',
        }}
      />
      <div
        className="pointer-events-none fixed -left-[10%] -top-[10%] z-0 h-[600px] w-[600px] rounded-full blur-[40px]"
        style={{
          background: 'radial-gradient(circle, rgba(108,92,231,0.25), transparent 70%)',
          animation: 'pulseGlow 8s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none fixed -bottom-[15%] -right-[10%] z-0 h-[700px] w-[700px] rounded-full blur-[50px]"
        style={{
          background: 'radial-gradient(circle, rgba(253,121,168,0.15), transparent 70%)',
          animation: 'pulseGlow 10s ease-in-out infinite 2s',
        }}
      />
    </>
  )
}
