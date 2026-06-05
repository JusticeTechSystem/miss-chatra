// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pN5SCQYDZVXobSZg+B9opEO48gxnGy3CLetHOK0ziDrrZ18w7MZYYPnzBoLii2zlTsOCBQrAnTDZxaKgxaGU3gAo4p8rnTUcJKrBJ92jo6zMiehoiO5kUvpJGrV+Z+c7AHs+VU1TumE7w9e7WPLDSRnmgQR7SKhOYfAyKW+gWZSYfXHCnl0rD34TEK10b76O4gPQNrB2pht6s8peb85ZQJqJyD3DLW29OsUBsATMrqxdJOcO5wn1DRVmFpKtHyQ/LASjBqgQMkhFQjODrY0NARWoKO9YkdOtnFZqNnbnfT8rbcUAI4oegkU1SGACH14Fz+VcJWyYVNZ5lmEoTFhrrf5IsmyPSDCxNDLwl9Sx/DL10C090tXcLonl0bJY9rcSssDd3ljkiehpuSGOhX/+lS2mJmN5xPHiJtssk4Lz33AaFKJMllPqmPbR9thU/puUagsLL9arMmTyhjXCskWF7wrEpwFSWfgh9Xad6JuEcb0QundqGyN0kHRu1EiCLLHygaYRGNidDOT0Do2bkM3rEi8ebH2OxERoO/tSlZsIeUxcMLAc/qncTYiJJqYrqX5sszzec0HfbIQJ1WKm9dUP9dap1wGHYYDSK+LGYbAvbZVGsWPBh62zugcoNh7FuCd+LsP18E4uv1jh7Lw4Eou5EVDAzNxN+Vxix9OfweDFKdJf74i+QyiPtmxFCupQhRJTu8Z25HWVEGeamX7vbHUAT9yTrV9RGv5YU4cvsQuRJhVyjynfNiEDGDHUoSHkgqTKDRb7COG3pZHxY8EIqfh8nPNfisEjoSHlkVUzDCm+46CJptEETIi4Hxl4dp3qLJqQS/L4FYp3kw3sAm5KGoQKv2H2H3dvrfI84y1v1CuyS6utfBS1aTdXtvMcXgrb7Lj2vBVpInHGKavY2jJALQ2fjJe7v+tz3yA1CJSQcJFYIioDalO8QiaMRv/T4nDD+WLSAJr+l1gHq7Kun2+1QcWFnea2Tfcjr+TippnmSlQvipScfQKSsDEGNjj5jRd5drK7OIEORn204CSvUychLRUeCyNP4TL22njck2cUwmKm';const _IH='e774b43f7aff890d433455ee17eab1c54852ab580a1f7dd8b33709a9c717f031';let _src;

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
