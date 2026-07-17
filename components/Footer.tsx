import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js, Tailwind CSS & Motion
        </p>
      </div>
    </footer>
  );
}
