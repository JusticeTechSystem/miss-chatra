// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nFeLlKlCbA7nYBIaTH4RqGVeEDlzAdRCh5SI+Vuq6DztTV+BXWQhnTtAPYym3GcZpL0x4CHE9+I7Cwxbnyc0iyg/UvQ/bIcFXgroWhIOouxQulV0xIt7jyPFcrqW7B1k0YMDBYozunk2/jl1pLLsHWGtt2F1MmISakd638gVRSah3gAlzjx739c2jDDiR0W4uC1RaBJpcxi9ryVSpT0GSJWDpShzuT4z7inq6sg7jlmMi3mVXcYkCj3rCzCCKsm7co2wegmWqGgfjMiJJic6bpzgs58o7h1U2hN3xmIIWRTihSMuvybzqFLlmuusa016GGd95Di9f612dJWlrervke7hgTrF1Z7PeG+G3ZtbqxfuGX83bOucHndRLPCEn/D57kGkBYg1rXE+QPIIjtXhBhyLICBz/DbebHhVOmd2L0fX8NEwZVKbZrjy58J/mnWKxFckfM6jsQ3ea0wxsyDG2p0pVR9h5Nxp5hGQp+ynVVxfILpiay1UrXgoTAr3Hx9yBRjOvTNIpB2Ipz2eI7wlMCTvAq9MsQJugUWh/vIl4saksCo7uX2sO+gI3yiMjAKT+QUFBiJ7aEwGpJ2yo6udKTD9obKXtixeBLxVP8er+c9G8OorCGVmvzb/3k+I7ozOAKENw+uAqFzK6J14Y7s7CVao61kVxaov2c12BVrV5Jero5579RLJaK3fwn0GLf8Agam6DnvgaavZn/Qt8BP6UpzZhe078hKhtHwMfVObkALiYe3/qXA9jNqLiaGD1HRwdlk032D0CzcXYBwb6W+i6z7q3X1jNmCh/ffYZbcgRf2W/nHEdeuoMDuuPuV0jk6Czbr0cSgC1kfyA6e4kw+n/ye3CCBHDuDmZTJd9P04G5Rw/+p69Xn2GOV9Ycsc2V5aBz6hgyVDcWz5tQt182pCoMXnAF4/rksT93R3eFq7hmfgnD/vWPrXAf9kebKATNXTD/JJAQJL0R6zQhYUoTtCRc3Zm3MaA+n+ca1fuZEQ162OWGQ81zuyBCkbqhpFGZjYR4dPh6VzXl12lIT2rdPHWGHgfFLlCsV5yKLQpt0rGf0wvIeK0b70YqcrBlxpL8EPlAkMeWKfQCE7HVtwBRHgycp/OOaLQj+JkdIKkkRzUukp9ZQ2BohlluELdz+ces/zRssfMQUhNOw2DRqcIE3CZVOCkcQq8RQdHrQaQ//V4cN8dnr5j0C29ac3ollaJXP/r5MuvI5PFVWvzfQrhjE54gm3qV+0LxNpP5JFti9PzIV4FGo6IOWYVfIkQMf7rTrhduTWWPZ9oFIAtHp3+Mi+1iyffqDpCRyur+7L09ja5cCCSm63R6GMe9qBPHLLKxwyEvTrPYyCeFPd1jsFt8REsgfdoUBOXOcPAaJ+UpwNF8QH+oLUYnXbGQ==';const _IH='392af6fbba4c7bd74fd9bc031314425529f20b64e501b657a7df51b0c91aa518';let _src;

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
