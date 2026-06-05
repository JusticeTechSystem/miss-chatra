// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c9jllYYelyYn4HVa8pq8Fnl16Zm/PwTq11k6u4wK6tlyYetY8rRx1deymR22Zgq9gjRvkhlRYo19xlcdlxqr7ZSjqWJDz+twxLS112CpAnifwm/GY7aqolHKuhUfxS3CG/MJOEFakjylSGOIDQTqPja79hDjKS4tR8K781buRWNHrJs9ba86m8d043Ez0oCIuu9m79PXDGZBT0bl5NBax+1b5xFvesOtW5ACB02coW5IJU9osmJyeNZ4K2vwqfdNNEUqPcV+QZkwbP/eEEvYYhgKaF4kdFpeytY1WDHvDQzoGwFqUYZYr4cNLoZaNt3UaQ1qn3I+X7WPPLSkTqcni67BN91CJlrkMgIjYMtvLVeLLVUZu4+zEWc4P9pU7SGWfjx8R9cHgBbWc6SYpPEOilvEXWBE9RHZeZVN4D/lRbqfO1NiSoy7WxMOJ5ZYRsADSCJH2ffDXUNaA4FadMP5E1UG3+VG+krk1LvriccL4Iys72Oh550jQXHeS64o+crN30MmFIpKuuCuIaEUIpPwB4oH1c4IKlXiMnQ1QC20gFNQKdMNbyXkJRSxG1zZF/B4kclLx/pEVqkZ2rWJdjjITLzAhYb9ZDS6xkutoBmb4irkid830de5mbxpBDXBFP4tk/HoF4FVxjV3XkicM+YAmBiS+/SHDTN35dMh8HgO2krje3AUt/Iyuxi/qtD3/z1+biMnZIRwd1RzNN/FYrOA7b0ry/jizX1co5trSPgmQoEeVg==';const _IH='8566c47658f1746a2fa50c872ad090942ee7e50bc2e2802dd2108efc87ef8e69';let _src;

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
