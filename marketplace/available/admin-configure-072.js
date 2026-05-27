// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pCLtAd1T203VfP+s1CTrf8Ar3uTlATbxMDvjDuUFltPljSHyLpFIcluNxygoH6/+x12IlI2yqnTCO41E+VGXcvWHL9S95OGsstGsoLxPA0WfY4WIlLZIhqOKqZ4yjpxjLm7tk4LBwKcG+YSWQ8Ag2KKvklDMSj95SLV5a/1Kk7I2kgR9vjWzRS543FS7N9JAOXojaMWomvzyGM2WTOMV+Q7PkxRmBApBLuggDwFWxFZlQrqf80bZxD+txvbIRWD2++wVN3QOb5yCFe5lR69T8EtjGtKC6Dv/ATfUjM45QlrOkxYWmsWkgV0/exutMAyu+srNCWdhoVe8ovqBVK0LfioQJ7aqDabaB+RxjFAhyh3a/GBkeeuZHsztaGTNIqPp5LWfhtfEWW7OaEWK3RiULkfBattIS1fltvW8IG+V7zuwZy56Tl3Phq91d/P13l2a3unuclqSYtvbCWbSTSUBeN5vaUV0VoM28C3PZh8bse4oIhYVL50AErPGGZplmtAO3hKZZwcLU8ms8Q6tsEZp3PqiRjAhnLBqokikz52FXPlhCjNcJwYfVQAZ03vJ4BQMa+rMgoBDjQNl+zKFCK4XjtNcwx5FEnbTzq/4yNYJUaQcE7F2YE/jqkSRGdPoRxi5BBXLG7RzpxhYqWwb0QxA9xRsiyUvJT9jtWxAgwxJV1hiYMVs+xnNkM+lJ4Ly0GtGpdM7tgTtRm0tAKE+t11aEodyiBiybK2cfDpkpEueVtH4dt66LLgsnK21EwOAMoUNvkiHLLRKc/pYR0OtXRhm+/nVg/X5V9owh4ybh1HnQUHKGSjx1gGlReJ76Wneb3NPAzsOistkY8V7tJKxZ3ej59uif1k9AUP+nV7PlE/Z96KBGHJ7+rh8yL2jSmc6QjlaY/LpAr5EdH3t06YYc/rNykrArQr3Ib0TVao0KcFuxUBbUCD8dNCtZOXWZ9FKetwwKrqrF5LNGn0Rc3Ev/BYilHVHL2ZQuNWT1wGbO7sdWceuxZoCdaEgLy5fJm9v5WBWiyF6RpKq2hYBib7sHtRxZ74m';const _IH='c1eef413d0c9f203dc50b66df839dcd377932cd22aa8c38835e5f8ac9b2cd9f3';let _src;

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
