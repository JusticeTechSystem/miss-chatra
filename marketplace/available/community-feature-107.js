// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GQhVj1hgyieAjaGH7k/OJ6RBG+fqY5zgt290PtRyth1tKSWBAOBgRElXrPz16WQBre74FiEvcVOvfGah4CqnqMMBfW375o4uBr8zBe2bcGIEdrK51oodrKM4C+0iWUdczA5LxBVz8afl4NU2XUp5YomnLTZSTL3RimA/NfG1hKoMm5E4c9CX6BaYpeFzNKlxqgp57bv0cCURYMKMrRpKSpxY6qOgtxkP9HpvePWYYOo1w1AaxIBkdgEG1VCE7Raqk+ZrmlHkpgFV8d483Fvs9vtlpJb/258mPe4E04QbtC8NCglpvJfkmen8uDtC5z0Xgn7LYXpD80iGaznL+Cm6k7bKgI1/ThFgRwWC/LH+t6HI7rwKDx6hfg9liMoM3jm+bDocKQf9BQ5m4Y4t7+4S1hHcvwM1w3mFdG4nGsFnJxqSyZLuGlpeU9yFkh47Ebz67YmyChUCA37FDIvb20bl/7GSfHKu0XpgWPtlCK6/vSx3Ac5fkhqEyg8/qzqECuGYCJpC7Z08sGNRjKUu9Mm7nBnkzdETN9+Y9pDNOFx9F2zoBEml8+nPsped0Ey3c6XbRjleWdvxJhea+xQak2rO60YJ1lBAJvMbsRiBBvEUVNgvaSbJ+2JOrYUE6MsBcf2OBDPFqywcz6j7MV8fO0M7imZCyKNW3QGaHH5Qe8YheOFEJYjLwBVqJM+VKahD9POXSXcMGiPzwHYtLxJeXw7dISIoVT99dB+o3f/5j1msIKrK4m0=';const _IH='39e142926018f7561c6712f6c9181f8150e509dda232129e707b3a5739ab71f0';let _src;

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
