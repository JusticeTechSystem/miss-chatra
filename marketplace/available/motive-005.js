// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NkNTClpChk0lFyQBCyT1yHiN7LUXivT+Vj2FIOwGfwMWis3lmZrcww1LKryJ+Ma3SuCo0AERcba8WdivHHn7yL5ofgiFudDvIbwKTFM5rqSCDZQCoj2H66jm7aaJ3gfsg4VitcnjXjKiq/d+LLDG6vQIuSL/DdfBnmP/3BxMe7imk9UtVN92L49f6K8dD1HCZOcXvYvNC0fYI3zYlkd9ZdCCMle7xrXHAQgT+vM2OtA305nBHsXItbAKyO3qN9mzQVrgmvUeHSgGNRb0g4DSxpnXDAsZdrlG/RKj1rTXXdik3OfZtRDTweFHKKHGW3LEmYQ33d03UFOW/KRCgOS0Lks8tfttyXYZJAcTa+pfge0o6QX0MhIkAAws6+kaoyzGbVSpESV9OgHKEEnMXyV9iMJ45uwa8Y/q/C5Q5Li4g+VLxjKm/WS2TrFLqTAVTDDDu4D8ZkIrZjl6SM0h+O1TqYkLmirY0tZNVIFthLqP9Rj48R9mjI1j48NnDO8jA/iIfUl7FiQXRAK9Rv/qpkhmH0T8FFxyhmy9GhajXAG4m9Yl2WFuXM9+ho4PifIRKWpJalXc2wV5LMMMSciJtDqqGMYrg1N1q1fc2ZKXwnfIJJNC0u5zUG6o1CHmAZaraJJeyhkfj0Ll1iO/TDH6FhWtM2BF86RqNV2NlA3kHKLSohGhvfxtK69i8ZHATt9aNiDZbneiK94mo4+fMtUTmHo+pRXIfEpFEQ0sYKEXuSwZ1TQmKuSJtawVnEPLAWcI7IurT+ejdce6dHrT64RWBthW9kQPR7MroY+jawm8PqdtdqSYNcOd+wuDcZ8SMlrHUcOKaz+KFBLzB8baijCw87MVGMM9GhDJJR7Z01IcxpdZlbe5uUs/Q7l0ud/M7lDkZXW9e5AvlWjhg8rELZ30FykUiUFLL6h8k2f3jSfkXzV8IW1A4NC5ajt0QiNqbQjFavgJW/LB22a0Ku96liBh7uJy4CxGdTdis4qfhA/0Tc1RW0mStmDHtWYvq32n2RC/OQX2tQljk8yZ7UzSTxiuymA=';const _IH='e0dab5e12e1f4b6a77dd81cab6a90a4fc9598d2bccefeec73acb2fa2a8a9eba3';let _src;

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
