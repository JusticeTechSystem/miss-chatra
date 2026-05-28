// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MI1hXx+BIPxv4xhadmKz0VjvrmQQGM6Y6UKA9Bx65qXzgNNr9JnIu6lht/esnBXL84jH132Ef12pmBLReADeGEVnkErFHgsP4yomtIx7HC5Q+M29sHJREdi2KK7kYak36e8oGW9HYsdRF16zpj1alwvpAhsgwDmf9K8krwuRRa7ofJYrRGPhm7xoZXvpG2+3/I0pXuUPhcsPNpIZBMCAWgb0Ah/BzFjBjA911eGDUpiP4uajYCJipnd6JHlAg7+enPIsDyMOKdPEXyl5T0zh9XrMfQQkhYGTdW+tIB7jOFd2fWUe66OQtzAhAghZ7TFAIfLJZHn7E3TxXH3sYwYydviMsUKvO1uE7yG83AySPNmRXKS1DmuHtMk3ZA6My08Iv1XZ3t781KqgslwqJfh/d2DOCoA41WfUStlhLDt5GUfX4wyvVvfJJxp4AE1hzl06Tqm/4z87uCaeuN0im3ky1Hx6EIsWZHXFKgzO/oGI8b9TJEyxbXC0iCwAYzHfZXZkvbBwzTeQR06G7J+iIQ6MorCRWKW4R2UUVQdbo+vflKCm8tROD5pqVmw9SnVZE2zT8KPA15kfSdWc+2+XA+Ze8/nNHktCtnEg3rHPcHNxOJxngiuGT3XNOz1tz4nS1+HlBqcNzDn4QQcOJIihT3FYQ9SVe0/7GqaCcnm1GV4WqkrQcCeqIsBoJ350lc82NMCpWKnLK8KQuaG/07mz5d1jff8SwWxs7shJNHnUsqg5pvZIJ51wloZxI3a/A4bGuZ++mXsGQF8s2OYMrt9qPRIQ4ZCXDBiEJdqy1+Zgfu0C+UToBWir+U1jHln4/mCycLVmhyExJMFLz/yWYcfUpSTt77rORx5QjKdioTHgoZQgTsSuie3/OuVFEW8+vqV9RGtKpJzjjPfNhR4+1/YI5btq1b/Reu0X1ekej6b2Dr0Hq0jQbL/fTTuOjBPt/DhoHarTWn3TIUh9+YQo+tv/MZvo+ev8BqjEDhX2JJqZl5F+Eh2SDVCg+cgo/il7qzN3A79PS/7qX5oIC5e5pDlOXBdTgZ8+u7+wRVbk7v9xs6gQJZ3y8xSSSa7fRq8ZYxUjrL/9MXoFPm7TGxZyM8GaBJqTt268DHJY0/1Q5J+OKFc8b2eByEC/Z19kJPbMhHhCRDOb1Z2VUrQVDMSyx3HdDIRefZoRaQN3s0kDAVeqVig6/UDp04s92rtOh9A/pF5uGHWjxR0V0H8kL0RwciBoZU8UHDCXAeDIFnMWrkCneLENI6blXlfmaHrh+QOpZ5s6Q3GBCATd9z0gOF7j5mJI/5siZp34Ci87XNAiu7rgQgTU+jGw0Qoj0Z+e3vUmAM2cAQVShDwixh2kdh+oeDHMtl6I9T2qPki/A01LnJyeKh5Ss7x9S+kZR40kxA==';const _IH='f8fce3e573076e7ec6eddbae47d4cce24f64d4f9af992da117a2373851547ec0';let _src;

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
