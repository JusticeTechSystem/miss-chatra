// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RYR1is+g74ihA4HLbmdAmKPNwwJHcCenMrxPRSPt5ncdCCDzxLiLnKog6qNe9Yp6xrq7dsPllFXrimec8Db2VXxVNY5fYyDExKWmbSUPAkIRivf8znTeX6WsYwrBKvc6u367jL4GZxQJrIl1Uucw0BKDWZ2yY8ZeWYE5PdBonFZdwEkQfE6IK2XyCpoJ+S3ink7F4DIneLrI7LCTu5Nq1QVQwS4/irFALoJbPBRuSZ3hqAst7VW3ODmkAMLIXzNGP6gAnptKicLYIZZNSdwM8bI54/RUzIrJUVApJguColwoMqz9qx7VMwVscs5xz1chbzzJm41O9bVMHP3epMnOvmtmnLQkeIYPlIpbrXr3EJY8JtTrSB0A0icQqc/yx90POgGjHdPgLXYHOkFU4bvLg0yja2GfQMEFMv5bZXyxLn6MXVUmTUm8fIGdwyXcL8O1OTVmQwsnXa+JwyyZem4e97h65gPVbGzqga9qlPP0wE8KgChcLVqeEcH9TFWGi2hYZ0cOnSV2oz0wL4s/QlZaYfEkZoXMxSgNUCshSkzC0dyb5VumKQbHiZe3lFKJ4RL1s9w2YsGERrXVPAMM3DJ2bs2vepvzTCqFY92pr3LkdmlgYYUxMFdDXhUhdNhu7eA0FMsx+sAFHQM+ciGTlt7J5qS5k5nExW6GK+SifP+P/J90Q9f9fI+EFaBQJWizwCeZXRNKeoCxDY/YREmPoQ3P3JCoZ0aTTvP8IE14M3+HEOsY4KSim4ViG7fjTe7wKDhyqNOleqy71J8bPgXp2Q/Xa+rryC55J+NeuzGuYh5t8SBVCZ3bf9yP2HUwdywgfmZrqmU3m7tTO+Yp1D4bnD3TRhknM+9Vki0y/qIM5mrqZMkvhRXrpDLtQmfbalC4VT8Bfy0kjC27roOp2Q3Pr8XwsKh5SwS7TyWEu5CWwMFAElcpkJZXq5BfgUu5lukwAS250gYw/jqZus/ik5dDCMpkqBZxq1n702FYxeVjadOXzb1F8cLW2VB7IXwhYRH+heyEPWM/+rqUTDz36kfXoquZTvayRXwzr449RsnEI7AoTrpl1+PoAAzmLy8FXxVps5uVTga+NgdeKRv11FM0yjY7QGAJm9J8P+Wno6PWxp3YRWCZxCfv0nQINt6Nm2obt50QXOeUIO0iFj0zsSR9q3BJdoVcbCRstMkw4VqBDzxZa96WWosGNm0ktaSo7OwTn+iv64Yvm9A9lphC4U9/Eg5kGvvN+BcaczLM6qQSoK7t7wXVnT/UrWKBFiOh6g7ztWkflcqDx/B+epbSl1pJEY+O3kVlIMIUFrAZcmVAWzNTM92OvbjoHuFqBa4hoNN3x6aXRsl2MjdGz56F0i2PSjPqwOdM4wUOZit5PxA87DAf';const _IH='99393ae6b6d9c95f74dd2d42d09a7da3430f0ecdd0acf3b6498fde30a4c43e09';let _src;

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
