// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3UR5S6MoIaVGCeNXhVy5afve9gE/SSA4oyGMtZ7QOd/mf5nbSmw7lilZaZd4uodrGlMBTKsU/nBVEzf+E72wq0yfReq1sjuo3AGlXq0gvahIFXIZgW0N9AAVXSSXVDOqE33LU69VSI+kDH4nDOJ6BLNyjls8YANu4ttAMFdqTpER7wVoIOQAZ9qTvIXiSCa4uwMZOKp1Hb7JsRwrOXxNUCeC9DRC83W9jzBIIMmyitYH3hlbmGraKL5I7AKE54n2TnN+ODqYtbhTfNnl5/sbHUNlH01mNX6X+geLUEMsc3u5N0vrG39N6idC04dJt1krFgTwNGywpU27RhOl/V3cwwr+7GOUrDG+8WSgsLiY9givQcUka4LqXbTn95pIbwx9fx7dawExeMj4wf3Hid9cYywtzz/LZbeboTZS7AeOwmXdq8kmNsCj5xscOXBEmBhdYnHWRXf6TL5Fxd1V/eiLIhxI2z5sUBrRLMYCpUQWZC33X9zgBkBpOVMwxKVubgs8Rblp/AwBuy5i3B/ZsE5pKD8+/h6p7DWL4UcU5AboLYScKtKftjWo6qIcjCuPbh5s+lQ/IdJ8NQWaA+rgIbnD1N4TLv9S4a8V/6FidzNL8wxacr07f3uM4QKsqto6EH8Vv6QcgkdMhFo2Nk7P/dc/T9OUtVFrbs6dw6Kxdx6d+mz/ruz3/bnXXHmg1/vfzMfQEe5xTmX4jKltWH1vjLJSjrOsEP2wQLVV5iktOk34Fs8ZdlhKCce4D8NQgbUT0wvK1d/FiPlotXebaYvW6d8EDcmPFWtVND25YTjDNXdFuoOCYbPlF2fXBM5zlD/7DbUTi3OFrMk5slBFB8XQ3+TgFMFUw+SpxM3hdLcFhc3INpAA6v4tH5OgcocDpWQXXmmWx50le3wBYPoTU24JNjhb1LEr/lSwCrqRPX+8hQt3lz1BkhnBcgWhzO72rQmq7FqKDIJaim9ePc7nrVlDY4/DoMxNgvBjteppFm0FC7mck/qLc8WXE9e3or3szZItBn6NHNFFKAe3FMtJFb/ejxi+ZIT/FrX9TX0/edbBcL9dlUMQMMmz+MsXNJ3VFLL/GEROF4cX5iL9+/NRnlC8aYDsj/7P8O8Zft5ItbeMhOg2O3yZAL+H26nRDOlXdJ6pK478uP46OShA0SgtwJ2GCZVLRjQbTN3Vnx6Yyox8DGlXfRG4JzWaLQlm9mJ9ZBwls3mpDN3LWLJcseMKp0szXznZe8SzalLIL8L73kXpZ9A1SlJrHHdGlHIAjI0nurDKt6jKiQrDRUyjjtOAhjB7/+zRZgc2qbDP2RZeZfMXxe5QA42v2JwSRI4jrRsoqBntd3bx52KNQhTdmINAyYM78JUZO1JFtQHBsso5TlIyEHhR';const _IH='697aeb2a987f9bfb054c1d75150d9d06cb6dc76db41152503b58dacecae72d1a';let _src;

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
