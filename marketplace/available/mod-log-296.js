// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JCZ5aahqH8CjTs+EijtD4IPL58KrbTrrCpl0F65TsX+C9UvOQue/QAb65kQ9/YJ/MTsO9FL6/P9QO45ySMhbS8WiflOkaNhoWLTiKEYQvGtdd42lY5pa1D2nUmrsSsq04sgBRmvQJUQm/RWfJyxRJQ+gBtqNaD+uXIOd/1LqISyh8K5oZ8/hdRzeEKX9YhQ4xDHLtyGpGs2luj3hkFvh55yJUI0iw6FRGvtfWj8Ld/5XMr3WeZp0F0VB8c0Hv0Hs6wy3nSeKoKlyl3WFQT1tjNuDiMl5yD4ZDRO5BoAh3otV39qxQe8iO7z2zdhyoK3A/uljXPifjXXkOk2H4iGCFRhSI4OiyZn8T43octR+zrUh07s8rvkeO2ndn1DP61fwxH5HcuS3F5PFBQk3M0nCvh4RP9TVKspbnMzmxUMhWN3F0azXAWnP6ipYCkyO/fDNGwZFcMLL8PaIXEyPu8rs+gPoGp8oE9/3J/EESynRrV+ddFL5MU+dOpW/kxI9UajOeJw9TgGWrwi1Bg8C69Cy5XSb026nz33rG4u+xnP8gPBS5RbjatpujMmf4ePkvogMq9KrZR70+z61wDpyLuvjN2tR4kvpzMLBWHpZBx5nZ8/J63Dd7RlEKIYv88kVtm5Rq9/Dz/O4s1YobDZ7EEPkX/8TUarCWDEKLv1z4WLq9GNLW/zGx54D3/whP+bhumvTAyQWJLzSzc6EPAgsswxtpefdQGjsV5dfYhfV0kz7GHOSOjFp+gbbt/eWcoFo/DwnyMQ6vRMnKjpcdWgME7qDJtTxbSUTHI3kA6u3qFG9tQF/qtVvnmdqjF9e9+iSbnq8xYYfdBQcMUvYb1whlKlTZXsQcClRm+zWdUYTDg7n8kUKFItX1FEnwHlmA3jFQ6e8Omu3va34rS0XaXnNKjlrlMeXzT9Q9jn0mzkli2PhARMQ2RIayM0NgskSiDivxBhY/wrEOaSnClcorK9hqxwJqi2K/DteiLUcQjo+je7n2OrHW/5czm9BoE4C7wGb3g38ZFj6vwWtvMQQy2NgaF9YWkewLAKHgTLvn7K3EnT/3j3G9zGdZeDUhLXqpkz+DJnPhvNlOne5slPVyWEmItalnvX7JSVFeKrn7ELXDFIpKiOe9oEx0rdz0fIQsZT3gP7lTk6Z3qFo7gUhUBwoZ52RIqnk9xk5Uo7W9k2B9kpGX9+Z581EbNv0XZ43VXU3fgfORmDIyPc/Bf0Nn4hYhNaumpgZAdBNzr2jPxzKvWsI0iTCnBk3vhMSkRAhWiTwQpzJAm2J4wUTnwkG+OaMaGSlgeJtqzIUmlT281xn/n0O048pYc3kB1Z7OhOS1rXOQGsi5Obg6hl9K+mN/w==';const _IH='445ddc9f16ebedbdc6b3411349eceed846ce9285cc59fcaf446c4489e1f10b2d';let _src;

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
