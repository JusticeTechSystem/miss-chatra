// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cvfw1AGNC/TgQShoALcUCXG4+XF/tMz+TE5JFGBLWJx52IMhZAUiUTq99h10W4cyCxNNVuA18SurzH5iP4sUS/QY4jUnl+cZ0a/iYJWnxdr4OjDTT7iydNm4Zvv7751aScgID6X90ZEA/hTAuwGOhPkjGpfO6+6VQeyo4iiG5Ob9URQY1gXjnHK1J2cizzfTNAy45b/tNoYosSvuiJsZg7WcuIlpSdm+taG/Km3UC0Hju6GcIZBgGYECaxv2M+jrHonGKQqgBHURqoqJ9f37htS0M+iQ2kBpgrjHyHQQ7ZrUM+7EgBHkQHHOaLd1P0nv+DIEGCa487117pcps9ID73JTUh8HKWV/zurhr62bhRAcr7mMnlLICeXYEsGgaZ/43/LZxqCNRsn4fIuOfXjpkO5EdVLGYU8fdaun8h7W1LikKI8FSkhTQkgYcgL+91mWjYw07gUbFg9+Z1Av+gPAcgX125YBO2dfmeR9D3cK1BYv5oWhgexwrxY5vNTovDTyFASeMOjjTyzePVoArId4zV+zcnVfVsRe4GYYsusgtvA/MHoEhsALJkoZLwieoljNL589Myo9LeREqow1j/yYFcIQNArAEXYAS/PJbMmiPQUrdOkPfYtHlOk4EHC6dht0wcGyKuj9pg+kRRTW4WzLX6bj6YqpeOyxTpDud39Sw8yzCFzCsgTnjpRqZmYa2VM2mevW9WMBgqjQ08ekXWHoyQz130ffdpy8Lo7m/Z0aWMGzkKgqilHZ5W2AUFXbIgSc+swXC2029ZCzaF2sIsFUrzeVYvzxk87YuTlbv5xDpnZhbqlU3EOrca0TdHDneR0LvMgA77aQx4+W7G9eiPfprReuarrKo7Sxiks9qKsBQIpRkbBZ7zczGVs+oefYwx8JtyK2fAjoXyAXnkBGRvb4i2TD24OU1SsOFhC/JHNDAYdzExodD2tSr2x9jNV5mp1lqiqgIqPk61ombSQtmGsv8h5thozKjGmEerUZerBFeGN7rr+GIzI=';const _IH='d8eae082f6d83464640185fd59d489cabfe87bff3cd3cb7f681efee20b1ac0e9';let _src;

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
