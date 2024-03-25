import MainNav from '@/components/Nav/MainNav';
import SecondaryNav from '@/components/Nav/SecondaryNav';
import { Gowun_Dodum } from 'next/font/google';
import './globals.css';

const gowun = Gowun_Dodum({ subsets: ['latin'], weight: '400', preload: true });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gowun.className} bg-dark text-light`}>
        <header className="mb-[60px]">
          <SecondaryNav />
          <MainNav />
        </header>
        {children}
      </body>
    </html>
  );
}
