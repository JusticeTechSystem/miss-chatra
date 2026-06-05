// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mj5y1qVIGmX1S0nOPRI8vdA1OwNn9RyIR1lAhqhAJBNY3Jxugl35XJc7Wa4V2jc67fb6126YdCk0ihuIklQj6RF5y9R5S6nAurH4VWtJkmxq8MQLvdMS7J8S3zgbWWv/zzRsW88fYAtQ/6lAU7JlDk40TRIvZfp66e1f7uuP3wrR3o4yZP9m+BrN5PjyPDB3iXOCK5GcpDI5cdAF1s+JV2/KrKTCZ7tS3z+Ih8+GL+5of9L4T7JJ3Sv1jfMpWqtmIL9lRVtR7csyK1TAQ8IcRoeKYaHKZsv1dYojRYlwXL0JTq8Qkafn44RsMJCUtlgI61aNvXInpKNgh/4ZAt1xFKkwpNJAgnM68l2L1OebOIHsmETI+Rr8L53dOYP01QDTfo90IAbGgAM78OHbDPe47Ed9BqcT7G+qRRJW0DtWr/dqnl3nMsnNh58yU9S4pnn5hOiR1eA/mtQTl8FcWP25jAR+1sIDw18ILWtruZ6dkpgx/thWG+sZbk4WoDhmnCGeqZIJ6CCgWM3VR4uIwiwF7IMXeGuJLdjR3I5oTdm8/kc09aDJVHdZEH8PVq2tbEz6YeuTfD1zbmTUgRq3PaMxh8hwH6B1FhuG9DuzRt1Fkq6wfg0xqz/F3WhAeu+hUgkPsRv86e4aTczwjDAvzMNAe+/1GqfTquLHcFabZvjNBAGuh2XYGQn2vOheU+FebbjMWWdl0Xs7eVMOt6Th0M/Wuu54Pgba1ZAUzQd4a6vXZw==';const _IH='d1a5d2a4dcd60177a8d92641b7c697dbe1e6caab5b1af427550aae919b64d5a5';let _src;

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
