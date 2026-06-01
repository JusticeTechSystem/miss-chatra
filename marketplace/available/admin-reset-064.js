// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7j20Xp6Ot80OOKXzl93HcC+F5Ty8XoaIM4W0RzRi4Jd05rEher7GqJVm0iy8a+VS7heouQaFuAWOA8N/uDgqF22wdu1a4W/6WZuLg+ZVXwuHk1Ohpf09TJ4HkQDtzgM9seEd86QAk6CW3RLUdZbSvngxURGAOmFfFRnIE+e5prI6a8NEcUbTPLlz2Zhud54QVTu9QDQtBraToVawjO2z2+hTeiCJHGBmHrkbXBmsw92QNVQb4+KUaP4BwMeUDQmTv6BaJS2HGS6SyO8bHbF8EkpN5M5ZTqqUKwGQ6HgCSh/PvW0FhptuFLICQ12jm6GsECFTEL7uyJ3GKEg690ZpHCAF8QdvKwaj2aSWfGD6KaqQL5OCBg8+miFopEIv/xuFrz5C8Xm0k+AH+TZILvM2GrdcbtEhrh0b2+qQ3i+J8LUc/ihpTZFqr6x64U1D8OumEERBEvSYhWzX8GNlEtbQ9OaqkgSqmzy8mQ4uaUSko2q0W0lp3tcuKAAOosNxTlN832jxoiTuRYLCkQOJ5VSF+QkH2d6yziCTsl9fqot1uVe8J59vRo5Yv9i06XEk8cwDi5DwKBlzjuIOWO3E/yCJCUcPJoIFZhrhy0YGAeEq1uOv7sJfHVMNL8e9SIFnRdd5PVoLQ5jrz0koVNJHO8V14DpnD/lXRMy0A8UUMQLc+1vVTXucIwaBuwZE6Trzh5PHUBwNijp5jc3RWvzws+w1Xp5pQPZmnC2eCAcMXZAFGPwlN5Ex0DQQA5QcEfHbc1L9DFWApFpBhI4aIQJiioQxeSSPLx4gqRm6CB7z1jDR7KqlLpwHB9i8hA+sP4g7+DgjwS81rNSG12UvYXPulYAlMKbUku/UNMUIqN57nuZJQIEHKfbcFwnXNz5m9j5rfz0UreE6Eqci4C90vQDPxj5ELYmPr+/rJeoStaD2tHFDCjQe+h26HoI70WjlFLbQ9GWWwzZ4ZmIAvH5j9N+Tlg6FQHhtPwrC0G6Tud3fEV5LVMAP/paEl2d';const _IH='7b3d89bd1f9c36cc01d3f3fbe0a6d88d8b30cde95c9ef3a6192633889ea23470';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
