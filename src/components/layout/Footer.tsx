import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/30 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
              Built with <Heart className="h-3 w-3 text-primary" /> using React
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Vishalbharadwaj27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-m-bharadwaj-059b5a353/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=vishallbharadwaj27@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
