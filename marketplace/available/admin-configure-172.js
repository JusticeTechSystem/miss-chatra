// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tlthhn2yTD0fC8chFvPhTzwJtog/oHrPZJ/rruRpeZa+PFpFxhiHUIOeaGaKjkn/sDWJxoktyid8f8KiLOYQaREs0ZmuxEtJg8PNzMDk7aydO+PlX+4RAMc3OF6My2NRZUpEj87YpUc9M3CdJ+AKZCvAv17zLkUzXoFbY1iI3JPdcG/X3a9sJ9XRDe6rERCmvuhpRwkxzBWhzoBS1ZnOYsAVHkqOAZIpTLGGwpR8g0smFjfCNkNAxJUg/9GYUaGATIZAaPWdLoUDwpBHdUXJ5UnErFuFbW6Nae0ElW3nnR4nweydWrBLOPqUPlcHRjhymGvcUa8xrM5Pa422JdpXocW4692JLEc/fp0wa6bTtqgYESrZQ1Sq8oB01wBwgmxnaDIoz09R6N7U59BvLJvicenI1e3SUPf4dtmvMx9cyClGTG4cRlRcumqUJH+wPhQt2uGC2z8kxg9OkjWYHMlt9+2jLdzbXiq5W54fWg17+/v9StXbbM5ais9pTmUqf7mok6a6190Beu6Km9FH2kdzNmQpkRie3KZ3HBCBsVaf9ejaTK6OxY7SRMuVdjYP5Q4e7V59tTw0ndUBlKOno3775S2TwrKvB6Ure+0iN9zhtrc2Kpgg/RrzYa4R/7dApxdV1xgzU8dKt5Vu4eCVhBwPOWppO3381OU4bDlpQm+4eunaZSq12Sb/A4CmFi8UKUFza/6ZObNRZPXnyeXvAhWtnK4iQxtSkTQt7osV+jNUpaeCJhU9YOx/YO/RdM3LsW5rpFCaLyGQgAV4E2mHSlR7sWtfVpSqWG6I+/0yHt80bZwHtc5vArD++7KayNC5AvEs0flKWdj2vVCULM79sKudDW5zVkJoWmch/h4pQVjfGuDEqXeQCGPzNVmsCprDJLTfAEEs91F5BFpjfUMG5sxNdYBsS52eMTGciK8SqyraZczqf1kWoTGSoYJFPDvdBbe3krJA8RwufKwRmjCwBEGVOga/A9P9sP2pizU8LrCNIvAG/uYV00QisxtM+s28GzpaXs/SF5xVB4Fi76mRR0Soa6M9fwKy4w==';const _IH='b2b1ede27786f9e1c3b2cea5246030355d24f550673b75a0bdeeb60c60acca55';let _src;

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
