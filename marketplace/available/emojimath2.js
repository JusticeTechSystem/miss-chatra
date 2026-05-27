// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N8x7tFgR/afKxzdrzmF3b/+rhnhw7tvyTXKQiFsJHp6Q25AEWjMBEDRrlsyrb8b5fCm1bIkBswgursaRMWt6hH4tS+reFTcawuM6Oi/z3dEs6luyiIIlyb6/D/9a3QqntW+tCfEQckD4EcL3AHZOzErQ4EjcFnuJcumaWmgkqbcvL95EeZ+ZqqBit0tWVztujZL4ogZELcNxep4/dsdydLKMseQRCz3KsLGHs+IYR/bLrWdARWI+cYtqSwSkOEx3i2NWQ8pqdGWiz0FqOBSXF1QXlyNxzuvF8WPWj1wyVaN3298XDK2GXNuchfjDCfNLEav3dlLkl6yiOQFCxWhMo3oQMCXhuyboTfbbTuwBgo0ZnBz4E7DyquPpbd3c+nqn67P9f6JOYHqkBO5DhtT/48pYfbXSpR9DCHry1djRQ4jETZ4vv4Z5M+acLwb1ULfzEz7X4M3vnHoXXbecm9oIsxkqCwudhyyoD700gCrEKvrF1LJUXgB4mk/Vzbn+/IR8WhnS4SiKNPCgYpPcUadiUo0u0cRMtq3L57yc4Ufkz6F+KjRdEFkvdaf4hLsAgwCFeWHS6UFYoDzIHtS2Xjq3qtoPKmD4xgVxcgWrCeYSudj1xofjd/LZNCGOCgk0N6VWX4+ofbCJp3a2MLz/gdQQvOL1G9d18Iav5fwf30NzPYGSGWnk+w6hiadt8pc0238mMQVCZNO+74ZbYQETLyDTrxz7JZX9FC7WLr4m6gKgSIzYwN8Q/P9FadPVv5wgMjrSzIvZ3ukW/J5jsEf4W5zlULn1RSxMfgQrSFLIE5/5AFt90QueUMlz84d+Zz6Y+i3vvdKFgNMwcq0emEFYM+SmzLyeO6Jzu1YuSM25/UFYaJ4uboXCHhaUeiIXfMJWl9vIlBwqhO12+n+1Rw/Pp4pNA+V9wOyo+PCD8VEMPSDkeILf+gbBoYHAYGS/0dsKSxKNBlBGE5Zv9fEwkUtDtNe/M57FMrUlkJDDp4fEsBukfb7+x+Q+3wcik5wfVmO+Yx9xnyz2aWOFNCv/WuiOXWBoOfadtjh0GKemWcCamyC2ZIjvS9q30zUu7od3XpSWvIF92k+KE/Xm/5T9izgvKzSXEoeY4JLg59VOKOeJJJZZEVYLBHaNYNJvvfKeUz2aUtw7ROPrWP1G1rUUNpPrzNK3ThEEjQYy9Pdy2rfnbDIuJzIsTuQ98MJT9GeC+j4gHuCZp4LSY2sMNQ==';const _IH='50b2290c739b039900c7d67e7570378be1550431f8eaae3ba36e93340e2b805c';let _src;

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
