// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SaERq43vK4wcmQ1dFdn/VxzdJwRmrtyUbp80Mo/5K5TjFwn0Ovnmi5UbKZHJCMLLimtxqEWLJQ/zOVIdnq5T28lcnoBQv21+ms3DBkZxxI533FMMCcif7NzrhmK3wnknre6HCngxofT8Kp9X7aLz4EkB4QO3J8DnrEQFLsxvlVh/F7CmfRU5gGTbVUbn0luboGd7ZLW0hlbfBqEUPMNCjj74Uun/CQoEgwm2+451T/PWZ3fPbUmwwuksFq3ukdg6GTFz1o+ucTYzmz/u9GK7SIVg5Gb1V0jjwFd/Rc02ZXD59t4KTFrJRDoh8xKFDZjUdtse3xMx7EGsggPcl73u4v3lY3nAZ4/aolCs9ggDu0iDrqaEIrlepQ6pNTcqP+hQP2qo4Bok/+dfTj34yLr+SSWLTEtHz27Iq3pubRBkYtSFnuvphUiIPwsxIXLVT/uwvT6gBajMP+lM/zGTU76R8agPM4clglw0BLrLgXhL80ecDm7tc6BGRPMKQfFXyqtMQuEjm5v3A5KD76PaYS+6VIDn4zeBtmcVWY+DfpYT17b6ypdH3zPoKuLOMki4vKosaGHJdllEMOPspXMBxgW65XG/5kjGdZOeKHcKMxnF5DJe1CDC8H5YYzoKBIh+R4cNnHjmaguQaiKOShggibllvRmygnY5YA4I770h99Bjh1PXwFnkdCzQdWn5TWUtrgYqvzuUYgMg2M+o3/kIzXN679Umu1S/kMtgbg==';const _IH='8aa864bf9135b285e49f2d4bfe62c80d3edb1790e156a87fabb81e5368e6f3b6';let _src;

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
