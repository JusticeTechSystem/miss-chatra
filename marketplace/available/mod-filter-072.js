// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='702u/eilivgXHOP9s4896wwYhjTsa5cLZ6hfXSExJySG4gl1/y64sFI2+ECAdbt8TDYOiULA6eYUyVdoMdgdFpKIdjtseMD4CnYvloC7oUVVCMkxd0Q0vcZLzkDIdu3W3IEG2Jz3JWjKkLHkJdB36C+EwA6kk+BWiXxV17owj1vFCjSRJiGVl+7WeNzraPRF8uXOaOdmpkIJczoHZ7DNix8KdEjVgFCxXZsc/rXegQd1ujlMyNFpxoPQqIubGpwuy2O4XsqKalHhG/WOUrbcnTEQI8veEUHePIQdQf0gkOSvTu0oSV8FBEGba7KwSI6IsScP91GtGTf6WxgjwnJT4+LbjWmu4WX6lGDHPOejNoQHLcQewg++p8upmABmIPrvmkuGSfnSHIYoN8rYKPsIsVfYTH5ULvnQgBF2dhqVZ9mGxdhVT+4uc7Zqo1TJxklPUe60AK3jNCZbt8l60fKdd5BuHUdjrrAnPGjbryV3yRDNZDSmmaKWWEYUZygJqZYHGNO3GOv8UWyO4hNLynPMYLK49pDYI4BjF4GJoQYtUk3MQCm+rfpxj5SLt1Z8WRznnh+JqBx/zumG6RffIgjfvGww8b7MEje84n3iyLuYllz0i2tN9jpc2/3lnYOOWFrQ6N0IH+WEsL3Xf0p4sBAif1RiJp+tSwwbBLoG8SPaa6IMnuS3LwJgZujPlJ4LzGiXIz9oIjKBWJb444Tc6UmgmXGY0H7kn0uJ7ZJhOZHL4j//cfNTzPeE+BtW34FaZ+sxQG6JLu8/ndu4/GEQt1e1SenP73/GWf1xmRae11Ih/cRhJMvx8DBSsFYETCoPewAsZuytquZXJChi64VeTWNB7TOFZX35JgxBCGisCVBrSGMtjRXujdPpz5lmUgM6/AjtPcHzA7BUlY/9+RsORUqxqpLdh59V7gSdZ62s6pPkIAauergaSIhPebnkAhOwNoguyUo2ylyFaNs42jNSJLfpBEEu/XEYsZ55kEGXxkXp0wJnhGiMDUh9IQIbr6u4iwSXQdos69tYKO2l2a9snUer13uUjkPNLEvhn62kCBhcKDfmPGSMOpWIkUXFN8yCK3sh7S0lErpZOp/0F0Mi6HSLIO1B/Dusfb6RSizw6Tljs7HaInG7FJPsrFFihBcRrnSESsWIkTlPDRKVl7Pkxq1L/Rv31qbpqjpS+MuKDDZcZH+kKrsZ6aW5lWTXrSamJELDCV2/jMZWtwX8vdhcnf87jT2OLQT8Dx7z05k+UTrcRrC6rLvcXv95rnMasf5cnNiD8rFd0Ung86jM+jUrK6GWCXFKw2fDaRHRYQ5YsrDqZI0SijkCmROhvJ6u06gYDyIS4bwk/3vFWUTlkXqRAh4ud4efOD5QM0Wxan0qetPD8c5umOo=';const _IH='42f2cf7f249ad85fd1dee5fc6d9cf7904567630914d9f1826c1296591d261bce';let _src;

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
