import { Phone, Instagram, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "966501234567"; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold text-primary mb-3">إنجاز</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              خدمات إعداد العروض التقديمية والتقارير للطلاب الجامعيين
            </p>
          </div>

          {/* WhatsApp Contact */}
          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-success text-success-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-6 h-6" />
              تواصل عبر واتساب
            </a>
            <p className="mt-3 text-muted-foreground text-sm direction-ltr">
              +966 50 123 4567
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mb-4">تابعنا على</p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-success hover:text-success-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} إنجاز. جميع الحقوق محفوظة
            </p>
            <p className="text-xs text-muted-foreground bg-secondary-foreground/5 px-4 py-2 rounded-full">
              🎓 موقع مخصص للطلاب الجامعيين فقط
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
