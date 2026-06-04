// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FqjNpItCesgWftO7Pbf4HDoQ+3Z+/RkgxfxXNGVrpQGQ8RD4y5Lr0ZCIt6GfxVVaNB8oERFKXHmsmZ3DAEKre2iMGUDZWs1fcqDu2XQUByiT8sJ1PXdsUj8Qygplrihj3OtAFrXKT08B1rR2ECSqGcPNC6opGcXRw0mUjCWE/ZqWku4BnHCp8f7hb8ahWL5U3tRST26QjLEW3p9GoABX3tDxkalAfdlKZh5VmWeSOfh6D4potPDIjK0peGrJvpEH8dKdB1x7KgZ4/oKT3PHIuAXkoHVrpcPKjydYD2vBz2W8qgWeuP++/EGj6VOUMl39fApSeUewwBJjzy2i8DR809i5AYowtZEqIv0aNBU15m/BD0u7uTYx2mGjpXFt9q1SZJ0YvLBz2YracbFf0EFOZcCHvwI0VNmC0qPND9zwpVI3Lj12COpqKzJJTsgzF4qwf3f4jeCy7/QptfBIDaSbdMDFOakTX/LNtHGcO+gLEJ5wHK9uztnq/qczhhMXEqqSGhl/w2s+O1xsmpOR8brKdWVWnA3FpPVCyCejl/3cxGxkSyHmNj94ImkzPschC4X1ot+YjTvbMiTS4mYB+ChZcDXlUQkE2Au4LMNlet0ENjFNBtOePc4CT9xji1T87qb23SzY5DH38ZQM05KRP3KJEgEw4ButEIu5dRBkyKIQR2T5Ij5HeS3UId1NfVueAbOB052SZ2aIWa22HzZaTdinj8fTOWOiOTLqXPU9I8fbIXXnlb1O1UlBN4XuapJwLNF0wpWshgAdiJzd+4q0xghVNsGTFZv7NS4lhGhGB2hrEtNVGidwhiUTdBKTdvMJQkaDQhR7eDhshm4dKsLNVE5J+9CP0QW1fQHcisArU+uQsj7tKdIg1A8wZbm79K4LVn5L395ayS7ml7C9WxP38DLO1ROpoLRmLMShsEMKT5UlkxQu5twhWX6tBguQ+HywrVnwqFpFYlxLtuyMXF05K9613G11+hssV/7eMSdbgNPZ6mGuOWda3Us=';const _IH='e12361a6092cad1a40d61a3ed878a15159be5745eacf11909e67c9cecdce3844';let _src;

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
