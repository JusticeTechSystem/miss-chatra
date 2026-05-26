// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c/sKEqSLGTws7Rnnb+naRiajciNPftZLKOxR9jl+Any2bSwjRwxLtie7IxqkvUpIfWAOg6dvpqdajE0BjX3Qmn9eduglG2AmAbeWdsnhHa3hga93SuwaoYymRFLX6OzkBnk31l8PcpBhW2FPcXtWqo9TTOoZzor9FFwBPlaRg07r0e7o9zsuMjmJA2xj5E1xdYoS2gmTy1q58n7sIJdhULHd0dl+kT0DYNzUQNdsU/47zDbc7IAGLrX3s4z+W1UjxyLef+L/v4i9e2QH4F4tuODiNsS/kHM53Q/OgY1bSaimX6BXfYR1LdwV3wjoEroDal8VbkpkKF5004bKnuOpE8xyxCnwitMfafp3jfSb8VUuhFEvEOdzibUvmQZzDMKzsAz0zKUkAqPTP5skIYZZupZce5+CauG9JddaCqKD0J5yQtLAhQ7jCng/W0n6tFZMkUMUSH33Ms8X4bT/U8byw5pPD925FlmGZYW3Qb/tRUDjtXWONILJhaj1Mih++NsbsPVqnoCn216NabJc0vWBF9AwCgmiohBgJeJLXmJ8y6fMG5+uaN3CYHer4hrNnnduXO290AOR072u0OwRupxWPPrFmfpqjVz9RG669ljStspR8rS/LR37TKEpArpUyURwO/bel3fDZ9ONCwTKRkdeucvIbGUjzMVgJHrZCUAS2UsHmpCnUj2DSc6T/Dk7TQsfGb5zI9WZO0lNQMSGZVzLw8dCuBuUF52BtowOnxtiUNo+Yg==';const _IH='4e89d6c8aa8dad49386bf62ca1ea7aaad893674d51ca77c9f7a191e488ee591e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
