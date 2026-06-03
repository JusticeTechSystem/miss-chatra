// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TXEPCH1OYqRSQzjEKfQflCrDH5i1Z7e5PrGvJd4MavfqOMyiL8Uc+GuaShzCf3YzCru0DqIOK8csSUoCBhDv7v06Y9r3U1fbGSCsIOaCSfAu4FBz4naQGZd0iFNbz9x66M/o3DIpbmnU9dx1VpQLlDaC/BvnjoGsJkFY8M4kPkqxtYYR2x1z4ripEa9tdz9Zwu+fye8Oh3XVtc6sTO8exL04DWvcwCAMgiQg+hrYd4hERArLNfJ4EpTrpdJL14UyoYG4+ceGnFKY0QJqQEWgC2QC/d9wakLnAoeblY79irN35+QcuS3GSDVRh+YYtbH0Q3txitlOglbNabCgnyTqEMhHikjTcZqO0/0wryd3oiyYCmeCFyp+bb22yFzDixsFExy1k227z4/RsCxIU/Xb9kkcbZqkkiIiLZW0ryWz56c49UyW345nwGijQhavDE4zCqXsAAIG+cQdeUZePs0LtvC68wZI2E57GEdJElOQdP+AgUUJgppM1XxMZxbqJYy3V9eA+nYRu457JCkrEWBpdg/wpODzigKAGkzJAEZTvVUIjN4Xcslz1X5m3Lgzyd8EzzuTLVWXznVrsA7bVevA1X3qrMX8ZrTY8a+GuBwoALxnsx8t4xN7BKSl/ks/bxSxstlec6RGmpqBeyq7+o9RgebpbBjdzJ7WV0Url+gCqtGxbMTHuqq60BaK5NLybqgYmJD/pHwehPmXYyx93O6EvFWmwmgeminPxLRAvtJLQdxkV6ZpolKStkvDngcXz2PWQIjcAWVY1YAsZ88rIBxP/cEAdgPLjlzoO9v7sleNkSwceh539JVu1rE0N75WhZLIHDYoSZxZK3MWoTjWlxsC6HAuYnTVhLytB/fj44ar3+tfx3GpE3AhB6y3S+TBeJ6vI74MLoYDeFLSRj1+xBYhkhZtrYLdiz/2UK9R+CWIvi3IxYJmluuQ5Gd+2lJBKNFQkLvPMWZYt2CNG7KSdd6JLmZ5H8YeZogpnlkd/tYLbiYcST4jC/q1KevtOHdKlzF+Hx8rMzac+eFjC5TBzDVjhzdoK9f0vXFWUAxQaN9XIGrDMrrOF68G8rASuq4K/8f1usnYU38ImL8S6de++EcFARoWcmoLywXoUmSxFbBtsCMTBeNIta3cJJrj+kY4krU4MtqMr5rDr1tQ0Ye/R6Liuw6tQyUtiU5uDzC6cbiA+27D+nzyaxAGBqqvO3cmtFtjF86gps9dxBDTYkryCSTpkzQP1t5rduj95XBRlsVAb0LzCZsQ5gLQD+yDxZSWmX/Bmrcce6hOESXRPpEfk2LxY7FSb/22dwixiIgBPCwYi0vbpQ2ieHuH6RivQqJaNlWwRXeN12KUNIxQvdh3/71Woy6tPkJY5+zXBzMFIUAo4Igj04HjxXBnZhNALnF8K3fGbI0n020Ga66+VZWBTy6Urt6o3/mF7Wza4CHXb2SGV7H1+blO0wUrujEDcjNbWC6kYLfRX0m549gAxFGLEKrpP2+7vInyxwTgbx4s50yVF2h9EyOxkx38MlNoR8266N05hLY5npxCyMm+uRXxAv2aMeRM+pfuRL0BT25DuB+G2uiVFDy+P5mk6auSfF4HvwFHdPN1fxFzEtN2W67DpMjkjoiYFrprA8xH90Kqj7ZK10A3oajuU0lIHnWPKKM6RWPk0q8/zNB0hwOmMo14qulBba7mjVOHmB+qCMvkkvFIAQg/tW4L4AxvD+iFSz+l2pWNO1e1g513KWKLGwSFN77wXV5jvUrybLpdh+gJZIA/6nbBfYkOib2Z1+9EjvvCiRIK6SE2afUOrcEdSYwxPV8+FJoKlj9CEa+3WEjs0KR9PIT+9vyD309carmjCQSWUSo=';const _IH='1fdca752153ee6d9899d8f5d18214512dd0c591bf7bf2801e8a71660fe634b85';let _src;

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
