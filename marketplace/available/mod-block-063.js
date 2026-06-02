// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2nq/l9CDRwJPE/njyn7HboOAxHe46cOlMFKokMLCeJah+mgNeerfB9esMYRj4H8uXIwi/Mjnan7TpyPYFvjWMiS836Yb2uOhQ8HKU6sPthmrHo8TQiuoz3etfPTm0TUu5XPrsMEc9qfEsLARWYMiXvvp+Y1Y4QKaQ3uiDsWEBFr48KVAOWjZ5H8Nd+CxoXmp2WFJRx06+AtaPgyZKXJzl2fm6IMP36KrFPa3aiSJ+hfu7IH8bBMoFG1h3aDlQWAIdrecFjQt4hKqsSyrqPcg4ubk0vCbS4JF8HyVDTOxUCPLj3VKwVWmVyj5P9IWMDn7X5sMHIp7V5aWZ0E2NYqCRYvYGBKEgGrZ1wpOm7o1+hYxb2nVSn2cReBFjvDYpqsRGeyYj3cqDvepodI59HXQ9haYoF5v/eXyCAllpHvMppvyiB/G4DGXASS6YOurBGkRcHVG7593yPojGHbMSBRH+ZXj9qb0tcRUuo/VQZLdqMb0/WbXu/gR2sd5aKSSvZX6joZCKHYkzFDzqB/2eDl1XXhR35roi3+rNAAgdLRr43zaBhe3cKpR0yXUVutQQUFbrIeXCe7XCSLdDE9OtnS7SKiEgSc1oEHWkfBBXskBE0aVDTW/2p+clJjYEw1W7YQeY4Sq3xA1438Z/ohfBIHLgq7Y1kib0zoXoR6pLk+h+zhg8Rlq8MkQ7Wd5jyvSnq8jieIT/hcEgo7q6rGO6GQjHB3/Kv0CKfWHlqP2S6vpeqetgvhFhBf0xZFjaww4GYcx4dZTZgrhiGps7O5lEtx7FRX5jHj/vgj6MhZhx7/s9WTn7rA/kIKDeBNi1CK7VbbFnRAI8GjKMj5yuou2XI/pFsNlVN4fiGmcA0QacA5pyRC0v4cC1IycEeMwVUdOGobMzxN7o/iRuBfPmB4nU2XAnZraUzEFgYDS4suhVMRktwIumyZofpo2GxR8YNYwOy9PaFWKGU9nXK/nP/5lLluwlFlo9U4lbdw2pgFzHwYURuYOJO76ldp3PGiFMT0+OTSDix1UIyCsbApnnXrXoJUUFP6DxYCKcqUuIilslyWPxhKb+Ox7R9FkCudgXjwdN0hIUMl9gcRllxHfJ/CSdMRU+438RuG6L45Z9c6Lr9KJGWSkNHkDzsdylnj+S/EiDZfkKlllxv5Rj4mBbgodOMxPgVkIS/NULe9daAJ11Xy9c7MaEXFH5WL2CKeBXTivv4aXLhE5vCH/MI7jMLyLDIveV+tA5Rg+gHE+ntNhbtZArcF2BRZ0HVGQ5z7w0dgkf40ejP1swrFh1hw9wrrrqluQUOs1gErFxSlbPrQmE8ipV9v/FJEbJO1KQG2887eATz7Eaodg3RjqDkgs8EBPB41n4GiuvvZ+4m6PEw==';const _IH='b20960d6077891bf64667a2b49d8e758f9348e70424ef422d2dcfc0fadb09753';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
