import { FileText, Table, Presentation, CheckCircle, Clock, Wallet } from "lucide-react";
import slide1 from "@/assets/slide-1.jpg";
import videoGif from '../assets/videoGif.gif';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("order-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="section-container py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right side - Content */}
          <div className="space-y-8 animate-fade-up">
            {/* App icons */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#D24726] rounded-xl flex items-center justify-center shadow-md">
                <Presentation className="w-7 h-7 text-white" />
              </div>
              <div className="w-14 h-14 bg-[#2B579A] rounded-xl flex items-center justify-center shadow-md">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div className="w-14 h-14 bg-[#217346] rounded-xl flex items-center justify-center shadow-md">
                <Table className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                نُعدّ لك عروض
                <span className="text-primary"> Mémoire, Exposé </span>
                باحتراف 
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                خدمة متخصصة للطلاب الجامعيين - تصميم احترافي، تسليم سريع، وأسعار مناسبة للجميع
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-bold text-foreground">تسليم سريع</p>
                  <p className="text-sm text-muted-foreground">خلال 24-48 ساعة</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm">
                <Wallet className="w-6 h-6 text-success" />
                <div>
                  <p className="font-bold text-foreground">الدفع عند الاستلام</p>
                  <p className="text-sm text-muted-foreground">بدون مخاطرة</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-bold text-foreground">جودة عالية</p>
                  <p className="text-sm text-muted-foreground">تصميم احترافي</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToForm}
              className="btn-primary text-xl px-12 py-5"
            >
              اطلب الآن
            </button>
          </div>

          {/* Left side - Image/Video placeholder */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-card">
              {/* Video placeholder - replace with actual video */}
              <div className="aspect-video relative" style={{background : 'black'}}>
                <img
                  src={videoGif}
                  alt="عرض باوربوينت احترافي"
                  className="w-full h-full object-cover"
                />
                
                {/* Play button overlay */}
                {/* <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-primary cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-primary-foreground mr-[-4px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card px-6 py-3 rounded-xl shadow-md animate-float" style={{cursor: 'pointer'}} onClick={scrollToForm}>
              <p className="text-sm text-muted-foreground"> أطلب</p>
              <p className="text-2xl font-bold text-primary">الآن</p>
              {/* <p className="text-sm text-muted-foreground">عميل راضٍ</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
