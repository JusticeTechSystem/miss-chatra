// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdzLheswNQ+lHCC0sbwyuTCEiAY2a+tYYddLZs1GAqvJ53IFs0W1cDZYsEevKNJ3VAWqe+O80Zw15xESe2WP0yu5xx2AUNVh2i7l71+JbBkkw/3bApWDlRBCqB/IBZv1hRtGYi2NsDq+6Jb12AnL8xXzEaO5y7x57jkBsho+lLunSZw3dhEGg6DpL9q1VOSrA1Wwo9CKOdIH4hOmuMbcS63lAThjQm0Wz0G90HG99vfBIpEdIULZk0mYWqcCVQWPALFeYXf/OBG/WhBl+q1rk+02LardGFDvJbsUN+qpX8yOzC91kmy5jovhCao56OuyhhJ6vT2xoGIW2HHop+HQUJT9KxRHhoXvX7T99FRhovueombp0VyIFAltJwDpwqx806L2uvQd9ROnAj08Jo4Oi0yq6wOUbLI3YMijJPwR7d8zRDTz3G8wnFXR0gJvkAszJ5TiBCoSYzLnwblL+RgxPRd5+sgocVG6wqJaMtpT8kZglb86dwZLSlq+F5Im08REiPuAWnfbUgX8MlYDRHDgvVtDGQtBp3RqM2KMGKDDl4n154MclfFeDhQI7nDUK0BLDWZew=';const _IH='9722a3ed2c7662c27e8b0a29a029c2bdd40d4edfd7f3d9a0cdb1e86bef30f8ab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
