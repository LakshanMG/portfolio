import "./globals.css";

export const metadata = {
  title: "Lakshan.dev",
  description: "Portfolio of Lakshan Wickramasinghe, BSc IT Graduate, Rajarata University of Sri Lanka.",
  icons: {
    icon: '/assets/mascot.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#07090E] text-slate-300 antialiased overflow-x-hidden selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}