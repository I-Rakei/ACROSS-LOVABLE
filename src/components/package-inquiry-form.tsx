import { useState, type FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import { useLanguage } from "@/components/language-provider";
import { submitToWeb3Forms, type InquiryStatus } from "@/lib/web3forms";

export function PackageInquiryForm({ packageName }: { packageName: string }) {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<InquiryStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");

    const ok = await submitToWeb3Forms(form, {
      subject: `New Special Package Inquiry — ${packageName}`,
      package: packageName,
      from_name: "AcrossTours DMC — Special Packages",
    });

    if (ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f4f4f4] p-6 sm:p-8 space-y-4 rounded-xl shadow-sm"
    >
      <input type="hidden" name="package" value={packageName} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("Full Name", "Nome Completo")}
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-background border border-border px-3.5 py-2 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
            placeholder={t("Your name", "O seu nome")}
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("Email Address", "Endereço de E-mail")}
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-background border border-border px-3.5 py-2 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("Phone Number", "Número de Telefone")}
          </label>
          <input
            type="text"
            name="phone"
            required
            className="w-full bg-background border border-border px-3.5 py-2 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
            placeholder="+258..."
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("Package", "Pacote")}
          </label>
          <input
            type="text"
            readOnly
            value={packageName}
            className="w-full bg-muted border border-border px-3.5 py-2 text-sm text-foreground/80 rounded-lg cursor-not-allowed"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("Adults", "Adultos")}
          </label>
          <input
            type="number"
            name="adults"
            defaultValue={2}
            min={1}
            className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("0–2 years", "0-2 anos")}
          </label>
          <input
            type="number"
            name="children_0_2"
            defaultValue={0}
            min={0}
            className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("2–11 years", "2-11 anos")}
          </label>
          <input
            type="number"
            name="children_2_11"
            defaultValue={0}
            min={0}
            className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("11+ years", "11+ anos")}
          </label>
          <input
            type="number"
            name="children_11_plus"
            defaultValue={0}
            min={0}
            className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("Preferred Departure Date", "Data de Partida Preferida")}
          </label>
          <input
            type="date"
            name="departure_date"
            className="w-full bg-background border border-border px-3.5 py-2 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
            {t("Return Date", "Data de Retorno")}
          </label>
          <input
            type="date"
            name="return_date"
            className="w-full bg-background border border-border px-3.5 py-2 text-sm text-foreground focus:border-accent focus:outline-none transition rounded-lg"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
          {t("Dietary Requirements", "Requisitos Alimentares")}
        </label>
        <textarea
          name="dietary_requirements"
          rows={3}
          className="w-full bg-background border border-border px-3.5 py-2 text-sm text-foreground placeholder:text-ink-soft/40 focus:border-accent focus:outline-none transition rounded-lg"
          placeholder={t(
            "Let us know about any food restrictions, allergies or special meal requests...",
            "Indique-nos quaisquer restrições alimentares, alergias ou pedidos especiais de alimentação...",
          )}
        />
      </div>

      <div>
        <label className="block text-xs tracking-[0.18em] font-bold uppercase text-ink-soft mb-2">
          {t("Additional Request Details", "Detalhes Adicionais do Pedido")}
        </label>
        <textarea
          name="message"
          rows={4}
          className="w-full bg-background border border-border px-3.5 py-2 text-sm text-foreground placeholder:text-ink-soft/40 focus:border-accent focus:outline-none transition rounded-lg"
          placeholder={t(
            "Specify any physical limitations or custom itinerary desires...",
            "Especifique quaisquer limitações físicas ou desejos de itinerário...",
          )}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-accent disabled:opacity-60 text-white py-2.5 font-bold text-sm tracking-wider hover:opacity-90 transition rounded-lg"
      >
        {status === "submitting"
          ? t("Sending…", "A enviar…")
          : t("SUBMIT INQUIRY", "SUBMETER INFORMAÇÃO")}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm font-semibold text-green-700">
          <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4" />
          {t(
            "Thank you — your inquiry has been sent. We'll be in touch shortly.",
            "Obrigado — o seu pedido foi enviado. Entraremos em contacto em breve.",
          )}
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm font-semibold text-red-700">
          <FontAwesomeIcon icon={faCircleExclamation} className="w-4 h-4" />
          {t(
            "Something went wrong sending your inquiry. Please try again or contact us directly.",
            "Ocorreu um erro ao enviar o seu pedido. Tente novamente ou contacte-nos directamente.",
          )}
        </p>
      )}
    </form>
  );
}
