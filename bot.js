const { fetchWeatherData } = require("./api.js");

const TelegramBot = require("node-telegram-bot-api");

// Replace 'YOUR_BOT_TOKEN' with your own Telegram Bot API token
const token = "6250451069:AAHz6XCIg0x_KdtolsNISVnf4rlBrOiBpwM";

// Create a new instance of the TelegramBot
const bot = new TelegramBot(token, { polling: true });

// Handle incoming messages
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Respond to a specific command
  if (messageText === "/start") {
    bot.sendMessage(chatId, "👋🏻 Assalomu alaykum botga hush kelibsiz!", {
      reply_markup: {
        keyboard: [["📖 About bot"]],
        one_time_keyboard: true,
        resize_keyboard: true,
      },
    });
  } else if (messageText === "📖 About bot") {
    bot.sendMessage(
      chatId,
      "📋 Bu bot javascript dasturlash tili orqali test uchun yaratildi.",
      {
        reply_markup: {
          resize_keyboard: true,
          keyboard: [["🔙 Orqaga"]],
        },
      }
    );
  } else if (messageText === "🔙 Orqaga") {
    bot.sendMessage(chatId, "🔻 Bosh menu", {
      reply_markup: {
        resize_keyboard: true,
        keyboard: [["📖 About bot"]],
      },
    });
  } else {
    bot.sendMessage(
      chatId,
      "🤷‍♂️ Nomalum buyuruq pastdagi knopkalardan foydalaning."
    ); // Replace with your own message
  }
});

bot.on("inline_query", (query) => {
  const chatId = query.chat.id;
  console.log(chatId);
});
