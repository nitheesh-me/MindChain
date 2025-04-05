import type React from "react";
import { PersistentChat } from "@/components/chat/persistent-chat";
import "../globals.css";

export const metadata = {
  title: "MindChain - IIIT Hyderabad",
  description: "Context-aware communication platform for IIIT Hyderabad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <PersistentChat />
    </>
  );
}
