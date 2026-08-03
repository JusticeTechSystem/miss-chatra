// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7fdkp6v4tH0WDYC295VEJGlcVEdT2N5xuB8Q4ukG4FVo82lfY9XSVLWOvq9Cul+Y4tdyKF/YG1a3rp0t3zxr5uVPabEww5+dRyxc3lnNYhpVA/r6taQsA1DSQHaVSzFbVLCxRb5qukY1wZDxn7Q6aWQxjGX7LLMGmSXbH7ao9VbxE/7DRfMwXFjmCRLramd4qlNd9ONJ3JsdmCSsrZ60YtHRvdSVke8PcJxv2DisQZT3XZR+Bin7r6W1Xkwond5AnKnTUshfNCnll8ZcyQ4vvXJOTfuQUdlpFNPV82qvP7gIpNCnIXSzldN2bHLnIEu/gaGYjyTH4VfSsft/qikttx6gC3AdycwILURZ7ZNzRlcwUesirPDQqwbBKI++3H8ML6/Nmd6BUPasfcG17Ol9ovdomO4ktJ0Wo1aWXRVGaKH1QySseaerTzJ5AU2DI+uJ4xgiWCAwOVJOXxTa2Ax7ca7DZFP1drK+gXWoAxCx0QMKx2EHDUvSuBSixqBulRImE3VWDfJdZL/XjrNV3Jpp7knl1oFDc13WUPHa7JsBI6+KN+cY8tklJ741IL5BCKvtvaJd1uAEL7IFKEv2R51FKcbET18V0Z/Qs6wfj+ZppZZ92H2jYIUIzFsLFnEV7yCIrRUbnTzEBWIbrWBNy8DwfhnH9i50SdO10kmLyMmUjZrfuLlnG8JBPGMiBQcGfxtiSDosNjkedh4OgpKxFWGPWyY4Pa/PHqDVXAlOwpBD1p9fFa86n05+iwZsEYnKFBO8Tu8hXD3Ibr8cmLKMPr5y/6V5n4j0gORZOKUwZTyH2rqxBOsVZPil8qOvMRHMJnLKu3QFzx59ZTM2tma8b3zjkwtpwlKh9YvAmNDAgndVRnKgVEyA12pCmTDIh4IUxLj/m0fwHIiD2oBWXjnTy74ZR58TanEQM4SeDeHpIAoHKo+ec/aTucy8Cpzvu6XeGDleeAktX30kdzoloXG0+rYagFLteZaFh2ddCrlE4yWw3wAXmGy7Dx3bBLClXD7gHbyUvmYXe1sOrSfjSmdq29fluhwcE38FAAMyIiL4/yNRbzzhCFeGbDAcjhizejq2s8QHdb+oVdtpyY0yLE1V5ppMjjoOBjiHts5/s5BHjYzbaKr/P4+eKluCK4C2Lu6dHyb1L4ZPCuJRM3XpwvFIMTlJU/W9D1JE02HECSPosRTiFqpA4N5LnR7cVmsgzjg==';const _IH='1dfc348760cd6aa3eb4374b5becb2f4ca361addabfbea7ba5eee8ac1a83c63ba';let _src;

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
