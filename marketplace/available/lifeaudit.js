// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rtJYwDY0PBZkeB3pdM7Uil7r0/EHlffaB6z1T9XNx0o2+YRe7/qpOv15ShX02wPScmyoPLeZSO81NOmoJaM+6a3nmzWP0zGiKK3HbzNSAWeQDIJbj5WrYbzivZLZGBHBkla3LzY7KX3wLFecd0CLvpEjv7dFQygROxLxsUVH9Vj7zGSzdiGa4SOVOEf+EK+GkoU8pLlUqaJSSpBcEBizsLfzf6NDt3EneRd61R0F82NGV3W93IWthQcw6EQf2kj2j9sYXAN2da3gz6NVNRqnDMmM7Ui6CQaa4wWUKLCV0GdcS1rhWRUhVVH4kOtoOek83QbjQWrAYA2jdnXF+eZSa+c5bGjStSI5cfbKZ02l0uVqxLkOAB+cH7VYZ2ow8I42iIukv77ZbcDFu+KvPiFWdHXP1lg7+52VcbL4Oj40Z6qUhGCZGz7j70GS5ae2EgYk8rMwNht3U4getTxVG+b8Nh61JJ3XnEOP3T6PLKpCbEvdJvVhW+0kwzYhF55U0O8KCxB03gcHKBXXaakT834VBMh2+bWBP8py/j6DrPk3Zkq9ezlOPKzRv+/POE449DCmV3jk4IhPLbKJ5eXorVb71s9xTYY9Cree0/on0oJ7FOKRKJK5fsEqwocfq1vWC9L/j6zRrtHW91pmGCi3MQ0yYoct2SUGRXkGMhSSElJlWal1vAaroKwVYtV8eH3WA7/xxz4IqjVDOMW8IfBKXkTo+OyP40a8BM9NKV5qaq6OLbyk74WQtgIGV/ZvuJx7/YCS486Sy2Dnio3mC7wgSKVBc6CkmacRiby5x3ZhFVzZSWlgCxTCoo+wdUW4jvY+Zme3oSOfda3hVOYrZ39MF/9uBUVDKki+PyFSmXnh1sxQPBw8lgyYaner/KjKV0iDTWlHyqydOW7fGK7+Gl6XM8k2M7ZKb9NAbqv8zWIMTjS3A0euL1Pe5G6GDemK4MBRgo4KoI6bjV6RqSO9GKBd7nfKyqcDuLttWbdI+0XOCTscOv7uNEdqbZgeE8nMlJtYBp0M25wQZaANfXg1vTyhJRQRr8BQQqyLUaqby9V3P9HLTuZAGjnLL4RKo1J45plc3Qz5I6V6v7HOxrtd3OSRjYRNmVUx5wC1nQzz/RXF0eVrvcVH7J2OM8QolPJT9caVAUMmMqvCvR3tBwO2+tSKC1CNBxOdC54ltDFxNPtuqWx1U3ZGe5q3RI3zpQGwMsVpIWw7WKD7';const _IH='0cb2936b1cf0cbd219c5d4c2bc781130310ecf2a045c754fb7ea8a6e8b055d9e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
