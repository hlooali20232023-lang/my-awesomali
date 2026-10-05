'use client';
import { useState } from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState('en');

  return (
    <html lang={lang} dir={lang === 'ar' ? 'ar' : 'ltr'}>
      <body>
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
            {lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
          </button>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
