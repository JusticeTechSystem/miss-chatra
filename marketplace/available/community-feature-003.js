// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MXUcgKjOWFDkojsMvPDNyZUeMT0yEdbKbp+KzOKyU7Cui99oLPlXzC0yKp9RBNNISRNgyilmtB/f495uFZ2lNEaR7hDBxjHguQ6JdZaGY2eWp9hwGlelqrrSp/JluRbH2IhYVtFHTSeS6s6xG4nlhkZ+rjEIoYzf4e15Ni1uuKZNep1HsH/pxTYO7GnXgg+ydtwGkAuN+R/Ebed7fXTwT71eWPrEMq5VNmdnOxF24J7yLydrlRHBeF+FNHBAPEaiyZ3XKVvBwJF5QxSub8OKWzwJHRE/5C02xOGmlwNpht8eR5NVJ7lVH7SPmcMPW/ynTExBL9J4+wgOOGR8cCVpcWOrxOdsnuDdgy9n0Dp5aPS9Kb1St34ZJQWNJ8NqzhDRiDCRtTUmCuBBYOngAD44Gk7kXBORtkB5w66x6OX4GJrrA5vjB/c33eeRhDyp06cnZ5NrlXC1nufYg6rexdtBP2AV/pcxtD+sLJSkHxk3qaNHwIdDRfJq2cOMpR0+h58/m1+zL9GSVR83IMnWyW6BPb0H8aOcEtcVHS8/veK/LZDanDOsQhXT4P9JcyDxFdB4Zd0RhP/ZmSgHu+xhFmk55D4YWLXSBNyk+FdYok7SCbAYBIJdHBfZdKlAKnV8NSCkd8bUkChAspubHsS97LgRNpZpuNoezR+/PMYFLO961d7/4OHn2B+CLgV0/8HOB9c3alkhMZ0iZ3Kw3jX7uX9/aMzg6uIj';const _IH='aba3170213daea117a412fd76b9d3a1f6aa210dd3de6e285e560473d1333a71e';let _src;

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
