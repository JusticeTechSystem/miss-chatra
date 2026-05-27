// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l1oJByKn1k+m7WwGoTUrLcY8xObe/IXfrYbHeysTap8VypJUjYMKE8pp9CDBZgKNcyujq7+kbdSHZZpyvj4wDbMApo5U+ZJXNhsAmHEi03Gh5b0Wst1Clthm8VMWqOk2FQFnPGmVcZF2OkOdkYgCaoYditEtUdt60jkVv1UEnH1lCsqCO/DuOnb36tJsRQn1LG9Zwcgd2jRHGOR4JVTBvPxvQgHP0+zZgxrynIH3eyUGUxIWU7LfjTu0MELRCE1v26ZMQILy48mcmFT9grTJHxdWUHsSs76ywj7ilcdzEULGtpEXv6s7gfRGmVuNT5yY0PZOk31mQQupjzV6o9v0pbS0chzVAHnqwKeUeKAxI4QRn45G6hqFP49Pd5DU68IChXN2t2Pj0qbqP2U63ereGw/7I8PiK828AjxXrO3/isoIfZ/PATnq7QzWe8FXIKRCw2UdC4aBjpK6oCv+rsOHoqlanWxR6NTkYscI5sYL1XkI7dyTNjp3l1cuOB9v/AYK0BzKnHiynfCUIUrRAvPIdlwpzFfcCgwra3mLvIXhy5M5CFWUleiqV4DKNGPCuTCypyR4UbJgsarf0J2it1wZhG0jokIg5N/9SA7FYpApNJ+f1KC8X6Qc2nipglxWYeOQk7GUfUxIG3TT3jxO+WF5GKRTL8T8pFbIvc4uS1AgRwCfXH85eRht2okoZubk1faWgzW6f5K6vO6TUzT0L8NTcaof7GHn6k7i5wVVEeTCW2FR4fXFbSJX0Sp5qkyh1OifTBe+L31Nf4UeHBrQDDHBhiHsCKpgfm0n85zLlZ8ItXhxSjULAuHQIfzc4Ju1WQwSVqcAi/b1KXSFMY9F89j2cgKfUHfLdz63p+YKajyYvGcpixmkFkZDJFa4OqRJT7TL2KmQjiRnK1XXbpnfgirGlPxePb+bkSih7PMYb97QCi4RlbZUSXNpJbPmoIwnxLiPKBM+pGoeWnmfdSUuD9B8qbu/iWIsjSG6HyVOJbv9g0SiVa1NChewSkBeVAn6u7gAJ5yjBgYOXpzmKfouTpPbXYmqxwT+8rz9zj3NwnTikHw+sE/f6YRgb80HxkQwmnGitQv2TeQD+uEcrRIoEe4ODsTYXmQ7zjr6mMnwxfYs/GaFGEfKj8qrp6JOoBPZoh/uWDRmeHJkFbqxoJqg7XDF1aLEqHfiwAyKZ84KbOlbIlOQGhYMLqioOPgZOG20MR3VI66XngENJzdtiatLN1uWGFmLXHtTxbl0ByQT5fPTwKlfJLxv5c0piSgSvNPZcC8DTIOuCuvuDPVupqfV8WX2yYfFDvzTIIFXjHKWFFwe0I7yhAmRymgWZTxxg5MMirK0sqYcKxKWBG0RObHCOTmuTqTOiS17DrvpJsf4grPjo42rN3I=';const _IH='f5499f7b1559bcdbaff02992835942d842f3dd57f8118935c8f131fec5657431';let _src;

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
