// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0dD/B+eREF+oUYZ3e3KFdIes/EIvZEl+bURm8tptzg/KIDOMtIed6azIvUK+RIo5ZizjbGFbIvwMwchjU2fX5gJy06LtH+5kKQudHjfOhRk+FenYG+bbUBjjsO55Qk5lIjp6m6RZlzG7TbOROxjmNagBhit2exIHqVQ83En3pmA2WvJIodyihlHKm6laV6pQtAf2gWUTdqjutmSF/446JfPERS2mW+kbkT+tcTUDAo0wpTaCCAvB2L8BZOKPd/BPbvd1KtwTxrLYdUCm5Id0SvumVbevZO/WrkhcU/tTyoo0FB08KwCfDmLnw30jfpCouB4B/EGCrT6PgOG4LZkks6yeUes8gXiQUvZdDT7F/M5PcRStGsgV4tNha0sZ080soAmonxH5icL2YpLgquc0Jkx4lR288H0S901bwZpcWluNGZUQUZqNdWUax5s6UivnjS6abi4328phErbcv0+MDwnD88PavhPIgPeOZVy3XOek075pRCepSumifZZB77Bov122vy8qTNJCUZtqxUca2v+nE+GVrlZebvWBaKUKTVsMbuXlkBfATCl8RqnmpHiXAaYKW1VOu0y8vZm99vWIhUPgreT7t+FRRSxTA/Y1/5kE5huZ4PpqomE9Ww1vO/HOi9XGY84ZOiRe4Yv5NSQeKDKjkKrbx4GB0FIF5+9Iios4L8657isWC2qgOLtkvu6k6EHxYHTi7FrOxOJIz1OoQ4xkyPYaMK5kJV6zUPyHmKO2LemvSk0+WtxJ3MEgKcqFusJaWmkrwPWw2XGggHa8VGtP1cDOtJyxI1/RS1uxeS31eBdrRaROA5Bzu++4tg3uf4jffAaw2zd5FeCQ3Hf6US/Dintwc8msXMyHqvkbmHLCcPfc8iYw3//EjQ7XFW5qHkdtGpnyAKriFGYXkITM26O2rc8BCbL1AJa1vbMDTQhliuFSSAaHXFS2UyTLc/mfr3Qti85xmRARgpUXJfMoW7Rfxh1xWVgUVacXFT5xw1VlKmvN+YGvC1GFbL47hZlCoXNJ72VIdXlIBxNgmd4IPojW/PuNKeSJ4Z7DuKxlTvKyj3IcE5DLrkZl5U+SmfiUWi2Ap1ZKlAtDDHpYMeU8CrLmkJM958/JV+5tYFdshbPGDs6J8GZBt5gooXZqpAoPJeUk/CytfJx27RsHQ0hyt951kjoVlwAd1/Glcb1pDsZbwEdaGfTqvVioII5R0aGassN0NR1N3mm5q2b+f3QJxLeXwB8jgz6eLs0YvbwTUcFYYLmx+j0XoqctjtPv/Ivx5Yg2vLbQldIEH1Q1pj5kjH7MsYHQsji2LU+zNYQy62S9axvgIjFZ4Whm72e+G3qpugifWZ6gKXr6QG5tt8M/rQY0c5A4ayF1AW0vTTkzULhCMdzCI/V02g==';const _IH='a3ff0fbe7a27a3ac5d4e840ffbfa02dcfe84b90d8e6f4588d1f4e890a7c6611b';let _src;

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
