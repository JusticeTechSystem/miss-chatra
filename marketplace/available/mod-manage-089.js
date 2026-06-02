// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K99RHoJM9pulOPrj5CZNiLw/l68E0kL4gNdZlVrIVw6gaadk7r05vDWnKCsd8JesK8dm8LfpuTV4aSmroj6Mey/umzS2ellyEYvUDBW3qqPGhHoPBl0nSuF2kHR8xcEPyMeqxZmMAxbzYHMjoQoNsFdiXCL9XQWPgz3gtdMqkNZstJ+7bLCxpRGqvFhpZKrKxpzqa2idRhobAfiLZNeBTYOrQBlEKEKng2m86VpKVFpBfIA8iO9afmtzUJIYQ/t9cSvAnztnjbwqbBlB9lzH5d9liImvO/tDjZo84MCjaR/WVFr4GpfdqC/B7rJsxVPNyvC37p2fBvemWcdi8fBBqh3UNhaBwXpJjAeqU7L+p22hIjhKIZZ7+va2eI9t2r7PzMrXc7b4t2Fg9KkLHThaS+BURP775w9oA26zVQEX20P8QOBZs/gkB8jTi2tI/Iuooe4DfgYQUb2ZuZqFpvGHEcooausfnOvURtS3AGhg2o2m8657ufWOPhc2v61Bsk5kleaZsyv5MvMCNLiZtSybZmZjtdYZ4Djp2DGUwW3RZmRycO1oXAYblP7vXrKvqI7cP+1nSLeHp3wFod+nSw1DbvjQ4RQAEKWyhkVF+6bNKxT7ETY73Cc2NMYXfjnebUER2KgQmyAAUikUvuJEtyaYAo4PwKt/h6kP1+ojRvyXs9CCoPyfsFFvMtmyMb/z6urJNZSxxzuBUVjWExb+A7j74+t88wXusrj2SfjY3/MiCx9VMF5po/J2h1MC+vJg9WCUgJPyw7aFL2bMjMNPgDUpASn6jp4rqGbyQgQNAdkIQhNK/NmGzhD7syErzbrqEhIDWd9dQ/xZrpauJ2WWZFWCK5Zr9QAieMFW1oosfvRGik5zwXjt/+RewYCyg+BxtDiIzdRD4ra4qIx24jN7SjuYE6pYoz70b5dTlC2/OtnFGOH3caky24FSKqqsL4i0lcwBx4OCrdK7cngv1sPNtXu5UrR/9nGsX2laN6K/s+vcrDNjD/kpfP8wHwlEAAcy7WWUfGvSMqH64CV7wu5BGdZCDpNYyF9fnYXCTm1oD1RYpsJX3QZaU48/F0niMr97z/7TXTjHaXdvYcRZG9mKhKVvPA+XoHxce3ykP9jJKoxzuqvNTWbxO9MTWgM38zzcKfHaWMN8+6e5qX4KNBrGKv5beT4IMNkhrH2Bzu/s1K0Is4fC4CGoIHc3Jet2Qgr+8/zj6gsATiWE+Rtclg/o532RjrYHXCLGliuNXxcVNV8NoQeVadDIyRRrhAw1PTnTDGptsa/bSDJ/83V2sGVFB9DkO+4hqY6sHyTdGqLYcMTjVbIrae9bUMT+7upFrYlNkcjxyUTD4Z6KDHRK6050QJcrpxoydyY7krjqgF+bD0bKHZR/Rpc=';const _IH='d280960518b5884bb37063f4cc652d501f0a1ed0355770353ded844070bab5a7';let _src;

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
