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
  const _b64='T0JGdjREdMKFLrYfQ7VKjacu5uMFwnNFhDHGSwydhIZa2LJSDWq+LoU0FCjJvqK31u8Q8jV6KWZq4k+FiBBCfiFlbWZmt3Zu2ZYwLxjn3P0gnT4jRKlEhi194vnnuBz30MCtNFsQUfXF+HmP1Q2fb1ZcRarfKMRaceN9FKT4VESczUp4g3OT7yIfvnFs8qPoUPa9NZL26+sCZ63xPWJbusxgyIDHDOclzt30sFeQ8/dwCEjbJn9Kxt7xgH3/QdZ17ZzDWIaIoB3PPO0vpCeHJuaa0A/tUGgaqDRZWti5YmxnyTeryhWvNhX+Uy6jXcpopiifE490vg9y6jYIEBvOjvUJdoRgfBTP50hzutC5ML2hgmE2BPIhEMgTAscQgcWbO3rd6IfkHgqi8s72Btox0m0sLJwx6KdJnpBzzOTZ9gYasnP3D4IlREuxmKzlV+0LGgfXg8gjxBo7D030JB+7/u6x1RFAqphD5/IQEkyoj+NxuqpNrIPdhSpIPYkHePVDX/JgApgbuiNukoWiGx5D+4qrkGWey3KM9nBexJkAlLKR+6LFVjTIhXIMiBFA810ggwY/SjiWJfL0nM2VQ0p8LeHs+qvv03wwIXdP2VkpxdgzOKhzDzI8pcVAa2x540JyySwOAZ/XoBYqhbB4R7tvfAFQwTXqvSrsvum1LBruRjS/nRIzFb7/AV9gVQJ3v43m4bHo16z/tOEqJjfeWbA8ySOL8Pz6n7lcUM2FGA6Yqz/Orc0fE9wzNtlbIkitba7gDUTGmF0DW9iiwQA3Qh5j3g31TFzL2VLE3akTPQlnUHJB//Z7ZqIywGYGe7nUeLKomRaLT5D6t8vXmoO4b9ia21epxq+JxwzN3xR336aYjloGRoR2IImkSk4BP8kCpZpTjQTbiIMdZEUG0ayKBq7ZYa6DBzxtYw9M+GI36bMKyEIZU341iCrRjD5qIzPtG6/5yELEX7E9YSdQhaRhjEnk/T5+amDhQeQZS1lskpANOE1ZkDhOr7woQtfg7ZABy8xUtc8pSlk3Z+PJ4zDOu88xBqNxFnnTOD3CCb8FysOCkzwqZW3LakKN1kOaqc4Uvpm6CNa1G08OYfoOhWrGptVDLYCDk/4v6PD14TNJRcW1WML7xfu9DE+GYMR67gSJq+ATjbICVtRaAwxbQQS9wRGM6mLG2aTyAREhknPHq664cwyIBtbOwpDDnsfmmAGWulsfyStOqm5U5Mg5';const _IH='26b81afc9ac4b485d0e736b985e0630c4684638d98a16aa1af6dec785bf8dae2';let _src;

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
