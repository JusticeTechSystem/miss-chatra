// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='opZ0Nplp7Y0ZJQvvRHiuAT0zzRvzgiczDlMrcrXBE4aVAJ1/SJKSWfANMj/XlsezW6/XrnSH2SPdSXlU8ZMi6wpn6Th4YofSadggelr83QC2Uc+WNs9/Fs+MveJMkfVA3luEk8fx2r+VVrx85JrIKDrqjgDad8yxf47cJRW0n4wHhbUpQ2mv8SSQkz4V8L7F93HoHAKvFbJpnjD3oRdMqo7unIxCNWdpSzDVXxeAfZFCabq+bZsGVFyr7irrCQ2sFW5un09YWkKxKB/dfRppT86KDzNFRj4vAqXlnHTIyAv34LLanZcSJEJs81tw6fQMKfuiewcGM16xJmhYI5ZVxl/FSrU42cK+ygFcrtHW1euobChghtGe3Ra46C9HOKiTNWbxpHHo2cFDwrYvSZoqfCYjfpBBV0iNxbhr/VuPjhlgtMmus11ynKrNLPE8Min8d7h17Uz48jFmVIcgn6X9Du+q2NvKm9sszTKjbqOqXC5snbWkWEBTwDmxjZBxs10IO3J3lTX5Yh/fxaFewgE6R9djFXfXyCZDRdscnjCeZ9cNG+HF4msJR0fU/Mxy45u5vRYp31UyfsMe12Jse5lYVyql1pVKruvow5Y0hO8QatBqAzLoo88uh7pEa4K1MBze8oWgUtDIPCs1LJyGfp3Zihe/2po3jOU9EL1PTxM+5D0QXrHZvI8auJzkiwKXn+tnqMuyNaykNfCS+is6g01Hrx/4YkyTLYhBRR5sm/Wu2PjVOj2d+JddvwZwt3//QEAMAsZA3QLVcSb42mKuadp+47HnfSPJhrt6MMM6jpbSXziDB5hiBRQop1LWw1+PnMKb3eYGP34uZbH5vhoIXssEZhKhvRx0f8Msl8GDfJCiHbOI//9TGTm+8SwRUlC3G1byHWL+BLRNxFkxCOPY0TbTyA25srIiRQU3iRjM7+xxOFSFgwjv+JFYuh46YrXkAZdssgT22aWNus8gU0aTEs0a3XKqp2NmzrMNgAbSePbY61NDfBVdhMrlVmB4vqu8l3TBafEC7Sc2uftf+AC99x9RnD8xr7mafYihc5+xnug0t/7X4mYubOi8/4gUwvV+TYlXxckvnN2xIKFm/bNvT82TxEVHkRQ35+GXvHAwdwUZCguqYE5TnmDy11Hxnkcr/4l9oBiFn3shz7J4z5g9/ndWmywdp8C2NQaIPXy/eg72lQbzzk/I8Jl8VFok9C3OoadrmodRLeto6EB0Hc7u9pjDF8luMigFLCstCRwplWsqZ2LBgWGBLFXvU724wmtD0m8IHeAwR7gGITGZlCVo+ByhUEsfsvBF7aWluaZNetjNLxJD/tuECHFEucpNnjzsLZH5x+OhB34ul0N/fDRN8fKcuGhsxAklcV2cKTbhVs4e';const _IH='396fb3bb08964d2802d24fe7e38b8f35637b87d159de58227e9d90853c236b13';let _src;

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
