"use client";
import { MessageCircle, Phone, UserCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const PHONE_NUMBER = "+919757101055"; // Matches Contact Information CTA
const CONTACT_ANCHOR = "#contact";

export default function FAB() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Scroll to contact form if on homepage, else navigate
  const handleContactClick = () => {
    if (pathname === "/") {
      const el = document.getElementById("contact-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = CONTACT_ANCHOR;
      }
    } else {
      window.location.href = "/" + CONTACT_ANCHOR;
    }
    setOpen(false);
  };

  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col items-end gap-3 mb-2">
          <button
            onClick={() => {
              window.location.href = `tel:${PHONE_NUMBER}`;
              setOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg bg-teal-600 text-white hover:bg-teal-700 font-semibold border border-teal-700 transition"
            aria-label="Call Us"
          >
            <Phone className="w-5 h-5" /> Call
          </button>
          <button
            onClick={() => {
              window.open('https://wa.me/919757101055', '_blank');
              setOpen(false);
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg bg-green-600 text-white hover:bg-green-700 font-semibold border border-green-700 transition"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045C2.073 6.507 6.659 2 12.006 2c2.652 0 5.146 1.037 7.022 2.921A9.825 9.825 0 0122 11.994c-.003 5.523-4.589 10.01-10.051 10.01zm8.413-17.413A11.815 11.815 0 0012.006 0C5.373 0 0 5.373 0 12.045c0 2.128.557 4.199 1.613 6.032L.057 23.953a1 1 0 001.225 1.225l5.924-1.556A11.89 11.89 0 0012.006 24C18.627 24 24 18.627 24 11.994a11.82 11.82 0 00-3.536-8.707z"/></svg> WhatsApp
          </button>
          <button
            onClick={handleContactClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg bg-slate-700 text-white hover:bg-slate-800 font-semibold border border-slate-800 transition"
            aria-label="Contact Us"
          >
            <MessageCircle className="w-5 h-5" /> Contact Us
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-16 h-16 rounded-full bg-teal-600 text-white shadow-xl flex items-center justify-center hover:bg-teal-700 transition-all focus:outline-none focus:ring-4 focus:ring-teal-300"
        aria-label="Open contact options"
      >
  {open ? <X className="w-8 h-8" /> : <UserCircle className="w-8 h-8" />}
      </button>
    </div>
  );
}
