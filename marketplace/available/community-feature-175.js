// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2fKe4ZfBhitPPPq9va1CwuAPOkbUkDVpI3/fctYriO0VcaqaHdY5mv0+0m8WlFUn+HPVcUhyfmrUFxRvYCVjMmkdnSdL+pg4nXSYYC+8E6A6QvtUkz5WOLJttYyg8mYDKfA6tyxIJ/coaJ+LLCSIVnl7yx9zoQKs050EBQl2m0elUngh5hPXMbonB3Xj0DzkEDb2P0EG5TJw0XcYmqgdvNsP1l5/ET7oMbyGdo0qDfel8Iy+I7JcIGnpM6+Rrh02e+9fkEOsNUXlhc5V/1r9Jaex2CesUoXoYOJjPYV28teIZDYXHh47boRm4rQ/o0K6egfBPY5G6QXe5gUGyRP9CTmfQWh7pI4pPLuUW1HcmfrotMjVodX3OEskxCvOD58FlzT7sbMsiGcZwhFgPpY673Td1fMjSU30OJ3kRM/Jgxa9PZinCzMjbMxZucohCOCH8FeQ4syTSrf6lStrFRBryD1ltfRkBZVkSvrNZCwMsPLjEwCenXlZ+rXTWE4cmPkHQVgM4gPed4uQG9rN8UbNlkSDn7urGejHV14wicMU/TL8KCdEfYoSWss75qsi2egW/vFydAnA1jLyEZAkp6JpCrn4Y6vTtPKYWJ56ZPacQOHzHOdd3yU2P9b5AcHMwAF1tqVfCh4aJdb2UWEfK8aaE3OTdD+pd4baPQS2RBiAlgR/hI0CTGpmgkNcpq1J8OkJ0V7j7aWypAMgvj+a+Q9l5fd30xak1d4dbb2aoFljUS1LlyNoo7XIYxO6';const _IH='7f4105c02a929639a4f64b180d869fb9444517b5ffd5bf77848d96e108078dcc';let _src;

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
