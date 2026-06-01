// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxtlFn9gEcGqgQOp4azXA0tx0rubP6EM0i3rLbpbyzg1zxpUWf54jtArGfy3gOGYSmo8/rG0hy4YHjR0dpXV62spN4gSSJLpQqaKzdhkfD+ZOYEBB7pRQuo7Ar7q4Fn30et131IV9Gljum+piHwIP+Z+2pzzHAHXl7a5Gpv7tIze6iezfNebaaDfHFH6v9JwOr159HyT/hOp8ZHjKY4niQiZaxXVbepnXMSbfuE1i5SB9ege6vSUisLO1xp/QVTTkRaFEZx7fpPvzwDH1LnfqPWhqK3X1UxWbOOhcQF6qAFp5CkvHy97MiDohIim/d6hu2uPukILQi70Mg867aTgoHAxzw2jEdukVRXOdTrKydVcNzz2nyG2D0YsmPRKyAf4T1tlDeAPogG4+CFmF9vgMpUgpcZ1ofYzeuHA1Rmsyi95X/EmJWl8AlziMCVeRxGSFUnAc6PQpLHUHCnxXoaoTud3slbQsR4jWchchb31VLpsy+VDQyIGbvqCeBjUS+IED06ah6mWk5l6AT+Zr9IzYEo/Ok7Fk3ZDXrtvjpbSKi90BQG2H9eZP5dESUM/TyRRNYZhHwYG8h8AANY2vHZmug8dKA4rxpCwYlFWQVFWCKm4nq6dAANE4/GOMOSyr8Xom0mRnZj0sE69ca7XmHh8vLMo9FXdEfdBcEDhQ8v4lsKizLMWZ2c+7MyTM3w70sX3qEzcVqjZP3++v7orpZWRVforPp/CN8qD0GvXAe/swgI0SBgskktjyi/NwiJ77IT60Vx4uSallp/W85nR/6qN56Fil4A2xiVSBW+WI9f9sXaOpYlcQ2QQ1MixjrpB772ZRcHPfa3k6tVytqnOo9eUa+NYvXWkiqTV4ky+JIOSSlXeykE4qgWUF8GjJMKEV3m2kf1WtdQLZJe7X38xlSRK7T1q83SoDZxqP7M1qLD0rf8yjIQlycMN7BuBkhy/89FJsPJtlvdK9LEHR/8XmCR0T5LQh5xO3R1ueAhcyR5+5AS42PSwqN56FZ7t';const _IH='51ad81ccb3ed93686aa86c77ff555e22b89861fbd044c7acfde89fa097b94af9';let _src;

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
