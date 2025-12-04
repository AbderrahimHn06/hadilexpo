import { Star, Quote } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import wordDoc from "@/assets/word-doc.jpg";
import excelSheet from "@/assets/excel-sheet.jpg";
import { ShowImageContext } from "@/ShowImageProvider";
import { useContext } from "react";

const portfolioItems = [
  { src: slide1, title: "عرض تسويق رقمي", category: "PowerPoint" ,link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-Tj6YpjhH_z1K4-SFnz4a8Z7zrbTK_CBdw&s'},
  { src: slide2, title: "تحليل بيانات المبيعات", category: "PowerPoint" ,link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-Tj6YpjhH_z1K4-SFnz4a8Z7zrbTK_CBdw&s'},
  { src: wordDoc, title: "تقرير بحثي أكاديمي", category: "Word" ,link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-Tj6YpjhH_z1K4-SFnz4a8Z7zrbTK_CBdw&s'},
  { src: excelSheet, title: "لوحة تحكم مالية", category: "Excel" ,link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-Tj6YpjhH_z1K4-SFnz4a8Z7zrbTK_CBdw&s'},
  { src: slide3, title: "خطة مشروع تخرج", category: "PowerPoint" ,link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-Tj6YpjhH_z1K4-SFnz4a8Z7zrbTK_CBdw&s'},
  { src: slide1, title: "استراتيجية الأعمال", category: "PowerPoint" ,link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw-Tj6YpjhH_z1K4-SFnz4a8Z7zrbTK_CBdw&s'},
];

const testimonials = [
  // {
  //   name: "أحمد محمد",
  //   university: "جامعة الملك سعود",
  //   rating: 5,
  //   text: "خدمة ممتازة وتسليم سريع جداً! العرض كان احترافي وحصلت على درجة كاملة. شكراً لكم",
  //   image: student1,
  // }
];

export default function PortfolioSection () {
  const {state ,setState} = useContext(ShowImageContext)
  const handleProjectOpen = (link: string) => {
  setState({ isOpen: true, src: link })
  }

  return (
    <section id="portfolio" className="py-20 bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">معرض أعمالنا</h2>
          <p className="section-subtitle">
            نماذج من المشاريع التي أنجزناها لعملائنا من الطلاب الجامعيين
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-sm card-hover"
              onClick={() => handleProjectOpen(item.link)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 right-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">آراء عملائنا</h3>
          <p className="text-muted-foreground">ماذا يقول الطلاب عن خدماتنا</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-2xl shadow-sm card-hover relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

