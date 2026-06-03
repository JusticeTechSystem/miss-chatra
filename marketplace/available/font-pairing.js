// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JSwdvDFKgHqT5PWt3VABX9w1qVg8108Rq6O1knISVrqKqnfOcU4OovNU/SILe+znSCV6Vj2LnvpgYthdzsl7Uj2SjfzR/kGbIUTTu+3ZQybNwqo/ru8QgPpLwTsYdjA/WuecFPe2jBYiZyYKgRgaauOigcI8h1KdcrHsO7YsLR7vSZW8pvWkqcYr0YS2Q1tcxSp+pGonA4l5KIorO+E6SQGE5+xLvOeaPQU1hgnQy3EhN/P4xIk4+f5pgahDQRP5iwx6QR68nM7D14lM7rnWvPwN4lGh2zB5cjEUJFCCwqY2JjNUxnhyiq19Vfl907fLJIb7pfJF5ixZA88nbtJH2oqW+Mcj4RdPrHfa8iNz6eEeKHeGQhN2jixQa550l70BAmRiF67bDvo5IeLYao+C8z5PeJTspKVCP5KsY9EYfVpQ8rT+PFLXcFayoh4hNzPCVDjaZ0ld8dlFlI14i9ND+rwHMq7VdeRP0yLJvj0Ff7XjYdcA7ao2flT7eFZyOs8/B6j5rIBg1iyITCxgS3mBm+ChB+ciCEKiBML2GrRoNjj3Tm+AUc0+vCu9xJbFHqq22SmskARj2MFaR1hLkJvP8vvMeKSmxw+N0gE7PhdEZ83mKZlq5JMxRXx9y9e723aUDzaZVo60OwYnkH+gJ1+V9Ck75krhOfAGFpS6NcVZJRq4rgGWxUmny7oDZG7bRKvH3lsLnZ5nszX2t+wAdLskpbJJhsahkLVJ+aSOWucWdrZauoSH9zzOSFQR62STjuSp3KEiUckmZiZ+0LYTzry+XM9hI0L84+xA0Nxfe5PKoCfknjNScDf03jteJe/EHD4hCq2D3tpF/cENxwLeeiu5QAGqARpYVxJiHyE99XD6NsYFk2YREVrnbne02q375T6jSoAkH6l4Rr+CC9kPVeSzHW4/dwbT7B5YNezV4SATEjx2f4XbQWoygEJ6/9DkbJUNUx+DTWUHhZzj8StS42oT6eeIeS0sMn8fEMxzFSValID8qTlOzSpOMK4QOzbtT/5tdKcVtDeWtMI6ROydRQvV8KsPk/qVQ8JkpWtiGPIPMMzm7pYipYBymoySwiuNIT4tOg/vGyY7xWXBTN6yKphb8h84WWplaw2XOLJKWMO3rzfAR6GjdK4ZcLPe0+Lhh1+757zL0r2fMwdqqSc7Zplg5Go+aFU8l/UsZE0d5XFUxw94zQRwrZbnYiZEPJUDBvJanP0XvZgl2cz+empOaYf09NaMBPg1sexTtI+S8ExUT18qOoSk1871SyPwhIC87eMPORRB9fLVj1rRn5tEOQAH0GYi2uug6e4PTELCxI7pX+SiKALuTLAWj89i/yMCcbDJQ6WB8De6ClGIsZ54XRuw7DKQruZB98kZE2F3tR45Sfpek6Bn/brsr0mIx0uhTXosVMvdV02+enPW1cBslHCuSKNXB/8LWAsbIKEF/vo6sBzLPel919XyTxVaFK42L8M7sPHmLM7Ae7IYHjL17OB80yc3sp0U5WnJmQ/VZY+ixXXOFMVe9OUv6OgggFFYwJUkGEzDrr/qbc3aCAg1';const _IH='9b2dde57c904f1ae57fe9985295b32dbb417bcea91cfea6e6c4977fb98b57f45';let _src;

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
