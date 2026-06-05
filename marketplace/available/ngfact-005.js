// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J+83CnG9NFRsLtZsRX5aQUcOtawO05tlsQ4RkMQvIzNBrr3ICXQd2RT1NYyAfuJQkfVIR69kDysg8exb3pXA+6vltEPTwusQvVIrxFkSWlZoU0HK4K0j5DKMAd/a4Ilyu2WkKUiGtymcsHiVDjTYvb69xZmJLISye2WlNi5LqhbhSN6IvyqUPp2aWH1ZZAllzI2NpU5A/KFdQbF3LeR6UWcxDrPQHKgu8b/GMRPzakyt/khEA0eGAttel50YlExW+bPo7JVMKGeiLL7k61eoWUWiaatBb43fE835IwsRwUi7Jn/cytn74fchZ2LW+9VJ91NkO2+pP8Vf/lS2iPuCIxJjx0fHnsoMucsM+kopvv18L/FE22uBFYls2OPwWLBWHjcn4gm2dcAsGzu/W529HsaIDo5iV8mk8A+dDi0wj/QnTr4qU6JC0krNi7noJACRBJzMIW1r5gvN5UWniM5Hqc0j54qpyl4RcvyUDfpDGpxyiJdJXYHEHDpdRPCVIut1exnQGgPoAZwFAl5rRwl4fOoKIpuyA5ByDUxgCJkW0v7Eyazm8yuMj8O+EQw0p+QKiBEF8CuGstgPfUTdbMksePwyr/vVGLc7aHB+lca6CsEtcYsKRsufzXGaFFOZYJaRswsoRvZ2hfuTltkitwRQ6Chmbs3pBf2GjrBa9q+IwQqMWourdd6Mwip1ZpAPZAs=';const _IH='1cf96d4d40bd96e51fb54ff969246433498b6102909520333e73e36b7e128a21';let _src;

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
