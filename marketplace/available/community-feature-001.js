// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dNUvH7QDiVg07xQ/fpsFofE4S9nFDv+viHmZcKwlKcT0qhi2+mKpaz1h6JrPQ3MmiCPiZeFGrEEwQrb2FWkzOfEcHo2ZUOgFGq+94+jIuGRsw2XihWUBtE3mEY71vSoVR5dCvkbo1xY6KTj1swQAUsX/VmahCmuf4jqkglgbt1Hn+18aFMRaqB1fW+XMLSh6TV+fDwR0ZYqk9UuV/O5cczbhHVnY59rSfx6Uul+sGPeDcMjcKv4LSjID3MXtrlVW8Co9A42FnjcRbT+YnJF8P2hPppqHgGKskgmZhw+hIQuptmH7vQkuUDwu8VxWtRtTzcayaclf3BeKE34royNwM5Fu/82/3mWxaYqgUCt13HnovnqNcTjm6MFfQA6x0mznaF0tp+Df3Q0ViJWo7tp/0C1oZa/xU5pP+LXCCnOGiI36RIOcfB98RipQsF2q4LXQ2ACGwCsaqXw6MBRAPq5bgOdcwdDEvRFsWqHeYlZYBR98YxU5zvTTpGlp0SF1/TUaq5ujOJyBQyBsCXEyJFgc0wfhsJNfdlXT+4qvPWP+hhD2QXu8CScGbgxB21O/6C/QbcMSNgOfADLCyRxT62Dp190ajuSv0L43D5cmorEzmY+l/7dhrEfJy07DpgprJuOLB57y48wQHFmlF3MKFDNM+HnI7SDsOP1WmYxlfMpz8Nf2U6lHru7WuNHIai5Zdc+18SMmmuhsma6ixYX0DSv1hQ==';const _IH='49018d2199a2c16e4725538aef7e54de718889968d0bedec3f5333baa4ab747f';let _src;

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
