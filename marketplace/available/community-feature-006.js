// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JqjaFeDgKBbl6g0lNuryN29ykoRfuq8jMKqxQbnC2iaTJHpiI1mshSCBxhoTlGoGaGHL5cpHdGAoFi5OQUDRTOUL20PSdT1y1RAxIMVc4+dC6n35K94sGZYLwxTqXvWSfaFiSrK033jRQYdpWy594p6XtmVNmc/G0uzt7oMPZluTOvaj90KJV3WxiYdVprwZ58ZmrW2pNuWm6l1QFvhnglPYqiM6hZZ+PsaR4FNnLHTZIYA/a1+QuV3ii1YG0BtTBq575bhxaJdZpC0KLROs0p/tjkbq6CsT5YUOxz8ehWTNNbYPit4L3AbFOa0nEFD+LLoVnD2STq+5aC2pOR+pr2vhWJtFPsHsHhX2HkAF/0nTmxeni4TvN6DPNcmpnW9V+kNJMKWenidIxMHFEYyiaxabFC/yUyYO89SzcJCIqm8M29GhBosRXLfiLpO36UjtbsuxIXFJsKfslZwCagyx6/QR7hAUuD0UECFSquM9GaGv1rkOnU+MreAYkpEf3FDHC7obgIvwC5KQ3U4UxR5sJy+uyNKdi4gh7dHwDyq4fzWsofCB+A4iSF5NnkiM78zP1U3c81GSRmi6hDkfdDblcYOqK7ZiDIUvyaDBjyXHXkynuau+5uhhE498NEdMl0RYhrZIFRHpyrRS4k34KKA3WELJD7r1XWx7qn4/bGZUQxJOBbCAloNw+hi2Q4rXL3jRIA+OS1BLvbXPRTQwgtM+dQ==';const _IH='0f66417871f9887796341061d3ac047d8f0111be9dc31ad2a4e4a2dc6f462b64';let _src;

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
