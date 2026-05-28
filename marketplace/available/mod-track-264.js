// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WFqK17cTWVdkRIdkLjVSMsl8AGp2ZLOODUYf3pbHRNATBHMKw63DEe8dFwkHVPSNePxuQH/Wwscwd6+VKtXrPhs8oqLrECIjEX4t9oJW4OuAmLe8Ws2GtxoGtw4ns7VE2u5Xz6KMBqZUDicqtOcw4Z/YKtrUKGHvleQ9MVvQFLiPsp1yQjL3HHBy2CDDqiEgNtG3I9S8EEV94rgh2GQQgF8mlpAPvPNnmBB0VB8zglJsiPRQ3JgZy+SHIJ8WP6gWMxktUP/v7SIqoMFUPwkMzDzwZgDyP/DFTsJoNTN20R0BjGpD0WBm2R0Ec0uqRJUg9XpJaUSenT1qrGgZhtNLLsKNjx2NYHa8wb4fpf8jP0EjaynGCB3pcV9d0sz9pTDGWrygAwer648jV/FDTAGUxUSREuFAhIsPhmZbagcxaEZ7eDNJCT9y6Irraedu3PDexweT0rUrJvJpG8osUwkwxm2no/nd6SbtZZkNi0mtnbPud3qh1jLxC0GM7/uKf+Ppxm+V5lPpgOTmArWhJdeSsqrFcA51Mmme2dO/pIF2iYI5UAHN5PgPUV5X3QBWl5WprQL8vBydUcxhyzpZ44eUtVfhgSFzYKrYtthUU882fsrM5Ot2lu5hmf5ObmfJRfHP0w8HD2iOAzBh0M9CjfBwsjW58dL6T9BE+H807Lw1LUg4r0PZ5gGXyVV5se/Z0fdENI/cBzkGsxD6P3kaMi7i/eNq+0WxOBp0rAEes69cmFcvfMQUi87I9WWmN/mCdckgX+Q04SkzxYED1pRAMpJx3C/naquRcUTeUOOXRfJShw2K66b1ytw1lhw4Xx2yUZUGyQWQLDeeXky4sYn0CDadQYZOl/jTPlkq+ZE3Qm1awaRAT1NMPNx6qc3G91UZZ9YVvCtwjYuf3wbUKziWjj7CxyB06uR9fezxpVssLZdpKeykHTEkEWpnJnZJB+/yI/wpvFs/67E0vpkBnuj1jyFVTiC6pvzzEdRhsGO1hMzjL7UrKeLjCEckbwUvXNoZC18LpGY2cudnbFT69Etmhr5RZ9GaAe8Kp8BwtUnv0w/lsVyWL6WzItCprOgFTnMlZdo4WoYR+jTpLgo/QzBv9jFtdqIlQml5F8RIzg7plC93SQO7i6dt/s3CqYq3S5kcKXr0b/w34acUB/2bY/xuaxmpaemMzFT9Xn6tYQj99N6/AaNzwkj7KbSCF98sEHuFbh7Hxqnx7RpEtqjphO93D4E5WoEt79GiMrVzzN+ezSuKqMcU6eIEbHjBPaw1uqrIOiO9p14FIm3P/FVDrXdSGeH8gdlZcZ7sY26nlbbDcey8iocAN+jIxKe7UZfsT2NDtZApBov9NGQdE0+BMK1asOUbvPzMF9omDorXjfyvNhPU';const _IH='154a3b8a56ee0f05d10799ca664d50fc2137654ad943d58d0d1ab7ce45ba9663';let _src;

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
