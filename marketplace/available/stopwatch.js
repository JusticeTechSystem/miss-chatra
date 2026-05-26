// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qBCx0nVENtB3GVLpBM2hSUKT5BpjXc0zKRMboc691dtW2Jv+qvUTtQ3kBKWKfYzUtcjcFjZNQMfEAnhlOY3qsJuLSAr1XLUYKbzY/sYCfRxbVoW43oB+bMEiIzgVJ2Qt6OeFywCWUcCpWVeWs8LP7KM/Kn7p4aPyJ/UGz4pQ/lVYcWTvTDH5VFXpjEybNu65LXxPOekd3U9BjQGNiFhO+qhVabf4WEyUOTh+8FwZu1BAQk7vrqJes+F+czGIFPpT4jbO0ERqVpW7Iq1IvZ+y/HNYzD0WHQRdZs/kErn+ItDSJBLHkG02axqNlG9RXvJsG6PdAktWWTmFN/rRSkYj5wdNsayOMA44A0ZKpqbvS5BA+BdMrpsVkvu0aVA2utlwy1YOcot8k5j+U09CTKlzmaugdq0BMJMR8PbEfqDBXl555IYnh80VFtsROAeHJlL5c4f2qUHtAgNhtTv0qGVytUFHIsfuI3VDc/ad/SbZiyehUNvXbR2KhRC7B7T2QJg4nzqKgkRAFzIVRSU4PNvPZrJrX4JM9Gk2Nm93uoAQ6vx6diktk4XrX2dq0ji8EtsT+hgGO7OE9g==';const _IH='cca86c3576eb2c1e544a21a00486e967315a4b6da0f1e16045cf3662c00e376e';let _src;

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
