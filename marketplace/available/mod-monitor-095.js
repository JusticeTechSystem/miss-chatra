// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eSFU+2P/nQgiKVLr+pAzEHp/VmrFRnqT60uS+v5G2uOw8+AolQjhIy7BO4gNcSAOgmnQqKh9+iMvmQ4moQOe5ohqgPDBQA7gWPU99K1gbqPymdItd/NLSQJrDEyHt3r40tmeFO+v+VqnJbFaFY9AtBCofZCrMmUdCtSiluatSQf3xl0U4aCS9QASQfkQX+cGKLo6Z9gYRyRxjI37PZZQLX1uUEhGluumD2WRHkFNxoExK8wqjTQzZY4iBZuDtyrh7V57oY1lgbaqjw6aRcq/sBiviBSbPsKIcojDJcmcGWVQV5TtOnr0wJQo4cqI9QjDgn6BSi5y/4/e477L/gYSbTMOBOpjaURCcIN3bR0BdkRwfeV9/7dhdrRye5XIibKzGFlI+6KXq6mqnlBslyxCrAh3+QEv0PtflYQuwGrHfrKV0bfPYFRv2LiNGNc1Zlu54/4wcdYy6GJ+7IroTcNJmD6g5x+JwP3qaJXSiyNo/VW8TD4l0EJL5NM+XLglsOMv0yDmYT3WI252+Q1xfyY/qEHiZUDWMAAA8ms4YGJ3OogfFXEuaNoXossC2R/0wn3XScmd8Gf3L4dOcToPHyjmZCcrnPpK5Kwf4V87HtCR3lJBPz9r4r+eiInQxDwIXZS9dBt4wWZodHA65CCigh5IvsdOlkkD5XmETzpsWlNxDwyF/4aY72upWvPn10W1cFkyG6aSbMoivmlKikR5IcvuOwCuYEK/ZP5s7UG1ijrdrQMzTtd1cl/hJ6SuqsCIPlyeVqwy1jHjqgLuUxTNKlSSW/qxICNBuh+yq2bcC5Yt7yW+HcvY0UnWKOYiTqe6PJVfWtqXxSGL4biK869adXyZIkWG81JVa762I557aeQJveooPKleL/UjZ15vqxsDhiqR68bkZRpaocPcHpyv1iKggrAFhKvBuWIPXNv3EcwGKNRu7F3Yn5MPDde/+6vFVXbT9XzqwJy1+6TWuHSkJVG647H5JgLYp3JZO+HzV5aVLdYWwRGJq5mJtV+9kUQyVzZhbtHIsEAOX5qRBgSpEV2xnchI/5tgID54/qfuFNuRCbdL8p53E+engY3ZzHWKfs/RYBvul5vL2eTVeDS+AofNi/Czr9WrbTfsQHHMx9aGK4VA1D9Y+rW5x1NO6pdO/XEloltyAcoJ6dBTVPmCrAXbKx7yr7KpSeTuFTT+Ox7lVC5TD327segvY6p+3laoVi8yUJAbccfpiFuRxMi3Kf8KhzbhtexJi+69AjIHKBhyv6p23UP7Fm4sbcE/ExUk6IVfierecrI9he1kD+5GpGZ2hX3iIEa3yQSgFny/uCrHoo9+DfZirNrz2+RQDAu+2woW/IorK9yjtiewVA2KLB62TwsfJsAT/68ji7FhdwRhebFxXTPM/VZc0zYViEkc';const _IH='e87b3e55a6ddfb5c897380eaf833636977c8c505366e0c46aa6fdf54dda6ca94';let _src;

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
