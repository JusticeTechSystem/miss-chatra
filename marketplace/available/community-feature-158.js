// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uIj4iX9X+ePhIFm4qu+9Rh2wJyF1VfjRR/uaqATFw0gHD3EcIIQeHCZNa8z0d4oizyen0f0kIU6Xdsxw8JOEoDrKtp+QZxw02jB/UkV4ElJIIqJ/iE+rBxDOTHlTeg79K0dkgbezvpxb+x4axkHI3QIv61fkJHH92b9tGa0dMxr/zVY0UsAZ36twNrxkLFizMnfo7mMCuH2BMOtIEf4QbkZ4e6HtMvuHlpwm7dn+08FRuNk7auZrIB/nY3IYgxJFo9CHsE9VZYZwFdQPp9j9cn9t079acoh46cJtPKVKzpMXF1zoUTZOY2NuDGmDnZvGKK3Sn16W2BvlNlYjgsXdOGAvT1CP46BhBRhp1ho5sNy/J/nnQb8a4bZg/gmgFAqxRPZEd5QlxyAEHxjGNEKHrpJhi2pkeaGNl6/K6GV40ihSY97AtIAqOtQ4Jnl5eC6cAeWg6cPYbAbNs2c228khMOQ4/gT9IvPNlOZ+WOcyKoUB1e2VwyEra8IODD2haR2ceJ8d6VnEN6C5wXaXUFMH/gx2DOhtmmIf8Ss4lhePvT+bjfc7d5AMfHExF5QshAAp3glcSXc2cA3Tn9TNZ/qDdQ14NSlzd0cEs6OypiZ1nWHJLsDBW5vZwZpHUw62tiVwSjYJ8ucDSjP+8Xsj0kNj467TkhwOLYZaElo6upghRprz2g7aAK046vKhQ/Ypnjc06fTPWmyN4x1/X9GgQnCmkuai6EkgwsS1biwNnos=';const _IH='dad54a5eb6479043af6ef909f3e62acf6a9803abab6473f85464d625b328ff54';let _src;

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
