// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MVdJ46uT8Elk2QwVMh/ecYxcpXBt1+ccmF5xSUI0NfPtwKffH1Ngbe34lwanYj6du5lBdHOXdhXm0+cl4WGg9ymSKRZ+i9sPShl8Bpbuofi+AC/gJ3UJYYH2Kk3noHDxeRCuRzYuvpgT4TnAclZstG6CS3sFMsG18Xkm5L/cjhlaiyP1L6/vp3Ds8nLfSg8Rujxia6boMn6KHuDeELgDEYIjXN3MVcR1IK4iNjXhEKnzbnjqDhKyiJodaAPBC2GqLzJp4ly8IpJpvm9gjUi6Of6UDgAKkFEo6oqJjShWyjQPnzVR4d1Qh1eUIXQ+Z55J1yj8aOkCQO3oJPP32DwCfiGEGcQqokpXcvog33on/kWfERpWHBKhOqai0ko3XPMAkCn+SaHnKxCLvd6007Pm/Bb5vsiFqkQwcjDZ4l8DF1YQ5qEviqvKMsdiKsOggWF8D33cgOkNCYZM2A43U/Ml/uMZLQy2gxL7OihBc9kg+2IcVayy4KScaPrgZVJnbRH2QcKoZ2hWnwK42ExP7WTcShbLSgipLJmvVx06pmCEvqtEvIJBUl8AoMyyPA+3tdv4a5qWqf9C7qK+culaFYfG06VLYXlZktzZcMZl+Mgv5ALCMvRjL7QA4QYsdJBsr+3IEEVw0gYcYoiHJQrm/crkK3Evw8ybWa4o1aQdswlWVhGyVPOz1JMbQFbGRj5SRgMwZl5EmNLW17v+lWDU+xL45MpX5bXkxx7LqEpKoFM45DK33EfjR+cTOnhfO/Pm/a/b9+NtZt6BQOWmt9AFxuhTir+sNbL7lWFmAKjOAwE5G676m7JQfJcSQLcJ2xqx4I5fWDufvyqelsFcHzJ1Sdej4y6bXeqGHC4rqfhEABwa0enSInX2tShvHz4TECCi9IHarhdDcTUc9UaWETeu2gjIQ+WWqj6BqH9PbaLholc9laru9M/OgQkODV0AJI4AFbWHKse2XD5iJU5MWqx+Q0Cnbp4R7+bHRt6KXzKfNZ/NOUvY9f2l3Dw=';const _IH='8a1fb479aefe792341abc7df606d32f03c814104f560204d1ec0cb247885727e';let _src;

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
