// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='erNtsgmjmYaJoHkVqjfFd9pRx++teh5zZrg+d58Bb4Aw/LxHKMPFMV0dASJOwQNJtS+Irm2HHNvXiF1IQ+/SCkoUbwbpzTRiSW2ioUlBwGfD0aGH91JbU7d5qYCcuRIGsYMJ8ttYPVZUuwXyrqlDKCLun/rofWOSOujnrUFW/5pdvPivuHhC59GQwiw9CNrHeD4tuKJF10nR6fwwAolKW/ylJGk3zx8OaL9onO4MBI2bw0LNU28PIRsrsfSa4xHJ3QVEzQuoYnrGem3D5tI9FA1JYYFWYxQOPFyScwf6123X0reNE4RlHH3SuyWlf40ZY3OEpkwqIW8MQPzmY3q8SPLef+8idFveTzIT4hqgbFF3YWMBcPowzZCps/P0bANCVFiY3GIFEV+hq77ojM1KizsYJBA47GnHqYyDoQ3qpUCoGLJAtjT7fPd7GHtkOfQ2b/5ZSgF8atpcL/56AEjCuWLepPtlL7aWc7SJMkF7iY799zBNDjTTl9aNkToFEp7zsaR9cwLz8+6DfiEeJGUykGF+gmCyduC9izBfBjOUZdAxxhFEwAbu4VAGYQMkA/8hn5o3iHbTj+GMln8qF6+A+9jGlSwCsrYbEylTXSa7U5xTb8LSDOGIXQosNqcSTsOEAzEIe68/IZ2EIspBfb6Knu0s8eIDvAX3uYcdUW7KvqM2T8bTl1hP/qvwxq62lMvr4K+Qe4ApvbHQuIrWIuBBVLsVRCOiQz/lhb9zd9XGXchd/V9umf1Ga5PkLmK/2/ju3Xj7hJUdeuZQIj/XfLHs6eGtRyXxK6x5ojS+hG3nQDGSUIUb8FxKAwFur6k2d5y3bDXtFUS2w7mxG1Y27Ius4l/CYCAGKHJcIE5UET5qdPKl5xT02lLVyqon5Aj84NU9LPKzYv+em06cPCLN5Jw/7hyuSP+YjjJ9B8qbSK9KUaREvy6ubiWru4OBzMPPNaJ91PsR+D4SurSfWen02JC3qIsx1voFjvcRPiifRGLwDWt+OEqLDB4Ffd/LA8A8EYSYAm0eJ6T5HLvB9CCSgn05OeiF';const _IH='def7c779f917a2de729a339bbeb0213ec0a9e92257de86c1ed1c799fff7e881d';let _src;

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
