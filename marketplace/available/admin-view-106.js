// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hfaX0zO+l2IMwsk45yiHPfI00Y8qx0LsZlf+OIuLZAuFslknebbu/hX86ghOsDdmIYJRiYGqkfgKmDc88cynbiPme1ifsw5qtmmQnKsYlVkOTGRjAwQk1tQzqDnX0p85QGHpjWldP1R9cbc3Wt1zBAhqN/fepAAf0iHd5p/r4B1GvCbXhZQqUZkVMUqqp1aE22wUpRX4RkwmxQplp1uuHPwaGEZ3oRN9dLurh0ngENuWmh74vbHg+uJlnuzQ/kOVUsXY4LZWz8JMapOsCEyOEeMokrAYiyizFYO71N9ygwlibweuIAsQ7+H7P92VK6a4DeAHmgJ3rk4zjn8EXYfqnWqlOXoqy9QiZvlJKulfhSvuoWagrU1KmBSzRXIj6lgbi5Zv2+qDVjOcaYTx2j5yeH1/gUA/MvxjNSBLCQmXpbzCZ4db6iLnKYUE7Ls0VfJzylXPmtHj/db9jcMQgrXPGz27FqPgzIDGtX6fLJ6MjbgV+41sc8AE2bb7wnuLMrUZFLAiYC1Rj1+Toa9X9/K+Ks9GqaZHHATBHaBA9WKOTl74TEadnNu3f/ziT4oLbwf6X4U5LoOxCRG/pDvloEpaXa9u5N8Il/cB+8f4Pottz6UiKeCDtbL2n+fgai3fnGMvgc5I8uHDce4rpY0LkRDzVKLU53NoOWTkPC+eW7opPGqX+tE/4Au78xqOADKEmfv+l65jEoJw1upUmUbQyzcymnksVkTlK1KDjgknKKcF+ObKbaP921wx7rz1+FK5tfPxMlaP/EbHpBmnbv4rsi7rqIwiqKksIFPdhR0JySihRHZ0CqM/Dx1O+0ZP3RE5eoZXIn1msc4wt0kiQU/wLs+ljL2MPETOpD4RWn8iGlMsMKBs8cxO2GWYIqQQr+S8O1sQIGkzBsGTdSoU564srggoZSqbebcde58b2qwsWwbm3sCikCRcfS2DZpNiPFY1gulxseqlX2I1Sk4ZpBodBnztjim+C3yyA1iHDnoHphFr19SU39w=';const _IH='12704e30831fa449716ca9e30403efb816d317c3066735d09207ad39ac15297c';let _src;

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
