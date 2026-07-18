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
      text: 'یک ایده بزرگ به ذهن شما رسیده که احساس می‌کنید می‌تواند بازار را تغییر دهد. اولین قدم شما چیست؟',
      options: [
        { label: 'تحقیق کامل بازار و امکان‌سنجی انجام می‌دهم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 3, decision: 4, responsibility: 3 } },
        { label: 'سریع شروع می‌کنم و مسیر را جلوتر پیدا می‌کنم.', scores: { focus: 2, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 3, routine: 2, learn: 4, decision: 2, responsibility: 2 } },
        { label: 'با چند نفر متخصص مشورت می‌کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 2, routine: 2, learn: 4, decision: 4, responsibility: 3 } },
        { label: 'همزمان چند ایده دیگر را هم بررسی می‌کنم.', scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 2, decision: 1, responsibility: 1 } }
      ]
    },
    {
      id: 2,
      text: 'یک نفر باتجربه به شما می‌گوید ایده شما قبلاً توسط دیگران امتحان شده و مشکلات آن مشخص است. چه واکنشی نشان می‌دهید؟',
      options: [
        { label: 'دقیق می‌شنوم و مشکلات را یادداشت می‌کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 } },
        { label: 'معتقدم این بار با روش من جواب می‌دهد.', scores: { focus: 2, dream: 3, perfection: 2, resist: 4, insist: 4, prove: 3, feedback: 1, persist: 2, routine: 1, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'تجربه او را بررسی می‌کنم و راه حل بهبود می‌دهم.', scores: { focus: 3, dream: 2, perfection: 3, resist: 2, insist: 2, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 } },
        { label: 'نادیده می‌گیرم و ادامه می‌دهم.', scores: { focus: 1, dream: 3, perfection: 1, resist: 4, insist: 3, prove: 3, feedback: 1, persist: 2, routine: 2, learn: 1, decision: 1, responsibility: 1 } }
      ]
    },
    {
      id: 3,
      text: 'ماه‌ها روی یک پروژه کار کرده‌اید اما بخش‌های خسته‌کننده و تکراری آن باقی مانده است. چه می‌کنید؟',
      options: [
        { label: 'برنامه روزانه می‌چینم و بخش‌ها را یکی‌یکی تمام می‌کنم.', scores: { focus: 4, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 2, learn: 2, decision: 3, responsibility: 4 } },
        { label: 'پروژه جدید جذاب‌تری شروع می‌کنم.', scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'چند روزی استراحت می‌کنم و با انرژی برمی‌گردم.', scores: { focus: 2, dream: 2, perfection: 2, resist: 2, insist: 1, prove: 1, feedback: 2, persist: 2, routine: 3, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'از کسی که این کار را انجام داده کمک می‌گیرم.', scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 4,
      text: 'هنگام شروع یک کسب‌وکار، بیشتر روی تصویر بزرگ و آینده تمرکز می‌کنید یا جزئیات کوچک اجرا را بررسی می‌کنید؟',
      options: [
        { label: 'تصویر بزرگ و آینده را می‌بینم و مسیر را طراحی می‌کنم.', scores: { focus: 2, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 2, routine: 2, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'جزئیات اجرا را دقیق بررسی می‌کنم.', scores: { focus: 4, dream: 2, perfection: 4, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 3, learn: 2, decision: 4, responsibility: 4 } },
        { label: 'تعادل بین این دو را حفظ می‌کنم.', scores: { focus: 3, dream: 3, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 3, responsibility: 3 } },
        { label: 'ابتدا شروع می‌کنم و بعد مسیر را مشخص می‌کنم.', scores: { focus: 2, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 2, routine: 2, learn: 2, decision: 2, responsibility: 2 } }
      ]
    },
    {
      id: 5,
      text: 'یک متخصص حوزه‌ای که در آن تجربه ندارید، با نظر شما مخالفت می‌کند. چگونه برخورد می‌کنید؟',
      options: [
        { label: 'با دقت گوش می‌دهم و دلیلش را می‌پرسم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 2, routine: 2, learn: 4, decision: 4, responsibility: 3 } },
        { label: 'نظر خودم مهم‌تر است چون من به این حوزه علاقه دارم.', scores: { focus: 2, dream: 3, perfection: 2, resist: 4, insist: 4, prove: 3, feedback: 1, persist: 2, routine: 1, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'نظر متخصص را با تحقیق شخصی مقایسه می‌کنم.', scores: { focus: 3, dream: 2, perfection: 3, resist: 2, insist: 2, prove: 2, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 } },
        { label: 'سکوت می‌کنم و بعداً تصمیم می‌گیرم.', scores: { focus: 2, dream: 2, perfection: 2, resist: 2, insist: 1, prove: 1, feedback: 2, persist: 2, routine: 2, learn: 2, decision: 2, responsibility: 2 } }
      ]
    },
    {
      id: 6,
      text: 'چند ایده همزمان در ذهن شما شکل گرفته و همه جذاب به نظر می‌رسند. چگونه تصمیم می‌گیرید کدام را اجرا کنید؟',
      options: [
        { label: 'یک اولویت‌بندی بر اساس زمان و هزینه انجام می‌دهم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 4, responsibility: 4 } },
        { label: 'همه را شروع می‌کنم و بعد می‌بینم کدام جلو می‌رود.', scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 2, decision: 1, responsibility: 1 } },
        { label: 'با چند نفر مشورت می‌کنم و نظرات را می‌سنجم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 2, routine: 2, learn: 3, decision: 4, responsibility: 3 } },
        { label: 'همانی را انتخاب می‌کنم که هیجان‌انگیزتر است.', scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 3, learn: 1, decision: 1, responsibility: 1 } }
      ]
    },
    {
      id: 7,
      text: 'پروژه‌ای که شروع کرده‌اید طبق برنامه پیش نمی‌رود و نتیجه مالی ندارد. اولین چیزی که بررسی می‌کنید چیست؟',
      options: [
        { label: 'استراتژی و برنامه اولیه را بررسی می‌کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 3, decision: 4, responsibility: 4 } },
        { label: 'شرایط بازار و عوامل خارجی را بررسی می‌کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 2, insist: 2, prove: 2, feedback: 2, persist: 2, routine: 2, learn: 3, decision: 3, responsibility: 2 } },
        { label: 'نقش خودم و تصمیماتم را بررسی می‌کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 4 } },
        { label: 'پروژه را رها می‌کنم و به سراغ ایده جدید می‌روم.', scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 1, prove: 1, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 } }
      ]
    },
    {
      id: 8,
      text: 'کسی از شما انتقاد می‌کند که بیشتر ایده می‌دهید تا اینکه آن‌ها را کامل اجرا کنید. واکنش شما چیست؟',
      options: [
        { label: 'قبول می‌کنم و روی تمام کردن پروژه‌ها تمرکز می‌کنم.', scores: { focus: 4, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 4, routine: 2, learn: 2, decision: 3, responsibility: 4 } },
        { label: 'معتقدم ایده‌پردازی ارزشمندتر از اجراست.', scores: { focus: 1, dream: 4, perfection: 2, resist: 3, insist: 3, prove: 2, feedback: 1, persist: 1, routine: 2, learn: 2, decision: 1, responsibility: 1 } },
        { label: 'نظر او را می‌پذیرم اما تغییر نمی‌کنم.', scores: { focus: 2, dream: 3, perfection: 2, resist: 3, insist: 2, prove: 2, feedback: 2, persist: 2, routine: 3, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'از او می‌خواهم راهکار اجرایی بدهد.', scores: { focus: 3, dream: 2, perfection: 3, resist: 2, insist: 2, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 9,
      text: 'برای ساخت یک محصول، یک روش امتحان‌شده توسط افراد موفق وجود دارد اما روش دیگری هم به ذهن شما رسیده است. کدام را انتخاب می‌کنید؟',
      options: [
        { label: 'روش امتحان‌شده را انتخاب می‌کنم و بعد بهبود می‌دهم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 3, learn: 3, decision: 4, responsibility: 4 } },
        { label: 'روش جدید خودم را امتحان می‌کنم.', scores: { focus: 2, dream: 4, perfection: 2, resist: 3, insist: 3, prove: 3, feedback: 1, persist: 2, routine: 2, learn: 3, decision: 2, responsibility: 2 } },
        { label: 'هردو را ترکیب می‌کنم.', scores: { focus: 3, dream: 3, perfection: 3, resist: 2, insist: 2, prove: 2, feedback: 2, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 3 } },
        { label: 'روش ارزان‌تر را انتخاب می‌کنم.', scores: { focus: 2, dream: 2, perfection: 1, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 2, routine: 3, learn: 1, decision: 2, responsibility: 2 } }
      ]
    },
    {
      id: 10,
      text: 'یک کارآفرین موفق مسیر دقیق رسیدن به نتیجه را توضیح می‌دهد. چقدر از تجربه او استفاده می‌کنید؟',
      options: [
        { label: 'کاملاً از مسیر او استفاده می‌کنم و پیاده می‌کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 4, routine: 3, learn: 4, decision: 4, responsibility: 4 } },
        { label: 'مسیر او را بررسی می‌کنم و به روش خودم تغییر می‌دهم.', scores: { focus: 3, dream: 3, perfection: 3, resist: 2, insist: 2, prove: 2, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 } },
        { label: 'بخشی از آن را استفاده می‌کنم و بقیه را خودم طراحی می‌کنم.', scores: { focus: 3, dream: 3, perfection: 2, resist: 2, insist: 2, prove: 2, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 } },
        { label: 'نگاه می‌کنم اما روش خودم را ادامه می‌دهم.', scores: { focus: 2, dream: 4, perfection: 2, resist: 3, insist: 3, prove: 3, feedback: 1, persist: 2, routine: 2, learn: 2, decision: 2, responsibility: 2 } }
      ]
    },
    {
      id: 11,
      text: 'یک ایده بسیار جذاب دارید اما هنوز درباره هزینه، زمان و مراحل اجرای آن اطلاعات کافی ندارید. چه می‌کنید؟',
      options: [
        { label: 'تحقیق کامل انجام می‌دهم و هزینه‌ها را برآورد می‌کنم.', scores: { focus: 4, dream: 2, perfection: 4, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 4 } },
        { label: 'با یک متخصص مشورت می‌کنم و اطلاعات می‌گیرم.', scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 2, routine: 2, learn: 4, decision: 4, responsibility: 3 } },
        { label: 'سریع شروع می‌کنم و در مسیر یاد می‌گیرم.', scores: { focus: 2, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 2, routine: 2, learn: 4, decision: 2, responsibility: 2 } },
        { label: 'ایده را کنار می‌گذارم تا شرایط بهتر شود.', scores: { focus: 2, dream: 2, perfection: 3, resist: 2, insist: 1, prove: 1, feedback: 2, persist: 1, routine: 2, learn: 2, decision: 2, responsibility: 2 } }
      ]
    },
    {
      id: 12,
      text: 'در یک جلسه کاری، همه افراد با نظر شما مخالف هستند. چگونه رفتار می‌کنید؟',
      options: [
        { label: 'با احترام نظر خود را می‌گویم و به دیگران گوش می‌دهم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 2, insist: 2, prove: 2, feedback: 4, persist: 2, routine: 2, learn: 4, decision: 3, responsibility: 3 } },
        { label: 'سعی می‌کنم همه را قانع کنم.', scores: { focus: 1, dream: 3, perfection: 2, resist: 4, insist: 4, prove: 4, feedback: 1, persist: 2, routine: 1, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'سکوت می‌کنم و بعداً تصمیم می‌گیرم.', scores: { focus: 2, dream: 2, perfection: 2, resist: 3, insist: 2, prove: 1, feedback: 2, persist: 1, routine: 2, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'نظر جمع را می‌پذیرم و بررسی می‌کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 2, routine: 2, learn: 4, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 13,
      text: 'بعد از چند ماه یادگیری یک مهارت، هنوز محصول یا نتیجه عملی ایجاد نکرده‌اید. چه تصمیمی می‌گیرید؟',
      options: [
        { label: 'یادگیری را متوقف می‌کنم و اجرا را شروع می‌کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 4, routine: 2, learn: 2, decision: 4, responsibility: 4 } },
        { label: 'ادامه می‌دهم تا کامل یاد بگیرم.', scores: { focus: 2, dream: 2, perfection: 4, resist: 1, insist: 1, prove: 1, feedback: 1, persist: 3, routine: 2, learn: 4, decision: 2, responsibility: 2 } },
        { label: 'یک پروژه کوچک شروع می‌کنم تا یادگیری را عملی کنم.', scores: { focus: 3, dream: 3, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 } },
        { label: 'از کسی که اجرا کرده کمک می‌گیرم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 14,
      text: 'یک فرصت جدید و هیجان‌انگیز پیدا کرده‌اید اما پروژه قبلی شما هنوز تمام نشده است. چه می‌کنید؟',
      options: [
        { label: 'پروژه قبلی را تمام می‌کنم و بعد فرصت جدید را شروع می‌کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 3, learn: 2, decision: 3, responsibility: 4 } },
        { label: 'فرصت جدید را شروع می‌کنم چون هیجان‌انگیزتر است.', scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'هردو را همزمان پیش می‌برم.', scores: { focus: 2, dream: 3, perfection: 2, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 2, routine: 4, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'بررسی می‌کنم کدام اولویت بیشتری دارد و انتخاب می‌کنم.', scores: { focus: 4, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 15,
      text: 'متوجه می‌شوید بخشی از تصمیم قبلی شما اشتباه بوده است. واکنش شما چیست؟',
      options: [
        { label: 'اشتباه را می‌پذیرم و سریع اصلاح می‌کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 4 } },
        { label: 'سعی می‌کنم اشتباه را توجیه کنم.', scores: { focus: 2, dream: 2, perfection: 3, resist: 4, insist: 3, prove: 3, feedback: 1, persist: 2, routine: 1, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'از آن درس می‌گیرم و جلو می‌روم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 4, routine: 2, learn: 4, decision: 3, responsibility: 4 } },
        { label: 'نمی‌پذیرم و ادامه می‌دهم.', scores: { focus: 1, dream: 2, perfection: 3, resist: 4, insist: 4, prove: 3, feedback: 1, persist: 2, routine: 1, learn: 1, decision: 1, responsibility: 1 } }
      ]
    },
    {
      id: 16,
      text: 'یک نفر پیشنهاد می‌دهد قبل از شروع، یک نمونه کوچک و آزمایشی بسازید؛ اما شما معتقدید ایده اصلی نیاز به اجرای کامل دارد. چه می‌کنید؟',
      options: [
        { label: 'پیشنهاد نمونه کوچک را می‌پذیرم و تست می‌کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 4, routine: 2, learn: 4, decision: 4, responsibility: 4 } },
        { label: 'اصرار بر اجرای کامل دارم.', scores: { focus: 2, dream: 4, perfection: 4, resist: 3, insist: 3, prove: 3, feedback: 1, persist: 3, routine: 1, learn: 1, decision: 2, responsibility: 2 } },
        { label: 'یک نسخه کوچک با امکانات اصلی می‌سازم.', scores: { focus: 3, dream: 3, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 } },
        { label: 'نظر او را می‌شنوم اما خودم تصمیم می‌گیرم.', scores: { focus: 3, dream: 3, perfection: 3, resist: 2, insist: 2, prove: 2, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 3, responsibility: 3 } }
      ]
    },
    {
      id: 17,
      text: 'وقتی درباره یک موضوع اطلاعات کافی ندارید اما احساس می‌کنید راه‌حل را می‌دانید، چگونه تصمیم می‌گیرید؟',
      options: [
        { label: 'تحقیق می‌کنم و بعد تصمیم می‌گیرم.', scores: { focus: 4, dream: 2, perfection: 4, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 4 } },
        { label: 'به حس خود اعتماد می‌کنم و اقدام می‌کنم.', scores: { focus: 2, dream: 4, perfection: 1, resist: 2, insist: 3, prove: 3, feedback: 1, persist: 2, routine: 2, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'با یک متخصص مشورت می‌کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 2, routine: 2, learn: 4, decision: 4, responsibility: 3 } },
        { label: 'احتیاط می‌کنم و صبر می‌کنم تا اطلاعات کامل شود.', scores: { focus: 2, dream: 2, perfection: 4, resist: 2, insist: 1, prove: 1, feedback: 2, persist: 2, routine: 2, learn: 3, decision: 2, responsibility: 2 } }
      ]
    },
    {
      id: 18,
      text: 'کسی به شما می‌گوید موفقیت بیشتر به سیستم و استمرار وابسته است تا ایده اولیه. نظر شما چیست؟',
      options: [
        { label: 'کاملاً موافقم و روی سیستم تمرکز می‌کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 4, routine: 3, learn: 3, decision: 4, responsibility: 4 } },
        { label: 'با او مخالفم، ایده اولیه مهم‌تر است.', scores: { focus: 1, dream: 4, perfection: 2, resist: 3, insist: 3, prove: 2, feedback: 1, persist: 1, routine: 2, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'هر دو را مهم می‌دانم و ترکیب می‌کنم.', scores: { focus: 3, dream: 3, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 3, responsibility: 3 } },
        { label: 'بررسی می‌کنم و بعد تصمیم می‌گیرم.', scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 19,
      text: 'برای رسیدن به یک هدف بزرگ باید ۹۰ روز فقط روی یک مسیر تمرکز کنید. این شرایط برای شما چگونه است؟',
      options: [
        { label: 'مناسب است، می‌توانم تمرکز کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 3, learn: 2, decision: 3, responsibility: 4 } },
        { label: 'سخت است، تنوع بیشتری نیاز دارم.', scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'چالش‌برانگیز است اما انجام می‌دهم.', scores: { focus: 3, dream: 3, perfection: 2, resist: 2, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 3, learn: 2, decision: 3, responsibility: 3 } },
        { label: 'برنامه‌ریزی می‌کنم تا بتوانم تمرکز کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 2, learn: 2, decision: 4, responsibility: 4 } }
      ]
    },
    {
      id: 20,
      text: 'یک پروژه جذاب است اما شامل ده‌ها کار کوچک و تکراری است. چه رویکردی دارید؟',
      options: [
        { label: 'کارها را سیستم‌سازی می‌کنم و اتوماتیک می‌کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 2, learn: 4, decision: 3, responsibility: 4 } },
        { label: 'آنها را یکی‌یکی انجام می‌دهم اگرچه سخت است.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 1, learn: 2, decision: 3, responsibility: 4 } },
        { label: 'به کسی دیگر واگذار می‌کنم.', scores: { focus: 2, dream: 3, perfection: 1, resist: 2, insist: 2, prove: 2, feedback: 1, persist: 2, routine: 4, learn: 1, decision: 2, responsibility: 2 } },
        { label: 'از انجامشان فرار می‌کنم.', scores: { focus: 1, dream: 4, perfection: 1, resist: 1, insist: 1, prove: 1, feedback: 1, persist: 1, routine: 4, learn: 1, decision: 1, responsibility: 1 } }
      ]
    },
    {
      id: 21,
      text: 'یک رقیب همان ایده شما را زودتر اجرا کرده و موفق شده است. اولین واکنش شما چیست؟',
      options: [
        { label: 'بررسی می‌کنم چه کاری متفاوت انجام داده و از آن یاد می‌گیرم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 3 } },
        { label: 'ناراحت می‌شوم اما راه خودم را ادامه می‌دهم.', scores: { focus: 2, dream: 3, perfection: 2, resist: 3, insist: 3, prove: 2, feedback: 1, persist: 3, routine: 2, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'به دنبال نقاط ضعف کار او می‌گردم.', scores: { focus: 2, dream: 3, perfection: 3, resist: 3, insist: 2, prove: 3, feedback: 1, persist: 2, routine: 1, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'از او الهام می‌گیرم و مسیر بهتری طراحی می‌کنم.', scores: { focus: 3, dream: 4, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 3 } }
      ]
    },
    {
      id: 22,
      text: 'متوجه می‌شوید دلیل موفقیت دیگران استفاده از تجربه افراد قبلی بوده است، نه فقط ایده جدید. این موضوع چه اثری روی روش شما دارد؟',
      options: [
        { label: 'روش خود را تغییر می‌دهم و از تجربه دیگران استفاده می‌کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 } },
        { label: 'روش خودم را ادامه می‌دهم چون منحصر‌به‌فرد است.', scores: { focus: 2, dream: 4, perfection: 3, resist: 4, insist: 4, prove: 3, feedback: 1, persist: 2, routine: 1, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'ترکیبی از تجربه دیگران و ایده خودم را اجرا می‌کنم.', scores: { focus: 3, dream: 3, perfection: 2, resist: 2, insist: 2, prove: 2, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 } },
        { label: 'بررسی می‌کنم کدام بخش از تجربه آن‌ها قابل استفاده است.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 23,
      text: 'وقتی بین «شروع سریع» و «بررسی کامل قبل از شروع» قرار می‌گیرید، کدام را انتخاب می‌کنید؟',
      options: [
        { label: 'بررسی کامل و سپس شروع.', scores: { focus: 4, dream: 2, perfection: 4, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 3, decision: 4, responsibility: 4 } },
        { label: 'شروع سریع و اصلاح در مسیر.', scores: { focus: 2, dream: 4, perfection: 1, resist: 1, insist: 2, prove: 2, feedback: 2, persist: 2, routine: 2, learn: 4, decision: 2, responsibility: 2 } },
        { label: 'تعادل: یک بررسی سریع و شروع.', scores: { focus: 3, dream: 3, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 } },
        { label: 'بستگی به اهمیت پروژه دارد.', scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 24,
      text: 'اگر بفهمید مسیر انتخابی شما اشتباه بوده، تغییر مسیر می‌دهید یا تلاش می‌کنید همان مسیر را اصلاح کنید؟',
      options: [
        { label: 'سریع تغییر مسیر می‌دهم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 4, responsibility: 3 } },
        { label: 'همان مسیر را اصلاح می‌کنم.', scores: { focus: 3, dream: 2, perfection: 3, resist: 3, insist: 3, prove: 2, feedback: 2, persist: 4, routine: 2, learn: 2, decision: 2, responsibility: 3 } },
        { label: 'بررسی می‌کنم کدام گزینه هزینه کمتری دارد.', scores: { focus: 3, dream: 2, perfection: 3, resist: 2, insist: 2, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 4, responsibility: 3 } },
        { label: 'از کسی که این مسیر را رفته مشورت می‌گیرم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 25,
      text: 'کسی می‌گوید مشکل اصلی شما کمبود ایده نیست، بلکه تمام کردن کارهاست. چه برداشتی می‌کنید؟',
      options: [
        { label: 'قبول می‌کنم و روی تمام کردن کارها تمرکز می‌کنم.', scores: { focus: 4, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 4, routine: 2, learn: 2, decision: 3, responsibility: 4 } },
        { label: 'کمی ناراحت می‌شوم اما می‌پذیرم.', scores: { focus: 2, dream: 2, perfection: 2, resist: 2, insist: 2, prove: 2, feedback: 3, persist: 3, routine: 2, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'فکر می‌کنم ایده‌های جدید ارزش بیشتری دارند.', scores: { focus: 1, dream: 4, perfection: 2, resist: 3, insist: 3, prove: 2, feedback: 1, persist: 1, routine: 3, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'برنامه جدیدی می‌چینم تا پروژه‌ها را تمام کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 4, routine: 2, learn: 2, decision: 4, responsibility: 4 } }
      ]
    },
    {
      id: 26,
      text: 'در یک پروژه، ایده عالی وجود دارد اما جزئیات اجرا ضعیف است. آیا آن را موفق می‌دانید؟',
      options: [
        { label: 'خیر، بدون اجرای خوب ایده به جایی نمی‌رسد.', scores: { focus: 4, dream: 2, perfection: 4, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 3, learn: 2, decision: 3, responsibility: 4 } },
        { label: 'بله، ایده عالی نشان‌دهنده پتانسیل است.', scores: { focus: 1, dream: 4, perfection: 1, resist: 2, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 2, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'اگر ایده قوی باشد، اجرا قابل بهبود است.', scores: { focus: 3, dream: 3, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 } },
        { label: 'هردو به یک اندازه مهم هستند.', scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 3, responsibility: 3 } }
      ]
    },
    {
      id: 27,
      text: 'یک متخصص به شما می‌گوید پنج اشتباه رایج در این مسیر وجود دارد که دیگران قبلاً تجربه کرده‌اند. چگونه از این اطلاعات استفاده می‌کنید؟',
      options: [
        { label: 'آن‌ها را می‌نویسم و در مسیرم از آن‌ها دوری می‌کنم.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 4 } },
        { label: 'برخی را درست می‌دانم و برخی را نادیده می‌گیرم.', scores: { focus: 2, dream: 3, perfection: 2, resist: 3, insist: 3, prove: 2, feedback: 2, persist: 2, routine: 2, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'از هر پنج اشتباه درس می‌گیرم و راه حل می‌سازم.', scores: { focus: 3, dream: 3, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 4, responsibility: 3 } },
        { label: 'آن‌ها را با شرایط خودم تطبیق می‌دهم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 2, insist: 2, prove: 2, feedback: 3, persist: 3, routine: 2, learn: 3, decision: 3, responsibility: 3 } }
      ]
    },
    {
      id: 28,
      text: 'وقتی نتیجه کار شما کمتر از انتظار است، بیشتر دنبال مقصر می‌گردید یا دنبال دلیل؟',
      options: [
        { label: 'دنبال دلیل می‌گردم تا مشکل را حل کنم.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 4 } },
        { label: 'دنبال مقصر می‌گردم.', scores: { focus: 1, dream: 1, perfection: 2, resist: 4, insist: 3, prove: 3, feedback: 1, persist: 1, routine: 1, learn: 1, decision: 1, responsibility: 1 } },
        { label: 'نقش خودم را بررسی می‌کنم و بهبود می‌دهم.', scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 4 } },
        { label: 'شرایط را مقصر می‌دانم و ادامه می‌دهم.', scores: { focus: 2, dream: 2, perfection: 2, resist: 3, insist: 2, prove: 2, feedback: 1, persist: 2, routine: 2, learn: 1, decision: 2, responsibility: 2 } }
      ]
    },
    {
      id: 29,
      text: 'اگر مجبور شوید بین ساختن یک چیز ساده اما قابل استفاده و یک طرح بزرگ و کامل انتخاب کنید، کدام را انتخاب می‌کنید؟',
      options: [
        { label: 'چیز ساده اما قابل استفاده را انتخاب می‌کنم.', scores: { focus: 4, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 3, persist: 4, routine: 2, learn: 2, decision: 4, responsibility: 4 } },
        { label: 'طرح بزرگ و کامل را انتخاب می‌کنم.', scores: { focus: 2, dream: 4, perfection: 4, resist: 2, insist: 2, prove: 2, feedback: 1, persist: 3, routine: 1, learn: 2, decision: 2, responsibility: 2 } },
        { label: 'ساده را می‌سازم و بعد آن را بزرگ می‌کنم.', scores: { focus: 3, dream: 3, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 2, learn: 3, decision: 3, responsibility: 3 } },
        { label: 'بستگی به بودجه و زمان دارد.', scores: { focus: 3, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 3, routine: 2, learn: 2, decision: 4, responsibility: 3 } }
      ]
    },
    {
      id: 30,
      text: 'پنج سال بعد به مسیر امروز خود نگاه می‌کنید. فکر می‌کنید چه چیزی بیشتر روی موفقیت یا شکست شما اثر گذاشته است؟',
      options: [
        { label: 'استمرار و پایبندی به مسیر.', scores: { focus: 3, dream: 2, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 2, learn: 2, decision: 3, responsibility: 4 } },
        { label: 'تعداد ایده‌های جدید و تغییر مسیرها.', scores: { focus: 1, dream: 4, perfection: 1, resist: 2, insist: 2, prove: 2, feedback: 1, persist: 1, routine: 4, learn: 2, decision: 1, responsibility: 1 } },
        { label: 'یادگیری از تجربه دیگران و انعطاف‌پذیری.', scores: { focus: 3, dream: 3, perfection: 2, resist: 1, insist: 1, prove: 1, feedback: 4, persist: 3, routine: 2, learn: 4, decision: 3, responsibility: 3 } },
        { label: 'تمرکز روی یک هدف و اجرای کامل آن.', scores: { focus: 4, dream: 2, perfection: 3, resist: 1, insist: 1, prove: 1, feedback: 2, persist: 4, routine: 2, learn: 2, decision: 3, responsibility: 4 } }
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