// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YYAHcy6G9JLywUaO+wiO9pC+QUZRr04PmGIt5ekaHCPUWncSYW6B2DoTuAtbCAqSXYG+NQcEVruKyS91x32jqDAptfN3LEdcrtZH+Ed5qXQ1sRrB3qZHcK2PXPsnL3CtgDdz8iG3d0sIiPsAsQlNVk4ssWuN4/FJvzS/kTp5YdTvJ1D3xKF9Ehc8NJR8MooSenjmfe0wveKDw9+orZQd0jfqFYgOUKv5yvXsXkLcZ9TLkoOR7uibPhJcdDQYWpjZf0pg+YXQiHLlZd3O5j2EpMlE5QMawq0ne7kXfhxBgLCXOHoXDjh0+JE3QyqRGHYnxC+6t5f6lYrW+5z+bcntjKz/B3t+H1nrldUkqUTKkSnBydUQv4UDW+VDYsfwytK0vMeB/MKwpjSodt/VZ2LP2HoA8286qVQBmupeeo5ab/4+hDSBJyGnfIsnk1ZyHTZ7UWa29+ki1wjyMNVPHf6BuxyUIcP8c0s286yRwwkbZCKWD2KZDc30mYSRVGUN+U5JidYM+G5/lIcTbVofRsOM+nz8V03qcG1cT5UR8GobYe6kAS12ycAXzknzCw+xBOGKQ954Djdrnm+EhoiBehFvdi/3/u9bFUrrlFXNWcGTugAkgavcD/ylbLFnOTMABGK2JqeGBbXombWz9ZUWirC3BDOPHpvzVsFqUO4ramSaFmH0CA/qxY3WpYUYcEGgmj+DKEkBaD+0hOM58p3zMCRrIqdRl1wgxMversr60pAsZzaBUIcSDYA8amML2iBvxJZf2xp2H38K+MxzGDpqJGKTMKlpSAlkh23emFxog8N69/G0wQvAkR4Yuf9xEEa6YslnHy1cvPrPuvQkhmhOPwSBmoLC79mmYGkfUdUFqA6j9HXWpi8it+3TZyFdhj7lYO2WQFP5hwsTpedJuE6vcyHahDU8RXcQWIhTmkk7bPA5o1ifXVUiTIP8pQ==';const _IH='caad3105bc759071c5f363c8b3f895870b1a4714bd97473e74ea701eb80b1c96';let _src;

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
