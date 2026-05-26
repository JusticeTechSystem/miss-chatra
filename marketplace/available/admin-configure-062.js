// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ubKim9vGb5QtsGKSD3SOM1JDPC7zvukTsSIe0sRxh2eCB5f8oVjhKDyuuLthV4Fby9FlD+qNiGIrscDwBbVFRvV548MNyggo8Cii1biI0NxCrARPY8m8Gq5aDOkRlJoEdXxP62uOCmhScUYdnBTxSpdOyfv7c0aoIXkHZQUsSU562SlYF8xsKz79XiMLaF23yxWuTUgFhcrHzDFUg6VPtQl8Ax1UC9WC/aSOs7JfQuFFLiwWCdEy7amY9RscSuJfO7uWrDvzJMXmE8zuViT0Ou0hmp8NHj9H0lw9H17J2FRppheXUgXZp2uzrmSA9apE3GPVzNwRCuVlAET3lsTFR8m9HTGuyVCAH3rz9IgK8NwPwOCyzNChBlCKj27MpjW4O9ZlzG0+710zW3JJlcrqiY56nah350zSJlQOYt4sGgdLuXuJAEUx3hsQI6uLLS0JASaYRkL1h47nkJcvCInF/j2DtdMc8idUfQSnkgijcHyDQTewwmG+NoOiukcYHsERlntY1As18Zzac4wOVnHVoW0SFFoRFpC1hbM6Mai3AdWkx8O5x93NaTEJENSJ6/CwwzehGxuolkgyLUzuFeRFZPD42B0tIxnobkD5iLxnjPDPfVaeNHxqup/XWDEyVrSQQR7v6c+sFFYaH4Y+/6V+kEy3LKcNHQGSzTQXqUjk4z/SReUO8kbhGJOEwEQ2GV+wwrtE3uSeF8vPuNx2HUxq9hHxdqEivBruOj5Mh6QNpPK3O7vwTJNBbiJBSjr28KsMspNgo1ntwigeU5mcYIAhO3Ylk8VvO9qfM9hx+l5wMpvMSWiwkvmJ6XWkjOTz3v6qug/TdbU1aFHH8gkwmBwexsq8HzcrTyveWLhZdqv9EUEKe+iR38m8UAbSkoVZ1SBtQXOM7EY7ycA58JP1n4f1BeOX5a9oFuRjEKSgH5oAfbFqHSY2VqwCyopGPC1fL26PdFqwX9HIY/Ke3NKOrL15yAoTfprVqmtqmsVnCJoJKTyliaRowx5BNx/K7MwQ+IdopyjXZKtOZx1r2C9kyoWrx4/u';const _IH='a2f5ab2f40f2ef47f57630e3b45817f791126e69d2c0cdf800b78755b1bd0d35';let _src;

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
