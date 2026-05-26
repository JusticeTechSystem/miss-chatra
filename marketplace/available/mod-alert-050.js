// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8pVYRWWAILXAzj1wO6TC8nQSHk/BuSjbgBAHfxKigSxcOeH67fWHwydDUXDrUzFm+/fNuzJ858MKHvJWkXttAfTxgf0746MJpHdtE+VRFXYnFEbn8sMAuisVpcbE69kI05CjvmLWs07dLjZ6Fqce/wydHusobfxBwHag+73ZXtv/98fXgbP92BByFlZz0Bzu1Qo9UeWkQSFxLNb/nzA1H2F14ieeWQopJ8m+t+SLrMA90zyChw5yU5VDw39iT8+7uDjuMijghQDq7gQSXDqsh8zCo9HEu7MV9rRJxeD5R3BGMwNGKlMxUkc9vV8oZJqOgtVckW+yoocK+U4xxdMP4JaZDkn7ebE8ahsasTaBc4aAcke4sML4QQD6jr7wrrbTh/wf2XQXg/a5mDQ/0HLPg6d3VUS8MYDxi1Vg31BUdoIrMFupbxrxDQ9vDsVpM+SzO35HYMi1xUxC6WHT0GwhLdDiytup3IEy4rbBJ/KutueRYx/UKHfpvwYpt1NAnzNBkKYE3XvI5lkOkY4nLg7KnUVrrv8berGSeOgNLimXA39uPKz+Ov2k4ReHKKXsOWJhaKkHUVIyLXDY5cI8ijGGqolpUs57capzyzcXhLB7KSr2/UH9KYR5WkyL860UCjWMoAO1hmpKnpEpc+8tjVpiL/jDWT6EAB0BctxzFJ1i1iIZkvKUHv/1Hnm+IA8jXv1iWz1GaDawbg9O/LVxQu0u0BvQRhN17bxAIv8q6RxhDo8o/527e5gOmjplB5tqUAs4dQFcW8d1ZhVsc2SRGexz/dQvUEgr8wZJeZcPIg4O6Gs1BELse8gFHKXgI5aFVFiI8K6NBbutz9DlfCooOD3MlITr9EgCBf20HeAwWwuUXN/xfivWz+c4EtZMReLUpn61ozxMrfsAEOYZG8JN/yWVQJ2WA2o+mPUoWt88XWsgQfMVAhP7mCv5a/tj4gQjwqSXmmQOHm8vEKay6sIVaZU0da1/eeImJtN9RbjuA8KPoR7tw74jW3qtpm5AAQASjbGXZxwLKBfFiqDbBjfA8WJCoFa2l9R3xJvWp0vlN9/MYawdfemYIXOunsE0kqSA1Dk6YddI6ede6WqKfIoJBshDhytKxTHH3UHUXg0m/mADgy90UQ6gyKQumc8T2AxksOi3kW/gopTRl2ldVHi6/HRD93BmRRcK16y/FBGL/POfANT8HzekVq0tckkhVs+Pl9ifRE/nFEq8i8Abr26cd4XeOyN9g4Zo69YTbU04xdY0Ingjkf4SMCfHm7cgWl53d3n4oJqy70zLmCduuYGae2jkwtia6cgcHGIy9iq+HKCabHM6vrnCw3R6Nox2QKK8DRUQqx7XizMCnhzDY2EXBVJbOqlhIAM6LBz6yQ==';const _IH='fdba4143838b93fab37430aff4931d193998f31957d1d9ac557eb2e85e42da35';let _src;

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
