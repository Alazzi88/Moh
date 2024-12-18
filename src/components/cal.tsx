'use client';

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faAppleAlt, faUser, faWeight, faRulerVertical } from "@fortawesome/free-solid-svg-icons";

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<string>("male");
  const [activityLevel, setActivityLevel] = useState<string>("1.2");
  const [bmi, setBmi] = useState<number | null>(null);
  const [calories, setCalories] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>("");

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = weight / (height / 100) ** 2;
      const roundedBmi = parseFloat(bmiValue.toFixed(2));
      setBmi(roundedBmi);
      setBmiCategory(getBMICategory(roundedBmi));
    }
  };

  const calculateCalories = () => {
    if (weight && height && age) {
      let bmr: number;
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      const calorieValue = bmr * parseFloat(activityLevel);
      setCalories(parseFloat(calorieValue.toFixed(0)));
    }
  };

  const handleCalculate = () => {
    calculateBMI();
    calculateCalories();
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) {
      return "نقصان في الوزن";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "وزن طبيعي";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "وزن زائد";
    } else if (bmi >= 30 && bmi < 34.9) {
      return "السمنة من الدرجة الأولى";
    } else if (bmi >= 35 && bmi < 39.9) {
      return "السمنة من الدرجة الثانية";
    } else {
      return "السمنة المفرطة";
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg rtl text-right my-5">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        <FontAwesomeIcon icon={faAppleAlt} className="text-green-500 px-1" />
        حاسبة مؤشر كتلة الجسم والسعرات الحرارية
      </h2>
      {/* حقول الإدخال */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700  items-center">
          <FontAwesomeIcon icon={faWeight} className="text-blue-500 px-1" />
          الوزن (كجم):
        </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value ? parseFloat(e.target.value) : "")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700  items-center">
          <FontAwesomeIcon icon={faRulerVertical} className="text-blue-500 px-1" />
          الطول (سم):
        </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value ? parseFloat(e.target.value) : "")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700  items-center">
          <FontAwesomeIcon icon={faUser} className="text-blue-500 px-1" />
          العمر:
        </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value ? parseFloat(e.target.value) : "")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700  items-center">
          <FontAwesomeIcon icon={faDumbbell} className="text-blue-500 px-1" />
          الجنس:
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="male">ذكر</option>
          <option value="female">أنثى</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700  items-center">
          <FontAwesomeIcon icon={faAppleAlt} className="text-green-500 px-1" />
          مستوى النشاط:
        </label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="1.2">قليل الحركة (لا يوجد تمارين)</option>
          <option value="1.375">نشاط خفيف (تمارين خفيفة 1-3 أيام في الأسبوع)</option>
          <option value="1.55">نشاط متوسط (تمارين متوسطة 3-5 أيام في الأسبوع)</option>
          <option value="1.725">نشاط عالي (تمارين شاقة 6-7 أيام في الأسبوع)</option>
          <option value="1.9">نشاط عالي جداً (تمارين شاقة جداً أو عمل بدني)</option>
        </select>
      </div>
      <button
        onClick={handleCalculate}
        className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <FontAwesomeIcon icon={faDumbbell} className="px-1" />
        احسب
      </button>
      <div className="mt-6">
        {bmi !== null && (
          <div className="mb-2">
            <p className="text-gray-800">
              <FontAwesomeIcon icon={faDumbbell} className="text-blue-500 px-1" />
              مؤشر كتلة الجسم الخاص بك: <span className="font-bold">{bmi}</span>
            </p>
            <p className="text-gray-700">
              الفئة: <span className="font-bold">{bmiCategory}</span>
            </p>
          </div>
        )}
        {calories !== null && (
          <p className="text-gray-800">
            <FontAwesomeIcon icon={faAppleAlt} className="text-green-500 px-1" />
            السعرات الحرارية اليومية: <span className="font-bold">{calories} سعر حراري</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
