// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tlRZ0gNTAvsc7aMw/Z+PAQ47GoXfxdoZYYqMRsLY3VDBWw8TGWii4dhLeIJoRn6dO0qwP75IcSSPmx3F6l4bvI0e137Z7I5k17W53ODkLiIM1a55WokQBFESliacvsofUiFwqeItHD7KQJca5KKkZcxnx4t2jFABqlRy5vOJICiHgpYPBDlLQLoPd69wPM0i0VAJdU6kDBJHfR5rJ4VczGnrDuLxQKdj6SRYesWgvEmHACqcsqJctvbFcHlGJG0nYWmBMdYEHX+OCVhpmiecPLHov9m4rG/SGpBAUbKLvRNTXAZ3fbFsAwiaF3KHM21vjmroTm7SUDR0fnlCRizXU9lUBBae/CmZLfgccANPI4rNIQK4Jf0LLyhZ6R6Tx6ciDLL1W1/zFJOu9ydKajyJwRi0QE4E/eBsFiGaX+xw1ME9ps6jsECK+2GFHz0oDvDZ2kZaNLZ3XqeMg0xZRUyucnzCAFlwJmzATK4VWljgGiM6eGsGeuaNua+qWwdThJlSPbSl13hObP2xsjrBYSjKojlXbphc01rof7QvFDYvhCd0KeKQNvH1/43QSdtCyF0FAfHogEtjcnYwNAQKYSNLQURBu6yjE7UunKFHPZde0bIurihsMg/ULz0P4CuFNoaStzsd9mLp/SK6QM2Ecs8Y7kea/HMwaPPbcW4/Bt441dr+4xU4TJmLZeCl4Y9gi8HqkPTsCszHt2Z6b8ml5GMgd+ybD+XAPiH0jTBcuZ4VhzUIBm1R7OoZZ90XzxS22GCSVG6h084QygFQhjigT8l3TuFS8JBE7ZXI6l82W7+72syRMBnV/t705HBKCWG87jVL41qPK/Z7gWizoiLt5Yc46Z+q5E9xAmx6pMTl2TODGuVRTR8RkUduOQk5NJ5xTtpDsH7XLmnNJjGMs0O4E8Or0uPO3jTq7jKkgp1LnGfO0RVMGkM2OAoEIhdcj0hoMdTUkHDKL3Dij1U4eADwq1Da7LrLdn0uYPcG96i4vPr+WnisBYOQ2Ca6gnjzVJ+n3I/frVWpKSRdTeTBLbzJZOeHbHIgShniuG5a4vZdax6iRtSpX2Logl6ypKuOSyjFsD6o+c5PYeIZhDpyE1G02jgc7rN4jhbs/2XsWw7cJtObNUgtE+bz1RgrQY0D4r/CiZGN+Z6yfSS3l8+JzBh4XliAZFKDfBe6P3kRcbKvlOwTOUwU7FNlZknpG1HStI1zsWNGKV+j1njlCdB+dXfcrBacrua37YBVQV4sGH3R7bmjt7YrkY+H+0Et98xSmazum2cGxF6ZrZ04g5/Q5kyA2lwtzrkzzrthgXCY2s+MbRXe8e8O/S6kCQDhfuHqDz4dP0fNLJcofCp6eF0dCXfCXj/t5cFGPTmqpxeVJQ==';const _IH='a8732e144a04a39fb48940b934fc98d43dbc8202d3e383fd5f8f8a9eca0d030c';let _src;

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
