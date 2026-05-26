// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KbiG9eDlGJGAFVia6kyGN1dRYGtH+9+3KeHspDGHlOsLx0YGtRCJxM7x/J8KI5scEq+YEweHCGr4bhPPaM6cyIvYAlMXG9CtFNhwscaIOQRr6IMYfnKG8U3Fzjfrj4gXaNIqt2xyFuXBpY6Xk37pamXg25MhMSapXNokjj3oemeKl+Bg+uD7WHp5b7Ya1FSqtS89tIu/kcSDy891EUOvU34WEV2u4bz5FGBGKYyp9RQqrXVgiCL9pBGmRzT/We5i01wJWF5ZkVmqC2wP0zQhn9xti8ToAnsYjBa1P2xlNXnLYboiXg3s4/V4HbFVmrW6vLfIH8lnTUrk2JKgx5KRsIcyPKcE422/1i9nQ03lzczpVoOJunuzDzzr7fQn1Jjuf94hpnoQtj+F4FzanEq0IlrHBps8PWq+WLlj2SaDWEjvuwYQHtKsV/eI0lE5eVF5FHDlnib3xbzJ3yBmhxE4V0lMsW7xlQXdrCVzJGfmmLEhhIJvBw/1PQqSN3bYwMnDuXFnBXdQ4gjPrV3wjeVXYeyjZjgpsYDam/v94/DldLkcUxgmr+BFLBPnWrCn8apTc2d3uMZPQyW5Euk3jPZtx7SjTP4nNuYRAr4S';const _IH='477880c79afb72080509a2218c161be38c52583972a47dbd399bacee3217eb28';let _src;

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
