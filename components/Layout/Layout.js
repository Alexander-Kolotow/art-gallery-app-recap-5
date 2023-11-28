import { Navigation } from "../Navigation/Navigation.js";
export function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
}
