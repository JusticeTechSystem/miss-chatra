// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XHfZXqP/4UAhtrQEG8Rpg12cG2i+WxNJ58mJpriaIfZHRoKhvb5rg2ra9XGBrEsvdw67u4UIxZaY09g/Yk90Xk8Rn0QtZuH9t6qQbeBMC8TGcAXTxAWNSWpNxbL4IKBahi4AIu/Pmoz230bjMArI5R88BKC6rzefM2VDXPrVb5FSAvJhOGoiiztm1QL/fnUzrLq1B8QOxGnszwTIi208Hc8pfrpHIprqpiqCAdy06GMBaFx9WNM8/gNnZJ4gxY3jaKt01N/FehwSOs8L1qxYmDD2MEQqOObHacf6o7kzgpYs/B1v1I+JLjPr16o7i2kY4JBbxQFkfdL+6AN4uXqVh3O2gxhIGg7dlCSqZ2ShbQQJ+tN7ZqB5RsaV9y/DN62qBAd8cV4EokQ2OB1fVyErh8fLhQTOKG7kboJyq7qgrj2RGmHDtUQK/jXgN8sbSO+6rSEclWUqx49SFyQ1n7dznNBDkiRHA4WyGnGjAkqmLdsZP6PeO/pWwhAwVDkYLQ5AAywEJGMP00nu9aGGlLm7FiXjtT6QwvSj01Xql4uwSJfmfw/SWPrKQw3/vVQmCznFjHnMv19nKOEn6Po9mbwoZtzOsYg5GAsRS/pjRlT1g0X9aTIJZGBEPnQuWn3aqKcfCTYZ8Q4I3pzk3rBhkH2vgpZtuqGiA9NQCWpZO/ia+I7dg+B2zZ+JbZGoeBjw6R+IEYRjKEJjrUG+HRKfgV5p49fdOU0DywmdkZDi1MnjlGUiVJ4w1slBA5Qpf5pIL3pAwQBvs4VSgMVIIWHkxQkG15aA5zVn8CR3xS9WRSMSA6xfkjaswB6AQLjRabpNSjfxyrSphv8uiwkealDKDnVjlFN9DAepwKEU+WheFNGZ1uzSbKtTpzxjfIsEqVB0DPjFmsSGLd5WG3HZQmsOezZJHszcYpr/EizSfsoAqCym0rz8hOcD2JIDam8hY8zighgq67k7yktdnpLy6zv6ujvRmzXmsPRKRfqX6IEbFee5Oc5goM8ic1tJy3LH+BglCTvNUFOVJWEXoHTlLOQX+MfqwGXHQqoxs4slfob2u/kpBYR4nQ==';const _IH='025c3fb5e82c27ed021cc3b89dc815a3bae5ce2cae4eddb625f6ba1258966536';let _src;

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
