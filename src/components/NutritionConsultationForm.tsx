'use client';

import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faUser, faCalendarDay, faVenusMars, faPhone, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Dayjs | null>(null);

  // استخدم هوك useForm من Formspree
  const [state, handleSubmit] = useForm("mleyqqlg");

  if (state.succeeded) {
    // إذا تم الإرسال بنجاح، عرض رسالة تأكيد
    return (
      <div className="p-6 mt-20 max-w-md mx-auto bg-white shadow-md rounded-lg text-center my-5">
        <h2 className="text-2xl font-bold mb-4 text-green-600">تم الإرسال بنجاح!</h2>
        <p className="text-lg text-gray-600 mb-8">
          شكراً لمشاركتك بياناتك، سنقوم بالتواصل معك قريباً.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full py-2 px-4 bg-sky-600 text-white font-bold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
        >
          عودة للصفحة الرئيسية
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 mt-20 max-w-md mx-auto bg-white shadow-md rounded-lg rtl text-right my-5">
      <h1 className="text-2xl text-center font-bold mb-4 text-sky-600">
        لحجز موعد
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        لاستشارة أخصائي تغذية علاجية شاركنا بياناتك
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            <FontAwesomeIcon icon={faIdCard} className="text-sky-600 px-1" />
            الهوية الوطنية:
          </label>
          <input
            type="text"
            name="national_id"
            required
            placeholder="أدخل رقم الهوية الوطنية"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          />
          <ValidationError field="national_id" prefix="الهوية الوطنية" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            <FontAwesomeIcon icon={faUser} className="text-sky-600 px-1" />
            الاسم:
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="أدخل اسمك الكامل"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          />
          <ValidationError field="name" prefix="الاسم" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            العمر:
          </label>
          <input
            type="number"
            name="age"
            required
            placeholder="أدخل عمرك"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          />
          <ValidationError field="age" prefix="العمر" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            <FontAwesomeIcon icon={faVenusMars} className="text-sky-600 px-1" />
            الجنس:
          </label>
          <select
            name="gender"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          >
            <option value="">اختر الجنس</option>
            <option value="ذكر">ذكر</option>
            <option value="أنثى">أنثى</option>
          </select>
          <ValidationError field="gender" prefix="الجنس" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label className="block text-sm font-medium text-sky-600 mb-1 items-center">
            <FontAwesomeIcon icon={faCalendarDay} className="text-600 px-1" />
            تاريخ الميلاد:
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={birthDate}
              onChange={(newValue: Dayjs | null) => setBirthDate(newValue)}
              views={['year', 'month', 'day']}
              slotProps={{
                textField: {
                  required: true,
                  placeholder: 'اختر تاريخ ميلادك',
                  className: 'w-full bg-gray-50 mt-1',
                  inputProps: {
                    className: 'px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-600 focus:border-sky-600'
                  }
                },
              }}
            />
          </LocalizationProvider>
          {/* هذا الحقل المخفي لإرسال تاريخ الميلاد بصيغة YYYY-MM-DD */}
          <input
            type="hidden"
            name="birth_date"
            value={birthDate ? birthDate.format('YYYY-MM-DD') : ''}
          />
          <ValidationError field="birth_date" prefix="تاريخ الميلاد" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <div>
  <label className="block text-sm font-medium text-gray-700 mb-1  items-center">
    <FontAwesomeIcon icon={faPhone} className="text-sky-600 px-1" />
    رقم الهاتف:
  </label>
  <input
    type="tel"
    name="phone"
    required
    placeholder="أدخل رقم هاتفك"
    dir="rtl"  
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600 text-right"  
  />
  <ValidationError 
    field="phone" 
    prefix="رقم الهاتف" 
    errors={state.errors} 
    className="text-red-500 text-sm mt-1" 
  />
</div>

        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1 items-center">
            <FontAwesomeIcon icon={faStethoscope} className="text-sky-600 px-1" />
            سبب الاستشارة:
          </label>
          <input
            type="text"
            name="consultation_reason"
            required
            placeholder="أدخل سبب الاستشارة"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:outline-none focus:ring-sky-600 focus:border-sky-600"
          />
          <ValidationError field="consultation_reason" prefix="سبب الاستشارة" errors={state.errors} className="text-red-500 text-sm mt-1" />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="col-span-2 mt-4 w-full py-2 px-4 bg-sky-600 text-white font-bold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
        >
          {state.submitting ? 'جار الإرسال...' : 'إرسال'}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
