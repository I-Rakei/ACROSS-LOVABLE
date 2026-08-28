const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type InquiryStatus = "idle" | "submitting" | "success" | "error";

/**
 * Submits a form's fields to Web3Forms. `extra` overrides/adds fields (e.g. subject,
 * package name) on top of whatever the form's own `name`-ed inputs collected.
 * Returns whether Web3Forms accepted the submission.
 */
export async function submitToWeb3Forms(
  form: HTMLFormElement,
  extra: Record<string, string> = {},
): Promise<boolean> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
  if (!accessKey) {
    console.error("VITE_WEB3FORMS_ACCESS_KEY is not set — inquiry cannot be delivered.");
    return false;
  }

  const formData = new FormData(form);
  formData.set("access_key", accessKey);
  for (const [key, value] of Object.entries(extra)) {
    formData.set(key, value);
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
    const result = await res.json();
    return Boolean(result.success);
  } catch {
    return false;
  }
}
