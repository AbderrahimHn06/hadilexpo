import { Presentation, FileText, Table } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import wordDoc from "@/assets/word-doc.jpg";
import excelSheet from "@/assets/excel-sheet.jpg";

const services = [
  {
    icon: Presentation,
    title: "عروض PowerPoint",
    description: "تصميم شرائح احترافية مع رسوم بيانية وانتقالات سلسة",
    color: "bg-[#D24726]",
  },
  {
    icon: FileText,
    title: "تقارير Word",
    description: "كتابة وتنسيق التقارير الأكاديمية بشكل منظم",
    color: "bg-[#2B579A]",
  },
  {
    icon: Table,
    title: "جداول Excel",
    description: "إنشاء جداول بيانات مع رسوم بيانية ومعادلات",
    color: "bg-[#217346]",
  },
];

const examples = [
  { src: slide1, alt: "نموذج عرض باوربوينت 1" },
  { src: slide2, alt: "نموذج عرض باوربوينت 2" },
  { src: slide3, alt: "نموذج عرض باوربوينت 3" },
  { src: wordDoc, alt: "نموذج تقرير وورد" },
  { src: excelSheet, alt: "نموذج جدول اكسل" },
];

const ExamplesSection = () => {
  return (
    <section id="examples" className="py-20 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">خدماتنا المتميزة</h2>
          <p className="section-subtitle">
            نقدم لك مجموعة متكاملة من الخدمات لمساعدتك في إنجاز مشاريعك الجامعية
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background p-8 rounded-2xl shadow-sm card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Examples Gallery */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">أمثلة من أعمالنا</h3>
          <p className="text-muted-foreground">شاهد نماذج من العروض والتقارير التي أنجزناها</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm card-hover cursor-pointer"
            >
              <img
                src={example.src}
                alt={example.alt}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{example.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
