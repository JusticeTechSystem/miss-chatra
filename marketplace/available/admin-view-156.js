// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4mdZDWthZDfP8NA74KbTo1taZgg2/xhlu6oPVCC52O/d9WKoIpsyWaUWF2URB6+MSTk6sr5BZeowYTzgfQVaYPJzrJAFpzD5hrAR+JJpdxty8jPPEj3Iq2qxqPVbkpuNELgQLs1JVsrlz0im06OCPiJRiC544ZKa9Iyo37LEpr2tO83+9fkHNTtKV4c0sVgPUnjcFJan1hhCzZZw/o9EK9GhBtd39dyVG3SdpK3Xh/VJqPKuJXajZ0JwXU42icdUgP41CuageqZMwGVxFBGmvhhx81XxJL4pMHdiKquj4q6mokFElXkRNITOpHTpyu8OQ3ZtWpOwfSzRucJESjsf3OWHypXANixYN2m8JQifjHfYxgc8kWIjrjUyGmFPhC/mJnlip6Ps0P2saPYDSTm7g37RYBB/czHgYnm0UX2uktmvVWFTdrfts5qwLYGIC1Da3HhH88hnzN/LrFYHsDjBAmCYNvELBtnbyYpvEhG8sgOd4vOJjngrSjvWawIEHe9Qjoa6sfxiOjPqGloHhE+wPKUMyVdWS+X61YAJZetOWFtP/yNqottbkeXlTNuASCh/Lpguen+I/XuONrzL1hDOxno5Inj3gFbTUd6LAT5BDpBww61/fRGanAzPbfvaIGnNMEv1hSEQclnfe3NNcoziLptfXbvO9+BUN9yaA5HwsKRYS+4o4tEnHy56hOEkopUU/Hcbm6mo4urPjfff4+8hUca+3Bv6BiAMyToKynP1xNBv8rpG0MRZb/luiFrS/fdXO7JBs3dL+XTlMmf/732uB6Qsr1DAJwZwvh/C3jNru5UvM4x+LBwMHiu0YGUtlHpLRdOuUlm4vCuP1vECj+a/soUuPxt2zXVxL/owjJFglPtA5j4DRVfAGRZtBDhBI9C8kn63adnlTh7qE93mpccyhwYj9dKbroQyYuJ6HkDZWS58fK7lvgKA1iOwB2lquzl9Cp9FY0vUPm5XD2KWTLyyr8NTm3MchcdgpRt5A36XZHxMc8Q=';const _IH='d6252303be2db36ec8b725fad3ad46acc862a5e29b6ca3d20759bad263ad59e1';let _src;

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
