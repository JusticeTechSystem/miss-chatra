// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mc8lxFrB8v0H6GYX/8XW+14uyo8g+Al9rmPqhwlHlFLczav7DPuvxWD7viQxZ6kxDueJKjFo1zLSF6l8Tm8jU5VKxka0/rkADRzV++X17bkV9nIQbhrmJjEwxxMso/Ytax8dVqHoxQYy3yrCbl1kA5997pXF/xo7Ubbk/AUxsnxmwQ1O3vcuPwppnTD1g/Y3yqe2QrFwRuHrBLJQGEKakQkx5ymxLyo70QUL3vG+brFG3kegO9+b/1ozqV4jLzlhWb6i4UpbALwoEzp5Ir9SxfikdB7qqJV2tQlVTQEeSCAMAxrGlKH1p9QNXZhEz3ruupQgDRgxSZYz9a5jEJ2L7Ugl10nVDy4Nx7m1/ncZj7HgJKhJKFGEl18ioGevzYr6rgZGdFSKtM1SE6LcunE5WgOR/Gry3NU5fLYMgAjQToU7aljq/UFEDU83/pWMwuG8PYpoyoxUI0GIYoA0fFj62xmXCgH+Me+ko7mjpHrs3rXzNTro+hdFk9C+vZHeL7PP3XqSi/sig0xrMDyR6yTfKTzSRy5p9nGCnrFcJFHF1YbGRJa5p2rfY7C7urBmRgszXNKScf2lVRILS8Ls8vKnqW7uMP8jewLUg6/VLTCPRoHLC3tyt6O7XVaQHnPGNxhi5O7r3uFL4sncQYnssAlQfnonxx5DY7q99erojZLpLNOnHF4a3JGtRuCZbiCLD11+mL0qspvq8DzoVV7DdRtanJeKXg36aHia5nkiInYktAS203EGjKVKyBq4nUWHU9UA4ublyr9acuLVd77loGw/rBE6mfYqPTZdxkdeYwlWg34ZkZ4fnPsWVROHy8Iw4mpsY6iOEuBy+11M0nbJ6YCWyrEA6Kk6DI5p4VVS13OAeHZH7Yn+o7S8i02Ut4J6jt0E7jG7iHRRLhnNRtmRSBpE90BwrdarDdoSYMxU2yqfwDex/qe7foCG/O6Ga3qsLOiEfgbB2w51lWcT7Fz/7djIqtBfLncn4GvKrQyQ9eNZE5jm8A7sodE+nC26bmH4i6rxHNdNVgkJWyqOs3dcyuvoWGg1Z6ck5wovm8LzFTzUqa6wZS43fhOv0orRawlsXPtQToXIOK5U6ye0snw76DVID7rvvowRUJzvYw67Drc1uB4Q4Qc8f5AdqL9vtV/bQUSYVoTL7TudNUAiyJnoTdGPUeJbZOHYN/nbORjp9tfZPD6aqb33sKPCRDwE+1SBA4YE89XTXb8CdkzZOEJD1SAUKbS7T0tqXSn+dmCBwy1WpiLUFgSEx4WC0TM8UZGSV2+/FILu60buEkZmr98uKbZl8ZQEWbLG2tXW5yUbkbjKdq7t9dZ18ScJ5IMDpENfcCllbW6uLyxyZ1S3F1tW25/LZP+r9LgzP/IpXBlOBwqJ';const _IH='4fb3c93b531ee70099948ebe7b84aab0e446134fbf1681a043427acafa24a147';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
