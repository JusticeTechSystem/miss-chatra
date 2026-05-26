// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GAE5NlhbldbCkJlM4x6IVJKU8+OH6h9OcQyvBI3CSznrGZ0R1cTFpCAgo7528I4TJ9Rueg0g2AN4eATGw72U3DVz3Rbz3F6OOS2YP3n+eSkZmDvqNCHBiiHxvDofU1bSi+pOVHUgC9qqkQlZKry16eN4W5MeRCxT/I3h01WGuGNXcX+0G2BJCJsMRgrL+X+CCQEqCiB1QItO+XUPZ+pMsS1OjUYjALOJFCox9T4WEPP9f/IKJoCF2eRZjaLcPBMQkXEjdJ2fPiOJpFn2tb/HvE6Vd9tQkNBJ2OqDSC6xtwH+RCl3cC2Z5QkPHXcBJqWoR2iUGKxuEtU26ba3uRpmlRqPV9iRmhRzx+SY+HFPKh6Ksew7gvvDgyjf6k4g4VicyToUh24QmnSw6Sf5SJ4/VGadoFUKe/rDwHt1Eg2f0Is+Ygtzy8EofGiqyHuT7X/vL+xF92AF3FtjokdtNtMmZce4ujadcTHRfr+bu00FB3j9NPFvBf68FHdW+Mwndz2uNGnbn51mij+L8xeOuCPu4q3EnGeLwkC6sbREzSWEnSMC1zWiD+5rWtLe57qsRN6O89y1jM9wYTtdDQSgNefH6E5SKiWUZabvaRTUfdW0H23Bu4qoE0b7/ln+FFHsxoPmGIUmLCAVetYOr4q5gvXmH0jP1kDoAQigzWc1PoyL3NS6';const _IH='216fdadf6a4a6d75ae3a1df0ad424b632f8ccb6a39946b66f40586b548077177';let _src;

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
