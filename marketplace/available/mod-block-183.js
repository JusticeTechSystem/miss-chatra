// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nojIXXD3u0ahbnFeVHx0/tDfqKbFtT/jLZLtVlp/ezlZyyj8Xx7d5TK8CjqwwGah4I/XQK5WJIY+mb2+O6D41c7VLNzRyPr6kKidgM1HTHUAVxIJT5kUhcbeQeFw6x9Nt/2GxfIkrs6MxTWlzzvJDlb/XP7QPhTMMI5CrbipbWWgzSCYaRP1SMo7pw/Q0CyhjckahHFLcMsiG3YpVNVDFq01Wsk1ldb3Jrls0L74C4BgoUdZWAReNHJuOpgXjZ+P96VOy1wjGKMW4Ecf4RMGXilGNOHyIKK8/fijnmiOIV0nsW2yebIvy4Qaspgfi8LkpVSKyou9WVabp0wXQKQebW8CpmagxymzkA+7RUZmQKb5JFjWTVKB+4KfQdiYk8TzxdjzYuJ2ljn2Zge0E7ffvqy/DUD6pSfxgqF2u3BjP0rdopFybKVJKkhDuCXT0lg++ynN9qhohC6Nuz3cJgCcSeoQJw8Avqo7xMBua1tqAISazHex+SmQzDVA6UgPdHt+jc8vCnT1OnCESpO3yNeCOLzkiBjqsg9+GH3ReObrY3EUiKNBcFPfmfyuNswjVtWLdZ0fMjqb1nVl9W8hOncnk4OsgfOFnMgHcHU+iWCCBYGOJKQv/tjeQwTUsniQ0JYz+v40bUTkiHyQW/qRGwxLDSi7ypReefBvvR4nlpVwaUwGanmLx5VrQdE2JqgxHUTqx7tiRXYL9cHEuiWR8OPq0AvYy2Yc+bGPBCKKMKQiGt4iMgY5mlmYCKatObgPUNGmHkal4uBwNTXVszGELCGqBQfpxVbtSLO+l8VoV0zuhASQYARzRjtLrUFvSWrDit9v7jtRaTesFYTk1zfdr/qzB65GryZ4cRdQnQ7EA9ynGJFJVvEmX/CFucotj48o/Khr1/FRtxXDD4DKqlJVbjbbz0vUUoyYAvYkN/7gdmP1i98CBWobF0dO1lllvM43pzEGR1g8SJl848/+Hf2AvFb4Sxq8W4Ci89q+927PcflIsc3k7Ugl0f8YmIGNuoug3ODUphpIz3hq/2t8rB7Bswx/KhR4Ey5VxcaY+AYcdYQo+/j1gREx4LfXKOQXD6trNGdcUa77jmNv6rdzzsEJ3Uz+2ZgTt6mzgzkfi6dXB4vUTv4MvnzyauGe9Am0ZmybsGPWdGym9WjFxhwq+LRrJPmeCZFMn95hTItpgqgF8NCnIvLRI8OT1PYgWOMnTatEzpsurPbrxorCl2rjNqx/ZMsMd7tR3aiBSi5wPgtOZvHVrCCuF1TExS9jUaxpXj+lsqEgJx7AWl+YlcDvT3IKa2ozh+pwP1HJGWTMGf7wUuO2aZSVuAjrfyaPQaAk+8Ms/qg0XhmuGng0zLBNHV5Ybq4rychwa/z2PC59an45QVPu';const _IH='d33fc9bd60fe4012823c6a05676925d85957fe10ac1393bc6d56eeb5242c7267';let _src;

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
