import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-8xl text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex px-6 py-3 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.25em]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-6 py-3 bg-gradient-gold text-primary-foreground rounded-full text-xs uppercase tracking-[0.25em]"
          >
            Try again
          </button>
          <a href="/" className="px-6 py-3 border border-border rounded-full text-xs uppercase tracking-[0.25em]">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Monarch's Mega Resources Nigeria Limited — Excellence in Every Endeavour" },
      {
        name: "description",
        content:
          "Premium Nigerian conglomerate offering luxury furniture, modern fishery, world-class piggery and elite laundry services across Nigeria.",
      },
      { name: "author", content: "Monarch's Mega Resources Nigeria Limited" },
      { property: "og:title", content: "Monarch's Mega Resources Nigeria Limited — Excellence in Every Endeavour" },
      { property: "og:description", content: "A premium, modern website for Monarch's Mega Resources Nigeria Limited, showcasing luxury furniture, fishery, piggery, and laundry services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0B1220" },
      { name: "twitter:title", content: "Monarch's Mega Resources Nigeria Limited — Excellence in Every Endeavour" },
      { name: "description", content: "A premium, modern website for Monarch's Mega Resources Nigeria Limited, showcasing luxury furniture, fishery, piggery, and laundry services." },
      { name: "twitter:description", content: "A premium, modern website for Monarch's Mega Resources Nigeria Limited, showcasing luxury furniture, fishery, piggery, and laundry services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c6b88718-e2ab-4fc5-9fb2-e5021f7368cc/id-preview-89157af1--87a04134-3ea4-419b-89b7-1af1cfabf789.lovable.app-1778406458442.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c6b88718-e2ab-4fc5-9fb2-e5021f7368cc/id-preview-89157af1--87a04134-3ea4-419b-89b7-1af1cfabf789.lovable.app-1778406458442.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..800,0..100&family=Inter+Tight:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </QueryClientProvider>
  );
}
