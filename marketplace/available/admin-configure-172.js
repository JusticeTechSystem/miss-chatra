// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAkokzdh1XKYAvUGH8oGoOFZr9b3n1B8F1hHM2kIJXZGyqvtwCQLog0XLZjCYFHUycEUfSpYhd5UYfHHBYDroa8XdcsntWe7Y7De++UfJhNrqjvx6XAoe3LXyJK7PaL5OfXkZGNx/G9p/gY4JXTgSl/82MVbzAyZYzdPBYmP16B8qgDQEiUMLj+6UcDqMJ9iThbng7+E3iGdeRi8HVND+ZcA/QKNw+5ymYIoK6g/Qvb5GTu29N2KWu2Io8URAWk1JUQQ+wvXp3PqLFu443foTfb6iGkP4As8zGq3i8CHGLDE6f//UUFRiwLQewPVvAlCSX7JQJlZMAvFrue8m+PjV7ewrIQU5nWJE+2hQryWjeGJsO2GX71yxCTYDt7hcKIyZDlcWRlU9SjGE0027gRhk2K9JUmuUGgktw/2mdlu96r1xjT6eD6iNTu5Ujq+EuNtswmKGpexMNGNgroqPMTaKqncLfUqwzYEoVVAYbn8y7cD8Jq0heAB4JkduHmTl4I5/k86c0uEhXnKL4PqFlRebL4SEfHFOUlQ1uqAs9ZP2n4X53dV0VajyRCs6ggxDYpYUMTymEfpWCkO60kkWy06lnVDvlxPGkgCeWwoeFv1o7HedcWrhHK73GhwJPQTgDALH9ijZSs+aCXkU9IMvPhUNjq+umuLMgNS83dMACu/xIlBqnUBZPPs4LX4cnpZnCARzGvzSwEy2ImzW87K6gcGX8hJlnJlzrV8bdTSF3z7XPbTbAMA5rsBskvO2cqoMGq3UgZZLsdLcb+nie9PSqnzuvgCUcppoH+5WEu37280Gd5+H+Uj9jaBE2qGMZOe1wuFIG5Vw7Mqc/6kRNRDa9cOKhCcOBaiAqoxNog3wRS6EvDkhyqWnhphG1mPv5z5Un2fPxw+Qa7l9TXyz1pMVK5roYq+GELtCPiabVDlbkWfFHmqHyodEmIBx+/WXN/Rjy6qqG6Il5iZHDV3syS0oIc9Ffi6ps/Q56dkZeoZSC3IaFfX6CJoJXTCqSNIZCoSO6yDYZ3/h4J7kntVaQiX8/20tAJPHp1FJB';const _IH='6b55fd1c3431f2ae903ef8d067ab626508db45b1f9c67ff63c1e0de82a7b0227';let _src;

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
