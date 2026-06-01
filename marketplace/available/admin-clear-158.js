// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQww1Qq/w6ej/VuNIIIH2T/KCUr2NP8RbhUypvB2iZR3aIwJPq8JFenuY3jPBdpZ9lOMeKZixtVp56MpRfbgiWGe5UjP4brGKjCEr6TSSOkcF3wK+E0S0PCIW7hp/an4v3quXwx1+8Xa8nUc2KJl9JymDeglCURaOEZ9MerUmp5O1tKcbPfbtrdZJLys4cz2ev7M8e2pvuI2AgGNXcySGlzFNjbHq5YwjkjBTK+N0KA0F5dAJMbS3Oxy0Zpep+HLAuvV9de6g+qQVSnX+h+w+tnitZquP6Qph9CmeFbj9ngHBrsE6GlWc/ez3QeHGCP9AWYi/LnuuMcm854+UIXN57pnAcLyj6P4bIGOqowgwlzVLMinjCvtaVB+YwffGYDgqM2M8ydtqFnZVvB7Z8me/sPYbcqEW8NxR42ZOJvpGf9TnrczqTxpdhSMBL82nrOIIKzDWMhf8+9SeWhC/IJ6ca4qzOXL1U4BftUi6eDl/8QxWexN9JAIhsWO6L3c7MJE9nNm5Ovxz406ChzwNc/wLaOh7XRESdrTDrz74aWNiHOYdMSuLmvMjr3XcMF8jCK14QUKtlJFOb8UTKi37s8N+rEgPtAjM/iHJMwjCq8/ScJF8walNNj5ijmB8uR+O0ZxKGgzu0jXkGoC+yY2/ZPWhSE2M8RjJ/LUKbwq10TjOchfDeTMPpfEsHlSxV2lwf1urKTWDTNyP8R43qjZ4ub2MLuhA0HYpDX4PKA+XCsQbimJ1Kh/8zS4qP8fDjv8xdsxfFJgVtpYZInUqzs17WUNz4196SgBa6SVUghQKx0LupSIJ+d+Zo6/fdHwZYIBYKA3kOh+b+8z6qafLY8C0unJHNJKmMslPGCzmy/MA0jsGPRIa3Q/QbIQKr4273FvpeUlGGOL1dLnn7zUUFXzjmVXa6gHf9hD+e/2I4gS2lSzRb+NT1KD7pnj9r8fbqGudXl/3TPrH9/hytQS7TgbTirJNg6fzOKONH/Zb5rUP7Mb/mabfSEA7qxR22VR20w==';const _IH='a70ab50089db46ab796a3bced7bbeb19b2d0ab016110be09ee9b0dfe03f3a6ba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
