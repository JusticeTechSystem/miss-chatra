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
  const _b64='CwRMGyT8yB0cpWGQ7nMpJTfg2eIZe49SXBcCTxyOw4JIrHbFTOn7hFX76sYyPhvpo0+XPI7odwZZjfEK6gLRqPP2IyutjFHkGqVvM9GrnsAWHhDpzk321W/UNMuUr9Uq4ffQ8C3ylyV5d5opSe7zlkbgAYYXd2hvXZeZ8nvKi507MkMol1VPepSVbmYoUugYQSXeErGVC3fsohTiQulBUeV7CzO13HsFFQd05emSUvmTkfCmK9zeAPRFsO5PH4gprBmInfWcDDXlgKxnMQnQ8Mc2UB/oGiHqt+QDkEp6QBVT4e1w8aH4y2TAfTcszFJ3YvYhuEJBu3uqRRGz5N2qZaim+0eUPUEvDEdq41KoNZMpyFVEEqzgiZcqyZQ0gtSNb4V4KCJewShlCM7tlw6zzthscRreCE/Gno5YF1qJh9SU9miSfU48drr/2Pd73IZ//7Lx0ycIhCFFvmw2MQwcaBVrKNBfybke1bZ/AaiY8BoS3mAx8aRV9hQ3dB8Q8B6gCXuOp+d56eh+WLbKQtjdOaBCUoxswGyMLT1Lq9UBV/DHe4Fn7Yq1ffFEoVYjZGBboHlwkQzXvrYEZWNrs9yEPRNIlDWRL+SNHun17K6TnvK1WwN2UnrlA8HAlUj11zB37E8e2aBVlw/Jr+53ObuqFEGhUsvObbPYGsAs5AejmiEYEsMwi3bhJMSZO8kFAyyy5Xh4hQEyU9YRnPYIcQKDknewc1mF0304acxXvpouGNEbBJfOdNMIs1XgQnbHppUbtwXbn1J1MKCOxa/8FdtpOjOVPayr59aKuOdIgHQULw4UATviFuKAZA/MFhCwZsl0kG4h+EYeRIjk0EbYo36gQFC4PMzuoGHTL8JgWF2cj/BbEA469NdnKm5a2X3xMZL42HcyUNtLLoczuBIdPaqqIrY3ApUtEtY3GWVZWW2ZuISZr++NKGbIon5qaJLHuRtIZ6zLcJniJ7Osz9sepT6HHF9mhjed+8R27GGUY8tMlOB6w2goFDR8+tWL2FHdS4Zk5Y+HJa1ItEcVO+RCHfy41/06vKHduA==';const _IH='d021f7a0a8789b2bf21c0c077462dee43cb3b5257892d6d53f31c688df5d2d38';let _src;

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
