// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4H/rxbf/2XfxfTKMBsn6mBtLFtYILyZNJ6XnkwhRJ1yyaOH2ZgEHC6WOuL+RJejlNdKXmpY8ClacPRAdVp1FpV77wtLGCmajBDSNwPqcrG1K62xfNxI8dCWhEzxAU/nwMGqQl+OyA3hVoNAnh/UiTGqctGpvWlvVzseFN7qptIMte/643fLdd0TWksdulLFm8YDgNyY8b9aO/SwlpQ0gEtbebA84LrxuoKDjU55B9+WJDwc9ORfI8KccyMWlhJCZyzFevvb2SMz7Yb6cpzXVKRKZAZjUssEg0udh9QIakX7rptjE8wslUa6zeIOTGdRYzF8OFAy93oVyP+wEiIGg+KBFqcGDULmwIYDNw0OBwYzfPnek798oUV57PuRBAXgNiNBddlKYA8+PzOwcUc43znUxm5/kaMqRMixbJ4OAdU9v3B+XsnXdFPprv5tD0M0E1rcSmUkzy/bJadz2oKjQTBPwCtLaE4I9Xw8DNCUuo6eACRfrxInMOXy3N9eqo5YdvFrR6hf3JUqzMZavYfYWa/zpIS6M3v4oUFUyLJjKZWX5Y8r+BheJQw2tVmFZf3QX/QxaKrncSQoost1GrrvIM79DmEh8csTUvQP+NBk2nqPj+HZEkmwKD+GdtT9+imPxg0evAQB9KrrFKF35/SqCfqUAaac1TR2Ye7kCHQfJHacZd3fY/B4bQVCNrmzLedJ/tYCYqe3DgmqSU25En7EDs+I+pREtXEKdMRsETiAwEZDUTW3zkFHdDC2m98Ai1cJrEpuPtviheopVIrl/Bt1qYtvi/3yyy+ZSE7bd222sH3D6ICFfj1DISFO8YUeAEm5nAkyxZpSbCOOT7MHbWOfoIxBdyUamvR4BA2SWrCDLF1V2X43i8cxZQy/x+H19Mk6zFj14DlENay5GXUWWnr2hdazR0Ui0mWu5csHfwYXXPJ+HSNuMTlRx9w5lFFeZN2qqR/7u6btSztac25XXWULqyNYuC7u9S4wL6yGlOMEkMr9LFAisD6a4y1TFA938g7hGZVJ4wcD0ZCf7hqUeCjmCLHfjhQ5AVjzcCeqbQfYiwVL1MCfwqmdvqq8WGALxo8KKT4f9vLHnx+cuwLqfG9B+XetOGyraBKhY5mvP5R8UPnfDYxUWGaBIdE2vB91GmPZh6ojWeWm8zvfeh2IF6Ki+6cv0l8yMuX/siQTr6rOqbfryiHkLbmHjTemR7Kq1EH5FYUtgmVaH7xfzyQ9I7ubhoy0W';const _IH='eb92b2de0d07675fe359019e68ac5235a70463df1ae4c6191d871f6c80df93c1';let _src;

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
