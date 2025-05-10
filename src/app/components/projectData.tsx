import { StaticImageData } from "next/image"; // Add this import
import educhain from "../../../public/images/educhaini.png"
import educhain2 from "../../../public/images/educhain2.png";
import educhain3 from "../../../public/images/educhain3.png";
import educhain4 from "../../../public/images/educhain4.png";
import outseller from "../../../public/images/outseller.png";
import outseller1 from "../../../public/images/outseller1.png";
import outseller2 from "../../../public/images/outseller2.png";
import outseller3 from "../../../public/images/outseller3.png";
import ourkids from "../../../public/images/ourkids.png";
import ourkids2 from "../../../public/images/ourkids2.png";
import ourkids3 from "../../../public/images/ourkids3.png";
import ourkids4 from "../../../public/images/ourkids4.png";
import inovent from "../../../public/images/inovent1.png";
import inovent2 from "../../../public/images/inovent2.png";
import inovent3 from "../../../public/images/inovent3.png";
import inovent4 from "../../../public/images/inovent4.png";
import manart from "../../../public/images/manarat1.png";
import manart2 from "../../../public/images/mananrt2.png";
import manart3 from "../../../public/images/manart3.png";
import manart4 from "../../../public/images/mananrt4.png";
import erp from "../../../public/images/erp.png";
import erp2 from "../../../public/images/erp.png";
import erp3 from "../../../public/images/erp.png";
import erp4 from "../../../public/images/erp.png";

interface ProjectImage {
  id: string;
  src: StaticImageData | string; // Replace 'any' with 'StaticImageData | string'
  alt: string;
}

interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  images: ProjectImage[];
  rtl: boolean;
  url: string;
}

export const projectData: Record<string, ProjectCategory> = {
  manarat: {
    id: "manarat",
    title: "منارات الهدي",
    description:
      "منارات الهدي هو موقع تعريفي لشركة طباعة البوسترات والمطبوعات المختلفة. يقدم الموقع خدمات الطباعة بجودة عالية وبأسعار منافسة.",
    features: [
      "طباعة بوسترات بجودة عالية",
      "تصميم مطبوعات احترافية",
      "خدمة توصيل سريعة",
      "أسعار منافسة",
      "دعم فني على مدار الساعة",
      "ضمان جودة المنتجات",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    rtl: true,
    images: [
      { id: "manarat1", src: manart, alt: "منارات الهدي - الصفحة الرئيسية" },
      { id: "manarat2", src: manart2, alt: "منارات الهدي - خدماتنا" },
      { id: "manarat3", src: manart3, alt: "منارات الهدي - معرض الأعمال" },
      { id: "manarat4", src: manart4, alt: "منارات الهدي - تواصل معنا" },
    ],
    url: "https://manarat.example.com",
  },
  inovent: {
    id: "inovent",
    title: "Inovent",
    description:
      "Inovent هي منصة لحضور المؤتمرات والفعاليات عن طريق الواقع الافتراضي. تتيح المنصة للمستخدمين حضور الفعاليات من أي مكان في العالم بتجربة تفاعلية مميزة.",
    features: [
      "حضور المؤتمرات عن بعد",
      "تجربة واقع افتراضي متكاملة",
      "التفاعل مع المتحدثين والحضور",
      "مشاركة العروض التقديمية",
      "تسجيل الفعاليات لمشاهدتها لاحقاً",
      "دعم الأجهزة المختلفة",
    ],
    technologies: [
      "React",
      "Three.js",
      "WebXR",
      "WebRTC",
      "Node.js",
      "MongoDB",
    ],
    rtl: true,
    images: [
      { id: "inovent1", src: inovent, alt: "Inovent - الصفحة الرئيسية" },
      { id: "inovent2", src: inovent2, alt: "Inovent - المؤتمرات" },
      { id: "inovent3", src: inovent3, alt: "Inovent - الواقع الافتراضي" },
      { id: "inovent4", src: inovent4, alt: "Inovent - التسجيل" },
    ],
    url: "https://inovent.inom-techs.com",
  },
  educhain: {
    id: "educhain",
    title: "Edu Chains",
    description:
      "Edu Chain هي منصة تعليمية لتطوير مهارات الموظفين في المؤسسات والشركات الكبيرة. تم تصميمها لتكون سهلة الاستخدام ومرنة لتلبية احتياجات الشركات المختلفة. يمكن للموظفين الوصول إلى المواد التعليمية والدورات التدريبية عبر الإنترنت والتعلم على مدار الساعة.",
    features: [
      "دورات تدريبية متنوعة",
      "تتبع تقدم الموظفين",
      "شهادات معتمدة",
      "اختبارات تقييم المهارات",
      "تقارير أداء مفصلة",
      "واجهة سهلة الاستخدام",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "AWS"],
    rtl: true,
    images: [
      { id: "educhain1", src: educhain, alt: "Edu Chain - الصفحة الرئيسية" },
      { id: "educhain2", src: educhain2, alt: "Edu Chain - الدورات التدريبية" },
      { id: "educhain3", src: educhain3, alt: "Edu Chain - لوحة التحكم" },
      { id: "educhain4", src: educhain4, alt: "Edu Chain - التقارير" },
    ],
    url: "https://educhain.example.com",
  },
  outseller: {
    id: "outseller",
    title: "Out Seller",
    description:
      "OutSeller هي منصة مبيعات تساعد الشركات في توظيف الموظفين وأيضاً في إدارة حسابات الشركات. توفر المنصة أدوات متكاملة لإدارة عمليات البيع والتوظيف بكفاءة عالية.",
    features: [
      "إدارة فريق المبيعات",
      "متابعة أداء الموظفين",
      "إدارة عمليات التوظيف",
      "تقارير مالية شاملة",
      "إدارة العملاء والعقود",
      "تكامل مع أنظمة الشركة الأخرى",
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
    rtl: true,
    images: [
      { id: "outseller1", src: outseller, alt: "Out Seller - الصفحة الرئيسية" },
      { id: "outseller2", src: outseller1, alt: "Out Seller - إدارة المبيعات" },
      { id: "outseller3", src: outseller2, alt: "Out Seller - التوظيف" },
      { id: "outseller4", src: outseller3, alt: "Out Seller - الحسابات" },
    ],
    url: "https://outseller.example.com",
  },
  ourkids: {
    id: "ourkids",
    title: "اولادنا",
    description:
      "موقع اولادنا التجاري هو موقع لبيع ألعاب الأطفال وبه الكثير من المميزات. يوفر الموقع تشكيلة واسعة من الألعاب التعليمية والترفيهية للأطفال من مختلف الأعمار.",
    features: [
      "تشكيلة واسعة من الألعاب",
      "تصنيفات حسب العمر والاهتمامات",
      "نظام دفع آمن ومتعدد الخيارات",
      "توصيل سريع لجميع المناطق",
      "خدمة عملاء على مدار الساعة",
      "عروض وخصومات دورية",
    ],
    technologies: [
      "React",
      "Next.js",
      "Strapi CMS",
      "Stripe",
      "MongoDB",
      "Vercel",
    ],
    rtl: true,
    images: [
      { id: "ourkids1", src: ourkids, alt: "اولادنا - الصفحة الرئيسية" },
      { id: "ourkids2", src: ourkids2, alt: "اولادنا - المنتجات" },
      { id: "ourkids3", src: ourkids3, alt: "اولادنا - سلة التسوق" },
      { id: "ourkids4", src: ourkids4, alt: "اولادنا - الحساب الشخصي" },
    ],
    url: "https://ourkids.example.com",
  },
  erp: {
    id: "erp",
    title: "ERP System",
    description:
      "ERP System هو نظام إدارة الموارد البشرية والمالية والمخازن والمبيعات. يوفر النظام حلاً متكاملاً لإدارة جميع عمليات الشركة بكفاءة عالية.",
    features: [
      "إدارة الموارد البشرية",
      "إدارة المالية والمحاسبة",
      "إدارة المخازن والمستودعات",
      "إدارة المبيعات والمشتريات",
      "تقارير وإحصائيات شاملة",
      "واجهة مستخدم سهلة الاستخدام",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    rtl: true,
    images: [
      { id: "erp1", src: erp || "/placeholder.svg", alt: "ERP - لوحة التحكم" },
      {
        id: "erp2",
        src: erp2 || "/placeholder.svg",
        alt: "ERP - الموارد البشرية",
      },
      { id: "erp3", src: erp3 || "/placeholder.svg", alt: "ERP - المالية" },
      { id: "erp4", src: erp4 || "/placeholder.svg", alt: "ERP - المخازن" },
    ],
    url: "https://erp.example.com",
  },
};
