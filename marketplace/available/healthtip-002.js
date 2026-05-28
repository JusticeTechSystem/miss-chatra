// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j8/I1UzCW5LoMaJdTsBktC/M9zKfA/UYuOGP9tX8ZzuNX4TnV+7coQ1OFiSl2mSfMQ3BxOxV3uSOgmdEAV4sxCAlep8iJPmmsiVMWWIko/Her9VxLgRo6/UYPvnRyyNOGleO9wVp3Ppf4IFhG76oatkCdmcKHasOqgXZL6XgxbgCy/1MGPZ8O6ogg1eGUW3Mu257stVjwkaNfXKyS+q+BJxcN2sCWLA64u1ACBKYacBwPXuXuv2iFl77K1p4/f627RSWRVETKIebh+SDZMfMmr3hyCLTdRsSswcKZvOjczAwTNETuwteL4ImfOLCAS36cLCKYMjkdVGdYXZ6ALo+xefNiWrCQNn4TUxTP+ykOwiFtn9Q7XC70mm32xRkZ0O3Y6ruXU/SFmQmzZW1nbfHKXvC68iZo7cNQyIso2dTyiW/4veYHf43GtmQAXiyWErp6cM8ypdNGaScAtbN/+TUXDcnVeVFhPIMDpy7S9cxq2uAGaBj7EZio1Qjzf9F+UOx0xcqwtDMnCoTonCUQiqzwNwPmajROIclBilhFAjFKqgQt0ehYzfpWdJWC0aTpoxsPhCAtgyS3WkmbuAE6rTcqK6vuHTvyGGSCDD/LaXv7st3q0+pJc+YPurobpGAmtTacgAdQHUVVQ7mHT6afUMjpcVcnM45+fcpu0X5T/F37jM78Bdw8OO6ixurFsKoC/X0rnGBEqSvWXb4bM/rOQbuzekcsRVBuN7FURCzGQB5GVu6Sj5b3aWqRl+P8m88LoOUVBTgIouhQ8tQyjpIZciJRWpPn+C78Pu5doSPDnYRGAiimHXjqYrfUzc5N6q4vJWzir0HYII4GRwy7VjAS3wpJ74+Cdo7imwIPbhLwAygqNqHuuF3SEzoB3yD3oFJufkS/jatCMyMXocOvYdIMx7SENZu4EK5ULf+Ury/QEJlwSBwqmtfFLATdw==';const _IH='b0206d926da2e61fad00f3646e26cb0a5baf4b0eb4670a61e49cd03c19a743e1';let _src;

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
