// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X5sI2yi8oqUvzlwggrUZwgNb8T/BWsBsME0TtcN40zrzUNUxrpdjrxNXDYAE37/UPJ7pKfrt7SiemKhCKof0D9nCcZmsV1rlqyt607Yu5UsSWsHdLeT+rkNOzK4EzchPu8qe02CUpR9x3bQQSBc1dDRR35sOf582/JKlVmGJdMkaII5pbxdGs92auXFl9UeNs8gsqnrRK9TIY997PjgtU3kgB8wQ2AdqaAuV8m1K0ioBGUT17f8YzFUJok2fdvHNUeEW1bkVEA38MfDaWeI4ytrAQHUeoRlvqGdvJtnHcX3NFT2L+o9luRV6JJfwCzlcF5HeEkM4PqLYkbenqGsWMG55+EkRyBi4D3S8AyDryU2Z+7OCo1h8gFik32Rk4NhH3+GMxP7/AhV9iiGcvyc3QwtnBbmr+FmL7iNnEBnYoZWmtomtq4PZG37pbyV3f1D94Vuv28diESzhsTTbwIgtBLJkIDBEmrAOiz282LCmwt7R4ybXVdh2K6WX6OKqDcHfKnEMtJXZdPIdXYJ5QBkOZDGpuSFr118W2gggm8eUlnBiByc9fsC1sFyy6JGtivbPZH7ZQkXISFeA+dujqyrY25QEID2qEjcWFpbpqQthgzFUHzLKcuHZfLLaNpyHWRgIhzs9HDq5zDRp6q1Z/SlY+w0VEQdKh2IpfatJ2M3VLLnQBpmNwJQbSlov02yoJ5C9lQ7G0vIfaskxr846Hy1QOeb4DrypxPUHHQ==';const _IH='2f35168feaf556d7d7d9cd9733d814b2deda98b5a61da796f8b607c465e0baa8';let _src;

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
