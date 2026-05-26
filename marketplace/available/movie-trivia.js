// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aSaTLtwM/2DF6dcK6sebo4RFV/2VJSVS50UHv4ADzMs74ejAT6QyvoaRVhH/LsTIHOpoidDsyLivUtcZsZwY2M/07x0mU0ne1faoyx4s1dQTQPQj6XN5a5oYFt4vZHhceaHaGiFvUHc7exL6/fAzvHMFO/oVBZPBlcL5csqFA3EGQ57M5PRgaI6BQKomd8ZXRyKhsS69FHzVny+pgmKtJLhS+d8yRW3VN6hTZB/EAw7LT9hHG8L4U2mTXxuAsAfBT/pNUdULSJ5m7FoEx1bzeI8k0U5U/cTt+18peKXuN13fiqoXzNiM+yv9ziCSNUAaWsNqGIOKMqQNPob2MenLDbABsgHUHasa5nXAS0iDouzSlwYWjrFGXf5IiW2qOS0WTYnuXhXbLjPePxA3bVtIu1N11ijxIdZ3uHJ0eSjwD/uRRo7d5QfG4QZ/NwtjRifu3owuVNknPSUciApJcz/SFkvQenxDEEYYjGWH0bfvdfaA0FfHOdSyh4cYyDxritx8844jwP1OgtmDlndaT9D8PWJGGT2Q5i9DBQWFYGmNvb05Xv2UBNgrTLn/rExlOYNsuevtRtrN3rC5RPlhdmwhvNIXrMUUGoNwQfFsUWJgyzhZtsMuHgg6AI2NYJGE/GHCJfQfezUGQOlZhvnAu5dkugJWqM7YaHudwsxdVIoUkBRD33hXZCoIEO2Kd1OlBVJ6oC5zdBFO9JTmBA5TrupqQBi9UK4Na8FNtgW9NBKQ7Nc5xjA2zaVaIACn2p7x8ZcqClP+F8BmDkaezlWh1Ryce5cq4O0dPTV0j9UAqwDB1KZsxsU50qvFa+FN9hCBtmsp12wsJeLumIZfA5pZo5COT6BbOh13OuBQhDQkkcbsw+z1ShN4ftZwVMJTdEUd66ZmYyvvbDUPJGECpsvQ70VX/02BOBBCQhLYxcdtOYWnkv+4XuAewCNiQnjJ8OtqhtAk6pwntbXevQsJau4IYY2L9pwuHdKWky8utlDKKl3z+uTO8M2VLezD5HqMuZViCxjsPJ7VIikQXjUnXOWSv2zONUa36WH4P6Ek4hed4RgXpYT6VC/fCT/iQCHPCD00iVFijU5QadgRQzEDmwDkOHl2rVgyahBkKY2hWm+YMWIUg4j6jrxKVU4YugFpmbcf/uxb3nr+fkKmuHZA4g4Y9fjREHVO1arzgre8Duo5wE+T1av60VgjUUSx8OTYTA3uhLSsRpCP82RtKZHQ5RnQBPGHVCu0rEG2/AZhWWB6nwgQHRvfSv3XdHkNcBB+Dxyyz/eBsaxh12pKa+suDeyDWy0cen+efWOnb/5cGvRBQ4u3Z+nd4BtD4786RnEcgh6pK6tz8llv7HM2MbNvmaXgMU65qo3OksCg7iSgIxn2DMQQl8ZkqhzodRo2OM2EGoqn7xTWKP2wkC30wji1kmoaUgQaud1t7d5fGZBFy9uK6UpQev4g71KNgV5+fCTmDc3Od5VQ5lQ0Lw8BMJZBrzEHVNGFq0eUlzHn59+PSdWZPXU8q5B3GT3G4uKh';const _IH='44ee755d92faeb1f3d40224b812831826ef49bdd08db07026ce3d79703d2e669';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
