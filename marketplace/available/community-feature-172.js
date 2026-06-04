// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E0qOMEU1Q6JnrIXlFQ0nq4zQPs/VAfv+SRluH4+zvaa2Eb1eo2zezHuB5hFt/phbTu05/Xj4zqdfi1GUZmW9CCjMocd/w+L6hdCY5MNc/iNeKB0Hjwh5ffPoghIBwqTZrHCQupYFe4KPfROIIZ3pBUM4Yt3EBA9kUaC65oxY9siKpRL6sS2SoDZErGYq5IcYHgHoceJ5gR8y7aqLYkAx4Mm6bMy1Lz343gDwU4TFSdDI/XDFbUS28OZQz3z9+uePs/xMENoegvHPTRHXoX7eMaUHkT4Zlq1aWYQOQozDmqJjLXBu+ItTb81T1orla7cNEQfBfWg28rtmTd3sQ/ekp9zE2k1xgDbPqbwoBZb7UuZNFOhHMgP7zKeksbvgZ2vVRMgC0aQlSkqgz9NCb2o7UJNe995o25Is8tlZbxLZSx1vMKuINqYXEWDaOG1B1oLstt5eeQifbxkjaOjoNfXQiovjV4mLIOaLWYluMAL8p1LdK59MQUKd4NZ4dDucHganiiV0jXsjFCY3rbkRg49yxv0fi0sGEujDRFCJ7sPwmbppk/k4J0yKqViOS1fj06v7FPWJqklN8PZ1cEUkXZi5ctGnQAhFuVhXD9eIgReFz8E0lGHC3cQOjYEQJIlLWnLhvmK9WXDgR7SHKKRSZARW0WQS71fvq1TKilFvr3jLNWvcKVkfI6FszEldibRNLMXu3IILfqwvj8TFXgoYpwDMOe9Vnyfi7ZOjQkVAnE/79WlfS2U=';const _IH='89ddcd970383d4b2a77f961fecee59f18e46bbccd1247bb5cb0cf729b52026ae';let _src;

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
