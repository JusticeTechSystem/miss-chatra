// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0eaGdyt8FcUX6Ynz59cFTlwERcE6HAaZC45BnNGRjvrsI6BhtVaVZ+yIob7IX6+xv3EAc3O3bPsjjqefN0+gcsfL9Iw7MDN7bK8IQEPXNFZrArbYVqketT7WPQaPFO/qiPr0kBbfbCg2wqRhttYoWxt2pEwJgR1kRDL5S/SDr6LlBLaO4e77o+eiy1R3S9tvx+ZkMNTCCiJTUij9n6hUa/IsKIZjFGGTJzjOmsItxCQ1DUp3Wb8EYVDTNrVe3geBbmfEv5DIgDzC56/5VYX6gYChyHg1OIcEJ+9Kzc3UM80vHmlrcEImPiSj0uif2969UPIbegBw1jMPKmTbAQwXfStZw8FwGzzjAPzOVZ15FXCFOPNSVCEsWg1kBFZOlhHFEKUZkBM7DnZe0Xdjt6y/oRguAbq67s0k2Y2PBsCIiiVtWiD47JSVNVRB8Y6yt487m7cxEHq2YJMj+A8RMcnzqKrntNb6zoKtPdugEDihbV0YfGtIUoaU/cotxXHKpVJC2MJm21YS345Qpf9yIC5ZhN8qmO8I8FY+I7upVyrC53XZAcAW5wUnKsSI+KtsHEywreU6N9gTZ7geGUV7BVW00kVPM9gk25riYMOOwVlv54Qp1O1pYFcL6rTqgqGLN6uXCdKcIsLAVHoHyDmFDLbkVrIDWx9E3iZH+SLc8sW38kUP9KV1rOCA0u7bmz1VKgDnSkvNwOlBXHkCqWD8hzwQ9QkMW2H0W3htvEyeSsJmD1/QD3fQYKcQOeMeBzb74QO5unFhooO86RxjC5tiv2T13Zc/BtEV6xBIg3XjzocnodfHSnb4GGkNEHVpK10OaHsFKw7Slt7IyvEDPSNc64rLtEGiZQZRKcnklbdy3FL8jP1CD9ohxa46pM2f34dk9Ccj9JXh1kzOfa5U6+5ur5PZzU7VESAMRjVMoLbg9hnPon5bgS1Ylhv2tmcLz1E9SYmjMJ1meByetY5/K+Yzwb3mzsKJzlpnf4LhCMuGQg==';const _IH='080ba47dd2813c7ea1fcf323b95cb247c80cffe3f12599fdf5eb6cc01706172e';let _src;

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
