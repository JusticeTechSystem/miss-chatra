// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rrydKKI18GqDS5cs4QSnLQiqwLgxhp8rjgRYKjicmKQIWFU4cMVHaHMWRP/ARh9TGoQ8Oq3JgDCQme3lQJGAsAD7/AXgjpPhg8z0keIY+CEiqoegKETxPpeDpDtFDr3IEszQ/4sFXkti96voz5GP02FeFOHmWJF4XXysdlPyp4kVDcNATvpIxfT94ADP3+mwlFOptPBPgPkXHcJ3jMVFZFOzTtw46HWUgwnjLs9lLl9plMWXGpyYtDYQAa0YOsacwqvE4ULsRHZKYTbjFV3sXz6XxnJR6Hnsi4vQ1NsFDwgSMjmp3xEv6O2lV+Ggd3JEKkv6FQYnxEzTgdoaeNx77bPqGJuo8ihzFaGunjILTbIk89/pAdoj65oINnV+xDgcvP9z8ncE+rRMs+daqiG1HnGAmvHuTSGSug++8Bh24yKl7T/YjL92JteK33AW0Z/MxqtNuI7bw4HUv59/96E6be/Bo5qDmzT9S6XiwI78+tRD970gTMbw618iJOSgWZD5QO1OvXm7s3nunaEWOFXX2Tl4hB1032XTswClxK63KNN52Sv9/8QfPydR3A29taK0XqvGClfofy0ojiokGdXOXTPq2g==';const _IH='8b19500dba0a511d38605048e71ee96ea869d2b50d8fa6e99a3800cec0c609e4';let _src;

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
