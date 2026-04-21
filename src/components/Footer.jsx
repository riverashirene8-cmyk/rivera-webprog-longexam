import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-50 py-8">
      <div className="mx-auto w-full max-w-6xl px-4 flex flex-col gap-6">

        {/* BRAND (LEFT) */}
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">
            BulldogEx Shop
          </h3>
        </div>

        {/* INFO DETAILS (LEFT STRUCTURED) */}
        <div className="text-sm text-zinc-600 space-y-1">
          <p>📍 Location: NU Campus</p>
          <p>⏰ Open Hours: Mon–Fri, 9:00 AM – 4:30 PM</p>
          <p>📧 Email: support@bulldogex.com</p>
          <p>📞 Phone: 0912-345-6789</p>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-zinc-300 pt-4 text-xs text-zinc-500 text-center">
          © 2026 BulldogEx Shop. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;