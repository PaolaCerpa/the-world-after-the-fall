import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-6 py-16">
      {/* Formas fragmentadas decorativas */}
      <div
        className="absolute -left-24 top-10 h-72 w-72 bg-system-orange-light/20 blur-2xl animate-float-1"
        style={{
          clipPath:
            "polygon(20% 0%, 60% 10%, 100% 30%, 85% 70%, 100% 100%, 40% 90%, 10% 100%, 0% 60%, 15% 30%)",
        }}
      />
      <div
        className="absolute -right-16 bottom-0 h-64 w-64 bg-system-orange-light/15 blur-2xl animate-float-2"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 5%, 100% 40%, 90% 80%, 60% 100%, 20% 90%, 0% 55%, 10% 20%)",
        }}
      />
      <div
        className="absolute right-10 top-4 h-32 w-32 bg-system-orange-light/15 blur-xl animate-float-1"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 15%, 100% 60%, 60% 100%, 10% 85%, 0% 35%)",
          animationDelay: "1.5s",
        }}
      />
      <div
        className="absolute left-8 bottom-16 h-24 w-24 bg-system-orange-light/20 blur-xl animate-float-2"
        style={{
          clipPath:
            "polygon(30% 0%, 100% 20%, 80% 80%, 40% 100%, 0% 60%)",
          animationDelay: "3s",
        }}
      />
      <div
        className="absolute left-1/3 top-0 h-20 w-20 bg-system-orange-light/10 blur-lg animate-float-1"
        style={{
          clipPath:
            "polygon(20% 0%, 80% 10%, 100% 70%, 50% 100%, 0% 50%)",
          animationDelay: "2.2s",
        }}
      />
      <div
        className="absolute right-1/4 bottom-8 h-28 w-28 bg-system-orange-light/15 blur-xl animate-float-2"
        style={{
          clipPath:
            "polygon(15% 0%, 85% 10%, 100% 55%, 70% 100%, 20% 90%, 0% 40%)",
          animationDelay: "0.8s",
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-16 w-16 bg-system-orange-light/10 blur-lg animate-float-1"
        style={{
          clipPath: "polygon(25% 0%, 100% 25%, 75% 100%, 0% 70%)",
          animationDelay: "4s",
        }}
      />
      <div
        className="absolute right-6 bottom-1/3 h-20 w-20 bg-system-orange-light/15 blur-lg animate-float-2"
        style={{
          clipPath:
            "polygon(30% 0%, 90% 15%, 100% 65%, 55% 100%, 10% 75%, 0% 25%)",
          animationDelay: "5.2s",
        }}
      />

      {/* Panel principal del Sistema */}
      <div className="animate-system-appear relative w-full max-w-xl">
        {/* Esquinas de píxel */}
        <span className="absolute -left-2 -top-2 h-6 w-6 border-l-4 border-t-4 border-system-cream" />
        <span className="absolute -right-2 -top-2 h-6 w-6 border-r-4 border-t-4 border-system-cream" />
        <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-4 border-l-4 border-system-cream" />
        <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-4 border-r-4 border-system-cream" />

        <div className="border-2 border-system-cream bg-gradient-to-b from-system-orange-light to-system-orange-dark px-8 py-12 text-center shadow-[0_0_40px_-5px_rgba(253,180,76,0.5)] sm:px-14 sm:py-16">
          <p className="font-display text-sm tracking-[0.3em] text-system-cream/80">
            &lt;NOTIFICACIÓN DEL SISTEMA&gt;
          </p>

          <h1 className="font-display mt-4 text-4xl leading-tight text-system-cream drop-shadow-[0_0_12px_rgba(255,246,232,0.6)] sm:text-6xl">
            HAS DESPERTADO
          </h1>

          <div className="my-6 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-system-cream/60" />
            <span className="h-2 w-2 rotate-45 border border-system-cream/80" />
            <span className="h-px w-16 bg-system-cream/60" />
          </div>

          <p className="font-display text-lg text-system-cream sm:text-xl">
            Bienvenido al Umbral.
          </p>
          <p className="font-display text-lg text-system-cream sm:text-xl">
            ¿Romperás el sistema o te adaptarás a él?
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/personajes"
              className="[clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] border-2 border-system-cream bg-system-orange-dark/40 px-8 py-3 font-display tracking-widest text-system-cream transition hover:bg-system-cream hover:text-system-orange-dark"
            >
              EXPLORAR PERSONAJES
            </Link>
            <Link
              href="/analisis"
              className="[clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] border-2 border-system-cream bg-system-red/30 px-8 py-3 font-display tracking-widest text-system-cream transition hover:bg-system-cream hover:text-system-red"
            >
              ANALIZAR EL LORE
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
