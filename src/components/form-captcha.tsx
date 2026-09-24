import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import { useLanguage } from "@/components/language-provider";

// AcrossTours' own hCaptcha site key (public — safe to ship in the bundle). Web3Forms
// verifies the token server-side, which requires the matching hCaptcha secret key to be
// saved in the Web3Forms dashboard. Can be overridden with VITE_HCAPTCHA_SITEKEY.
const HCAPTCHA_SITEKEY =
  (import.meta.env.VITE_HCAPTCHA_SITEKEY as string | undefined) ??
  "d31c922a-08da-4bfa-bfe0-39f4a4f6980c";

/**
 * State for one form's hCaptcha. Call `requireToken()` in the submit handler — it
 * returns the token, or null (and shows the "please verify" hint) if the user hasn't
 * solved it yet. Call `reset()` after every submission: tokens are single-use.
 */
export function useFormCaptcha() {
  const ref = useRef<HCaptcha>(null);
  const [token, setToken] = useState<string | null>(null);
  const [missing, setMissing] = useState(false);

  const requireToken = () => {
    if (!token) setMissing(true);
    return token;
  };

  const reset = () => {
    ref.current?.resetCaptcha();
    setToken(null);
  };

  return { ref, token, setToken, missing, setMissing, requireToken, reset };
}

export type FormCaptchaState = ReturnType<typeof useFormCaptcha>;

export function FormCaptcha({ captcha }: { captcha: FormCaptchaState }) {
  const { t, lang } = useLanguage();
  const { setToken, setMissing } = captcha;

  // The widget is remounted (key={lang}) when the language changes, which discards
  // any solved token — clear ours to match.
  useEffect(() => {
    setToken(null);
  }, [lang, setToken]);

  return (
    <div>
      <HCaptcha
        key={lang}
        ref={captcha.ref}
        sitekey={HCAPTCHA_SITEKEY}
        reCaptchaCompat={false}
        languageOverride={lang}
        onVerify={(token) => {
          setToken(token);
          setMissing(false);
        }}
        onExpire={() => setToken(null)}
        onError={() => setToken(null)}
      />
      {captcha.missing && (
        <p className="mt-2 text-sm font-semibold text-red-700">
          {t(
            "Please confirm you're not a robot before submitting.",
            "Por favor confirme que não é um robô antes de submeter.",
          )}
        </p>
      )}
    </div>
  );
}
