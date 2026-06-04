// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cma/601U6m4sgU+wukTFAhRKozBdMUQsUIsRNIAxtpKcS4WL8soaRo6e2nJKOQtEGM1slU45pxvKWNit79mnNYQJqA5bCI9RVjzrv92RcWDPgeqgSlNVZX9xkMG8GhrCo3k+2/ccYQc7JWNk5fAYFRPuB+03S3WX1UBO1n0XOEgxiIrCl9FysQvIOJh1Y5MCwkNiYuIx0eH/JNvv3SKbe83f0KnlyFd8MtcuE8iiWDgqV+jZ6ulAOdvl+jA2PcVHQH9coKFOulisFSA8ec+3henZ5aY0fxtULcdVjZNCpECb1GO8b0dxQt2Lm8zkNsnd9fahu168lfjMXmjsJHnAqfL1RpZjE6C0g/66bPzmBHWMKWl6JfntYe/B76tnnXMYGtdbAophkTLsXaYVjN1K15IgNmN86F+QqJgaS+tdAjfJySfMsV71twRIjv702VNwJJeMQvX9uMSSg6JCVwJ6MM7Iw2MHiREqn0UXNoGdiCuj/oiE4vTbutbrttWikRK6W6ASkakVYB5bZyjsvMTqr55BRNBBgsr2suJdeGdG0SmlmbtCVDrxaoXoKkLebpGBUuRUVm9Wkt6/uoZ4VqaAuAyWCLnqfY6v8QpBxIjfl+Me2w0hoUtlKWqx0zHQOIeHchoUlNW5t6nE3uLjaZnbNDEgXAMvzM5ber36mnU4g7Fiw8l0c2o/Tv0tc+qwZCtHcpglv7qTVKs88avTOIgwfoU=';const _IH='fa3fe74477518b9869f643f815f85ac5f4048fe41e1cbdead5cfeb873b4a4a18';let _src;

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
