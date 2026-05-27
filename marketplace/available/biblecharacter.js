// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yVdwmSRvYuuHklj8BJQDXFMMweIcpLQyMx1d0es1v85QDhbu8NpwrHSgDAqAfCBfGtf7uLgYH4qJsU0+ZgDCJj8qqBbUcqASuxaeBO/n7JLfg9igScDWc5Uhb7+3baeMAczFavko9D/4zDr/W6SNUlffbH+vDiH9Tt/FcjpU4vMNcND55WXCVpqFdh0Lr9moyIPVauqEXx0TjpqyTF2w1vm6FuptL7WAHHwAKJVhUvhqayWL7lEZG/zhRRxmq4n7rZ9c8LQpMTDndqVZyS3ehSnXt22CXFFvyFrMjq/QQhBMvF8oWSL8ttBfKtpSCUaPjhDWr1200VpJgxII85mg9WSVjaCRja7zvq8OZIzARVoJiat+oYfC7Ff7utFG5yc4APEa20Myns0NV2t7lDx1f/wZqCLpg4PXoiIwsQounSeX0qQxIcz2/ubd0QcLeaug5qMx9TkItnY7IPbAy9d8cLhA1aNgHnQPge1M/054+tsnOlzUh5CB9mKcy8T/NyBWKqbEkHDdqZ7xDdQVgAk8HAP6Gn770UWfdIDzFiL3RsS6ynqdZB2tE+AW/BYXyW0TRrzrmCObFuSi/SOQFsb+vlRg6+BnDLJkrM+CuosSjtrMphXq97uG62vQYHBxnoq1uRvEuNSWjrmgrpwbt6Ob4EeNgVEwhTGnx0j+utX+FJ1vDZul/M4fnVd7y1fWNu+ldx+cbUY/3wBuTSCJvdleHmBGmixoqNn+qY6UYWBkbUq0f1Ja5iaOIa9c6n5CQbejOpQDekXs7Yev33Q4MbzAhkwyNKnu5WDR7Th/V7zT3yBgYAlmyKN9F1PGY406vwBodwwa2PDCLMGSZ6R828knzgUW9kFAQ9HtnXkYZAmxHwhtuu3isx68ptRxESdPZivhfpIivrvqTtvPmXEha8udxxq093tvxmUuyWVythOj3Uuz+fgemCwhxyAogCiJI/4+Xh5HEurd4LDQWAdHGnQIydNNXhSxlhnhpSIB6X1/MpYqNTssr05NHHkWyAnEzvZg+7rvhhNr09EOw5b2vNU3u06SEo5RO7exXajviQffsm75P/IAOwVMchk5+tbufeiUUGm9LLk5Oj7DeK8Dd6XShC8F8xspqzLQT8FrDAS6TvXw8kbIZHVVfbJ0YgMrbw3f2vpFlUDmu/XBg4AKCXiTnu0Mw23/JTCz+oBZ2lDOFbtiYPK4vz9AaXQ3NE17rPQfBg/xAapjSJsnMjfXEA==';const _IH='c63acce554ab81b0c97fd27bade024641f8a3f6c44f51ceb22e498c62b6a485c';let _src;

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
