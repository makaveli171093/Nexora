import type { ReactNode } from "react";
import { BookOpenCheck, GraduationCap, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="grid min-h-screen lg:grid-cols-[1fr_1.02fr]">
      <section className="flex flex-col bg-white px-6 py-7 sm:px-10 lg:px-16 xl:px-24">
        <Logo />
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
          {children}
        </div>
        <p className="text-center text-xs text-[#898598]">
          © {new Date().getFullYear()} NEXORA Academy · Aprende. Crece.
          Transforma.
        </p>
      </section>
      <aside className="relative hidden min-h-screen overflow-hidden bg-[#100941] px-12 py-14 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-36 -top-20 h-105 w-105 rounded-full bg-purple/60 blur-[90px]" />
        <div className="absolute -left-32 bottom-0 h-110 w-110 rounded-full bg-cyan/50 blur-[110px]" />
        <div className="relative z-10 flex justify-end">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide">
            EL CONOCIMIENTO TE IMPULSA
          </span>
        </div>
        <div className="relative z-10 mx-auto max-w-xl">
          <div className="relative mb-12 flex h-77.5 items-center justify-center">
            <div className="absolute h-64 w-64 rotate-12 rounded-[55px] border border-violet/50 bg-linear-to-br from-purple/50 to-cyan/30 shadow-2xl backdrop-blur-xl" />
            <div className="absolute h-44 w-44 -rotate-12 rounded-[40px] border border-white/30 bg-linear-to-br from-white/25 to-violet/15" />
            <GraduationCap
              size={116}
              strokeWidth={1.2}
              className="relative z-10 text-white drop-shadow-2xl"
            />
            <span className="absolute right-10 top-6 rounded-2xl bg-white/20 p-4">
              <Sparkles size={26} />
            </span>
            <span className="absolute bottom-0 left-7 rounded-2xl bg-white/20 p-4">
              <BookOpenCheck size={28} />
            </span>
          </div>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight xl:text-5xl">
            Tu próximo gran logro comienza aquí.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#c5c3e7]">
            Descubre nuevas oportunidades, conecta con el conocimiento y avanza
            hacia tus objetivos.
          </p>
        </div>
        <div className="relative z-10 flex items-center gap-2 text-sm text-[#c5c3e7]">
          <span className="h-2 w-2 rounded-full bg-[#4cd7f6]" /> Una nueva forma
          de aprender
        </div>
      </aside>
    </main>
  );
}
