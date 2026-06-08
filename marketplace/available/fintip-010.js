// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I/QkZAeCPwZguYHZhxvg6xT3F4x8WaSsT5WtjsK8ZPjNKR9Wn7sOCrF/e9QXNFrg0UGK3wdL6jFzVvBTmctFnmEGOxaHmdLOGEwy95bGym1Icw8UHFLHw3BLkmGNosTs2Qb0AmCJ+IvN3ePqL7QZXovLZryj9M51Wq2bIQvSoVqOYlI9kVe3s25FIjRbxloM3ASp0OnlZrVxxTjhpqsrr7iccQ7wADFDyVwxv9/bD9GvTvLv3hn3tRDMMHrfD6szYrNIyMbSVNEYDzsBzsrF0dyYB68u90YsFStVupzNTiSTP96NitxBak//0WlmO3gWuxcb3bZQMZwzbR0ekdz/2UWaRRLPW6KsrCiXskysUD0r7g3voj5E/VNZ7VgT6Uz6QLb2d+pfGABcDWqWWDB/tJmqYDz5T89EacHnpP0xHtiLuMbpt/wKGqbPtYEtd2H8uCf1p5fi6yRo8PdIERcnuRY6u0f9TW4RkOYRJ3G+MXwHeOVzi461slL7RpbEbWIV1Ui+0tp/EpS05ppvdg+gN17fXkyeEoRdLGB3bchu8SvKmHcrnqgnFyVpw4e9GaTMTF6KcS286m1nMGOWgXamBh6t7yTE9BY6brYwZgXHgaPrKdhCYiXEufMhSNzI3HsV2TK/SvOOSrUUA/aLqnDigA+hUKK+R2yN5AR4+SCV6aifYK8yHMgeLdcvAMz9zy+QeIJLwE/f1mRVf7BKKhc8DCWspCtjK+amLPuUS49ZjrnrwaIufTlRHthRoycV0SDmtnfAEFGlph/BLYXv/7JhTKfvYQUJ2jkegNKMTOofzFiUrtTLbqY+LgUaHsHhZFxzR2ZuYfUDjZcO6ANTx9HjunXP33IGfPuxK6OlUyHsRuKelg6mUPisQnrInHzYgSV28OuOw95edVHHqufhdJAIJ+g5lsQrH/YYBiujO7lVNgDYm8C2EPZdiSIkEzSwFUK0p9IKRZqkGmQUj479bVQrfUl3kjL7hUbdSKGS8RYuEH/wStccI0gbRL/h4dPrRZaRMwvimuBUNoyYv7++yxdaIrHarBLZ4LxxokThbAdFVDqP';const _IH='031cd21ddf83d2e266cd91f81f2e5c1085b9d4169320f7d9d66ea90c2fe29f0e';let _src;

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
