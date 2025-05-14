import Providers from "@/components/ui/provider";
import type { ReactNode } from "react";

export const metadata = {
  title: "Ecloud Front Challenge",
  description: "Nomad Hotels homepage",
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="es">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
