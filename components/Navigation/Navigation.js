import Link from "next/link";
export function Navigation() {
  return (
    <>
      <nav>
        <Link href="/">Spotlight</Link>
        <br></br>
        <Link href="/art-pieces">art-pieces</Link>
      </nav>
    </>
  );
}
