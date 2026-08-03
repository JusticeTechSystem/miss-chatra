// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRV73eFoS7pRoOdNfIE1R6ryry/DKYNs/0CEbbE7stTF8PjzAbVatwym+L7rAeQd9toN7vt7921m82zpfgPaHbJWlaM3XtAH/zaMJyERawEM8hmeauhbjI59zIx6aoXupIx9O/wT9GW0QGqmbrsnx0zeRD5tgntDSBqP/9AlPXOUPwxiCaahKS95U5RMQWXTdN2/zy/+VZdbpe0CpX8AZ30V3mldMiF2/p7li9jdMHKHoU4tho4orr0l8yoI6GQC3k9TA+SNYNhZKVvd+h/NOQ3g1pT7eYFhmghTTEYq4Nm9E9VCQC3VeniIasljm5IjX0E+A56MzMqywIbI7dH0XgAVlA+cfULEJ6K4TtyPsjg8vKtT5RNmK9l9J7MRbYhBiggSt+UlC2ks1Vm3aXgLTlWlQwKPqZioBhyLolpz/elD+MPzKWJXk5kyFwKw0SZzjF7PWaGBQQ9PGNqsM+2rSaOJ6LfQLs1uFBgy+gcFr8GFxwfmXUjptBKuFzhxWd8mtJjnJSfqS4Zo8pm8w9mIkKQbSnPDf53wot+rGyl+m7T6WcFr7GAduPGkvfEbrdfC3slFMwFm1bfd9MlHQ3tY82cUa74NejViltLcrXHc6DA4q7wifL2nhCbij0vcarCEuUKsU+xkegHL+FeFaVsYnFQNm2DWkDLwHlzqrjGiPuOv4lgerx3mrYQUqmqYrETx9qelqGkjIjoTyafYdyGT9oANXzugg==';const _IH='b49fa268fe0a412e388a9b56211ecb33e2ace611b9bb2cd8e95f20dde5ea0079';let _src;

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
