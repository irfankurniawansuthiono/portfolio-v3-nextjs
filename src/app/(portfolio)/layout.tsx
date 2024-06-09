import { NavbarComponent } from "./components/Navbar/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
