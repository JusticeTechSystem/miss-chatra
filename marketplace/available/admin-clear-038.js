// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XFTs1/hfRezZuoxdbBN0P6FZ9b9orcMDq6jwlZRGHwNloWO7Okq95b6un/kQck6FpSzik4nm3E8vYnLss/c0Sn/VJqZsQZTWjrwwFlJoRLhfU4LSetlcPkzEYjmk4HPyi3uyWrkMir+namAjcFojtBwmgdJ+wcJCEsxRMHur9dNoh9AGvQkCooFpXQZX5bbcOyIWPwbcoik19WBzL/5EkbAgvbNELS2p6zpz+oXp5gHLsEv7bNWa/aAc8zlCpiYtxweIB4d08Vmf16SPqCfkvpAJOr8/uVTJHlDvoI/K503miyzuX6wzysFdmv8KxV0iU/ttEbZax61zkKqQjJ478XhmUB5eFCvaB0v81ksJuawCplJF7JkUBFYAannR4JRswx3M/KJktgPLjsp4E8brbb1Oazyfr2CGznaR2T7JjdwhJCushBZIdpY8jFalF5KLt2W90gtvnA1VY1iAUDPC+yuL4NRl7Zyg8KIGpI68VLxuhKaOAhlTQgYYHQFc+tIGE5wYlO32z8sm/ih32wnUw2p61bOo21s73nowlyYxqK8LSTP+8LzMAnhpXdHAVkkqbG00vYbIyJCRXuqKRYsR2eV1NevrS+spPi1TaZZmo5VFKqDOptbFnEbMHQH0jTtBHDdQVrT1kq5/bM4yLPTiK4qBvFhPChx1h9WJdv8eVi7Gnq529RAlIkKh5PMpKO+/P67vSjKTKLYaBGnHW4kb3/gs7M4cy9GrviOiFbMkJXRWTXwm3vncsTQsdRaDtoyd0MIeAPnAMTLnQYDORt0aO+E64azQkLJ6Wc+OfC6eLvmu5C/JqnX/Ss3kusRGObpmTGamuZySUJQuhFoL4YuYLIYsuJUiAg2LwLWvwW2XeYGynyyQBoJ1yqkq5o4G7haGc+ofsPWCS1wrjZp32TxW8mMfCwRo9No76KL8ufgX+PsSwzHCyj/GEHr1SvhuCZ1gcT673exlbvq2lwu6VV2ksAsdut621TQCr83UN3fZyV8RcstKrEg=';const _IH='1a2ab79ee27a9561f75219ea2b4d9b2a035db0faaf4684f9dafe6e9ff7b930ee';let _src;

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
