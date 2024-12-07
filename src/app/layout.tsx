import { KitchnProvider } from "kitchn";
import { KitchnRegistry } from "kitchn/next";
import { Inter } from "next/font/google";

import "kitchn/fonts.css";

// Initialisation de la police Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog avec Kitchn",
  description: "Un blog créé avec Next.js et Kitchn",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <KitchnRegistry>
          <KitchnProvider>{children}</KitchnProvider>
        </KitchnRegistry>
      </body>
    </html>
  );
}