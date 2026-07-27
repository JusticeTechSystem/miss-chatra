// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSys7k4NfWptgQAWrk6igzb8P6E8JiOguEdOwp0OmqwsfklLWBB4CULMaKSda/ftehXgnxE1W/oUqwwwvvaVMBxSuhJf0DP8kSHI6bpp4PMKh3mf1V8wTJ8ALrIneGYDQ45qFow4vRdGiP+rmIvPmMACoqDDv+YBJ4uJXrOEcloMd3qZyXw0AhOANizqpwrMynnFmuNvVA7HfSLNceYNzNzaDNTid633l0hR5PlrOqR2gFb3zEVvpWcRsGVutlYH4NfteTqFV/c1bkNp1em9lPGx0aKWOrAZT6kca6/dwxFfnvWJGwjiE0JsGLg8vhxuOtzKH2v56AXD58Ix15O1XuMGebBPSJi0ySRP5t4hQSEsH3qbJipuWfu3yitKsvAcAkUp+n3mYj60XdWuj3aVi5GVj3WaxTSiWp+gip7fJwvvm4oxisRrWFJ7GMpoFUdKpdRdkHsDTC6f8H68RdNwDSIvxV5NruyrVZerfeWWnxnyEKMq4kJQhF6MbP9ED3XJpD0rQ6nKYNGFdRCBdRLQ7F2bpQ2gltg1sJe6ZPzWkNG+WrG/jAzwU2+XaiyDCMDCy3hjCnjpTEYIsRG35eFsRGH6HnxCdPqI7NfjZAoTficYggL3hTs3DUeolBljAnCxR+DyDIhB8Cjat37wiKeKMNXcnGVelbCho1RlzVMkQgGYp6OgXGuVS5qHioER8WEMe+4jdA/PCKVq4olRRX7FsTBR8sQ0FlHKaGz0MgvMzfGgPvRM9etPfhC6Dpf/1bks/O9j1jOd5Ym9a1UkIzZlnXwyuBC4SwAx7cF56xzq7OyBnOe8Y9Y+hIsI7WFvYzLNHotwCRIuHSdwYMmZ8WOYkMMFDKqqXY18dmYE4RUHNec8XHo7jDHs19nDPeHKcw1qTzODbY2nWRssUJojFLWlSYRN1uiVd1AYIShIhvH2xe8CEw/Zc0pezHvtYrFTO1tb6NcMVRvP8LfifoH1AXJZtSU7/lOoGe1IzDYegRQrTPsdLIt46i/OfdQ1Ox2lsgvib9JCqi6Ai2yLA==';const _IH='35972a887ef9c6c14f1c73f210993e4a4be13d75fbadb4810af7a26f392a24ce';let _src;

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
