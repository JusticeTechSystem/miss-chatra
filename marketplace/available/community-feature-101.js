// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2SySu2Rkj2MGZZskhqPwVLpEMkw2KdTxo9rYf9tP8IXO+g1CeYTkjOhVRKciPUakXp5dvd/v/CKAmQbPXIXrhDqktpWeHLLnA6l8c4vhCy2kj7pnTbyEX5wGpXFNDRBF5JjrGgPO7DyB96F1QTiHIxHPJLqf2nT9JiAm9SqB+6hzHpecXSpwPtu4xoHKwA2xYqV+3WQVJs7p6WWJJGTEAqzOA6pvMgfNIj+Ol1/SFSR6OEEpiuSqR7J8zZ4lst+bFAmjzkxgYJHkE6wVYKrM1NORusIQzIP0zrU/4y9OtpGABNAjRcUX/RjPRqQP213f9ETZbe6RH9K+ibLxn1x7k/PuAuC4bSg8xiRjNDVzq5GVhKw4rB7DStZbkBIaQZMsvSjjK/q+WTMbMfyWCjuEOjsjKPstsYHd+Ph1J0IuRVWYAgl3bXKIbfvkayrm105qDdPRygpRlmqjQcprzXyFkmQM2cGR+ZekEOaEvO0bffpwh2WAz+Z9Blv5jtksLHQadIfNbCYlJSVjdlaoWzsH/Ft8tJBUrKortk7nx9SS7wvdy5Zf/waA89gAXHlptn7Up7dQsA1Wg6xAbwio9szBF/zOwkKGgDzW0lse4HBO4/4S8tFxuotfQ7n8RdoLxeJiPzYkIGSQ39O0jgBAaad841ox+Ru7fzJopYKJghoQukgz1hDAap4Cm9a3RyAGVkINcmzk7QymLwSifqc02fDEaIRgzNg==';const _IH='02437573e3db2160c3f3dad56ec8bb462429da5a8be0c5f9d3b31b0c87ea9f36';let _src;

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
