// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2AZkK+cYqQHJ74enkvh0etae9zAQPiYkmVQyWOSXMKlpKBca0VupnzRW8nGEc4fJmRjgN60SMGJR35KW9V/opO/OcBmmOh0QErPmGMvV9gQ657I1ZMTUwyFuToVa7mTnvbZfzQa4QvbxL4K6ZZTl7zy6cv1TYJ/69p+iS9daczG66IRP2pF9p4xSWpOJpsD34k2MZ9A3MG8iqUOfBvupxy9Muetow+LjZMsxje5aIB43RbsZIK7/shRBvjlEX8RJEdCr3/MXOE7k7xU8RvuRiZnXAyFQ9dnWicf9YVt8u9m8ywd4tAt/93x2nUJheMz+4aGOuZegJgDXPC09qgHdMw7k7sjKrxjzIqnQjPsmDJTvEW1PolHoCbX2VsiLnpaHiJMlW3MbocQJeoRbJulO6+LtY45IVCmZeJYNigeNJDwWHf6c0UO9cVvR0RAuwHJsG5pj0NzVkzzhq6T+dVj7XmnQvgrGBiYUC4NVcoXttD1wJWnGUSAaXeKnGRFejhToYDnIgs7aU0uYebVaNQR1DVkbWxN+nDg1byWEEOZPjOEqxZDfVNbwsA/QojidvqS77coGaewHhD8Xc1FDmFTFbGu1cFhVHEniwNTLxlNq3w0EZd1OAk52OSmovVJH+y9vfi+rCBLrmRyu3zkxsq5E31xqxRsspstDy0g0/zhpLk/IUuJ3ohfKj5RHuuaRCftr22ElJZc9uUPdwh605NK46PDCNoNgB4pTpw==';const _IH='cfb7aec1930e27f4b66d2b32c9cda4a742ca00c76884fa36a473d69536837397';let _src;

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
