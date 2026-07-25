import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export const metadata = {
  title: "Resume | Tamilarasan S",
  description: "View and download the resume of Tamilarasan S."
};

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-[100px] pb-12 px-6 flex flex-col items-center max-w-5xl mx-auto">
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-between items-center mb-8 animate-fade-in-up">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-accent transition-colors"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to Portfolio
        </Link>
        <a
          href="/resume/tamilarasan-s-resume.pdf"
          download="Tamilarasan_S_Resume.pdf"
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-all duration-300 border border-accent bg-accent/10 text-accent hover:bg-accent hover:text-bg rounded-full shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)] hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.5)]"
        >
          <Download className="mr-2" size={16} />
          Download Resume
        </a>
      </div>

      <div className="w-full h-[80vh] border border-border rounded-xl overflow-hidden bg-bg/50 backdrop-blur-sm shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <iframe
          src="/resume/tamilarasan-s-resume.pdf#view=FitH"
          className="w-full h-full border-none"
          title="Tamilarasan S Resume"
        />
      </div>
    </main>
  );
}
