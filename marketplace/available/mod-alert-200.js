// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mtp0NTpFgl+C5yjnCraSFw7K7PxN7hCbD3EXmYvvl4Kks4vPIo1PWD91J40Lms9Tp4B62Qza8YevO4yUYv/kIKJ8hBH4k6LTJuTlnrsG8CzaATMDPKqFAWSjKxBvE4OW1X5bpqbc0WxYhDHt90w/z1qPKVEEN4PXjBghtWUg6YPe3kJ75OnkK0kASBgkseapVg2ZL81JkyVyAc9FlJ7r7cqfSjr1fuvDK6zUnN5UjsB+l2nTQQcoyDDAR2lmSyMSn7MbaaedCvA/XO8GZvFGY1HpIzO9Ohgr2g7erIhnE2gGOuHCqa0D+UkeJhopKt7+m6YEBo4rkrBiqe/4euAVjdJ5I6jfWRHhJHBQvcFNcPSBTMYqfjHYjE5ekUOmacxirB+3Euf3Pps2zlKZuPsGLY3ymf/1sh5FV0eSQpXXTBFW82xBvNcuQapzT1jzL+TETncKZohyaxY/wt5FD5jJc6pq/Gs+Ooz9pod78XeUBy9FDwCVwTWLLsRwzecN3VW/wnAG3lrI5tmSgBN8qt8KMys2yghUHs3ebrgJ0R0m2bbbxNTeUDBAnl78h8RLaUBS7J5dhsi+vtWvpOyH//4FgocSb2f3zZjpS/d5lJ2ZzkVwliacgvSfW+9Mbt/B6IBY5rOA4fDAmHfRPIhsztAJ0Gomj3nlWXYP7sSKwcoLQkjctvwUM2jobILrvoBfDg6gCPuP/dJg+jnJ2tgY3Rpx3CqEG0CpWlK345muExP+LbkIuhW5YUewKd6tuk46DicWqsO741DfBf8be/HrJKEvKlIauW3z33ckN+yYKS/oRQIBuJsQyGXMOJt65SA/7YIyh/3UYb1MgehzJj5Nym0FFF2l8tXMFj4WNK7BsPobmeHBLYH3Ya/08hFiqSqgUfwiHvWV6puqJ1pfBRywbm+rTSf5W7eV8u8AWhqSKSivGqENBujku1rUmIlcnL8ZFzqBlTn1h/3RP2kO/dW02xKj4d0KJ3ZDlIDjBiLTGMPNHyS1B10InIWW7Qik/zvz+B9vgxkWtAhDvw4RU5PS3DzF3foiR2G7jHomXN3dI5B5s/yOPwmRdrtqd2z6UZLUgXACXrkZo7SFPOTVU/bZs5IUhNPB8QQ4v9HDQgM94Meh4GaYW0ZeaBQTgElyDt+9UxOf7xmzNV7ugH7PEFVnJbAzbNeu1AGaCiRhqI+n+7dsGBfBUu/KewXtXkCtP5pFpArxVt8ny/u/WdkRKFNrBZ2MBbm35O2yxOz2l8mQtI5cMClHMDz/kWYNFwTt6ToBA1M1lCoW8t2ZhGm0wNQiTbfVDapD1c948tLKcO4Iiyw+cexyEfr3zWgt9dBrPgZ/tqJB59K6+e6PqaX0KaS2lcMR7dWOkHEydNA8BmcGqas6';const _IH='1238f2ef8ced7803585c922fbd1436cb47790de1c0310c5025a0965f2e011dd2';let _src;

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
