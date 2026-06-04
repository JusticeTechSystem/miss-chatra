// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pX8n4zPM5reSEPAKR4v5gaPglkULpYjiAcFTymlWW3e2/+JDlQ/omS7Lg9W1EXjLVVsxaWhyp7eelFGl458X0JjKVPP9ZQsWfLXOQo9sxiiRJQYpa7lBw/1ltEhm8kslxPPhjVd4u351Sz6hvilzdqT1bpdvOmO/q9V42k6mjCi8PVStb999Xfd114uQ6Us9xxC0orD57gqFOQ5b7EjuOsp4plbwFXrGpLTnWpSX5b92WQIvvjC9SpjIlrgVaKtLyj6R1uhcLRPKIo/08XnVmYYeaSPgAvloWexGvJHWwo2bizR//a7AubACXvMV+OK5Y7zCtSdcGdRqykhaMV1RV8x05bgxZiPBzEOHBhKJ+sPssUQh5++mMs4Qp/tdWgIEuM/RT8iIAsKfWwUniGQ9cQsb2QQCpjUVLuYEJVXsK+AW0hi/YjekWNDfC55yZLAgO6emRFb007eryYEKaw2uwa4bcESW3AhTZ6s2ha+09kQZhjqn3G/NhVoHAqSqzFHMDYsfkhmN6YDD+OMw4j0PwNd+fM7KGDVd91qEyYKS3H2BPSkpPB7TrPizsB6nm9+AlcR5958UoV5K+PAKVqg6UqM+J2z4PKAmys7YviYYsg/iC9MHqllyPDzeQ71k+wuQwou6IOv+neNxU6RiWc71vBmIzUxxlv2Qp0VVYY7FFEvoMr8MqQNJgoJAXBq8g6QXoP71XQwCtvACgkmOFPaUZz1kBvbJ52tKsX394noZGgw5bUwVf3Se6paxu2MCqY2gop/CCS+oN0BIfSzGUFboiwdnqpUUGiYBMsRssB3yH+LgjXN/j/8fNoFMS9uYxkQhjKK6kMNh6uj0xvcFXX8pnR8u40NC5bG0ft/l7mWoZSEbrAPdL2Uz/NUe+gd5ieh1cOHSIrPwLYzC/r1TfzKZbT0Z/J/03n6cyNEhIntzgh0mVuT1hl6f43BhAGfqNbgobSfPcBlkh7o9VDxs7MFY9+vDm0B2nYZyw9IfXRLpp5gf//tEibhJKaxPvtU3w/G3FYPXUmMPYl8=';const _IH='3cbc55c9bf6342fe488246185d3a568dc7fa1c970b90b8fc349b50f04bad7486';let _src;

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
