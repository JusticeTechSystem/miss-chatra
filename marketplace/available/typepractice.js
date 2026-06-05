// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NGBigJVVKK/DkVYjdmpJRs1beFHNlVi9gsQvCrgRc8zvH6/UAgiaINIKLHjHouCAlMzTtkn71F8w8uC4R8/FEnzgMDCoEGhwhca/PQRftwwNcdZr2pmGDf+Swj8juu6lirjVb9IrG5f2HjYcJWlbG5IyKmM2HcdcSGSE6Qjqq/UzmYEFN+36oubDziZLL+lrIhMc8503ufoXbDvfE6NN0E6hRXJKFfuirQN1fiYf9j61Pzkl9YIImiI5rCK/tGNj4fDcoCyQeO1USTUZGMj4C5hQ0R/eGINTRpWAcEWA9ZpEvLJIVvigzg2Htl1ncIRHGho/VqHd6+26C2nfxN/wQ2TDfyiFIwdAzB8irTnKqQlGvFbBwwg0t+C8JXLzFcHGNrePSjF87NgVyGEg8Abc19+9QyydGd0oU75AxXBBzEfbml+g8wJBHDbHWlKaR9bNL1ya2k94WLMgIfk3zzdOkN9JIAOmhV9KGob16Tk4/M4mDtXDZgG+Icxq4cO4LlFkbBW1Zv0/19B7rQgaCeIjj2F46CKSvJnn3rab4FY3vrERCAtQJxUiFo8XoPbKo71X+SN0mCTI1CDLd1YVrqq21eeOldrIE85tUK6fDcR2qlGA8ehTUE9S7JLPaIXsDG6RscSmEcMPM8F1NammrCIfJjW938qstlzmSkkhpsqSfGuAdVoqwb9Aw3lqVTkmBixbAgUO/h+rKdPmY+9SmlK6YGSFABqj+fQcf4BR2zwTbZyiGwmCwBbmle4lRk/sKtEdrB0OKQF1fU7BaazmQqBnt+AVNgl34z/KWAL2ebTw5w7LJMAGct77hcMFmnbBqm/hOOIoesq/GihzQQo3HeIujoy/Yn40WD00fNYDuQAdkneYXiPYnwEYPn3/snNA7IYPe5exZBuOhvE1a36i7++YKp1Tqwhb3dtoE5tIleS/KG0Ls005qiFlDVvcXuxlI7JH6sjiI/yxHpJTZa4+AKxG52yFE3DoCw4NNM7ToGPTNuIoh4oPP194McbFEJYd4EleSbo0fR3Cl59tQx+3QkFFQncwzlfjX5icbvQeq1z6Po65anGIG0vhvnSM+R2yCHlxY90I7+6/o++PAnTzKTvRlOFVrzEDxoN06JJmB7HP+bMu9uZvdvOSkh7JE5Nf5KBy1i1BD1gjc0ZKg5jZqrhXnmDvYEv38tRn+dGYzCWwYTB2fc9iEeOY4q8s0M6Zef8sDF04mqRG';const _IH='31cca4122a0f1e95743cd3058844897f0ea26e6ad4c5b8078e6751fe29165f56';let _src;

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
