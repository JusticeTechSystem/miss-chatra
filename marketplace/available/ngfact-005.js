// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+ISxh30ntwjIcxPrRyKE1BAWpod9gsaqljQIn5KCSs/Y8bAXksP8aNKJAxjWTC0rOITghV3v4ebLYGsbqIp9dlGW2bLP45vCWZ5znoGYJyoTimplOyMg03R4uGlW10+q2FrYKS8ainz8x8qVom8JeMotxL/hjXrEqvoDx9GMwLzWwcmZwl0lTDGaPd5gRSk55n7sOryFVnS85g/RC58s12nUDf2YLZ0oHo/B2z9URWuWUpEtnU0BfSSn+VFiMl+NwYTszXVDH82v47jnU7Zc1/nBrzSzZlcswA8PkdANRmESxOLrcLSCHwlZ3bFTR+kz10VpbwmDXRk0jpKqzOe9Fu/KSGV4sUcrRlDrJ1Rt6HcGo0FPEPadV1yyekQHS4I120YR4YXdRNPZ4SvxmxzPnHm9DtCCsli0bwjn4Y+P5BVFQQ0+sFQsgl+TgTFojIlflFTJXo1BB7zvLQJA4VaLwwmDKkNRZ1/c3UQfoJ9yWLz4ukAJmfmPUQEmz6HG6AL0PE6N1sZWo18zVCzsTYn5nsTi/JVEidqXeji9opVCRLTF6IhwjGMmR+cG5xEFrsm3D4u+fA2DpWRZHwbu54cFq1GgRUNailI9bDWm421ZuXB1WtVJt/n2CUfqbXRB2wONFaqsfLsm3qx+2kuDdJfg4lw4TEG1l1fzEgP0Xd5KE+RW1NzMJG5jkOPIkUHYpHA=';const _IH='a6f91b6d1a65dc1b493aba3865b3d6cd0a849e6e5d1cde4c0aa23d5870545b38';let _src;

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
