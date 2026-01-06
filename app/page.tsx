// app/page.tsx
import Link from "next/link";
import { DadoHubLogo } from "./components/DadoHubLogo";

const nav = [
  { href: "#what", label: "O que é" },
  { href: "#services", label: "Serviços" },
  { href: "#process", label: "Processo" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

const services = [
  {
    title: "Sistemas & Backends",
    items: [
      "APIs robustas e integrações complexas",
      "Filas, workers, jobs e processamento assíncrono",
      "Performance, escalabilidade e confiabilidade",
      "Refatoração e evolução de sistemas legados",
    ],
  },
  {
    title: "Produtos & MVPs",
    items: [
      "MVP técnico pronto para produção",
      "Arquitetura preparada para crescer",
      "Entrega incremental orientada por métricas",
      "Evolução MVP → produto comercializável",
    ],
  },
  {
    title: "Dados & Automação",
    items: [
      "Dashboards e métricas acionáveis",
      "ETL/pipelines e sincronizações",
      "Automação de processos internos",
      "IA aplicada quando agrega (RAG, agentes, etc.)",
    ],
  },
  {
    title: "Infraestrutura",
    items: [
      "Cloud, deploy e hardening",
      "CI/CD e ambientes (dev/stage/prod)",
      "Observabilidade (logs/métricas/alertas)",
      "Otimização de custos e estabilidade",
    ],
  },
];

const projects = [
  {
    name: "ForgeQ",
    desc: "Jobs & workers distribuídos em Phoenix/Elixir, com painéis e filas.",
    tag: "Systems",
  },
  {
    name: "RAG Platform",
    desc: "API de chat com recuperação de contexto, upload de docs e histórico.",
    tag: "Data/AI",
  },
  {
    name: "Internal Tools",
    desc: "Automação, integrações e ferramentas internas para operação.",
    tag: "Ops",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 sm:mb-14">
      {eyebrow ? (
        <div className="mb-3 text-xs font-medium tracking-widest text-white/60">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function SoftCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(16,185,129,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_80%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_20%_30%,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0D10]/80 backdrop-blur">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold">
                <DadoHubLogo className="h-8 w-8 text-white" />
              </span>
              <span className="text-sm font-semibold tracking-tight">DadoHub</span>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  className="text-xs text-white/70 hover:text-white transition"
                >
                  {i.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="rounded-lg bg-emerald-400 px-3 py-2 text-xs font-semibold text-black hover:bg-emerald-300 transition"
            >
              Fale com o DadoHub
            </a>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="mb-6 flex flex-wrap gap-2">
                <Pill>Data • Architecture • Execution</Pill>
                <Pill>Systems-first</Pill>
                <Pill>Clareza & manutenção</Pill>
              </div>

              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
                DadoHub
                <span className="block text-white/80">Software guiado por dados.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
                Construímos sistemas com foco em arquitetura, performance e operação estável.
                Decisões técnicas orientadas por métricas — sem ruído.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-emerald-300 transition"
                >
                  Entrar em contato
                </a>
                <a
                  href="#projects"
                  className="rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  Ver projetos
                </a>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-xs text-white/60">Foco</div>
                  <div className="mt-1 text-sm font-semibold">Sistemas que rodam</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-xs text-white/60">Critério</div>
                  <div className="mt-1 text-sm font-semibold">Métricas & realidade</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-xs text-white/60">Estilo</div>
                  <div className="mt-1 text-sm font-semibold">Objetivo e consistente</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="text-xs font-medium tracking-widest text-white/60">
                  EM 1 MINUTO
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-5">
                    <div className="text-xs text-white/60">O que entregamos</div>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Sistemas confiáveis, com arquitetura clara e operação previsível.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-5">
                    <div className="text-xs text-white/60">Como decidimos</div>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Observabilidade, métricas e trade-offs explícitos.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-5">
                    <div className="text-xs text-white/60">Como trabalhamos</div>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Escopo objetivo, entregas incrementais e manutenção simples.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-xs text-white/55">
                  <span className="text-white/70">Nota:</span> se não dá pra medir, a decisão fica frágil.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What */}
      <section id="what" className="border-t border-white/10 py-24 sm:py-28">
        <Container>
          <SectionTitle
            eyebrow="O QUE É"
            title="Um hub técnico para projetos de software"
            subtitle="O DadoHub é um núcleo de engenharia: ideias viram sistemas e sistemas viram produto, com padrão técnico consistente."
          />

          <div className="grid gap-8 md:grid-cols-3">
            <SoftCard
              title="Código sustentável"
              desc="Estruturas legíveis, testáveis e prontas para evoluir sem quebrar tudo."
            />
            <SoftCard
              title="Dados como critério"
              desc="Decisões orientadas por métricas, observabilidade e realidade do sistema em produção."
            />
            <SoftCard
              title="Execução pragmática"
              desc="Trade-offs claros, escopo objetivo e entrega incremental sem inflar complexidade."
            />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-white/10 py-24 sm:py-28">
        <Container>
          <SectionTitle
            eyebrow="SERVIÇOS"
            title="O que fazemos"
            subtitle="Quatro frentes. Um padrão: arquitetura sólida e entrega que aguenta produção."
          />

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <span className="text-xs text-white/60">DadoHub</span>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-white/75">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-300/90" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-white/10 py-24 sm:py-28">
        <Container>
          <SectionTitle
            eyebrow="PROCESSO"
            title="Processo claro, decisões técnicas e execução consistente"
            subtitle="Um fluxo simples que evita projeto infinito e reduz custo de manutenção."
          />

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { k: "01", t: "Diagnóstico", d: "Objetivo, restrições, riscos e critério de sucesso." },
              { k: "02", t: "Arquitetura", d: "Desenho, trade-offs e plano de entrega." },
              { k: "03", t: "Entrega", d: "Iterações curtas com validação contínua." },
              { k: "04", t: "Operação", d: "Observabilidade, estabilidade e evolução." },
            ].map((p) => (
              <div
                key={p.k}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <div className="text-xs text-white/60">{p.k}</div>
                <div className="mt-2 text-base font-semibold">{p.t}</div>
                <p className="mt-2 text-sm leading-6 text-white/70">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="text-sm font-semibold">Princípios de trabalho</div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 text-sm text-white/75">
              {[
                "Escopo objetivo antes de começar.",
                "Métricas e observabilidade desde cedo.",
                "Trade-offs explícitos (custo, tempo, complexidade).",
                "Código limpo para manter e escalar com calma.",
              ].map((t) => (
                <div key={t} className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-5">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/10 py-24 sm:py-28">
        <Container>
          <SectionTitle
            eyebrow="PROJETOS"
            title="Construído no DadoHub"
            subtitle="Alguns são comerciais, outros experimentais. O padrão técnico é o mesmo."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-semibold">{p.name}</div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/70">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/70">{p.desc}</p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition"
                >
                  Solicitar detalhes →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 py-24 sm:py-28">
        <Container>
          <SectionTitle
            eyebrow="CONTATO"
            title="Vamos tirar do papel com clareza"
            subtitle="Se você precisa de um sistema confiável e bem projetado, a conversa começa com escopo e objetivo."
          />

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-sm font-semibold">Contato direto</div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Troca rápida, alinhamento de escopo e próximos passos objetivos.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-5">
                  <div className="text-xs text-white/60">Email</div>
                  <div className="mt-1 text-sm font-semibold">contato@dadohub.com.br</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-5">
                  <div className="text-xs text-white/60">LinkedIn</div>
                  <div className="mt-1 text-sm font-semibold">/in/dadohub</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:seuemail@dominio.com"
                  className="rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-emerald-300 transition"
                >
                  Enviar email
                </a>
                <a
                  href="#services"
                  className="rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  Ver serviços
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-sm font-semibold">Links</div>
              <div className="mt-5 space-y-3 text-sm">
                <a className="block text-white/75 hover:text-white transition" href="#">
                  GitHub (placeholder)
                </a>
                <a className="block text-white/75 hover:text-white transition" href="#">
                  Portfólio (placeholder)
                </a>
                <a className="block text-white/75 hover:text-white transition" href="#projects">
                  Projetos
                </a>
              </div>

              <div className="mt-7 rounded-xl border border-white/10 bg-[#0B0D10]/60 p-5">
                <div className="text-xs text-white/60">Sinal visual</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>Next.js</Pill>
                  <Pill>Tailwind</Pill>
                  <Pill>Systems</Pill>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-white/60">
              © {new Date().getFullYear()} DadoHub. Engineering driven by data.
            </div>
            <div className="text-xs text-white/60">
              <a className="hover:text-white transition" href="#contact">
                Contato
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
