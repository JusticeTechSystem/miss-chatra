// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0aXaNniOldk0ZEi2/IPlHxwzdnmmRe07SKJ9NV+8QL/QNPRwGHP2XfNlZqQ+C3+QjarbmaehGVVXdRXNMyzN2fPyO0wSWn8P0aCIALSmWH5oC6BuXgM2Gn1ya8EOQiX0V9nTff2SL73fCWMhCauQaVITknr4W+dJAQ4XVgvo76mLVnQK/TrbrmkDjgs4yvMvQAOy4gkd1z5FrgSSrb65lye7tntEi9NEHMTy14H9WY7mHYYbqqr+00CQ0nE8TOct8hOhQzcSnj7+XLc0CB223gCwaTSPedI0Gbk005pQBk/4eBY5Zr35o92NP3e0YM5XMq/N0boZ560GzCKiudR65mg3HzbPaADZrTyMOx5YbVlcnKUxYSB2aA24hk494ylZIHt/Hz8m6/ykKl98sFGog6pa8f0TMXUDGxarfUInZG4P3lOogMy1Fe9Nn/jjZIuNvHPM8USC/N/AfsUV0v6xGfLktM+QdTqpMh7jerT+31MihgZ9liR1OvipyjXAyJ+ZAP3yfElE7UOXdZpHxQz9dFCnavMlL9q8XQUuiIsuWurOtAMUu8B72AvCqILmJbQ0scD4yg2gFnDFuV0mU2GUqib9hs/ugq7pfiVt6C+UBqjq2EB6UYc/XBg93Tk+CmLQ2GKT/6NFN35kfw3YC7hgRGHQ/uJVekhjjQwQSfCvbqSybE46CITYabDthSUDL641dvABk7qLzbaljse9v6SO1avsBbsU2V0dvKRVcc7uXpw5DotjQstxjO9ebtwuyDvxfrxS3S+uCg9oYT0zQ1/ib4H4HmAEDN6tmhwa5uLsg/O9o53z5NvBDBj/GQzatelWU8Q5IIYlOXqpc0QnOTRs8r7smNHDfpix6pQIMO4O/XIU4sacQkDXMOsszUnrihKdgdxKe38UuSM1oD+tyfgkp4KOfNDaDfDlT7KPaAhZ+NMyktEHh1jB9OBYVOum8GmIGhTJlz6YatKzgMbdZHKjKmnRN1NISN5tg0oyCku/WTCcp9MY0oV0FGYkQ==';const _IH='7773fd0abe648082611f8b7c155c623b7f0e0de555acca6f09940df1a02eacf2';let _src;

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
