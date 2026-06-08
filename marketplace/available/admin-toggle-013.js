// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mYc+FADk4NRnCj6f32wu4SMiiswcAsIWGBrJ1/CtobayK49bQ981QVMMLeAZYZe2RvYdI4jzX9/H2KG+quS6KtQcnxk5clgHHCAVnjlHWexWE88qH5RhGKcUTisGURQnzHFCUuynomzFFEnn8nzhnpe3mP13fIhT/PVakIAHrEOlX47Wdijb+kqbNjCnyhpboJl5z2QKbeqSYKOelZzBJ5pDiPqSuLtAROBKrQvhOYau9vJWfMQwyfe+a+6sELpeN0Dboj3j/IbGwhHW4k4809RgtokryoRRtAMU3BNDGkgwrFffDy0l/Bs17VpZJwEBHk7nej2gRZ9kz27jouYvO7AkTyoSlPgKLD2iBQS52TeaUa3/VCx25V7qmnmdxnsALwzu6R6FmHKR+QcWjo8gDorbLVq2AL3GJRexKjrEQ/8w6gE0Im0q6y9gmqHwA1uHS3mM5O8aEZwG5WDTMeJKnpKi2hgX4nwQujwdH/fnYe6cwF2HalThwiRVYWcmlw1oJS/yUXyEo0LFw3SPSLpugtAGhCSH9BaH3L2OZGoeiP1qY51g0hQBu+d0GCvdb2CEIU8VJjQ01KigNITPGb18D9cYeknNOv/cuHRKnD4AP55Pf6MpedkhLZZxhgwYGghxnwXbdWoGH/ptKcZ2BiYfICz6+pTpRSDYj6/UbF8sfQsNw7Mn0aZaIKDSmwElbqIrUqW4culbz108CtiPQ1mmgFfBfX+fxwUoogjvf5AldoqmvHaNED7lSjWeQvjptL8c8PzD1SYcLDwlRvqQkjyTIVJrufChWyOcR5d1Z59pInbeOUCNIeggFhQxWHY9F7eImAPaYmlgU/hKPmDBOwZuThJ6SKTwdedjYsf+Il5VKeAFFL6fyoKVNpU+qgzPtNHMR2SXnXeWtFruIeDjV6He2RabItjViD1GJKMUOQ6jh7UiCCnilTK1ktHXFZGT4d4STamFyCou8/Snzt/S7nkZwfVABqAkCkHDNdtaGny5SOZUOU+2nYN6pvWwfJJE';const _IH='3f143153e4e8fdb3119f41a717d602bc95442e63755e2dd114d2ad2dceab3b4d';let _src;

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
