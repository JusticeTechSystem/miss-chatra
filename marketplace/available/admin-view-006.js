// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ4P3+aq/mqq7quu9unLCgDuKSjhWpZxHfQ39oJBKO65A3xYJ1SaL6i4ekdFNzYZ3hTcb7XqNtpofoGv/wdS2ztI8QggTqQoeen7U/H0wtS+auK0xZkExVtSFS6F9z6HkJghT4do81wrAV8LvVPwJYQ7LNQqIRJ4/O/XlHyuBSCTYQtdiIGN6yU/6r3F8QJGaCUZ5fdfT7qEn+3MDXzznMDaDyvwSlFE5tp8JMfkOYv9BjUK59/8L/Byw6qaYtnvG263S0gFhVqBN7GgFdnkzimQktHvxwmYQo5zI5KleUP9MZ0iKkSheCKCfskar4Q57DtaMiw9m+J2BM7DWkO+jFjI6D7SyWl3y1S1hXqD/ZCF6MG5GZMZ78ScjX4wCAWXf0UJj2gG94Wqh1/4aAg40FarpYPTsQv8a9fkrwY65P43QfUCwZNLwyqypQvJij81+5ABQOWA0d1lgMfvtuoyNG6doehXKKYTFhvCaOIsLT/7IwVksYxTr6YK+yfK6jpANK9JNKRmCqKcz0zrE22XCTowaH3Fi29c5L38iJLwPt1sfUF/mgPaF6Qsn3+EC3G0m0gr5WplcWKiD0uX7VLydfsbHPaOtQWrwCZGAX1Ffwmnsfc7FiM+CpxaGs8KQ8oEAcI6PNpCNp8lDljF+Pa39S8c4WAZVtsjPh8B1uqHLG9S+W6gn8dNqwlRZOlBxPfAhlU2Oe/xnAerXSbBbr8sF/l/fs2+vrkgS8hDiUvQh7Maz71gKgo3XNwvKGh/Vd9HaJ6fQHmA3HJS9splORiVFK72Otj3vMHApyG/+JECHLldLS0sTyOBEV5LleTHX43iaspJ+FDZAQlqf1CWPtuuFCgq2izaDVWpFyrXp5qZhtp6cP25DNFHsvsLAyMSjad7+fDNZrbrwg4GedWmh7BgMPEDxdNRisaMcjK6np9k9VaasnF7oxlelzsenhrnruKG2R1sFE9FX2w1TFyLxWKOW9lhJ9eRVl4BwNP';const _IH='4ac6e8d98885772c7de65a07f3233136bb0fc3ebc4a9c2f8d3cd1749b043fd00';let _src;

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
