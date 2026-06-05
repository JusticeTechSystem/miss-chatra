// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PVET748d67aI5eQAXWAiYwA0CD15CW0RsNhNtLGGIrnD9/kP7sSYs5nBufwSB2Zs3hvHDhibN38YCiWP6nzDAIYxrJMNV524460+NE/12BrIIE2V3GfYPb8iOyMtqPyjC5AIMUX7qZMjZyMtvWdhZzsENV78sbr135R+UWjX2g4meTJo9stNCfEPVpJnEgA+pRUmueknwCX5wB3l7xcHSE3BBW1zx5ewlB9/AyQDU/P8A7MhUre5cju/chgBuIjJjuVzDXzuANMD0C4JrnFV/7w2K2zhLnol6eWHR7KVDZfnX9olGu2/A7y5Cw7FWI7Rywt/vtd4A/ET6tg7GBAVGnMToMA3msFE11KS3mKHyhr0qnJ/dhkPNifTyRK0v1TK+hoIn1IGDw0pU9vS2TyNOi4NfsykjbrFr+j9vNiZOXJfh6kvmpKTCVgIiZ6EpayYYAt+AQrPUaDh//LQIJR93c+u5n6Sv0PJUjAtqpoofUOPpLhescxhrv0oHJHAyFGLOeKhrqCsahA4PQGjbWdl9jMyjIxLhKuNdOewtUih8hWRV6m7mM7csTOyF9ahqB9J03TNJXs5hOse51T/FPqlOS18qo0QpI95tnYiIUlSnrdwkO3c2x/5n2CTiFOx8D02wzf+qKxWl6QLWvwiYpo7/FyiNcsKMJCCgWqfa5ysw3wSTEpuwdMafXYjakSn5DPPMvNbazuXao45Xheb9YRb42w13gbaZvLaEJLzqsctrKokzaY=';const _IH='686e086b123873653214346c8e4eeb0d1c8173d29c08506d359ef2813b9903fd';let _src;

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
