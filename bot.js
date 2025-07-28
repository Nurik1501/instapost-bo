const TelegramBot = require('node-telegram-bot-api');
const token = '7810375807:AAGgNEzXgkP3_enBBKvTZ1_5PkeokgddaaY4';
const bot = new TelegramBot(token, { polling: true });

const menu = [
  ["📥 Тапсырыс беру", "📄 Үлгі көру"],
  ["ℹ️ Қызмет туралы", "📞 Байланыс"]
];

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Сәлем 👋\nМен – InstaPost Bot, Instagram үшін кәсіби посттар жазам.\n
📌 Қызметтер:
1️⃣ 5 пост – 10000 ₸
2️⃣ 10 пост – 15000 ₸
3️⃣ Пост + визуал идея – 30000 ₸
Төмендегі мәзірден таңдаңыз ⬇️`, {
    reply_markup: { keyboard: menu, resize_keyboard: true }
  });
});

bot.on('message', (msg) => {
  const text = msg.text;

  if (text === "📥 Тапсырыс беру") {
    bot.sendMessage(msg.chat.id, `📌 Тапсырыс беру үшін ақпарат:

1. Instagram парақшаңыз немесе тақырыбы
2. Мақсатты аудитория
3. Қанша пост: 5 немесе 10?
4. Тілін таңдаңыз: қазақша/орысша?

💳 Төлем:
Kaspi Gold: 4400430200210463
Аты: NURBEK NURAKBEKOV

✅ Чекті жіберген соң — 24 сағат ішінде дайын болады!`);
  }
  else if (text === "📄 Үлгі көру") {
    bot.sendMessage(msg.chat.id, `📌 Үлгі пост (медицина тақырыбына):

Ерлер денсаулығы – назардан тыс қалмасын  
🧔‍♂️ Урологқа уақытылы бару – ерте ем мен жеңіл шешім...

Толық контент қажет болса — тапсырыс бере аласыз.`);
  }
  else if (text === "ℹ️ Қызмет туралы") {
    bot.sendMessage(msg.chat.id, `Мен Instagram посттарыңызды кәсіби түрде жазып берем:

– Аудиторияға бейім
– Қате-сөзсіз
– Хештегпен бірге
– Дайын Google Docs формасында`);
  }
  else if (text === "📞 Байланыс") {
    bot.sendMessage(msg.chat.id, `Сұрақтарыңыз болса, жазыңыз:
📩 Telegram: @nurbek_support
📸 Instagram: @insta.post_`);
  }
});

bot.on("polling_error", console.error);
