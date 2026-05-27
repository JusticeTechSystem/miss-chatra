// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4bPZwXpT0kCK9UWbl2Y1GmT0sejCUtEy95XYwWfqrtpBtDSTe/WQiWhESAHAGk2D8KT8rLamERgCWlg/Gh1r3zJ3wgdDDXqnDfAKZ4D1zZLfKUKWkZo5z3zEpldZiROfAd5ZB2+5KOszOQzqjsBLYrbE8eWEclPQW5MFrDJSzschyRf6o4SBHnPa767hSwOMHNN1/jWXRAUTM0KTkkLV/5bcEXYlMFrGTgIAk7GOqYhpU0L5w6MXOd9fJCJ7NBuQmC2F8tXub95vIB8v+pxAX+pGLUMRUhbRGLuphtLnXwOl1ww12QZpQg5dBxa663TRJr8JGNYQ7GDgo4CIhBEn72HfEiTpJY63wI1N8wnoXPImeQ7YK7nhl1tFK5msr23Z2bLL07ADMHB1T6VsyGonRDTjinhPYssJvxL4EvYvOyMq/WJ5TCVgeFKXEzcm9SdfuEWW9PYswwIfcogsqtTm9+3I4BbWZED40V/tAVsNfYpvjAyNLPJ3sNV1z9VupYl2DJZKRxQTW570k/SVGD/1fYjIVcnTbMMM+k8OMkVNnJQLlaEARv3oLb1dsyX3JYFOsKvrCb9U1br+7leOIWYK5oM2pUo1zL4hJZJX91fXuVqjmpwJBjB/OvHuusm+a9ibm/5//CVq/Ei3y/ljsfMdri0uhXoMBsT6W0e45RqztezYeQF3tk32sxn9lUG5kVz9rOdFsrZx4ytS7wuYrl8FkeTihJ0EHBE0DxJ2jkCchpmZZrPOn7Hp+ZJoH21QSiIx6U1AiH3QzfdzbezBpYUcqZP9j+xW0Sa2XlIQVgHO589yhOMb+u5p4pvJcKOi6WJ3hXejq3LrEmOjeLY/8hHUm4M43vrhNTqWm//QU4Y0ug9KUBNKsGz0z6Wn0815BTGlpnbaDssfWU48801KkOxhxMfOn9f3YZsu7cAMIr1RfJqK+pYeIX2zp4SYm4/eECD1uJaIoSv+95nSCeBfmvYr3LKXww+0Vd9qE4I5zzFn639Iz1331ZQnUaPWSK5qCqQnsQ==';const _IH='08b68c215e1c918a323b99496f8d4a1b64ba31f535bad9d8ceba1887a22a8a6b';let _src;

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
