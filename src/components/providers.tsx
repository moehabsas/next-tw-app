import { ThemeProvider } from "next-themes";

export default function RootProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
