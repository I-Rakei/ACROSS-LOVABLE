import { createFileRoute, Link } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faGears,
  faScaleBalanced,
  faCookieBite,
  faShareNodes,
  faGlobe,
  faClockRotateLeft,
  faShieldHalved,
  faUserCheck,
  faChildReaching,
  faTriangleExclamation,
  faUserLock,
  faEnvelopeOpenText,
  faArrowsRotate,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useLanguage } from "@/components/language-provider";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | AcrossTours DMC" },
      {
        name: "description",
        content:
          "How AcrossTours DMC collects, uses, protects and shares your personal data across our website, booking forms and client portal.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Privacy Policy | AcrossTours DMC" },
      {
        property: "og:description",
        content:
          "How AcrossTours DMC collects, uses, protects and shares your personal data across our website, booking forms and client portal.",
      },
      { property: "og:url", content: "https://acrosstour.com/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://acrosstour.com/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const LAST_UPDATED = "11 September 2026";

function PrivacyPolicyPage() {
  const { t, lang } = useLanguage();

  const sections = [
    { id: "who-we-are", icon: faLocationDot, label: t("Who We Are", "Quem Somos") },
    { id: "data-we-collect", icon: faDatabase, label: t("Data We Collect", "Dados Que Recolhemos") },
    { id: "how-we-use-data", icon: faGears, label: t("How We Use Your Data", "Como Usamos os Seus Dados") },
    { id: "legal-basis", icon: faScaleBalanced, label: t("Legal Basis", "Base Legal") },
    { id: "cookies", icon: faCookieBite, label: t("Cookies & Local Storage", "Cookies & Armazenamento Local") },
    { id: "sharing", icon: faShareNodes, label: t("Sharing With Third Parties", "Partilha Com Terceiros") },
    { id: "transfers", icon: faGlobe, label: t("International Transfers", "Transferências Internacionais") },
    { id: "retention", icon: faClockRotateLeft, label: t("Data Retention", "Retenção de Dados") },
    { id: "security", icon: faShieldHalved, label: t("How We Protect Data", "Como Protegemos os Dados") },
    { id: "your-rights", icon: faUserCheck, label: t("Your Rights", "Os Seus Direitos") },
    { id: "portal", icon: faUserLock, label: t("Client Portal (Coming Soon)", "Portal do Cliente (Brevemente)") },
    { id: "sensitive-data", icon: faTriangleExclamation, label: t("Sensitive Data", "Dados Sensíveis") },
    { id: "children", icon: faChildReaching, label: t("Children's Privacy", "Privacidade de Crianças") },
    { id: "marketing", icon: faEnvelopeOpenText, label: t("Marketing Communications", "Comunicações de Marketing") },
    { id: "changes", icon: faArrowsRotate, label: t("Changes to This Policy", "Alterações a Esta Política") },
    { id: "contact", icon: faEnvelope, label: t("Contact Us", "Contacte-nos") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <div className="relative pt-40 pb-16 bg-ink text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-ink to-ink" />
        <div className="relative container-x max-w-4xl">
          <div className="eyebrow !text-white/70 mb-4">
            {t("Legal", "Legal")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            {t("Privacy Policy", "Política de Privacidade")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 leading-relaxed font-medium">
            {t(
              "We know your travel plans, documents and preferences are personal. This page explains exactly what we collect, why, and the control you have over it, across our website, our inquiry forms and the client portal we're building.",
              "Sabemos que os seus planos de viagem, documentos e preferências são pessoais. Esta página explica exactamente o que recolhemos, porquê, e o controlo que tem sobre isso, no nosso website, nos formulários de pedido de informação e no portal do cliente que estamos a construir.",
            )}
          </p>
          <p className="mt-4 text-sm text-white/60 font-medium">
            {t("Last updated", "Última actualização")}: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Body */}
      <section className="py-14 sm:py-16 bg-background">
        <div className="container-x grid lg:grid-cols-4 gap-12">
          {/* Table of contents */}
          <div className="lg:col-span-1">
            <div>
              <nav className="lg:sticky lg:top-28 bg-card border border-border/60 rounded-2xl p-5">
                <div className="text-[10px] uppercase tracking-wider text-ink-soft font-bold mb-3">
                  {t("On This Page", "Nesta Página")}
                </div>
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="flex items-center gap-2.5 py-1.5 text-sm text-ink-soft hover:text-accent transition-colors"
                      >
                        <FontAwesomeIcon icon={s.icon} className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{s.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-14">
            <div>
              <p className="text-base text-ink-soft leading-relaxed">
                {t(
                  `AcrossTours DMC ("AcrossTours", "we", "us" or "our") is a Destination Management Company based in Maputo, Mozambique. This Privacy Policy applies to acrosstour.com, our booking and inquiry forms, our email and phone communications, and (once launched) our client portal (together, the "Services"). By using our Services, you agree to the collection and use of information as described here.`,
                  `A AcrossTours DMC ("AcrossTours", "nós" ou "nosso") é uma Destination Management Company sediada em Maputo, Moçambique. Esta Política de Privacidade aplica-se ao acrosstour.com, aos nossos formulários de reserva e de pedido de informação, às nossas comunicações por e-mail e telefone e, assim que for lançado, ao nosso portal do cliente (em conjunto, os "Serviços"). Ao utilizar os nossos Serviços, concorda com a recolha e utilização de informação conforme aqui descrito.`,
                )}
              </p>
            </div>

            {/* Who We Are */}
            <Section
              id="who-we-are"
              icon={faLocationDot}
              title={t("1. Who We Are", "1. Quem Somos")}
            >
              <p>
                {t(
                  "AcrossTours DMC is the data controller responsible for your personal data collected through the Services.",
                  "A AcrossTours DMC é a entidade responsável pelo tratamento (data controller) dos dados pessoais recolhidos através dos Serviços.",
                )}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm">
                <li>
                  <strong className="text-ink">{t("Registered address", "Morada")}:</strong>{" "}
                  {t(
                    "Bairro da Sommerschield, Rua de Tchamba, N°204, 1° Andar, Maputo, Mozambique",
                    "Bairro da Sommerschield, Rua de Tchamba, N°204, 1° Andar, Maputo, Moçambique",
                  )}
                </li>
                <li>
                  <strong className="text-ink">{t("Email", "E-mail")}:</strong>{" "}
                  <a href="mailto:reservations@acrosstour.com" className="text-accent hover:underline">
                    reservations@acrosstour.com
                  </a>
                </li>
                <li>
                  <strong className="text-ink">{t("Phone", "Telefone")}:</strong> +258 84 438 3501
                </li>
              </ul>
            </Section>

            {/* Data We Collect */}
            <Section
              id="data-we-collect"
              icon={faDatabase}
              title={t("2. Data We Collect", "2. Dados Que Recolhemos")}
            >
              <p>
                {t(
                  "We only collect data you choose to give us. We do not track your browsing activity, build advertising profiles, or buy data about you from anyone else. If you don't submit a form or create a portal account, we don't hold any personal data on you.",
                  "Apenas recolhemos dados que decida fornecer-nos. Não rastreamos a sua actividade de navegação, não criamos perfis publicitários, nem compramos dados sobre si a terceiros. Se não submeter um formulário ou criar uma conta no portal, não detemos quaisquer dados pessoais seus.",
                )}
              </p>
              <SubHeading>{t("Information you give us", "Informação que nos fornece")}</SubHeading>
              <ul>
                <li>
                  {t(
                    "Contact details: full name, email address, phone number.",
                    "Dados de contacto: nome completo, endereço de e-mail, número de telefone.",
                  )}
                </li>
                <li>
                  {t(
                    "Travel details: preferred dates, number of adults and children, package or destination of interest.",
                    "Detalhes da viagem: datas preferidas, número de adultos e crianças, pacote ou destino de interesse.",
                  )}
                </li>
                <li>
                  {t(
                    "Special requirements you choose to share: dietary requirements, allergies, or physical/mobility needs, so we can plan accordingly.",
                    "Requisitos especiais que decida partilhar: requisitos alimentares, alergias, ou necessidades físicas/de mobilidade, para que possamos planear em conformidade.",
                  )}
                </li>
                <li>
                  {t(
                    "Any other details you include in a free-text message to us.",
                    "Quaisquer outros detalhes que inclua numa mensagem de texto livre para nós.",
                  )}
                </li>
              </ul>
              <p className="mt-3">
                {t(
                  "Your language preference (English/Português) is saved on your own device so we don't ask twice; it stays in your browser and is never sent to or collected by us. See Section 5 for details. We do not currently ask you to create a password-protected account, and we do not process payments directly on this website.",
                  "A sua preferência de idioma (Inglês/Português) é guardada no seu próprio dispositivo para não perguntarmos duas vezes; permanece no seu navegador e nunca é enviada ou recolhida por nós. Veja a Secção 5 para mais detalhes. Actualmente não pedimos que crie uma conta protegida por palavra-passe, nem processamos pagamentos directamente neste website.",
                )}
              </p>
            </Section>

            {/* How We Use */}
            <Section
              id="how-we-use-data"
              icon={faGears}
              title={t("3. How We Use Your Data", "3. Como Usamos os Seus Dados")}
            >
              <ul>
                <li>{t("Respond to your inquiry and prepare a travel quote or itinerary.", "Responder ao seu pedido e preparar um orçamento ou itinerário de viagem.")}</li>
                <li>{t("Coordinate bookings with hotels, transport providers and other suppliers on your behalf.", "Coordenar reservas com hotéis, transportadoras e outros fornecedores em seu nome.")}</li>
                <li>{t("Arrange for special requirements (dietary, accessibility) to be honoured during your trip.", "Assegurar que requisitos especiais (alimentares, acessibilidade) sejam respeitados durante a sua viagem.")}</li>
                <li>{t("Contact you about your booking, including changes or emergencies while you're travelling.", "Contactá-lo sobre a sua reserva, incluindo alterações ou emergências durante a viagem.")}</li>
                <li>{t("Improve our website and service offering based on aggregate, non-identifying usage patterns.", "Melhorar o nosso website e oferta de serviços com base em padrões de utilização agregados e não identificáveis.")}</li>
                <li>{t("Meet legal, accounting, tax or regulatory obligations.", "Cumprir obrigações legais, contabilísticas, fiscais ou regulamentares.")}</li>
                <li>{t("Send you marketing communications, only where you've opted in (see Section 14).", "Enviar-lhe comunicações de marketing, apenas quando tiver dado o seu consentimento (ver Secção 14).")}</li>
              </ul>
            </Section>

            {/* Legal Basis */}
            <Section
              id="legal-basis"
              icon={faScaleBalanced}
              title={t("4. Legal Basis for Processing", "4. Base Legal Para o Tratamento")}
            >
              <p>{t("We rely on one or more of the following legal bases, consistent with Mozambique's data protection framework and, where applicable, the EU General Data Protection Regulation (GDPR) for travellers based in the EU:", "Baseamo-nos numa ou mais das seguintes bases legais, em conformidade com o regime de protecção de dados de Moçambique e, quando aplicável, com o Regulamento Geral sobre a Protecção de Dados (RGPD) da UE para viajantes sediados na UE:")}</p>
              <ul>
                <li><strong className="text-ink">{t("Consent", "Consentimento")}</strong>: {t("when you submit an inquiry form or subscribe to marketing.", "quando submete um formulário de pedido de informação ou subscreve marketing.")}</li>
                <li><strong className="text-ink">{t("Contract", "Contrato")}</strong>: {t("when processing is necessary to arrange the travel services you've booked or requested.", "quando o tratamento é necessário para organizar os serviços de viagem que reservou ou solicitou.")}</li>
                <li><strong className="text-ink">{t("Legitimate interest", "Interesse legítimo")}</strong>: {t("to operate, secure and improve our Services.", "para operar, proteger e melhorar os nossos Serviços.")}</li>
                <li><strong className="text-ink">{t("Legal obligation", "Obrigação legal")}</strong>: {t("where we must retain or disclose data to comply with the law.", "quando devemos reter ou divulgar dados para cumprir a lei.")}</li>
              </ul>
            </Section>

            {/* Cookies */}
            <Section
              id="cookies"
              icon={faCookieBite}
              title={t("5. Cookies & Local Storage", "5. Cookies & Armazenamento Local")}
            >
              <p>
                {t(
                  "We keep cookies to a minimum. Today, the only browser storage we use is a small, non-tracking preference saved to your device:",
                  "Mantemos os cookies ao mínimo. Actualmente, o único armazenamento no navegador que utilizamos é uma pequena preferência, sem fins de rastreio, guardada no seu dispositivo:",
                )}
              </p>
              <ul>
                <li>
                  <strong className="text-ink">{t("Language preference", "Preferência de idioma")}</strong>{" "}
                  ({t("localStorage key", "chave de localStorage")}: <code className="text-xs bg-muted px-1.5 py-0.5 rounded">across_lang</code>):{" "}
                  {t(
                    "remembers whether you prefer English or Português. This stays on your device only; it is never sent to or collected by us.",
                    "guarda se prefere Inglês ou Português. Isto permanece apenas no seu dispositivo; nunca é enviado ou recolhido por nós.",
                  )}
                </li>
                <li>
                  <strong className="text-ink">{t("Offline caching", "Cache offline")}</strong>:{" "}
                  {t(
                    "a service worker caches static assets (images, fonts, styles) on your device so the site loads faster on repeat visits. It does not collect or transmit personal data.",
                    "um service worker guarda em cache recursos estáticos (imagens, fontes, estilos) no seu dispositivo para que o site carregue mais rapidamente em visitas repetidas. Não recolhe nem transmite dados pessoais.",
                  )}
                </li>
              </ul>
              <p className="mt-3">
                {t(
                  "We do not use third-party advertising cookies or analytics trackers, and we do not collect any browsing or usage data beyond what's described above. If that ever changes, we will update this section and request consent via a cookie banner where required by law.",
                  "Não utilizamos cookies de publicidade de terceiros nem ferramentas de análise, e não recolhemos quaisquer dados de navegação ou de utilização para além do descrito acima. Caso isso alguma vez mude, actualizaremos esta secção e solicitaremos consentimento através de um aviso de cookies sempre que exigido por lei.",
                )}
              </p>
              <p className="mt-3">
                {t(
                  "You can clear or block local storage and cookies at any time through your browser settings; doing so may reset your language preference.",
                  "Pode limpar ou bloquear o armazenamento local e os cookies a qualquer momento nas definições do seu navegador; isso poderá repor a sua preferência de idioma.",
                )}
              </p>
            </Section>

            {/* Sharing */}
            <Section
              id="sharing"
              icon={faShareNodes}
              title={t("6. Sharing With Third Parties", "6. Partilha Com Terceiros")}
            >
              <p>{t("We share personal data only where necessary, and never sell it. Recipients include:", "Apenas partilhamos dados pessoais quando necessário, e nunca os vendemos. Os destinatários incluem:")}</p>
              <ul>
                <li>
                  <strong className="text-ink">{t("Form delivery processor", "Processador de formulários")}</strong>:{" "}
                  {t(
                    "inquiry and booking forms on this site are delivered to our team using Web3Forms, a third-party form-processing service. The data you submit is transmitted securely to Web3Forms and forwarded to our inbox; it is not used by Web3Forms for its own marketing.",
                    "os formulários de pedido de informação e reserva neste site são entregues à nossa equipa através do Web3Forms, um serviço de terceiros para processamento de formulários. Os dados que submete são transmitidos de forma segura ao Web3Forms e reencaminhados para a nossa caixa de entrada; não são utilizados pelo Web3Forms para fins de marketing próprios.",
                  )}
                </li>
                <li>
                  <strong className="text-ink">{t("Travel suppliers", "Fornecedores de viagem")}</strong>:{" "}
                  {t(
                    "hotels, airlines, transport operators, activity providers and other suppliers, but only the details needed to fulfil your specific booking (e.g. name, dates, dietary needs).",
                    "hotéis, companhias aéreas, operadoras de transporte, fornecedores de actividades e outros parceiros, mas apenas os dados necessários para concretizar a sua reserva específica (ex.: nome, datas, requisitos alimentares).",
                  )}
                </li>
                <li>
                  <strong className="text-ink">{t("Hosting & infrastructure providers", "Fornecedores de alojamento e infraestrutura")}</strong>:{" "}
                  {t("who store and serve our website and its data on our behalf, under confidentiality obligations.", "que armazenam e disponibilizam o nosso website e os seus dados em nosso nome, sob obrigações de confidencialidade.")}
                </li>
                <li>
                  <strong className="text-ink">{t("Authorities", "Autoridades")}</strong>:{" "}
                  {t("where required by law, regulation, or to protect the rights, safety or property of AcrossTours, our travellers, or others.", "quando exigido por lei, regulamento, ou para proteger os direitos, a segurança ou o património da AcrossTours, dos nossos viajantes ou de terceiros.")}
                </li>
              </ul>
            </Section>

            {/* International Transfers */}
            <Section
              id="transfers"
              icon={faGlobe}
              title={t("7. International Transfers", "7. Transferências Internacionais")}
            >
              <p>
                {t(
                  "Because travel is inherently cross-border, your data may be transferred to and processed in countries outside Mozambique, for example where a hotel, airline or our service providers are based. Where we transfer personal data internationally, we take steps to ensure it remains protected consistently with this Policy, including using providers with appropriate safeguards.",
                  "Como a actividade turística é, por natureza, transfronteiriça, os seus dados poderão ser transferidos e tratados em países fora de Moçambique, por exemplo onde um hotel, companhia aérea ou os nossos prestadores de serviços estejam sediados. Sempre que transferimos dados pessoais internacionalmente, tomamos medidas para garantir que permanecem protegidos de forma consistente com esta Política, incluindo a utilização de prestadores com salvaguardas adequadas.",
                )}
              </p>
            </Section>

            {/* Retention */}
            <Section
              id="retention"
              icon={faClockRotateLeft}
              title={t("8. Data Retention", "8. Retenção de Dados")}
            >
              <p>
                {t(
                  "We keep personal data only for as long as needed for the purpose it was collected: typically, for the duration of your inquiry or trip planning, plus a reasonable period afterwards to handle follow-up questions, complaints, or legal, accounting and tax requirements. Data we no longer need is deleted or anonymised.",
                  "Guardamos dados pessoais apenas pelo tempo necessário para o efeito para o qual foram recolhidos: normalmente, durante o período do seu pedido ou planeamento da viagem, mais um período razoável posterior para tratar de questões de acompanhamento, reclamações, ou requisitos legais, contabilísticos e fiscais. Os dados que já não sejam necessários são eliminados ou anonimizados.",
                )}
              </p>
            </Section>

            {/* Security */}
            <Section
              id="security"
              icon={faShieldHalved}
              title={t("9. How We Protect Your Data", "9. Como Protegemos os Seus Dados")}
            >
              <p>
                {t(
                  "We use reasonable technical and organisational measures to protect your data, including encrypted transmission (HTTPS) between your browser and our systems, restricted internal access, and working only with reputable third-party processors. No method of transmission or storage is 100% secure, but we work to use commercially acceptable means to protect your personal data.",
                  "Utilizamos medidas técnicas e organizacionais razoáveis para proteger os seus dados, incluindo transmissão encriptada (HTTPS) entre o seu navegador e os nossos sistemas, acesso interno restrito, e trabalhando apenas com processadores terceiros de confiança. Nenhum método de transmissão ou armazenamento é 100% seguro, mas procuramos utilizar meios comercialmente aceitáveis para proteger os seus dados pessoais.",
                )}
              </p>
            </Section>

            {/* Your Rights */}
            <Section
              id="your-rights"
              icon={faUserCheck}
              title={t("10. Your Rights", "10. Os Seus Direitos")}
            >
              <p>{t("Depending on your location, you have the right to:", "Consoante a sua localização, tem o direito de:")}</p>
              <ul>
                <li>{t("Access the personal data we hold about you.", "Aceder aos dados pessoais que detemos sobre si.")}</li>
                <li>{t("Correct inaccurate or incomplete data.", "Corrigir dados incorrectos ou incompletos.")}</li>
                <li>{t("Request deletion of your data, where it's no longer needed or you withdraw consent.", "Solicitar a eliminação dos seus dados, quando já não forem necessários ou retire o consentimento.")}</li>
                <li>{t("Object to or restrict certain processing, including direct marketing.", "Opor-se ou restringir determinado tratamento, incluindo marketing directo.")}</li>
                <li>{t("Request a portable copy of the data you provided to us.", "Solicitar uma cópia portátil dos dados que nos forneceu.")}</li>
                <li>{t("Withdraw consent at any time, without affecting processing carried out before the withdrawal.", "Retirar o consentimento a qualquer momento, sem afectar o tratamento realizado antes dessa retirada.")}</li>
                <li>{t("Lodge a complaint with your local data protection authority.", "Apresentar uma reclamação junto da autoridade de protecção de dados competente.")}</li>
              </ul>
              <p className="mt-3">
                {t(
                  "To exercise any of these rights, contact us using the details in Section 16. We'll respond within a reasonable time and, in any case, within the period required by applicable law.",
                  "Para exercer qualquer um destes direitos, contacte-nos através dos dados na Secção 16. Responderemos num prazo razoável e, em todo o caso, dentro do prazo exigido pela lei aplicável.",
                )}
              </p>
            </Section>

            {/* Portal */}
            <Section
              id="portal"
              icon={faUserLock}
              title={t("11. Client Portal (Coming Soon)", "11. Portal do Cliente (Brevemente)")}
            >
              <p>
                {t(
                  "We're building a client portal so travellers and corporate clients can manage bookings, itineraries and documents in one place. This Policy has been written to already cover that portal, and will apply to it in full once it launches. The same principle applies there as everywhere else on our Services: the portal will only ever collect data you actively give us, entered or uploaded by you. We will not collect additional data about you behind the scenes. Once live, the information you provide there will include:",
                  "Estamos a construir um portal do cliente para que viajantes e clientes corporativos possam gerir reservas, itinerários e documentos num só lugar. Esta Política já foi redigida para cobrir esse portal, e aplicar-se-á a ele na íntegra assim que for lançado. Aplica-se aí o mesmo princípio que em todo o resto dos nossos Serviços: o portal apenas recolherá dados que nos forneça activamente, introduzidos ou carregados por si. Não recolheremos dados adicionais sobre si de forma automática. Uma vez lançado, a informação que fornecer incluirá:",
                )}
              </p>
              <ul>
                <li>{t("Account credentials: your email address and a securely hashed password (we never store passwords in plain text).", "Credenciais de conta: o seu endereço de e-mail e uma palavra-passe protegida por hash (nunca guardamos palavras-passe em texto simples).")}</li>
                <li>{t("Booking history and itinerary details linked to your account.", "Histórico de reservas e detalhes de itinerários associados à sua conta.")}</li>
                <li>{t("Travel document details you choose to upload (e.g. passport number/expiry) to speed up future bookings, stored encrypted and accessible only to authorised staff.", "Detalhes de documentos de viagem que opte por carregar (ex.: número/validade do passaporte) para agilizar reservas futuras, armazenados de forma encriptada e acessíveis apenas a pessoal autorizado.")}</li>
                <li>{t("Billing and payment references, processed via a PCI-DSS-compliant payment provider. We will never store full card numbers on our own servers.", "Referências de facturação e pagamento, processadas através de um prestador de pagamentos em conformidade com PCI-DSS. Nunca armazenaremos números completos de cartão nos nossos próprios servidores.")}</li>
              </ul>
              <p className="mt-3">
                {t(
                  "You will be able to update your details, download your data, or request deletion of your portal account directly from the portal, or by contacting us. We will notify existing users of any material change before the portal launches.",
                  "Poderá actualizar os seus dados, descarregar os seus dados, ou solicitar a eliminação da sua conta do portal directamente a partir do portal, ou contactando-nos. Notificaremos os utilizadores existentes de qualquer alteração material antes do lançamento do portal.",
                )}
              </p>
            </Section>

            {/* Sensitive Data */}
            <Section
              id="sensitive-data"
              icon={faTriangleExclamation}
              title={t("12. Sensitive Data", "12. Dados Sensíveis")}
            >
              <p>
                {t(
                  "Details like food allergies, dietary requirements, or accessibility/mobility needs can qualify as sensitive personal data under some data protection laws. You share this information voluntarily and only for the purpose of arranging appropriate accommodations, meals and services during your trip. We limit access to this data to the staff and suppliers who need it to serve you, and we do not use it for any other purpose, including marketing or profiling.",
                  "Detalhes como alergias alimentares, requisitos dietéticos, ou necessidades de acessibilidade/mobilidade podem ser considerados dados pessoais sensíveis ao abrigo de algumas leis de protecção de dados. Partilha esta informação voluntariamente e apenas com o objectivo de organizar acomodações, refeições e serviços adequados durante a sua viagem. Limitamos o acesso a estes dados ao pessoal e fornecedores que deles necessitem para o servir, e não os utilizamos para qualquer outro fim, incluindo marketing ou definição de perfis.",
                )}
              </p>
            </Section>

            {/* Children */}
            <Section
              id="children"
              icon={faChildReaching}
              title={t("13. Children's Privacy", "13. Privacidade de Crianças")}
            >
              <p>
                {t(
                  "Our Services are not directed at children, and we do not knowingly collect personal data directly from children. Where a parent or guardian submits an inquiry that includes details of children travelling with them (e.g. ages, dietary needs), that information is provided by the adult and used solely to plan the family's trip.",
                  "Os nossos Serviços não se destinam a crianças, e não recolhemos, conscientemente, dados pessoais directamente de crianças. Quando um pai, mãe ou responsável submete um pedido que inclua dados de crianças que viajam consigo (ex.: idades, requisitos alimentares), essa informação é fornecida pelo adulto e utilizada exclusivamente para planear a viagem da família.",
                )}
              </p>
            </Section>

            {/* Marketing */}
            <Section
              id="marketing"
              icon={faEnvelopeOpenText}
              title={t("14. Marketing Communications", "14. Comunicações de Marketing")}
            >
              <p>
                {t(
                  "We will only send you promotional emails or messages about offers and packages if you've opted in, for example by subscribing or indicating interest when you submit a form. You can opt out at any time by using the unsubscribe link in any marketing email, or by contacting us directly; we'll still send you essential service messages related to an active booking.",
                  "Apenas lhe enviaremos e-mails ou mensagens promocionais sobre ofertas e pacotes se tiver dado o seu consentimento, por exemplo ao subscrever ou ao indicar interesse ao submeter um formulário. Pode cancelar a subscrição a qualquer momento através do link de cancelamento em qualquer e-mail de marketing, ou contactando-nos directamente; continuaremos a enviar mensagens essenciais relacionadas com uma reserva activa.",
                )}
              </p>
            </Section>

            {/* Changes */}
            <Section
              id="changes"
              icon={faArrowsRotate}
              title={t("15. Changes to This Policy", "15. Alterações a Esta Política")}
            >
              <p>
                {t(
                  "We may update this Privacy Policy from time to time, particularly as we launch new features like the client portal. We'll update the \"Last updated\" date above, and for material changes we'll take reasonable steps to notify you, such as a notice on the website.",
                  "Poderemos actualizar esta Política de Privacidade periodicamente, particularmente à medida que lançamos novas funcionalidades como o portal do cliente. Actualizaremos a data de \"Última actualização\" acima e, para alterações materiais, tomaremos medidas razoáveis para o notificar, como um aviso no website.",
                )}
              </p>
            </Section>

            {/* Contact */}
            <Section
              id="contact"
              icon={faEnvelope}
              title={t("16. Contact Us", "16. Contacte-nos")}
            >
              <p>
                {t(
                  "Questions about this Policy, or want to exercise your data rights? Reach us at:",
                  "Tem questões sobre esta Política, ou quer exercer os seus direitos sobre os dados? Contacte-nos:",
                )}
              </p>
              <ul className="mt-3 space-y-2 text-sm not-italic">
                <li className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-accent" />
                  <a href="mailto:reservations@acrosstour.com" className="text-accent hover:underline">
                    reservations@acrosstour.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-accent" />
                  <a href="tel:+258844383501" className="text-accent hover:underline">
                    +258 84 438 3501
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-accent mt-0.5" />
                  <span className="text-ink-soft">
                    {t(
                      "Bairro da Sommerschield, Rua de Tchamba, N°204, 1° Andar, Maputo, Mozambique",
                      "Bairro da Sommerschield, Rua de Tchamba, N°204, 1° Andar, Maputo, Moçambique",
                    )}
                  </span>
                </li>
              </ul>
            </Section>

            <div>
              <div className="pt-6 border-t border-border/60">
                <Link to="/" className="text-sm font-semibold text-accent hover:underline">
                  {t("← Back to Home", "← Voltar ao Início")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Section({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: typeof faDatabase;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div id={id} className="scroll-mt-28">
        <h2 className="flex items-center gap-3 text-2xl font-bold text-ink mb-4">
          <span className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={icon} className="w-4 h-4" />
          </span>
          {title}
        </h2>
        <div className="text-base text-ink-soft leading-relaxed [&_ul]:mt-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-base [&_li]:text-ink-soft [&_li]:leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-bold uppercase tracking-wider text-ink mt-5 mb-2">{children}</h3>;
}
