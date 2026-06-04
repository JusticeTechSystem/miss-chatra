// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F8mYW7xw/pilB7kGoF2mSGSxlZPF637fAIvkWMHgTFZi3J9vtRTwfE3DsWHj7YCh+m6o77LbzCLJaUK3CIPkzNgoMtjbg08j/TG553vmbVY0E7ajOgvN4AmCL+fiZjGoe4ZHqSsiAb20MuP+STxohond0JcS4sCxt3hvoTuYI2vHJISxCXVv0Mb92tO1df9CoEDvXKftOXuS45Cx4Rvopz/KilUWBY+Tz6zPVEiDj2jrzleVXHnffgB/kOMnO0aSXHcw/7jmzQq/W2R/TYcm+5HJiWq2AP3XtRrAz7L59PFS+bXvHk3X3M37jbKQulosyO1H0HLwJX0UFZfYE8gEQJY6pNx1UqHGQk0sfzt6/D9r7Wp+WOfJmZfFmOgzQ5cI01giP/uojTREm7isZ6AdBxbL1uEN9Mv9NTObI3fngVvR3LbrleN7pLsVKNv77Dpf1JBf0GGHWHs9ojcoDfFjCADbEayG2tb1uilWTr5GNYDVnF1t5xLASFP/OO8MYq6ardbm2ehnJtZZ0XTIRrqzdmnX/JISPFjGcncp1Tun1Xwj0wODViitaBGR7fIIqe76cGMiii/ckL9gj7Roud9cqsKAQJa7g4lbiHR3TmhVsJUpTDHoJhYB4G2VyLiRQsO+Ab49IY62GaAbTh+ojkJxeu/6JUiJvJtBRfoLPBpb+7+N0e3TDRGaW4LAoI4eV8UAG7mypUvUQoMD5b3P3qaSgK7zZcj5ZJUjSR2uWC6Ozdqj3Y17DATkIqE+';const _IH='512828d3e56dd93dc9ee545e8a597296ba24f9a2ba922c0b53de04fd8d05dff1';let _src;

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
