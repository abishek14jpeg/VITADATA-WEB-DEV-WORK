import React from 'react';

export default function Footer() {
  return (
    <footer
      className="py-5"
      style={{
        background: 'hsl(28, 30%, 15%)',
        borderTop: '1px solid hsl(28, 20%, 80% / 0.12)',
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-heading text-lg font-bold tracking-widest uppercase"
          style={{ color: 'hsl(28, 45%, 62%)' }}
        >
          <span ><span className="logo-vitadata">VITADATA</span> <span className="logo-solutions">SOLUTIONS</span></span>
        </span>
        <span
          className="font-body text-xs"
          style={{ color: 'hsl(28, 15%, 58%)' }}
        >
          © 2026 <span ><span className="logo-vitadata">VITADATA</span> <span className="logo-solutions">SOLUTIONS</span></span>. All rights reserved.
        </span>
      </div>
    </footer>
  );
}



