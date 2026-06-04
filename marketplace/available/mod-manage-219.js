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
  const _b64='kD6IlK/+Lneqxv8xirvKv3faI3piZOWsTCkMMfqVxXoSW4+jZUgq5UZE7m1OoYtYSF0pDLUrxGkAeyhhNvOIXOor1baJIkBK6qqWjgIGOyY/Z6Dr2+V1VSwd79SAgW5MBibg6r2gG99StxKKQxrFGcKnC871hGxXPro1j6Dz1xYeL+P52pA6ZrIsiqNfKrxK3qOCboz3Q/F0uV6UW7SrqzPhH2D3IllGHBI+Cwi54R6fmYl8c5Q5d1HJUnT/z6BNU/UmEbi35cjvWTWUWXxngN3dHfphzM4JFU2RLXiy3inVbAgD/bCuCB3wft79dWSXokA4vSdy7fmnlPrl/U7npBlWU6gCE7AxB2mgCeqirKbjwiNk5k11DdXjH7ZTIBxKx2/62jkl3uVCEybZL45gonUHAvkngS2ntQ//f7OHxAv1IEYv2OQBecePpYfCbsSuvQULEBtTJfXuDIH9/vbqJ7HaU7t19wboeqmYXEQ8nGk4QvjSx83nseIx+AcoLEhWQ3W0ionAraf+bMWSr789yA1GOFaiVk05PURCQSWOnChEBuyuMOm5Tg+Halg4qNQOCz9YStRO0eM0ZVuMRjjhe8uGTFNJ9z1nKuCknkIzfAM3c6IZTua5LtoaJwJ5a+IKd5AXF8mPcrfu6zrBWpO2sUq3pU2cKAkuNjrfI+ZI59rsFuPRAcwW5Iz2tNW//yFxoWa6wsrT9EWqTfBEUcMtH+BAj69StBgvkdUUI1teRjJfcV4ZuxuysK6B/cvRgZetdlZ/SPgtwD5dI/WsDoOaM0A4cGKYnKMB7ETGpAW80Dz8+BICgqwTAF6av7lAZRxDdBmC9dyxfM0PktYAwWn4eSY9YEPMsclIQ0+4ExLC0GIg1KjYcgHlzJa7y4jNOYZwPL6w6Kcns/5DYg5bB0EKGYDUDaL6LYz+pvMTZzo9tBPG1FuxdFxepucpnlWW3NcisQUPnY3A2FwPiwtpEo21Qq96syt06KDEezUwoljeOkfah6dwYpOXV2kOaBtfGBq6wLlhlzxiany7X4a1YJaNRAqMgtUTG3f9npUv969ydXbBJPg7HNcXlZY2uBGxxmKPMuSYfBH0yQyVqklwBYZXoYdyhw+Y6QR8BKrNvexpk/FUFEx1Gp/Q8Eeiipye5HWSolVW5TAwn6BlU3QRQ9+epz3Z+h48kegICWTSX/Cwn/dsJCgYtEM5dcYs7xuJRMQF368VRtWLWXmXAdjdhUE5of114NnVvADOJxvTv2gZ6FMF0dbvBSs35PbOqPkLv4+IRtpl80rWEczdBUfpm0CLGQXYYCLy0FscjKGHU4RKNfdCdgtrrATgVplduLhGb9ThX1P1KG20edI6jUucclMBCucIPhctA8TZBich2FloJbGP0OapM2NRrg==';const _IH='9433cc94ba14611973b9255b4a8940278f59d5a21a1ad35f5beada7c5fc77283';let _src;

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
