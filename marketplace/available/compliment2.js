// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTem5OSSeczz9BNJ10Pyxw5RP9vFLhiHlUA6k7Nt4fFdjS9kXtO0Dqcz9wGhq8EcIdgP9kN6S+IbZxkhSp48eh/Kd/WwbITg/2+8Q2kzz6MLhoTf6QlHwrVryjQVl1fmVN+NO9p8i0kcJdSwK8+2WHMiQMPu+QQ7fb3OdzlrSU1p0SAm/Tp8pqH3vdn3YkoIsMjMRURRYGz51zmCO1Ev1/CWSN5C7+HBTHSm3ZIdWn6PhAd+yHStHStG6KH4st4t2cw9MPfP1immTLM0FaENVSfnr2MMYAMhMDUrxqjywa2An2HKU60R9pGTEaT+7Z4MKDK9pjfu5632OKvbPki/tf3DzuWk6//uG7FeAjbfjAif2qPzLXHgV1p97nZHul7Mty6ldOjQKWhAVz60JRgAkKEKBoiojrFyQ6pwQLIO6d4J8Qs4ZlQZVxSJ8yHTnK5bAsnd7MIwxeo3sjRGoMFBlIgssAgET/nIMSzv5ezQd5eS5GKFS0uxU5GZgVm+aJN47TKWBiF1OK+Rb5af3xvdp1cQ+MBdqA5j3rKp8k0w7/sMn/MUrDg3BoUpKb7OLDb155gDf5kr1KZOAelReP8OJZM0tey8T4yOgYadIE9TS5JVWwdM9Xzj8EsOh5CRpclEpZ8qNDoGcdsxoXWkwiT6K/oJtNKc+DR19WhLZ3lexiuGwGCRkZ4Z5gIL2MIi7gLG7YbKfg4PtRybYKmjJ5NuDl6R9R1MP5iyEXrv05fnTMz0DytDBDqkKuhC7/kAKg0Yi0JhVnUQIE6Ryo5uLxw9gIvkPSFdJTTqwyZIlp6bVCqeN5Lb9vE/OyI7U/plxPhGnyw13LAwEQIWuy7P4a1W1/zGCzaKF62HdRnAvh6LblwVBroEMkZRsliXZQlKE8gE1fq0O7CBgqTrC/BP0mYR9RrDyoMk5uXjwndiA/jk/cBb7oLdfHqyJHEkWRVYkOSXzxM3/FquIzbjvbnaGe4SajV5GECkyC6HshMOdHIKskqvQGdAsK4LvCl2lcypeoDxxJIRZYyEaq5F9aWzDTZhWJ7iVPr3QdpHpjQXYXpfwJUI7ZF5sLT6/VyezrMtVQYZOiqcXcc9Q7Iri5OvRsEekfTpGJ7lQlAoNrIgKrkbIB4IYgp4cQ91LSqLoyFM09ZXcn3zE/PpEJnqJDz0ZihZp0lFoZ3o6oSpPdDkIKEAeZitTqhbKwo9G6lmITqr7EqR/70Oyvg/qpR2c0ZRtiiJ1uTLD/Iwo=';const _IH='fed19dc37359012c78722410ade6aed5e71b1af0b8b30c0ad425a12f0135f5e5';let _src;

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
