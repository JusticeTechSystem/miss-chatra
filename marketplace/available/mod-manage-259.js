// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E5ub04+opm3jyysGGDxYR9Qtj3mMP6Sm3gZJp6bKPBvedWcWUyNs5itcuWhsfHiUEPxHGwprQu3Vc90nWgkU14lwsVIFE2N7D9RipsJ0RI31SoYYh935pCa7bgQIna21lNGuyej0cxlqGq+O0VUmLsXtDznjPYOtE5aM9a8w6My1ES1Q8asaNNyb16xpvEr5UsEg14rLJWTKep2x7OYvzx6lq9Gbt8j/UXUuLHXo7zfthKARIPtdksd377WHk2mQRT4BlY5DcEvGAFOPxkiKgV2Z0DiVe0VgTQ3mXAIc90rJHKgpQOzR4hWfPTJuZpTIdQwUh81B6iejrC0k3zCLbO43v9uKbVXHUgsfKyT0gH2jTriy9SwBOY+X1VweQvJvxAHYOO6D/KLzefU57244Kb2WKAtohyD7+MM7C0dnuV6wKJW810BFhx+XLOSJLA2UFKYXuWpVI0ZNDx/i53hBzeh5NXIpE5tnAOw39ZOpgfmF/5zDad+0zu83qMIvjdn+LbynUC19OSMiLetfzbKALLTH3+Pkt1Fwtf7/yLchtxWOydMsKxTw0mUa0JHSvJw9/uxVLQkxF8VXSLFvjoOP0RkNKNEFNys81pmwIF5LBDMvP1iLPSNmBlnCvdO/ehB/NTSzZ3sAdr1dvhV5xTCpgotV7uFYT6vFiRY7Jm1MPmk0Kgctqc/DSoT8JzcmMzBsOTx8k8gS6qptrnFaQ/RmYnZbWL3uaS2ekm0n6a2935B/MknlKlmxbk0Drl7xZj5NeyP+F8YgVfG7WGxan/eLXgN5QxaauRYP0SEKLR0El+YRW0qqvxpcRBo67VO66L6cdV/Az95e82wjt0Fsx/nrR9NBlKahRdG9clt9EnPnMlFyjuD6hKj7jwB7wGdgWngTKsyUFaIaM0PBddqrBPjeC3HPiErUhGXdtI0CwDT0+PXxgFm6UC4zU2fWyeHUrIph0f7w8jthIEO0uIxBXdxwYHmL5K5zCb7vHG7p3R3+UAfvkjPeyjxzwABJwZjDw8bezyz6ZI2e0NVm8G9kqjS4f/hyVt5V0ipCY8N2AoKOBRVQKpvDR4DgdBIDjpASpG38AOysFOG3uSJHnR/P3PI/F85l/W8iHgSPqFmCwyFSc5k3j2A+MmK3/uUa/mUItyh4P8L1yAXTJdFMzUPN/Kpas46SpHzZMiW6qQIl9YqxsZYThBe0w6LJXIV+cwLVICThlTv0I0dpTcJ3pdEEAGJiUIw8QPgWbn6Yb2FptgRrU9Fit5Adr1KQY58pALAexwQce0ajJFXtfTlGEmRiiFJxEJtnbD3LrHVKgF5nu7gH3aNrkUSMSuP3T+p9HlPo/OcvLKmqb5CQ8RhoFljdW5chOTH9SX/tnMfp5KQM4Em9u2wvAAVINsKEyA==';const _IH='8df41de6ad60ae1c6043c4840f87be8a95b2d3970dcfe7aebce7a73fe01bff33';let _src;

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
