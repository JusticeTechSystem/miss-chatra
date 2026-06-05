// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QcVJzu50J0WNeZBLGE/oJtA+Ql63RvnjTrwV3ydwQd4313Jlo+z507zYSn4cLPEP0T2at9sJNIuZ+d9GlQEcZDUbkTMfDhaZDdD+ReRMRXgC/lZ8GinvHVmfq1QoibInA+hPQpk6vlkk4EwYXoV1SUyaylXdajjsNTlcL6XzppALF13Lb7UjqLkqE0sD/HrXhE9KDYGC72gzHNfJBbA0ejWghD37F5WHlBG9+1KrZCHaM/3FXrIfy+kybET0ats4JqtnAGafvtxDSYuQu3mwvvegSU79w8g27SLYJN5W7Y6i8QIQpRg808uabVCXMv7DPaP5ILQsMGgbNG3fFjwHNAc9uGmbwuZH/34mNhcAk5wb/zIWE/cwrofRDE/O36b3dqgxQqussFD+4iDpkpp6h/VALmxC54x2ZSTV4thw/6joqEQQ6HOzi4KinyjmuveCo4IX04padnMrTmENzFTr8KF6+nDpyg9eSbFF/2y1HjTVarcuVc9JO522cL9o4TjH4t4UiEJzGdz0kJXhSvOgE5h79hL6sLYPM0EGfeSPzC+as/PnUg7vW7KalnkRfbObVzEyA28n1VxaQYrd4c/oys2b2nRI8FqouxE2Ik71axRDOjNeBBTnB35R4E5M7AuCw43J6LdPvmqMkH4d7nS7kqVeugBwZNt7LBSfUGg2VRYvW/JOuYJNRdkmCSm3h0wNC0jbgPZOzzh81c/Gq7SIR8f1dBut9La1ag==';const _IH='e624cc45a854f453f9db961db74f9a39cca61d7abd24c226ace9b942df925ec9';let _src;

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
