// app/page.tsx
import Link from "next/link";

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
      "Performance, escalabilidade e observabilidade",
      "Arquitetura e refatoração de sistemas legados",
    ],
  },
  {
    title: "Produtos & MVPs",
    items: [
      "MVP técnico de verdade (não demo)",
      "Arquitetura preparada para crescer",
      "Entrega incremental com métricas",
      "Migração MVP → produto comercializável",
    ],
  },
  {
    title: "Dados & Automação",
    items: [
      "Dashboards e métricas acionáveis",
      "ETL/pipelines e rotinas de sincronização",
      "Automação de processos internos",
      "IA aplicada quando faz sentido (RAG, agentes, etc.)",
    ],
  },
  {
    title: "Infraestrutura",
    items: [
      "Cloud, deploy e hardening",
      "CI/CD e ambientes (dev/stage/prod)",
      "Custos: medir, cortar, otimizar",
      "SRE básico: logs, métricas, tracing, alertas",
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
    <div className="mb-10">
      {eyebrow ? (
        <div className="mb-3 text-xs font-medium tracking-widest text-white/60">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_30%,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0D10]/80 backdrop-blur">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold">
                DH
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

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-black hover:bg-white/90 transition"
              >
                Fale com o DadoHub
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="mb-5 flex flex-wrap gap-2">
                <Pill>Data • Architecture • Execution</Pill>
                <Pill>Systems-first</Pill>
                <Pill>Sem buzzword</Pill>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                DadoHub
                <span className="block text-white/80">Software guiado por dados.</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                Projetamos, construímos e escalamos sistemas com foco em arquitetura,
                performance e decisões baseadas em métricas. Código é ativo. Dado é critério.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
                >
                  Entrar em contato
                </a>
                <a
                  href="#projects"
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  Ver projetos
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Foco</div>
                  <div className="mt-1 text-sm font-semibold">Sistemas que rodam</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Critério</div>
                  <div className="mt-1 text-sm font-semibold">Métricas & realidade</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/60">Estilo</div>
                  <div className="mt-1 text-sm font-semibold">Direto, sem teatro</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-xs font-medium tracking-widest text-white/60">
                  ÁREAS
                </div>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/80" />
                    <span>APIs, filas e processamento assíncrono</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/80" />
                    <span>Arquitetura, performance e refatoração</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/80" />
                    <span>Automação e dados (ETL, dashboards)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/80" />
                    <span>Infra: deploy, CI/CD, observabilidade</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-white/10 bg-[#0B0D10]/60 p-4">
                  <div className="text-xs text-white/60">Nota</div>
                  <p className="mt-2 text-sm text-white/75">
                    Se não dá pra medir, é opinião. Se não dá pra manter, é dívida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What */}
      <section id="what" className="py-16 border-t border-white/10">
        <Container>
          <SectionTitle
            eyebrow="O QUE É"
            title="Um hub técnico para projetos de software"
            subtitle="O DadoHub é um núcleo de engenharia onde ideias viram sistemas. Atuamos em projetos sob demanda e produtos próprios, com padrão técnico consistente."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-white/60">Princípio</div>
              <div className="mt-2 text-base font-semibold">Código é ativo</div>
              <p className="mt-2 text-sm text-white/70">
                Produzimos software que permanece de pé: legível, testável e evolutivo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-white/60">Princípio</div>
              <div className="mt-2 text-base font-semibold">Dado é critério</div>
              <p className="mt-2 text-sm text-white/70">
                Medimos, observamos e decidimos com base no que acontece no sistema real.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-white/60">Princípio</div>
              <div className="mt-2 text-base font-semibold">Execução pragmática</div>
              <p className="mt-2 text-sm text-white/70">
                Escopo claro, trade-offs explícitos e entrega incremental sem drama.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-16 border-t border-white/10">
        <Container>
          <SectionTitle
            eyebrow="SERVIÇOS"
            title="O que fazemos"
            subtitle="Quatro frentes. Um padrão: arquitetura sólida e entrega que aguenta produção."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <span className="text-xs text-white/60">DadoHub</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
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
      <section id="process" className="py-16 border-t border-white/10">
        <Container>
          <SectionTitle
            eyebrow="PROCESSO"
            title="Sem promessas vazias. Só processo."
            subtitle="Isso evita projeto infinito, orçamento fantasma e software impossível de manter."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                k: "01",
                t: "Diagnóstico",
                d: "Objetivo, restrições, riscos e critérios de sucesso.",
              },
              {
                k: "02",
                t: "Arquitetura",
                d: "Decisões técnicas, trade-offs, desenho e plano de entrega.",
              },
              {
                k: "03",
                t: "Entrega incremental",
                d: "Iterações curtas, validação com métricas e feedback.",
              },
              {
                k: "04",
                t: "Operação",
                d: "Observabilidade, manutenção e evolução sem apagar incêndio.",
              },
            ].map((p) => (
              <div
                key={p.k}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-xs text-white/60">{p.k}</div>
                <div className="mt-2 text-base font-semibold">{p.t}</div>
                <p className="mt-2 text-sm text-white/70">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold">Regras do jogo</div>
            <div className="mt-3 grid gap-3 md:grid-cols-2 text-sm text-white/75">
              <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-4">
                Escopo claro ou o projeto não começa.
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-4">
                Se não dá pra medir, é opinião.
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-4">
                Projeto ruim morre rápido.
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-4">
                Código limpo &gt; prazo artificial.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 border-t border-white/10">
        <Container>
          <SectionTitle
            eyebrow="PROJETOS"
            title="Construído no DadoHub"
            subtitle="Alguns são comerciais, outros experimentais. Todos seguem o mesmo padrão técnico."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-base font-semibold">{p.name}</div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/70">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70">{p.desc}</p>

                <div className="mt-5 flex gap-2">
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-white/80 hover:text-white transition"
                  >
                    Solicitar detalhes →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 border-t border-white/10">
        <Container>
          <SectionTitle
            eyebrow="CONTATO"
            title="Vamos construir algo que aguenta produção"
            subtitle="Se você precisa de um sistema confiável, escalável e bem projetado, fale com o DadoHub."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Contato direto</div>
              <p className="mt-2 text-sm text-white/70">
                Troca rápida, escopo claro e próximos passos objetivos.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-4">
                  <div className="text-xs text-white/60">Email</div>
                  <div className="mt-1 text-sm font-semibold">contato@dadohub.com</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0B0D10]/60 p-4">
                  <div className="text-xs text-white/60">LinkedIn</div>
                  <div className="mt-1 text-sm font-semibold">/in/dadohub</div>
                </div>
              </div>

              <div className="mt-6 text-xs text-white/55">
                Fique a vontade para nos contactar, <span className="text-white/70">Seu problema é nosso problema</span>.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">Links</div>
              <div className="mt-4 space-y-3 text-sm">
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

              <div className="mt-6 rounded-xl border border-white/10 bg-[#0B0D10]/60 p-4">
                <div className="text-xs text-white/60">Stack</div>
                <div className="mt-2 flex flex-wrap gap-2">
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
      <footer className="border-t border-white/10 py-10">
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
