// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnUV7hzjSN9b0vKvnshO9KCDSr2gZB24IPxUVdo4QhJZ5ut18mqIexilEG0kTMPn9aJ/p5rcc2zeHJPSguUD2u1Mp0LJ8f9a9WIeJhDzaRioEi5ynHyUMjts4Qx/XwAMVvFubsWO5UMUGBoxlGJw9pf6KdycXqje3ShnGc8rnfKw+gSJXU5FQbSXKp6IiK/A8LDsENCiUZZqKJO85tbr/dfjIAqPgxSAAmP16190ks3i7JF2nQ5lqfXuuLZNK0W/W69JWlu4CrKwDzDEYLoowiv/jgIHuym/WzpYW33Jf2IaQXTDZFZN44Qa9JaZasS5fuR9C4hW86I6cLR3ecZDksGMjBwcDKpk04J8QzL7bO+hqYZehHZ83nzFEy0k3TRx2bfo1MZbY7JFInNEW4GK4HZTUMiD+R+42i+H06cG+jzRae+bX/F0NNTONaBOe2zTMUHlVXTD9xzZbQvkHc6ThT9l2t1seZ2baOowODm/KqRchdTrVo9p3N0kOLFM1JNoFvpW7i6VK+jsw+fRutw5hyIPQ37vstGlFwaFzaaVuUPoiK1Jb0vZbw0d7A/RniBWtKZtGpy8SZZesDiDolXEFyajy63PAXXX/mWw5oObOl9Kq3tGbCxxkMBTB8E6Ye6PzcPIl5Ic7qcWlXs7+kILtywjOHShnyeCMhxKiNgkELsur0SwcMiDuXXnNQ8UsnCKlnuxDiM+CekITOw863JeSmGJtE+eDlluhIcuZ+7czp2r/syuqAvVpuioATX60vMUso2xTJV5fkW0nEIG0l/8PR4LzL8IE7f5BxkZHQYE+YU6/3jNDG1ScKWL36+Rb3tPh4r+xCfq/7Bc73Bv1ydBWHuj0m/ti9D5ApNAygToHW8+0D5I1TEGkjg0gme4mGq0DTEx4EMERWll8mI0Ly6bwU70wl78Ox/yEd0GBw6VZgr8OEbhb0CoD8yQQ9FUlrn+9A4V/bHENplJNygSa34Dq1nOmSMjHHmNb0yAzmCTxmIbJthiUccaBpotPS4jSTejwB3mKbUnxK4G018vQWb677INBWkK8NfsiCkJ34cIERbjBJ6jE1q4AkcwlnejZTP4/P+HyxZDGEauURAS40qolQI0WRDziIIgrd5Zv0+QcWF6azIya6zNLfhou+k+fQNXpi9lT5UTU/pYcSKBJTKeDG8PEk/WKzX9/VMDHoizm3F4iXPtnO8kV6m+6l04aKpKUNmrF0svEmdoSHAuHhoqwWYv4mI+7Y1Ayex6RxiHu/ddmS5H793HF0aGW4j82PzihOb8P5VTjcTcIDmIZE5GP2NKLLZUkvB3nvof0IdVieaIk4Uxhw4tL3FlnBevI5VvQVfBAHOuMyUpAzmSzKnxzrrEwg0oabKkNgcBCJ6fpYhuw03c+4p2skkNlBihh0y42FpWquqV5z5FnqcX/zt/zl/AaH0o1RppLJWRqF2qxRYecRUY6vy8heRibW5Qu7ofXweJv0KHlzULDp4P+LO8LPhZ10pTh65kIWxDH2jS9b3PHySOW3WpEAcGUDnK3mVJURZeh7G60F0d7Bf2LlqMAaOkhM9z1z';const _IH='8b240087b2cc73ce8d6872f99c4e96684545067766434533e6eb552d1fec72d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
