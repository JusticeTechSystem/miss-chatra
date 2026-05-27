// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dTZXOIaW99NMQqrqTWOM/+Cqkhpv5HtjgVkMS/mZY+PtDrQVgGlmOXJCR+uTCbMuhlbfI4CGIchPSMjPOXlrfhQKyUGXScXTIZyvvOkE/3/67L/6oup3L8p+r3tm+H3H7EdavVBxRYLDIDN5x/MTt2JkCA4gd2ZzDeSl5dml+lVwHO30zCdKRnrTz2myy44ls8SVMTW8tiw5OYg+Kyh3P0XZqurrnJV9rA1oQEEm40yMfQQkVvxf0f1Be+mi6K62+hAHO7cgzSR//jkjgiogbHvSssHUvzdmht2e6AhLto2qUCWXbvkzfZzGqDes2INFNcq7zB6ENnTcuHPlcxSareVpuH+TOFn2cVfnUDdidXjehYCq6DpBGXFbJTfMyUwhFwnN/sEEXh1OptKkSQKytDtdghaW2ANJqLOd7XPZ+O2K4u3wtTUgc4Krw83fXnj2GLyflJDBK90xWFKmkEZfX5NL/m87erk=';const _IH='5b9f391914872a2f3c67504c8646014727b93eca12f0fe31e3ccf2bf03c18328';let _src;

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
