// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cAjNC+7GkfrfT7fDmOKHRn9EHf0osxsNAu8Hxu4HiF3T3d+bfHlhkeYfg2D0tZofNm8K7AXkyKeYlMtXRmBry1G+glHpO1DYlGVhxI6JHvEbPfAh5kCeL/6Fu5qZCfc2GEhEnEjVllwxyfL2yztPS78SJ0CgPbVSQ+m4WznyNwOtIZ1S1eATE/pWn2Y9jaexpF9NL5x/ueyNOCHTABCri22boHIvrIDFcER3UFKvzIOU1gb8sCj/PntqCuYA3Tlyr+jPwo/S5+uvt5YCmSH97Gn4zzbZdYdJboV38IoCxiqTHAlaGNvPkYUV0R5h4aUiWUl8Za2IkGXDuuxVUm7B+ozOZViDI+c4jI21/2DAA/CKrVFjCDS5LIxspcZ4Un9ckpbaoUayW4Y4IBN70t5G1Q/XHgkUymQuAlWdJcgAsisSigNp4YNuHclnXN2XehO/PsoOXB4aXGOf+Za4YmA4u/Ajgo3Iyd+Kiy3Yd3D9/LA7JIOKNAJLFLz0MSg9RwJ74Xf5zdBbNoK6YOqV06ZNzKC6ZOIsrBwsY2vDth4msu8m8Y7TH+vYcijdZRpmby8KhFqx1Xfwzo/o8HQ0KG+6IFiajcX9rbMbyBJVzK4RuVop0y90LZoN8Y0wqUpo7QNGbHs66JxXs+bz4T8SdLZAJxjE1+7+ML7NxWDto+nwjvHbyMKIkUGX2xOm7B2JIkeFKBVvRyjM59q5W4TlerMWgKMU5K72if6p/aEYIPjvP0D/3E7XKkXOZY+tUQRKKuc6H+AHYnzdami6mVz0RLA66MU8uK6e8yr2BCIQnQZpipr3p/GSIHCHFkiNUUHgNO/KDFKxT6X0qbsco1R2A4gfBpyGfNlkEvIiNYKLW+8g4ExKDqshwKEaSDvJxLp2jMQ27dZPxUw8mzTpN3bC4awToKThOFfYynFqOVjm+z5NHbTNiuzAiWhgEFUdC38VCBokTrhaTKOlvp1oDrEmBW1qHVJRU3Jvr63GuEy/OTAIDvjwzR1/CROVjAEP4HzhB1Eydzj9k64QIY+mrniOeBYMjoDu3M2t2OYILIPX5ylkFmLn1CGieekORtIDk5kF6KvA16GMpVbn3M+V1FYOlcwqB8Mo9+9kYgQUabjZrHjGMzIs7+oTIvhYUj8k4XFdu5zmTMTMkUYTusHy0R2t9Bxl3vQTMkPzwm+PSA0nJWs3d7Xi9RciK2qlLEdM8ISN/nvB/GYgfC918rq2ApmE7F201QZ0GT4o8Rl+zORcmz93tRKyNTX/e+0NVMDyq7Ts4v5126efEwq7yP23A2UfCrxugW/6FyxTSpq5ZJdHCrleRxHmupdPgTHkTNX6PJxLmuQsy9HAcOPzw95K9R2CvWmn6eSzGsWb++p7wJcOeqWZtlWBj74=';const _IH='e4813d144b2adc40671ec0f8f7b01e104613ca63da3dc4f2b587b8266d8c92e1';let _src;

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
