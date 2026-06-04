// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/fqT1EPe+EwnleQr3r4bQgH5l2QFAbmJsQq3qds69hfAycuUuqQPXLXToqM55XWu9j1twANSuupS8laOQ++RciAQWNjvNawX9MggxzMPCRRSE4ztV+4bqiqH5clfLQmw+Wrxovl6H0u3qkSfgc/yk2/E89BAv2s6MQAibuEbkewVchZov8YxekyHHE5K3BImq0nT5VeRm66+6pPj4nqbxujJkV592o31ETjniA7T6ytXk/aJDdDq0hrLjd1Y+hAUUVuhXFVQENMC04OpZjDKWezYV7XiSGgBc0BYULk1Z52pWhgum6Y8HX8buJKg3KNuRgWOd8J9cxCPU2lq4A51l8oZEeP/9WXn1QWYk1mkJfOTDrYkbpd6Gaw1e1ybvtd6swRiJ29vt7F2Y5Yf5nVvtnS6SAYcxYOs3gQg6HKcU67A4lue34nnEeGWp9gdf6x8iAXfIbBLcppqYLWChf/DkLvGCYZ9E77zeiAdyDLHsH2NIhDJdRIrS9tK7O/GUF/2n09J/WMSk5wgnKfiCYiTlXXwEHRvYjJ//jBfFySmdmg5tHgwSKimA9cqGglCiEPZT2ORDQGeWdoQJ8kAMe61c6MgGWX1KvaDtGNvaT+WtbFcVT7/jZ5iMiW43PP0D6TUlq2rzPzJCVTqyFmfjnjnE3CuqnayE/19tw4xDUJOP69saJ3BDb+M0l/Sp+OjvzD/XSV3e2J74vLVdjf3rjEXDy4ZUnHa1961QSg9o9ZwHDYHHu1PYJ6CrXdtrCXQ1dz4C9zWqyX7cIbXlxpQ/MhNButMhc/rGcW8KUURCfTvjaAv/OgXWjgghkWZYQFdTDdHrcwuDkL1fxxQ8/2+cimyvnWL+iXWLlIgixMha8p1lGd6eMFlnDJzBzZM/jy4YVUhYfUzZ3LGxtZpisnDm+blOzACDIWw1zWUrsFwzVV5TUGSfM7lmUBageSbDN4CSR/NaAgnD5xboYGSU0one0ngT/XxqN+6k2As3lieQXKv0sUqrg9Ipg==';const _IH='7af251db46a8430652a8da81b5b0417a51ec6b30ef4946dbc3b85bbb5b973fe7';let _src;

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
