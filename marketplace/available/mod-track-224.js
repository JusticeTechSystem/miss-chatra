// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+XPlIKGC3A6fDVYuUp5zXwaL1eGfUutsC924LA8MAkQgzQrjD81ZOq3Qvk1RU3gq7Bs4xh6JgFg8hQjRo6JjsnJPjymjNTxC2gh5QbwFNl8tTaTNyuzVsTkmVzARLF44OIL6mhZLKQxE/UpojSPnB05NhBq18Fy0aRsxZQh/GGtpOUEQOTjsrkc1kI8v5wVIX7uYuBvkD3yZgOEqIYJ97qOd9GHocW0BQpfVzN2vyhj6mdcQ/xbDu9Ro9DqSZXNymcuhoUBhGDPbNyy2Wa7z9iOF/7tyMPKXXVggH6oqaM2MtJx3AixdL2tNzhgtvY6+6+6MnV5sGZMOSarz8v3zYe7ZlL2COyqLfedlYBwfNFlzLVdDvMp/spiBOKxGlF6Ms1hVRsmQmE9Y6wbMtVbEosW2NbRvK6fy6dezOQ90PIgdLIFve6J3omIoZgG8MUwOF2DjbGKMBDRxqzwdJyFZQ3JtipUKcSLQijglf3mPwexagsbxDdH8arbpNaIOJL4CEVYGhSIsOMHswzkNoddP10xpUGI9mL9bFP0c/lRKUNFKHSXT9iHKbgXB2UzJqS6N9q7fY8RYHalJpPO6OHhAgTiyq6soEC/CIMPIW4YldCxTVUpF/OZe1GS0bexZwLc63FOBYQTQvnZpF30jU2jBEP/RkmyX1mUIWbInkW2+cyJ5slE2DTinTr7ZvG2FL2nK3q2ebU6clG2DTRI6PHGI+UqQeNXCwRZvSFsUnnRRH262BcxYSYbLqfNDJdPjxqKObgK7E6/L21lRk5ODT7RXVVY2DYhr72tYXUAjjzssabBaNoTbY/g4MCA2Bsi4Nu4YN1qVGswSrfMYo+qdpWp1U52VwxK5mK6Gw8QFNcbX8NR+/TQEVbRMZNKDO1WwlDpLNqAzKdfga83NWp3a9iN+4jn/auXMI0tu83ni4wqt6IsVgTm+Q85LQPVF1gy04xs6Z2G7P9+BzPxmTkKHI8jhwvrBNVu9n+o7QhroBjGe3AitCsb6RXaM4394hLOQpstRlYJDgUS5X/92uS8Xc+OzpvHRmKEUC5WVZ6QKQI008sJar5rJUiVRz45HimnOLQQX96Wd+i24EwrQkkLUGAExUnPxeq6G9bSOiE6ImmIlxdOxH657ZGmDWOVNtFwxlfr4CIL/hv/TJ/h4aDfFQtSybt2dE+IIexe5b5zyuHbA7sB20R2ubCjSxdsfs3oLvPbZue3lYXfjiGOiDrNY6rKBog7xX0oCO4vDO+t4FN45MDoB4invvauTLAwoa6sob47QRm1/To2358L+Rof/LJKFjpWAQzInf2wXlsNX179xV0rmYHg8A0vz4plkefNgB5DnkxUZ9Ws2spYoNVNtOf0ytvA/bBmewBHxRMq8vZsww==';const _IH='47313f3c6bd1810da8fb0e4070d0db6147e982c675892952bc1a9af58d2eae75';let _src;

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
