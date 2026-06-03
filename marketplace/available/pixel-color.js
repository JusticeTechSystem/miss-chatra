// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sSZyxKmXCWzJWGzTw+WjvPFTiS/WOTLH+yAJoYQwt2r540k3C6hvAUwL/sURicQWZi4bv6PWMXSNh14hWON8Mgkb+I1Ka6vZSL3i922q8AXnf89Drf9inNRgV19TNKbwQZy1WPgUZNt5gjtVcTuX1pSWWZZe/5dAuF+L77gl0SVvNR2hIOndcbsG75C0CKL8dQjHj2hdEM8DeFSeAC01yXt/GoEOw8snHj/Cpx/rRNlrzdq8Zv6xJ/IxEWdc62Eh1L0NFV3SBzijJzk/QZl4Ey89R7JHB4SsrUpV2lqSy34uibEPuqKjLU/iFRXnHuc10J51OvbhHS6dPPnXisS8fLf7WX1XhGRHvWBaGnnKqEgSGBW7A2jBxYXjRG6aDeeasAaVp9ma8dmQwzoZYBwSEUyJP1E8r3htnOwkXVd1neZcl1o+SVE0sRn7nQBfgvnp+Tgo3eKY+q3aSeF7NZ8mUHjKRIU0/dYlzXAj6xNqi1kKC04vofJJCHQV3tbwwyKfyn5aMYginyouqR/aWGEslPZuJnC2pm8GV76tFSbumuH2T8nAAm4pAonU/9utEaORMzh4kaGVq0fSoNO2e68iCDleYJ3LwGuxbA4eezjB2iJjyola3aJdd94DDVwxZ3lcFWzXR3+LniGagm1HYaeeVQn2UQ7124AiBVD+sql+QaokDwuYG9pAGZSjELo7yzR7cAHOVUg/4DKVbS7guW6vlzoNxgDfXmWXWZt/IANy8E8KD/TeX7LCVWgH3C853Ekt+zN9NROpYf2f21qWIxLUiN457VsxzI2jYpy+9kMSQtPgQJfg6IDZE59P6AOqQzzrT3dkTCyf8Ps3D041b9t6MobRFfJjXMceRRPzIsBCXV3KAV/pQYtdqj5qd9IqAHUJ87KtmcCVRa8+uk9fYrs7CYkjCEsh4kSzpKE2qMpUOURlB15i/fsZU6Ox6dnw2piar64I/wO1nLjhVlLam+3xdDcnGL8W05le4+1I28XOG0/WjnVSc+30lfh4DJnHk927CLZKZf1Pt0zJc6/Kjnu/r6Zn1RBGaGwt8q1qFepZypiEvgx9gmBbS5V4KX73JrGqowU5FbaN1sI6z3/vjHkbds871ZykUwVjcWnos8KWGlk9vdANtq0EUXg1Ro29LjH2iv/piv/DHRpMIZ69f/+DjqrsDP4cbjAUT9vIIPqgsAmYXd7KlrSvwUjprkNM7x1xxFBN4NGVBAmR2cSmnI0WylgQCzBOmzolhhWM5e+9j/M3al4Zxd0KpSQCeO9ZNZuuzCyS8MaiYB2lh9wWz0UCXACN760RZNCUeumFZ4eDLur0heJYfQjsGfKpZLWXtyzDhzaPXwazY1ZnL13vA50G1zjCaYDyxfa5AMtQMZ8iHaIJ1+GMpW/YPhtDxrZmVhumBCmcCoWHdD9rG+au7izn1XX5Bt4aGKsLqkvZQ9OD7F3dh8mqvmvgGYiw+n7jfRJx/7eSxMOWAbdTTny1karJSSdMfIvu6ZWr7wZvK/DtKswb+0Onlk/BepQzy+2Wje3KNjN77E3av2OFd8JHwrd+vNHNX6MQxo8vkGIB30mW4zx44MoNrHHD/e/6dNiDSkWV73no5v7mgumwSgE17a6qHc1Rlujk2RbmFTTfSbtUPS3bvRlLzdGVacQF1PZMy4GdiNQY2smZRDliLe96LwA/ET/cQYqM+m8rOJjNAAe4Hvc=';const _IH='2c6e0dd6ec074ba3def9605bb8c649f0b80d1df5ab9eaf4497f6b26cd52785bd';let _src;

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
