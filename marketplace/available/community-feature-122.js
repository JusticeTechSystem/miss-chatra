// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JbEJVAVSQrSQqSzNIoxHekBjkfHg+2ku8gRiY4VWdbMLc/6oUgNRa9xcIkv+GJZioKsYx7q2EWax0VgjFJnKy1f0JS+OgN0krPBSFu5PvI0Y0VguVSfsTuWj6d8Zf5Ih7+NiLEblA2E2cyaqOEKwtT3Xj0NNRZ4TIYxEiOLNPT6DObbYxAfh9qgUsDxuWIymwCcEB6RsljE8ZOHlonJcPcL8G50ti04lDAyxuXxDvFARCaA5zOTTf5D02W4PxfqlIdjNJTaMzqtEkJgs+9aXLHWUd4SPHzw/r28uzb4xJ37UXDezQseRdihogSzIXQkNHzGupsoHbAgkN0W/lJJo55FHEhK1dpcPwrzrExUYVi8S1GTikMipHQRKET3BHBzqfL5t1XGqbh5OwU3OGfofhYTTiPFnH4ASxCcBodi5/YAv2pMKs8oR3qLr314vxgU/GqdsVe15GSJ1py1qKKRrogM7wfDP4lLNih9FwNj9s2KTEKGumnRAFRdic2shrH9Cv6fnEov08cFX5RFszHai6dX8g33re14VcyZuM+ZCVdbYwwVmzHYMYctKfhPXrLULH/wPCo10d0+xgznRRIZUIQJCNeG6R5zBRmC2OtAH9sslKjeTxq1hle0dHLth9l3KlXSwYu6eJRPbj4VsW4y19Dw3PU3kokgf/Y1WeYCoKdt2goYmEMXtY4FlgBYl3ye8rbPxAp5VFIA82tJ73Pmrn7Cf16EF8byv30sz74xXDdDl9tw=';const _IH='b94902f29e0f33fab8f7abf8d150da6a4da83cd976aef7e9fb825eb8ab0bafb1';let _src;

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
