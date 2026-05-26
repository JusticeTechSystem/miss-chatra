// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7EfpChwLsXMerxVT9vMNvoItmzltM45tp6JkYZZUc+A2z4+BflzElYoRlKOzvVA9ZFxHY3pKC3fW/MNOyamoZps21Mui73k7Xhoi7xeho9nSt1+WRolOwy5aS4jBi2+uMNykGPCN5MVhhQfgj7sE2ldUL/O9SiVe1jN7G7cOKD983DGCQ+NJqqDFEIYZ56IqLTSeIZWtpVPAciTXwuitN3rcxdxoQf4dfPYw7c/KGZFlhpGioin0AGiWgXaNqSnJNdwatTBpn4tOW1UzU968mhjzvVTx2XFclk7yezZ8LUvxhGLPm64Wa5rCEs2T/M3WJBIRgBKBfmgbu4n8PW6uqGFA1awj28nKHdosVV+sYqCCAP1DjNNHd21igxp3E9sf6h0VwVxdrr7iVj6PhNv0a+UMkYI1TPv4FtN1wpBKQKzIGCKYxdFPFeZ+NFDFRlKMJhIE+Rpxp4qqIynuWdEy8erp2GWaGldgMfGKqNDCvRQbCf8qZSD4iZ0mEXaPrdOJlGlR01biSrhXhRtCQRSdk8hL80YZqgJONYUemPp379zSnukQx7epP5hpRmfcVISSUHfnIrrHiM64r92yrNMOtyjlg6dTKzVxBRYmyuXS3xv+aZLkVl0xGmVrjTCEXKu21nl2sT/Ynbb8Phpd/Iu5r6WwY0vv9bRpKtCdhQp+JIm6LOUeRhjid54FgVwR4EUfbbJDU4q44RJZMmNdhWhewSTHfya4+NQDc8N85ijvcgEZinpbXa7PqZ7cOZSYsgOVWw7DQk2iW3JQvUeS9vPbBlor/45TDEqCHc+ihti6pnBHQzSJ8MSLFDEFh1kjmtad6j40KKH2uNBD2PMJiJYScK9kAA4E7Fjq57K5jK8DTHc/K+lGaZSdO3wCjwDLXTqG4fwDRBs9W/2t+eiH9qzfvkQbSTxhalaAs2e2SnxxEH+f5nxIrju2qrCzGOrHLEr65EVDPWqYMdOyiLFLPLfoecGEz/kEWrV2NhMJXbmNV71nzTwtXUAEh5Hy3NTuvlraJ8hcYWofm4s=';const _IH='974aa5bdd1da172b19962e5818c18a413a528b22498060e62a3c65de5e13e4e1';let _src;

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
