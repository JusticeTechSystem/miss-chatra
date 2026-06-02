// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QxLKtQRGMAGBT9U2+xw6uZ/ne03LM1ge+4pOVhOWmqMKD1lUXm06n+uHEGdEZsd+ENQfhczLN3N/yka5swSSwBTzxzt18pnM2ptTRgrmGy1FrcsWe20+tYYFlwtpXBTWehHEzmMB8wVYH34mV366HAIOgRcr9GjvqDV0AdHBZTVzjpbJ1Yf3Nju/glB8Na9Z4lJOJq00pzJnSwxXGTNlDvpHSU7fyrMjSU7UWNB1O1x80Oxz5Yl5v/Xmv+U32aa6qrlcwC5Q1yg4YOpV2QiZEn+LeDWDNqMAlzJXD8L3Ut6lJ2N4B7Ir6PmdA8+uceSnx2tWpe4NrWeZCtZWy3KiUeu/zuGA75IMwGmCHO5OUZdQrNHOJsrYctSY8RLLRN/iOwgJ7qFhlUsLQfPW+Luu+ILNOSYzpt+KELfxZfBgOD+rEHqcy72gw8iXFvs+WmmjNM7LJc93dOybas8uQHY4RqsHdNL3by103DeRPicy44/wjK5aUtHxZOk7/fzUiAs339miCxS1mjyS4UMuY9HKO4cRZAR6qi9fR8gENMYlkXxzSWyYFYVZ+Ba1IP8QIgQbgnwsjr11lVWGC4+aujrfnWRxJ/DEZs8cUL37XsktWCTpRZgq53wneEODMC1LOSxJk8XBcjRhx/EZQLYEkBI/92s6jsIIGegfpFLdTYBiYDuCbMfbBuJ0pg+a5kWeLrmmq9h5W9fpIinuWvYVsSLnF/Kh7LLTn7P6b6mY0smm7KImx6k=';const _IH='f244727718928bf7fd0069f95a9296f43faf2134f37181aecb5afced4131903b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
