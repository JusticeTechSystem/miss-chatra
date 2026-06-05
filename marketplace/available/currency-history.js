// @marketplace currency-history v1.0.0 by JusticeTech
"use strict";
module.exports = {
  name: "CurrencyHistory", category: "finance", desc: "Show historical currency trends",
  command: ["currencytrend","forexhistory","dollarhistory"],
  run: async ({ args, command, chatId, userId, reply, prefix, sock, m, isAdmin, isOwner, isDev, mentionedJid }) => {
    const pfx = prefix || "/";
    return reply("Currency History\n\nUSD/NGN Historical Rates:\n2020: N380\n2021: N410\n2022: N430\n2023: N770\n2024: N1,500+\n2025: N1,600+\n\nThe Naira has depreciated significantly.\nCheck CBN website for official rates.\nCheck AbokiFX for parallel market.");
  }
};
