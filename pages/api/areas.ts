import type { NextApiRequest, NextApiResponse } from "next";

const data = {
  areas: [
    {
      name: "حصاربوعلی",
      "region ": 1,
      id: 1,
    },
    {
      name: "رستم آباد- فرمانیه",
      "region ": 1,
      id: 2,
    },
    {
      name: "اوین",
      "region ": 1,
      id: 3,
    },
    {
      name: "درکه",
      "region ": 1,
      id: 4,
    },
    {
      name: "زعفرانیه",
      "region ": 1,
      id: 5,
    },
    {
      name: "محمودیه",
      "region ": 1,
      id: 6,
    },
    {
      name: "ولنجک",
      "region ": 1,
      id: 7,
    },
    {
      name: "امام زاده قاسم (ع)",
      "region ": 1,
      id: 8,
    },
    {
      name: "دربند",
      "region ": 1,
      id: 9,
    },
    {
      name: "گلابدره",
      "region ": 1,
      id: 10,
    },
    {
      name: "جماران",
      "region ": 1,
      id: 11,
    },
    {
      name: "دزاشیب",
      "region ": 1,
      id: 12,
    },
    {
      name: "نیاوران",
      "region ": 1,
      id: 13,
    },
    {
      name: "اراج",
      "region ": 1,
      id: 14,
    },
    {
      name: "کاشانک",
      "region ": 1,
      id: 15,
    },
    {
      name: "شهرک دانشگاه",
      "region ": 1,
      id: 16,
    },
    {
      name: "شهرک نفت",
      "region ": 1,
      id: 17,
    },
    {
      name: "دارآباد",
      "region ": 1,
      id: 18,
    },
    {
      name: "باغ فردوس",
      "region ": 1,
      id: 19,
    },
    {
      name: "تجریش",
      "region ": 1,
      id: 20,
    },
    {
      name: "قیطریه",
      "region ": 1,
      id: 21,
    },
    {
      name: "چیذر",
      "region ": 1,
      id: 22,
    },
    {
      name: "حکمت",
      "region ": 1,
      id: 23,
    },
    {
      name: "ازگل",
      "region ": 1,
      id: 24,
    },
    {
      name: "سوهانک",
      "region ": 1,
      id: 25,
    },
    {
      name: "شهید محلاتی",
      "region ": 1,
      id: 26,
    },
    {
      name: "اتوبان امام علی",
      "region ": 1,
      id: 27,
    },
    {
      name: "اتوبان صدر",
      "region ": 1,
      id: 28,
    },
    {
      name: "اقدسیه",
      "region ": 1,
      id: 29,
    },
    {
      name: "الهیه – فرشته",
      "region ": 1,
      id: 30,
    },
    {
      name: "اندرزگو",
      "region ": 1,
      id: 31,
    },
    {
      name: "بلوار ارتش",
      "region ": 1,
      id: 32,
    },
    {
      name: "پارک وی",
      "region ": 1,
      id: 33,
    },
    {
      name: "تجریش",
      "region ": 1,
      id: 34,
    },
    {
      name: "جمشیدیه",
      "region ": 1,
      id: 35,
    },
    {
      name: "دیباجی",
      "region ": 1,
      id: 36,
    },
    {
      name: "سعدآباد",
      "region ": 1,
      id: 37,
    },
    {
      name: "صاحبقرانیه",
      "region ": 1,
      id: 38,
    },
    {
      name: "فرمانیه",
      "region ": 1,
      id: 39,
    },
    {
      name: "قیطریه",
      "region ": 1,
      id: 40,
    },
    {
      name: "محمودیه",
      "region ": 1,
      id: 41,
    },
    {
      name: "مقدس اردبیلی",
      "region ": 1,
      id: 42,
    },
    {
      name: "مینی سیتی",
      "region ": 1,
      id: 43,
    },
    {
      name: "نوبنیاد",
      "region ": 1,
      id: 44,
    },
    {
      name: "ولیعصر",
      "region ": 1,
      id: 45,
    },
    {
      name: "کاشانک",
      "region ": 1,
      id: 46,
    },
    {
      name: "کامرانیه",
      "region ": 1,
      id: 47,
    },
    {
      name: "بوعلی",
      "region ": 2,
      id: 48,
    },
    {
      name: "سعادت آباد",
      "region ": 2,
      id: 49,
    },
    {
      name: "مدیریت",
      "region ": 2,
      id: 50,
    },
    {
      name: "کوهسار",
      "region ": 2,
      id: 51,
    },
    {
      name: "پونک",
      "region ": 2,
      id: 52,
    },
    {
      name: "شهید چوب تراش",
      "region ": 2,
      id: 53,
    },
    {
      name: "شهید خرم رودی",
      "region ": 2,
      id: 54,
    },
    {
      name: "صادقیه شمالی شهرک هما",
      "region ": 2,
      id: 55,
    },
    {
      name: "صادقیه",
      "region ": 2,
      id: 56,
    },
    {
      name: "شهرآرا",
      "region ": 2,
      id: 57,
    },
    {
      name: "کوی نصر",
      "region ": 2,
      id: 58,
    },
    {
      name: "پردیسان",
      "region ": 2,
      id: 59,
    },
    {
      name: "شهرک آزمایش",
      "region ": 2,
      id: 60,
    },
    {
      name: "تهران ویلا",
      "region ": 2,
      id: 61,
    },
    {
      name: "برق آلستوم",
      "region ": 2,
      id: 62,
    },
    {
      name: "تیموری",
      "region ": 2,
      id: 63,
    },
    {
      name: "طرشت",
      "region ": 2,
      id: 64,
    },
    {
      name: "همایونشهر",
      "region ": 2,
      id: 65,
    },
    {
      name: "توحید",
      "region ": 2,
      id: 66,
    },
    {
      name: "زنجان",
      "region ": 2,
      id: 67,
    },
    {
      name: "شادمهر",
      "region ": 2,
      id: 68,
    },
    {
      name: "ایوانک",
      "region ": 2,
      id: 69,
    },
    {
      name: "دریا",
      "region ": 2,
      id: 70,
    },
    {
      name: "شهرک قدس",
      "region ": 2,
      id: 71,
    },
    {
      name: "آسمانها",
      "region ": 2,
      id: 72,
    },
    {
      name: "درختی",
      "region ": 2,
      id: 73,
    },
    {
      name: "فرحزاد",
      "region ": 2,
      id: 74,
    },
    {
      name: "مخابرات",
      "region ": 2,
      id: 75,
    },
    {
      name: "پرواز",
      "region ": 2,
      id: 76,
    },
    {
      name: "آزادی",
      "region ": 2,
      id: 77,
    },
    {
      name: "اتوبان حکیم",
      "region ": 2,
      id: 78,
    },
    {
      name: "اتوبان شیخ فضل اله نوری",
      "region ": 2,
      id: 79,
    },
    {
      name: "اتوبان محمد علی جناح",
      "region ": 2,
      id: 80,
    },
    {
      name: "اتوبان نیایش",
      "region ": 2,
      id: 81,
    },
    {
      name: "اتوبان یادگار امام",
      "region ": 2,
      id: 82,
    },
    {
      name: "بهبودی",
      "region ": 2,
      id: 83,
    },
    {
      name: "جلال آل احمد",
      "region ": 2,
      id: 84,
    },
    {
      name: "خوش شمالی",
      "region ": 2,
      id: 85,
    },
    {
      name: "ستارخان",
      "region ": 2,
      id: 86,
    },
    {
      name: "شادمان",
      "region ": 2,
      id: 87,
    },
    {
      name: "شهرک ژاندارمری",
      "region ": 2,
      id: 88,
    },
    {
      name: "شهرک غرب",
      "region ": 2,
      id: 89,
    },
    {
      name: "گیشا",
      "region ": 2,
      id: 90,
    },
    {
      name: "مترو شریف",
      "region ": 2,
      id: 91,
    },
    {
      name: "مرزداران",
      "region ": 2,
      id: 92,
    },
    {
      name: "آرارات",
      "region ": 3,
      id: 93,
    },
    {
      name: "ونک",
      "region ": 3,
      id: 94,
    },
    {
      name: "امانیه",
      "region ": 3,
      id: 95,
    },
    {
      name: "زرگنده",
      "region ": 3,
      id: 96,
    },
    {
      name: "درب دوم",
      "region ": 3,
      id: 97,
    },
    {
      name: "رستم آباد و اختیاریه",
      "region ": 3,
      id: 98,
    },
    {
      name: "داودیه",
      "region ": 3,
      id: 99,
    },
    {
      name: "سید خندان",
      "region ": 3,
      id: 100,
    },
    {
      name: "دروس",
      "region ": 3,
      id: 101,
    },
    {
      name: "قبا",
      "region ": 3,
      id: 102,
    },
    {
      name: "قلهک",
      "region ": 3,
      id: 103,
    },
    {
      name: "کاوسیه",
      "region ": 3,
      id: 104,
    },
    {
      name: "اختیاریه",
      "region ": 3,
      id: 105,
    },
    {
      name: "پاسداران",
      "region ": 3,
      id: 106,
    },
    {
      name: "جردن",
      "region ": 3,
      id: 107,
    },
    {
      name: "جلفا",
      "region ": 3,
      id: 108,
    },
    {
      name: "خواجه عبداله",
      "region ": 3,
      id: 109,
    },
    {
      name: "دولت ( کلاهدوز )",
      "region ": 3,
      id: 110,
    },
    {
      name: "شیخ بهایی",
      "region ": 3,
      id: 111,
    },
    {
      name: "شیراز",
      "region ": 3,
      id: 112,
    },
    {
      name: "ظفر",
      "region ": 3,
      id: 113,
    },
    {
      name: "ملاصدرا",
      "region ": 3,
      id: 114,
    },
    {
      name: "میدان کتابی",
      "region ": 3,
      id: 115,
    },
    {
      name: "میرداماد",
      "region ": 3,
      id: 116,
    },
    {
      name: "ولیعصر(بین پارک وی ونیایش)",
      "region ": 3,
      id: 117,
    },
    {
      name: "مهران",
      "region ": 4,
      id: 118,
    },
    {
      name: "کاظم آباد",
      "region ": 4,
      id: 119,
    },
    {
      name: "کوهک",
      "region ": 4,
      id: 120,
    },
    {
      name: "مجیدیه و شمس آباد",
      "region ": 4,
      id: 121,
    },
    {
      name: "پاسداران و ضرابخانه",
      "region ": 4,
      id: 122,
    },
    {
      name: "حسین آباد و مبارک آباد",
      "region ": 4,
      id: 123,
    },
    {
      name: "شیان و لویزان",
      "region ": 4,
      id: 124,
    },
    {
      name: "علم و صنعت",
      "region ": 4,
      id: 125,
    },
    {
      name: "نارمک",
      "region ": 4,
      id: 126,
    },
    {
      name: "تهرانپارس غربی",
      "region ": 4,
      id: 127,
    },
    {
      name: "جوادیه",
      "region ": 4,
      id: 128,
    },
    {
      name: "خاک سفید",
      "region ": 4,
      id: 129,
    },
    {
      name: "تهرانپارس شرقی",
      "region ": 4,
      id: 130,
    },
    {
      name: "قاسم آباد و ده نارمک",
      "region ": 4,
      id: 131,
    },
    {
      name: "اوقاف",
      "region ": 4,
      id: 132,
    },
    {
      name: "شمیران نو",
      "region ": 4,
      id: 133,
    },
    {
      name: "حکیمیه",
      "region ": 4,
      id: 134,
    },
    {
      name: "قنات کوثر",
      "region ": 4,
      id: 135,
    },
    {
      name: "کوهسار",
      "region ": 4,
      id: 136,
    },
    {
      name: "مجید آباد",
      "region ": 4,
      id: 137,
    },
    {
      name: "اتوبان بابایی",
      "region ": 4,
      id: 138,
    },
    {
      name: "اتوبان باقری",
      "region ": 4,
      id: 139,
    },
    {
      name: "اتوبان صیاد شیرازی",
      "region ": 4,
      id: 140,
    },
    {
      name: "بنی هاشم",
      "region ": 4,
      id: 141,
    },
    {
      name: "پلیس",
      "region ": 4,
      id: 142,
    },
    {
      name: "دلاوران",
      "region ": 4,
      id: 143,
    },
    {
      name: "رسالت",
      "region ": 4,
      id: 144,
    },
    {
      name: "سراج",
      "region ": 4,
      id: 145,
    },
    {
      name: "شمس آباد",
      "region ": 4,
      id: 146,
    },
    {
      name: "شهدا",
      "region ": 4,
      id: 147,
    },
    {
      name: "صیاد شیرازی",
      "region ": 4,
      id: 148,
    },
    {
      name: "علم وصنعت",
      "region ": 4,
      id: 149,
    },
    {
      name: "فرجام",
      "region ": 4,
      id: 150,
    },
    {
      name: "لویزان",
      "region ": 4,
      id: 151,
    },
    {
      name: "میدان ملت",
      "region ": 4,
      id: 152,
    },
    {
      name: "هروی",
      "region ": 4,
      id: 153,
    },
    {
      name: "هنگام",
      "region ": 4,
      id: 154,
    },
    {
      name: "شهران جنوبی",
      "region ": 5,
      id: 155,
    },
    {
      name: "شهران شمالی",
      "region ": 5,
      id: 156,
    },
    {
      name: "شهرزیبا",
      "region ": 5,
      id: 157,
    },
    {
      name: "اندیشه",
      "region ": 5,
      id: 158,
    },
    {
      name: "بهاران",
      "region ": 5,
      id: 159,
    },
    {
      name: "کن",
      "region ": 5,
      id: 160,
    },
    {
      name: "المهدی",
      "region ": 5,
      id: 161,
    },
    {
      name: "باغ فیض",
      "region ": 5,
      id: 162,
    },
    {
      name: "پونک جنوبی",
      "region ": 5,
      id: 163,
    },
    {
      name: "پونک شمالی",
      "region ": 5,
      id: 164,
    },
    {
      name: "حصارک",
      "region ": 5,
      id: 165,
    },
    {
      name: "شهرک نفت",
      "region ": 5,
      id: 166,
    },
    {
      name: "کوهسار",
      "region ": 5,
      id: 167,
    },
    {
      name: "مرادآباد",
      "region ": 5,
      id: 168,
    },
    {
      name: "پرواز",
      "region ": 5,
      id: 169,
    },
    {
      name: "سازمان برنامه جنوبی",
      "region ": 5,
      id: 170,
    },
    {
      name: "سازمان برنامه شمالی",
      "region ": 5,
      id: 171,
    },
    {
      name: "ارم",
      "region ": 5,
      id: 172,
    },
    {
      name: "سازمان آب",
      "region ": 5,
      id: 173,
    },
    {
      name: "اباذر",
      "region ": 5,
      id: 174,
    },
    {
      name: "فردوس",
      "region ": 5,
      id: 175,
    },
    {
      name: "مهران",
      "region ": 5,
      id: 176,
    },
    {
      name: "اکباتان",
      "region ": 5,
      id: 177,
    },
    {
      name: "بیمه",
      "region ": 5,
      id: 178,
    },
    {
      name: "آپادانا",
      "region ": 5,
      id: 179,
    },
    {
      name: "جنت آباد جنوبی",
      "region ": 5,
      id: 180,
    },
    {
      name: "جنت آباد شمالی",
      "region ": 5,
      id: 181,
    },
    {
      name: "جنت آباد مرکزی",
      "region ": 5,
      id: 182,
    },
    {
      name: "شاهین",
      "region ": 5,
      id: 183,
    },
    {
      name: "آیت الله کاشانی",
      "region ": 5,
      id: 184,
    },
    {
      name: "اشرفی اصفهانی",
      "region ": 5,
      id: 185,
    },
    {
      name: "ایران زمین شمالی",
      "region ": 5,
      id: 186,
    },
    {
      name: "بلوار تعاون",
      "region ": 5,
      id: 187,
    },
    {
      name: "بلوار فردوس",
      "region ": 5,
      id: 188,
    },
    {
      name: "بولیوار",
      "region ": 5,
      id: 189,
    },
    {
      name: "پونک",
      "region ": 5,
      id: 190,
    },
    {
      name: "پیامبر",
      "region ": 5,
      id: 191,
    },
    {
      name: "جنت آباد",
      "region ": 5,
      id: 192,
    },
    {
      name: "سازمان برنامه",
      "region ": 5,
      id: 193,
    },
    {
      name: "ستاری",
      "region ": 5,
      id: 194,
    },
    {
      name: "سردار جنگل",
      "region ": 5,
      id: 195,
    },
    {
      name: "سولقان",
      "region ": 5,
      id: 196,
    },
    {
      name: "شهر زیبا",
      "region ": 5,
      id: 197,
    },
    {
      name: "شهران",
      "region ": 5,
      id: 198,
    },
    {
      name: "شهرک اکباتان",
      "region ": 5,
      id: 199,
    },
    {
      name: "شهید مهدی باکری",
      "region ": 5,
      id: 200,
    },
    {
      name: "نجات اللهی",
      "region ": 6,
      id: 201,
    },
    {
      name: "ایرانشهر",
      "region ": 6,
      id: 202,
    },
    {
      name: "پارک لاله",
      "region ": 6,
      id: 203,
    },
    {
      name: "کشاورز غربی",
      "region ": 6,
      id: 204,
    },
    {
      name: "نصرت",
      "region ": 6,
      id: 205,
    },
    {
      name: "۱۶آذر",
      "region ": 6,
      id: 206,
    },
    {
      name: "سنایی",
      "region ": 6,
      id: 207,
    },
    {
      name: "بهجت آباد",
      "region ": 6,
      id: 208,
    },
    {
      name: "عباس آباد",
      "region ": 6,
      id: 209,
    },
    {
      name: "قزل قلعه",
      "region ": 6,
      id: 210,
    },
    {
      name: "سیندخت",
      "region ": 6,
      id: 211,
    },
    {
      name: "گلها",
      "region ": 6,
      id: 212,
    },
    {
      name: "شیراز جنوبی",
      "region ": 6,
      id: 213,
    },
    {
      name: "گاندی",
      "region ": 6,
      id: 214,
    },
    {
      name: "ساعی",
      "region ": 6,
      id: 215,
    },
    {
      name: "یوسف آباد",
      "region ": 6,
      id: 216,
    },
    {
      name: "جهاد",
      "region ": 6,
      id: 217,
    },
    {
      name: "جنت",
      "region ": 6,
      id: 218,
    },
    {
      name: "آرژانتین",
      "region ": 6,
      id: 219,
    },
    {
      name: "اتوبان همت",
      "region ": 6,
      id: 220,
    },
    {
      name: "اسکندری",
      "region ": 6,
      id: 221,
    },
    {
      name: "امیر آباد",
      "region ": 6,
      id: 222,
    },
    {
      name: "بلوار کشاورز",
      "region ": 6,
      id: 223,
    },
    {
      name: "توانیر",
      "region ": 6,
      id: 224,
    },
    {
      name: "جمال زاده",
      "region ": 6,
      id: 225,
    },
    {
      name: "حافظ",
      "region ": 6,
      id: 226,
    },
    {
      name: "زرتشت",
      "region ": 6,
      id: 227,
    },
    {
      name: "طالقانی",
      "region ": 6,
      id: 228,
    },
    {
      name: "فاطمی",
      "region ": 6,
      id: 229,
    },
    {
      name: "فلسطین",
      "region ": 6,
      id: 230,
    },
    {
      name: "میدان انقلاب اسلامی",
      "region ": 6,
      id: 231,
    },
    {
      name: "میدان ولیعصر",
      "region ": 6,
      id: 232,
    },
    {
      name: "وزراء",
      "region ": 6,
      id: 233,
    },
    {
      name: "کارگر شمالی",
      "region ": 6,
      id: 234,
    },
    {
      name: "کردستان",
      "region ": 6,
      id: 235,
    },
    {
      name: "کریم خان",
      "region ": 6,
      id: 236,
    },
    {
      name: "شارق الف",
      "region ": 7,
      id: 237,
    },
    {
      name: "دهقان",
      "region ": 7,
      id: 238,
    },
    {
      name: "شارق ب",
      "region ": 7,
      id: 239,
    },
    {
      name: "گرگان",
      "region ": 7,
      id: 240,
    },
    {
      name: "نظام آباد",
      "region ": 7,
      id: 241,
    },
    {
      name: "خواجه نصیر و حقوقی",
      "region ": 7,
      id: 242,
    },
    {
      name: "خواجه نظام شرقی",
      "region ": 7,
      id: 243,
    },
    {
      name: "خواجه نظام غربی",
      "region ": 7,
      id: 244,
    },
    {
      name: "کاج",
      "region ": 7,
      id: 245,
    },
    {
      name: "امجدیه خاقانی",
      "region ": 7,
      id: 246,
    },
    {
      name: "بهار",
      "region ": 7,
      id: 247,
    },
    {
      name: "سهروردی باغ صبا",
      "region ": 7,
      id: 248,
    },
    {
      name: "شهیدقندی- نیلوفر",
      "region ": 7,
      id: 249,
    },
    {
      name: "عباس آباد- اندیشه",
      "region ": 7,
      id: 250,
    },
    {
      name: "حشمتیه",
      "region ": 7,
      id: 251,
    },
    {
      name: "دبستان",
      "region ": 7,
      id: 252,
    },
    {
      name: "ارامنه الف",
      "region ": 7,
      id: 253,
    },
    {
      name: "ارامنه ب",
      "region ": 7,
      id: 254,
    },
    {
      name: "قصر",
      "region ": 7,
      id: 255,
    },
    {
      name: "آپادانا",
      "region ": 7,
      id: 256,
    },
    {
      name: "امام حسین",
      "region ": 7,
      id: 257,
    },
    {
      name: "انقلاب",
      "region ": 7,
      id: 258,
    },
    {
      name: "خواجه نظام",
      "region ": 7,
      id: 259,
    },
    {
      name: "سرباز",
      "region ": 7,
      id: 260,
    },
    {
      name: "سهروردی",
      "region ": 7,
      id: 261,
    },
    {
      name: "شریعتی",
      "region ": 7,
      id: 262,
    },
    {
      name: "شهید مدنی",
      "region ": 7,
      id: 263,
    },
    {
      name: "شیخ صفی",
      "region ": 7,
      id: 264,
    },
    {
      name: "عباس آباد",
      "region ": 7,
      id: 265,
    },
    {
      name: "مدنی",
      "region ": 7,
      id: 266,
    },
    {
      name: "مرودشت",
      "region ": 7,
      id: 267,
    },
    {
      name: "مطهری",
      "region ": 7,
      id: 268,
    },
    {
      name: "مفتح جنوبی",
      "region ": 7,
      id: 269,
    },
    {
      name: "هفت تیر",
      "region ": 7,
      id: 270,
    },
    {
      name: "تهرانپارس",
      "region ": 8,
      id: 271,
    },
    {
      name: "دردشت",
      "region ": 8,
      id: 272,
    },
    {
      name: "مدائن",
      "region ": 8,
      id: 273,
    },
    {
      name: "هفت حوض",
      "region ": 8,
      id: 274,
    },
    {
      name: "فدک",
      "region ": 8,
      id: 275,
    },
    {
      name: "زرکش",
      "region ": 8,
      id: 276,
    },
    {
      name: "نارمک",
      "region ": 8,
      id: 277,
    },
    {
      name: "مجیدیه",
      "region ": 8,
      id: 278,
    },
    {
      name: "کرمان",
      "region ": 8,
      id: 279,
    },
    {
      name: "لشگر شرقی",
      "region ": 8,
      id: 280,
    },
    {
      name: "لشگر غربی",
      "region ": 8,
      id: 281,
    },
    {
      name: "وحیدیه",
      "region ": 8,
      id: 282,
    },
    {
      name: "تسلیحات",
      "region ": 8,
      id: 283,
    },
    {
      name: "جشنواره",
      "region ": 8,
      id: 284,
    },
    {
      name: "سبلان",
      "region ": 8,
      id: 285,
    },
    {
      name: "استادمعین",
      "region ": 9,
      id: 286,
    },
    {
      name: "دکتر هوشیار",
      "region ": 9,
      id: 287,
    },
    {
      name: "شهید دستغیب",
      "region ": 9,
      id: 288,
    },
    {
      name: "فتح",
      "region ": 9,
      id: 289,
    },
    {
      name: "امامزاده عبداله",
      "region ": 9,
      id: 290,
    },
    {
      name: "شمشیری",
      "region ": 9,
      id: 291,
    },
    {
      name: "سرآسیاب مهرآباد",
      "region ": 9,
      id: 292,
    },
    {
      name: "مهرآبادجنوبی",
      "region ": 9,
      id: 293,
    },
    {
      name: "استاد معین",
      "region ": 9,
      id: 294,
    },
    {
      name: "سی متری جی",
      "region ": 9,
      id: 295,
    },
    {
      name: "طوس",
      "region ": 9,
      id: 296,
    },
    {
      name: "مهر آباد جنوبی",
      "region ": 9,
      id: 297,
    },
    {
      name: "مهرآباد",
      "region ": 9,
      id: 298,
    },
    {
      name: "امامزاده عبدالله",
      "region ": 9,
      id: 299,
    },
    {
      name: "فتح – صنعتی",
      "region ": 9,
      id: 300,
    },
    {
      name: "بریانک",
      "region ": 10,
      id: 301,
    },
    {
      name: "سلیمانی تیموری",
      "region ": 10,
      id: 302,
    },
    {
      name: "شبیری جی",
      "region ": 10,
      id: 303,
    },
    {
      name: "هفت چنار",
      "region ": 10,
      id: 304,
    },
    {
      name: "سلسبیل جنوبی",
      "region ": 10,
      id: 305,
    },
    {
      name: "کارون جنوبی",
      "region ": 10,
      id: 306,
    },
    {
      name: "هاشمی",
      "region ": 10,
      id: 307,
    },
    {
      name: "زنجان جنوبی",
      "region ": 10,
      id: 308,
    },
    {
      name: "سلسبیل شمالی",
      "region ": 10,
      id: 309,
    },
    {
      name: "کارون شمالی",
      "region ": 10,
      id: 310,
    },
    {
      name: "آذربایجان",
      "region ": 10,
      id: 311,
    },
    {
      name: "آزادی",
      "region ": 10,
      id: 312,
    },
    {
      name: "امام خمینی",
      "region ": 10,
      id: 313,
    },
    {
      name: "جیحون",
      "region ": 10,
      id: 314,
    },
    {
      name: "حسام الدین",
      "region ": 10,
      id: 315,
    },
    {
      name: "خوش",
      "region ": 10,
      id: 316,
    },
    {
      name: "دامپزشکی",
      "region ": 10,
      id: 317,
    },
    {
      name: "رودکی",
      "region ": 10,
      id: 318,
    },
    {
      name: "سینا",
      "region ": 10,
      id: 319,
    },
    {
      name: "قصرالدشت",
      "region ": 10,
      id: 320,
    },
    {
      name: "مالک اشتر",
      "region ": 10,
      id: 321,
    },
    {
      name: "نواب",
      "region ": 10,
      id: 322,
    },
    {
      name: "کارون",
      "region ": 10,
      id: 323,
    },
    {
      name: "کمیل",
      "region ": 10,
      id: 324,
    },
    {
      name: "شیخ هادی",
      "region ": 11,
      id: 325,
    },
    {
      name: "انقلاب",
      "region ": 11,
      id: 326,
    },
    {
      name: "امیریه ( فرهنگ )",
      "region ": 11,
      id: 327,
    },
    {
      name: "فروزش",
      "region ": 11,
      id: 328,
    },
    {
      name: "قلمستان",
      "region ": 11,
      id: 329,
    },
    {
      name: "منیریه",
      "region ": 11,
      id: 330,
    },
    {
      name: "حشمت الدوله – جمالزاده",
      "region ": 11,
      id: 331,
    },
    {
      name: "اسکندری",
      "region ": 11,
      id: 332,
    },
    {
      name: "دخانیات",
      "region ": 11,
      id: 333,
    },
    {
      name: "مخصوص",
      "region ": 11,
      id: 334,
    },
    {
      name: "جمهوری",
      "region ": 11,
      id: 335,
    },
    {
      name: "حر",
      "region ": 11,
      id: 336,
    },
    {
      name: "انبار نفت",
      "region ": 11,
      id: 337,
    },
    {
      name: "آگاهی",
      "region ": 11,
      id: 338,
    },
    {
      name: "راه آهن",
      "region ": 11,
      id: 339,
    },
    {
      name: "عباسی",
      "region ": 11,
      id: 340,
    },
    {
      name: "هلال احمر",
      "region ": 11,
      id: 341,
    },
    {
      name: "ابوسعید",
      "region ": 11,
      id: 342,
    },
    {
      name: "اسکندری جنوبی",
      "region ": 11,
      id: 343,
    },
    {
      name: "پاستور",
      "region ": 11,
      id: 344,
    },
    {
      name: "حسن آباد",
      "region ": 11,
      id: 345,
    },
    {
      name: "گمرک",
      "region ": 11,
      id: 346,
    },
    {
      name: "وحدت اسلامی",
      "region ": 11,
      id: 347,
    },
    {
      name: "ولیعصر",
      "region ": 11,
      id: 348,
    },
    {
      name: "کارگر جنوبی",
      "region ": 11,
      id: 349,
    },
    {
      name: "کاشان",
      "region ": 11,
      id: 350,
    },
    {
      name: "بهارستان",
      "region ": 12,
      id: 351,
    },
    {
      name: "فردوسی",
      "region ": 12,
      id: 352,
    },
    {
      name: "امامزاده یحیی",
      "region ": 12,
      id: 353,
    },
    {
      name: "پامنار",
      "region ": 12,
      id: 354,
    },
    {
      name: "بازار",
      "region ": 12,
      id: 355,
    },
    {
      name: "سنگلج",
      "region ": 12,
      id: 356,
    },
    {
      name: "تختی",
      "region ": 12,
      id: 357,
    },
    {
      name: "هرندی",
      "region ": 12,
      id: 358,
    },
    {
      name: "آبشار",
      "region ": 12,
      id: 359,
    },
    {
      name: "قیام",
      "region ": 12,
      id: 360,
    },
    {
      name: "کوثر",
      "region ": 12,
      id: 361,
    },
    {
      name: "ایران",
      "region ": 12,
      id: 362,
    },
    {
      name: "دروازه شمیران",
      "region ": 12,
      id: 363,
    },
    {
      name: "امین حضور",
      "region ": 12,
      id: 364,
    },
    {
      name: "پانزده خرداد",
      "region ": 12,
      id: 365,
    },
    {
      name: "پیچ شمیران",
      "region ": 12,
      id: 366,
    },
    {
      name: "خراسان",
      "region ": 12,
      id: 367,
    },
    {
      name: "ری",
      "region ": 12,
      id: 368,
    },
    {
      name: "سعدی",
      "region ": 12,
      id: 369,
    },
    {
      name: "لاله زارنو",
      "region ": 12,
      id: 370,
    },
    {
      name: "مولوی",
      "region ": 12,
      id: 371,
    },
    {
      name: "میدان قیام",
      "region ": 12,
      id: 372,
    },
    {
      name: "صفا",
      "region ": 13,
      id: 373,
    },
    {
      name: "شهید اسدی",
      "region ": 13,
      id: 374,
    },
    {
      name: "زاهد گیلانی",
      "region ": 13,
      id: 375,
    },
    {
      name: "اشراقی",
      "region ": 13,
      id: 376,
    },
    {
      name: "دهقان",
      "region ": 13,
      id: 377,
    },
    {
      name: "نیروی هوایی",
      "region ": 13,
      id: 378,
    },
    {
      name: "پیروزی",
      "region ": 13,
      id: 379,
    },
    {
      name: "حافظیه",
      "region ": 13,
      id: 380,
    },
    {
      name: "امامت",
      "region ": 13,
      id: 381,
    },
    {
      name: "شورا",
      "region ": 13,
      id: 382,
    },
    {
      name: "آشتیانی",
      "region ": 13,
      id: 383,
    },
    {
      name: "زینبیه",
      "region ": 13,
      id: 384,
    },
    {
      name: "سرخه حصار",
      "region ": 13,
      id: 385,
    },
    {
      name: "تهران نو",
      "region ": 13,
      id: 386,
    },
    {
      name: "دماوند",
      "region ": 13,
      id: 387,
    },
    {
      name: "نیرو هوایی",
      "region ": 13,
      id: 388,
    },
    {
      name: "شکوفه",
      "region ": 14,
      id: 389,
    },
    {
      name: "چهارصد دستگاه",
      "region ": 14,
      id: 390,
    },
    {
      name: "جابری",
      "region ": 14,
      id: 391,
    },
    {
      name: "دژکام",
      "region ": 14,
      id: 392,
    },
    {
      name: "شاهین",
      "region ": 14,
      id: 393,
    },
    {
      name: "مینای شمالی",
      "region ": 14,
      id: 394,
    },
    {
      name: "نیکنام",
      "region ": 14,
      id: 395,
    },
    {
      name: "آهنگران",
      "region ": 14,
      id: 396,
    },
    {
      name: "بروجردی",
      "region ": 14,
      id: 397,
    },
    {
      name: "صد دستگاه",
      "region ": 14,
      id: 398,
    },
    {
      name: "فرزانه",
      "region ": 14,
      id: 399,
    },
    {
      name: "سر آسیب دولاب",
      "region ": 14,
      id: 400,
    },
    {
      name: "شیوا",
      "region ": 14,
      id: 401,
    },
    {
      name: "نبی اکرم (ص)",
      "region ": 14,
      id: 402,
    },
    {
      name: "شهرابی ( قیام )",
      "region ": 14,
      id: 403,
    },
    {
      name: "شکیب",
      "region ": 14,
      id: 404,
    },
    {
      name: "پرستار",
      "region ": 14,
      id: 405,
    },
    {
      name: "سیزده آبان",
      "region ": 14,
      id: 406,
    },
    {
      name: "ابوذر",
      "region ": 14,
      id: 407,
    },
    {
      name: "تاکسیرانی",
      "region ": 14,
      id: 408,
    },
    {
      name: "مینای جنوبی",
      "region ": 14,
      id: 409,
    },
    {
      name: "دولاب",
      "region ": 14,
      id: 410,
    },
    {
      name: "خاوران",
      "region ": 14,
      id: 411,
    },
    {
      name: "آهنگ شرقی",
      "region ": 14,
      id: 412,
    },
    {
      name: "آهنگ",
      "region ": 14,
      id: 413,
    },
    {
      name: "قصر فیروزه",
      "region ": 14,
      id: 414,
    },
    {
      name: "اتوبان محلاتی",
      "region ": 14,
      id: 415,
    },
    {
      name: "افراسیابی شمالی",
      "region ": 14,
      id: 416,
    },
    {
      name: "اندرزگو",
      "region ": 14,
      id: 417,
    },
    {
      name: "پاسدارگمنام",
      "region ": 14,
      id: 418,
    },
    {
      name: "شهید محلاتی",
      "region ": 14,
      id: 419,
    },
    {
      name: "فلاح",
      "region ": 14,
      id: 420,
    },
    {
      name: "نبرد",
      "region ": 14,
      id: 421,
    },
    {
      name: "هفده شهریور",
      "region ": 14,
      id: 422,
    },
    {
      name: "مظاهری",
      "region ": 15,
      id: 423,
    },
    {
      name: "مینابی",
      "region ": 15,
      id: 424,
    },
    {
      name: "بیسیم",
      "region ": 15,
      id: 425,
    },
    {
      name: "شوش",
      "region ": 15,
      id: 426,
    },
    {
      name: "طیب",
      "region ": 15,
      id: 427,
    },
    {
      name: "مطهری",
      "region ": 15,
      id: 428,
    },
    {
      name: "ابوذر",
      "region ": 15,
      id: 429,
    },
    {
      name: "هاشم آباد",
      "region ": 15,
      id: 430,
    },
    {
      name: "اتابک",
      "region ": 15,
      id: 431,
    },
    {
      name: "شهید بروجردی",
      "region ": 15,
      id: 432,
    },
    {
      name: "کیانشهر شمالی",
      "region ": 15,
      id: 433,
    },
    {
      name: "کیانشهر جنوبی",
      "region ": 15,
      id: 434,
    },
    {
      name: "رضویه",
      "region ": 15,
      id: 435,
    },
    {
      name: "مشیریه",
      "region ": 15,
      id: 436,
    },
    {
      name: "افسریه شمالی",
      "region ": 15,
      id: 437,
    },
    {
      name: "افسریه جنوبی",
      "region ": 15,
      id: 438,
    },
    {
      name: "مسعودیه",
      "region ": 15,
      id: 439,
    },
    {
      name: "والفجر",
      "region ": 15,
      id: 440,
    },
    {
      name: "قیامدشت",
      "region ": 15,
      id: 441,
    },
    {
      name: "خاورشهر",
      "region ": 15,
      id: 442,
    },
    {
      name: "آهنگ",
      "region ": 15,
      id: 443,
    },
    {
      name: "اتوبان بعثت",
      "region ": 15,
      id: 444,
    },
    {
      name: "افسریه",
      "region ": 15,
      id: 445,
    },
    {
      name: "خاوران",
      "region ": 15,
      id: 446,
    },
    {
      name: "مشیریه",
      "region ": 15,
      id: 447,
    },
    {
      name: "جوادیه",
      "region ": 16,
      id: 448,
    },
    {
      name: "نازی آباد",
      "region ": 16,
      id: 449,
    },
    {
      name: "خزانه",
      "region ": 16,
      id: 450,
    },
    {
      name: "شهرک بعثت",
      "region ": 16,
      id: 451,
    },
    {
      name: "علی آباد شمالی",
      "region ": 16,
      id: 452,
    },
    {
      name: "یاخچی آباد و چهارصد دستگاه",
      "region ": 16,
      id: 453,
    },
    {
      name: "تختی",
      "region ": 16,
      id: 454,
    },
    {
      name: "علی آباد جنوبی",
      "region ": 16,
      id: 455,
    },
    {
      name: "باغ آذری",
      "region ": 16,
      id: 456,
    },
    {
      name: "راه آهن",
      "region ": 16,
      id: 457,
    },
    {
      name: "رجایی",
      "region ": 16,
      id: 458,
    },
    {
      name: "هلال احمر",
      "region ": 16,
      id: 459,
    },
    {
      name: "یاخچی آباد",
      "region ": 16,
      id: 460,
    },
    {
      name: "ابوذر غربی",
      "region ": 17,
      id: 461,
    },
    {
      name: "آذری",
      "region ": 17,
      id: 462,
    },
    {
      name: "امامزاده حسن(ع)",
      "region ": 17,
      id: 463,
    },
    {
      name: "یافت آباد",
      "region ": 17,
      id: 464,
    },
    {
      name: "جلیلی",
      "region ": 17,
      id: 465,
    },
    {
      name: "زهتابی",
      "region ": 17,
      id: 466,
    },
    {
      name: "زمزم",
      "region ": 17,
      id: 467,
    },
    {
      name: "سجاد",
      "region ": 17,
      id: 468,
    },
    {
      name: "گلچین",
      "region ": 17,
      id: 469,
    },
    {
      name: "وصفنارد",
      "region ": 17,
      id: 470,
    },
    {
      name: "ابوذر شرقی",
      "region ": 17,
      id: 471,
    },
    {
      name: "باغ خزانه",
      "region ": 17,
      id: 472,
    },
    {
      name: "بلورسازی",
      "region ": 17,
      id: 473,
    },
    {
      name: "مقدم",
      "region ": 17,
      id: 474,
    },
    {
      name: "ابوذر",
      "region ": 17,
      id: 475,
    },
    {
      name: "امام زاده حسن",
      "region ": 17,
      id: 476,
    },
    {
      name: "قزوین",
      "region ": 17,
      id: 477,
    },
    {
      name: "قلعه مرغی",
      "region ": 17,
      id: 478,
    },
    {
      name: "میدان بهاران",
      "region ": 17,
      id: 479,
    },
    {
      name: "فردوس",
      "region ": 18,
      id: 480,
    },
    {
      name: "تولیدارو",
      "region ": 18,
      id: 481,
    },
    {
      name: "بهداشت",
      "region ": 18,
      id: 482,
    },
    {
      name: "ولیعصر شمالی",
      "region ": 18,
      id: 483,
    },
    {
      name: "رجائی",
      "region ": 18,
      id: 484,
    },
    {
      name: "ولیعصر جنوبی",
      "region ": 18,
      id: 485,
    },
    {
      name: "صادقیه",
      "region ": 18,
      id: 486,
    },
    {
      name: "صاحب الزمان",
      "region ": 18,
      id: 487,
    },
    {
      name: "یافت آباد جنوبی",
      "region ": 18,
      id: 488,
    },
    {
      name: "یافت آباد شمالی",
      "region ": 18,
      id: 489,
    },
    {
      name: "شاد آباد",
      "region ": 18,
      id: 490,
    },
    {
      name: "هفده شهریور",
      "region ": 18,
      id: 491,
    },
    {
      name: "امام خمینی (ره )",
      "region ": 18,
      id: 492,
    },
    {
      name: "شمس آباد",
      "region ": 18,
      id: 493,
    },
    {
      name: "خلیج فارس شمالی",
      "region ": 18,
      id: 494,
    },
    {
      name: "خلیج فارس جنوبی",
      "region ": 18,
      id: 495,
    },
    {
      name: "اتوبان آزادگان",
      "region ": 18,
      id: 496,
    },
    {
      name: "خلیج فارس",
      "region ": 18,
      id: 497,
    },
    {
      name: "سعید آباد",
      "region ": 18,
      id: 498,
    },
    {
      name: "شهرک صاحب الزمان",
      "region ": 18,
      id: 499,
    },
    {
      name: "شهرک ولیعصر",
      "region ": 18,
      id: 500,
    },
    {
      name: "خانی آباد نو شمالی",
      "region ": 19,
      id: 501,
    },
    {
      name: "اسفندیاری و بستان",
      "region ": 19,
      id: 502,
    },
    {
      name: "بهمنیار",
      "region ": 19,
      id: 503,
    },
    {
      name: "خانی آباد نو جنوبی",
      "region ": 19,
      id: 504,
    },
    {
      name: "شریعتی جنوبی",
      "region ": 19,
      id: 505,
    },
    {
      name: "شریعتی شمالی",
      "region ": 19,
      id: 506,
    },
    {
      name: "شکوفه جنوبی",
      "region ": 19,
      id: 507,
    },
    {
      name: "شکوفه شمالی",
      "region ": 19,
      id: 508,
    },
    {
      name: "نعمت آباد",
      "region ": 19,
      id: 509,
    },
    {
      name: "دولت خواه",
      "region ": 19,
      id: 510,
    },
    {
      name: "اسماعیل آباد",
      "region ": 19,
      id: 511,
    },
    {
      name: "شهید کاظمی",
      "region ": 19,
      id: 512,
    },
    {
      name: "رسالت",
      "region ": 19,
      id: 513,
    },
    {
      name: "خانی آباد نو",
      "region ": 19,
      id: 514,
    },
    {
      name: "عبدل آباد",
      "region ": 19,
      id: 515,
    },
    {
      name: "اقدسیه",
      "region ": 20,
      id: 516,
    },
    {
      name: "صفائیه",
      "region ": 20,
      id: 517,
    },
    {
      name: "ظهیر آباد",
      "region ": 20,
      id: 518,
    },
    {
      name: "غیوری",
      "region ": 20,
      id: 519,
    },
    {
      name: "جوانمرد",
      "region ": 20,
      id: 520,
    },
    {
      name: "حمزه آباد",
      "region ": 20,
      id: 521,
    },
    {
      name: "دیلمان",
      "region ": 20,
      id: 522,
    },
    {
      name: "فیروزآبادی",
      "region ": 20,
      id: 523,
    },
    {
      name: "منصوریه",
      "region ": 20,
      id: 524,
    },
    {
      name: "۱۳آبان",
      "region ": 20,
      id: 525,
    },
    {
      name: "دولت اباد",
      "region ": 20,
      id: 526,
    },
    {
      name: "شهادت",
      "region ": 20,
      id: 527,
    },
    {
      name: "استخر",
      "region ": 20,
      id: 528,
    },
    {
      name: "بهشتی",
      "region ": 20,
      id: 529,
    },
    {
      name: "سرتخت",
      "region ": 20,
      id: 530,
    },
    {
      name: "علائین",
      "region ": 20,
      id: 531,
    },
    {
      name: "نفر آباد",
      "region ": 20,
      id: 532,
    },
    {
      name: "ولی آباد",
      "region ": 20,
      id: 533,
    },
    {
      name: "امین آباد",
      "region ": 20,
      id: 534,
    },
    {
      name: "تقی آباد",
      "region ": 20,
      id: 535,
    },
    {
      name: "نظامی",
      "region ": 20,
      id: 536,
    },
    {
      name: "عباس آباد",
      "region ": 20,
      id: 537,
    },
    {
      name: "کهریزک",
      "region ": 20,
      id: 538,
    },
    {
      name: "شهرک دریا",
      "region ": 21,
      id: 539,
    },
    {
      name: "تهرانسر غربی",
      "region ": 21,
      id: 540,
    },
    {
      name: "تهرانسر شرقی",
      "region ": 21,
      id: 541,
    },
    {
      name: "باشگاه نفت",
      "region ": 21,
      id: 542,
    },
    {
      name: "تهرانسر مرکزی",
      "region ": 21,
      id: 543,
    },
    {
      name: "شهرک پاسداران",
      "region ": 21,
      id: 544,
    },
    {
      name: "تهرانسر شمالی",
      "region ": 21,
      id: 545,
    },
    {
      name: "شهرک آزادی",
      "region ": 21,
      id: 546,
    },
    {
      name: "شهرک فرهنگیان",
      "region ": 21,
      id: 547,
    },
    {
      name: "شهرک استقلال",
      "region ": 21,
      id: 548,
    },
    {
      name: "شهرک دانشگاه",
      "region ": 21,
      id: 549,
    },
    {
      name: "چیتگر شمالی",
      "region ": 21,
      id: 550,
    },
    {
      name: "چیتگر جنوبی (شهرک ۲۲ بهمن)",
      "region ": 21,
      id: 551,
    },
    {
      name: "ویلا شهر",
      "region ": 21,
      id: 552,
    },
    {
      name: "وردآورد",
      "region ": 21,
      id: 553,
    },
    {
      name: "شهرک غزالی",
      "region ": 21,
      id: 554,
    },
    {
      name: "شهرک شهرداری",
      "region ": 21,
      id: 555,
    },
    {
      name: "اتوبان تهران کرج",
      "region ": 21,
      id: 556,
    },
    {
      name: "بزرگراه فتح",
      "region ": 21,
      id: 557,
    },
    {
      name: "تهرانسر",
      "region ": 21,
      id: 558,
    },
    {
      name: "شهرک ۲۲بهمن",
      "region ": 21,
      id: 559,
    },
    {
      name: "شهرک دانشگاه شریف",
      "region ": 21,
      id: 560,
    },
    {
      name: "دهکده المپیک",
      "region ": 22,
      id: 561,
    },
    {
      name: "زیبا دشت بالا",
      "region ": 22,
      id: 562,
    },
    {
      name: "گلستان شرقی",
      "region ": 22,
      id: 563,
    },
    {
      name: "زیبادشت پائین",
      "region ": 22,
      id: 564,
    },
    {
      name: "شریف",
      "region ": 22,
      id: 565,
    },
    {
      name: "گلستان غربی",
      "region ": 22,
      id: 566,
    },
    {
      name: "امید – دژبان",
      "region ": 22,
      id: 567,
    },
    {
      name: "شهید باقری",
      "region ": 22,
      id: 568,
    },
    {
      name: "آزادشهر",
      "region ": 22,
      id: 569,
    },
    {
      name: "پیکان شهر",
      "region ": 22,
      id: 570,
    },
    {
      name: "دریاچه چیتگر",
      "region ": 22,
      id: 571,
    },
    {
      name: "شهرک راه آهن – شهرک گلستان",
      "region ": 22,
      id: 572,
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query.query;
  if (query) {
    const filteredData = data.areas.filter((area) =>
      area.name.includes(query as string)
    );
    res.status(200).json({ areas: filteredData });
  } else {
    res.status(200).json(data);
  }
}
