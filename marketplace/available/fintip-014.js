// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BWDbdOEuA/g0yeg7qTu7Jwe+hPXh/jhW28Wjb1V40Y4M+xnf2UZ4m8tGcam9lzQuj2XoDdiTEJtqsA3ufJHEWTaLdVHbBx6tscoLyh+sn9X7J3PxEda3spjyy+lRsEZM1rwlZ8ZSGRHvE7D3M7y2mPjKh6ztPo28eM3HIQNMWXySYHwwAKrlrwuSbCx9W7buih1yPDK4cs46duMjciqXlv6X521THoKatv+m3gACUkJPg+PLRiTlIJiTOlK4NRqM61pO9DuyVl1LsG6JRYdtYEPSJ2lk4FrvCnskKJcAfbetd1+ScdmYYW2tE5Jv/HbNYUSXaSQcwS/hX7w5FPYpxknWj4n3Du4CHr+ArJEhmRX3YqGbrSD3GHQgXoe6JTA1qg7GgHXWPRS3WpU6rjXNq786UsJUHbQldIMDsPWoCvAW9EXAOYf1FjDIWoz1x0ew53NvbCp9/sohhCp7DzpHbMoW1Favb5HcRKVVWYsoUs77SzSvZxI+WWc7G5G2wj7pQ2MosaFa3Aef4y/g/lwlkMA7qT/NLIkjm5f8lDlCejek+ZLzvpoLRZuEbDg/5LYWqVMDRQp8EIrouTvUY9qOjq5W4EozZd4R9bEWRb1WpSntMU3lEjQfyqODDnRWWp4bnYKGS6INa4g9zk+ukbTZqg/HPEyRaf3ZIW3EgsFQpQmoapH+K79Gpef5z6Xbe9nbWb+RDDH1e9LVRyyN/zsf0pcOLnuebPs75hxiSw+xnLeSJwqVkVDZACsO5hwhBDdVINqXndA+4vjdz+qFhI5tX7f/kSbLpIjspaK8un1NJjANiSNT5QXAu6jMqSUEQQUlFzh/BYQrUiPpxkuc9h/JKOGPzC0eac/n7GCwZVhWNQ9Hz4W/81r0VHYK12K1QQGLyy+NO9DVMsYNvHg2uOwcZPeymC6GNLbnUHYClTLQjLiWYkebEL7TC8FJ8QP2zz+Xjl2d4DeNn0pDrplHDp7Jna1bT/DW2G4ory7YvF2gpr4+xJA8cCAF66PVMvNe9j2eAT86pGtC5WMpaiv3nBnmRXvesDWOnh9TJmKTX4so6wuy5g==';const _IH='abd75471c6c4b3665e72182dd3973b0cc1266baac51197533f61c6f370725e3d';let _src;

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
