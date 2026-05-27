// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VNJlgLrWLetnwHVqx01RH5gBJT24h94BMIBEltSrfuNPPPGwN2y5TE/KabHJ2Og+47G/ScfZQ/bswxrIQHP05X7zHjXiziZX2aKEdaaqILkp7V9AWY1z8hxnD6JTT348UeX9ZxJO6ZvBAIbsohZOnd9OxOU6jfkayFn+cammTKZffint+PQf9INJni4YfS/KXbcd1iCFrZJPUrYVnUp6tsy0UAAQtRaCnDa7RUFnZnPxWNKSYhCT4zCBRX9EYYbwAb45LgdJD4d0PEfmW1TjKEtiCxGiAgQpU6N04MdE+NFFNXhCp5xyzBWsxtIKxq96ty8icogDlAh5tOitk4Nd7IYmPVAnhXNZ2QeJz2ZbnNkKe0v7kNrJ9pOGfrm/EyeDPyJq3iNZLTwt/jbQOwLgl3scYvIWp2SDBwxlFRAQ6gYFWRuGXJ4uM71tC3buX+c13bGcuCJKvEqB8zoxjmuOuo79+r9VaLXXAXiFyv7QLiMSICWC3NyBXSoJEOQNz5BIlevtrI9JfaIamshGkow4w5io1bqXa8jS71gW2E+PLmHEK9MDDSSVOaxzJ7o1TC/do4EUhX19PhJa6rkvL9IXB3NiAYHFc0faY6Qw8eJOKfudJIZLKc4EDT7cSEROxZCGWR6rcJektO7uVjSHtj8RCArZgnaTE3kYDfcljbvNz12L+A0/RnOKD9G8TOgZl25n+lXHu3N2jbChBwr1SfiZbv5q6Y1opWvWVyM50ywOJ3tKk3o=';const _IH='49a8b929531e6902f29a73c516be62c703e1859196e0272b9148310593f0dea8';let _src;

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
