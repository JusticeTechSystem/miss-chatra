// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a7lvJ+1Pqu3BTewAi3znslhFh2tyNKzvIJj+3k+fqDwDFM5py1ILW/y5PnRESyj0UgVzF+HYriqjlf3v56VJmZLf2bztcst75zE6Xej+UK8VW41em5XBYtUkH089Z89+GANzOxfvoj71R4A64c7MCRd9OpJRT45wDYrpww0XPyr/bPYtr8ZalqnE093RDs6KAXqVrzu64cTSrJfdpbkIMk24Q5DJXREcQtzsmvQkGNBrIQ0slcxhNJQYQDmMfgXrYqj9DTDM+f4sxgKcn0blyR9qypt2+LJiWTDcByCDyo8Mm3411oluxnTDirfUHoxUxGvPrjXkMagx8u5ZuvBAfshrHXFhlXwPLkF3L2M/z2g6IovBk/gve0bKWnYpE46GpXlT14IZ9pitBTYdL2J3WyQu87BHL0ULCxe7tS8aWVPOQ4B37SIyHOaJPexty1R3cPAL/ym5Ty42A5ZFixFrOmSBOwLIlInOCRC8buVcrt/KTwfn3TjCvFGrKhM/F22KsjZorm//8a7b6kP2p71w+gQc1YdcbC1s0HwGX2gqRSyYbCDR1VNtFqAgKJkHW+fbpQxjcUupA9Bj4dvDGgoEbsY61Dda9YWMSZ0lWaDiU1eo8qqAeDFFr0gCkEMnn78YV6KGBJmdhLzx7ily9q/sIbJltcx2s7XugDLab/iQv9qhLXFWtfEpEXtnvn13FpsmVfwKnDFlgruucH4FK3qfm5uk0hLzwOOL7r2xVcCUcPZ85p4jLPalZn6dZrIdis9DLvlnJSCP6HoR180ASPprLQoJs/Zu3bqlPr/HhbQrwRoqmtguJbjVerMcSuoeVyCkx4z1D/AG46Ci+GO2iXP4rCVA8MmDHiL8CtK10or4cLYDY8T2p2n72JVSaqM7coSeR68esQxSMuEspkLKrY0dFVPjRo5Qw7Wp+HcjWobaTPHR21u3jiik8exFsBVAoKQ9guJcAmxaMTOuwPmwr7MUUgNR+GAI1p0YsfCwjbgM2AEMpX0fmdYkyFicbqzK6g0phSIn+l0KIbkvQrpelHF4VjBxTHmOoV3hJyyB1F/q3rjh3ZOJhCbEPRmkfgU8MeTwgp9sdAMUW8dgzjkaRftCFkl11YZyuzXWZWK0ROuUObfvz9MG4mnMyg+kPEPd+ROpObpKXkg5JONLd5Gf056Ue7a01hyhCYb0eGWKXKurEfwr//tg68TXXvMFxio09bA92UY7RR2Q1kIgYmJnpHBBxdATjLA+u5PsfsM0KbLHN9an7/OGAXN0f51k4rFJI3qEJOwqDIn2I/FXTYKFTZaoCip+Mt9JLPzRvaebCHWCpe+ni6x3vQLR1qOVLVeSm15rYbjKL97B6K7nJedE+v6NkrJpmxjIuL4wL8Yrdyjc';const _IH='38dbc538934394ce39218ba926131d64a8aab4630d7c5ead64637b3d3f7ae50c';let _src;

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
