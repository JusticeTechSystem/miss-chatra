// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ZsYKNVWbUHyJ83MAWJRVmo+FpYNqTT57SRcCgsrH1SVzksd1ART95uzJ+ylRvVSd3bJvAjflFn+VZE1DxoHmXBagrV5T/r7gtRSPTTrY+Ki+iCiuF3moLHipW2gUCA0VUHJobGQnBrKGcQQAm+SruJbPMhfM5vDi3ghgl2vmYUEyNCY0ss0eppAG228rOM0e1YDOIQCKAP7l20xRDEsmk9LDag4lcJF4gVc9UFJKbeavnkt/rZXp/Z0JdWkWhMD7i4Xm0ruXLsPHMNl31eaoXn1HT8b3CtUtUY9aMAddMDvDRjBu2maExKcGrcrk9DBLlaGDSm2OyVEoDjsD50nb8HIp/nfX3auO0KeLPYaXwIYn0yKnHJZHgRYyn+WsU7fD8/4ZqiXMK/2LXjAOW61NsVhb6l160foqPFvi4NkaDlVkJchkctNa57bCwx7ZhCvL7oIfwx/VSgQ9myFpO1DtiAOfPmLpjHvuLLJuJgdPbVop214iDUUAWBMKuOMHKEr6gny7Urrnt7q466sTLJpba5rYIbiIXI8V2BTrwIRYWLr30EEZoOKqZHn2syeZn+0XGcYr5iB3Fl1SsPcfsTwisXMh/M8zyOuQHWeKiXczKV0cCkSMBAX8QQCZBGLgl6dPHiRsj4yA4M3Q+mT7HmMJZ/LlobOaFHfiqv9FEDGpnNcJt4DJhd7CpwfLEMT7TFxpfEmLs7I+yqXV7Hbmjr4V4MWZdMBabJf5jPdiH7kSI9My6TZgKYG2V3e+XK30m5QBcMSUMFxBr+2U1KlZsa2z49BmdaeHWe/z4o5lC8c3Khi7xBqtOg+duA8K4wo+vKFG+Q+T5yqvx5K92MCQH8tOMVI7VceKP/ukIIkTYT0ZjsXq4t7WRU2cIyQ0UBG6D3fdmzjHN6iO1pHPvjB3rlL+cH4nruZZ9nUM6Kgq99glPnMSK5bmT2g9A5+671xIqRZHUtaexGZEP57IfdGy4uxi3nwgGJJZA3gkU1acgVxS9sRIUpI8csjV8KNxn89rxIhEiZqOcBS2nDdDG6uSo9cBsQ81xrlzc/O55pkDOssPrv8RYmr45chZa5TKlyZ+l2gm1Y9igDFKUPm3Q0JmZ6zXq0Zvml3sGhJd1U5Ra77WhQXZaqrUx0X1r3ocQM0dfZMX4rbM05ymTCUEw+xQajquzwA93ZFR4xMzqHaRl3NtQGHbr5MvzNQizokwjcub7+Vo7uEVvJ9';const _IH='3252dfb32ad3065d2f0ada2bf0659f5a1fd3c3480eeb7e057f1799f45954dd21';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
