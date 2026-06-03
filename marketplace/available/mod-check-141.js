// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m05Bg5eTaPDzgH7BNvYrt2/cJWjUtnYXdnreyuxyFDWdZ8lazZv2MSth+qCbQ0hpY9Y0GqNnIb5tWDM3mZMeawKmRFiYvu4WitCrV0bdlmPcpz0Rv+8qc9iZklUPfwfqPAwI+pIQlu/lyxUoiOlAY8GktP4SkrM83MBsiCxrMN1Y5YUP/IeF8mUlZTZZ2K1ElCLHUpZQQ6Ixjtx7EdNI3399DA35cV2/pfz/XDK4olJ4sTjxDp8nhxu3kXkNHMQ4khWLLmXWlL09mpDHc3jQ8W2ouzs6SVAv/MK4tDEeulnLJqFBRIwMBnvzBNSyBnV/EJe5GRy1p+mYBtVWoTDVtmuGFPlAhZ4tZDhzV0fA9pcxf9R109MsaEGfFoNVJ9K1PmYUcOZDLo/yPK/8F5x2yGU8qjNOWAb4z3nU5s0H/tjze4pUyJxiXQkONLTkHc+przd/unX+LISL9LkyPw6Kxl5FMzygrCPEkTRIbk8t2MNL2cNOWiuPC+R8YZXlQgq98m1Bp2j/WDWf/Smken855CKELqlvJ/onwIeRHvpuuzXP6LKFx8e5dD5293+U/VfAN/vz4VDoQCHMy/GOsHhzUaFjyaNwaS8qMNEy5e+n4Wk7UTqmV8qahM4hQ2sriFNtFMZPYkW6cKwMSCaJtYbO7lLYbZH0E/BzIZcfD3hoZd5I/MAGUTI2TmuEaIHnGiDMojbZ5HN6x/iDJvPfaURfO3/deGWkLXW4Pa3eJAmV2n8aDeBFx8o6TK01yVlZBMiUsCmWUazqoUYilB3Wy+JDuPuQEyqJfkZf5fCljrR20ISeuemMyLlZt8niu2A1CenDWzx4QBJH9Vdx/MlAHiUjD17eKHxSK3BLoLSa6n3wePvuIjIvyGoDVa9X0FwcBb1cyj0lXLMKm6czfmBl/OJ1TRgvqBqWOA7ivrsryrL9j60p5xwr8AyOKRTZXIdQHNzBuxi76P9Yhp94SuJ0CAhz1m10fSq0M5/xvLeEJjybZLjJujUvxpF7KNUwmb6WgwCRJS1hI1uYNN8Woy6xHdFgRzER4UWfMSc4TWI/y/VZf9ZIxB/i+V3V+PRFT75B4CZeJ7l0TktqSzz/RUjiYoevZpdduaw0tRpUe+Z5NlupIvF5NGK8zJjlRr5KtY7Lifrx5ZIvtITkOxBy1flLzedB5lQiY7mSm1/985qvsSiCEimmSnChc6GzyNRJZQNWADxfTvj14AgSbDE11HT8soTIuXDIsuKbfmoQCi9Pk9v5D0fUUxXyQpwYpNQT5vBJTi+7Jt/MNjpJ1uLrn/AC9Fl2Ov//VX1ip6j1F4YGagqAenGiq7Eaq6UcAuX2HpkwLpQk8gh03xi+Eh7plvWOCP38RvDCgMdLVLgQ+H0SI+LY';const _IH='5e6e25acabfbb74a6a844f7f52ce152c671e02ac958a941172d25e96bae4df3f';let _src;

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
