export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 border-t border-white/10" role="contentinfo">
      <div className="container-content flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-medium text-lg text-white">
          Tamilarasan S<span className="text-accent">.</span>
        </p>
        <p className="font-body text-sm text-white/40">
          © {year} Tamilarasan S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
