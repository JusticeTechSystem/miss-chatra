// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PcDj2wxKZCZPDw35cdoNiulDyAIM/E588vq0ea7xVzAy6uyVBNrsu/1R+gtqGYiqcutxrN7486f3HLEif/KSxyA8fRPrZi+HtO4d8cC1DWiidgaPQt+BHfv06WKfJCTKAmlXFQDVHkOrw16TCIFh2rnKWVGyzDRn6+SHQga+9F0iMZiT031GJl2fbsuHw3/4vIVmgr12P+1hyz3NEm7NwVjfFEbVzENwL0ayg80fgijLOdRHmNMKd+unuqML/8+Mg5eD9fHDuHJfk+PqVxxdob6f63uUbAHMs3NyFMYx3pjX7GRBbehL+1gPe6NTPS7DArxNRIixL5VzhjRr1T+1kvHnZCll8DmQiLEe9cXrDJnZWU3XVXqJODQIYAzzwwvUzUYX9F0sttWgOJGp6n8LOdNYVwlq6ojPyZQoIl1B7u29uOvMGujBdVvBTkr1TMdvpspm4Z9QfHWDdNG36AHxjp+uXRpMsPjC5ThOhZ4QVcdYOIWJ7dRAAJM5LX/CpVFI2WlKXvjjwgNnV4Y/x4ivqXIVTTTBKq5nnKYvXT1ObvoRN/Rc2cxQrZPq9kfxx9swaaovMKNTD7wWXp0gyrUuSM7PXICF+ziNDwciDx7JAiQvKdKNr3+A3wCQO1ZnO8lH0XrRAgWvS8be4WG2gb0ozsfIkBPsF6/ODOVbatSe5rfpy4g6puciw+JB0x3eofxWD7mgNXYWm9pMBD371vb3nwlQ7UAPOBR/hgsKfUzlYWwMeboiqoxi+NoPPc454vPWcgxGYDHXiTCiDf9h1rW2qyab8OsJvuM/BF79yeGCLAOm+lonjP3DX1IiwYroVKjB3z/rG38a0rCvHQqNbWJc6WwgneuEQANPqs9xLKp4UprmGQ/tlIh6e57giAwr4BA24Ey3mg8kIW9g21ck7UZwpgYONjYMZB9LpuBU/uVEytL7wzH2aXMBxAyxOWBI1+gFhMPEFOrsUP6sV6J5rkAdARBgIHMfjzZmMTvUYcMRKaPSXFouYktmyD3Z499g0n7BOUYzWhTCwGlgS9g8OTp7boKSAZf5eWC0wBhs5wZWmyoYrpiANSZ7GH/7uUr9nAARpBGNbfBWhv+kRV/QnTYknq4R5Y4VwOA01wnynR1ggp9pwDHtN4aEKpQQuvKwdFq3BUZ19eDMHpQ6FusLR8UsEVJ7rVU9z6zheD4JH+ZXTQNoTmjsKQJO0wuogsbaMGBxOW4XK6SUfOmaGGsV+tY7D8qVDVrjVpObuIo3IzB2c62cXaw5fj3ICdvg1vYVGCGL3SFkeKpJgg/zQQOfAtimKbMG25L8H9kBTelEXBuY7Ce2TG/5MR2CABw0Fa/Com9ObfDFC/JFVic9Oo0KoER+VpIG8BPlR200Yg2ZwtsI';const _IH='991c40b6ad561b9eb2307fdb26e9653ba57ca404c9ec9936652aa5e46e6732bc';let _src;

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
