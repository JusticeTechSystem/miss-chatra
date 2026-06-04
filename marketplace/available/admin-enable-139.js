// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='je+luoQvPdJGvkNtTaQDgzLT6SGQVcj0jZsO/QVg09D93r2UUlCAyOMb57Ln1KaSAKZWxYgcsKCBDI2sPDXmOwsSVkvMIe01sApgRf/XYIoFIF+3jTL/jmdvU9Wd3Bx3fjyOpzGCrZ2CydJX7eT2bZRTAHMDVOViIozdp0xsFlYP6WK4cqbZRXQ6wU3kcKs0SbON6hYCEAuTRsolayk2LZT/lO8KtR50Jb1lJOg/eNa5H1uEaRCveUrgqZ7a4Z4EsXbU45eBTlQWhDJJ/UTJO9EzHeU8zEWiEhhibECRaHvvbQd9RMZ4m2jUIfHs6PouoIqxsSgDJ5gGXFjT/05LXeTL8ewKnyQXMvcofNk7y9RT+9gTTDGue5QTobgAbZ6RCG0giMUxfYFjCPE8WzFSfDFlgvApF5zpY5AJC8DDVCqcH54uBpSrv5Wp9XB1z5ryVoq8oumxjMJqLdN2OsvpZ6lsmO67HYvDKSsHUmt3dRYeepbLTXOGx/74KkfWxysCo9Z/tHAvCMpk2ReQ/UbBmkKQH9N17rchZrUgPV1PGpgXaT71xk1R80d6eWzEffq16IFeJ38XuCFhHHJxn4So3ByWRJS63eINp9MtESvWd8ZlvKs0/6Ya9BLHudztsTbA8DQXspdzNsehel1FsbvudnY0C9ZkK97kZmEbtwr18pr9uLYHX+1AZRvxyYEk+XI/E/1KmHYPoZ0V6dSN1tAXiYAvzzd9XGxiheJYHdtGU0g6KVemh1hMQOf8ao/H8id/IheNWE+vn2BtuM6SY3AvGEizFAAVMRFgr/Zs51UEuhFehxSWakskXVHYeckLElemAGGj9KSmmX6KW1df87U35hJkkofWU08BMJ6ZvyD7phcCK8n1cu8SZM+oncVWEHc62RMWi6qditbclt8dFgLilQFUUyKy6VEiImbCdZt6U9OjQjtWzHuxp7LUXitAvVjp8AVVkOTR3HqeN5d1nZmwWboelVYGwpNLmkupUd7gBnmD5Ni4uofshum8Ct25lT94yw==';const _IH='9dde65072bc75734c1d4baa094ba7391944b15f9a5cbfe80beced37991176b02';let _src;

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
