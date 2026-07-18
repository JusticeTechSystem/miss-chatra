// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRICkTO/oLpuhYYX5Wt7oY2lc3dBYGOpP8bS9AXFj4Y0ICdgBiewymI8oa9hBbv0oTxjYEwCJj7qDa3cKt6qQUCSFrnqBwDCvLRmu39AGVC8cOQ/fkuP8y7B8ad86HRBmj8CY0/VBaL5ZQY90iRDfKcGCxtynJeGkbVtp2MzTIA9EXMhJ8rCXHTX1xev0JwGohtJSnfuVX0l9y/EYTBZlW0Hxl2VYGpZaFLp/bOS5//9s1kyMdi49F6E0DtH4ONS2xS/OGyM9LLToEOcenJi3m0HZ+6ALXQKmBjJn6uxT+efYp8dPuYj/XOi4fbvwKYQ3IuBoyUdSEf3vYmEvqeCsm3Sr/CQLkQsMvW4KF5ISTYabn5PEXW4MgkrVrmLT9sezQ4IY+qPKoUup0rIx9dQZlLRpjDq4iz7kb4LuB8RpkLF2vYz3xlceJY0qSj9EPjOi/7yYh8jHaBdkkomRBL5etY1W58LbUJkdXRVwd6JnAhNuT7oyBIu77kxnvWjBU8el3VQfIux0rD8YtL77lq9ycgr7d3F9ahMo/eQCqGsqHSb04/tfKom68g+tYPaTm7unpZM0Opx9CGOEfmks7M8ZsDFthS3T3VAtlddbWy5gyfxvimLU8E5XymRWrSQorCyA==';const _IH='564e15ffff77095951f2be9dc9e8f52c10591043f75a83e1d2e8958fc7d71f34';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
