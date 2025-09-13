document.addEventListener("DOMContentLoaded", () => {
  const loremWords = [
    "لورم", "ایپسوم", "متن", "ساختگی", "طراحان", "گرافیک", "چاپ", "مجله", "روزنامه",
    "سطر", "ستون", "نامفهوم", "صنعت", "چاپگر", "کتاب", "الکترونیکی", "نرم‌افزار", "طراحی",
    "تایپوگرافی", "محتوا", "چیدمان", "فونت", "رنگ", "صفحه‌آرایی", "کاربر", "واکنش‌گرا",
    "سازگاری", "شبکه", "داده", "سرعت", "دسترس‌پذیری", "تعامل", "رابط", "تجربه", "سیستم",
    "ساختار", "برنامه", "توسعه", "امنیت", "پایداری", "ماژول", "پروژه", "مرورگر", "سرور",
    "درخواست", "پاسخ", "آدرس", "دامنه", "توکن", "ذخیره‌سازی", "پایگاه‌داده", "کوئری",
    "فیلتر", "جستجو", "نمایش", "ورودی", "متغیر", "تابع", "شرط", "حلقه", "رویداد", "کلیک",
    "انیمیشن", "ترنزیشن", "تحلیل", "منبع", "مستندات", "راهنما", "آموزش"
  ];

  const paragraphsSlider = document.getElementById("paragraphs");
  const wordsSlider = document.getElementById("words");
  const paragraphsValue = document.getElementById("paragraphsValue");
  const wordsValue = document.getElementById("wordsValue");
  const generateButton = document.getElementById("generate");
  const outputContainer = document.getElementById("loremText");
  const copyButton = document.getElementById("copyText");

  // بروزرسانی مقدار اسلایدرها
  paragraphsSlider.addEventListener("input", () => {
    paragraphsValue.textContent = paragraphsSlider.value;
  });

  wordsSlider.addEventListener("input", () => {
    wordsValue.textContent = wordsSlider.value;
  });

  // تولید متن
  generateButton.addEventListener("click", () => {
    const numParagraphs = parseInt(paragraphsSlider.value);
    const wordsPerParagraph = parseInt(wordsSlider.value);

    const result = generateLorem(numParagraphs, wordsPerParagraph);
    displayLorem(result);
  });

  // تولید متن ساختگی
  function generateLorem(paragraphs, wordsPerParagraph) {
    const output = [];

    for (let i = 0; i < paragraphs; i++) {
      const words = [];
      for (let j = 0; j < wordsPerParagraph * 10; j++) {
        const word = loremWords[Math.floor(Math.random() * loremWords.length)];
        words.push(word);
      }
      output.push(words.join(" "));
    }

    return output.join("\n\n");
  }

  // نمایش متن و فعال‌سازی دکمه کپی
  function displayLorem(text) {
outputContainer.textContent = text;

    copyButton.style.display = "inline-block";
  }

  // کپی کردن متن
  copyButton.addEventListener("click", () => {
    const text = outputContainer.innerText;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("✅ متن با موفقیت کپی شد!");
      })
      .catch(() => {
        alert("❌ مشکلی در کپی کردن متن پیش آمد.");
      });
  });
});
