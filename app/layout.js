import "./globals.css";

export const metadata = {
  title: "Bravo Construções | Engenharia e gestão de obras",
  description:
    "Construímos o seu projeto do início ao fim. Excelência em engenharia e gestão de obras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
