// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQytwJFiMt5nQ6Sm+Hg4nyX1+eWBokU7aEBATTEaedltrR2eWMB6Y5MjPrKaQjHSYqHj07HJdCGDBH6g3uuhVfSBFjGew0XKFO4wXWFh5ATbN0aTp2O2LGWaxDsSycwbCpqSw4SFgoytDm7JuTIAhqCSRtcLSUT9qeWQ3PDiXRo5rsGpcSVURfNCvGrQEeDdImgY7PI+VNmfBLb79a+3Of4bPrngCbfPJUzjHR4//WatUowVgDjE8ukVWZe7Bk+PPpEwViMaPnBjBhP3McEzrSPuV1oWcXxanAanz/1+rrZr3Uu5FL8KqAIPALgztFJeT/Gp7SG+raFkuLJ9AijNd7vh/7s7RBY+a2NA/I/Z7ANqrtpJ7XPe/0Q9831tyeTPocJ71+/MNTzKryfw7dmrbdyV3oqAvIQQrKU2g0/ngM55LjFJ6bMa1K/8bkgBVG+/k5QmCjwP54IpLU+R/7z420e4y2T7noItlTu3HQJY9QwcvQr8a6FYlAPBs4A+jCGtfGAdnrNNNyBm89jXsnAlELzb+wrZG761PYpTWX4Sy2NM61qPu85+CgpT4YVDIGOBlCuComl0TDasi9tVkRWOQwQgp479VW3y1em56XhGD3DAXgQ7QJclEMMGOHU6HHc5ZATdeaDdPLXnKMKzJYixR7do32b4haLw0kLTqqwggvU7lshlR7rYpGVMEarRaNPtNloIxHQ9eUlY4O/xW3goh6Em9JAYKctRBYAqOx2rY';const _IH='718bc6c0b69da9f2b7a1078956a9810d88712e92de6a3eed6875d88fd1b2dc68';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
