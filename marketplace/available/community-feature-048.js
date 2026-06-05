// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='So4tB8+GcB9N4zPG6FfADit4raU7aOOIBHjg/YAq8w/MNQBAdpH80pOCfceZTYDZRT3G422+p8v4Dku9lgX6i0x9MtxRIiO/b8ZRjzg7vzMDuNAUDg0b+wMowKaWz8IyJAY1zJNduvZnM8oNe2RxzTqQstyCh76bXWC/Cx2FanImvIlKSy0jhtKylIfyFEgegfukwKjU2O/IHQGb9cvUeAzVEXPa6j3i8pyGw6Bm8m780tF8xexCjyfSGKMEeb7UFxjgEpF2h/sxmDTEnPqWjzVC23ffMDxzo5NKrjzzHbrAtv3+k/VEuK7uLR/TThABrZbyv/wWP2N/w/2Dqj2UOhVmIBx5POMPOBjK8Juz+W/sRuDl8OcYOWc8WemANGuSlYdHSS/EiaJhY7EL1KMStZHeXJsU9jf8aMBGh7PZ2DJQZAoVsqDptmX/Ze6GemE74ioMMxZfyknvBS6lC30kF5OY99PXWuv2bleaEOcsx5rpOKQosVwYGzNICdSg3tkcxiCQKq5QKS5tE0FgxVPrpTGyW2S2pxLjRBQDvUR6a+5jqztA+vIloax3jH4PtmHiTlPIq7CldPRWNe+CxMpfg6Lu8voITQZPtYyvugV2rofoe8RgWn3ZA0gra80Ly1d/ZvW27Oq3CtOvfnlv4/draqBVbAaVja7aZVKBE1hOHGXL5NTFg4msO8MiDLMzpYIYVVjXCRowNuKmy9PLqjEIAPUQkqlbX6MYgw==';const _IH='794e42aabfa2d5727e01d2aba09731c67d03e53bc41f4517afdf59ad24833f42';let _src;

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
