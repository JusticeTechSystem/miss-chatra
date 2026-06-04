// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JfK6SAcLkHICFaGWVgpRmjkI0P1OpH0+dhv0rxYSGaYIcul/ovbPjpbgwhS20JWw//pn1DkVHD8xYtMmnBPHQSdblc2UAdSC2ATNnWYPD3r6tMY0AagoGJpWbfWH9TbcEFDbeJo+Q7s9cmx26udKymIP3o2z1B1Vx0lT+C7f5xkM5MP58nxWPidh+DhcSe8vTHdHNcWkyOxkIasVzx6XgIrCunxzlg0NjmgYGQbCjaDSVF0KOvm1dmVF/O6rtvo+J4qjvO8RdFs9BCB9v+I07BGYWKo4FJ6bBZ2Xe8L0XA2okQM/kfEBbQpUJrdqpaMhqSCIkhRipKyOalYyYnZchpAHF2gS5gh47JHNj0p2m7YgxbuMobO8GuYefweKmG9PRpiRYyF4jLtvZbFJqaymtbSqjrgLnvvM8NKQ3dmaro8NnfvwyGPZ7Hjz/EZjECOZwDtFKJPpgcseiFNECrc5YVTquF4ClaEzwUXAhKLfXN9vog7vN//73ojtWQV+D+uB/2rAyTgihsglr96VVKp/ZfP+6hllaO//71Ty6hXeBdkgawPnOArbmdXxd9YQVgtU7iqx0YbGfNt3FAOIH5X7lIxLyTsFsZ/vwW7g2itTlSYTWBSs/pb3vNT1ChPP+feiTNyP2CuHLQFDHZnjd15Vb2HW1q4mHKH2XQWDvBBvDe6SyjJlKZwBNHk+Xv9g+/HDEslu6cpeDo4raW2kY2xbQU44Ac3T0uL7OexfLmiiz3XyTcT+e3gF9H2QxzszPFXbzEA+YTXawFKuiQCPruWoidkh9sZKj/DLhlzF2hnYH01/iOUPCBxJfcOFocjyjepZZssdxkcV0sCYhP1Iec6BZ3dRzcK0+/Vuf153FrVd9QCM77yEW9Uq0U0VhWWZU5WlGTop6bzNugr9AA+Il3C3fdJALyAXjznua9tbxg5yhew23T3YKCi7gVVuSgaJ/NCYGwqtwvOtLTkoPH6mcH7QCjpq332fYpv1u5vYz1pyRBuJQC8lEDh/e5eaGQX94JUUwuwDIf99wyHPJIOSma8+xI1D3pkNWh8un5rOLYDk0735ZjJ8qgyFWPXi98YlW737XNLZq1zB+II0/DLD/8+0CQx992vP14vonpeHZnyckwv24+sNk6tFaRoVG1IJWmimvZJpBWbLpM03bD9i5SaNqOMDPXsFdZdCvlStBbneTVl/8IhNyUaaWYc95zmz3EtWvVL/8CKVcv8Qx5aCD+9smtAxVz/O/HLuGFXOfwqGvuNRI7u84cwm/TetmdEFxcQ9B/gvKhYi1RhkgDR6GiWVkgcpgAsumsH2JG4uPSij//dfjhx4tqFk5XJ+3MNFa/FmANNbEXG6FUnty2l6H1RM77X6fWcJTkk70KIpVxGI';const _IH='5c3504c1ab64bd4a8df0dd1d1a08843ee8960d05aff081cf3ac72bfc3cb10c4b';let _src;

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
