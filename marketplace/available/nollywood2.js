// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6+81No1jTgM5rIq0vo8ImJNneunBMw545bzelUq0txx7e5j4gMY/cZwzzcr4WnhzCrzbkKc+ERppr4W93leYR4YPR8vXySjZDJ0p0mLDAV+X3El1JSJtWgW99+4MI/PgZ/lJ3y/meI3cz2UBvfWVvltxa8exgWlGP87Y23Z3CnQ7kpPcak7fYd1+UZoYnxNCMlvy3TD6ENYX35Vf6YzVbCgGb3v/5/zYsZ4DcrKgaGwGSONttQd7D/oREOriIEPZpue2gA0Y0YRd3uNJtGUtcNTO/fW+o+sjeAzlBbEMy/GieDpR/eX8IZSJVSxc35ywM1mXAynUg/BDRtEKaT5meP573fVyRw+Ywp44jeyxlDSoaypTpuDNhBD632OsYkgtoHuDfK1sizHR0MMSp0l7IE7KSoudr1FOVLNFOnuMejABiZmn/PqrLRrr29w7tlY25oH+cMOx1ruFK+iTGfHhJLEZZkQ2S5QCIph/e+6vwuW3i7zlxvcuRuRgSTYbosEtV4X5ewfdi2j+UN7us1MTWBWkrpMAHuj4Skv/i0TVdIFBEy8uBs79ZMgr5IGLyRRJn8kOjumBnPZs2zifL41WhQ++0OmvbAvYffoiDh3wVDm0ypCHKGc2BTKgZSZOxtLHpC4dh+vMXQaIRpNYKgmDTgQ3+v2wDeSuX446iztKTIFwJk8yYamF82L7WAbCJK0hpgAintqhfy47rrn97o0e/jDpBqUF9jhZ88MlRJVLn6zbr/IImNIuFhii+uOFI2VtXnZeBHSERUCOT54jmmXttCiL2kcKa4QIDidUwDjiqUVC9qFHu7yMAu69i/lHypLPW9woPedz/nhwdGmvNkMRjI8yxOtprnNzjjODYjEIkXc2zo17AALkl8cfa+rMMxFIZTgcf0wmD3dDhSkNhkKJMPhEoE1fy6078KaRShv19xfTqrd+WFtTjV6wgoaZ0SYrztXVxNRrZAVMvkooITGAbcttWS9RHBMT5Reku/sc3h5k/RXRvI7XZVR/cfgtCJyk4huZrr/mldo6S67mChpE67l8bSAoK+GKoUTFE2RvdyiCBI8uwpYwQ4ibiLo++8bYKvE8ynOoOS0vLrL11ozJfpJUqqFrXiJyvlt8gkoU8J0YtQbjXieIOSWcJQcv96Q1dUMwpi502Pw8ZK0GjGXu9Vg1LtZQ7XYzYJQQnG834+1cnmvxklWpmLEmWe/VlO3NilCfMBKLGzNp8KdANQM=';const _IH='80f10ea8a75a370ac5a746bb472273ec692e8fab893f780175dbf44c42c86ded';let _src;

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
