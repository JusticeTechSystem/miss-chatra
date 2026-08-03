// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTflp4Ebkv8706S7eaMHadeJS4j9CWvaOGLs5Hl34EoyxbT9IO7VyTDTwNMAq6V/c8Bw1y7s07UdeSklRMxGowxdaJ98+foeszg+zgQJkFGLTu72vdpNbRyxlvTmoILFDgO2xs2ywhX06LYbRZvIeYYKRD0h8ENAzVrI0E0XbTzX14ed69BqmIwLVKxuLfkD78PmqNJR9X7EtClA9gLI2QZCbBK2YXUcQqnO2y4Wct6EBTdWZd4seSKEpT6DTd0bhtcG0rWpq536U2Q33wyWtHgg75rAdv1mzzKPdTEARoOh+DYikwRa9f3XHmiq4IUJgwrfOgMJv6ZikN7R5ENJrF+RGP4g5A71S5ByQHC5hrqknovxgMAKZ3a+fxvFd5NgU+JKK7S59oTkiCcPMXzagcbY1BVJM0kYgm38DPQfwO2HByA6hs/H4X0gCvFXsIiXtAM2i8KCkBDmeKz/tD5ENRltfT3IxaVBUbNgsBflc0lpyzdPFgXVzr/NaGIXD4pDjdlJcwMUjSnnvXpclb5tpPBfIx/B+8SlqBkoOgZNgq5x3PAMzxwMrWSCodpLt1/nnattzNnJCApb6thPSZRuFZUCEX7K4sfDiXkRM+obTXSQ61UyIm0Bp85A7GiQ+R9dNwRhAfYd0GURRQ/pRYzMwi2s3xFYEWZYfnSlkj7zSk98YgTRost0GXAQBi/udCi6ZbSb+wAFfMEAmCU9wAytzF7zvoUYHVlXZ44jMZohApkIXdmtnhOa/wbEsWpm/0dmXBl4VXqhU/5pCXJueQMWQfA+lAV0uomFsvhoijZRk1IYcw0o+AlDNf93vU4JJt3zfx30khZ+QUHlkHclkydEyvrnKTIpzdi34z/5vRY7Z1WDR9zjvy7G5Dfv3k7QuQwCdLwPoIi4Li0woUBFQpn6u9JzPi9LxTjG1I++3yAI9w1zmej6Pv7VxxnjSnnTeEqCUPOaxYDm3QU/FQjn9MKq6Hl6qKRY80bRKW9UXucduzfhkoC8PmgqoJZrNCZO/WYT5GZjz05nAz/uJjFacsdqWfP3mMkVnmBdK+aTEE/SAYWzkLydl0z7zU04ue07tlTTzaaSFkhoMpohK8A6cUiJOMDf3KZWTv/oBQxAiniNKW+9LqpcheAu9sBK1OZSKt3UYWm/04trFnfGIEn/5jqdnxbjh/69vcV+j2Dwbs2NkPhyqTDXSLEjVchrIDRx4MMthVsk7RIJYZINoKSk7RKSi/8ztLbtG76rE7LGOQWbaWx4XWKR4vxtrPJyU9ZGGisMDuxrC0GbyHuQdVq/X9UvYaC3OX5qyoTtRj0bEyS5NdjL8DXwOmz83RuK6nqZ7lPYj2CRqhjdtrOzOUNmK2W1y8MUshnbtWUxhCNb/3jIPnjWToGNL3';const _IH='9bb06671120785a8fdb493130873a577b552f8479919f8ddf00052d65954df9f';let _src;

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
