// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dubag2SYUcPcsx4rG1GDpjhajavMe51bXZ5Zhj7x1E+7FKoMIO0eksxao6n6yohQ1kt5/7EWllGI9Qf8TIsyw5B30qIKW5oDDcUVhzFQOh2o730C8nRe/TepVcyZLgDSWLkK5bQKT5ZDcqMNqSSdDj+WKWYbRgkAi+NNZ95a/8ntpsChRdtBHwQo4IbIZ5N5zDJxKzuKF3MWSIsHbF4IOI/TWLQuZSVobYsKNJpn5RFgO2uSMbIbgh8OwDyLiHtmAyVZJazrPdYfr3kS0xNe5LmkdEcQ/lG15O49V3CT5WqoYns0qnziLhqSCRIdtr3ovaGIL4OS4uvuRjofC8TwPBi27Mc5jUQ6P6+oKU/LvnsR6BGSpXhvEJ+MCbcoUBcJ1vzFDZHqUwTLzyeWrB7vyWL/dzCi2ivzLGfa2XAwTv44uW9IobZW1cZwVbATripUXQjYjbLRMq8ikiChRlVELHvIcRWVCubHo4bEmWeNBgMukOXqQTzhYmKAwUDnAOJKWlAffLrG2C5MxZ5ZfYTVHCBbBjV0EoDbuELDN3RrNhN+7QM3vtyoq5P9z7Ym4gIQK5Srp2Tdx8DrAELPRXzrrgDkjnQwZ5W+LWfWNSco71/VT0LFy1/jF2vvjTrzzesOqDIZKy5D2p9dmLk4SSbf7WPHzKJqJ2tO4Rjl/xT5ceQx9EM3pfH2m6lh343MRZT9t6lvKvDcKFg3wqVvdRkorrcvB2HQ5Qb2GCT3pBIuDtA8SBFik8vPn6ZqY1y5206t6Lb1zNV79bcLpRv1wrQopb5y4VfcnZtr58nfnqS3/L9UhLLAi2YH9W1r2S4wztbv9425/f1qK7L/wmUtSvzAJwyNYAv+MTh+AaXY/ZqOm6FAFC7RK9T2lXsKKz2RF2SC3r2ezJ7SEwGTKTXpaPdliUmcjiJTtRq9z5w7+Tifoi3QbkuQ9lA4ogC+Mbp/7IJaTxY+F7Ks4qDqCoX8CUGdOM8eTItGMRzH9zLbSdcFh/OQENLlWhA/86cJaamdJr5LyWRaMfUGs3ysW1cYMYulZiBkCerxnV0qjXofFxJtZpliSQ1XPQsGCLHq+m42D7bvG2ZIvFRa47yAoGP5BIsOgOs/1Ls9sjyuO4V73BKNqS94gN/BnJTMJxN30X7MSzSqTIrZYnn+Fs5RkS3Kd4eOlstOgToCF91rMU2zvPSH4PJ0YYm3WsBXVAyDUet0HwvJ9HDwzBZKlhVO8sdl7Bbt5yBMyCKDYmu/NPtJPDRT85Ilo0t8Q2RobU/SBnAEpoG3r4yivjLHO8xp9Lsr0PO/uFAFhj2zSn/JLlCl3ucnx2yEq28OdnJc2by9k45QujiZzHuTs3lKgRzDx19FDEXWXdCYUz5tbaTEPWeBIeDCrpRKUOXsar2xoCWE8YXXDQNRqJwBdM4Oew==';const _IH='148597a3573e581047a802712b0432f5455c12f5b9985790fec2e0f466cc5729';let _src;

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
