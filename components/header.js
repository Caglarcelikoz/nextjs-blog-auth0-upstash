import Link from "next/link";

export default function Header() {
  return (
    <header className="site-container py-6">
      <nav className="space-x-4">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Posts</a>
        </Link>
      </nav>
    </header>
  );
}
