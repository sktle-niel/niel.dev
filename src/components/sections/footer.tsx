import { Link } from "react-router-dom";
import { Wordmark } from "@/components/ui/wordmark";
import { NAV, PROFILE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 py-16 md:grid-cols-3 md:px-8">
        <div className="col-span-2">
          <Link to="/" aria-label="niel.dev home">
            <Wordmark />
          </Link>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
            {PROFILE.role} in the {PROFILE.location} — websites, web systems,
            desktop and mobile apps, and capstone projects, from idea to
            deployment.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Navigate
          </h4>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                Back to top
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-muted md:flex-row md:px-8">
          <span>
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.org}
          </span>
          <span>Designed &amp; built in the Philippines</span>
        </div>
      </div>
    </footer>
  );
}
