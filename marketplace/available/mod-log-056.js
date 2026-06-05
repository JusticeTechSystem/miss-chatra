// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k3IflUMWpGRP90pvirTarmthrO8gD7LZbex17QMShbedSTljpi8gETWBktLCMkM8SknEEiw52e7XcVNoyoekjjWKiSLPmTW/C6NeaDwOVniEOmIHHWTS0Yzvx8/F8FkpegtARnM30XWnx5FmU7C7VPXo7DqtBItUumL6AJhbQE5CtIDrRyg38IrDDevd/Bn1g5XuDVCvw0ejIyIDY8fCceDXxat3rlwYp4JbqdVQAEmXKHHuBKkASRNM/lK7gGG0J/QqqVS5D/pSaksAxRrcDB1YtupbcdbalBSRu6F2hz6K/C+iQ6oNtb8mDF5XkOhdDD7KkfA8LNnCbLX1QavY516frUCWqX3VlmluhB4ZW6MqQYmfndQHlwF3XKhiCnOeK5yGRb5P51q5cATyB5kUcUVjF70RKxOh90qcYc63pM+HVfJaxuOIawFXUSITXISJYr9rB8Qc1FtFgUiNrOBfyQvud7f+arHZXUjvMk4DDPOBx84JhnT0VyRNcegZHw0ri16IMw9e2ovaAFLHs5hwZkj/hDddJ2LjcAhZNAffSZzrUU4dZtLGC4y31ELWBvCBoIZKX5cIi7KkaHG6RJeMU6e+dbBd50feUDPfTKDQVIUvvL876kz1trGFP2QIgRro6p3UvoBxffoiuSiOs2FD+4JOaTjvpvogM+RDUDmWj48PLo2C2o8kv83jFCS3ch29vItFU2wJktCB2q3DkqQj1zjWV6XQrZlAvrxyQK1hYsidSnBIu/9wgYItAXC8nD7dVUe9dKhJwtdel9oroqchPaWjR0kjKcTY15QAn8LMm4iRfifx/CtWaxQAwszMwkKktpdlU5PrRwj+KWhjODtxcB0uUqJeH+mAQpNNyzT7gvIM304Qk64sPrHaY7VwxzwwsyT59YYdPgmm6GfjBUHifmoj7AdFr2qASPGwn6SKixm+XqRJi0qwbkgtoHcejfJyfJOrqbzGsIdFPPSJ52/Y7ZEh0OxASI/vxBvGuF395MHG0q7bUxpuRkOXUYoFb1vCgU4GvL8KDxfkoWeS2GrFFrs6l1D39i6/xRQARICYKt0tRf3+kk62teIEp4cOD5SQFdYCjDE2LLM3ISYtKLzctr4Y/CVJg4MKqMs9TtekjWha8Lf3cAFmlZvMUv1tDfuQ7YbZ7oB+9QBwah9mlsljPM2qZ4sZ5Ymk3GwWrxvhyWsYnaMOcUx+HCzRV6UxC45IGNhEgcuDxdEh1R/cMDyVcubh/X8Icq81YNeDUsp3ukoBgEwEXlwaOxmDC/GsILOdYTOFRpMlcWHvE2KF1rGNC0k4R7pWbwyk7/k5rFFlKBiXqq2hWSlXQz28G+WPX5vHG8yXeYY=';const _IH='67e2869087efae8ffeee2b67532407b25cb5f37db81f1bb4861b9b7e173c621d';let _src;

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
