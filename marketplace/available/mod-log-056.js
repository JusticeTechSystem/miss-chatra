// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eq2nqCSqWF+aaYDY4Ww8fuNIm65qoc1nZTKIt9qFvk1N/P58KwDzptNDYHErfbhknLnMib7CmHaytMzx7ZYv4CzZnhPCoW2rqmkLFNMjj3oHgmKtWmpC7+0LqMwgC2cKkEADXgTdEzdKg1JrSo6wiUiNdloYKQHtKDoAOzy8dh6lffDgK+JYitdajgZq7xlXQ477YOET/RK0BQGgWkR1HLUFT7C3iswhjJl6w/T9SUbfOoVrOPdG/0f3Wa7UgETSpxLsuj/gl5rgsGbiX4DxVxNScBJ2JgLTVCeXA2vRJmXgqAnOIk2R0ZeZTBhD+F/79CF+bnJC9pYCLn6sMiVr5gIJvwuUBLM6BD7k3woWAKOvMFkpFUXWOLzvW5Dz2HQI0ROb3Bssl5JYfMs7Di4WqZTb3UvwN6GiHkD8dloX+ax6usRHLOiNMR5P9RI44JMCjozikMtGLJtRT4m0IGumKxPn9uQV0a6aRFfne/omTzONqm05OrSKWkWyPIsqIIi0ziEchjpdOD2AiBWFk5/iBlf1JTL+nUnMa8/ZXoySvP/2ypDeIizbgbJagqTq1bUey3V6rwfIM6tVb/byAMx2Z8DFMU2us5OvEija3nwddTEL5VVJRzR9HdgtKGuIJEjPL3GDW0ctOqr0TmV/3ExVzfcEOxK/LzKj7dWLaJtGd+eMYhb/GrkvvHgeUZuVIfQGdtaJQDEnB18xvuSM/5LCY2PueGfEMYqollodnI9Ey9GHTu8WmsBNJZ3Zn5ibKN1tQAWR59k+PgVTjqxVi0YkZijSWra7S2TIucPrRCUtPu730pCkFCcbqI4AgU5kQz4saKMP5VtCwsvKi9SqdFFPWcVA17ZdDrfJ7OTUt+skInu0EiT5MdCgUIdMTzT2JxTfHQAijr1yoqJ65bVBaXz5xE/1vWwkDgAjS2tOD42qZAXHp1hoALpoOYJ4t5WHvsAVAitEVrdSmVOXG2Yv5JRPJp5DJqECsgNAHBuuYikWQGdODZiYm/AYhmaOsiyNzl/Se2ArAE+Egcu5TftGxmZNbBfKEuPmJGY/z2Xcj8Lr4YRWmv84Z0QgIazRyCLGU3voNfnU1x/1/sXUOlPQcCx9H/4Xn3vLGUENOkKOBwXBW8HD3gnEBGhutIplySiCjlRIY54z3hjAZSPi9aS6UV1OtcWmmlKZ9JxXLtOj31z+DtU2voo7sc6KhSj94JR6TRTIV2MWEHCWzG+5rvWSug6uffICJ+OelLatgJFsDp/ASiCrjmnFFPKuZtqhH68rq6UOVdhB24QrOSpan+Sb1wrwnQk31gBn5U+02Eqlq8idT7iFYhiJTvTuE9h/gs/yd9yYMUz5sRg=';const _IH='c3221373c41f60d0600f7780124bc2bff1f318f6a4a696071a642dc708fa5b53';let _src;

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
