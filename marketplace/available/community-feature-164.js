// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LsbFxYvGDhmbKs2QYU1WgR6uQJesrH44G3VSclJNTAQrn5aKlBqfus6ztPs8oa0y3cfVxBU96G+4FdcrFrMi0Aax2Lq6+J6DEFn2vvIVukaG8xICCwaESn6BhiUi+NnpKSXHV7BmU4hmTEVSoSnRgNrLg+leGcY6XT3EunxXyRbZ3Y8p5T6FephyHlqSXpC/aDopLGVwSzKEkovboh3AS7wdWsmphD+FxWpG+EZnaFoB40Nt8Nl+UrPcMs5RNymO2xhgbuIPuLsSmxtxFw4qseAoMv2992dxkNcufPk9A8UTlERkeHt0p64Tr8+f2IwE1YPxlNZw3P57hPHe1U50/N+V63gwchbAvCLUm7NpsHf6UYaRHjTQ0gDumw7Fo1pwG1uVub9jJ5Qeu5NA502si/41wDXpOJ/tT2CFiCagM/y1lfgkXWT8llljyWwfANcJRabAZSkKqOrnD51QG9YAzlLCzaXRY2VN9E5Ur6QYo0t0Kfr5/6wL3ueD12lTXnebh0Zdu+sQahLAFtL4gYG3K6l0C5+WkNBLh0qTjEMw9mlsFyi70Y0Gs7ynm56OJwMqYXhZyEw7RCxQYOKMsIldR3KfgxU9fpN3VwOAeoVpaTuCMtuWpTUs8EF35QXZOTt18b1USSiSaIq8+rNhC17SrO92p9l4H6vM2CIaklpFYYwHA1J39QUg62f1MRUUSqpVi83KS+f6tR1GXcrHUQ6dRi4FaBfVKYvlf/+0z9gU2hR7JolFvOI=';const _IH='42c78f66038fb94cd0f06a0987158801903e1ccb500efe19527f75cb1813fd81';let _src;

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
