// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FSK63H44+D7OK/TygVMqE0+CPT2B+REbvG+8lVLfGqfAhIFRjC99Vter/9/0wQO8EwDiK0mTs87mr+ipObHme56WNng76qcSqcADwBc/4E45i7X6OO6cqV92zk0Zld1NoD+WfZv7zL4vjIXXpw9BRveXcI98U9GsdZYpTSOXbYQSveWm96q82asR1gy6hlvz8iFtf76oxVeDy5LWyv6v0jEg+E0+9eDeJc6FGaX3BGCqjkXK8sQVbU3lFETkmJYiU+nIhbtD31XF2Pzr0seFmYRc2cta3yNcunepySaRil+mXFm3OxcxmDrP5lyvrIo1GX/egX+j4IcPDYOOuamxPkusy24zyVYz4HZij+WrZq564P89iGj9xB6K901J0Q9buKb3sUKNPxh8VZf644r3mEFTDMWNONZ0H0IfUJubQCpQ4wlh0EpueApoHwVHKgl5+dxm1G2nudSrh2W0EMkc1q56zuLjqvjSZKxcfAETRpQTOYHZT/na2dWoRgFiA1SjHt+1v9N/iYFs2XRwveXQv0b9TIzT3Bi7H+E3f3oKFp1MrvPFB62O0s5Tty7ib1Gxsc4yVml6iILpEk9sNA9+ledCprpOYWxKQ4ll41jnsNxot+b6IHoWPaS48GtVsthhn8pnLgHUfN4dwcJilrgUmIs2+EFnzLF+iJ1I8w2tVHlJxBeo648YeVVgH+lQcsNwzlTL4CB29ROhr0gKm7QPxzIi9H30U984Iu+WBMnuBSRH0kVSzexP1M36/HtuSDi5QSz0zkYR6CywV3xA2xTw8tbVdy1G1gqBR0cdN5f+ARiwIM80sr7scrbSAZTIIUVh1QipmnCWDkD32FOCyY0ie+PSrUtu9msvqwUbVR2z5976DhhVCqoA0X1iUZlSrq0VJVHqC85VG5jZR2ENSinSFfXAY41PtuQ7ALumY3+o/ZIzlg4uGGMuabOMycUGS/8eu1E0/OXiyFcvzfBtWP3FzfzWWnw6siT5BTeYkumzr9ez1lmFKCUFb8p/v7DNqXFfUw0UcZd+AXukXKzpz4dg0KcSEm6IGyAWkOH2q8QULJ8ezfBx+J0McWs0FqI9ur/OhrYyo7OTI3pYJeCnlRiyin/sT7McsYsmm9CG5l8ULLGGWfGIb5cdfRKVMNERneCJE7acORQ1xaciIx7uIIj7xzakdn57S+27q2ZkByDVQZuySxhJtHbL9NK4OuDL5wprgC1SDb2tTVCvYmHPCLddotpJvlF3ciWyvX9VLN7J7HMSyiWxSUCHwq2YcGBVlItilI+wc/aepl8L3LLVkLc6z3eH09T9D+5EB9ZIjXjULNvc/S12wL5z7xJoC0Q7WbYYi9UgX92FoWw9oXuRZuwVXViibxRo9UmrFz+erh+3';const _IH='a13130ba1e84c472d4ad26619fd78ec406f63f1571683ab1a19f78555fef81dc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
