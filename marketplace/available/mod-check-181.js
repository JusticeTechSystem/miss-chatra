// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BUtqwHQymDG8dCJoT2JVWbOFlIFpusxVeIKUZs05PECLlXnenywba5BWezllcumsUmNzPizSU53uaRzy9RFdLli84gnYDzaRe+5hamEMtapvRi4dIQRK0fQrRuUp22qYPhnzVw8OFvZJt2J2WZ8TwO3GsuZgHM0SkVq6TXf1Da93QL/vSwn3KsI/I/LhlADqbOccGmMpcj/hIE1RXWpNaXfXGeWjTNLIK7+HVXSHSwOoASCg1VMp0J3yXdBGXeYu+YyFJQzF76jTXuB8OmXySdWX82ndJBSai7JgFg/qd8freQWRLFkhuMf1lEcTNDj9kr2D0OnnTeNA7ugxAt4xGO76A+wALpJCzeDBCfFBlC0I2i8LAc8Pj+dnU7VIFaTd8ubGQX9bYElK7v+C0lkNN/YkKxdNLRJZ7lXF7x1f5iIuH81zKOwzv6ODKZod6/akwRyPLEfD4kp0QknBxOkvK6j9BU5Eg+DGIkcC5GJTs4ToXv95GCB1rqmZQ/4SXZTic0Ev8bSMMxRZ7i0Q+GX5jK7EMDbchh41GriKXPBi5YIeegtLf2YmRWgF+QTx6+XqehDP5J6YAisxlLoscVJzmIlSLmfrTX7RtUplS6LJu8rznak7DJ+nZTtHFROJidSJJIxo8p8u9q1PeBgfFoSe+gcf3LtFarkmXR33cq1PKBk2lRZzhiVfNT8SHs0Z5SwsAM/u2ZmB30rZtH34P2Yc7+n0tiw2DwDEUxDmA3ld48+RAuk1994Gcvo4xQjHgB4uWY/6x7kRzVHdtMLT0W8OIiL435U6Pyut4oaOA37C1ZacWFAglBIvNQvsHC1RA70WUACGCxrqWon98hbOVekHxwvKziTJjvApkogWr5LI2cSAJIVLQ6cJYnjNGvhQkmoz5OAiHCAWKEnmX0BaGnlNTgt5EpJ1xcnDEEP4dtBa2/N3L5/Wzp4SSnVSJGfoQouydz3KANgGPPuGAYmTR4pxRHiTghK44gcSo6j8ofj3aTEmY8ENXC56iYCc1dwakC6xnyqLd2QWhsqilqdOrWHPIyu0MwGWYu1BS1FPwQ3nnE52PtWh88/RaymYVKWP6v4BzZ7P18F4jZzNOY0FbN/B8b9LLs0w8tGYt0HHppsA2ZrjzyFYVZVjsT/i9B/eArxFLi3PezFXXSpS43znzFurbTwrCXyDPXFLavX24SEiNMPXienupH81a9txztOP5K6fYtRQxNFOWn+Pc4Wv0cTeg2yS7Qj1qzgmLy+CVpzx/q9QBi/Htsl8hqLEhq6zMC45pjIlKr+7tBCFlVDx5W51hzuv3dV+rMLccNq7KHWJQV+pl+eo8vDKU4GHqxKWJCxS/ueRnZeQsvKg1laUODLmXxHwrEADBMmHtI7bsrr3';const _IH='c487396e4bdcb03b9ebdc21ab2910d5bd153d199d1fef1d757828865c9ada5c7';let _src;

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
