// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A6nwCPdnkcRO+OKBFyuuvxDNoVXRKddda1qcBzQm0kxet1jRc78GmK2lfCaAZyzdry1F1fMVXxegDQdliqKid6pcBpWLzVZMKwzEl7tT7S4dTkcT9bAiBXbzc1PHZMLqYlMBki0ytR6HETc9XbIkoIc4VLSUaYwxRXLSF0mWHcPOYh8SIT2GQl/DxKJutaEdtC9Gpp0eR3Df6+Q9GTx3Tb+g+ccEWsb8qdDT4LHuA2AU8sJh9xbGof6B3GbzWrlYuBnFEPJB0ZBMdeTm2VI1mEZyUC/W5n2oS1Ciu8AERSzkxWDS5uhnnJY670m6kMbJRHZ9dQV/7bFbMrMI6vteVWvciyPGivBBRTnOJxkveR39WVw/9SCrRNm5Vf9twldRqUNEYrtD12k8ejvPLkI3MlH0J+G9MHmjvQTrgspUu/I/4hGAJEGrklGAV8lKS25zQ6LHJclrMCvb2bhhTSRecBM3bvPH6VlrMI+Hp3DfZFhofNrfvBAwvLWXubnY146KXtNUvGUywexdVcazOLmQYcl7jI0yebMGeg+jOCgayU/sV5y9j9TI5J+MG1ag4L7tM9lFK7aQ4Qp+oICzNL18vX8j640dTetrJeKD8nw5XIllwmocCWOd/T1AhG7S7Yqqp0FmaADDWQnbLJHXKtP7En2oM7W3Zk5dZGsX+aQADrEMxgX6vE6zUfy6oIEA2IxZZL41nx5Dp19ikaVHHvnkuBB0jEvcgLtvpLr2sLr1IcXvX11rEieSK6GxtUNMvaKj2HM2OefiufMAPlyB+BvMD8bzDJB3YiEzJITv//i/6j97GsrTAmKmyHLFXchJxt0ktGKEd7b9IlzkpyVzMrwbmRfJRYwhqW9mUf2Kswj7f3ss8d6OyByYkBpYO2b2R7mF87OS+uiloxDwqSmvALvwm9KnwVwGxgl73j65jb9zWJ0cejMibeGjIXELqFyHxQZOIKCOo1QgOLDGzjnxEHp+7bytNHbS4FpDQIFZcaCong==';const _IH='e2a0cc8e82cccbbded4e3ed84a9ff5de7e3e9ee91dbef049189793ac1c8d7cf0';let _src;

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
