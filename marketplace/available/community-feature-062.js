// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8kmjF6oF6niIO7dIjXmFnlDOGYBXqdXSUFMso3HFe07t7lr18luV/M1KhBBt0nl+dZ5BRbfi6bLTdDuj6kFS1aUmi6gLWxhE/iuOc1i7rLt1M97r7+ajPEcYI3aGWUtjE5TyIha64VGY6cYliOM+maoCv4RPRwWeTcXq/FVZLX+EWhv99MxiijyFI/HOHOhmZLcNUJOx9Wu36Pp+2CFLQREVitCNSeabjRRx/aRGZjZbShQDJV5qu4Y/81UEqXzZkDrkXjYnKumiM1EuH973BsokNAdA8ShqwNeU2JwNS0uOxsN3DqyYRSfAmDustmOdtsQPUhuHH/QCOAkGm/x8VbvDh4l8Lxw8yGx57TPXsx45Rt/+K85zZJHaxMV02Uuis/XsFcT7c25gdoKoPuZiIxPqdD6Ocihrfv7zSTnkBWdEkaP/IIJcssDc14kHBsziEJpQAWMqNycRVMkfAdxT0e66qiCQzkiY+AuLWjAb6HsPrmMH2iuSKLcXXE4mbzkFSLhZlDrtezlv91pQ90792EvbDNHO9um+W4sG53iCLVGKyXrDdxnMQVw2C6CDHyANdu8xhRLUc+vXpEHixRocBy20yhzZ3WaKzqsXkgrArzdR2zuEbp4ymJ2E8cGO8DfKwb1dmOXsX/A3VSWqsoA+EHpFJwbV+C7b1xd6rFXtpUm64WFcuMpfjEJ0tOqNbr8/4oESuf8Xr2t0QpTkAQ3uxrFSfhrucTwoKl8z5dbH3Q==';const _IH='c129f591554a8c901ee181247db5445ef53be1dfde12840cd94903bacaac98a9';let _src;

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
