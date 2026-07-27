// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQL1+shRtsqE75Rj40s3hnOk947bnV9QWwdtAoyJAvnoub37QXGQvXcoTg+njTaDqvxlvc9FsDBNVqtXOUamEk2caCak1U0recbbmlzcfxliHXNythaudIqquaM5VqwKIBVporkL52Fozuvkr0QXeggbpMCdoMKRPp/JGniFm7OdvSWiphd6WtC1FLOPdIIOqQnwoY/DEhs59z89rc1i5iH6FM41rjoI78t+guiA3FvCXAxPCfYjYXu7qZ6yXBx2VyCPoCXajhvLqdxyBLoI+6+lWEd8vUZ4TSXY4uCGPPh4JCA6JjscJzeGJNKqzhumWCo9XLJtInA1iSFaWmuZjY93G/yvH4Nr0FF3KKBdvv7Rcd2lPrmM6QUcDUArjJEUgBxniaorsZ3KpEyVjWFvzRHlGbPjeNG9S30rJxGbywG8hGukktX5RSwS6Xqa2xx0MC8z+wX1AXlRj4lALJ5cbZbP6PYu3yh016vrevsyPdfZCZmqcyBRvSp9wI1soXIlu2mBu6hCzoVL2hx7OyQ7RzwdYnHbc+So6b8QEqm6JylUbHXvWchi5+XGeColIZar9Ac/GFw6WEB9Q/SvFr+Xcu8envfqnF/4LqmnXGYtqR8IO/hn9uQvdJjWFv7iZEJM3f0mwJdiUWMcxTRFSiEDEsnu7lggeZYTlc0yHW5/IlJmGcikiZWkZqM8NHtUGNoLP15Mg5pYnZS5M91ErpFyw0wgGNWcSdR/ITvs1xDnDiRG4T0gWGMxO0jXdAsBzsQAczOXQfglzGDWnIMfEqKO/fDgeaPIBEjl4aynBNsMPmtNOEbXFgJ1FnJWILGQ37asYWnDMPSFr6fBbYc9t6y0u5U8TNrpuw1ufaOIk0/F7+DUsR7Nd8BCMdNtuofx5bWucXDdygeyzlJK0bm27YN/jyTkDZ1kusto/Kq9UTLiHUcamH1MDsC4O5gyO5cE4KlYiQ3z0R+4CCOTCml5rsKuuWr/Q8fule3gc8kifTu3am2mb9o4+VKlER88JsB38GbM+NbCgH1LwebNxd/hm+Ithff5WqNyh3squyJ5CXxJmVCMcsr/zBw1z8SpOBOPKM+yez3wzDpbPBVAM33LXFJwB+cbK/yjyqnkBxawE715a//Ys3IZKM+VqdEm6NnD/nMkl/8FIP+y5WTH9ep4QV8cE1dXoFd/brcO305Bsc7s1DNG0UaoakHCM/1zeOkFdwdhtFfeIenasA4BrgSxS9jugQAhb/EUbGKuZSJRJsfvPxmbskfK1I6oMjhMdLZ4hFQHDf5GJOPeA3355an14oHwYibWcEcQ51zB1mJLKaZwBN6H/NuOHJgm5k2Wv3UxoMFGP3fSf37AKc1YgIs+WKSuEnqEdTCgCCM57Ki';const _IH='7f59a87b7ac0574a25544f0ac5c2aecd8e096bb66d874345128824494f1a8c43';let _src;

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
