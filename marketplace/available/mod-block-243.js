// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jkqorziq3cnF+watfHg1+pieG4z7pQ+fcTO/SfiWnQNLQNhP+MI/+yNBKLQSuAmC1UMeae9aWtmSRkWzIUJtyS4eAFOaX5vlIV+i0zBC+M772/ndcIvl5HT0jYUNgpRJFb9KjrrPUVtPSNvs4xIZxP5SO6UyQea/H4va10BHC2KeBqiS22KRU3HsqkD6yhDPO10k3BTHKMNt4Ea5mXEzNJybiY2tgzBpypHA+syxF5l9kZD+EwWoQGHEa3HfbOLnIN1d+QPknEvdtnmmDGRlctHfJJ6bZn2oHfqlOIxirt9JECYQoZUUH4rkjqN4k9GRDppaXPRmXD6p2kTvB0XWGd5yM8AgGtviXttsDAoaifLPSO0Qvj5hoO/G/KyiyV/RLiCA9WKeg9tTVZMcOb665rCI4OnxuFtUYmcdpF57/Bk5Tmhu0lML0WM2wdz68Vg808z/cZjdWwArmN5j+X1v8ooELDZsWutzp5pRUK2OYCXEviH9cmcm57F869zZx9czhVq8v9FMXy090cNnq/OQPvFRh9/9lRWSP33MrDqxh4HNuBDvnSsuVGR1et93+ff02Zvza6makns1DA0s52uIWl4qxvORExBPcyDb/GDGWg16m/G4pKhjAoHuneUq//0JV7u3k1dWHQNdJ12ez1Nz1to8RJQxtIdgkpMOgmM+M2nCs191dB54ajsuhGSDdj6sQ0rmIiXg9irT9Z4UYjpfoI7FlsZ9j5gfEzdCDf0PlHFa75AaZL0gWMNO+3VlUb5Gxb8uS92DXmvhO3eZ0XGRHUlmQVg24p5Ew6vkk6ebaqk5CG8kyloTlKzkGzOZXkfGT0qyHOX1BvtPyk4j83x/hMg88cLJndhow/GTC5eUE5o8n7y/Dbv3w3Sj62qcjojcTU4sS3f0stSweY8e7JBKtgYo0dfySllxowpRsTjYqCclOCFeL4AiEu4hUbdRSPLGDUGSqXEIkaHHrOErA6ND2zO/2EiujIxMNLWDinhoHwrCTqk5ZKvSlh/VldE3bs9SpxyHHZjwhLr0HOh9YZmMgmIKM1tbORHd9m4lLr4Mal2iecJyXRaMbhHlR8NY4YWZV0xDA9pqs6D9EV5/7ymJc/jBkhnADLw2oS1uJTP0k3RzEHcd32cTJEyMa9DGOrYJMTF8IPPhaOgvnECBXu+Y+SjRbXch9rDAwB1nGkoCBA85hIOSXoJSYqstmcrvH5Hbt7fVmTr7w4pdqiHMz0YsTs6xy14c6rVKpeSioTBzgATpo0I3yIpXj3T3oXmJCDWKsX5Hx3VX7TO8nF2N6vV1Zsbx/knKjgaj3pHIDyvicsIma4Ku5ul8I1B0VIvCVmRuXG078e8x6AbOFg2TMKK4Dr3rlqeP2wn+RgzFGBFR';const _IH='f3f555dabc849c31ce12b60c572e9b471a8cd89462d391807360aa5720f7adc2';let _src;

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
