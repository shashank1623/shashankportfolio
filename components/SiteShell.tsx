import { Appbar } from "@/components/Appbar";
import { Footer } from "@/components/Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grain min-h-dvh w-full max-w-[100vw] bg-canvas text-ink">
      <Appbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
