// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WKdHitMczX/FY9mTPWnFsUdSKHUgQMecLAl+2MNV84ScvnaGCEI01tfcEDvIWxmY1eyzD2cSocnALtVo+aYeOmjMVc0Y98MU9rHQ67Vm+HRoj5DrixrzI5YUWqkUbBaveBgOvxFuBKRQG+7Nzl2m0XjidKiO54g8cMe2V7feURjUcOeNR7xuSgAOsJhOqBzgLUT5EhwQvg2rc7NVBXWUzuKnlpJ5Y+DqqRknHY0owcoMQM0fs/zDj+pOWzBuvRSH1cBHVnbKZ/Oh6UUx/A86TuF9z67ZJIBS/nqssMH9vFMev0r5chwF3FtUK1pJoO1ExVPzfiaco7u0BVu04rvwjToT3ae9K+hXPSd0xFCA4OHpqhEIMXOx2wGcSuufufH6rAwybeAcf40rf6FvvLCsT6bPhDEGUfV55ez50ifo9bTSkIwrslPT3/PPbDlViHy+mMY1rPdMtKvoi+aA0cKXJB31p7sxolvd7V19S/uoNczuY3AlH/2bJY2Jp5qcOsH2UpbA/+RcUWs5dS30O+zmAL/aqW9RkTCnjFH5RQ3DeacnKYNX2qsF/+IFQt4yQgA7RMk=';const _IH='9d298ba75a2b41d29aef505b7319a3946cc59c5c5a7d9e119d121cde17ebd019';let _src;

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
