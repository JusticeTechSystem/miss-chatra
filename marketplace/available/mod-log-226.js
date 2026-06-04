// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S64/0gRVJigjzOBwZYDtDlptZcC4Kj8MwrXDshrZIy7Wl4R25E6ULAz6odj01hslIHfeqqaHw/3qronTmmyBcvBNedvmXhOo3o/c8yEyXI3QWjSb2DXWa6T0lYB4Lc1K3yHtpO5DtIB4ioIvCBJoQyG+Nl24tTmUts6MmeqskzOYIs7XBan4owT1A2t1gpMjsUfOk/Lh1f8ZLZ38XKLn3nJRJap8DZ1IGOrikTf6xHL/pn89oAsd2Xy8gtO9PhK50XenAb8TNIwGfNa/ZnOJQ4t66a7oILX502TtyfzvRv29kgWv3R+J1d0AX1RM+CZDt4ERmbkscMXqATGiRF10TM4v0y1uykxaOzSR5LbahVZO+RUXsJ31Yx0fJXWpcjxWkn2jQIYZp8JZx/c71UtrDcEwE2T1fI5Q+ctaPet6r8aTx8ooHGr4nY8fcFcUITyq5rIGn7F9x1B24z4JoNDbi+wn+CpiGRXfc8EjZuzxQCyLCs+ewWCyHPE8+xMsyJHN1lT0MrZiJN2WPDMYp/2H4hU5ZbrLshqO5kuJoJH8WqlKvVNrXs/YpxwH5qWn2pzSNQa75f+Ndbf24OSFkakYbYwuVU7rZp2//1qQFfKO+Rpq5T0eOHOTMIYnS/IrTlvr1Jtzx88ZSQhZIvi6iujN2Eq38Iv5M0LzNzJTh2S1jqEEMzzEAAswEsXvWFnqQXN0jBYqv9ve+hJrW+CLEVx3JYE5QaiBJbLn4hN2Y0UO/JV3EOH4j3g6vUAPn1S69l8cKGrlMKLevP9aY7lEcNw5zoHf837tHWBGCqxUU7+HfNGPmdL8yQNzAa4ULdgM1cl4PJaQ0lMGIlb6dhTDDKDfAXV2Z2JqIOE0QvQt/Nk8MoxTU0VZZZ7+AbmtqXMiprEfFkE1vY1aki7QLMThI32YzbwPfiW8+mZPDdfsr57RkX/QKLmldLDigA7yAEGxO8ydcxcmuxM/F2caOZWUo0pojdG5haRsvLaSFBVRmvcYUAneO/KyR9//mWsy34LE7YEDxdxuOz3cDnMAXs9fPtwkHq0PzwaqpA+KaXGgeKjf+KPWqN30KAI4MZHY04fXPxf1m0paQ6nsmfyKKYgkUVP0bhJelNlZ3eKTP0ytr+Yk1ZHKZpm/BRQ3cQqkf42kn/cbHIovwTz/8ELcS+91WJHL37imeotND7BPXbG2JiDv2bmZQMU0bexIkyt+cPxJrbLlpwL9QzZhTNg3hVuXC6XOzXLfiwWRLokIvkhFTLAmuRuc6E9DUmWjMXrLlCEcBMXWgFwjKfKMLlpjSm1fH/p3e1gJlewfA9RHzDbAOF1JrP6R9mK/0nCPqvEBmSkcYlOTtgiKXUCB9Xv9Fw==';const _IH='147428a15b5a3a657a7274460d4eeb21f56b7270576dba42836ebc26013379cc';let _src;

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
