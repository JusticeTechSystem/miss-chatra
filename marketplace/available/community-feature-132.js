// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8iW9P/NxLXExKC6TZ3cK7d/oliOlGAs4Y3kK8FEwN4wiqEqNcRoe1tQAS4K2SAN4iOdSBjmfJXQ7IQaJue7aiEyEA6IeOXiDVj+TvuDvolb3BgUxlgwpYZ1vmVfL9tE+CMbjugLCmkj1wKOxx1kkTIOGAdYPRU8d9aJ2KUl7ACg+yko6int1lsIqYE5HnY1lTfmRCS3LS0/GrHOYhgMhuk8m7ZhcxhpHm5Sl38isRUqGox9wJyStZCzE6/bGCZbhdyCymXaPFmtSsuGk4/wzGxDDdI9rPaFq4oXDjeYrmHgG09Kl0h9VdiggjCSNCiyFiJFzJFiGQCZ8wbr0avRhGS5PBhEIis09aaWDRbABU3L7pwDc5RB3U4F5LzixGqfj/Y5AZSj3IlIfR5vH/AexJ7DSMisn8tRWPqwWFETHp9vwx9YnMKh54+pyBgsWOTAYLMY50FMERD/VkRewf5ifo0AzuuGJAWh/O3l95N6aly5URaJiAznuua4VgSTMpbi3m/qh2tCMc8owqHwUytDw2QFVTOQT6/aVX9wUwIWgj2xSwxHRSQZcb/uaSOEV313h86a54biXqOc2lSdXo2HfoPBjBLl+omUMWHt4DK4ETm4HBs/e0c56n5QyGf3UbUWL0LolA8IB2EewN46Y/VfH/HBh/cUdRZWmD+j9ZUrv029Hwt04/96aSj+th3mAd3IsMzJxjA/mUYYxFCd3iv0RZnvO5lfYJCBvaGqLyPlMlNLvQaE=';const _IH='6c0faa9af6b69fb86f46708ee400ca633dbb0bd256acad68cef505bbdaa2f3bb';let _src;

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
