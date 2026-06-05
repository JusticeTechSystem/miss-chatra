// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g7Pp+Q+GE5TyTlq/tuDZfe1FD7j1QtcZOm+dfAXseaR1iz11kslywGYOjnaEmlonXhOb2z24krYz1hnJzJBlH4Hpb2ewHi9liEOJ+cyjT72O0+HC/057JlEw6D7Pm9281e+aduzyo4qy67Zfzmdph8epWPsxoOSnBIKLnLMdtHUvv1R4/1XDJ+vs+fL0k7CzLwtenpYJfvZZrOdgIyh82aFFF14DuNDDr5rWjWnLl27HwsFW51Dy2tWTxFrlBWaVeJIaSil2B4aj8fyZUgrlxLkw4/rkSk006tmEke36n0U2/lUehSGJnECWkF7qdLfBLfzoCiTVpdgvuKnehv1GPwBCXrRpK0yyJzza2U6JLIaz1F/OdbX5y7y7CSyGSiCdL6WWa+h5K/zcFF9BFHECyRWpL8wwjBIyF6q3ypXyy9skBjYtRNU/OD5OaCeMFbFRlKBIGKvFvsT98hT024BobPX799gvEwntdJcLbh423a6MD+g97VtxVIPYXbRqLtR9EhpJQ5cCh7B9JL86SxSNmQMdIRHv3AiVtkDeFFLKKLLyQo5Bdpr7NVF6oNAbu50i6pXqoZZMFtm0F1s+aq+A0QOZ/GAMl8cgPLFt1HJfeZBpyavZuKEBoEAPZaHhUNFrIZfeitsuwDBLdCuHoccnRjaMrlnDkSYxq9+H5j6cofEZipla9+OX7ib9Z6G+kKFpTIASlAD/qjZ17A4SmQYAQsBSCpAsQR7uAu4yWe8gNOhQFYBMnkY1Vqflt6S0s5PeZrYtv/7XiXkf74/YYp/2G96vN2bogm8y2MgdgZ5x1amRJ/Km/XJgARwqtaolW20Far+s30De9+y//DBNKwoC23wBW+W+Dif53JrpCiWln9dNLlgCjdEb/y3SgbcgZZRmGllz13Lflect4vGXFlnnu0h3CkOleQMNnt/46dE8V8z0+NwExFI6kewJdB/BJ+zCQ0UW/txRL6J3cdrpQ09yOOpncYyyC+OPZY/mED2CcQ==';const _IH='647b575b77fcfd6133b2c25d7740b8b8bc26ce4821b4094ed2b8b2ea5423a011';let _src;

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
