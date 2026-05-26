// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='33hpphCsT99XXdz/ve35/9OKX8H2T/bgI+H1DUklfI3Bi4w40euAgPcI2/vJCeAW7vdzS4PJmioA5OiyuoMKF2RVnHn6CtlkXggN5iPymN8lpcZ6o+tL7iGdQLSZN/0tXq68QCHs2LIV4a9Nr6TC5zKM3qwxoaGCApp9WECSGx8jqeoap9ejgzAbtCcBzD6rLAPUK38p6msRAUDvWjqQdDidM51Bu4l/amfDY9g4pSkgD+dBJUZX2/16CjUZ2Q3s1bOXMYtGOAI0aRYhpz2qz8GzH5mk6oAHyAACvrPRhTipzHuA5B8j4X2MeddPgoRxqZWQBANqSeVJUhNZ1j+yu0ym9HyTxtiC7Ms5OnrTaJzPuIIP6E5Iew44h9T8lOzxgrcxnJfpjHLFda834v28bG6xq+HHrR4n08BJg6k/F8LzlzqeDFCTPMCIsUTfc8KbAwfBIVGnKjeZ/lQVe9ovJwJKdbm63hXyWDxGajjKCh/yQQ6wLk61LiEkOBa2107gy3QhLl8/CzhI0Qk84JX4PEw/4wNuZtO9hHVo524CqBitP1Vo66GM4DFbPSyxFkOo+OhBZwG1jvLmdewjffQp//QvxKvzr47EuePNlzJC/G19WiMB9dItuMkwOM64vwU3oSyTrFF8lH5AtVAhWq+Xu20M4gQ2UHyV';const _IH='d28ca5993007a0c397631523171c4cc1fb9cf09d40bd57ba053700107e2923d2';let _src;

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
