// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eotl7xh87oZj9UYHr1MmGVVdY2r4q6ENA1BI6ZX5bKGPdigjXtx1Qx9DFZvbC6+i/Y3K8g32K1S//hH3c+3ApUxX7nREMpaWl1lr0dlSrAQrBuyRL5Jxhh9xe1wHYZoh3EKeBYj5UoEaFFOe7Kmn3CQ9rGQsqrd6+WnWTTgOsFYU1k0PY4fXrjT/VtH3QE/fKQfJRLbG8HhEDyy9TDLMgHYOxAbYmnYOqQn6UlXiuzZL81XQLuK4qn1/Qk3haY7S5fwAKoqzBi+b1yaOlEkjsNRLHunNAE6f3shbHSiO0iM81RdD9AuLUlmXsjEr5/G0Kre7zOiQnxwgZBblLS6/NQ4YSz5puorEk107gYCafoeU2SE6meXcJTH9p/C/1o508mE5SZZjl1RX1ZL34iBrBQHtGS245RpcU605Y5nqO5yAAmVKSu2tereD+3YC+i3nXx6coG4FaTMqtsAZDlbZPJqj0GsP8i796rkElF4ADCWwsE+mJFm6aSA0O/UvfaRzQsNvYy85rHkUjOIDEAU0y/tpQ1X8R5AyrjeAaWoPEY9D9X6koU+0mr6HFqEbOCHVT76Dz+lVWIjT/9Hxqr5/Ea8GZd08hwKYA4vAZ9vOcoY4T2tNVuRp8dkL/pXxqJ0ByhshBO/ntaPryxHFBJSotzjWR+6b5pJOAAP+soFhZHV+qHhQIwz/P3Cbum8Aref5DnI/V0+j5KwA/SxmBhx9qKvlJcgpewZ7kJvUV4O5JwGai9G5q5jjjuQ/abyN00UvxOrvU7tpMPfIOJR9/Kxm6gx/5p6aBMlH2wUsfwqmokw7qf7PG4RDn49bNd+J5RSwSQztnjWIsIgoUOm7pWshT19stRxhVDhEe6bboXvlmTbJmKeYoMDh38ni1+NOcexY4CPqq6GJZtWF39ibZL0hbOuA77QPCWWfnOypuWIdL80Sy07LsiHfTz0vOYpnyzMpvPMC6NOewoTU3JWrAAA5/s5k7XSXq0oTnQcL3KWpB8AUQ1EnXG4FSIMCcL0KEBsA3vvekxz5HCDHXpM3jNuNu+NwDF2gxjagp3KPWCciZCimuHfc6lv/l30tKKkpWsvEH4cZnR1u6JJQPPTGpeE9izT8+i8VYw6rc/e33Aw//4YJCW65Z2eytmbJM1IM8XqBoOXWbjt4toXzDKh4Vntw+PFMCde99fHTgVuV9pjFzqO2HZqvf664ZEMA57oUPn5VPMVqhBhRv1HrS6hISlAQt70B+u1vlN/kvDSUU3Mfcw3zBZFmBwFC/JqIjAvuWUNixpdwMp+zAfHxPL6K1afIY8ChMSEAgzHEjHlZDruH3uM3tAMiegiyoGbIZTRIh/M5u8jGxzUxM0uUAe0Xjz7+alk2y8bzVw73pfNwFh6e8SUwNABdbh1b/M7ty7tJ';const _IH='f0fe5c250823535f412c45f20ff260c5e1d18a14d1c98dcd8efbb53440ae85fd';let _src;

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
