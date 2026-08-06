export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative z-10 flex-1 animate-fade-up">
      {children}
    </main>
  );
}
