import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const OrderFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    university: "",
    title: "",
    description: "",
    deadline: "",
    serviceType: "powerpoint",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via EmailJS
      await emailjs.send(
        "service_4g01ish", // your service ID
        "template_5vwl9z8", // your template ID
        {
          name: formData.name,
          contact: formData.contact,
          university: formData.university,
          title: formData.title,
          serviceType: formData.serviceType,
          deadline: formData.deadline,
          description: formData.description,
        },
        "YyhG_XdLE9h8CskJN" // your public key
      );

      toast({
        title: "تم إرسال طلبك بنجاح!",
        description: "سنتواصل معك في أقرب وقت ممكن",
      });

      // Reset form
      setFormData({
        name: "",
        contact: "",
        university: "",
        title: "",
        description: "",
        deadline: "",
        serviceType: "powerpoint",
      });
    } catch (error: any) {
      console.error("EmailJS error:", error);
      toast({
        title: "حدث خطأ",
        description: "فشل إرسال الطلب. حاول مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
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
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
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
                  <label
                    htmlFor="university"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
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
                    placeholder="مثال: جامعة عنابة باجي مختار "
                  />
                </div>
                <div>
                  <label
                    htmlFor="serviceType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
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
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
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
                  <label
                    htmlFor="deadline"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
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
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-foreground mb-2"
                >
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
                سيتم التواصل معك خلال 24 ساعة كحد أقصى بإذن الله
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderFormSection;
