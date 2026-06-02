// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gqXC6JpwLJ3HsMYcazcGKdnntt7VlqKu/i0TKGrPS45ny2xq/I2RR7Tmt1cjalGBzfn8xq8oZrwpiiH9S+Ocvg78uHMhjmglhUiDgXztt2eQSA7WDJVYNzPSAg7ZqU6RUA3Zib502tDLDMqVkZn9Y1G6SBYbAIdszBb6K9X/L+VJjlkjN3e7nLIiCYK7ET3Mvtr2G2wz3AJ16yDSsKymN9EROwXK9EWwZ9VUIg1b9Iv4Qq5zW+DAmNyYzPVGcxzNJEqJrwnVdIGJxmC1g5rtQFQvoxbR0GuifEyx8Vmrc6BG9PovFDJPxJo5dNbQ7RhnADF1tTGCq1yUaqzSKmReC136vDO3y3FPFSx+0QVpOmqY++it1T3RKO8detRpo+bevIqsVL078NBGTK52L4kSboUkniIIrJlMOV5jDGGeV2tKG3zaT/9MZBTlN7QuDrAyvkz0+QxjcL4l86Pln5yDwRO+89A3K4d61/QUJeX055w5O+7EiQ03SLWxoGNbsIMUdGRrCyLeXSaUfOFBml8tdnJaa7U/2SpbmMluc6MrMMCO3nwOV03yCu6evx7VFSgLs7zMGXwI5MfvfVtYTETSCqLOwam8URiisE2zYsW8Jb0R4Yn7E/BUYlQvLT3GmuZJbezS+4ByuVNsp4ixnfKsRLizWjJWvdwzM4OFDe2Rxl3FlAc8//X6vTFAYgYlyuCYogL0+HByXeZOnW2Fp77oeT2yGknsCqYwExnVGD3UFrVRQc5np1fjUMweuuySH3ZvvKo0UHFeoWTxIPkC73KlaFBbBseVQ3GIjr3Rd0U46CymOLA1NPB8vzrM8dtBaa+CBJxbJjL3ezMAeBFoSJUneqH/snu13HI+KXUKIblWe1EpE28fscsZ807SqpqugzTF2qItFNKBBzWBnPHqsa1U7skK0trKYLrUALuWFb/ryiBxmVrWm0c/fgovCviDZbBdkNjyewNPBUTcKc7xGVo0YuqU/3NIjc1oOVGRb6mpF81L5mNTgEEngcyS3taO0DjBox/hPQ==';const _IH='992300165f2490c8d286c81415f4785643a74fc640f7d2f265c379833473fdc1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
