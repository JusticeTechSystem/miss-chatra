// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P7ab+3rmuWXhxyYROCOl1PEyPKdSO2VR7M7W5r9Tn315xwwGXEf4d0zyOcx4seCnqRsMqL2aURDDSOhnhYNR4XJHPY+IMzz0CrVbrp2RnGF3iaieteYuaRi6X0sFwcCHdUSem4+gjvRlBsJoD3Uxu4kJsrXlrT0Q1cbPtnZkD9Apy3d3Hp+xN3wPx3LxyCy2HgLOdpQBHP8hRw0+2y6N6Y9qYRZbKCnJJ8C10MJEe+VclovMW8+AlgOtyJnBNUY3GRJKRYRic8vMnZlFV+ZFYd5Vjc/KAcvQBP0nVmKYyAMkBgFbvfXwQ9IKuAoYhJZQOitd0B+1T8Ms57X8ig4Sh9yyiQid0f45Y6icic2CYEMdvbjFjNjugkEAtAO5PGmwG3PUA4+Gb1eR7Mztg+zS0KokCQd2U4HP2dWZBWxqmtm4as6ej5luhm2m6D5vRqTqzKLkMIrdrrFK5mhg7dnuq/tgZdLUUrTst7TrBrEUYT3lctgjXk/ZkGdcQ2cnpcONaw2eBSAF37nneT2T5UVhh/oxWP/cBxvYAyFKa7QO+kopRxo16nEcG8POO+lOJmXIBnTM8cro7jnY+AuTL/WBVMbjVqYQnlzxe0idiZMJ4xULblLGO3d7AEdxbM8CFQr81j7g234B3XcPQlNniRQO3uMdmPjTv4CSSFg0h+Vl458siHCRPHFulYfQko+8j+FQGBRRVuoI1BXfdSmGaQZJK3FjgbTftRQLrWVT8RF2jV44aEWERLFRa0fEkzUO2LOT4kzkQMbLy9/k1U0NSxnuRgcwWRKSW/Y8zYIqYbV6nJeO5maOWZH1ZKCbfUa5BWMH5mEku/cEeiWpn3d69Fe6Gao+rV7RKT5wuUh+DM/hvIMBZ4I4NE/qmLgRjTYzc4AybHqW3WatkTAkfon+6EfDn2I23/ElKlvGkGG5DZ+NjGLMV/So66ekz1bbfGawoeplc2T4qFsBWA7UkQsEp3H83dFMC3FB+PdgzKziG+RdNflQdb+KNb64R4/Nj++NKTnmHbGu1TZ1ciyaT6volVjkNfeE5ITOaw==';const _IH='a899cdf2570d15f3bc36305ce900b90c676f276d1dfd750f7b330785bac37a37';let _src;

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
