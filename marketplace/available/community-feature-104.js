// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7LQ+TVP83ll4T8m6zUF016/zMwmLZ7tIHAvWrjQhT1up7S2uaNDK8QD+SzZg3l/mzzfs+ndJVnhbUwWXP/nuoFRfUujy1D7orYbd8dwEFJ5eBYShyGhfoml/pPoT2uvLLf+7vWLqXxvxghGOXVmMCEHoBjESmlbXnP+19J7NO2VrkULpsALtIZUEinyaQ8/B76+oop3sURLSuypa9tkGAK8ghNQ2TOQmIXohxJMrFdC33MewKCQ+i+g7YNUTV6GFY5adXHbD6y/wamD4gV7AUgrBYW5788s2vSSdO/fus5+soAeobfTOoNKFFWnGlxxCfAaqgkOeo1jBb9dqgDBe/ZZjJW6RXR3iAtvjuvygRrbSYNt7f48AcfY4hz4KEOEQ+D0+wmHV0U5y1WwTA8iVelHO+PgtECJyZsSfnFcffxEvSJfxPf4DUmOkimzg/Ovv0KtLlmgLQrTfS7EmB5j2W80IDcGybdFF2uhSxHheXP3oDvHvjGmGKlAmzACEMvNSx+Tk9jKwZsQvCyFEIbJrd5HKNCcyczyFO+H6wpc8K1krEbOE99kfT5DeyLBL7p4A2KoHybLAcLMxo7ZG+kvVwK7d6zGd/ftRAGXWHXAm1dgozE7Et+TIlo8wtQQ2Fha5cCZtm3Xo04Y8L+Hef9lWbVTH1DUcEGHLx4xmh8DRJHA7CD4xZi2tqMXN7aCx96T50buduPH0/20hKBLMHU+6fhbxJxJKr0gQQlElLcKoXfbwSpNR6ZY=';const _IH='8ab352536d92b6f32f0180de7c909afecd978ba719e9c63e596788057194fa46';let _src;

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
