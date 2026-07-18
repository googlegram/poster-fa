// data.js - بانک سوالات، امتیازات و تحلیل‌ها

window.TEST_DATA = {
  title: "آزمون خودشناسی: فاصله بین ایده، توانایی و واقعیت",
  subtitle: "طراحی و برنامه‌نویسی: حمیدرضا شیرازی",
  dimensions: [
    { id: 'focus', label: 'تمرکز و اولویت‌بندی', color: '#3b82f6' },
    { id: 'dream', label: 'رویا تا واقعیت', color: '#8b5cf6' },
    { id: 'perfection', label: 'کمال‌گرایی', color: '#ec4899' },
    { id: 'resist', label: 'مقاومت در برابر اشتباه', color: '#f59e0b' },
    { id: 'insist', label: 'اصرار در حوزه بدون تخصص', color: '#ef4444' },
    { id: 'prove', label: 'نیاز به اثبات خود', color: '#14b8a6' },
    { id: 'feedback', label: 'پذیرش بازخورد', color: '#06b6d4' },
    { id: 'persist', label: 'استمرار و پشتکار', color: '#8b5cf6' },
    { id: 'routine', label: 'فرار از کارهای تکراری', color: '#f97316' },
    { id: 'learn', label: 'یادگیری بدون اجرا', color: '#6366f1' },
    { id: 'decision', label: 'تصمیم‌گیری', color: '#22c55e' },
    { id: 'responsibility', label: 'مسئولیت‌پذیری', color: '#14b8a6' }
  ],
  questions: [
    {
      id: 1,
      text: 'یک ایده جدید پیدا کرده‌اید که احساس می‌کنید می‌تواند موفق شود. چه می‌کنید؟',
      options: [
        {
          label: 'اول بازار، هزینه و امکان اجرا را بررسی می‌کنم.',
          scores: { focus: 4, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 3, learn: 2, decision: 4, responsibility: 3 }
        },
        {
          label: 'سریع شروع می‌کنم و در مسیر یاد می‌گیرم.',
          scores: { focus: 2, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 2, persist: 3, routine: 2, learn: 4, decision: 2, responsibility: 2 }
        },
        {
          label: 'برای دیگران توضیح می‌دهم چرا این ایده عالی است.',
          scores: { focus: 1, dream: 3, perfection: 2, resist: 3, insist: 3, prove: 4, feedback: 1, persist: 2, routine: 2, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'همزمان چند ایده دیگر را هم بررسی می‌کنم.',
          scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 2, decision: 1, responsibility: 1 }
        }
      ]
    },
    {
      id: 2,
      text: 'پروژه‌ای را شروع کرده‌اید اما به مرحلهٔ خسته‌کننده رسیده‌اید. واکنش شما؟',
      options: [
        {
          label: 'با برنامه‌ریزی روزانه ادامه می‌دهم تا تمام شود.',
          scores: { focus: 4, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 2, learn: 2, decision: 3, responsibility: 4 }
        },
        {
          label: 'احتمالاً پروژه جدید جذاب‌تری شروع می‌کنم.',
          scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'چند روزی می‌گذارم تا دوباره انگیزه بگیرم.',
          scores: { focus: 2, dream: 2, perfection: 2, resist: 2, insist: 1, prove: 1, feedback: 2, persist: 2, routine: 3, learn: 2, decision: 2, responsibility: 2 }
        },
        {
          label: 'از کسی که این کار را انجام داده مشورت می‌گیرم.',
          scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 }
        }
      ]
    },
    {
      id: 3,
      text: 'نتیجهٔ کار شما انتقاد شده. چه احساسی دارید؟',
      options: [
        {
          label: 'با دقت گوش می‌دهم و نقاط بهبود را یادداشت می‌کنم.',
          scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 4 }
        },
        {
          label: 'فکر می‌کنم منتقد متوجه زوایای کار من نشده است.',
          scores: { focus: 2, dream: 2, perfection: 3, resist: 4, insist: 4, prove: 3, feedback: 1, persist: 2, routine: 1, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'بحث می‌کنم تا نظر خود را ثابت کنم.',
          scores: { focus: 1, dream: 1, perfection: 2, resist: 4, insist: 4, prove: 4, feedback: 1, persist: 1, routine: 1, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'بازخورد را می‌پذیرم ولی در عمل کمتر تغییر می‌دهم.',
          scores: { focus: 2, dream: 2, perfection: 2, resist: 3, insist: 2, prove: 2, feedback: 2, persist: 2, routine: 2, learn: 2, decision: 2, responsibility: 2 }
        }
      ]
    },
    {
      id: 4,
      text: 'چقدر به نظر متخصص در حوزه‌ای که تخصص ندارید اعتماد می‌کنید؟',
      options: [
        {
          label: 'کاملاً به متخصص اعتماد دارم و سوال می‌پرسم.',
          scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 2, routine: 2, learn: 4, decision: 4, responsibility: 3 }
        },
        {
          label: 'اغلب نظر خود را مهم‌تر می‌دانم.',
          scores: { focus: 2, dream: 3, perfection: 2, resist: 4, insist: 4, prove: 3, feedback: 1, persist: 2, routine: 1, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'نظر متخصص را می‌شنوم اما بررسی شخصی هم انجام می‌دهم.',
          scores: { focus: 3, dream: 2, perfection: 3, resist: 2, insist: 2, prove: 2, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 }
        },
        {
          label: 'ترجیح می‌دهم خودم همه چیز را یاد بگیرم.',
          scores: { focus: 3, dream: 3, perfection: 3, resist: 3, insist: 3, prove: 2, feedback: 2, persist: 3, routine: 2, learn: 4, decision: 2, responsibility: 2 }
        }
      ]
    },
    {
      id: 5,
      text: 'در یک بحث گروهی، نظر شما با اکثریت مخالف است. چه می‌کنید؟',
      options: [
        {
          label: 'با احترام نظر خود را می‌گویم و به جمع گوش می‌دهم.',
          scores: { focus: 3, dream: 2, perfection: 2, resist: 2, insist: 2, prove: 2, feedback: 3, persist: 2, routine: 2, learn: 3, decision: 3, responsibility: 3 }
        },
        {
          label: 'سعی می‌کنم همه را قانع کنم که حق با من است.',
          scores: { focus: 1, dream: 2, perfection: 2, resist: 4, insist: 4, prove: 4, feedback: 1, persist: 1, routine: 1, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'سکوت می‌کنم اما در ذهن خود به نظر پایبند می‌مانم.',
          scores: { focus: 2, dream: 2, perfection: 2, resist: 3, insist: 3, prove: 2, feedback: 1, persist: 1, routine: 2, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'نظر جمع را می‌پذیرم و بعداً بررسی می‌کنم.',
          scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 2, routine: 2, learn: 4, decision: 4, responsibility: 3 }
        }
      ]
    },
    {
      id: 6,
      text: 'چند پروژه نیمه‌تمام دارید؟',
      options: [
        {
          label: 'هیچکدام، هر پروژه را به سرانجام می‌رسانم.',
          scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 3, learn: 2, decision: 3, responsibility: 4 }
        },
        {
          label: '۱ یا ۲ پروژه که به دلایل موجه متوقف شده.',
          scores: { focus: 3, dream: 2, perfection: 2, resist: 2, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 3, learn: 2, decision: 3, responsibility: 3 }
        },
        {
          label: 'بیش از ۵ پروژه شروع کرده و رها کرده‌ام.',
          scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'بعضی‌ها را به دلیل تغییر اولویت رها می‌کنم.',
          scores: { focus: 2, dream: 3, perfection: 1, resist: 1, insist: 1, prove: 1, feedback: 1, persist: 2, routine: 3, learn: 1, decision: 2, responsibility: 2 }
        }
      ]
    },
    {
      id: 7,
      text: 'برای یک کار تکراری چه رویکردی دارید؟',
      options: [
        {
          label: 'سیستمی برای انجام منظم و خودکار آن ایجاد می‌کنم.',
          scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 2, learn: 3, decision: 3, responsibility: 4 }
        },
        {
          label: 'انجامش می‌دهم اما از آن بیزارم.',
          scores: { focus: 2, dream: 2, perfection: 1, resist: 2, insist: 1, prove: 1, feedback: 1, persist: 2, routine: 1, learn: 1, decision: 2, responsibility: 2 }
        },
        {
          label: 'به شخص دیگری واگذار می‌کنم.',
          scores: { focus: 1, dream: 2, perfection: 1, resist: 2, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'با انجام همزمان کار دیگر، از آن فرار می‌کنم.',
          scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 1, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 }
        }
      ]
    },
    {
      id: 8,
      text: 'وقتی با شکست مواجه می‌شوید، اولین واکنش شما؟',
      options: [
        {
          label: 'علت را بررسی می‌کنم و نقش خود را می‌پذیرم.',
          scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 4 }
        },
        {
          label: 'شرایط و دیگران را مقصر می‌دانم.',
          scores: { focus: 1, dream: 1, perfection: 1, resist: 4, insist: 3, prove: 3, feedback: 1, persist: 1, routine: 1, learn: 1, decision: 1, responsibility: 1 }
        },
        {
          label: 'ناامید می‌شوم ولی بعداً دوباره تلاش می‌کنم.',
          scores: { focus: 2, dream: 3, perfection: 2, resist: 2, insist: 2, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 2, responsibility: 2 }
        },
        {
          label: 'سریع به سراغ ایدهٔ جدید می‌روم.',
          scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 1, prove: 1, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 }
        }
      ]
    },
    {
      id: 9,
      text: 'آموزش جدیدی را شروع می‌کنید، چگونه عمل می‌کنید؟',
      options: [
        {
          label: 'همزمان با یادگیری، یک پروژه عملی اجرا می‌کنم.',
          scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 3 }
        },
        {
          label: 'دوره‌های زیادی را شروع می‌کنم اما کامل نمی‌کنم.',
          scores: { focus: 1, dream: 3, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 4, decision: 1, responsibility: 1 }
        },
        {
          label: 'تمام وقت را صرف مطالعه می‌کنم بدون اقدام.',
          scores: { focus: 2, dream: 3, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 1, persist: 2, routine: 3, learn: 4, decision: 1, responsibility: 1 }
        },
        {
          label: 'با یک متخصص مشورت می‌کنم و سپس شروع می‌کنم.',
          scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 3, decision: 4, responsibility: 3 }
        }
      ]
    },
    {
      id: 10,
      text: 'تصمیم مهمی پیش رو دارید. رویکرد شما؟',
      options: [
        {
          label: 'تحقیق کامل، سپس تصمیم و اجرا.',
          scores: { focus: 4, dream: 2, perfection: 4, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 3, decision: 4, responsibility: 4 }
        },
        {
          label: 'سریع تصمیم می‌گیرم و بعداً اصلاح می‌کنم.',
          scores: { focus: 2, dream: 3, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 2, persist: 2, routine: 2, learn: 3, decision: 2, responsibility: 2 }
        },
        {
          label: 'آنقدر بررسی می‌کنم که زمان از دست می‌رود.',
          scores: { focus: 2, dream: 2, perfection: 4, resist: 2, insist: 1, prove: 1, feedback: 1, persist: 1, routine: 1, learn: 2, decision: 1, responsibility: 1 }
        },
        {
          label: 'از چند نفر با تجربه نظر می‌خواهم.',
          scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 3, decision: 4, responsibility: 3 }
        }
      ]
    }
  ],
  analysis: {
    strengths: {
      focus: 'تمرکز و اولویت‌بندی بالا - توانایی مدیریت همزمان چند کار',
      dream: 'خلاقیت و ایده‌پردازی قوی - دید به آینده',
      perfection: 'دقت و کیفیت‌گرایی بالا',
      resist: 'قدرت باور و استقامت در برابر مخالفت',
      insist: 'اعتماد به نفس بالا در نظرات خود',
      prove: 'انرژی بالا برای اثبات توانمندی‌ها',
      feedback: 'پذیرش بازخورد و رشد سریع',
      persist: 'استمرار و پشتکار مثال‌زدنی',
      routine: 'تنوع‌طلبی و خلاقیت در کار',
      learn: 'یادگیری مداوم و دانش‌محوری',
      decision: 'تصمیم‌گیری دقیق و آگاهانه',
      responsibility: 'مسئولیت‌پذیری بالا'
    },
    challenges: {
      focus: 'پراکندگی ذهنی - نیاز به تمرکز بیشتر',
      dream: 'فاصله بین رویا و واقعیت - نیاز به اجرا',
      perfection: 'کمال‌گرایی افراطی - ممکن است باعث توقف شود',
      resist: 'مقاومت در برابر اشتباه - نیاز به انعطاف‌پذیری',
      insist: 'اصرار در حوزه بدون تخصص - تعادل بین اعتماد و دانش',
      prove: 'تمرکز بر اثبات خود به جای حل مسئله',
      feedback: 'نیاز به تقویت پذیرش بازخورد',
      persist: 'چالش در استمرار - موفقیت به پایان رساندن وابسته است',
      routine: 'فرار از کارهای تکراری - نیاز به صبوری',
      learn: 'یادگیری بدون اجرا - نیاز به اقدام عملی',
      decision: 'چالش در تصمیم‌گیری - بررسی بیشتر',
      responsibility: 'نیاز به تقویت مسئولیت‌پذیری'
    },
    patterns: [
      {
        condition: (scores) => scores.focus < 30 && scores.dream > 35 && scores.routine > 30,
        title: 'خالق ایده‌های بزرگ اما نیازمند سیستم اجرایی',
        description: 'ذهن خلاق و ایده‌پرداز دارید اما برای تبدیل ایده‌ها به واقعیت، به سیستم و نظم نیاز دارید.'
      },
      {
        condition: (scores) => scores.focus > 35 && scores.decision > 35 && scores.responsibility > 35,
        title: 'تحلیل‌گر واقع‌بین و نتیجه‌محور',
        description: 'با دقت و برنامه‌ریزی جلو می‌روید و مسئولیت‌پذیری بالایی دارید.'
      },
      {
        condition: (scores) => scores.dream > 35 && scores.persist < 25 && scores.routine > 30,
        title: 'شروع‌کننده پرانرژی با مشکل استمرار',
        description: 'انرژی و اشتیاق بالایی برای شروع دارید اما در ادامه‌دادن و پایان‌رساندن چالش دارید.'
      },
      {
        condition: (scores) => scores.perfection > 35 && scores.decision < 25,
        title: 'کمال‌گرای محتاط با چالش تصمیم‌گیری',
        description: 'استانداردهای بالایی دارید اما گاهی منتظر شرایط کامل می‌مانید.'
      },
      {
        condition: (scores) => scores.resist > 35 && scores.feedback < 25,
        title: 'مقاوم در برابر تغییر با قدرت باور بالا',
        description: 'به نظرات خود ایمان قوی دارید اما انعطاف‌پذیری ذهنی باید تقویت شود.'
      },
      {
        condition: (scores) => scores.insist > 35 && scores.learn > 30,
        title: 'یادگیرنده خودباور اما نیازمند تواضع علمی',
        description: 'اعتماد به نفس بالا و یادگیری مداوم دارید، اما گاهی بدون تخصص کافی نظر می‌دهید.'
      },
      {
        condition: (scores) => scores.prove > 35 && scores.feedback < 25,
        title: 'جستجوگر تأیید با تمرکز بر اثبات',
        description: 'انرژی زیادی برای اثبات خود صرف می‌کنید که گاهی از حل مسئله دور می‌شوید.'
      },
      {
        condition: (scores) => scores.learn > 35 && scores.persist < 25,
        title: 'جمع‌آوری‌کننده دانش بدون اقدام',
        description: 'اطلاعات زیادی جمع می‌کنید اما در اجرا و عملیاتی‌سازی ضعیف هستید.'
      }
    ],
    suggestions: {
      focus: 'قانون ۹۰ روز: فقط یک هدف اصلی انتخاب کنید و تا ۹۰ روز هیچ پروژه جدیدی شروع نکنید.',
      dream: 'قانون نمونه کوچک: قبل از سرمایه‌گذاری بزرگ، یک نسخه کوچک و آزمایشی بسازید.',
      perfection: 'قانون ۸۰٪: کار را زمانی تمام شده در نظر بگیرید که ۸۰٪ کیفیت مطلوب را داشته باشد.',
      resist: 'قانون گوش دادن: قبل از پاسخ، ۳ نفس عمیق بکشید و سپس نظر دهید.',
      insist: 'قانون متخصص: قبل از تصمیم بزرگ، نظر حداقل ۳ فرد باتجربه را جویا شوید.',
      prove: 'قانون پرسش: به جای اثبات، سوال بپرسید و به دنبال درک باشید.',
      feedback: 'قانون بازخورد: هفته‌ای یک بار از یک فرد معتمد بازخورد بگیرید.',
      persist: 'قانون تکمیل: قبل از شروع پروژه جدید، پروژه قبلی را کامل کنید.',
      routine: 'قانون خودکارسازی: کارهای تکراری را سیستمی کنید تا از آنها فرار نکنید.',
      learn: 'قانون ۲۰-۸۰: ۲۰٪ زمان را برای یادگیری و ۸۰٪ را برای اجرا اختصاص دهید.',
      decision: 'قانون مشورت: قبل از تصمیم‌گیری، با ۳ نفر مشورت کنید.',
      responsibility: 'قانون مالکیت: به جای مقصر دانستن شرایط، نقش خود را بپذیرید.'
    }
  }
};

console.log('✅ data.js بارگذاری شد!', window.TEST_DATA.title);