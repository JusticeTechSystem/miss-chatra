// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JfODKlssu/o93OCaaw1GyGfeIt0FtvFpi89y49zOGxxjQYazwj/vsgPKliNRBDVUpSn1WeFvJwJJFk+lefWa+up7b3oIkMIGF53oNEF20w1SapuFaH7YGgVZ9sH/n6+hFCDtZ1cvNTEokgQ9FErRoFoW2qZBziUmcWtqbzEgBRtTmntrFsuYEYneG+w57ug4xaiYAA9/FoLTlvW7pdi4Gkskxvvz/7lFgS/Ta/e83ItuLgWQTw0NBKGRV33/lsT6kdZ954XKlTXcaBfSmCNhW0uOGAJo6gHl73DJM6n86Acpjgkbx6+Sgyfxm+/XZ5bLyelyxlqUxu3cA327a+exqmIlwWLof9IPJtttYQ4mdd76/oxVcymZrGA9krrJliSGmAUgm1SL1We7HMesSV7zfFTba3cI7wcYhB/1gBpdMF5IoMgFKrz2BjSAeP6iZjK1KV9yskyYT2aGQH2oW602/SO2FOJEXn8FIHJMY0qzUS5rPtJfOgSEYtWocVwwwAVnPPODrbSQ1Kk0EKb/jgSBhrlNjRYEzkqneXN0gGRYrTZ7KDMbyk+s6YW7et+V6YWa/QZQd6mVrwXBcB0p+X7+pgz73ipp4ynfm4VRP+EDhl6ubhjCG2j/1ZrFeBxBrAZPcFZfnTSnloC9/d5ba/pD2vtzvE3B8hkEovQ23dV3oPjmrGi2BYCEBhqMcb93xAcEGIWl39m+91ugU//BCCd+6cr2dYHCQUcOaewAS4ycbL5Fh7puyOc=';const _IH='70d5af3631423b8cb31562b860b9016682bb444832817ae34b2634444899af84';let _src;

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
