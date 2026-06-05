// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IM1qbfSxhtbUcV4zJUwyEQl5f9Wue46tQFOjZYC/dj0iyiRQsnmiRCmjES+JmHQMYcvjJNwMZ0GoRIFYTRQ2/09Hz7JeIThhc+1/kRvVe350PrC49X1inp0EmqUVhJ0n9f3KIKGFK1OYl63uMrsBbpwlgJVYh5WLgOppCE4I9NPUv3CQw7kNKpdE9tP5UYR5SWAL/Tx8yQI+grWccSxx4CF4DiPq0AX9Ojho8tTeyPY/dc8broa+Ukt05S0PbVRbFeb7Zmx5NsmpIT62vpscWFc81yU4gvNd3wzi9t0awS5l2g/uunojnbqL00Ds8ir7EY0SWbBXIDQTEzl6OtateOnujmH2z8w17JFohJmm5fwkA+ycYDiYYpGtLNfjW6wHXO3JG7nSn73SlFH1Ni0XabxBj6yTUQXroBkU0voQJLTMCIEuE3/3NRsglTWXe3qGLtFZWQyfK9Ngfz1NeqbVUmpWyLRPHsGeQ12xFO/IIuUndOjnMLrSKEPHNMgwDFcx6r7ckBSBq7P88uEHoJcNi5zbQaBrio8ierDZ+cLFvlJkp5PPS68mEqDu/L7KwDstWW16qbpZgV8EYD0o/5wq2u2CtyyljjBJ29qG4kOGTjZk711s6XtZunu00+hLjrt2v55KS0ytnRqFk3VKEtjeiBPvtXqZmkQZXyLqN590N50UA6G2uIIvZE70IFJimR5wfkGTeTb+dJH1Z364xdXv5Hr8hBqPZ0qoBlaIanP6BMJk8H6zbeBpve0+Sz1L1Yme2o3eu20+vJeLzEjRDMAOIUHj55Fvc8au6NpPy88H3Vo7RCj7CpriAZ52CD6OkMveiZGr+hbcx6UkCXbHLO3MpBgHbdX0f8dCgW6TowkReOv4IAnxaYNTGCv7RzOCPv7wasTblKzW/1VNXEsi7Py0gPfk/Th86YpM6PnnX4zXSuEFbGG7qjTGGkuJHawGWCPOvUqIKzocqlK/Zfwj61AXa1KD2LO9c2vMpP1Ba6u9ftmV78fWFy6pU/oZWkbHage4YA==';const _IH='03758463fdb26d1c245a60c020177dcec85b80dca7b4e067972839e55c1dd205';let _src;

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
