// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSarljqBqAx2gG51+PqqpyjqI0W+08pCGPLzjWu1INhw9ysfD2Za3g79nukbDXJN0yZq4MfxTG+WAKEcKJ/Uf9hdlgP8PQP4oKZRPhq8K1V/3tOkWv5qqUq5yrSAPOsVna0nISZJdwTzmTY7nGULn7Vtz//NjRsus3eF61Z/zZm+9G8fE6Q4kanu6xnjg/XEF8IbZqm1r6TdWn6hV5fM3dqpJ82zTnDmUX5t7Za7QeFRvZMD3Nh8KC+FqyQw/Szcir8uLEgOixUJG8eI9wQrvTWjfTx+FnshUUB2LNp9BwE04dZYoyj/iqNOBUwdt97r/pcZ3N44cCJKBuPD56MAlIabB1V8KCLslbPDrgcyBn9Wze1Y3KfOuTSpLa1TRSEHEXoEwtrYBj8HasblBn2kEAqOq96mD/a+kKrX4sLf+yX6HHB1AxtT+xSI54eef7fuvwJ/bBQEJ1GYQby4pQXOXvOyPhNpGDWyS0466SZ2hIEDmEROtNJDcoj0Bjk225XHyjh0fxUDxt8UkobC2fxizieNEklLZXdsTfN4Yo7IMx13w9uTZhx1+Xq7ofosc/IXhEiXdxZGA6PrgY05JYTLWrudSKSopNgKFy/CexWP18C/JD3ZJWtqVY4R71hwn8wDpEU/xGHAk42RPyngWyW84yG2iGdHiND1UxrmqYY9yol1XbZp43/Suly+u8tyk+9+HjneJHHJiEV5th7798XXqoU8nfEack41y4FF2qS9RrvitApPckfa/xgDiaiUOgLmJbV0Zl8Z31eo+WVlLr58TOF9ih5eVRivXjC832+7WTA1JJOeMwU18vhIc9F6Tjq7iRF0IBSw5ptCruEFgssXz3SyS4MiMZz7wMLQihAqsOKAqWBTwHyLoHo7yvEY68vZyqBkvdyvhXKXjmfGkdVnwcWZLsC+Nr6V+iXwRDHVN8L0gU2A/tk9tvIv2Huzoo5BYqnpor9fA+l4z9sND97p3A9DPKUFHd5E6P6FhBOXGU/jo3A8CgNxTHT2GE=';const _IH='88ab819ca4054b70978c9f81cbe38120da02e7249c4bd1181f4d602635e281bb';let _src;

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
