// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0mUrP544M/k/snJBE2ZFMV702jtAkVZ2BQ5FuCWYAvfZJpQCn3IaqBZjrYKtMtB/BO7F2c4BqZbPmLk/0NgYZg3xpde9w27D/fnbPMiropX0T0/xV8VAWXso7hpEl9Gpfzzrfd5rQ9XHuxq9Qx2SXTnpMJFMY5pLZ7J4RPiwmt4bqcnTIyf2uYLhJ1dTfNj/+S/RFSb7vLzydhq+UDSsc2UhX4jlzALETdGrHJlRsH22bQCjZe4eQMqW5Nm5xElGFGAH/KyCQnQOpKLNkGe+FwqrrIYS664gEOPkcNEA4MX1ssjSI/2O7TFNYNRz9emCyGMxOHqYF9+dGnZ/Ev4mlygXHwg9tl22b62t/mj/IjRnPztyMXGUW2obP6ydojvttsyonSg3FTtUSskDPUHwSIg2tnD3UzV9M2uRTGe7LYg8fAvW7nIO56kx3uWc4DdiGLIvEkeh0XvYRv57wcsXsfQSErM3f2Q2QfhYG78+JqvWBEwJ1HwI8Yc0QMEvCfXby2JKfIggaay2x0vEAoiQtppE87rKLHfczcXnpwt7iStXgDTGbjn33vXrIApkvuLeVr4+yFEKxmg+qcE/N0b3eEPsFvfA8ktdO7/gc5maaSWmm5utXnbaWGB5A9oOD8708Xgi+3hNOOlevI6Kcs03LfcZty2F/5ieTMyX4VR5MpMgS7wL61YFt+kGtipc9BWQEVBjbUd/OmIqipbyXnl/B5skF52zp296pSCsdbm4ENUz4cQ';const _IH='ef2a808832525e19901b2acc2aeb6a45a62ee8bbfc9530097c51bd137449ae43';let _src;

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
