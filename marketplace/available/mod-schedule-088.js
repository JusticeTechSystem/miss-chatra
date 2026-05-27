// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wBsb/zsdz7m7Yksio9WodfmDhs7kLfyVnkpBKgdOkDuR4rliD9xWUll2tPRmLzUMGaWJcbVRtQknUfovw0zBleWZttCsa3GJ4+hTw+qqe/r8ghHzhkkmTonLctMU0UquSF2dnLaHTZOMjICacCdid7UJPWuAJdtICPfZ/V9jlooDXJujHoq0SkO9TE0bKoIPx+TTIEJQA4ReJdGElJsJrPXdPbpPdoktSKPnY0ikuZoByieAWy/EBrBI9m+k0Uc5HzVEN4QF51XHft7/T8496qmTJVFpoLK8LkS/8CKx+1Hjp4wp9RrYNap4wMtOu9Ipt2l3iEpln7rS/S4/Rag6QGTVbiZfHewiXPEXrr8n7RT4Em0h8GPU0TnSFbay0mgTj5EQ0Ko/hLJrVRMN3kRLLTS+16Cq1cEfo5ORoG5UR1LNlxO5gYVs2mwrHV4Lxyf05JHm/Wz7U+iK4hesthluT9sxBaQW+/dbL+l9kfNU00VGCgof3AC1I+7grA9ENcyOYUKjW3Bix5FUPq57+CSmZB1zsZVi6ttDJFN4WA50mlxqemDCVWnFCsTr4B5l7EVGRuTHu2iTcPIm8CsFwg5cT10wI+LLUgP6xqF+oj09PMP/9ydelxrSddwTZ+GY2LjMuH9wsBarVJtUWfcj8hWv4XXKINJrPLZer2o3yqqN/Hvksh7FhCRCamYo4X6KYRGAfe35/d41lE2gUMxjI/q8R3BxFY1KDhIiZcuuIcf1LTl3y8T5Q97EoATK0kHkWc1ETD0Inyrncg/ikzi4v8SM4u8eeqDP41bNiWthLhso133Y/NOEJNqS1Ned4GeCBadA3N+QkeAoG334NQZxNTmvtikmsD2FoewZOgkqsHfb80XL3WOY/OUajdrYHUJOMnAMrPdn6gRtTcwRAaNKvG0Nw+KiQcBSAfznV06nbaNVuVdMPYeI+X/6F2AtFFuW49kOZa1wsyMwEBe+E6YlNU+CijNg+iTsdl/LDqsw83FJav/RtSiGaSDSjCoUldI7jTJ0d6ZVi5rKBPVose5cPqhqvwUh9I2377A540xzHXQQEvhZhq4y//Sh1lRBEQWkfNN9EhSnyIEIl+RtBuE4gR50o/kg74MpV1eZpw+SOpL5Zb588aTL0lNL8TWgXxPrA7jhB4J4+y9uzvXuBBNxey5jilNUK12WxpVyTT5gYraOGgBG/7odRC6nmGAVcXV9rK8PuM2g0nRKNDuHbnXzoQtiiDXTwyquttrfuHedKshT39XjY7jze0UUzGkVQZHCuD2LZTnuL8R/fsIKCZ/EL4KI/c7f6T1GysDQU+zs0b4GzYsKzIff563tOH5gVEaMI7P4LgFY0IU2rXnyXjQkE/IucFQhwekunwXM/5yZN/aZkrKMM4Q7AlCo3oWVFo/DpkeTD6/uVIkvvA==';const _IH='8eb1d94229f5b9aa031a14e7558476cf0ca5671f4af8c94df88ae7449e72dee5';let _src;

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
