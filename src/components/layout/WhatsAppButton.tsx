import { SITE } from "@/lib/site";

export function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello Monarch's Mega Ventures, I'd like to enquire about your services."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center w-14 h-14 rounded-full text-white shadow-elegant hover:scale-110 transition-transform duration-300"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.13-.62.094-.99-.058-.157-.244-.232-.502-.36-.301-.144-1.832-.91-2.058-.99zM16.452 27.7c-2.092 0-4.137-.6-5.91-1.732l-4.135 1.333 1.347-4.046a10.927 10.927 0 0 1-1.748-5.94c0-6.077 4.97-11.022 11.084-11.022 6.114 0 11.084 4.945 11.084 11.022 0 6.075-4.97 11.022-11.084 11.022zm0-23.93c-7.143 0-12.94 5.794-12.94 12.928 0 2.16.532 4.222 1.547 6.07L3 30l5.487-1.764a13.107 13.107 0 0 0 6.965 1.99c7.143 0 12.94-5.787 12.94-12.92 0-7.135-5.797-12.928-12.94-12.928z" />
      </svg>
      <span className="absolute inset-0 rounded-full" style={{ backgroundColor: "rgba(37, 211, 102, 0.3)" }} />
    </a>
  );
}
