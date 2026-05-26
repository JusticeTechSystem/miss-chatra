// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='01mVVFwSqOb/2UKjq0t4bYccdzFjJ6JhKUMdiNLZ7/InbadV15I+Rjmyl3u+iYg6TkzbgWKnGvSRjwvWcOVzgrVSD0EYKbdj4eu3V4QgZsiR6zuLPHkoGSUXPdZUp7CqnmzqNEapZtGSWrMmTvB7QSxTpmjYc7dyCtgdLBZnP3WHPTDBAbUxHUt08YGg2q0UK9IMGWWYQqa1aCGs7nYtRbmrAVXtq/ZhEvJYyKnU4E2vjUWIGSIgUCBgunjajxy7R4crF1xAC9/I/Ynl1ku5WqrVCy+sCbj1pimvlR3F9vGUNpZy51+IYnjDyKQ+N+U499VKydwOEV2m6dEV/9YnXv/cLr3gwyF9pZ8Q3Jk5t4J/QZqtaa/g5rwnfBhrQAA4CZYlFTeSWyxk0Ywz+qDrBPhf7ic3vmHqPblCu4M35HlR6GAh+yO9yD+Mhi7NJ5himwp9zIjwq7D2hsspXjYGRDKeVqPhRKw64DHl1yesl3uETXwu6JRSYwrc2uoBwkZ696eodkjSyTeNb8HApubBdsKVOFWuOYcc+aWK4QoqSTtIAsYxJtPE3T7QZCl5uNBUJTcTDAg/9YYEjJWKR0dbCK6lmsDUQwr9C1h3NlnpsS5x5X4NLdi1VO9fjcSanHSV6pwOG/0YlXphB8w+8XPeIM24et0BZRRpfzoZ5UZARPmGnkKAvXY4wnLvmmMAkHAEJ0Dx43NVsWCXaBMK4Gu8Ne4R9AtdzayAu5YRrh4CkoRJZBLHn0AgA5wKk0jgZNfx45Bf7IqvjU6T4IOhsTpua2V5wNT+mv6mxLcESy2eCiXxClfBUNTtvYDJIRBmO1KKjOGGVkI8xeDm/QfpCkGYG9PJE/2ptA+X2xs60RpjdvZ8VxtzIXASKX8wt8OBAR14obTagODooZsckfc5dP9jChAMvuv/f6Hyt0dRxHbE3zsnG6cnaPwZAnMI8I5WPGZfalKRujxDTJEHLG95jLEv8bXWw6jUE3CLN2Dfn3vGPTXdfn6OA78wt6fGcF0zaD7MehmNIBo6h8OaPlWefGcW8W6r0/RbDBrDltZ+kvLX';const _IH='f4dce061cf3c21fff48f3bb65dd30046f423c558de5884fff26b1b229dda3539';let _src;

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
