// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRH38xvsAKFk2ToGc8+UbztahvSrzy3uBbjOOK599CqRrvygD7klt6bdmY9XgVTqOmPgerXbGmFjoeJgmCOTzQKWb8pmPGkluPs8ENysE0MelVWa1cRzdGQGO4hM1RKHRv4wPJs5zDG+8RTFFzdh+aeaNgFV7p1JARKwEjqQxTC0FwQBlEXMtalA5yfQ7aYASpF8hN14ZoI7FluBZHCsU0qi+kw7h6jUTts58fo0RFTHgfbusxrjBXOnaBT1f+os89jasDkDQy2YgwGxMuegQDha1rCTiXgfcT1ryHtKWsPPuKVTY2aLLvfC972SPI5k1jfgResMCE1kVkfLfXV4ItJIt1mOb8ecJEMEhqF/jhEIWbWmKXhRtF96XgthAqXgGuW/8nG2dJmOOyfBKkMkE6UMkp0yCKfpn02o4NZcsvaSFCpbTiAz1+5qzFYKXb2LlHEEjjpqmNLohdkQfnetrnzvPxX2I8j08kk5W417rsdIg5NCeEb9OWBqDGYy7lEJ1QwSO8kgUqfsYyTL6vUATpSL5kTQBPoGUA+Fo3WahftIGGiQ2GH6pxbON3lcmvXOzheZtZeJHjbDduJqxNGGI59XpmiodkfSlzWwMqS8IqYj5TFkf3Xym/8XvVfsPI3WI0GNZ5ckEC7tfOSrjuSXp4erE8Ivjh5fBXFtBpgTKQci+N/41X4uG6QkeLBSH73eV8cQKBbsh8tXCHVQVOh4cg8WJRbX/doFm/XgK1HoHdY2PMJlHoOqZfe7NtY3LYCaSBM8qnPBUqxvJkjoGhXOGEwrQmDrdaTElkYFQqnUDoe142EOSn3v4iJzEhq29IDykG28zZLKgz0B/K12V6TMPGObexvup8Y0pJeiFe7uMJ9xUWHDzn0gV4G595NUQWCmCNKbvDGzQ8SMFdZHwfk+npSs1zdwWvsYOBq0JIUQEEfF/dltUy/rxX2qXKHvAvXVI2qpHLyL5IWyPJWBjxPmHUMNyF8K5e3ENJyY/vmBIM+kv1wMYmKdq7kx1OvsEi9tekptW9BgEkHzWlkTzLyuSi7UaE=';const _IH='105f6a3dd0fe29011f72ce75a9055c4640c7a7dd3f4ba4e988fa243a2bad8bc3';let _src;

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
