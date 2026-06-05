// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ibLnJsOqj4bddvV1pbDI6PxxZ7ldQCL7eRuw/D+ZjJRtyf7+YzKgkxxaHZawNaCiFNuBhacmnKzwJ5M0JoaJwoEKRDPSgjc2xnl+LnW50/0ZoakX2ONjPipc/ejkHSyFV/F4SGOZnKegknpv7CYCbHaNeMAbCTERJHMAVU14KEbkRJjXsgDDZAvKYSEVyI27j8GMSASBbRO37nxPUIPvizDm7AZxErSSE76tAPKgM6zmh+0B39s26Z6sxLsfeApkVEBqoyDBpQMg36xSC5bOOMs07u4iXUycCO3vXUHvZQy60y4nlIuoDaIT3mnXdbqM/dVz2hHiVGRmIZPGagJS/Xufg/LHAgBxFWN3umR5uRDtyjRZGXxwI2pP2IHpds+c9Or+mjl8mUQt81r5OyjKlp0edSL1gtNq3a2cOLbhsiz2GC25zr0HeW4qbAwUQS49R8yLz/MIhQduCJ5PhdcqxRSWDw8BBRMN+PMFzvKI1BqpZxGAExSNUCzc06KW7MTH1x5CfyjYVUhkQJdNWryo1aIRrofEqepJZ35/rMvnpvuBgGYFfmoVFL8FG0jWkVqKCKudz6EC5i6cJDb3NNEXf0e97yJPh4mPqWkBkMUYPzgGHuoY+vYW0ThkUZe9LRBg/S6xZjRHQCNE9/v3Koq2DiF1cHpdtbda9I2tWXkI3VcJzjn09nUUrTiEolsHiyDRrcJZsS71eVRVfY4W+S8ftjZA6CJn9j+2LExzUNg/ElnamYp2O4DNLhemGdWWIY1mZUVtRHeWQXyBEtLCGXozEFTvKoo01IBfNF8TCOZQhq7TXwSmuVo7EQHSWfU1lRZMYZxeKE6WJfOWPHcjqs7KJmU3Kl5olyiNbAZxfs5YLcNFPxmhdHXlVRdCwxZL1dz2tPKGDWj1unCcwpf+HgvDFKduMZ7uqf+/+i+m0MoyoCm0OrB4TyNtnU9+2ftkzrmRsObjbvSXnleS03D26X1ahUefcvXPMBHndu0yo97Ccsb1NzzKbPSvZ10Is6byob3uHgH0d7N3fstEsZhpppCYoXU+/eq3S7aP6oXyqeY8+LRskFpUSMRuUk70FaJkxrxztQxEQjMw4iOr/SLo2cCOJnpdtBk7sGfYF4ixj+gZIQ/0LcOODs9AV09Hv2M0kntMvHXOfNUBJBhnoSKiLOGqmBH24f4PGSD4uro5HWzXbB085SlgdhxNBuNPAUJoW8CPMhx/u0zL';const _IH='0970bda0a86fe6fe14caa59ca83a4ef621697187adaecf787a64bafdf5b24d9c';let _src;

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
