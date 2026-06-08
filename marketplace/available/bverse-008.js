// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RPeYm+k3Wf+fskZwfE+NHFUV8yRP5FtlfRHlFAUh5oKDPTB7PcbavtoJ2SintDQkfmGnAcaOrhdok5ODpIlnT7QoW+G0X0aQBDuClwcekHhF9ECsEr9S92eUHIP0UyqG5kcQqakWfIfirlM0BTh3U5PEMtEaKRZna6k+gpOok0uVTXMjphUkiDjrTwIXG1Aeph+zrzUg0DeD8s9dz3sctEzp6sf16ECGKJPqBzcEX7ycuKPizaiRcW5p2gQiCgCBAM7FWtMuc50wk+PF+Ae3CimduPRrvZ/G61jCPOSiFo2gX/5QgWd9OQ+HzBAhCv66CYZ+FEH9rJnqnq2M6/n6wWgM6NFxcF3b1KwrcvPisozsXezdni1Uv95QIpL4lSUDp4KeCaVevl0BpeqHlNBlRhK2rBlH/rg6WfaBpXvXmWbodol22ayKxpUPZFeWeHP5p9gyA9XY7Jh8s6KInNplFzQLjKkDiaR/EoOYt4Rm35dcoWV9krP22jQhp7guSRLP5ezXbh7LLCxu2+MY7a53qbscRbr1yMkYWOidoqes124qoatN0dfNps5nHRcBvnizBDuT/yQQ1lE4QyG9WcbkweSprrX2emM+nW1nXOxrAwCa/eoFwgH9fgVCYdkXbZhB4hRTp/28PJVPmlBv7ZuQkQKpD345Fnp7wriuR+rTiDXEd1NI/3oY8Q0dy6/bt1GZVg0YaPAfj/ewJQ==';const _IH='5a9811e8395b331bde0c33abebd92d278ac765688928da51d210afcb75cc7455';let _src;

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
