"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const phone = "5581999905988";
const standardMessage =
  "Olá, Natan! Vi o site demonstrativo da Zantara Dev e quero um site assim para o meu negócio.";
const whatsappUrl = (message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const projects = [
  {
    scene: "tower",
    image: "/images/project-commercial.jpg",
    imageAlt: "Edifício comercial contemporâneo com fachada de vidro",
    category: "Comercial",
    title: "Edifício Horizonte",
    description:
      "Torre comercial com 12 andares e fachada em vidro, entregue em 18 meses.",
    size: "4.800 m² construídos",
  },
  {
    scene: "house",
    image: "/images/project-residence.jpg",
    imageAlt: "Casa contemporânea com jardim e grandes janelas",
    category: "Residencial",
    title: "Casa Alameda",
    description:
      "Residência contemporânea com painéis de madeira e integração total com o jardim.",
    size: "320 m² construídos",
  },
  {
    scene: "bridge",
    image: "/images/project-infrastructure.jpg",
    imageAlt: "Projeto arquitetônico de grande porte em concreto",
    category: "Infraestrutura",
    title: "Viaduto Norte",
    description:
      "Obra viária que reduziu em 40% o tempo de deslocamento até o centro.",
    size: "2,3 km de extensão",
  },
];

const services = [
  ["01", "Construção residencial", "Casas e sobrados com projeto personalizado, acompanhamento semanal e acabamento de alto padrão."],
  ["02", "Obras comerciais", "Lojas, escritórios e galpões entregues no prazo para você começar a faturar mais cedo."],
  ["03", "Reformas e ampliações", "Modernizamos e ampliamos imóveis com o mínimo de transtorno na sua rotina."],
  ["04", "Projetos e aprovações", "Projeto arquitetônico, estrutural e toda a documentação junto aos órgãos competentes."],
  ["05", "Gestão de obras", "Controle de custos, cronograma e equipes para obras que já estão em andamento."],
  ["06", "Infraestrutura", "Pavimentação, drenagem e urbanização para condomínios, loteamentos e empresas."],
];

const reviews = [
  ["CM", "Carlos Eduardo M.", "Obra comercial · há 2 semanas", "Construíram nosso galpão em 5 meses, exatamente como combinado. Comunicação excelente do início ao fim.", "#3d6b8f"],
  ["FL", "Fernanda Lima", "Reforma · há 1 mês", "A reforma da nossa casa ficou linda. A equipe é organizada, limpa e sempre respondeu rápido no WhatsApp.", "#a0603a"],
  ["RA", "Roberto Alves", "Residencial · há 2 meses", "Orçamento claro e sem surpresas no final. Já indiquei para três amigos.", "#4d7a52"],
  ["JS", "Juliana Souza", "Residencial · há 3 meses", "Ótimo acabamento e engenheiro sempre presente. Só atrasamos uma semana por causa da chuva, mas avisaram tudo.", "#7a4d8f", 4],
  ["MP", "Marcos Pereira", "Edifício comercial · há 4 meses", "Profissionais sérios. Entregaram o prédio da empresa antes do prazo e com a documentação toda regularizada.", "#8f6b3d"],
  ["PG", "Patrícia Gomes", "Casa nova · há 5 meses", "Atendimento humano e transparente. Recebíamos fotos da obra toda semana, passou muita confiança.", "#3d8f85"],
];

function BrandMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path d="M4 35V17L20 5l16 12v18h-9V21h-6v14H4Z" fill="currentColor" />
      <path d="M27 21h9v14h-9z" fill="#c48048" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.7 1.5 5.6 1.5 7 0 12.6-5.6 12.6-12.5S23 3 16 3zm0 22.9c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.4 1.2 1.2-4.2-.3-.4a10.2 10.2 0 01-1.6-5.4C5.5 9.9 10.2 5.3 16 5.3s10.5 4.6 10.5 10.2S21.8 25.9 16 25.9z" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="lead">{description}</p>}
    </div>
  );
}

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  function submitQuote(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá! Meu nome é ${data.get("name")}. Quero um orçamento de obra ${data.get("type")}. ${data.get("details") || ""}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="announcement">
        <span>Engenharia com compromisso em cada etapa.</span>
        <a href={whatsappUrl(standardMessage)} target="_blank" rel="noreferrer">
          Conheça nosso trabalho <span aria-hidden="true">↗</span>
        </a>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#topo" aria-label="Bravo Construções, início">
            <BrandMark />
            <span>Bravo<span className="brand-light">Construções</span></span>
          </a>
          <nav aria-label="Navegação principal">
            <a href="#sobre">A empresa</a>
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#avaliacoes">Depoimentos</a>
            <a className="button nav-button" href="#contato">Vamos conversar <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="topo">
        <section className="hero">
          <Image
            src="/images/hero-construction.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" />
          <div className="container hero-content">
            <span className="eyebrow hero-eyebrow">Bravo Construções · Pernambuco</span>
            <h1>Planejamento sólido. <span>Obra bem-feita.</span></h1>
            <p>Da primeira conversa à entrega das chaves, cuidamos de cada detalhe para construir com segurança, transparência e excelência.</p>
            <div className="hero-actions">
              <a className="button" href="#contato">Converse com um especialista <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#projetos">Explore nossos projetos <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-caption"><span>01 / 03</span><span>Engenharia feita para durar</span></div>
        </section>

        <section className="intro-strip" aria-label="Nossos resultados">
          <div className="container intro-inner">
            <p>Construindo relações duradouras, <strong>uma obra de cada vez.</strong></p>
            <div className="intro-stats">
              <div><b>15<span>+</span></b><span>anos de experiência</span></div>
              <div><b>230</b><span>obras entregues</span></div>
              <div><b>98<span>%</span></b><span>de satisfação</span></div>
            </div>
          </div>
        </section>

        <section className="difference">
          <div className="container difference-grid">
            <span className="eyebrow">Nossa maneira de construir</span>
            <p><strong>Confiança se constrói</strong> com presença, compromisso e cuidado em cada etapa da obra.</p>
            <div className="difference-points">
              <span>01 · Prazo respeitado</span>
              <span>02 · Engenharia responsável</span>
              <span>03 · Transparência total</span>
            </div>
          </div>
        </section>

        <section id="sobre" className="about-section">
          <div className="container about-grid">
            <div className="about-copy">
              <SectionHeading eyebrow="Quem somos" title="Seu projeto em boas mãos." />
              <p>Há mais de 15 anos a Bravo Construções transforma projetos em obras entregues no prazo e dentro do orçamento. Cuidamos de tudo: projeto, aprovações, execução e acabamento.</p>
              <p>Cada cliente tem um engenheiro responsável e acompanha o andamento da obra de perto, com relatórios e fotos semanais.</p>
              <a className="text-link dark-link" href="#servicos">Saiba como trabalhamos <span aria-hidden="true">↗</span></a>
            </div>
            <div className="about-visual">
              <Image
                src="/images/about-construction.jpg"
                alt="Profissionais acompanhando uma obra em execução"
                fill
                sizes="(max-width: 760px) 100vw, 48vw"
              />
              <div className="about-note"><span>01—</span><strong>Do projeto à entrega,<br />lado a lado com você.</strong></div>
            </div>
          </div>
        </section>

        <section id="servicos" className="services-section alternate">
          <div className="container">
            <SectionHeading
              eyebrow="O que fazemos"
              title="Estrutura para cada desafio."
              description="Do primeiro desenho à entrega das chaves, com uma equipe só e responsabilidade única."
            />
            <div className="service-grid">
              {services.map(([number, title, description]) => (
                <article className="service-card" key={title}>
                  <span className="service-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="projects-section">
          <div className="container">
            <SectionHeading
              eyebrow="Portfólio"
              title="Trabalho que fala por si."
              description="Conheça algumas das obras que entregamos nos últimos anos."
            />
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                    />
                    <span className="project-category">{project.category}</span>
                    <span className="project-index">0{index + 1}</span>
                  </div>
                  <div className="project-copy">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="project-size">{project.size}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="featured-review">
          <div className="container featured-inner">
            <div className="featured-mark" aria-hidden="true">“</div>
            <div>
              <span className="eyebrow">Palavra de quem construiu com a gente</span>
              <p>“Excelente equipe! Cumpriram todos os prazos e a qualidade foi impecável. Recomendo com certeza.”</p>
              <b>Maria Aparecida R. <span>· Cliente residencial</span></b>
            </div>
            <div className="featured-rating"><span>★★★★★</span><b>5.0</b></div>
          </div>
        </section>

        <section id="avaliacoes" className="reviews-section alternate">
          <div className="container">
            <SectionHeading
              eyebrow="Relacionamentos que ficam"
              title="O que nossos clientes dizem."
              description={<>O que dizem quem já construiu com a gente. <em>(Avaliações fictícias, apenas para demonstração.)</em></>}
            />
            <div className="review-summary">
              <div className="rating"><b>4,9</b><div className="stars" aria-label="5 estrelas">★★★★★</div><span>127 avaliações</span></div>
              <div className="rating-bars">
                {[["5★", 86], ["4★", 11], ["3★", 2], ["2★", 1], ["1★", 0]].map(([label, percent]) => (
                  <div className="rating-bar" key={label}>
                    <span>{label}</span><i><u style={{ width: `${percent}%` }} /></i><span>{percent}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="review-grid">
              {reviews.map(([initials, name, detail, quote, color, stars = 5]) => (
                <article className="review-card" key={name}>
                  <div className="review-person">
                    <div className="avatar" style={{ backgroundColor: color }} aria-hidden="true">{initials}</div>
                    <div><b>{name}</b><span>{detail}</span></div>
                  </div>
                  <div className="stars" role="img" aria-label={`${stars} estrelas`}>{"★".repeat(stars)}{"☆".repeat(5 - stars)}</div>
                  <p>“{quote}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <SectionHeading
                eyebrow="Vamos tirar a ideia do papel?"
                title="A próxima grande obra pode ser a sua."
                description="Conte o que você quer construir. Retornamos em até 24 horas com uma proposta."
              />
              <div className="contact-info">
                <p><span>Telefone e WhatsApp</span><a href={whatsappUrl(standardMessage)} target="_blank" rel="noreferrer">(81) 99990-5988</a></p>
                <p><span>E-mail</span><a href="mailto:zantarastore@gmail.com">zantarastore@gmail.com</a></p>
                <p><span>Atendimento</span><b>Segunda a sexta, das 8h às 18h</b></p>
              </div>
            </div>
            <form className="quote-form" onSubmit={submitQuote}>
              <span className="form-heading">Conte um pouco sobre seu projeto</span>
              <label>Seu nome<input name="name" autoComplete="name" placeholder="Como podemos chamar você?" required /></label>
              <label>Tipo de obra
                <select name="type">
                  <option>Residencial</option><option>Comercial</option><option>Reforma</option><option>Infraestrutura</option>
                </select>
              </label>
              <label>Detalhes do projeto<textarea name="details" rows="4" placeholder="O que você tem em mente?" /></label>
              <button className="button" type="submit">Enviar pelo WhatsApp <span aria-hidden="true">↗</span></button>
              <small>Sem compromisso. Retornamos em até 24 horas úteis.</small>
            </form>
          </div>
        </section>

        <section id="localizacao" className="location-section alternate">
          <div className="container">
            <SectionHeading
              eyebrow="Estamos por perto"
              title="Uma conversa é o primeiro passo."
              description="Venha conhecer nosso escritório e conversar sobre o seu projeto."
            />
            <div className="location-card">
              <div className="location-illustration">
                <Image
                  src="/images/location-office.jpg"
                  alt="Residência contemporânea cercada por paisagismo"
                  fill
                  sizes="(max-width: 760px) 100vw, 60vw"
                />
              </div>
              <div className="location-copy">
                <span className="eyebrow">Nosso espaço</span>
                <h3>Escritório central</h3>
                <p><strong>Endereço</strong>Rua das Acácias, 450, Centro<br />Caruaru, PE (endereço fictício)</p>
                <p><strong>Horário</strong>Segunda a sexta, das 8h às 18h<br />Sábado, das 8h às 12h</p>
                <p><strong>Telefone</strong>(81) 99990-5988</p>
                <a className="text-link dark-link" href={whatsappUrl("Olá, Natan! Quero agendar uma visita (demonstração do site).")} target="_blank" rel="noreferrer">Agendar uma visita <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <p className="note">Endereço demonstrativo. No site final, incluiremos os dados reais do seu negócio.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#topo" aria-label="Bravo Construções, início">
            <BrandMark /><span>Bravo<span className="brand-light">Construções</span></span>
          </a>
          <span>© {year} Bravo Construções. Todos os direitos reservados.</span>
          <span>Site criado por <b>Zantara Dev</b> · <a href="mailto:zantarastore@gmail.com">Fale com a gente</a></span>
        </div>
      </footer>
      <a className="whatsapp-float" href={whatsappUrl(standardMessage)} target="_blank" rel="noreferrer" aria-label="Falar com a Zantara Dev no WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}
