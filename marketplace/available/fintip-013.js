// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2ueTJu5Jw1YykKnBdfbMlRxj3l0vV8p9rWaY5K0/KvkyWJsJ2QJbCCWUGLSOC6Hlq+kJDVAoqOEfVgrYELdDRcg5+Fj/zm8PWPxD8m0CqU+yD6j371jryG57DUYAyxFZ6fvNeKxqITjml0ZUMLhKeUnqaDTKAkpKyN8r3y+VZKAj4TqIIXIKRJGTZycwSQ37/GyKBi84xSTRu/IwZfa9lUHa9uGnR65LsohMbQ6ZxQEr960KaUuuoujtyKnBdD4thGP+/DA/oUQfyRfp/BGZGG6yoGOVQODf3N93b3VddAOTUbY6DwQqz/qqF3hpSuys+blr7wIyM7snC6N6NZeMkw0USOC6GkL/UEgAc7Aoib1EZOtUqzzvmLmsrHR6QbAoT/o8QfUnxNHY+ANL9iATOceQrpcB0vBjkmnH0lmnE9EGnR5x0XlD5TeobgmnmIAlDx7hdr0pBmm+2GQ0lxsrztDXwwWTAGIsnLxkK1EUIFUWajuWxEK3UUPXpyq4kNJK8vN2tPYR6/TDDYHsHKD+YR8wimXCq8RHoDneDKiM1r0iiJxq5Zsn3eTOVewf9r6ymd9oItbj+i7zSxy+JgqZ4i5Qcw/dv9kx/qT2kERdIz6OaXb1efAeSGKBFqwljLVenfqOXEg5joBcrcv7qoSha9utpCIaE+R8fOrmiGgjO5tnZWQLmL2LQloSXqY0BxYZBnpCdSuw5CkuHqNuf0wvXbCox8YQ5HNXuL4M9HQyxsucAE9y0BhRKugzdR9Fg0Nq8VEgXDETp3+CrMen4uV5OE20rxvmdRjHSmEgx23CK5iohtPzEjKOl+9YAJN0mJ6+64falSGk7FoGPIviY2RaRDKjS1/Y02u0oEu2HM5U0+ebYmr9I7LU05uKi2Wf2Bt76xaF46RK1HaB83U98PBuHSJFVv9rkOziYUmSi0+2UxlArYPfrCP46k7rpWCm7rti/i/oKDnp88OUciy7vMa+KKL+m5HvhWfpKkmVpWxFu9qUGtBKMRcNIYyPO7gH9S1Szy2nIEnegKauAREHT0t0yMbSRYlphImv5NOZD9l3qQ0Ci';const _IH='290a0d79c0cc19c5d8c42c8e523232756911e217ba9b6b0c7ea6254f2f45de4a';let _src;

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
