// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YoIEY0DTHxJCXhBd2H4FdetqZeh/FtGwW0zwnFBt9HPAO7kgpi1q5H6vQhovj3XhzcX8c0qd1tu+ZKqm97kSQQOg+PIKgUEhgGhrIUEWsXx8/DY+EuFMqhUuLM1A52m4IbQEPJVXWYoH/XNVeqZycy9JNdHdh0E1p128c2ZY5HaKXSBfM44EKc15F1bigT2CmZs6jT1Z5uAV3gEzGg3NslVN+osgONNy4r8mUo7d6o44re9xapzOsu6tpaujeEQDiKo4Roo0+ZAuMG9vI8x0XPAg/3mkqoQadxIUf68ndEn9qK3R8HSaZ9lIuosK/lSiK5C0wzG/yVipBLzkN9XPA+bEUg9Tq69qGufiz9P+MAEHwTchyC0X4xqBRzm8vG87XIoOpc8/Ha2dvZC9SJwCxW2z5vc/3pd5LKsFROJhWz1Vl6fhVEwUD7B2vd7YbavA155uQMZLOJfSYctpQ/pJviAmRpzwWaaje0kjKRKOeCxRrAVx8Mnp9auQXKBitdv2fmFM3pRtA8bthQEXUAyHEEKhcxp9A02LluM/8XY/XNmIbipExog8GQya1142B13EkFUeODVd0Hk/vEYUXodMgLWpaDBzpISKgSxVkQSKY4NHbDotc75md7u1nGZ+8kMjuc9ER01o/eWZzsIh76xUo6QJZw13kn174uOHAYNf9L0ZT3KN9B3b+hktGMvKE6+TsQa2BkLJJ+WyyyHgxK6IRZGB5A/yAT+PfK/0r8JoxQKE0sg8LBt799nbNRU53MUGPFXdO/g8w9dSfXJqqxehRLhM/mjBqhf7POKBMhLOD0IJTE89L6eRTwr4VLXxR0JDkwljLcLR2is4F/wJa/YxRw0xtq10R/eXmcD7K4aC9aGdxOzFb1drYEXmqA9f/v7Ii54pIcqYw3S18ZSp56gECIatVnjJoTC8PstNoKul04ZzcvCRSRWZbYvtxpJIc9scjNdQa6GbcWO0IE0ePiuenwvQR2fqHvNL9MRPvHnfWt9s982EWn+4Mapa+e+gUNtHqvNUZ9JItxzY6UEvQWBf5L7cPmZMCK3XS48QV1cRAOscnowmS3UCiNg04itW31UZGBq0ur/+Zfe8WXsBdP7nsurmA2mz/bAbD3DrVo0i4n2EGWWuaNw82MmFqixykGWsQ/oRL2hHbK76N6kx9O7PptPgHU10MhRdtcrKicgZoqpprcPcp3yf2XQSetPS8gpZQNZNrbRGD+bJ8HQewL1nd5GciMo7W5FRpZLn42vbHYy7WtxsGlu/gb93LRxo/K6OE+JWIPh2X8R4ClLXoeV0u4b7Q80q0SYqH27bCi/Lxu6JU5uxpHmueW2Pr98iZK0KZNJVID5r/ftlcrs1xaeDnHVhJaFR3pvYrAy1ZbVSuO/z0mEJZmnNjZH2H3RxNNcWoBb4/WfrUfAGxPd6QLE4I8zg/Qj1bkkaqrBBToinJO3jEMkr2Vnk0S/tAeUlNDovVmHkootMYya2X2w19noy6zOhpOjP3WHY4ug0AIijTxcwsYD4Ndo346wnbMlWiRasSt4RO0Bpr0Mw291W8K6H32ZnREoCmp1/i6qFB7bTd3vHnl5yd1MrYTlPA+AuhlIjGnd0SCgxLxN0zMpc+UXWouE+zuQymmAB0IGLnaK8FL6YcdWkf/LgSUUkXWrNa9NhBnvKeJPbF5Ud8mHgdIMXA0tvLvwcnyaxTWjB4k5EU1bmBlqQpWOwFYO68dcoK9E2FwOxdC7/ohF0N0kZ1jJ2hnbsiaiwRLby0A==';const _IH='ca759f14d0d07a64187682f6a3da22a89073b8e2986bfade8ad63a621f1a0bd2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
