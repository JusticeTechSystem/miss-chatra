// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0bJ8aZlbgSMr7NL7VCx6ROO+QC9BAUEqecnHE37yjR0zpwCKf0SoGdCQQgnslOnCdfE6zVGYY7UV91jgYWoJIHwoNz9GvH6E6EnwCeEbmKquG+aNXFIS6HUaHDIhJbzJJvJ8e60ahrkvMGaVgQToJ58gx4WgUry9EfzCVO4N59XFyYVpmt8XgMM0VX3ZEa3cPMXnOlMQcjsKxYHhwumJbNukm15AcB0zl+QtOvlGzt+Zi/x2mVaYNjTTkHHhjPbuq7poNVaw5/BklS2+EQVGj8jhDKsyoucJRp25qp0vWq7xxkc8/95Zf8YiDxD6bW2rLzXNxOl5ozQ6FfcFDorh+XlRSm4iFeSvzgH0owpsKYssK28LvpzKtDgtr5AQcVbHCdeJuMF85XSZ2uUBUOeNRuKHdVVxevyj33VbGwm1GJ2FXkDpqV0km4/9sBux0INS1ssNa/k4GXo3YidXWDAPiqH+Suxffi7eLjD6XEoDD7uG9tfIXiuvoOKBPKt65pTwg9vKFbfBzJ7YXKWlDIsbGJY1dHW+cBLRkr7+z3T+Tb59J5Bo7oGAfvQjwD54jpRvTA8aOhsgk2p0MQH9MydMpyThxrRd/O32V1xFnOR7YiS5tV+F7CU1Rd19zQQFQQ9VW1m7V/4FlZnWo1N2dFC1Fs8N39WNZMmjnQ1qzSj8adONzbP6VMX//+ht4EwpYFqIbfZft9pWcBMudmMY1KEKEhQzf90Rf9ooqs0YVDCsLe/zVZewy5caG6fjoQOYTKg3XNoePtd2jQmJI0/up0NFHW+aJv3BeqRCS185NTHANGamSBhxnuO1t4tjGvQU7Zg8VOPacRQwmdY1/p2wwb65co+Y3J8rsLdXoshUOaBZAKmzlQKZvSYEau5UXXrsUMGgPpIH+HAsM9aamvnXZ0aOnAC5x0l7QQHLEuiGREWPaDJ2aJfjKFWHXsKIBkMCYRcWNbJE+B/sKOr2uoaJOtpsZ1Y3gjnswLfrvOthoZKTwB1nQcmMk77AFPoitNAsiqLOA2yW24=';const _IH='81025961922fe44715344cde4d55d5393f255e780b5ed9d62725a9adcd093f6a';let _src;

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
