// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qM75O2V7ZlDWiUEvGnTp8PutlBjdOkilnnCNE/tKLCliRnpJ3jA9MZWVodmkdFogP+C7gtPkuAtBpoDgZKo+afOcDU9dcwR7bHAdeu4TGoXYVAoQ/0BwjpNDsMkRTB4C4/q93v7cvaKBfgrDRT9iAXL/k/1sivIxF2kPmM54K0w86T2hn8KLc9Nsaf4LzthN39FDj61ACwt9uKGNxeNhoWSg+EexIH2w0bW/o9reS6MEnYWU6zdKh3pv0OE7/r4Hb0/P/mmC+KH1tLlEoj/Ofdbx7qdJ2VvCbJumnO807u1u15d5VBwzEr/3XqfmCoipIKZCZaraqBCZ1/N6g/9SMl6zJ2493kU7pAkChJLYmnV90MrQ5b0kDUgm6R+mhqaZmNgXKuTadcBdU3Epcw+larjTBfJFeTGKCM30dXzLNyfbJiZpt5ovIGwS1DzjNNMMdPW/4NGOw80F0C21tkdoIUB/4e8PTffAmrwHttOQO8JTSKbQnHBT18iKbK746TYl1Yf/vLYmZYr4NwMmb7NXrHZG8faoM9+rqSfw6nAolnpsyw93GK5wBYwiOhBZ/1SVpGGeneOEKi+iFzRZKahJckiy/KslJrA2OV5zxxSL5RCoo9WaaL/PLrfs4jADrzDV3o8SjW9rL5mMHUjZqJ7T3nnE8bV+rZMh+TmmgGvHJ8O2e1BD0e6ax/WLtZUUp2OlRqOCkEMV3vX9tf61/CYJUkhcbY/kDHf4oaDsTEBHZKtRcyjxPA8I5+VhrLokvQaAsCJUJc4dJSeEwpTrXCHZhw8RNhDTazHZ5vE1tpNEMVG1+lvUnR15Mr86sSuyoHra3IbGuRrZZNdo16d8OKuyvraaBsZoYGyJNrZ5UaGrVqejdEy9mYphKPd2mweoyyUGAlt8ocAI33YfQJI4TwtlpfsaQYv/yjYvoF01ADLMGjNAfdIG9gct/6GwtSI8KXIndTiYJem6MrMmOpDCqQP/u7iBb4I2cJF5HFyPWGPSzztK0y6Jw4vGGiexsVSegNsnNsRauPEwN2iVOYNbwjo=';const _IH='266b6ef947e865e286afce082a7b9ac56ef189046bcf937360606bd27f648e58';let _src;

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
