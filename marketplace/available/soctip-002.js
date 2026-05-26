// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/+g7uMrYUe2/U7bB2svXFpwfKpDDrx4fFrSJD9J4fdhxpOlUH5TZ35nIDXzvol1mRbzc0LZjV6YPW7VztzTug3sftqWjqsFkf2PSrcQj+r6nx+Y/KDYez+SKoiX/EBy6vyU+1Nb4sWjdd9Kh3QsymcM+lQRnFB6QTUwYcFncgY601bzs15l73p3++ounZpTGEhEINX+Zjf+4YL9YxH4i8GFPr+aTAlLZDfOy28gFmVXFi0Y7yDK0mSsQWMp6nMKslq/C/tsLEt6KMQcn2qU9v8dEwuC5OjKgzrnFObth7kENmZMxgrMuGCBIF9nl29FDZv1ouqtPp7sgRsWgEPJ3/YESGws4zUS7+lmm48UMgTSJTHE6BZHSdsEzY/yhugIKkxMaffuW2zjZvAmLn2N1Si9gZL3W3U8vwwaiwzVnR2+XkQykbUzFpS+AUPu0q15IrM09jQr069nnF2+eG/eIzFjPNiXvCXhd3SE4m1rffJPGzcunoXl137a2322Vip/TrqcsQO/9TKgDi2T+nig608Xw2i/R/cE4N/cYiERuZbInhrwkuArTkLCt7RIP7MZSRMa7jfB1TwX/7GKmthQGdBgVSUfX4oyLKCImKwAzgnva4WfVHPTEUYmpw3xHwZK3+eJLKD40aVUl84GYel4IDDtGwhet29B32IGDgOHrcReKMbLaUo6Vr8a23W8uKVvxPYpPABatc7dpd0N9FSnfVpabh/X24092qCWnKeMGZvrVZwEhcpYAwbLBNUV5tNCbJblzBuFT2lJlsPnDWMKPKqMclM070VNP3Me66Ptie1jK0pQ0/UuIl2TxaW0J6cn1enBKI+dooKWILnabVPy1AnR7MkRVnGRSqb0Mw6D+k8p80xHyfeBZBG98N9N7Rtl7OgFqA6N4QY61Dg3jMt43oI679lDjw9rfHTowkSuZxxlZVdpnDnresyI2pWJFGYzy8QOP9jvd7Ls2Sf8m3Y+AhTzdAcRhBkBYk7xF5tE0z8kNJSVLgrDgZHZsgfG/8yVdvL388El1A2yEJX/tKlcWgQ5F+xhGYTd6//ucU3NjAIedkAYkbGbsVD4VG4wQVqfIVHpiY4ufIDAD2ms=';const _IH='a3bc682c993af8edde31b8aa32a5121172e4808f11c1a7f505c36744981b822b';let _src;

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
