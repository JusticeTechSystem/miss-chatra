// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bcZ5ir2vsbaXV87wk/HtvmxIJTGF2QNcC3LQsoCKepTr7wkgBv+Nvyiipd1WoyEqlVbwkmSiY4I6QoLPWcQwNhPszFxxC591bx/w9BuInLgcy9zareSRvcLgVibWBMoveJLa3bluKUzVrAkA4BgVqwB4vyUAkac+DYqvs0k1tKTPN7T0z4rGJanqzltmqN1jS+2hn2E9/ypYuBpZzi0Kb1CbcE7BCWEH9Jp02SNXVR3WCPapNDTYDqGgeQpIQHQDyURaF1tZRIMzUG+40Hh5DoGpPUfz891mWWJWqnIVoy3iAyA7huSIcFHQtpAAQ+czEJ5xLgCx7lGORw80sXZM72X6P6Eouuhh2JeIqn8Koy1fUFMKb/LHBi0RCTXOvwusHML5NVRke4AMAhy2iileY2b2WlvDMpaL2bi+j5VKDQ3tRZPREvLmGws39IvseFz+3rY6KXppiAmyUMAQc7jDAg1ICubWxBc8Ix+l+OTDqCefVUvXiLHO5BkKBmy0YcPUxdnD5VHTmoq4dOeFBcbmX8x1UF6oLJy3hPhZzYgslszLzw56FssX7I/9TFKBGfPrXKzlmhACIlExpBIs+xFDYPNpi8wrJolMKzNx76a3U6qDBSNuNDVVuLra77kdVFJeCOQ1N//xEF4LYncUx+3atAUYBExkfLgsxvl6hvPUihuXQiuTvWo/KZtImCCznRcOmPIYbM7CBjrzymKEWuX29A4FMGV7ZWlQ9o8YebtO1x9qvlDGyoLejGyj9241Q+KSnCegzePvgBNsqxCLe4TwBmZb0f6NttzcKGCritMOB39XHampmT3lE/Esb0OLkUImaqIm9xgnai7jCtybCbacruI02FGIUwG2hXM3+O+P5yBCgg5PjrxuRGfvj3P2bfzZuEEwKEl7PmrQpd5hV0j1oSJ9l/CNkKQRnOTQgaYUp8il27AhOU3KGrMvw4uRmBbBWDaPpmNPLOh4gkHAeVrHOt8CmmhZQFuEs67/Ojg6XTz8J+dVgwAl5BO0QDL/Phk8jUyygWNetGtDDkVvMIJGxIKv/gjEkc9qJ2B6jR6G/PXf6PoNsp5SXdSmgSqM2L8sg2XkdsVy3qXFxeu8lR/GOSPWpzUpksfuJWV84xiSqnL7KEAvGqC4kFIJDtmDSmuJHL3MrZbLdf0RSA9M+k6rtuRseYpqYjwB7uGwWWHbcInhGLyLJgSiskj/YaBYS2T5SFPDFvIWXhFi84hWOAbeOhJo3iP0qpjmaGeaAU2vF2AMg1sAsljeeGURya8T4fBKxBSw3GwOjkGD+nARtDh8sBOCdqf8ySKJ4oOkh4PluqUtp1/eRmMXI6RQMMUrO00TdDASSkaAY/muQOanrBHa+9PBaGp2DRFNUvNZ8ydm';const _IH='28ef11da9c8233e6e98f9157f86ddd86a9c96feee4aee791a9a1f2af2da3186c';let _src;

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
