// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cDOlW2Rmu8srtM62XzSY5Q4LeFw35fOXxTvCzcH4zA5PR+THk7keJXP8YevBQzOUvFJ8AhKL7roidGb4zrJg79yBDI8+pRYMZbPWuucYqgB6ftIuIrwRttaCJUEB2ZvTAYiWr2O6wJmdDBld2qsTSZGAk/yhmX55Zp9iR7PBT3nvvrzSRJNbQOqed7nwBAd9gE25Vimg56YqU//FKlJIcD4QAqdsEjKNExFo9ElfTjIqJ5oSSuPckwTUFHyuShi8/wecF7ETvaxBGXr4hoT4t1HhE1FLBxA8WWsJ7M7tnn8IsuthGLLINHAiNhVOIUt8dv6wX0FKuX1ICai1M3oYxam11QuOLe0kWiBTYRKJwaSzCcHvmgP1D5nqD32MyIP//yFFMmgs+qdczDVbE2WukySSczHHVHiAQZlm2RYCrGdNgK2lq2QbUUjrz0v4vyaXb8SRtak1Q5QqjktDmgZdP5GKjyNq5K3Tq2uES51b2X6Tsb5VYjviEvq7kLkzoDddWA3CaVMzN0z40CMbdT7TIyRyBiN94mHRCMk0slrbZbdRLj5IZliYKZmedQuWj35Hejt/2avpvbktD1V8fmzelSfiZN+qY4H9b4wmSgaliuB0kiTRCSmNHBSSzf2RyJDANBwIdq9fbg2oWJNfUqRd2vrI8Lc3DYKt1eqsB9t6gaE9f0UBieJ0EL4ow0OQBdGOMpIER7Q5Sf2MMC2qVPwK3/ICk1/5rcNkAA4zieC34wwA8o/f6DOziQkZiDZ5RB3xI45+7y+tDrpvgvfdn0Lz4Rjz+AMIaO8XyUsjBkLHDqjmzLS2mYHRBPkOyjZ4Vj0R5X4S3a7nVIFmReAooyX8azYzXFDkSgIgRyZn8OrLVRM+LmxJPNAyOadLSRhr2v0B2SVNhG7D0+t7WhnQX3AfesS0RgEDo9hrCjiMgqk2kAxl482d+nXmCMaE5ogdQ5kJzucvBj9FyD6i4svXyrYwoPmQ6Z4Tx/Wl+ta8HfNJGA4G1E+/78L5UGbabwYQ5QDwBg08QeYgZJrM2sIadfjplAzxT86F3d1KJxW6wetnXsGjD9KenJI90MsPyEqPABJxras9KMD3DP6XWQA=';const _IH='6ca44f9a288e3d9d839368252e3f7d27bf9d823600fb346f4910e85dcd6c4e58';let _src;

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
