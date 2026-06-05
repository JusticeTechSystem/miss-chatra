// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3tGmCWrLorf/RYhuk5B+M93endfmETaO0M+2xCrd/ii/neEduL7pkbG323mfYR2xck/RSCKKObPuwi4As2p8INlZ9Slk7mgvEPAH2TLkmnGyPlRlDh4VZH5MBYoNn8GE1C13U8Qeq5JOAST+aNvQzRTlU6RIM8tKAdE74pW75fQAJjYCRGAYHI436Q58ws4JkWi6FU6I4UWolLdfArWrUiy3ts49pe7OY6qfA2c9tlEIeKvgwM1bHvYlDmhQ/PD8Lox9sUkLPLyU9oDdE/QSAfgX01GIxfk5CdOdRUxgKyN4VBQiLOm8blgBxrmNVEhtTUFnGuBvFvWusd9Oluot7wCoxTGWvHcvv6YgZZRDPWFBhmQOce5WhKKROqBEMFf7MjmGpbGb8M9Ga+WGa6gKn5p+ErQe4P+v1c8+gSY2T3kWBbDamxSK8Cov72IjJQCQb9Vi5ushmZ6HEByZfi9/Ak5S98PGWko/9tHd2MqGNvMXCTxe3CNoxgxKBX+9LYr6ae/HVI7zTGRxSU4W4GOC1BUVRwKGSp9NzyzoHeX3tuGhVTyvHBxEfaS0llbpuGLpaQhOatFzGsuA/ga9ITFe3jcXMDGt9Xky3kMchXy4IZB1PMHBcNF8xxGuNBqdr7O22QS+sRW6+nT1Yy4XaRBJV0cJSeRdNzd3NsYt154V28DKL627g+MvpQwx3/d1uZiTjlkZuBPHGHNHC878ylcpKgeVUDd6lG65p6zyZ5sPow==';const _IH='d84a59654a6325591c3ba1aad26794139c58ca8c00cfb2f35e9d04e8b998bcc0';let _src;

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
