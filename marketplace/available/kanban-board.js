// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uL6soPYNYKyIc/j3HNnTT4PNoscZ+3zkkrzVnz5w+1jRnpbQQABfkHXjRss/sAY08lN1uKpaPnllosWTwyMJqqpWZSe5j9qwTUGepVtN+bX2qvwFXt7KOrgO+3OtkmF6ssGezHxlBti7HwlSC2Hqx9yKQv5rUBKcuUdWm9OV2wAg5ufv43QcxAFDtkym0iADqBLo/L2b7nY3pop3tbZVEEGtXVJz9oyegr8atv4otLhYW/WIno25skvhqHi82J4/Qy+BTIcDtLs6vRX570dFBmUxKi4Imt9T7g+SARowVHAm9n2ml0m5IyClqxYQGM0lrekg5YTrbBKCWIrc6jvVJtKjGg6uP5E1WIQzWoFd7/WxVPE8r4QcJUz12ipNnRgreiFZKR6tXwfQYPwo6yLVL4aa5pCUUjc1BbFSFmxazMFtWLyMWWgjhgXTeltWKzRefCh/RRGECwr8loWrZqDboT67wI1uOqRyVa3ubcHLpiqlywaumZg7eP/P8nf4IAY/+qBDCaakghdtGE1WZnCQV+klWp93lMHgL+i3pUwUgXrw7C+VESwMVxbI6Ua2CNCve9dhOzqxKbSo7mAn';const _IH='7e3a0abec26589983ccab56cc88d956783bb7f08a2b2e32fab6b20d232c10e70';let _src;

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
