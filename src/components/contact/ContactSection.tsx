// import { useState } from "react";
// import { Mail, MapPin, Phone, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// interface FormStatus {
//   type: "idle" | "loading" | "success" | "error";
//   message: string;
// }

// const ContactSection = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<FormStatus>({
//     type: "idle",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus({ type: "loading", message: "Sending message..." });

//     // Using mailto as fallback - opens email client
//     const mailtoLink = `mailto:vishallbharadwaj27@gmail.com?subject=${encodeURIComponent(
//       formData.subject || "Portfolio Contact"
//     )}&body=${encodeURIComponent(
//       `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
//     )}`;

//     // Simulate a small delay for UX
//     await new Promise((resolve) => setTimeout(resolve, 500));

//     window.location.href = mailtoLink;

//     setStatus({
//       type: "success",
//       message: "Opening your email client...",
//     });

//     // Reset form after success
//     setTimeout(() => {
//       setFormData({ name: "", email: "", subject: "", message: "" });
//       setStatus({ type: "idle", message: "" });
//     }, 3000);
//   };

//   return (
//     <section
//       id="contact"
//       className="w-full px-4 py-20 sm:px-6 lg:px-8"
//       aria-label="Contact"
//     >
//       <div className="mx-auto max-w-5xl">
//         {/* Section Header */}
//         <div className="mb-14 text-center">
//           <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
//             Get In{" "}
//             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Touch
//             </span>
//           </h2>
//           <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
//             Interested in working together? Feel free to reach out.
//           </p>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-5">
//           {/* Contact Info */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="rounded-2xl border border-border bg-card/50 p-6">
//               <h3 className="text-lg font-bold text-foreground mb-6">
//                 Contact Information
//               </h3>

//               <div className="space-y-5">
//                 <a
//                   href="mailto:vishallbharadwaj27@gmail.com"
//                   className="flex items-center gap-4 group"
//                 >
//                   <span className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                     <Mail className="h-5 w-5" />
//                   </span>
//                   <div>
//                     <p className="text-sm text-muted-foreground">Email</p>
//                     <p className="font-medium text-foreground group-hover:text-primary transition-colors">
//                       vishallbharadwaj27@gmail.com
//                     </p>
//                   </div>
//                 </a>

//                 <a
//                   href="tel:+916364231125"
//                   className="flex items-center gap-4 group"
//                 >
//                   <span className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
//                     <Phone className="h-5 w-5" />
//                   </span>
//                   <div>
//                     <p className="text-sm text-muted-foreground">Phone</p>
//                     <p className="font-medium text-foreground group-hover:text-accent transition-colors">
//                       +91 6364231125
//                     </p>
//                   </div>
//                 </a>

//                 <div className="flex items-center gap-4">
//                   <span className="p-3 rounded-xl bg-secondary text-muted-foreground">
//                     <MapPin className="h-5 w-5" />
//                   </span>
//                   <div>
//                     <p className="text-sm text-muted-foreground">Location</p>
//                     <p className="font-medium text-foreground">
//                       Bengaluru, India
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
//               <div className="flex items-center gap-3 mb-2">
//                 <span className="relative flex h-3 w-3">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
//                 </span>
//                 <span className="font-semibold text-foreground">
//                   Available for Opportunities
//                 </span>
//               </div>
//               <p className="text-sm text-muted-foreground">
//                 Currently seeking entry-level software engineering roles.
//                 Open to full-time positions and internships.
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="lg:col-span-3">
//             <form
//               onSubmit={handleSubmit}
//               className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
//             >
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-foreground mb-2"
//                   >
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="John Doe"
//                     className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-foreground mb-2"
//                   >
//                     Your Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="john@example.com"
//                     className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
//                   />
//                 </div>
//               </div>

//               <div className="mt-5">
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-medium text-foreground mb-2"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Job Opportunity / Collaboration"
//                   className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
//                 />
//               </div>

//               <div className="mt-5">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-foreground mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   placeholder="Your message here..."
//                   className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
//                 />
//               </div>

//               {/* Status Message */}
//               {status.type !== "idle" && (
//                 <div
//                   className={`mt-4 flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${
//                     status.type === "success"
//                       ? "bg-accent/10 text-accent"
//                       : status.type === "error"
//                       ? "bg-destructive/10 text-destructive"
//                       : "bg-primary/10 text-primary"
//                   }`}
//                 >
//                   {status.type === "loading" && (
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                   )}
//                   {status.type === "success" && (
//                     <CheckCircle className="h-4 w-4" />
//                   )}
//                   {status.type === "error" && (
//                     <AlertCircle className="h-4 w-4" />
//                   )}
//                   {status.message}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={status.type === "loading"}
//                 className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {status.type === "loading" ? (
//                   <>
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="h-4 w-4" />
//                     Send Message
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeapgjy";

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 3000);
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-4 py-20 sm:px-6 lg:px-8"
      aria-label="Contact"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Interested in working together? Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-card/50 p-6">
              <h3 className="text-lg font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&to=vishallbharadwaj27@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      vishallbharadwaj27@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+916364231125"
                  className="flex items-center gap-4 group"
                >
                  <span className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                      +91 6364231125
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-xl bg-secondary text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">
                      Bengaluru, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span className="font-semibold text-foreground">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently seeking entry-level software engineering roles. Open to
                full-time positions and internships.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Collaboration"
                  className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              {status.type !== "idle" && (
                <div
                  className={`mt-4 flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-accent/10 text-accent"
                      : status.type === "error"
                      ? "bg-destructive/10 text-destructive"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {status.type === "loading" && (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  )}
                  {status.type === "success" && (
                    <CheckCircle className="h-4 w-4" />
                  )}
                  {status.type === "error" && (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
