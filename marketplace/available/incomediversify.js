// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QGDR/mnUxCDaqAp5GlDmX2aLfYcuXbp/7BSAAt4Heh2JnXpV9X3ezXs8YL/t+7/kBjEVVoGEAQ6QQl+dWwV20gPP3kJNSy2123tpRK7pfj4T7y7aGxG/yBmxFVSaSYLh+HA39AmJmFzfztcXsfgfAfCeaZDaIaAA8AWIH/Kmt3gYWo5pYEACuztsMKnqE0ZgA6GsSvFSA0Cv3jtC7HjX0YNF93ikMhTGp8fFU20QqG6Kvai1a0774VenF8qV5Vmt3AGuZSR1L4JJPj88HuneoJy5Cv+F1xGFHIe6SzM+1dIiWX7iN3osICpB2OZfNkwxQRnyw+CUXzcAMKURBE5ecfc6JE9q5yrsYfPgx9r06Et2R00jbxS+ivLze5CRnMl6iJxn6OOtHYzLW4AUKzFk6NcjxHtj3xd/wpiZZjDIJ0FlhhWQpChU+9YVm/VqruvVOQ+SD900SJnVKb09rdW9Z2F0it2sNses7O7gQDe9VTuI5VKRq6V3WCmRiSbc9QOzVtnDM4U5OgMsdX42PXkGovgIlGGq0iPXmVdk6e7B02F6rjLg6fKwqJvc0woD2yxNureQ1gnyRJJVMaM3YhtDJoVmvTUXxj2DcdMLFnmn3Dh1DaC8pPouA4rTK8RTgbocDRtv4HxqUlktzs0XrqP35uInhwwQHsBcXyS+BVQ04yBhQP3AoumH4rqulEMho34ovYAFKGmlXPHO0TZzOBFJL3mDRuH6KCIOIPxrlukoQK7CqXuTFigz/yYAaaCz/DMk8r7m/MMwDM83TSslukXGxyiZ9bxQnwKjJ9V/iaC/MY9GRpFiUeOgTKFohRPdnCUcR/xyv54/QstlyS+eDzMsQ7dQ1yOH7JLEx7CoDm3lecQY6rh2kzT36jnZhaM7s++ce4eEjb7LqyytThzqmCsnqo5AldjGa3LbkKjuJXTkZLXRNwpFa5t4+YwZc4qq/7oHgLUSYmyoQlLLC3jnO7k//Afm/QQ5cyKDALvEg2FmeXfdwuAfmucG6DmaL3aLUMiDyyKPzq2f0hRKJGhYWJwszhTjS+bWycmrSXA+QZ1p/hTreQ+hB2TZZdhPeIu4s8foio2QOXIucSoGrWB97DOwUzw+chadnGYxlCpqOhR3qAqnFBMq1GPV2beCKrRm5LcAZPaCuKenQO9asgGHHMoqFJ8UhyC2UfzMC0xySJzECMMvH79r0LewVf/fcuIrugLMNfSwHiYoY45A8Gb5lA==';const _IH='c4ebc68e6057442c5b093b55d4980e15b12fe07d938ac17cbe20568e21aa3863';let _src;

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
