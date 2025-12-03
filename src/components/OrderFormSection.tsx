import { useState } from "react";
import { Send, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const OrderFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    university: "",
    title: "",
    description: "",
    deadline: "",
    serviceType: "powerpoint",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Create mailto link for email submission
    const mailtoBody = `
الاسم: ${formData.name}
البريد/الهاتف: ${formData.contact}
الجامعة: ${formData.university}
عنوان المشروع: ${formData.title}
نوع الخدمة: ${formData.serviceType}
الموعد النهائي: ${formData.deadline}

التفاصيل:
${formData.description}

الملف المرفق: ${fileName || "لا يوجد"}
    `.trim();

    const mailtoLink = `mailto:your-email@example.com?subject=طلب خدمة جديد - ${formData.title}&body=${encodeURIComponent(mailtoBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "تم إرسال طلبك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      contact: "",
      university: "",
      title: "",
      description: "",
      deadline: "",
      serviceType: "powerpoint",
    });
    setFileName("");
  };

  return (
    <section id="order-form" className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title">اطلب خدمتك الآن</h2>
            <p className="section-subtitle">
              املأ النموذج التالي وسنتواصل معك خلال ساعات قليلة
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-2">
                    البريد الإلكتروني أو رقم الهاتف *
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="email@example.com أو 05XXXXXXXX"
                  />
                </div>
              </div>

              {/* Row 2: University & Service Type */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="university" className="block text-sm font-medium text-foreground mb-2">
                    الجامعة / التخصص *
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="مثال: جامعة الملك سعود - إدارة أعمال"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-foreground mb-2">
                    نوع الخدمة *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  >
                    <option value="powerpoint">عرض PowerPoint</option>
                    <option value="word">تقرير Word</option>
                    <option value="excel">جدول Excel</option>
                    <option value="multiple">أكثر من خدمة</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Title & Deadline */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                    عنوان المشروع *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="مثال: عرض تقديمي عن التسويق الرقمي"
                  />
                </div>
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-foreground mb-2">
                    الموعد النهائي للتسليم *
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  تفاصيل المشروع *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="اكتب تفاصيل المشروع هنا... (عدد الشرائح، المحتوى المطلوب، ملاحظات خاصة)"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  إرفاق ملف (اختياري)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.jpg,.png"
                  />
                  <div className="flex items-center justify-center gap-3 px-4 py-4 border-2 border-dashed border-border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {fileName || "اسحب الملف هنا أو اضغط للاختيار"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    إرسال الطلب
                  </>
                )}
              </button>

              {/* Note */}
              <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                سيتم التواصل معك خلال 24 ساعة كحد أقصى
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderFormSection;
