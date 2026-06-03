// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tf8VKk8aC29B4ZdjnibnCjkXMrmLOm27wK50+V75N3htR4DgJLmwgIn+durQ+10zR9iU/sdXM1weTRDp1KP2KzgCg0s8BKAJtwD74M+wt4GdXAj0ftZFRIY5uT7uLCJnEi26ijxUIHgx9fFvcLQcAty277UH6fsOS+LCK2BFJmDwrwvJiugRyHqeppLJECbFYhtMjB90m54BT9YkcgkPXuprTKXDFHaLVUNNPX7Y5sU8tNu7Sy7KA9B2R+PwqZDG4hZlqDSIDX4cNJeRDw+3j6lnEBuJreKDRKSlsXqXJu0uyNbUWr/Ej3uPYfz6Qui8S7DUZiCVmxTEIC1PSst8vQdt4g4fQi+F+m37f7aef+/j8R0xbjdjsq/W1pNciG71W89Ypvkh/xb972cf5+IZXSk69M4fciPSmdVPCeaYnSCIHnm3f57/ROUlKK3tuJU5oZFbCOMkEQ3hJJFBgxA+TmPEHO07+qY+6551aKuKDz28xgtwn+wcUdmLUdfJ3mfRJDs5AFzMMQyppkmuI3sNkq4H2LXp/Tvdlr9GwC9df03zyQivMrGKXKHd1sAho4hUnYsZlPTucp3ZlqVa/WB4tXh9x7+F7mHfbrTsteZSiLVLmrMZotHns9b6RUaT2TDvP+8A9y1To5AQ8LpMWBOhKIyf2b7EOqy3KvCzc7QPvOoEFS179S/FNtZoIRibAMxgvZL/2dddOvjzyo4uxreDMhPms+eJ1TANjzhdCTgqMF6syv+8Y729ZoEDZc2AWgVTb6VZcL7qPI4eOcCBJRf4mmAes3nOsWX07Ypb2+JYy2HHKNMM3CQAzHTdyJV3xuoi7dniJRWvxnwVTaVDIIAKECQBmbiFeZAgh6pMJSVNqk/cZgRg3IYshWbkZQBZqXctFaFjtXJmGj+hCUBOEPzfvL7RVQR4dsflt+O2XR/0TpSUOwe2e71Bj5I4lh1uyR2F5lmeEVGtUcySlEfwK7MgfwMDx0rmnxXNeFSJ+/xOD5M32v+481x3IyekaER8+FanNu/pphZuglUmK/FsGmXGewhWx66H0TpPJs90d2hgmFt56ZBBNbgBGPBhuG0xGS3tqwT3k/U6/VwyauSNiveUxrqACpglm1wi1g8me16RiFXRIMTSjH5nobxTBkZ3X+lcZsfE5cV8NSYI/a4+rsEuCvcodhtIMMv6cVtCCgxf0CBrCHlUJyDxC2joLd/9l0d2IJ1oe3Lj9/Td+5/GGoQa2vzwjYPd6FgziIFpIO5pppNbWgUSr6ztGssE9lGqhltEzxPe+fOibSleiZwLfzUhG30P2LExVFqnoUVScECi3fDz4Q2k2jY+MzofXNH+E+oE1K+lAJZ2kg0iqLWKg46Cov+00NSx5LYgYyrnzC5+v673zkzLQ228LQ==';const _IH='a1a2188cfa6781de3f24aa3d6de2743ff5f62bf3710997872254b50cfe628cad';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
