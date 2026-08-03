// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQcCmet8fii17eTHlw/t9gHKsIydTuWCWp1gDyaSj9EnqGR4CHZGKANxUqkkIhs5u1JD9JT/7Q20bhHr7r0V11zvjLWKOOeDjuzgUFmjokAVYNM9bURDt50njGDgBt96by9msZBCJcTD1wF0FcbjHjpEiS6sSJ68WDVhkf4LleXYNoWNSHyGJfZsHsnovg0JwoLHXn15G6s88e95+yjr3bXjNCs8IhfjJ5U8kR+ZOc3SxbQzp//ToM2AZ1+qV10EuZXyDxhh8AAHDfDCNyS/s2d+u8EOFqIUjycFK7e+Zw9pkEpBDRNgSG+TavErndS1n7MQOQR1frE6YezkEcXpR2ZTRGimOB7rDpOale0qU5erY0s+mq+WoiFrVxsyKonQrwgLj4ktZk+pmt3qAahwuBFE6pw5iH2YG6gF//w7hMgoNeoxxT0d3ccz2WgKitKNdJJNTuwDjnQKN8G8MsDNXsFBuz4KJd/ymnCh0p7GdaQpQiyaSAhN9kTYODKUegBGz3o42F3o0twEospBZ2TnCoRPAKUOfbTTXUuR7Zbt7lLdLcplAKv5koxG7cYP3ATX/jV1XeyGK9lzFxmjzZoBImf54xHHHDVrIe2na2sQa+DbrJIBw9PDx9XB98/L/Lc9wKpci0HSr4owxU+eggXRc97iJNrw8xg1ZTXXAs6MX5j6MoTA6jygEQjxfnPG6YA01xAJkj3QK+eFcBQAajOblWG';const _IH='8c36f2f7c39fcc6b5656842a47315413f1db87e25fb59f24703d1ae43a430f95';let _src;

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
