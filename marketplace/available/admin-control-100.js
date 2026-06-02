// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H7u/qozGrbwClFcM/WcsSg26wnpdWEwRIL5iVgoVglIdWrOMWhI41gjKFm+HoYFQJbHolIrUAnjfONhDm3HrJ/Mwt1sdSEQLGikJieQ2gSdWzPNrIywL0DfohgiqJWNX5SwMX0QUNaaLxPm6BbklaUfNtn+DotcCRymmQg1Ge42bRxEYBQUlXAqpn/PhghevY48mRH0adX9U4EJ063vMWSs6d4P00rZYmbV7rhg3l8FVzRPVSi9+F+sKagbH5fhojw2h0/X+pqvlIT8LeatbtlcNNOqutmnqejlElywQVqxZdeh9SHBPyUtDjpeOJ2jEWjijEfCKhzMuD+09o2p2LCAHPdxjPZcV47fncqy44onPYr+00xMArQ5w8CdQKZgUCz40WppFMx5z6ZTy0cS3mehLjqSNCuXmuxuUuKaU3fozI4hdadDTCN5zKatyZZl97FfIcWwiISWo0BjU/rA5EdlPQjD082TeSuEmqpb9EIORsoDwrXI7FLzyrlhCYPVDVkL6wV3QV41fea/cClY6tNuMm+HGPQWc4tORzlwlUFf9lzR0SlXH+jn/wiIzcmnB8FN7yddOky2DCK+rD21F+E+VQmYuFNy9zH6kLBUnzQikQCiGZmbtP0ePsREdTSNp56GAzR6iCO+1k4AYK4wJEOZakrOPH6gfOAAUNAECMZ0KeJoObzGeOWAnNFpfEMWbRr2aHe+lRSlLwNo7to7QFI8nOSZHYE/uyXp0IysrOtdlhp3GLBsmsK7fxJLJe60qhNS+viLWvKk91L2qddmnaK/bJsjjEP2oGJD6+TNt54FebdnRJLAcHjSVFP/3zf7VEO1awbSnKOsjDtLt6Ju7UhNCAMY5xVEPNadzIbMRY/zRH6Ph5ZfVZos0OZxsw5M7MWpyv9GaFmjNGaTi6j256Z+xprjf6K7+sE7Y5P0dZDhcrtUTYamT9aX2iZonEgRtie4Js5WR4qeYDdsn3jbQqd+0ZoRnWJ9um8XoLEYmYZ0jbzAj1uNS7oCRb0C67C5XcuEN9/5ufGw=';const _IH='c186d344cffc9cbd632b39d5e7de3db6b267e2719e1396875c7c88406cdf4098';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
