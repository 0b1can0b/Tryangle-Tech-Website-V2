import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tryangle Tech | Innovative IT Solutions in Ahmedabad",
  description: "Ahmedabad's premier technology partner, architecting the future of digital excellence through engineered precision and creative soul.",
};

export default function MetadataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
