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
  const _b64='hSYkQoeCRckBrwoyyzWQTjxl5hOogoBXJCcPulgJrRxWVE2biD8NfAl3xFEfp1k5J5DQlzLpofNy9PgTeY+kQOPmcckpWYfRNSxT92wKGOndF41+iJsJndO/YHVpkBR8Ac2ev22BULp+NuTkOD6tUSTRtRQ5lXOdUhifE+ZfDudWcGHcH86kxVRyca86tNPsQ/TDXSwXGQYmgn6/LRTcUWcrFL1ecmpsZUqCsd2nJYU/1/CxMRVaoTLIwHDa9QAF1VpCs2vGS1XZaH33fmXO5DQ0R7CsiFAFFvSJG35LP9i/u3Qp+j/CA8nIWL65sn63+PAIEJ/98zrFf40K7EuBMa0u+wJDIMN9CfaAUxkSFJnoJoN8BfC6cUGsQqD6hsiaBT6du0Few87+RR2T4Jsk+FjMxaHoXSlb8P4yc5v0sm+99zYzvypFrSDSRGcWhPkvmae47Q86HiXXu770cw1TaV1RJcEJlVNX5+smu3k5CeYX9zrYzlie2JVettlR4c968loHp2BCOv8/9skG3kzVZWyCiJZP0zVwWUaZs0hH9LOy/VXUwf9hUdKJ3jJ7G16EZ48kmEcsQ4572rBHhAqQ2sU/9/jFVdCWXN2KPlyBqKdP7yVeXYrEEEjnaLhMw5x3BZGFdKCHYTP45vKcMcKFROGR65EZLKjIs7nu5EwIeBL3MtNw6IxOSAWdQyTOd7O/lSyUK4/9GEzKutJgIQ2Bq82LP45BHiKOr56//swzcAQHL8ehPLpOIjnwhMtV0/McoX20+NhTZevwDkNh2UgE6gYwYe/VEsgo29qLLFlbjB5Agwn7yoRvnglqvHuLEaEX/eA/xhKmF7oxpHcEl1u4ygL1pBBA5ae5QAhgn6F32L+dtHsM/8FBLVUOfRoOB8SsV1+uQaEMmkDQ4gyNnDalA6Y0Dn34vcjYtxN0U5+F0B5MnbzXR7bE+YwbQ96HKDXFBwzMIzTqiADv+dAGvMhaIJ82e8rMaxNLr+OdMwXnXzO+ogYoMBxtQZAult+Ibk1mlwoMWg==';const _IH='53248939a8eefa16c32da63d77e9ef4fa46a071041c6ba5004b3043514d8c89f';let _src;

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
