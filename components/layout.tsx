import Header from "./header";
import Footer from "./footer";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <title>Quinielas MX</title>
      <Header />
      <main>{children}</main>
    </>
  );
}
