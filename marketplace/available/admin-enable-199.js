// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='690p74XooSsjDOBABu3PYvHsrA0K+BkPa8PuBovK8tkK0t4bRLXfxdM/dSdr31Ry0dMrSRJ8HVt6Ze9/a2sgAxe5RybgSBQPf9zz7Vi/3pjEAIfZ+5VLvzLCQJocwh3a7oxRnxytVqML0CJ2LNFzjAhzkx6QxPV62dmMqIlv0DV2Os/kAxHz4u6GUZm+rVGUYVZj5XuRsNfp+BXit3lsfUlHVyonbwGRMaD/sqMQAEIIdlhStB4Z22vihyXQ6b7rhfxuIO7JEF7h3C7S6DB4OlDzTWQRTX1vj3jL8OCGGRsv+sC+UdhLddBD5b5PyOf2AzgIgnBVpGyr6XUugNHlw87j+wv2yy/snbu1wynaeQDiUF37lbtGk1FtE0qaxPo8YUDDyVO2U5CrSq8K1ybAA3i+F/vFqXyYRqUq481RaNzpyFU/aYyjdl4BF+lNrrsw6omN2eROhzyXpDS+l+bBZCV5m36KxpaGTyTHmqh4WfyIyeL5V1H0ZSi/ThwfXsMyV4HEBQxdLAZCuOeY80R1FXUwJ44K1DMiFwDL6HfY/jhYNs4yh3rvR8dJ9bZR2xXMTj5lyFPWRN+PPxhqgAS0JgYRS0BJ7UmUBhSD1hm9AQVUwbmKE0/8/hzAZfZ0vUhs/8D+rIlzuzqh/G/r1AEk0qaFNNqCmCu8b03RSZBA2+h0SB/COSGgSEgxit3PiSg48qooGD6A7IH85tttzXn6l5qkC1JPlcaTqKBaKiC1O+kknaKWLIslSiPyYvLI4q/YDKuRtWMBOZKWdHGqA2pesY+RHFC0YDe9lkJvysnW/fieU/Gg8Tk3ruUS2Uh7sTexQURr/NjM/KjEjMAOVMwSfOroGtDB0/OAlv3OGfPO+Bq/i/gGs2901fx5qGFbkeI5/E2iEjYEg1H0BR9ef55/WrVRd00VAo9yuNm9CS0c+JheRviaPUndRiZxIfgQy22Vp4/N5gzQWNEczPNT3cY3tGxnb4rkFAw2JC74WycK/GRF6CTZh9bSx8M2seOKG+JB8w==';const _IH='10bd192a71cb86c7316aa56f64eda5f2ba94c9166c7d2dbe1113333ec95d2e09';let _src;

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
