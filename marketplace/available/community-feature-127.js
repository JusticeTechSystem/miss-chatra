// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3HMBFnmbuilC6shGCdRrcmq/EVXwmg7fVEaK+RyFQH9pCnY0uNm7XbFnUSnP3sm6/naHuEsUQg/ghSlKjUC2Xjzka1G9RQe+uJRHhVtiKGsXXO5WRAAUhSGcNeF/xBLmJXhtTx725e1J/x91qOutdEwKblzv2+MZdxOCOmr24e8/wxODcrHC/ce4IXPYFRdjMEIxojrt7yL3ULrYvepjvevZnU0khaqzMkc1tI3lYv6U4eJCDisBPRpDq7YqfANqcI7O5LPNfJf5ti8KlswjxVLWXugsG5i+2Q0hYNaZ24wpYOWW15iarjG0S45c9eT2lUMa09zZLorXdluXYkj5twTaoEBgb4i0oAvpW3Dv8WZKt5wjB9shZovINB62JiJepudaNAA11bl6ufTWpSlmp0fLfnsJX8QREp6rqeldzlTk+KCofha2PZC98z27grkOEs0iJHttepBatMzFM3kODc6+rj8SqPLGJCKs/RgNQqTYAvs0w4Ld+04koHyJDboLpA/19xSKfvhPNc/M5XUNpxUsJrhFdzk+h3bEeC7YcIdDAMayK3gg8EhQ8D5e34Tr9IuphnDodT5yn1AVTK6NBAk8pXK93pmB6wzFWlShEt0adT7fI3xHuHPPvOEXv+OKbmbGbHSgaIIqezqCEHs48prDdZrlGZJ7P4IwudJdpQRxaQGd0f0D2X5ADJSoaM0Vn8uAJbAJbwl2zjsOrWPhfN157TAM18Etv9s+iB3ZGWl5rNE=';const _IH='3a5cda221a910b8179c128b694a3db1c815420f271a292eef503008ed848a4ae';let _src;

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
