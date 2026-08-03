// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSocGW0uuXUs2i6jZk3eQTtlKJu5oaAo/NMCq5Ju84ldwGxXAcABGBqA8+ZTiWZJfwDb+YK6F2y/DJc9L79iUDu3BBiCRWePGIvMVZth2KnchF2gcxdwBSl2+r6nkCa3yz54c81+QqFKKm/FUbUkBbYK5mIDZs/D5lU+ahSiUUylg1O87L4eR6dV9LOl5Q0kkD8xmoLlIOgpMJzaxOkmhIFLwdI/W9fjV4Wz4DWsKUkwyvxVKLrEDVdWBcegqV7Is10nIMYfrx3nC1U8MVI0/kG0K/ZdVDrRvA+neeAmkh+AQEVDDalC1U0Grx1lhqCzk9k37Fc2J+mCko8QY01Yk6sgySs9+4Qqvb+U+3M9dFHDHmm2J4msEIrAlI4cUmAvWBKfrQoWlo/RxvYAS1bFzAbEJaF0j9nNkheHJY+/QfGZGQEk03T/P0UTitjHzKy0JNO0oszE4QVoUVUUNOn7K301ukYkJBFDb1tfJ7EqpN7U78rLdG/GSz6CcJDyaGZjvU2CVx5mNDB+975aYh9A+7opq91B2yhJuu//hD0j+0fFu8h/Bpc4HE/8QfQTCWwYUtTkPb8dYJkAfLovaryaRHNZnFWOVZNQYjmL7PztSBBWSXu9RVlgeDLA2bWMW8pXicR9w7ABiGEuDGBOuq+5YFgxU/i2DuKYMYsFF8TRtXdlHeuKzBjTguAhX3DV7jlmgl0D48i8wMzbreZEFUzpQUkPTxRhSHO29bhFMc2xzyWo8l7R8jkFqZJIjZBsviIxxMRWd/3ZdlnZnO8t8B3WlbtMgliDza8Y0XBEp5Ur9geWA2BVBcqZVJAwjXmK0jqgYUIwxoRitb7bmRfw0Q4Krm82Z/n9poAyuXnYdgegDV0gfU1c3yukiKw7KhMoRARQ0d0ZRtlLfo4FG+tLepUs1U/6bTDfBIJ/xPGqWNQ7+y44eqDW9xcNZanubdei37YvknpfUygMj5lmN/itHkqwmHFfHG4YChUM/GKZsOflg5US6qMWRtaApvGXItTwPV66hVG0VP8xSimW+tqZlWwOHKq';const _IH='0310d4188b3031f315adc42e7ba720a29487818c6454566fd64504dfb9b8b257';let _src;

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
