// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T+mmXs4jz3mFLRtnBQat/srwSOZ7RHrGDqEo4ZdqTvdKe068/UK3BxQ1iwvl1B5+C1mrpAy3oe64HOK/QgaNgvcMlJxDDoFVmCuQ2y4u2LxlypscnnUwA+n2VjUjVFYH/xCxoZFydqjMNbyuvAiHmnmOMUTVYhtxtZo1I/EykM3fSH7DxRhrak1DNGxZCyZKwL+qeWRES+LhvJU4f1xTBIed4dZrF+oCLVwNBrP/5WWCEkSF+VS6TsHFfcK23CMytkj7sH+qyThXUNfpfiBU/AI92aNkZMW/xD2htmumjIfx4N8fQhBWYecInCFvYwEYYcDPS//K78/2t5R/bFmM+/MurXMd39JE2Z6NSRqGPVsolugRafjsWV1280oruVvE0m3JCaLNxZyPQTqfVaDLrWo267qYwx8likqGi9a4rM8euQGnUxuwQnq1hl0lCAcp6owOtrcSdEczfxTER9hZ5x4SzzJ4tmCfcQraguZOKbMRfOs2C8VJiM2NIqu5lGMCYV+KzoPz88M6SkAWAq1fFjRFCon2wwOPZaqVX5x4CSMfgn1HBhZd7yCpM3DdYEA4o3Q9VHVy6PyQmFaVk1vWMLJT3nyKkA+aTX64bmZULJnPjFZWa54FhM25FvnH/CTINZTTzkQxuy8PW60mAh9sZlggee8TR/BjRC+LV4Ag5vxIQl2JW+37l9O7C6vCCnO5yza89bnGuwNHt1R7Mb8S8GoudEDJeKQuhCqYo2ZQW0YHCupar9LxMHZFpaN+1w6w+YajNPFUdDmUjYCS2PRdCXWWN39juYM0LHWA+y2jHVEhdVgrAplnCyxnJ5e9W0f8tmsNJLmfsw2d+qN7anThL6IgKvvwDNB4/vijEMZQNGW16QU80UegT11MM8MbR7ZDGlkgUTdCemNA747NhXjdgWk5XF92XK/M3oPFxQK9IZAIA9qhFlqY0HPn6CQ9hjaEwo4WP8UB1n5D1jb7Tvzcl80ghlnRCzZXyEkWmg==';const _IH='374c9b49aaecc119b67976b2da83ad2755099b94d076a378dcb8415a310ed185';let _src;

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
