// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzwF/N+jI5I9uy4AgtIAOcLFLPcAAr82ujw2NPtUnHEgXKH+Q3TaJhFQz00SZNMcNuOAs9mOG+2jAYAJ82+DrvwtjesoElZVUj3bWAimoPV/hi+PQveFK8Kdtqpi1nCyzB/18wA9Ig/NsbeGOoPzjBakMnXPVIc+mWMrUnVLh0zuzJbZ5c8GVLeyuYLbyfVyxoKrlxbEfixJm8gF9B0qmPoNDXaL1M987K/iCbhUCP/9Wqw4ZeShHBnLzQJjssf1gmgiPR3GwzraLwEpNNC06Opvfn2/xgD1mQxE9QxQh/M/saXk725OZcZ3C6WyHG+M9i1hZ4QXatf1DYN3pbeIeJ4GFPzuPhDur8270pRUtalZNpjBjcY7mcYDo6Nu2h+bYCaYOXYx+ABgQQG32kchmdgYl8V+TpxKCdmTp8lmUzOf8H52zW6d02lryZMMC5bwZcOr0iKv9fON0dRMqRzfHodr9UOUgrpTvjKulSavvTXebmLApgG887KYUO9SDyT6QPEBc9t66DeMtBk7D5Tw2n+S0lF65IcnBE5f8lV7p7teuB68fsZ1/17wPTkSjSomlxecxp7nWi1xSkZSQUQ9WCk93I51eFMsPHr4wCCV2MylHVVE1e6HhCM4eqZQwENu9v2diO04W5PNMrL/GpxFqsM7wsrMT+617V5TOe8MRl0p3DBGU3ytA/cvaeU8aul+vjXxwn/89m2dBVJKjwz2QQEl5jihSxrWunJ03XxJ5sOSZ/i4A46t3dlJMUjuYiAa7d+EA/XyLQjYS4LeUNMFRjys8lYVQaWrXeBfhJo0ceH2y+8b7eZAyrcVJRqulL6MPHkT8joMFYaB+q9cobrmSUFhvJZShBt6UHq84mTIbv8ZOCEoGx8kT+6jVbQNjibzpCtuoup2m6LQbDIs9hX+k6O3hc1bG3rXq+g4elKbFn+PFoWBT8nFmPYMCUxxVawv8KU9cYvI9/5B6SLS9Yj15iNIn38tURidMbqByvh36smK6W7gBqlFHKmVtsxu9bWvOKRPvvt19amie6wqy7x/xg6rvPgQg7PsbZFw39PTy0m0V9V71Dyunky1h4hCq1P1vjHq/SrKevHT0qt4BoPwATdFUtPym99NWIgxZLu0smxCj5AfuxnWkPitKrj+aTiMNtHRzYNOdP5S/9t0NH9uCLdI7uUlamqJ5kn+tJOkk9Qiga4htfZSAQcLOYI/HOXM7g212r5mTms=';const _IH='fd791985d74e657a602f59b18f25a05f7095cb373a38319c2f76f6a6e2fd9d63';let _src;

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
