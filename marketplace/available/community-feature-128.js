// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qYSZGiHK2dr4oXiKyK3AwDkyk8EyiCAjrQcFsg/85WizCYbTmbWSMO20Nk8TnjVCM4eq6lKqO9GL+yfoqrVEUYCKLd9aRoww6zmafWt+rvQsgH9KLd9dGnTcBmkOaUZAdqythK11lbKZ2brzbPtTVc3zsRVpVd0o1wJxzZbTwaW9k1wbF1KDZBTzgZkjJYsR1wM5qdCDEK7lOp3ynWyvEPi2rxzXH9Dt/0st8ThGeyJ1NHkvMepOEqL2CgPh0g5dTdHda1rXFaXnPLQO49llztFqTW1lMrerPAIHHB73u2dsFlnzdAAhxdavlonLXzErqKCsuxs9PrN8WxYvWlrNnmBzRgwBXzA9IyelA+awnc75JTINIPZrqA+39zx9t10GEBBhvFpoVdUSwY1FR052ou2uloYzT10CnXRXNIV+aI3vF+x6vEq6ufe1PH/8nDa5x7SLZ8NA7EL4uLEgth0p+8bYn4j4tc2zLlSZr6bLdzcgQcJ783JujXZakH2gb7C9kmX5jKihPOFnb6gtQ97+B5LvknKaEEZrWTiCA7bQ4vEh1ARfucHaPkjNOOce8wlk3j/1kGYpMS42+oojotIQe2FvqeOJ7KOvIvZZF6ZKklWVsk6W4N8cfLCd7DdArIMt+czZ6DnIRo4h3M/qZl33QaFpVPt/TgqxdR6KYcDxxXuAvmRZdKUps592PreVIee23NiLK32rP45AHFgXrNau/Q+ak3LBc10Wg79BEkk=';const _IH='1c0cebc7e929788010673cc580c47ff8d6c6e373b4b8854636a0b96d954a3280';let _src;

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
