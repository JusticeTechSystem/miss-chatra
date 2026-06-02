// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f5Hiop/dtSuGKKOGF3FYrOLgsKEbb91zI5mpv9BJ2uSW36lqDBwN03WDjqpKmI1pQFxJuDUsVtOgFd6s6HqwQY367LNTgPAt0rF53oj91R5oMDxlDgyc4/WRXqNoWktVFwN9l9+uTzq9LtNmZvY2Jvj4ZbJ+Z4Evd74YUU4C7QOBr031u5hWj/N34bgGXrVwqxBhAquno94adRK3hGinqhOSw4pbJW28Kc5D+RIEZKriLVTu6unC4+l8+Cn6U7amhvtET3biVgVolHFuxytfkWVeLkKCfYGdAMOABeAfrkbLXJg9lwlN4pvWk+V1gMuxI+2D98bU8s8/3ylYuRUR8lnn2tFfMupc5rJIDedcAn99A9mGUVhsi4NwYdhT6b0iIThQhFoQMwrQGuzwDFWKsRkL/ZeCbdbNmzmIMoxjDNKR3KOg2OexHIThoBPyFTGNqssWXqJIJVqKAW1CC5Gv/NW6bUGnW2MTzOktPKeeMpoTxIYAuK5EC3NxGEZ8OSSzHkpijU0eUh6DFZh6QBvgWdEAKM9E6bgoACha3wuJteci7GZWb8RBKTluuAb7QfbFHuInbCAnHRrdf+AfdjXj90xC3WerixwJwzJDnXW1QJ0ek9efpPb0v5gm4nZKTXzyHXle3gI0IZ5cdpf5bWZtLRnuYCP4DNeopiyXb9BH5YJROpXJUsqaUpjEC3O6EQDT3/M3IZVHuw2cPizk3bKmpTxVM6KbHMYNUjQHB2+k72eYc8RCCpliwvbZllvfICPpMPKBEc7v3hp6Xp9XZXydcGxp7uX0NPlzf1K2j0VcIVVk6NYH24RRB/nMvySFsI8W0ldsN1FxFlR36BbQkl9P+rAnjvyqF1f1NvlgV3PjITqltCxR5X9GZV5rs9GLia/2g8AUlx+fSAl3/6Ah6QSCaxdfCPLrXU441L8VjLzgh+iAr4I+dU95hLXpf6bUwJ70kTbXpCW/CEnMVKUycS9uVwfNNnX/EmoAcZusYItA2fKgjsfrRlTBUuHboG4pJZy1Xz0XDFHg4kyebIx69jZdVIOFrUev1QJp4vkJ8fEduTjOQtMVP5mZ3WAT8iz9+OWTQQBW7OmeVZ0YRRZLp5YCpdCmGU8LVVwCVBtDB5Jh38G4h2UAMewHjKlEkujxOu/ekgb5DcLPJJ9tl/9GBxoEVt8WjVHziFcsO3dGrMa/YTZrMUpgng//VW0wLDTjTZLz8eVorGpIUY0fzmP1O0FD93lqUrs3cy8etnwkt5+zjsdbilDvHDznsOqae8sghQk5Z4z81jmCEZkvgIUv7KE6J6QdP16Mdwgpe5O+yOGcDkcAIk/XfmeU8DZaB4V0JMkj6V+1HR6CPCN8tu9A5GZXbI32bU0NLV1BUDZwrqXpo9ljkfhnrJH29ZvTZ2V8wH0zo9I3bV3jSHfm8pa80StqMROKohUHOWM4uyrA+ELfyhIkS/oDAtRcCFlyrxupIdBfx7xo2urW8KK/i8gqz0UcYu2GkSnCoTY67HIZS3x0659609D95UpMsB2hwGbTPZTd9NhDkJusLzX9aPiE6weT8uxSq+fngQ==';const _IH='4010d9f9374e89c16c855c7e9ae5328cc101a41d0099822952ac67f18fcf2964';let _src;

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
