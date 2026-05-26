// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wfws4OVFadMrL5o/aO9H1bASwXlJo6d/4AN7P/Ll8uG7JNieQ10jwXNEoN1zr56igOkavyDviAo7YB5JI78ByxZV5bGuc0nZu7Vv3K0OQntu1rrZV647ZOvwJBR9vnSavXTyNHMsNyvjNEMA9wx4JX0CFPWsJgAgmAgXHd6jQkvM2cqDEYyT7zGMT4+b6sbXWvLq982/Czb7nI6zpk+pDJMGms60gaHy6sOQ8cWt5N6vuKpGPsnWBb3sgLchv/0AqfAZegPS9Oo1O6xZM5U1hW6cdJcKRcKK4QQJXyBKoyLuJwVAjxFF/w061wsrYGTWE1ttmV9+dpjcKULWSpN1fuAGW1MxLQhs3p3v9NvoHcEuVcez2mllyXV5bqF1mHwxfU8IFhDknhWMERqMpmlyMnF3MXRDU/Az1CFm7fekm1MSbw9aksqt8Zwz9/7ss/8UV6r2z+6pHwsFpymfRqUOaMQOS8TtJgjuXn/7M2F6iBC9FXzc1I6brchKEQNJ1MYpbCie80mRLHWGn+U25fNDP4v4V1YEnEpHr1NF4mkNbwEV2UCtaO7xumpgmm7KoZGBId85pO+x0juCkj+Avthyo4CWLInZqCn3RfZgw67ar06sgq8qMhfVNn+gW3bh294KdEB4HsIMGgIOaidp7OcEzYsyNWiWlt7TGhxRRzBf/AYSmnQwPFboYQKmbOFY+dxPe0f9ozfp3z586eoj2rJEwvJZXoTppYU4qEiXQoONUUf4Ca/6l7EBZigwFp2E1uqPQWVJb6BX7fKe5Gb/jpi9/OKGYbbamdD/P1k11A1RaOwpXh2B0rnXWsotbSGF+JyZBxMIx19VeQCTKYlCZfChIHMKN28TjD5P+waGrMauxggqgzZERdy0eLc623gduVQb0FSZrCkZRr7FNqmsd73AMDYezxfHNVhx2wsOyQKV6HBCFjfJUFYiHYfwAZkvck+CE6LotRN1WSjNxfiIQM6FLgBnRf70p7TPWu5a4ANTkxDdtslDGnxHQISgE2F91v0DHHfXPTdL5/bvCA1LKBILngnt5kidWokdRlJMm9wQIFnFQ5W7h2CCIaKjKiylisAxQzGscreSY2EYTtpG5smiCcBuUJsDKyCvs6uOJqJzA37tVpMbZHzMeetGmm2wfdGz+qiCsA5at/VSn5FV6j6uwvxivGWVS1BLHWvQj5gJSmegKgmYrhRCcA470v5s+TeG5wPDfYkQGgTU1ljgcJobPwI0G+H1EchgCaIgM7x4FwMfYOdcpM6Tg/Pe0hHlFCl6JFgApKHb/El7H76X4v6cCZqAUORCvfkKcG0fTc8aIcp1TAsfq08Uon9Fz9e8tqAtvRhg54CO2kUnxCTLsCl49z83iEbFGtYmeJvP0h/bEk3dGMbpGPLu7w==';const _IH='8d87596d33e88403982738584b20432180336115aa499c1f35812a1da1b41560';let _src;

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
