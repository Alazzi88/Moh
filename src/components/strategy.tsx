import React from "react";

const StrategyPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen flex flex-col items-center py-16 px-6">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-sky-600 mb-6 relative">
          <span className="relative inline-block">
            أهدافنا وقيمنا
            <span className="absolute inset-x-4 bottom-[-10px] h-[3px] bg-sky-500 rounded-full"></span>
          </span>
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          نعمل على تحقيق التميز في مجال التغذية العلاجية والوقاية من الأمراض من خلال تقديم خدمات مبتكرة وموثوقة تساعد الأفراد على تحقيق صحة مستدامة.
        </p>
      </header>

      {/* Goals Section */}
      <section className="w-full max-w-7xl mb-20">
        <h2 className="text-4xl font-bold text-sky-600 text-center mb-12 relative group">
          <span className="relative inline-block">
            الأهداف
            <span className="absolute inset-x-4 bottom-[-10px] h-[3px] bg-sky-500 rounded-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            "تحسين صحة المرضى: توفير استشارات غذائية وعلاجية مخصصة لتحسين صحة الأفراد المصابين بحالات صحية متنوعة مثل السمنة، السكري، وأمراض القلب.",
            "الوقاية من الأمراض: تعزيز التثقيف الغذائي لتقليل انتشار الأمراض المزمنة المرتبطة بالتغذية مثل السمنة والسكري.",
            "إدارة العلاجات الغذائية: تقديم خطط غذائية دقيقة تتوافق مع احتياجات المرضى وتساعد في تسريع شفائهم.",
            "الارتقاء بالوعي الصحي: نشر الوعي الغذائي بين أفراد المجتمع لتبني أنماط حياة صحية مستدامة.",
            "تحسين الجودة والرعاية: تحسين مستوى الرعاية الصحية من خلال دمج التغذية العلاجية ضمن الخطط العلاجية.",
            "التعاون مع المؤسسات الصحية: بناء شراكات مع الجهات الصحية لتعزيز كفاءة الخدمات المقدمة.",
          ].map((goal, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-r from-white to-gray-50 text-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border-t-4 border-sky-500"
            >
              <div className="text-4xl font-bold text-sky-500 mb-4">
                {index + 1}.
              </div>
              <p className="text-center text-lg leading-relaxed">{goal}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-sky-600 text-center mb-12 relative group">
          <span className="relative inline-block">
            القيم
            <span className="absolute inset-x-4 bottom-[-10px] h-[3px] bg-sky-500 rounded-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            "الجودة: تقديم خدمات تغذية علاجية عالية الجودة تواكب المعايير الطبية الحديثة.",
            "الاحترافية: العمل بروح الفريق الواحد والاهتمام بتقديم الرعاية الصحية المتكاملة.",
            "الالتزام: التأكيد على أهمية الالتزام بتوجيهات الأخصائيين الغذائيين لضمان النجاح في العلاج.",
            "الابتكار: تبني حلول غذائية مبتكرة ومتجددة تلائم احتياجات المرضى المختلفة.",
            "الشفافية: توفير معلومات واضحة ودقيقة للمرضى حول خياراتهم الغذائية وعلاجاتهم.",
            "التعاطف: فهم احتياجات المرضى وتقديم دعم نفسي ومعنوي خلال رحلتهم العلاجية.",
          ].map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-r from-white to-gray-50 text-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 border-t-4 border-sky-500"
            >
              <div className="text-4xl font-bold text-sky-500 mb-4">
                {index + 1}.
              </div>
              <p className="text-center text-lg leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StrategyPage;
