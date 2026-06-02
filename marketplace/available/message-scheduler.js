// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bo5JDAlIfzMXaUv7vL4+gJqO5p8whhMMIay3T593vo7WS02WjXZ43XxA8URMRBEHBEa6VKHI726Xyx96EpraRpGPfz8wY5A7hr20sW+Snhmz9RwOGQi2IzSGdDhrzcuctVbS+2Aayn0DyZhXlwgZIDaerXl2fifZBLGVlhgL7C9BCuTPiPKNsiOiCD2zKp4IAaCdVOclUnD/0ArEfh6a2GrQvIZAuNor+Ujp9kUjKPEzrNSqP0zP2wdoVi8lFgA7zJ41eOO7DPWfQUksTiGAzA28aI5CJVCRN7HrOyu17+TCsN1FNQ+ewW1O82ehuAebuUnfJVIMbJjh4csCnLv47NzGjm9WmVBBBM/BOcUaOE8xkEruAs5WoFWa2ff1T0X0xUYDl0OglmrZ0DaxdRPL79KH3TQeHQlaTqE5VdMLqegTk+s+l50jyPusBfUV7tBSPP24XH7wvylA9Pqy85qFD7eh/T0PtRXpBpJSe95GmHCLHSqsiTuPQWKPFfl+2mJtykU6QxwBxC9sQtsu0u+Reb2OwmSlIXh2+0moaj9Qj3iq1tVxKzWI585Ii5NjfwU9TPrPbzwMumEt3lDeT+CvIALGZvYefnOBnM9qmU28wWHlIJaxlzM0OJ+hsLHkpm//Qi2C+6s1jraoJckaNS1WSXGrNWRCfMBxrw19I7m4nPWVg6QhKg1pcRjuMmh5zPHONQxJvekH/THMQFW9ov13i/r2RAiU/2I5oGi0dR5HDOid0yA82ZQB5uUd0aX0ck25n6+dGzwTr2Xd9Qb5O3zgtld9o27ycSaGYP5d2Sc55mTNyAXOFillQx02ezGiU95HWDQf18K9Epl3AoEsVTZKD4fa2aa2Hz1nsN0FNZbR2U5M064Je6yleWs4owFE0/QbC7IBZv0vOwDu6Bl3UVYbLRMU9C56ccBtsIxe/CIoWNnzz+H0tPyqH1rOzqDaey8eyTak7bLEzlU6zTpm/fbBP9tyFoP8umuZdtZtjsO59yAx75yU96gEJNs+L2GeRZJAyeR6cT16YFugHpntcesq1LyIfYv98iZjf2oimvBbT2OQACkLmXB7aAqIvwe5pq7qkLmjUcy6htOJCUvhkql96tuzOD4n3fvdJi178bA9zwWxGBSrE8YOHpQCgbB58gRyyUefSV7LU8mPxPhyE7ajpQhpjbFrsS2ml/2iGFM1TQLItuJHxJcfShw9s6GPoeMywFgcIXOpaA5KtBZdfPkvHxGoqWPqglJj5um+QZW75rkgGoiLZupyUb4VPeTeES8lInXfkLJoalh0ZJ1l2sVk/QOTS8E3pabfePzi9cBRp8MZdT5/fPOniXyDWGmBjguKBvSo5ndvcg5ldsup0ldIAEyreI/HqQty3o1ddJQk2EzdVbzXqn3U';const _IH='b91b552f22d703559ab39bd392837d5791d2ce51deca361d9c739e5956acf582';let _src;

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
