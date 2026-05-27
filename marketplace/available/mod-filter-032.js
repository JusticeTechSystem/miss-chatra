// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u9c3Wu56gwqG0m7X7JRgaqV6q3O9FEdUbZlZDcV7YgIDPDH8kU9Ak1SE5h6Ck9p/YFvbx915SugicNy+2AribZdKkrE9OoIBfFbUJdG5KSSC1SSxeYS7tFKIYbE2T0kPoxO60irIVX/OApO5WNXV5djAcpGK64rMks2rRQxJCCivlMNLmnYjZ5djB6tfGWPVX6iiCwfxo/zXJwu0ugNrStIYZlbU12oaZitJzrhGpB/Y25DaiIK9zQ/xc/O/c/JlqS4vpZGTCB2Y6hDdArTeUreLWXeUWGcLYc+eaposx5K4PZq3k9+9R3pIwPcbEnWSnmOWWKVlvYZ1h4MlkcHol8F8WzXMjJ3ngY2bkZ2cujiviFoOn5OUQc9TA2e4IxiWpkf3RbRZf60YzbV/OIejLb0+/hSv1qXbk6BzJpS1+ijXYCfZBh903Nxg2yWkVZy66xFBI3tdBahYzauf149ddsE3AYLvtcnMiQgMrW9zN25TxN5Pxfo0Pugp+8G0Dpss4i7Yj3bNlg7iqW2JrKdWufCGeswhkTi4Mvg+rUyg/zc91XuWB6zOBNh4zfusTaruTYRgHHSdcSZjr2js7YVmrOg9QI/156KMCIsmiwGYMlOLlO7x8VYxiPyT4XzVxeclY1yzCpxUaDsJw1f5ZnRpDYuGGCUaZOSc4aDaxn3+cZjcClaq6vFUNpuA5XZiyNLpAzwTkXgOSxxJF1K/DAEIN4hByvGB13YYeURpNyGQzAZHLQZ8Ve8KhsYzIcijsLguYkQ/8ZBkgJokGHjmRSKQ+bX5zc56o6KTfYiQ7NmqxGr15oB64VVcr+5M6vxuZ1mz6NAGChq3n5g2+bCJf50eKb49ePz+pGjaylVgSKBukzTMQwnhH0iUJR7+4DQdNNBNAc1yKpXx6i9IWx/W5h5ItCzLhLaBjT4luiEfrbUPtoHqwiPlTLCeErNKwRfvZ3kSYDy1gCO0dJSNdtoyaMxxTADRSNjHA7/wfaFZXWlu2xpmZT0QaQEaorHosrfMRr4/v3FCClzTGMzVjre72Bpw0LxDTgIJ+nuEPJ1uHK7Qjg9+CtY9jt4/M2w1bkEkctW4vmSWptLu93tS/sdsNeLb+u1Ro5jRU7xySJsKgWwOLj7YXSQ6WRh02N0yGywtOE6TPFJe1MHphPw/3fGi6Ji1jLcXMon3z1OHOF4vRQ0Qy971IyLy4DQRt6WgFF7Qsmd8BVZ4UejIbstLBy1AVsaFkm2rjAUNJ8XkI6ytGdDk4yrYKC+RV22oRWIdk2DwdRSKS5klmg0WBSAuepbmVOW0hVQQbKX6o3VLCJs1qyJ+hPqtViOGPxvSFDZ9iHuBgY+UK0g8Hk9y8DACFeX9FpCjMVVEa2RPL4XFihoNDsFozX23fro=';const _IH='a13954e60baaf7b4139f8befd61e823a1b7e70c1606cd7dc76802027318e82c5';let _src;

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
