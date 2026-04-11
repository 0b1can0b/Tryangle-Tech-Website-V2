import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tryangle Tech | Digital Innovation & Technology Solutions",
  description: "Tryangle Tech provides cutting-edge digital marketing, web development, and technology solutions to help your business grow in the digital age.",
};

export default function MetadataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
