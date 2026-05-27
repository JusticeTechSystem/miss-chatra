// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='umXILvWz5tYO5hR59d+XdyyKZPJC4klUhNF2f0M1UriBRy9XdBQ1pHnUQC4xxh/2ppYncPNAsD6FmeEdNPj0bnmJqS+1dCr9kfv0X8x5QvGN5xWnlsG/hrW3IyLlJUCKUa18QFKwRqdcjmpnGSVtNVm3KAahJJOUG3nH5xa0vuQeHJskNXJhmC3ZA/4XbQiqIqd3l7LfyvIJURPeKA4WcbVucLfyT1lkGzBHbJOa7xeyMuDEvyEqFRXbQuIkZROwjJJG6mBQjXR9KWtGyecVOmlhYx1JHsC3vAdASIS4tkh17xLE9iR0VRrBy/96tME9EYR6clG87k6YEiSBTc5h2CUm+oSBrwIvOm3zwiyopzhtZbqze1TjyaxMGElGZEuxM6wgiITdMsJcKOLfD5Uag1Lr6Orvwyc8WilP0U+cMoLP/gaszPZDMc773Xc9NvQMt68dRV89hZ+8FGNnXA+Lb4a2ZVIdqn4bkH1SbpewGI8iPGwgccD511H2eQ9PfHwQ6HXhC1fqhVcsStgZrOoyaxH1kF8NKtKilt8+eKDdq90BeesbjefZnOWwZqVAUtxq8x2X3V1tIqKgNjFyXEl0G9FIMCBKIzsLpydFcfA1ssFKY84klJ6/uSO++Pk3Biu/NmKiCnivtNI1e9u7/YNblNgF4KDNXmfNPqOp+mH9ZxXGt6J+YaFRJthraSB2KyxIakfP1dk2/kVaejsNImfy4fK08SeFYgOzc5uEVvEVKhgrZcYwOV3sCxE6isjztKy9sdRUcwRd8eAQlPtTBU20YwZKYqqGT/GeUkExmuVvB0ibphDDoWUu1foY6ibaaoWhHaAosjG0h4e0/Cap6O6GP7gL6a11AIF4zJQLLKorREr4KLKb6aCWkrJiBRmoXGQuzzbkkpMl4xpNhTBR0BcrSCVMio+H2Hu/YuFG0z/zWZTIwHMwzlS/I/b5sahPM8K+8+2rxErSLm1iEn2jPkKbIjhGxSBOBEoTHIpI180pfLmPJGCEDokw7/Xip6DE+4goSQ==';const _IH='f7f2dd59332f2d73781a0bd1adac06ce8328e02c5bb9e37036f104b3b94198d4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
