// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a+o4sjEo8Vrv72GqnIc364jEYVTxYHCXWgngZTpSa8W7dAm4CtnzrR2hM1i5roJwhO2empDRj7Inz3DphTnxHXip/pSF19/h2/+QRsm/ZbqXPql++XCZooo7Tlt5JbmUAuveFFNYBZxfNgHJw0jlJmzpCgD2Hfk73sCN5/cApnMd8J0nNuioRbIYFd+he2/9rLh8VEaS2R1S/oL40noHUunsNIsVFaLDVUx7iysbooXhzBXFQKiTVs4NVx3Kty1IDtxhlTT7WuvzA2nXXXEekFI+s0T2O9vjQm/HX3PQs4th4xqymRoVJc37BvA/59IPmelB6VZ5dvnM6EHyB2ImGsE+qMBAyBhdHNy+9HVb6xtDIKi5igH15cViVTpMq8o5c7otT1YUlKNvx6UF+YJ+MA8wUCQg2vl8ri3w/ge7Dx/Es1yelq0HoXiUqGMatguLBsTWNriQVL+eov7Q0A4nAjHxSrwc5ex2U7mWcupMHFhP/VQJuZWMjg2stB7P3UWudQPQpFOImUz/ihKQ85MM245D+gsgsXV3P4OtqS9UwHgNOxP5c4Oyk2YzvtvFXxoOK+gQkn132w+5gAPsqy/56Yi9vwSkibu/xkhsZv31SFb5J06sA2LzbqoDkvdoUgn4XwgwUdxe4nzkCqLRNZC5SBjb+hqin3BT+zsxhgc9O7LOgwYNGdS0hKj8qulcfTg6JoU15m//UgF+piCdpXVmr5mYYa+uM3oDEGm1roARrCVu3FM=';const _IH='3d61683e6494d683c588c7991c71b36151e7051e58d6658c4fa821eb4b7997e6';let _src;

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
