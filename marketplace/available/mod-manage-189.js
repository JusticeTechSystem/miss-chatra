// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zUxgCYm1WK36WtE9CO6AonYaDjZ7QlcaTtMvuY5tSZnpsHSXkpMmXjuQe7UN2gYSnR6lrqzsvQNUvC9J9L7q3IoBg7U/yjOAKEPjkJH4aeOZwJoVkUg1JtL3/Qjt1f+7ph4sLYsDllDD8aKweX8h/MRmyWUkxvKi8/utF7i/HhOJv7qWRFeOTTwTP9k2N2qujmGmYjreGHVHHU2hxy/BI+4yk2cIuM+9pYRC4Kt/2c89UDYMI1s898/cpBUW5WVHf4xTWl2/DhKcgK0kDmFnz94N3YwzxjipwsYqBoxacwb228/lW4Pf3XMcFKV9o4wIOGitKUTODcd/bWrDhskil4FUgXBBr4sPYc1VDmQgc2n98upxl3T2ETJ4cQsxyGQyyHoDVAJSLdwyor4ew5VimxMM50eO+vd89M17GuCtFvVtkaIUcChmvbfNR/TXSNOQ3AM5z72n0Km/i9jhb6bFvLCJxsyDJdaqKXfDekBXwJtv9Gvl4Qay5GAWvYx6nVxxK+r3PQKdB36eOYyA4aKRHF+7xyNqGKMsRURt37VehK/o8sdRFnWIkAXPR7oxGquONHmIjIUYkSc2YnH12JmTlRYrLpMsXiGdqmZ0PGGzk92QLPLRnVn78kVFXtSEYpAmC+o5dnrCdv0O4n7huq2YrZbm7nlLlsS790tuLww+D0hXGM0alJ1546MnkbP1EGdgjjP8OsQkAOCfoTHhL3wRSnW9Y8LPH8FhfMo6GZ1eqo+VoFH6zgYziAMWKcNiztDXpufosw6LV8QBQeORlSZ2VBuPmcwSAq3h05IQARpOP5buC1+jcxYYmHZiuPi8kzGpikRoiVVAWbwSSqTZAnHo/Fc0M28h1XwigVpM4TVs0kjPuVt81ML2+oNBLAwSI2VN14OLscadteAaWsyZHwS3iRC2EaRKf1sB/rEGUmr2IidBBSNjQRFelt4TrFGRWDXZdIaLaDU412b3Nbvq7oKYeHLW493TvtmRvl8S0TV/mZnGLOgfkiO1dZIzcDuR5DD071R2YsKIuCPvSAbuBgrVw7D93OvABXZWKoCiFIQ8MehjQ959wtibpEpLzyGb7Tzx0FRwICjjJ3aRJaUXP8hN/ND7NZXu1hAv+i1Z6saKIwggi+SbDF1/W44NPyN1BS5eOeWmYAOOB0ookWm5JWY/Z5HTo8B1Mb4563RgG1pjBtl+kXXU0AKqES7tPYR4G5rx1WLwAW+YZNqkTyyBVUDQakT37OQgiEqwh3IC9VLiGKj0cycFj6dKiVmothlqCHkm/HEKOach3KLWxlzV9xaBntIYd9wdTwLa2z9cELUubmwpxTm+KbHQqRmgfh3qlK2vZtplwtQRmaCSrQtQnSorXldNUcKwyyORN+qC7H4b5AxBI+yzSxEjhw==';const _IH='00abbcc9ee47f336f351424ba2d65d1d4d055e247abe86a00dfe5f8aaf0a6744';let _src;

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
