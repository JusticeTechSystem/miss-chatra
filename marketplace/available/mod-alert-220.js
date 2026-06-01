// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6lOhxJBQBxEVAX7DkBZ05J0bw9uTGCZRm53WK46a5U5t99Qk8tx9cMJHOZ+ehbytRiyuknvWFxvFEGhxtR4wdED9Ew8DX13dSa06tsi8riB8Nc5/Xx/CvxySWjhod1TdVZ2Aezb+z6Oo7Y1xsVgGSoOvzsJjMGHvnEhXWPU54HRWki19aHFdPmM0h7J4NZ2FaXSfWV6qqVLsGSk1/Zvnn19at8mw8DZQK1UKI5qK4Ja8p5StuAm+Hg6bZkzeK8hBnImvzChIaHqIR48cnuVW2D0fR7/L0Rcux9ZTkOtzud9sF+iojFB/s42g2A9leofqNBEZZWbj2AraHoLcDlR4Rd5UcMzxYuDiIwpa/d1prg/41uFZTJOTSydKfm4DEKfT03k48uK6/Flz2j34BAc1HCQc6jpBhOhDDD4TWzg7rizzEejRX20tV2TNLhFjxKdPi05+Rpff7WW6vsMbpPxCxH+KlIcDb9u7s5Wf1P7hQF46pz/vgTvzLzCZUFEe354XRQMUYi6cgxDlWaK9KUXHxQRsRvWG3NfHAfFKDdmPuXDVMsWtM/0fLvvambG+mVXDtRO+pSkxPRlWUEKdg/MzcoC8l4ufB1O39ngDLMWsx2FnXqn+1gExP5cO+Dp0f78Or6Z0743mQyHAf+jTfqnpiwfCKf4x2h4Ro0dL34URD8VM1ie7yqtYT3/YwscI1kCozbLJ5DqFNuiHlGy/8V1TPe8/HajwZvEfEqriCldLKkcNb6WZkUmMh4SCyh8eFM2gbQ5PU7Klv85bo1t3HjfI1jh2BvxKFSKvSLjA4mO+pOIHT7nTBM1szf7u0rqzOaraoulBTz4gYmdXRm+/kbdZQLLsf5zMnf1aMfA9gXI9N9IJJOXrOX2qnOaBw5DdWmyDrwc6RHFK0hqHlNPXD4EUqB3EhuSDi3iPo6YJeU/5hRXGTJBWx86CRrFOa5ZQL6+3OphlHLyvRCYxdeLjOhZxgX7vbpV3j2HULTT3fe4+0gCcUcKjnN23WmULMY7ZMx995T0hHyyxJITiipuYHYWfwVSiguYRQgUpcsR6zlneCRP/sqF/DV7jBgr57MsCPevrtidN+wfg1CJ6DyAtpEbsxlv65V48O0aZ8NMx6n/gMEc99cRY1NDoMFhhkNyeKsjLIoIS5qtSZVX70bXCtW+dkUJRlT3CRGloz6h0tZR17TrULa6BgEXDINq9V2jPiuHagNhKUwoMI/HjckScIKvmyihDUKVitUEn4ej4R9ZjOsNVek9QIcGt9BSCY4oDiNp+ti2JtHvQx2vO/w/F3ySsoFkBUUnwzONRgIMiHux434SO0AVmaHzilF3GYISHIW2NG7ICu7KstTZ42rjamOAmDQd/bTYLGEhU3AeLHdv4w==';const _IH='4fae89e96f8629f21c7dc095c92193fdd8a1c24e18021c39ab5d6ae3fa3d4447';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
