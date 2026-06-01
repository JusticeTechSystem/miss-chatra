// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9UYcnccOoUjiAnhmSP8Xwzuaw+mt43INTe0OPxc05fOtJMyAlQlYt7dG9dmitwQVTWuPlOZDH374XgYr8a+Ckgr10H0Zy1k9xLgNWt5VvljWHYZRngdJB3uxuVca46dACeTOUjeWRmX500LS7HfzHoFIQGI8+gyxxqM3WjBhiTKFuXg4Mduy4r8u0E9mSWvYda8ouKphhJaIEwjpnHoTBtMbeqI4PL9MOmu56/EssNQccVxzpcBUT+m0+T4ZFx6mh/cvDR5lI180Q/IoF1VQ6bx7q7bjibrBskm1/PBZt9ul57/rC5xI/uZfXSYzeYyxpEF3bklrv7V52EEEJPoRXouRHB5D3UklUm0yp3qG+QDMvmX4o4lyJQJLA8KjsqgYwDaekp+bVVSa4CS5FxQkzXxqyZOlDOqvAb5Ynw/tX0IqbQlpEpLbjsR7OUYSEfTn2/SHlS5lgYKR6i0wdOvVD8NVy7f5R0v/EhsMxeGLfK4wgMsYgUuy0Ev+PruPFWlDwjkd8CvxwnoWrsGYWPtexMiqDlOat5YVaTh5J3iQ8Znbe2xCuPoA+YODS4AKGAmPASYpUsu1U98Efx4Zob9wAgu9UimBbnQtXH5fmWLFmJaBurk7SxL0PUtwTYslCBUBHz3NF943HtB8P5qqPZgkjIeL7Gy/UJ7AUzwC1zuwj6GjMBE19C/1lWFHGdb9j+Jbrb7bSFLNZc7S6W2KfNszqHoEs9vy957zE3AgpBE7BK4KThCJ2ZmwexYcDmOgqnbtwBYcuCnoyWJv6+kA77cysHiYBSqENLtg18bn1lPhvmabIjEIEqX6izWtZQYJL2AthsYL+EZp3cHjsQDIBZcVlE4KXRzmqoIqCoA864mhiW8GglIYU1mLY4rL19JEeYO5npd+bc8zcVaalTgFbSFyp3JvO6TfavWTiqZnuQ9o6WgsWLKC7amwESmCEWsjh6vxJ43ItcKFYJchlSv3CYz8nRxTiehgLoopShhE7dFgmR0A73LPvs8s9wZa4hJuzSD2q8q2dT71zHk3GZNmE8C/a+xDHKqsCMvk7PWI8wAbJvkcI6c8xkeqRbaOc9RKReEsmL3WUKsnbKrzzRiruJ9FbuHe9g62xiIaovsI8OPuROeSI+9hwJRasFY2g6ooscO9LzIPdX/RzVROwErtB9a7a+8Nb/Ald1k0bpHf4PAu3loIB9+3ZCAcXYcu4eb/nD7r1qx1nyZ1ifoYIinb2NksaUc0uQO9WxeZApUtY/MEIxSCdsF0bXg8vubdJidZGA9JOBdhq7G1Fq4P9rGW+W2vAEL/lQT/AlJOdBqt9mQQVmVjjHKH/e7Marcz2Ix7s+qUdtovUF5LrDQ5auCrRk8ubnD+jPvYluvdjWNc+t4ZUAsL564zYklty6SQO39zLHfUWTP';const _IH='8fcab1c07c00c4ce12d31db4d383d0766fd2cb50a9bf5cefa23f84cf9fe9c8b5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
