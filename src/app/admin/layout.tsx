import type { Metadata } from "next";
import "../globals.css";
import "./admin.css";
import { ToastProvider } from "@/components/admin/Toast";

export const metadata: Metadata = {
  title: "Admin Panel | Sathvik T Devadiga",
  robots: { index: false, follow: false }
};

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  );
}
