import { useState } from "react";
import { Github, Linkedin, Mail, Heart, Phone, Copy, Check } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const emailAddress = "vishallbharadwaj27@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full border-t border-border bg-card/30 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear}{" "}
              <span className="font-semibold text-foreground">
                Vishal M Bharadwaj
              </span>
              . All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center sm:justify-start gap-1">
              Built with <Heart className="h-3 w-3 text-primary animate-pulse" /> using React & Tailwind
            </p>
          </div>

          {/* Contact Links & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Phone */}
            <a
              href="tel:+91-6364-231125"
              className="p-2.5 rounded-lg text-muted-foreground transition-all hover:text-foreground hover:bg-secondary border border-transparent hover:border-border"
              aria-label="Phone Contact"
              title="Call +91-6364-231125"
            >
              <Phone className="h-5 w-5" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Vishalbharadwaj27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground transition-all hover:text-foreground hover:bg-secondary border border-transparent hover:border-border"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vishal-m-bharadwaj-059b5a353/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground transition-all hover:text-foreground hover:bg-secondary border border-transparent hover:border-border"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            {/* Email Link */}
            <a
              href={`mailto:${emailAddress}`}
              className="p-2.5 rounded-lg text-muted-foreground transition-all hover:text-foreground hover:bg-secondary border border-transparent hover:border-border"
              aria-label="Send Email"
              title="Email me"
            >
              <Mail className="h-5 w-5" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary border border-border transition-all"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
