"use client";

import { useRef, useState } from "react";

export default function Manager() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMutedAfterPlay, setIsMutedAfterPlay] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      try {
        if (!isMutedAfterPlay) {
          videoRef.current.muted = false; // قم بإلغاء كتم الصوت عند التشغيل
        }
        videoRef.current.play();
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.muted = true; // كتم الصوت بعد انتهاء الفيديو
      setIsMutedAfterPlay(true); // منع تشغيل الفيديو بالصوت مرة أخرى
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        {/* قسم الفيديو والشعار */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="relative w-full max-w-lg aspect-video overflow-hidden rounded-xl shadow-lg">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-xl"
              controls
              muted={isMutedAfterPlay} // كتم الصوت بناءً على حالة التشغيل
              src="/img/vid.mp4"
              poster="/img/imgvid.webp"
              onEnded={handleVideoEnded} // كتم الصوت عند انتهاء الفيديو
            ></video>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity rounded-xl">
              <button
                aria-label="تشغيل الفيديو"
                onClick={handlePlayVideo}
                className="text-white bg-indigo-600 hover:bg-indigo-700 p-4 rounded-full shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75v10.5l8.25-5.25-8.25-5.25z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <img
            alt="Logo"
            src="/img/logo.webp"
            className="h-16 my-4"
          />
          <p className="text-lg font-medium text-gray-700">كلمة المدير التنفيذي</p>
        </div>

        {/* اقتباس المدير التنفيذي */}
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold text-gray-900 sm:text-2xl italic leading-relaxed">
            <p>
              “نؤمن في تجمع عسير الصحي بأن التغذية السليمة هي حجر الزاوية لتحقيق حياة صحية، ولذلك نحن نعمل على توفير خدمات غذائية علاجية قائمة على أسس علمية وطبّية حديثة، بالتعاون مع فريق من الأخصائيين المؤهلين لضمان تقديم أفضل رعاية صحية للمرضى. نحن ملتزمون بتقديم المشورة الغذائية المناسبة لكل حالة مرضية، وذلك من خلال تقديم برامج غذائية متخصصة تساهم في تحسين جودة الحياة وتعزيز الشفاء.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            {/* صورة المدير */}
            <img
              alt="Manager"
              src="img/manager.webp"
              className="mx-auto h-24 w-24 rounded-full shadow-md"
            />
            {/* اسم المدير وتوصيفه */}
            <div className="mt-4 flex flex-col items-center text-base text-gray-600">
              <div className="font-semibold text-gray-900 text-lg">العريفي</div>
              <div className="flex items-center mt-1">
                <span>المدير التنفيذي</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
