// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tZ3rqJ43Zuwtw8AZYrkbctElgaNgDQlQDLW+/NDzklR4EPeYdg5mj/cJJh2j1GylaXQ3OScc8HD9eVtk3gFw1SzTNkYntSl7w+CLEKP/SP5qjRw7vgOQzQdTlagQoWFr3RBLME3H2KcTJACswEjlh/f2RG3p6LgjbuxSMzFXx+/KcSFN7qj7ijcbdrEdDsHQKksbgXBGM0GMqy91OiDywnfRXpAfkBdpcRRQW7FBvIr1ICvmSVatwcBCDYiCcljsfGOrAShdSj8AVhttIOkX26ycJpcV4WF0EUGoksGf4IbgSmb8ZJl/Ts1yoznnFsNoCpsjD7KZVeTNsWeyP3CwNoIraaAI9W2xSDGqhx9UNr4txOVpA3j8QKTBZQr+B5xzsEgQ7BV8APGTOWmG0z/tNCon4WimyECxfTaftub+voYNsVrIPrpLK9wMOj0PVZ3eoLlXe1ysTdwrBcia3AdY8ExNHCr/P5dQbKwlmWRQv26e5npsPN4TCJZTuNG94NbXZsFXWvQXCAWWqU+J5DliXZY1UnRWJKM2Cdjma0XRee56F1v2bNL6yN2wseFmgsSGcNQvvhd2tLudDNJeuIaWFt01nCXxWQnW/0q2TmnDipLzOmUsskxFkgy+XiuvkPBxd2FuduLoG1Pk/LiM3WhZ8cJdKppATReiniqZmwMxmifBx9K9Be7Dl+r6zdqMPH3DL2Gobxf4mYU6MA7Wz9JIDxPJ6RLPp/K7f9Z9J2LwxAvdIeIMakfbKjnzeiSgnhXHp+zSiLZBgnvPr+hpzjZgBzo59E76udtDfFTOlnhqhSHgiVs+bscxlVAL0UjmKSr8GzbaUaHskeqXthXzVzncfK6UA8QrwDTNqgdHQRpjbl2/Z5jgFZjBe9boQMFIrYrnI8Yrc8jbNESfdAdopQ46V+QskAC++5dlKIv6ekREOon4w/OrpR1CPaKGzdAvDwm1zru4UyakgKos+xUSRRwZYeNUZKVXMfq6Za5UOZCX8Rpi5lVc602E8GzS7Vn5/ish';const _IH='13da83e80058be9f5b1aad4c44ac33c5bf2ff07113f317bbd9248941850ccef2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
