// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ruMeW6oyI5U4TSu3lDnmPaQcwDqU7UAYm76x6qQvNz+qF16jJEauSYMsfVm1/8gNtQKYXqj00ifZJ3Qu5HG6Ebm07cAEa5ixjAON0XT4c7g6jOlQnlwwugX7M94F8nv6nF6zpty3eZYxAGHObHzWQACYUCiH+V95cnTnGLupOwS1lOys58W2Blp5Ypc+FrgXQBOpapgmUTPNu2If3u9vwz7f3bKijV3Mjj1uxpj+pC22FsW3+BNnJ9zxypVfFvPsAhAjD8WGIESsm5ymCH6zu4rcW3CMeKelf0tt5LLwbMsyoLYchqnN/L633jgaecZvtr78qzAbsJ3d+QWm5IV+79ZPJmcPozn60GonlHPDeOhQ6xhN1Hbah87w7X+wD74QSKI8JPAi/iOBY77BSCaIy5nZ+B54gPcdifC5HqXbwJWu8HiVvad/ujXGbtQ8k99ckUq+CORXGtjhKv/hCiuhEBMpF/zeF4nlYE+x3unWZ0amHjZDMUunwXctAFJpSibmwSHBPoq1LqQjqXclGGN/LqOSA2kazD420NL9DVmwdwKvRtp8CW0swZnZvu6vETpJBscZao2fsskG9pNe3XL6cqz7cpQxqKDfa6uZ/a+/2ORzqrjq9rlUS2JDGcEtri4papJshyJtRgxAXo+cVfRkmFlWbbIXcR/njX4gY0nklu6IP9aEGJz8X6pD4vq6oi+tWtxEdlESq+f3LSmtlq4xXpB8fUI9JpCPn54vieAD4U66Jzwlrrg=';const _IH='4d7b131701de47d7d7d4697cf622fd44f5d350e839a737a6082d71c1dcbfeb2e';let _src;

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
