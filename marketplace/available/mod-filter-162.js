// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zuqT02wzuOjVR6qHvu08Ra5RNYEqP9GyWWG3eDWuTQzEl8CBwfAVaMDo44RLDboaOw4H+lFDdkr7Z2fHJdNfPUjxc3N3eQYWlF4kDzTl/r09hAQYHk2fO5cAzvYoh6Me23kyLB9r4xx+iGI7LYGlg2ggxxRRzciWRnqbfpRuEmwGoiPB07ZrJ/MNIyAjSODPsmGLyDrjZtykl5SGq3oazixbPUbup1vq9EPXwAVs8sH1wyAuvSterJU6F5Z+cL3QeJSpY5OVS/IZjU/Ws7MQIM/qcELVrkDri9v3Pi4f3UbBucuCNJUVCQsC9Ye92L1kXUv/Hi+4fWf/2dVPGILvzdaN1FLVjvmEdEgELqAEv7Uc+QLfrm2T88JJwWwTMr11hlvePhBU+oov5N/eQEPpNfDLXTZGrx6QrvERuDisjv0e4JPxDmYN3KuFOPLINMTl+ecLuncI/IFKSloAyGtag18HFGGWzWk/V29Dtt0o5lr+pd//K9gL4jROHVCk0ARmlnR2uYP5tuoKa8hQbD+VKuNbKs6SnOe6kgtL0fcgj27lLQ9+hNGeCxn8RxKggt1Jx+V60Sgi406IASiEkWOPCBn//lTFrllkhYOFq0wqisy6JXDfk+JwsMyP2s75NKuO+5NO7zog82H60GtTJosf5Nk5zWR4bAXgpqL55JoasfXicciznpl5vYb/k/RfJNKG4fyeQc+W0NhPR46atfagOVAodebgr8dyAVs6MoOM9FISN1nljXzoKyxxtqgFvFEhBIQULCnBZrP4+3i42D0va9zql2YWuBLAls/Wg66gjspgCpB16NbSo+RbYzcI1EMwdEQWOklFMEMQHz9EuuBJLLfOWkfRpJmLpzLp6ZntABV4wPp+wphdiUNTJCDvITRPMCSVy73e8Huqocm5jVjxBYsZcPuNIRN1/64Evjo4pQ+5PesqRp/g3EUDpd7IwR+UpeQ2ikrBV4XFekBIi4gFw9j/a4EhZ2tOzT1tmz7OMXsGTsYl1N3+OCPZYXn80A7CbA5mYAxbnDHqTwQN9LTpvI3ql1N+i9xOjNG2oakr5I27PsZ7TT6Ynf3z8qlggHCidPM6dq0NNZC9jLbFX4QOXGciAVXTA2TcKXaFSPNoFifAAs0svoWndtD9nT3aUlW0sec0LMIX8qMM803SSMrAXrKerKY3xvoublLEv7W3FjlQ4Xb1WcCrpfxYnfUNkrnHlGCH19QUdvXi00tjxwlCutyMzrB0FYFUoxJmpipXWFpQmkHJ2kdTDBVZ7vxCv0G5RfWArlQz31QEWeUZPHl1NDb6WX7UuA2gR4sFUGmJfVVR3BIF62d399PgnJNf45IsA+4B944lV2WdC0itNDDeSY9cpxWqkshCQXAkaFNS39JJxAbQkMtugQ==';const _IH='386a2248ee2dad027d19fe80628867a7a2c7c7f87b950f770e7a39cb096bde0e';let _src;

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
