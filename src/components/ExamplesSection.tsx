import { Presentation, FileText, Table } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import wordDoc from "@/assets/word-doc.jpg";
import excelSheet from "@/assets/excel-sheet.jpg"
import { ShowImageContext } from "@/ShowImageProvider";
import { useContext } from "react";
export default function ExamplesSection(){
const {state ,setState} = useContext(ShowImageContext)

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
  { src: slide1, alt: "نموذج عرض باوربوينت 1", link: 'data:image/png;base64,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' },
  { src: slide2, alt: "نموذج عرض باوربوينت 2", link: 'data:image/png;base64,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' },
  { src: slide3, alt: "نموذج عرض باوربوينت 3", link: 'data:image/png;base64,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' },
];

const handleExampleClick = (link: string) => {
  setState({ isOpen: true, src: link })
}

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
          <h3 className="text-2xl font-bold text-foreground mb-4">أمثلة عن القوالب</h3>
          <p className="text-muted-foreground">شاهد نماذج من العروض والتقارير التي نقدمها</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm card-hover cursor-pointer"
              onClick={() => handleExampleClick(example.link)}
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

