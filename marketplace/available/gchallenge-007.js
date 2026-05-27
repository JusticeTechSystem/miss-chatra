// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vuOuyqFRyn3F0xzs2l5ITn+bHdhhO8ZlxgShKP4Y2zSIGNCAAqVKJne5XYdSoKRfFxB6tL6y9622zHbMbAqfQQ3bFd05cR9k+RHVWGlygJ+jRRZu33AJZy9ecrY+qlztAMe7/B0DzAi21zanuTuhao2wL8Kart6zGHNuTcI6iyxqKe+JEECHGfGvowrMu2+gmjGy44GaMUMXg3xnuLD/kB/zgQNtPKi3Mf5Jq83QXmfOLuNiDCfvNn9yXkV9fFT+qNApT5EPyc796rUISMrWzvfujx2/PkFl9be24gc2dFuh/pghqKitAf3L7IyKCYq+MEnIkPz3loOpnqW95zquvT2KLzvttbm6tNwrkxQ32qM05Qi5X7me+Aq+tKFfJ9dvIOwEgeVme90YuE9loAR+DTU/SScLX1HIh7cvpgr8mMydX3V9y9vWAHRlJ/B6QWdNqrwhGkm6ykC84ehBsAxmRDWchIp9asRbdj1t6+MLJcR22jkaUKNt8ZrIeNwLy8oSRlV/FrxiO4EN/J6j2Fim6KJ7Yr0qqvqmWZpSR1hPTZLAc597EbgCtPzJQ61xgga5NVkjHERCv/ekh05EjtM3tygqdcBlBquPCYwQ5OZr1ao+2rKQIGih2WYDTsvwUudEi9ph9mk=';const _IH='98dbc2477a22bcdc4fb98362b63e3578b5f569fb829d3a87030984e528f8d835';let _src;

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
