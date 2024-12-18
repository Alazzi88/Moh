import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMale,
  faFemale,
  faChild,
  faBabyCarriage,
  faHeartbeat,
  faDumbbell,
  faLungs,
  faRibbon,
  faUserNurse,
  faBreadSlice,
  faAppleWhole,
  faWeightScale,
  faSeedling,
  faVial,
} from "@fortawesome/free-solid-svg-icons";

const supportLinks = [
  {
    name: "تغذية الرجل",
    href: "/man",
    description: "تفاصيل خاصة بتغذية الرجل.",
    icon: faMale, // أيقونة الرجل
  },
  {
    name: "تغذية المرأة",
    href: "/women",
    description: "تفاصيل خاصة بتغذية المرأة.",
    icon: faFemale, // أيقونة المرأة
  },
  {
    name: "تغذية الطفل",
    href: "/child",
    description: "تفاصيل خاصة بتغذية الطفل.",
    icon: faChild, // أيقونة الطفل
  },
  {
    name: "تغذية الحامل والمرضع",
    href: "/pregnant",
    description: "تفاصيل خاصة بتغذية الحامل والمرضع.",
    icon: faBabyCarriage, // أيقونة العربة
  },
  {
    name: "تغذية مرضى سكري الحمل",
    href: "/womenpregnant",
    description: "تفاصيل خاصة بتغذية مرضى سكري الحمل.",
    icon: faAppleWhole, // أيقونة الغذاء الصحي
  },
  {
    name: "تغذية السكري",
    href: "/diabetic",
    description: "تفاصيل خاصة بتغذية مرضى السكري.",
    icon: faHeartbeat, // أيقونة مرضى السكري
  },
  {
    name: "تغذية الرياضيين",
    href: "/athletes",
    description: "تفاصيل خاصة بتغذية الرياضيين.",
    icon: faDumbbell, // أيقونة الرياضيين
  },
  {
    name: "تغذية الأمراض المزمنة",
    href: "/chronicDisease",
    description: "تفاصيل خاصة بتغذية أمراض الكلى.",
    icon: faLungs, // أيقونة أمراض الكلى
  },
  {
    name: "تغذية الأورام",
    href: "/cancer",
    description: "تفاصيل خاصة بتغذية الأورام.",
    icon: faRibbon, // أيقونة الأورام
  },
  {
    name: "تغذية كبار السن",
    href: "/elderly",
    description: "تفاصيل خاصة بتغذية كبار السن.",
    icon: faUserNurse, // أيقونة كبار السن
  },
  {
    name: "تغذية مرضى السيلياك",
    href: "/celiac",
    description: "تفاصيل خاصة بتغذية مرضى السيلياك.",
    icon: faBreadSlice, // أيقونة مرضى السيلياك
  },
  {
    name: "تغذية صيام رمضان",
    href: "/fasting",
    description: "تفاصيل خاصة بالتغذية اثناء الصيام .",
    icon: faBreadSlice, 
  },
];

export default function Welcome() {
  return (
    <div dir="rtl" className="bg-white">
      {/* Header */}
      <div className="relative bg-white-800 pb-32 ">
        <div className="absolute inset-0">
          <img
            alt="logo"
            src="/img/logo.webp"
            className="size-full object-contain"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex justify-between items-center">
          <h1 className="text-4xl font-normal tracking-tight text-sky-500 md:text-5xl lg:text-6xl animate-slide-right">
            تجمع عسير الصحي
          </h1>
          <h1 className="text-4xl font-normal tracking-tight text-sky-500 md:text-5xl lg:text-2xl animate-slide-right">
            مسار التغذية العلاجية
          </h1>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        aria-labelledby="contact-heading"
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8 "
      >
        <h2 id="contact-heading" className="sr-only">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-32 p-30">
          {supportLinks.map((link, index) => (
            <div
              key={link.name}
              className={`flex flex-col rounded-2xl bg-white shadow-xl animate-slide-left delay-${index * 100}`}
            >
              <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-sky-600 p-5 shadow-lg">
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="text-white text-2xl"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                   للإطلاع <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
