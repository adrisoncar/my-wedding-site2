// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "Adrison & [Partner]'s Wedding",
  description: "Celebrate the wedding of Adrison and [Partner Name] 💍",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}