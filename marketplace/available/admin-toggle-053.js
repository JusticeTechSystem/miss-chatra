// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSHg3bRlgyN254lzi6sUQ85k+lpBFH93ZFaMTl3so02JG4oN/V7OUE8CD9srlRJWGD4n6FbtIiB/qXGBM9hNqJDo+0S8kslM6aWZE0xmd9+/MYLL246Ee3xn0dvpmaULWS5Rnuu/hVynO3dBwQPcFciKUjRL2hDw+qJu2Ub1v9pnqrtbWfZXJNDjRKPHZKVsOYjMx022J8ignIHDRRRTP5NbL0wKTOICT78ocpGYlNFvnrmT+9O8s66JNbL3Fx1TA25zAn/lQvzMEWHpeTZTPRk2E3smVb8qQOR10K+L7QQzob08NoYuPOa58M1e2ZPrGf3Z+pO608paYbFKzQ+JD/I42XsOcg+3C3WGtWCABezbyeWJ8CrxOHjB8uS9+5mn/Obr8AurfADSwdVwBuv73MCLZ/OV5co9RzoB+hocq9p3fHbIAnsAZ8priksmVDzvnSAASS9B4JM/n7FsqZvvafpT++VMPqNysj4Mx4Z1Kpa5DnKcw0oUid4MpOh50IeInXyvhr559wtrPPVTXVySxti1Yq3W7lPkR+6gxexRmn3WnW4XRJ/f77TcrhpwGOX33HTWUPCiYKnLHy2yLwBm+QQmUkYillUbRxIUKqJXe8qulDe5WoYsZ9nAqCQKqxrtoJ1KOdfBXV11fXBGaCOmLTA2LsTaoxLdIAbJ36ijPqj24ZpB9PQyG8BoJ7DTkav2TLXs98CXcU1+c4XKZv0aG2wVVyOSvUehXRCfRxGRePzIhr98AufoIYpjZi8/I4ZqStzinNr98dlnVu9zU4FerfwW/qy371527f7k62HYxFEgyH33QdpqhXwLu7Qh6EFvRpisn/r3pWbQdxZIs0o1cqmjpZ/fTZeta/aJ8+6ZdiEmOWZA0SzIWVOLbT/RwAGnStQk7kAtuy7W9ynxNnFCzJXcNnlYM+ez7u7PGojrveaUxZF6ZbglXBxiS7wItV+K6rIPkPUt4PZNxWYqNK1Ea5UMREh02tNsnAXMjoIiKWc9DSruiBQOxuTwNMJAU=';const _IH='c682574640329121908367dc09a4454a163c527ab882f1b3d92373051391083d';let _src;

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
