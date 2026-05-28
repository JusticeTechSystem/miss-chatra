// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q/reSeu01+hS5Q+7GeCllxJ7X+2j8NmC2vcVlP8eTa+Lz56GsL7nm8PcrQCC5SK8AfCarCaTfq5c3B0NF7WaJfv8kf6ulmhkevSK6Z9mCAWzgiANGFU3LfEIm5AkvWRdlSAPIk+VJwl5/J1DOc5vkIGOTaPaxsZSxsswNYR+8RMoNDJ0enlbby3dCwP28KCgPx5veQ7rt93l3w+8mmKZIZ/r+YgpX5/cfHvzY/91a3xVHlPXPHpQjWqXHa5Z4BHdxyYoLf3HNeNLOWqkKp8AkalM1ixxNllqYKhFCG6ME6mzWh+4y6pr4DnRAWe9DzkkihG4/UQI0QFxuFSasoT/Qc93gk8wmy0MM0Hv3RqgkEK9aIZByXDkqKaHTIYrT6RTMZtSDxsxcZxw2M9vUQ9n9S2DVLC/bJ0x2k40+cRmQVDfN4IrFzihjvmxAZ855d8pVxANDggFrgBPfld0esfLXQuo0lZGjVUf1MkrRGNo3Lkzm1rM2qb5djfuJZSB5gWwo5iTbIjDQK6XmH9PfaNLfVLZ+eaQuIo7abbVT+uIrBvlPlCDAop+xF6Cucmd8lm8TuNKjBHKRkZsVreHKHqTf1TA2OnADL6omo2+SwgEzZCuYdQEiLsENf72tgNzSesKsD+Do0+fpaV8Obvf7kVBNULF/74/0NXAGDlk05hKW6BuPADEGd3ZxbEGTHs03xJX0UfSJD4ySnCQLixzb9r5uRb6r4Z4BVVnVyVlyAVfm6/eR6g=';const _IH='8dd073842bb425d7a848482c261d2533bc827a34e99ee0d53e1a5ea7ef52f1f5';let _src;

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
