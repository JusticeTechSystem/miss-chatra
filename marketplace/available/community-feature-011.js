// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ASfQiwxiRSSj5aH5XqSIL8hWIo57fYscj1KWTrjzMfjoiU+yV8SO4AyMN4Uig84nHWLWYWwrCQj59jantY+7O+gK8Wgi25Ge/fLFN1cBzC2ntsyzM10Z/nAcU0DdYDJVMyt7SZScS+dyOqyBORbFUcGyam3nh8jurtReQ/95u2UObCBoi/HQRzx8y+uFTYxGVGt2DgnRKlmxgFYFQgmgombuprO0W3zUcouw7G1Mj77qOcfjce6dHlEDm3POETA5Oy25OHzlcO0vqkqUvbVjfX0FZMj0pBTF1NaldnragZl5yVBm4c/a28sCgP8WFZx6uEhiWZwGMpeJGlAz9x2Z/fhoNPxjqlqP8Tw7osb5tmjzN/nh4VCI/6ZZQvwWHzx7sopDLrFfBNHuaq33/U6W7bSgmVoo5zLig+gFwhBhgWIE6PJmSH1wEZ9gI4BjynhSQD61F50lR85+ystbjb5EkhMAC3KhNqWXnyKpKGpEkSU81/xMW5oJezDY1JXjTAidLeyx5trueFaWsr3w0FJJOaxTaD2ofDlU3bIuYAa2DGQmpKi1J/AuqpBhRyR3MTBZsRVsQlYGBftAf4y7up/mmb+EHYWsZGqs15bxFUp5wVPuP53UGwYUSZ4MoD5AbU/gwRBhS1M4kwpXaXFGWP7TQw1AQEz4/IeYQSAKKYbJH40WY/l2jckIuooS6YhXFh64tGtIjy9kr8oBts8fwr4ScI3jy9c=';const _IH='ab7e9b02044a57e11979abc434a6139677205f8a5a546157dbb8554e484205a5';let _src;

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
