// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D/xTzRo5yNPh7TG5rmsevSCjiayRNtERtZgSXiz0l1dCd4qdYVhfP3SoAaEXmhpPYcB+tuLi1hkZDX5ZpfV51EWgqVgE11y461TSDCYf3vW36jxI977Sid0aBwzuAGLNN3rXs5Q7ls2hxTfy0Soyoz8vh8KxHLaLcNRwrRUwPmCVGo2B6v7ZZH/L8l9H6FMIOugJ5LarphLCGFHiFIq8gJRiT8NygTic6AAyQpBILyxKmFvB0abv7cuDcdI5HPPP+syNobl8R/7YfI00qoJIy1H4xcz+JFWeUgYWpRnhhTco66Cp87WcgxYURzikdxptczThDD6QPUj5mWPAftnPERAJMCuFfObM7E5UWL05jM65m814u2S9rIN7tZpNyEVfE+9fLyE9UYmkdFJDlhMGjqpHqjj3Win4o9d66zF849wQ/4zICMvD11R1CyPWRGeLEtEdHj/fSKJmKuFj3x7akB3PsN/5w68zY9VoHQrn7DEEaF+sNkl/exWX622+LMhbRRYpRIPTOZ2iCDPKUeRRyyOBLRs/na726sjIzkj5HGJI6Oqq0Dvl9LY1eaKBhzdayO0BnCs9RYWa506jzOc6gqWAl3Wpu9/nFN3qgisVmG2N7NKTujC3LWc90fKg38CJPtCDdbLSCrBWbxKJPKtU1XvZgIkv+XOB9XhNGRLF4OrSxbrPklljiolULX0Mc08TagF1rSkkzv+HAIZk0P0a+fzo5BKO7v34WWzGt5xioGEggGOr+oM=';const _IH='73980d348cd014fd2a1d63349c204d8520d9283878037d7335014f0f9d861e18';let _src;

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
