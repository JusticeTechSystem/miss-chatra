// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1vYI24Z+SoF5IkagQw23tRCCV9ErSjcdeCtPa0vjE1Fdj7DnMOfv/uJAGGVLW5kmOhR6Sn3BnK0hwKNqRV+nOafL9niaAvMcS+vzwqhMHv0BLluYqv5TZGQ/yVRrBN7iEfDaUK+JALLXK4N+g/y+S3mkDG+jiAFZGm41EnxaTFLLEqxXVRi491Rx2jp722vWGqTvthMeTt7/l4zp4AK1PPunErAwFAio1aIajucvbLKQQXOqnA+4y/4TPw/VLPqVW3snwQSXpfjax/K8xtGIEBgCt9UlZs+1BAwgGXaJcplUuqA0iJvHMvIC2q+Rcph6Kz9XTZswFQKQLZk7YSGe/UPz3a/mrhYDSXDfMDd3WjXnt/085ztRjst4/y+/Pt12kBH2fGmt2k5xy+u66NZM+peBG8hQAlvaaX04/0uMHJFMXvc1ribLD+8ZRFgVi2aNVPmcN3Trp1h3cCv4ZOJY4QvYwuW0n8lHrPWaAIncKJ5fkPMUeOZYECg9iG1P+O9ftuYOny2vjlnuybEXRdZQrn3RicXh0pjit2GGP5A95X5DNWbV4TqECF9E8uVkNbEfmPaAufbWj8nghDS/DbLK2WE1hh3Nn0AeoDgcbTUE1Ud93NTagfXpNIyg1iXw/URJRsUDwOyHFEP7VN9TJh4mtHJo2wHE/89V4USjZDbxKL6Adm0VbfO416bDyTxvfd+5UKAEqR0vLp9wfxwFHLHPsRhzcB2X+48n/UKtrT9aMbDK6bYzFTrmUyGRusYmEV6bboSY8RZB5uKnEwVYrBQR2WepW5Ik7oBx/hgtVSxNzXs5DFLskRDykqOZ2470jJai9XUCfgQUqCya9wOOfXkjUESe/UA9TZPSBpPOsrKJw8UaL6XymqMxj48TZ5Ih68XbYc5ylYAlZzibwjyk6EWM9VRYGBMq3QASnBYjLTgwAGj1AjEg7XpHzc=';const _IH='8c544010756a0e86d550a8c873c192bb793f9a7c5f2b2f36254cb29c1ab82e17';let _src;

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
