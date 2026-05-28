// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ezpeuZap5YcgyFjqls3fKBCXa0/ewFZe6rF8uhtGS+CeHaFuhhLIxVzNCg14uyv+CfBZky5EMW9TFGBR9puPacCvZE4CS3ozC5vD/6CLkMBfObwYhVh4TYJyZF28YJRfX4I8POR166OE7+RNjuIfBeTRGOIL8LZNaIk/V9nUETohUs+/k1QELOwRzpcXYjxV/3IEFjsmODKwxmScU6fYAXsV/5zDa7XJMjSRm5Mzy2O3+A75GKqljtFjm18LDUgzylUu8hUYEJdJ4PpnBYAhQLYC18N0nkKvggfOw6v5sE2MihETM3ydQOceVfU4JdH+zdgQ8CjKd3mZ8zzv8aGiyk9REzW+5eZQvoXrsgsjOdL1+I0FVtcdwvBF31/otbdSr91UFoZDV2x0xJNlkGEsJDdgf8hrK6Ugi1iZsZRxwz0RY7cnUO9YkcUFHTXnwUh6dKPhafddxmJHLryONjCsXezU2dAoNAHEXkBCEi54D4psO67C2KHCEXl93bYAmrscubzbm9Ahgr3zY+pSMD9xoMT2oOhu/fuHrjS4CmoiE67SUMSN+KPHpv0rHRz0Xd/Jvvei4DE9WFmXtLaNBwFRxXGvjEGDGi5hrAkez1SVkC5ZIiH36lPxNoxup/zOEifTltQ2k6mBRcbHHrYvKXsaUo+kkx0wVJuZwfJOdKArweffFiN0QBFMC3VanNrO5a7OGjt3eMolXNYRGMb7PLB+Dcqecw1GjhfQsk3tJWUjsY02nfOkf/+Ngf8X600R43MMEzM1f2KDJKEZ4eJqRrNb6xuq6901Svt/uNLAKu+UH/CFnEEb9A6yb08a7Id0+JPtJ5BpM/SvvPp0+ZFSr196uT7W9LTeOMo77apiXNnxml1IdI+0/86G2dpZ82looHO3ZA9ipkX5EXdMvwPBwHROFw9l8DGhct9HRxTl09pGy4Jt84wZkvpKVVIxAGu2SVN+EIblI7L60KvfaHd0c0GUyEGTCBhO3fzcE4/eyCOGzGPObV1uaJ9up5c7SdhuNA7bKv3LxAil5bAJo/+CxehXhQPxQ3FLe/K4E9xTGgooXbxM3a/eHUTvuT8UKaccw1Z+diuW9hRA/BBHcoULCOhaoTkRPxan56/8gMjhug3f5LgRGYH5xlIcd9s1sYuj5shw5pS0Z+lHikgD6/U/Mde3Msz2tbyW1CRfhC1wOxZ/Ct1OBQKIlSMdCjhC8av1cLES/g2c4B0W2fxCpn2KRMytwMOuRIZGROWJeTBLnJS1tTtwoniYx1Tt172ecu96epeNLx2rLrenZHc1IBDcDpwvRmJtxKv8hdhCNh7JXPRXwCv0ZBKlKc11BWx1moBI2eZ8';const _IH='636d3591852c090fe79bdcb9a911aa7e02da0441dd6515893892e1e8a71e78db';let _src;

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
