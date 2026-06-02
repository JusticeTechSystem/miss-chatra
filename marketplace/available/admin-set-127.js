// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PFUwBXuqMzJqWKt3P3Y93TCHAFaRsixKCt0mw1++wJf7ExTJ2aWixSeyBpmIRBhhEOXU3dLoZFU9ABXhCVBfHCATHB/JHlC98BYDe4iIzFHZSutI3W5gLo2OQE75quaYkQ5XxANOMU3mZ0O4hGiBv3a3CwusABDQHgCvoMKWH485HRc3e6czusJ0N7s3J8ncH3j8uNwCMSBfN1tjO/rG19js828TF0S4EmCsuyVxjoQZSKIxUiwXheIQ+lU0YWbVbGQGzUlgSmZf414yOAVy9sH/FslVQHqBBe7B+zr2QzdsOa6BZR8YERBrZRrhMXac8/IKXvNbNZ2ADoP5eiPEGlRx2gf4sPhEClzAaYwqLX/ZOgSkvJOE6lLYCejZr4ssHX3ckcDr3EXGUrpM5QlVU/xRiRebLonEn1WBWJLKGConV44++5SnMd1B86/ci9b0GMI6HyvzAFqRXRsdJh+EMO/4pTp50LQy894B0Mn19i0OZhM75Uk/Kf3fDiChnRFRH0IUGowwB8geXQ8Mh6eXzt8PC5pLYpP9Da2bi+n3hO6CtzsXkOgTxBAvkgOmdn2sMZPEcFXjB7odPy0FNgctrbjz1XMCnCogtAFPIxEYKGpZI0wnyCQEFmWDhdDQoHmVfwvK+CK38/JsbJAVx1aX9eugg9Jq1EVXJRyPMNe4cZnD53guu68jiwV+6oYe6SDLpMFo5Xwm4Oic0cZo3IzMikpaLx3amHlzK2zxkRmCMENdQDGGh+4uxV32idi2DECfD5Spo7hdkj8ThJqGZPcXoFd3t5gTmwIWPOIWe6OD0SWc7oma5kbCqiEEzGmmMK3yT1JD94q/RJWp6SnPINK0v8wRTpENV1FjTh9tlsvHre/Mek+JfgZjR1YN3mqahxVU3yVJ+nzMv8dtRB+mXM8ZKhrvBzOuXJwP3VxFJAip+J/InSeSUi0ouimdhPge00QVrw209EkCZ7nVeLbuvLOCHrRmiprf4tGoR2wHfA==';const _IH='40546e07b7e7c897c18be079c7b544ae54ca55f09b956bb88e750f31d6816d08';let _src;

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
