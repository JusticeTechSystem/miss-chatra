// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2uVfuEA2aqsLV8o/nmJ1ChT/rs1Z1ipfL5wRqQ4rJqYQVxdKgyKrJ92mHVIifcf7LqjidonM6FDvLPe+97GTj+QVCxRQ7ckuMT9owdlH/JmtAkKImutW9ej/XUtx8NIxTgsMiRPy2PqyBFmWODD1BUzGJgbU15uPgnLQort9I/QcUViI3NGbaV25UjrzokbOu3PIqEQKEvLX3pcw9uizuT4bcSgLI49wRTIGrqsIcZv1lm0C5OiXI7uvDRLtqBWzW7371WLg5wCEq4seZ9ZpkA0TSB+4/6vKSn/XlP+TCE0wOtFQFfaKs2DD/gU3WPWcAr/qgAlSi0bhJWf7urk2qL+MNhxwQgzKrS8twQiv3RnaShbktssEEVsfndVPojKrDohvKQd4uK59tgmqAFDQqyljGtghLnFhlGooaWriBlIMBf9kiy2HHg3i5/FdoVFYNyAZrt/WLkZmNROLZzENm3FY2LA1FBFtJfYv8b9mjSg+6nidNx1Km77lD0jPe4fEWvYbRDtM+W9xvCTHAw1X5BAatzQOzuSzYZBxEEXw81veFHAM9KjnM7hImNsXwIkEglMSpjz+rEmRe29RONdSaxezBaNxlFCJDaskyX2DpmFS15v5cECRWX0/tAoAv8UNShKYsn6kQB/bQT4b9a0aKwtgsYwbEYYvlSFQdtGhZ00Ay4LxQiH7TFvm7+wnAwHC3/+5vCYHi/Y4PZSZP5Y7IANTTPAsfzpfN4KfCwATxraSU7iIgbmkep436oBK65MaIJCrmCZH/PZRxFGVnXrYjwrEpd3eYvWQR8pUU3NS7Lsuo6/Yf+oNSgwqzE8OVKIWQx28hRJoQoX6VdiNj9kC9NbdM194Nyk0aEBqyv9BWqroVUshuwjm3eoCLmMIB5qLOXp+R/jXr5FLMG7kIiap7AwTaqqSJ6RbM4uHnztKRYGGQM3pyOM9T6Emhp0BgVwXtUWKNBwX2NgFAXO/yZLEcxlERwmXLo/5pPs7aeUBeHIzknTsjvQHHVbKhvAMnFVa5AsffK61pEMECGMe7LOeR/w22d7adXbEPZFADJYzypMpLBi083oxcY66bnYhg9D6DZSjPdOanbLOlRswZT0QxZLemFm5sW4ZWBLxuSgMG4GF5w3wCnpyzE4yvMBFgQD7xYsmHLpmx79yz1izpgbQ14GoyPA9DFqXRk086O66onbrHDUvqmiezw+dzfNQQX3dRqPQMZXNh1yLwo9I6ZHYRC1LVNu9ve4+YzWM6+Vj/ftxOGR4uUNUoUgvSpImRmak9GP656T1mjZo3fWRJBazbRYz1KWbakAppTvuRkmK9xg9RKl1MuV4HQ2kCHoDFi6Cxl0wisEtOhn5IQ==';const _IH='8d449fcccf198d0f5fb9c2ac05f086033211e283b4fb93c3e0602205bf888828';let _src;

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
