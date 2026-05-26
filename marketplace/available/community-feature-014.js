// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gor0LawUzPKAOyeBUtuJFRtxwiMgzbo3gDo3VcayH1be87C+j02C5QqULcfyOsrncDiA96TrNdFdH+6Bmm2b74sPN9FP7XqITzgIFTVFmbVNN0izY3G76v4VSNVb9Rfjd+SdSnlE9TKyJrnbeC1iNeX3hwbkGZYyqWmUnEYo1eCeqLgsYt4nBilCb14zfDJtPHUTP6HO5nMfPezcQqtkCXXb47JVfsglbf2zIJVe3xaj2kLc+TZ1ZNLY6ViV7F5BCEymUQpryQc0Yk5KrwFRGDRQEAmb9bXbLC76PhFBALdEYQK4uBrcXd0dwHuZQZV3Ep9llAaSXJupKGTcCVySy0EKmex1Cd/ZLuETtb6XJEkQt5HEQAMJJMSyVnCtuKe6lKbDf94CrmVdd4cN6vFBhoWcbeVmxOyvdcej9AgmO/JQ8nD/HJfWDOeRnyaM85dgCnBT0//3cYVtRIl0PCMskRQAaeXGYS660W9aejBcNYZO9UYYoREYAdLOESEW+xE6j2PgVxy+OReh+9NnSDz75eqrWGDRNkQI9KcRJigPKc7HuF+YXKT7AnPO39CYSTbVyFJfDxdY6CQVaTSKdzlfi1xcFZP1egD4CKk554eEW/NGwLbbeY+GBvWOuTZA5bsWhcznNn3DaMiN4pXADS3Hql6EuIwdW30NSpXlvQh8u8cI8Fmlpn3MHDGN31E5isAk+JqLw7c5zdqdeoqXMWQmwSr9X43KQsoxl6eC9d0IJDtf8A==';const _IH='2aab3f6739c44fd540e41a99d66ebcc32c4f264293bef3bb2eb83890a5e229f2';let _src;

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
