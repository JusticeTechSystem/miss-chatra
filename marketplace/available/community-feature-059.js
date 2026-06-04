// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4IEw3u7wqeKeBUEKISGxq3uOkPdUwwNLX4EWG2zDzwP89hmTl+cqVSg7D6rataA+fEn+TBngI5NX82lvACOwrsf5UtUPo8K85XhZocy6Cr4N+obGNycEBmZJtmAjshWpXm+Wen0v8VirtTe5miOxdBHCtdPsV0nLPuUCsjAjUnRY99GTr8kUu3gIgSxvCHwIRE10AeTPFJywk8ysmD6kls8NII+JBJO98wZ/4nWjFdMcGOZEPBc80p4WVij+t5Dqz3CnLZfjey5hwreEA2YhyDviFkjU6JqX99FpJGz1Fah2WIncCF6hS0ro9O/nxAJ2O+kiDBpECLOE+O5/3iohP4dA3sC7rtaTO+2TFxyeHaVMIp7C0vr+0la+4xPScF6i86P94vOBm6wiCVWxf5QAag0JGjy85G1fmwxi1HiXLEZc6Z6VB3lJIXVFcwnTzHK9eMLyQ65wd4k2FF5gb1v9mHh4lPZr7tSij9qJmGpVj3OljhqBobP5ZCcsY8QIwJaRnGfR2y6s4UaTDWXdy8Z+ExVqPkgp3Ao6kKuR5/mRz8r47K/bSBQKYmIM0XRbJbrx72yPp8U3FerC8/FUXDkHP9dZIOst7Q9z619e+M/nZD8aq5qGGE/G2HPTODLEoupyK5HcE7SwuP9MG5reDY6zP4Vw1wLqw51WsLsfnVA81+0dHo83KVU9/fM8hNBn/1UtC8EvqGixp2mnDO5xhvauOijyXSkl2k2xJJhIqbYdMsin1Q==';const _IH='d0c4b5a454c486add5b66b99b3943f56578d635802a094b1a8391ece3aa91bc2';let _src;

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
