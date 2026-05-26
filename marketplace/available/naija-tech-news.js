// @marketplace naija-tech-news v1.0.0 by JusticeTech
"use strict";
const axios = require("axios");
module.exports = {
  name: "NaijaTechNews", category: "nigerian", desc: "Nigerian tech news",
  command: ["naijatechn","nigeriatech","technaija"],
  run: async ({ reply }) => {
    try {
      const r = await axios.get("https://techcabal.com/feed/", { timeout: 8000 });
      if (r.data) {
        const items = r.data.match(/<title><!\[CDATA\[([^\]]+)\]\]><\/title>/g) || [];
        const news = items.slice(1, 6).map(x => x.replace(/<[^>]+>/g, "").replace(/\[CDATA\[|\]\]/g, "").trim());
        if (news.length) return reply("Nigerian Tech News\n\n" + news.map((n, i) => (i + 1) + ". " + n).join("\n") + "\n\nFull articles: techcabal.com");
      }
    } catch {}
    return reply("Tech News\n\nCould not fetch live news.\nVisit: techcabal.com, techpoint.africa");
  }
};
