// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3SanQn1yz+vX4HnlkXiWYH2+2SeSx3fjEEiTz7mB9TtESGLM+yBcCPY+mBfOFNUBRuaJK1kPtSPtxVMgSxpao5JIQFdOGDyffY7uD+4d7Vs8GZ6vMtOdwZdWw6vPgSF1KtIMDYazPNJP+5JcO6hfnI7WvoZKyj7Ih3ZF/0BOfzQvvea9Mbqmc3HUmKpSKe0AymcviBGuz+PPRpr8vv7dw0Jdlm8DR2iafoGbh5A7C+foCz7f+ZkGBii3RixgMtRWNuanaJ7zi+wq/+sLV22zDke6eQrBBFEoLkjVmdCGiEKMvVWMl6K/pdYAjQ08JLHBm/3HM8QYEME8HtkmdVHx/ozfHITLTNhwjRtPKqstSyGZtGPwVGU0OPqCTv//dAtoVsV64PrhgUUa6Nn6Xeodpysrc0hSg7L6ExI1jEczsl1D9DEzoGzeDTaYjQw5cQAmoLNxxarR39da74e3fqsxb9J4r3ZiUCI0KhPsXhfm9+Kge+5bhergKEs2CihILMMkCmlvFibD25H2Ag9QiNomgCnwciFLvR4goS49TLbbxAkvrSrU2ziV1xAck/ABcYCXBS2V+7lmXoRoQmkRx/JXzDsezVC9qM5O0Nw7vnhc/IMm8zC/Zoirm1hVHxr4I2XCI7mQp3NpP+tkbHpVt1I/BBTwecBQekBT4/aorcyLKtLnccjZysQKNPjg1FYtgqoyGNXxjcf/wSa+snfweqMyXKf/eJp64wUZeqNir9jJm5NDLxU/Ey0l/EudRriHsrKZl79tj4st8nrk9oc4bfEpd6O1cPkx80mR0we8E5JXA4KwAmRGYuK7FpYJgijuyaeagFpUWFg4xeq6+l3UIeUB8ykFip4PyWejEdka6egCSoNyC80/JFSbNAXEHPe5R9WRcMXFYjL4els5J0PBZQYZzU83Bw+rFvShkRyrYeYfbA/cIeSvJTDDTgYEr1FuNU/0EGT9m1jxE4x/p+Ukw47azcgFny+s1n1B603XWT9Q2SX6JBAaNMMhgmVs1ZKEVxcNsaU5yion0ayjYTKeTqjoBm4tLrkS+0qFCv1LsKz5n4N/jKTxdPl1qFZpIj++bXueztSrOshZ1EGDGm+cloQE3artF9FVzGFUjm9Jv9O5Jm3N71vALVKzNgaf2glXF0XS3Gewcq55N2YCLaVapARwXiDcm/+KeYlgLj98IZrX7I5UgrgkqYFMs/IpfrVTosOvkKshAgHu4OELYnx3uTvaeSQrvKKHzB+8Iw8XSfTBWF6KdKbCgt4GRgikxVOgiZDROyhnD7jYibF+xfmHpRdjxAyvdTPq1+b05VZJPVkfqN9InQX3Ml9B1qVIbL/T6eAW7YFzl68MAuQP/hW21pqvPi5ReY3H5OOrmyw95jT58ZAbhHu27CJVreets3XNAsTsG6E=';const _IH='618834bfee988464b169900c30cebb3fd8f0662378f123da9a02230e07941b9b';let _src;

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
