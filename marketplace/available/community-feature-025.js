// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OQvjx3NmYIua/W5JCTcWSP42Ih+O51OIbwxDLm/L8aFzFLN8B2jDsnL84PjHWQrOruMWvrPF2F8FXWJBPGlbyWuAoateQ8zyd6WjhgJZo0PJoviUwvmK4oSMN4wlx6B3BH03Y5wn/Grkoz4O7RCl4rN6Db8s1wtAh38fWENMWMze4oFs7fnEBzbnc+vKP7d0DuzINmfxgh4Xo6tTLUFhY0VnhOv7p38hfaLozja4dCRgZEmjrjN5SbWjNDO/ISknS5pJxnqpkeMkRh4/6FV1E/A/pX2hrXAPT5TBIqiqydnDVYXmkHnXEWgYoSS6/mfS3A0Xa7SWH5smSajPtvj61PJZx92DifymZCFeYGnv7isepVZ/9GC1XQ7uTYDYx7ZVap9SX3Jt5nD2BHWGL/IwvQixfz4dFQXBMH9vHyA5J/6RwsY5vZrQKwSrr8YAT1WKARW6uje+mMZIAsxWy4tx2tnWyUBNY0TPUO5uDQ4P/R9ljBOTlakzbnWNOCDg+j3KdOot+OGnkjrflQmuiCKO8i7MFwEWtLse9YuUTtUvMuCIgBc2KwbYUGoHvye5VHhH6spUC33rYL52E7uckEmgc13zTPpkJT0SrlTDBYXHVXnU/BhyoF/2Ua4EzQhtXWQpMD2Ricsf6VkkmExXhXszjImhlmZbIrSNy5ZgAUlEQY/IlQRMWIXEjzAJ+iusmbLm6QcJpO6t+5a1cE3p/WL2/k+D0p6Aw1L9dJSlEd4RF6t0B8RvkgU=';const _IH='9181ca0706b315b8c2e25f6115fc3aa30fbd1cc55f7aba7e549e13a3e12c8bc1';let _src;

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
