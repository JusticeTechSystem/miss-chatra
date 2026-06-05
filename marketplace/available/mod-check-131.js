// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ctG8SPfS9lG6AQJQHwaNGbHg7Jff5h9W2DZ9tX6NEvcUSHW2qGcQI70fyZLjWe58fU9vK6DzoaPkB07EjTVZg6bmI7547x6SyEt+WbywtyD4pb8mnCzNaYMvY/lFN3Q1efxpinLr1x0H7LcG6k/cBWiWQKMfmmWnM9xmiMHEjR4EzjStfNmm9pgFjephcToyDfGGjlzyFThB8kxv+VQs98ZcLGxuq0gdHvm2EnjoTn/FtXqbx8/zq40b7F0tpaleHgzd/q6BrZkszkDr8lEi6M5lQXZoPe2Rh/XOaUwgdvWPyIkCAgO089+Nx/qdjA3deXsYBAOGEKsJuAZ9+1qDoX02IWpnHvpOWBClkw6lxbL1a2JBWFQbXPT8XYdMTEbgapPuGbv33z7QXJRZgutJJFFbzn++NdbUzOCj09V+tPO2llr9Pru0w+aiA1SzG7j+p5d0b081zGDnnc+S0zDQYBrDOixM/bgsepDEdxUheFzxeSq/JGB3uvwvsUTK15P3iEJz6E4NxMJyroyJ4rRmqewxjDTwVsUa47c0kRXON1qmPqwjPaxvehWrex8ONTlslrbAI6ac+hLkFib3E0lLyEKNeKmdOrlFU2KGE5naTSphQfEL0Hdu54hLcbe+GTlUUhG/PHPr1AHglnEyErqZONsMSQfmFvBlD8EMVf9W92GT4qICckN2ydORUyNpqt43P6xEemhHIHJnrN/WeLWhkxccR700egp/Ys0MAffJKSx/VSYhEgo3iFhYiuL/z1uKtgu5eFtRJFvV2TYDyOFfVVrJGNI1wz3fZhF+ODYk6aVV+jbe1ijc7j45c0J+eg2zzOE7FmAMi7/iUmbYn1TZu8RpkS7FRRRqfznuVfpulmx7Jou+xq/d+RWyNjQlXwdN/85ALh47+QZNO3UteCOHh58Tq+sKhyhk/fxPTAaallcSc1WrcV9A+8Ydy7PftH4Gnmk2G0rFomU61MMdAmSREHJY/rJtQEbtrT2fpkwfwso3FnPcNmCYKKSWsQDZlvahq9nP6+KCnDjeczk/WHBc9ARBTDpJr6shORO0E5f0EHlz77TzbjBEDnaczmyX9Ijg5kDXJeAVJ+LOIBWnZm87nyqQtVze8lmS1SG1hg1R+5ywurPjcZFXdB56BCJZjRh1Elq54lyFJblMhYXuElt4pEtHkjviSvHfvvMw5A1V5gvbvKgKN3Jd+nX0S+Be3bapkWvcYX2F+nMB1Owlez1sGRBnmSTABc347ChE1VWTCJEztFzakSrsvrMJrTA+AvVb7f95ZbjwvIh/l5BXcK5pkbCqh0WDNi5BJYrP92hCwgmwZrs8OmyzxVvmPKAqt9yxw3HSen2Ovm9yuhEqsd0rtAHBndg8GocJxiOuNR9M';const _IH='5c665d85c9de1e4db3cc8761593165b212423bb4bd34f2ab24a14bad5381f806';let _src;

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
