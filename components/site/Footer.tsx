import { cacheLife } from "next/cache";
import Link from "next/link";
import { BRAND } from "@/lib/content";

// Cached so the footer stays in the static shell; refreshed daily so the year rolls over.
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link href="/" className="wordmark">
          {BRAND.wordmark}
        </Link>
        <span>
          © <CopyrightYear /> {BRAND.legal} · Serving employers across the US
        </span>
      </div>
    </footer>
  );
}
