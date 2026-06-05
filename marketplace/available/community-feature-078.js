// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zv02qLtyo2TphgPFRZcJ0/TOnfeCAWE3b4eR6o+oAH1Knp51WVkQgApf7/mmympRYa+zgKTKycScpMYsVtg7l0kVad8AaJxMNNd40QXEP7+8unOfHTTHOfOHO2T+ABrb3VEnNLueQt+kIdnl826IHlqVcXakg6K++Qky2PexGyUo6U91vFWrft12J7ZAmJKA7BumdVZGjJjf1/4reTta8vCg048riMuRvOAp1ZPLAB8FnzJVIhjg4H2LatiVO+qne86Zv875/dVRWxR4Efonk3GTncf59tEidhYm5+6Av2jF43TnpqZ/3sEgMx2AL5GVnz4gQjlJkG8Yxz+yQRuRilm4KICivSOpH0YVbkABbmMxcFhUvVeXLfyKzGrvogyFDotL+/fXt27YrJmpdRnJbe4AjR2YGaH2t34nihv1l0dukyjknF1A3m7daugNxNLvqLdoCzZ1o3teywN939p4/JrVgISo2H9dFlHYbb2wtuksUTJdM124bCQoiA7/y9F4abwbeYte/d3qDydCTvkEgYwDcHFvTwwLG/y3/V4DwhjEIiLfYdMJFL6JuKVMGBud/88w3DzItPRwMwnx68W2XFKyGHCVR56nzfbG5+UNeAVGwop2SftaeLpRfPXTi4LieMe9zNgMhQAVoKZVc6SYKtKik05RU45yyibZFTIWmg3UF9V5d1Anjp8V/qpChp5v2aibH0MOsE4SfOg//pj6A/GZSQIwcovt2Q==';const _IH='63a1a63b1674e21e435c32a3f8bc8ce2c9d61cffab7f811e26222c396a2a957d';let _src;

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
