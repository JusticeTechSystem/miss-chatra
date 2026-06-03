// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BD0jCql2rSic0vLKRdEWLA6+d5urHYO+ZGx0iCPcVpWDsV1+2EZonQvKsQTOZgN2cPptdeBGB5pNtYXYhgQBKUP0icYAk/6LIqtIdZrVIoUUyN66OML+OW0bN6L2vVNuPnPV/NuXGdkXxRF4fn7+Lbyz1faihJQQtZQvHf4O85jtVOePp5psj4BLwINkNPzNpfUFleZbcSwrXJQ5Ma8olMg1JfP2idHKemZ0tCQXB0HRZZxCVIrutHjKeTJhrnQkxDR4BuZJciff2Pj8KTpm222cbXhOFzO5tArdLv6dNp6r57cBSWAStAb6gL9x+7wkSAqfaE6UyxriyOAkNiGHYvlefFvJZvtQslDEkzhmi/6Xo7DthiQiS/JSQtA3ry5xnkbO3tMjAd/aPG99iBFln9+WtI4BV0rnwu4kEvQHDizlCn6WzLSHtUdaI67CoM00KGRMcjFsrscMM475lYlAkMhZ7glGxB97DZUMqAfeAyBosJpxMwO0CcqERcss1TDtM2i2nODnh+PHWn0MKAUPTL71ms/n409LymsvmH9jybyUPNatiWYSvzOzjkoRZq6bfVdB3pxMSmSk2S1IhEoRON2R+pEORp29fCLaxi6xT9fpqScK0RNtykkH28wKvpnmS+2BYTgnGy4f6LbiFq2dfqE0u87/uQVpCcINz2gqQHkoEiQT/UImVDB+bMUMmgnuAoSKKu7lguN+5fdvMamxcw9TT51J1UAd+w/E69kxhfTnJlfzqSfHHT0HCk7LeoOvetn2jkeGph8k6uJTkdN0PlRWTroGkRZGaRPM7ry6IAvFEYGVqWx4yFHypdtpLA+Ad8IyQf9tCYk6H2gw50ofWZFFpcSc18ip49ECLHljHLZyUs8rvGLG5MiTYkWa/iaRVEXp8au6A6V7e6ecnvHiPSWgqJxzQI07V5HHriWcRbESazdkZSH4pGHfmBp9nkaCD21zoySNfqbjvBUaHiy/s44RhttCL04FLxkKYoVXIQRAscGDOJAAlVKyhw+p4kcpZcGj3qFca5aK8LUTXk3eOtG+nPApjdwkQHV8UA8o7+5WL9Z2GYNQ9nmBsVytwW1AeL5z2XGBQ+RD2YcSKVd4ekyF8Giw4T9F51Af2wluAmWLV535OblF/hY3AY/s5UVtXYYyjLrEWQwtLT8YPw4FKgasBnv0gcPaEyt6S0uS9Onizqp66g==';const _IH='f94a9fc3cbd188184455b0943a4af26a72348ce9e0c080fdc4940ae2335813a1';let _src;

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
