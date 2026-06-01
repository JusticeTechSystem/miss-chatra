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
  const _b64='UUVOQ7cJKPEgsNXU+V8/sMFbIz2uNXlm5y0OVczXyNncnx7xHhV0L8jcNhUxvzjU5ztb1BadFpkrnbpd02Fnys2COg7CMFVgOmq8lwrquhromtSRJkKLhnCz7x6Vz0cc4V3kE7EqW8YYEtZW/RN8Si6ZfE2kmIXgYrKYU2IMd57W04B6mLxQYyWKoZp4r4tBjsPDokE/lgfYpB3qT7imN4QzaxIxEMI5UYNYGPqRyC9YTrPukZbHs3qDVtnToiH8TmQgUYrnqSqD0ycqG60GHF6oHrtXzhmCcUh7Jp7+qnW2Ff0GImss8f0rxjB6y0PCefglSCauNu7ZYxJKkacupgf7mKrb+V9/FocEtXglCjbKcTHeXOFF5Qac4L2xeT/05O37JMu6j0Vox6R1MV7t59Cu2CiU7D5Er2X96jN+FFIVVES8oT5JzWMT1XBX11eD/0CJBLaxmniyL0znfX3nRfn/+wOcIH/ISF5UM2xBNG+nx7/MzEvRySlHwkakAPrvoY1ghDnKuNVxazjZou6QwQby7d36CLc7Hv2SrV9X7BR5+LDOnYgTwbsbejf6qKHL50BQqPp8/OeTxt/PsiAIUF/KOk+hUgoljuoQW6DEURzDvWRZOnfsrZmXhuMwOyLYosTq3gxYfEWyZ3947qjiiPXlInJTwR0DZ32WuUlG90UMimUjxyVvIi86miRWdlfeqoZG2sSfAA+Go042f1QCnF0FMZsPeerN5QTSwaT3DERcWoQU6q5EYashv5Tfck9Rdp83Rqu8zK1r+qmaMNfaQUwdPGE3I+dvd7ptAHGRoWIBNhHZ/6EBCx3kiv5Eh91U0d65tbgtVzMqbaE7IOpu4h+OUowV7JsCKj/N32B8X4o2I/R/L2z5QI8y649GvkRoB8JcGuONQiY3FIA9nIlYNs0oKCG4YtfmldJZBQS8LWfAUDNh2M7qyHkm8scxzS2ieT4O2+ZFfY06Z54yCQ2ER9rjXr0TJqYyNSYYQkM8Rt8fxDyGEtin9pZNfzdAghBHOA==';const _IH='cf741d61c5ae5a83a2692cd21e948c201e69d3f9475017e0a8ec967ea6e62985';let _src;

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
