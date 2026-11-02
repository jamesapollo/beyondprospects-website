"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BRAND, NAV_LINKS } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { IntroCallDialog, LoginDialog } from "./Dialogs";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialog, setDialog] = useState<"login" | "call" | null>(null);

  const openDialog = (d: "login" | "call") => {
    setMenuOpen(false);
    setDialog(d);
  };

  const links = (
    <ul className="nav__links">
      {NAV_LINKS.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="nav__link" onClick={() => setMenuOpen(false)} aria-current={pathname === l.href ? "page" : undefined}>
            {l.label}
          </Link>
        </li>
      ))}
      <li>
        <button type="button" className="nav__link" onClick={() => openDialog("call")}>
          Contact
        </button>
      </li>
    </ul>
  );

  const actions = (
    <div className="nav__actions">
      <Button size="sm" variant="secondary" onClick={() => openDialog("login")}>
        Log in
      </Button>
    </div>
  );

  return (
    <header className="container">
      <nav className={`nav${menuOpen ? " nav--open" : ""}`} aria-label="Main">
        <Link href="/" className="wordmark" onClick={() => setMenuOpen(false)}>
          {BRAND.wordmark}
        </Link>
        {links}
        {actions}
        <IconButton
          className="nav__toggle"
          icon={menuOpen ? "x" : "menu"}
          variant="outline"
          size={44}
          label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        />
        <div id="mobile-menu" className="nav__menu">
          {links}
          {actions}
        </div>
      </nav>
      <LoginDialog open={dialog === "login"} onClose={() => setDialog(null)} />
      <IntroCallDialog open={dialog === "call"} onClose={() => setDialog(null)} />
    </header>
  );
}
