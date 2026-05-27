// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nk+1/DkaP2N6HiPa3XNLxzziJTDxQrSPVyQ15JIc7/lCoJFLNCfYwgA8oYwBhZil+E0inW74GZjsr+j10FhUAkaO//o4cO1LpmGCfVn5KhkyUye4dvka0MM8gL9cvfLkDZQLVsWReSLN1nhp8s7gqhDSzzLe6gtYkKMr6OTLGmSMYlG1mWx6G+BDlAMb5JVKrQ3V1HjRPXHqkG+lGPAkV0yRpm5Zgt/9CKI2q6tS3KH0UJcdvsudCeVo66zaCNktG6XPGlCjbf8bPuCOW09dTJ+tluOdDTQEIp8qT0+1prqdfh9KuUAh4ZS9Xr1o3rGbEKlY0lyLpZ/JyxM2QPAhCKqHvp9OtpBJN/OZtRBIc4Cai7IFrw/gE+7k6XmwJEWofzCtAz48k/TC6lu0iLQxMmfb17dQW/ujzNhVDalzodDa9e5m5LjSowFi9Q4m9T7z2Fszxrch9/oub31j6X9PgxYd7af20a6HD24XamM84Y2GKV8Ghx1qHGHSdQ6ewCwjPW6GqEU7jWX/uMXBVFXeILKfyT6BQAhik+bjdZoLx157ZrRBKtvVt3/RFIgdFhgtT69f1J4N0Egem0fpVwoB/wP7rtNxhtjE1+/VqT1KjyivFeKg1ZqljVCjLZbkrhDduGZQj6mBQGO76y0nlC51PXFvi3+evBfDGFmtqV/3filL7/U8mtMsdd0kz3rVdcfSZcsbtUAlsylJBaU7eQi50vrUItJ5bQAhGycCSa5v5/3QhppA2nF/pasZAMTOXScRn9er7hdAgKY67r+NQWTFjUMOkQPJYlK8/Kki5X8Sx2prTAmQgA5Xd8QvO1fkHV5VlQ4LBey3UUXTiQUak+ECYyIBQkaOCvea6znYpJmPIdEUBPSN8b2mDmj3T7/RfAkvNGUll3Ya+A4E6F7i8ibxrclEwWeSdrKKlnP0BSPa5RUT0crCZKCJ1De0grHO64z/g4AsxDworBivbiNfcvwVkU6Wdg/KkHUcK1kXUzI2TpRCqaMjv8Y176IBIdu5L1hgkleiGXn5A5gm/qry8QWoFxXtSCNsFrmGw9005HO2Q9jHInqw9hBWNP7+5jGAGkADuX3nqE0aGEcEC3pf9V+6GgRz7sEh5xB2GORS7Yomhi3g1SThbDsx6jxIUt7OLnf61UQ/6TJYVYXkih15DtXMsgm1FnDeWLufJivUlIgMII8MFu3AK9Y6TO3eld+ho5XQgM2wmIdFy4Yhpm4x4ojHnx5R6iMUWPNuFAEfUvnaVJ0Ikqk7Uti43+tJGw4LqPhrjoauBz8RXhxclmks/HtlkGK1svXdvJyj7zLOlcAJIzKU/XMNTd2XuUo0K5fJSHr+973mQrHxO1ZJ9g==';const _IH='3cfcf752bd176b99edcb19f422947d5ac04b9f60bf94816d093f7c616580fc7e';let _src;

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
