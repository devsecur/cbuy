'use client';
import Header from '@/components/organisms/Header/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header
        logoSrc='/images/Link.png'
        onLoginClick={() => console.log('Login')}
        btnIcon='PersonIcon'
        btnValue='Login'
      />
      {children}
    </section>
  );
}
