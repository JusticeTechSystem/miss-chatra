// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wt5O7TY+ugeU+X1mpfw9KS7jBzsiPanQtwW9jcDJdCFrc2ME0FHaHpMGfB9RAwdxeDZ0cN+crv3JBEz+LRrgTXDOxKosMRZfV+W4SPOOj0BxIYtFKa1+v7QF1fT9iH9Zd+/ufeyyKl6nU+0rOH08RFpJJJ17vtYTHiuqd1No2qF77rJfW/IDIcg8aoC6ShJ/+CUoM87a2eBXlqBH9dgbpRNnzb9dpESxe//tBQeTmatrbE8NHJLGB6nvmbprLD6EtMp8OQD1i7wE8pxZwFg4XvJQGqkPBlDx2Yt7yYn61rvGUtLbLdPilRegMbjpUngT6zRn65FXT1ofvpbnchg9c1Ej5z4qmMFMtKEz/ezXLl5qbV+1PYnn+004FrbjsBerBwOH/G+JD9kABeoRLrA6ZXsrV+4Jpj2JOm+mIGM6iicrxQ+uqjyQxuGwc3Df7PI8sDzB04HDwJjKT7TPLN8yIu4VXVa6oNRSPsiGooAUDdkAuZ3Blc+rmhrz8xBzVfBTLkGBB12YmBTLR7O/nS//vnbYEkDPs02uE3Ajgu53sUUE8vKS5Ubwv7vz8DZtIrJjAscrOku4Tr2aU1/a1OM53VTE86EIlVty+uciY+PgZt10QO+Rb5Uy4TG4NMVIPcGXgavwKwCmJRXClD1c0vdeju3CpnV2NgP5yVCEU3VbnnSP00ycCKxPsGWzOXLU3guk+LETwE5j9B9uaFVjwGiLivbJr+eg7XjBpVCoMFSTZB8Cr5q18ng=';const _IH='541445cdca396529b09e32ec666935b991aa588c4032bb1fff10b8a0f97e6829';let _src;

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
