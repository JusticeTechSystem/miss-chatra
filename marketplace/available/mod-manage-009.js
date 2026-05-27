// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zurHkVaf4mykw+i90g6hhOiXPUIuvVoUb6rXRqb4VbqsQ5VGODZveBnpcZT46yv7hCqMMzEY4B1leif9XGlZm+BGpp0EOuXsBJf4/q3SCgbAJc2g20c3RQJX4+h6GOqVa8BG8gl6FX5HeA3KZkPsESD7lci42r+lT9fDyoRp/Wtu2a1NUEqosiHBGoPvqrJFwleelaeuzp1mQ2eQv2fV93rnSQBtSS0A9+6pkzPf3HSKXu78De3SrkW0MKqBNZ/vkQSHgXsiprYdAAbc8DiGgV6HDdM6nyNYn4PRI8By50D1fuJy/GMoFtzn2lgAevPX8shOyz5XN2dnn7JVAdLtywDq20XQipPlk6hIUFgVqshAcj1TAm5cV+0bv81qaQg/ZdMI9jvu0MuFp3skFhRRBhpjKKfsKGS4vaRiwge+OM2mZBs7rdqEW+xPNfUDm7Y+NtlHDgRXwPTtT2MzrWAqxIZ6FH06qCvB/yryfk3tmK22JPt+fyvOlBE3sMTD5ywj54+CKHw92glC7UOEt98weSrHnk9pbGUrAV0quhsDDA/ZIC5YDn1YmCsD0kq81gi8UrzhVkoVU78WoS7wsUAvAfSWxHZLBeT6VH/+0vl9s/UeMxEiKU6RRhFQndc80euXeYBUq8xp1Nqe5ftfUi0nb3uKFd2TpwXiKNsJVG5YdYRZjxhgRwgQLN2q39glBqJRWshHVIq88El9WqBOnYJpdpmRijUU40n62/dLtxWN22jHRDCEMpn5oGTnc4U0tZ1qSO6w5rWnMDQXpJzfpa6bsDvWZN2nkw09ReCWTcHupsCMwWayOKPxTdaUY/+sFe7NKmehtbRzdKlUfdCnKUvBaN+RkfT/9A9HaM0Nb/qKs0WUwY9Cpfaw24y3b+e5hqXx7uqR/In7qGB2lxArNad3cDPO69RkqnKjx51HzGUblNHvF7VdKL35tH+ucP9+gwe80u1OFJyYwlUi4nsOXE3OBexNFeXXxYbDCUGhTHZMam+3ZEHyfjUJIjnraSgcS5i8TSbkk50f6Q0dF3f1aVnLJIbhIGC2DhCWBXCD2YCMypCmCaflJZrbwqgpUhshoZ2zJX0yJSZ23BDfzb0RT0VhmIYGsWcTJ9HU6noZ6p0YEyANU5qitqT9DE37AOEMrscbI7ivB3oUiYwsJ8QJxK0Lt9Dwko6+Pv2LgituR1w+MNc8Ox7pAF4jUP+HmzNkpe8UrIzCkxquUQuR/0Gd7V3B6e0ydpwwpDnenCBGaLvL19AQhpaN5kEy83q1Z+NFSIkZZtZ2vVo41At4kLqrZs2z4eIluUaoWb9+3z99s+v6Rb8nbvMC3vTQVP7N5lyjMUXy8Gh0BdltyhqflFEPjGzgxOYYNr0ydbnBPhCpzR5Y';const _IH='c7fc83b930f6e6ddcfec4d47b1342be4e97483c0d0ec5a133ec1ad60186c7883';let _src;

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
