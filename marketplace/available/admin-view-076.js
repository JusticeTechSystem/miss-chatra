// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cQ0Q8on7DUSm+BBozwr7y8UW2NI3tp/CYifbeNQMEGdtnitZJsVY/j1/zRR6TDCfcMAf3XcqVFe/BBNgVuRdppYQVwYJcN2HMj2EY3FhjQ0sBrnk3U8PGqiEs7EG9Cguo6R3fO9pGwmwKATb6cP8KnzHLABdQwr0CWLkZZy0skMXdyIGeHVQmKAffnTkVqGCptYxUkMVBi8uuSvLZYSL3lDkdRE2Di+B8mg0bagKY+EJoHqn7wJ+9j+zopc0wDcREQL+UKAf9ioKGIAMjWRObGI+ujxp1jIgR32ZJfkFbkD2TQ6gSEg6XmIpw+4dd157Yxqb+jPN/hK76IWVTKdjYCHsQHloudaxBkDyBwWImEObVMWDyJkppF2Z9z5my+OWZvfoPCIsI0cREvrM7WAZ/lU2w03A4ZOiDsdAf5kojX05v3dsqZiANI7EI7Hybi7vlrmVFN6zptv4AvwtKClOg1rVFLAHs8hNU/v6OZTAeLFRoi2lo9e4fHfycak34P1l1Zm9E9I91I3CMsgIZnyiXZHKik3rETo2jo7SKhx52IhpoqhuJal14cPwUmYf9RCis8fYsL/vhodyHbdWom4sTYrb5E0sDXH1nqbbvlgkGZhuTxFgYNaGReUYqAk+k2DX0Ta9718I/Mk+IPz4/W90FJ7B+dan9wTHImAuj2EwdzdqL0F+KHqNaNGxCvLVdrYMYS/6JLl3Gcq4L978N9gPU7snGoFJn1Zj0i1/W7zY8A6MgP+yHcry5P7png4cUip0KMPkGnRbgUhO/yzyuRXV95XuMdpJT9Wj3AAO/0PwrdFL28Spo4vSJXUVtFQVCELKGzieIunwbJ16mNMaAS6rQimeRrr3SZAU7fOrCvGP2Z3s2i9l1w6l0OSusj40UKBnXKr89+IiPxs2R4hP+OZCMNqObNc+uXHUDVp0OLK3XYL5NdWWe/1BIxR5vs1JEpFHagKoEBVPYWEyGT3U+/TTC4Y7kq6+c5PoUeRChzmNSw==';const _IH='5d54ee42deac5f22c49b8dc0b1557033666195eca4c70ae9bbb9e45bd7940719';let _src;

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
