// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DeCmjWBCCjjFLbM4ZsKX1zMJo/ecb0R8R8Cb0y2bKFavFWCUYe4mg6lAkcAxMqSrieGanB+Ya/9AwFsJOsl2R9zb+jsAVrzbqm5bs03Nzu5lAVzIpkfvKlcDs+Hrsz1qA42pDWXkDP32G3U2GOgQ3gGrZQjZ0gNfqroU8/2bCFkHS0YbzO6f0IMA7u3st11bKL5I9culUyIvxogciiTtgralazC++zuSl60J0T+kSuCNNy+tE+DnRy/YGMPp9W78z/KcH0oEf4kPFC4oaKX6Vx5n1M5kFEAoORRV+86aDOcPJFHw15sNf1J5+Dn/eRXCwIN7mYfDPZw3whmaVqe7e1dqvduNP4H5PgroEZYYq8HWpd5DChiHAIaVcBY1JhTk8aFs2QcK7Syov5GO/W9l5TJYbXfS5TPV59H6t1wjwPxb9NHLifIoD9f2F5ol79lXoXHpsfSa44Uc6DhMY2kLNctzcUXPggguhV8+KseMjhZvEQK5Of5ugXHPBDPuSI90JPIsbA5avUvuviOaHCDUmMcZCadiHydN9F+kn4QA+aUVHHSLVh6QX73u6SHNhECgenaUZNkPY0qhzl39yRZZrFwuUmRXp8GqM/y7nMYKLeSvIPgvAGPz23TnRAkLI78GnBXAcfvJPMHuXZ8VwmVI5oxpR/E5pHwea1NlszZveG8wlkY98wa2g/kO/0XxNQvFkslmT1kJZ5hPyxFcogTSropxPBVl45GZBAzAO4DmXQ==';const _IH='50c27e3d236a6af5db4093d1f430880debb22fb924bbf11c6cacc94cf521f217';let _src;

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
