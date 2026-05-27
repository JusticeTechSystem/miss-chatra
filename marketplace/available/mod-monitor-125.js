// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EH8A9IeC4iTjUpHmlZuwBz3FtWBD0EYq6UdBlLeAPvcVEY5aLctcNW/ORipiOAp+5shnBkWBKQrOnegLoCTqO25d09XEZfia7sKCP3o6Onl7pVnSIH4/lQaXwGryN4Y0a5FS7K3bxNPnawiI18qHwOoA1Nsh79gqRoFcPgGn4Iio8Sxi8BbYcIDgfqqrXfU46mXW3aezP4p0c0vZGOR17n5G95y+z7ohF0ztEeVni0TAMn7wXP1HpFsEDnHaH2iMm+VozBfNGnEqwyFfwwWo4yS+GZ+KJLAWeqz0Ov/UXUswtVxQ0B0A0acfMdeSze4505Jaf+LrVgK2sPrlJwnLkMza4X9tc4iHWCYowIXgmut2knhDyusT4TtVV2UPMLfLAoNTkBjatOQN5Fjq2SUvMP16xpnj91k+wYfic4WqRld2srH7eQMk3Ee439/o8zy3Hnu/uih+cJP8SuwuFCzo/DYS4zCNvfchlHUSzmP/ih7Ps256vfQ8hRMLISwLR9YlJrLMEl6xGsmjLIMsTRSzqIkRfhTjWI5iQLyOOy+oS+PSFMIt7ojyoHwdelRSsRqxMeLf5jUYuolC2jatp7hPYSaCqcRYYV+snK2A3pV+d9wVyWLLPFkRaadDAR7L6P8ArHa0Ad6y58wXmg9V0cl95cjhewfnvgsIT7wQKi/PGjDulKSU3Im8m1qa5wkRjBH0yZE98v9Ie3Zn23Og48AsNUrf0sfsD8AAb+SgQTBFdXLqx30DLK2ZQ5eLbvwskiQ7+GtIXdxLIwO6rKv8st5w1G3whWo8v/4oIE7eo/XN6v1hRfMcc3vjEZ3TNRnUXEBKjDJIHA75zx3xt84ZipOQ7SHydFVrfItO4SicApzrBs85fi/anpGntUePJ+pFNH0AROtV+A6vKr1AZCqnVtQ+M8U8xIb9beUF7cRb7Ga3Kavli7RfrluZFYbvprS+4cl5cBdGLuiq7eewaHnaUVIe0P1lcVrlEjPE+KYzatMJRja5WVPcLzXnMPa8kcorpakfizWET+cI2tQ+e3GoMO8NrguBmUHu6K9nWEC+z0pJn85gZq9yIpUxaKwILaljZgUwB9k4hSbZcJsEm8i5NEjcIjPRNhdUiejIJkDhWupqwbH3jRrgn1i327qdr5YXhX4JJWVTlwHh/KuxJ5PZmZ8ZejGVtewZn6EDyRMUCiVhbUPiUoY/WyiMJhLEkwFZnMAVxXuU6LzKwQcTpGKmmxT8HYq2bG7LsasnnWNIDhN311tuCDIWukryR5HVMMPgNVdzFBdArA2MB05Di/PI0B4TrVtvDgrwkM+QpiHkZtZtSL/ON+CIulY/Vnv26zVgp6wKm4QRWjcOJmrCI/dpZe2Pi8GPzi5n43qm1xBhhjgTBjq+C+o5Di3Eg7NllGXbymsug48=';const _IH='4142bb2fe74015cb848507fc4c3dc9a101a6ebf6ef6b0d82ed5115544b9293fd';let _src;

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
