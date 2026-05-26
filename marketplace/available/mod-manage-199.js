// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b0iJdSac4Q//xpGKAuwIPY7lc5hDbB/wCR1f887iqroaRnckyUnO2dFJ+QyorKwofZQn22wYxgsBIbQd+ak+W90TuKySkTyvIPSU+5q/vh0ZVFKOAiORr3h1Fdgwi31WykS+k1adHDOFTlYpyUl3/2irRsxYmajZ67kgiH8VRXSzWlnVrL7nMaC+/LEPRyBUawCncI+1LjUTr3VLhDOaO1XtOhoOoEA8PmgNFJVdpYRdJro0n4u0dyxPb0SCg5aYDk4FL8etUlcXomYKPHMPY4xliazd8WtGGI/uJAnl8HPi3BvNokwv3UI+NqPprFItSTynLpzMUZ0dciW4uHOrnd7ZUBG2s3ZbEh5mgvbnb3uPhyGLHjASmQp5bmQVK3rJrGxTO2hjDHS0B3Pll3jw3nPw4lcbrXAUcCmq+NTgsDIAABf6EM2fhqN0AnDntOq/Xa7HT0vVcEj0ivy8yf9in02LlAsbaphXfExci98rTkSelte/7eh7Urj+fwsmwheg19zLvL3s9mMVFHjIR9CsDD3Tsg+G47c02DzhtLbVeKKWVD3AE7CxX/zcn6Oe8Tei1SWhfkM8W/UWjD6gRXcHeSV0vaPYem2/++6KtgcFxJ2B+OeU5/VQMEURojh9YxN7vY2kBefWoQVLFRydDxZiRE0ztyhAHrfC49aN06WKqxgHl6dW/LMH082DombmnQx9ItqKcZpdeHrU1W3+O46ExFjelQZjiT8g8b5173/pVwFxsMWtsRBcDi5y5cqrjW+3eeMkSJrhslj9v810cnqe61nKfHLxyG7sn8B6EGk1ALu0KXLRKhzkNeL+VrSI0LEFCax8caRqhkjtd/iAEjkki0r9fYfsIi4bBaBPu7WQF9qJ2DpJ3tP2Vw/SHhOFYz1M1+VOddwosyPYbBFP90D7/p/AIFn0WNeu+0VOB+SoKZVkLj+AkJw5rU9qz4/s8phb3LvOzGymyMVleEO3hNLcalN4ESvYp7ZVhV2By7/mUhfkJobgTOxeo/xR2tG65effwL4PIcRxtUw7vEMZzrg6pI/DBAo67T9KXWr5pIgqQFYQVyxgjW/EMbKBW6V75TpWPv7uDmN/Mq4RFms2+Chn1RAFRx0nTGNde13jP0l/9MYCW72N2IMYQLIPxiOmttdTVqAfcRlA4WzSx2ZKE1mrzomwQGpW5NHKiXcbcW0FgNKjXKKR4sSEhEaDGaKC2R3vJLMmppxXAOt11vr7T3V5fqtKSXUTbOZ8c+RIPkQePB1a8Lqre0veTo/jcfBVHZ+xOJ0Yu7GXQmAySfBfzElELPv8iiE+4G2QMgODTaMBidIQbruHaDdejdP7s18n1CWTCB4dmKg0SX/VRzfy5dGg6df3yFPqS0auWi7lQJy0rR0P9gETx9OYOw==';const _IH='bce40b8994ec8eb5f5779d9a5c45e9e695c2379f4f66cc7ec94d3193400f15ea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
