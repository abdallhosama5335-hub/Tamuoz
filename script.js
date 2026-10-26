// بيانات الوصفات
const RECIPES = {
  "1": {
    title: "كنافة نابلسية",
    meta: "60 دقيقة · متوسط · 6 حصص",
    intro: "كنافة ذهبية مقرمشة من الخارج وطرية بالجبنة من الداخل.",
    ingredients: ["500 غرام كنافة ناعمة", "250 غرام جبنة نابلسية", "150 غرام زبدة مذابة", "2 كوب سكر", "1 كوب ماء", "1 ملعقة صغيرة ماء ورد"],
    steps: [
      "حضّري القطر بغلي السكر والماء 10 دقائق ثم أضيفي ماء الورد واتركيه يبرد.",
      "افردي نصف الكنافة في صينية مدهونة بالزبدة وضعي الجبنة فوقها ثم غطيها بالنصف الثاني.",
      "اخبزيها على حرارة 180 درجة حتى تصبح ذهبية، نحو 30 دقيقة.",
      "اسكبي القطر الدافئ فوق الكنافة الساخنة وقدّميها فورًا."
    ]
  },
  "2": {
    title: "فتوش",
    meta: "20 دقيقة · سهل · 4 حصص",
    intro: "سلطة صيفية منعشة مع خبز مقرمش وصلصة دبس الرمان.",
    ingredients: ["2 خس روماني مقطع", "2 خيارة", "3 بندورة", "رزمة فجل", "خبز صاج مقرمش", "3 ملاعق دبس رمان", "عصير ليمون وزيت زيتون"],
    steps: [
      "قطّعي الخضار إلى مكعبات متوسطة وضعيها في وعاء كبير.",
      "اكسري الخبز المقرمش باليد فوق السلطة.",
      "اخلطي دبس الرمان مع عصير الليمون والزيت وصبّيه على السلطة قبل التقديم مباشرة."
    ]
  },
  "3": {
    title: "مجدرة بالعدس",
    meta: "45 دقيقة · سهل · 4 حصص",
    intro: "طبق نباتي دافئ وغني، يحلو مع البصل المقلي والزبادي.",
    ingredients: ["1 كوب عدس بني", "1/2 كوب أرز", "2 بصلة كبيرة", "3 ملاعق زيت", "ملح وكمون"],
    steps: [
      "اسلقي العدس مع نصف كمية البصل حتى ينضج.",
      "أضيفي الأرز والملح والكمون واتركيه على نار هادئة حتى ينشف الماء.",
      "قلّي باقي البصل حتى يصبح ذهبيًا مقرمشًا وزيّني به الطبق."
    ]
  },
  "4": {
    title: "كبة حلبية",
    meta: "90 دقيقة · متقدم · 8 حصص",
    intro: "كبة مقلية بعجينة البرغل والحشوة اللحمية، من أشهر أطباق حلب.",
    ingredients: ["2 كوب برغل ناعم", "500 غرام لحم مفروم", "1 بصلة مفرومة", "1 ملعقة صغيرة بهارات حلبية", "زيت للقلي"],
    steps: [
      "انقعي البرغل وعجنيه مع الماء والملح حتى يصبح متماسكًا.",
      "اقلي البصل مع اللحم وتبليه بالبهارات، ثم اتركيه يبرد.",
      "شكّلي الكرات وحشّيها بالحشوة واقليها بالزيت الساخن حتى تحمر."
    ]
  },
  "5": {
    title: "ليمونادة بالنعناع",
    meta: "10 دقائق · سهل · 4 حصص",
    intro: "مشروب صيفي بارد يُحضَّر في دقائق.",
    ingredients: ["5 ليمونات", "1/3 كوب سكر", "حفنة نعناع طازج", "4 أكواب ماء بارد", "ثلج"],
    steps: [
      "اعصري الليمون واخلطي العصير مع السكر حتى يذوب.",
      "اهرسي النعناع قليلًا في الكأس ثم أضيفي الماء والثلج.",
      "قدّميها باردة مع شرائح الليمون."
    ]
  },
  "6": {
    title: "بسبوسة بالقشطة",
    meta: "50 دقيقة · سهل · 12 قطعة",
    intro: "بسبوسة طرية بالقشطة والفستق، مثالية مع الشاي.",
    ingredients: ["2 كوب سميد", "1 كوب سكر", "1 كوب زبادي", "1/2 كوب زيت", "1 ملعقة بيكنج باودر", "قشطة للتقديم"],
    steps: [
      "اخلطي السميد مع الزيت والزبادي والبيكنج باودر ثم أضيفي نصف السكر.",
      "اسكبي العجين في صينية مدهونة واخبزيه على 180 درجة حتى ينضج.",
      "حضّري قطرًا من باقي السكر والماء، واسكبيه على البسبوسة الساخنة وقطعيها بعد أن تبرد قليلًا."
    ]
  },
  "f": {
    title: "كبسة الدجاج",
    meta: "90 دقيقة · متوسط · 8 حصص",
    intro: "أرز بسمتي معطّر بالبهارات مع دجاج مشوي، يُقدَّم في صينية كبيرة.",
    ingredients: ["1 دجاجة كاملة مقطعة", "3 أكواب أرز بسمتي", "2 بصلة", "3 حبات طماطم", "ملعقة كبيرة كبسة", "زعفران ومكسرات"],
    steps: [
      "اسلقي الدجاج مع البصل والبهارات حتى ينضج، واحتفظي بالمرق.",
      "قلّي البصل والطماطم والكبسة ثم أضيفي الأرز والمرق بالمقدار المناسب.",
      "اتركي الأرز على نار هادئة حتى ينضج، وقدميه مع الدجاج والمكسرات المحمصة."
    ]
  }
};

// القائمة للجوال
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// التصفية والبحث
const cards = document.querySelectorAll(".card");
const filters = document.querySelectorAll(".filter");
const searchInput = document.getElementById("search");
const emptyMsg = document.getElementById("empty");
let activeCategory = "all";

function applyFilters() {
  const query = searchInput.value.trim();
  let visible = 0;

  cards.forEach((card) => {
    const matchCategory = activeCategory === "all" || card.dataset.category === activeCategory;
    const matchSearch = card.dataset.title.includes(query);
    const show = matchCategory && matchSearch;
    card.hidden = !show;
    if (show) visible++;
  });

  emptyMsg.hidden = visible > 0;
}

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    activeCategory = btn.dataset.filter;
    filters.forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-pressed", String(b === btn));
    });
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);

// نافذة الوصفة
const dialog = document.getElementById("recipe-dialog");
const dialogTitle = document.getElementById("dialog-title");
const dialogMeta = document.getElementById("dialog-meta");
const dialogIntro = document.getElementById("dialog-intro");
const dialogIngredients = document.getElementById("dialog-ingredients");
const dialogSteps = document.getElementById("dialog-steps");

function openRecipe(id) {
  const recipe = RECIPES[id];
  if (!recipe) return;

  dialogTitle.textContent = recipe.title;
  dialogMeta.textContent = recipe.meta;
  dialogIntro.textContent = recipe.intro;
  dialogIngredients.innerHTML = recipe.ingredients.map((item) => `<li>${item}</li>`).join("");
  dialogSteps.innerHTML = recipe.steps.map((step) => `<li>${step}</li>`).join("");

  dialog.showModal();
}

document.querySelectorAll("[data-open]").forEach((btn) => {
  btn.addEventListener("click", () => openRecipe(btn.dataset.open));
});

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());

// إغلاق النافذة عند الضغط خارجها
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

// النشرة البريدية
const form = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");
const formMsg = document.getElementById("form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    formMsg.textContent = "يرجى كتابة بريد إلكتروني صحيح.";
    formMsg.style.color = "#F6C98B";
    return;
  }

  formMsg.textContent = "شكرًا لاشتراكك! ستصلك أول وصفة قريبًا.";
  formMsg.style.color = "#FFFFFF";
  form.reset();
});
