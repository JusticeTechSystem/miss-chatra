// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHuvZPp+R7iLOdFEeuZ9SokkcIR8pzlMtIsMXT9d70X76rfSnW8pxswW/zDYP3gICIo50ygnQxZn8f4jAuMTltPXyfjT9fT/YIpKUFf6AWlTGzKBSv+UCJsXagPXu7XkKcBlGHKmjYWD67RWRG/tCDHOze1Pm/QCtPFxz3g300quIsRH4OV2c3cpteWHKi4oeDaQM2o2Y7c+I3ODNvqwJSV4iwfrIHQkBLfzHC9HKNufu7cO0WVUVOZvlOlc/kOasf841dHsFnKMrUpgTAXiG4nQUDbLdGtuF0hKdBcnrmtpHhxXaaPeqVjkP8b9emCE6BZnmw5vOqqNj842BaRtmi/6VkijH4DoXvYRCzknFI3AhEpJfqugvAMktneHyZhiRd3DWRJyq8x6XHP4XBqAJc631+eia5xycAVGuktffDfUp6/VLC0/CAFb5yokfzzobGBm9Ds8Hca6jIaCWpcQBT+8YwuzLy199R43BFGUBCM3wM0AHUUhD3hLUJ9nYg+awTtZXZTDUEOscCZYEZb/Ylm1uKouywkLow7XIaaD93wuECLzi65yGqBQEmH9aHDEC3PLlQRyYhHFuVrltl93hjcDugoYBAfJN4Qdm6bmTndN/vDOIliXlfbUYRbQthfn2Q9PLot+RHwsO5GiKdG8eKJzIE+hJop4h9pAzMEiUBJVH1UYZuK7HtvzG4s6qCwTG162/50gMv/clBVj858vKOqqwiVuG1JeoxywBz6maiRehvjpo0mpwzsP2ypdeiikuup9J5MqHZBwaXUnx8FiByFkxgboIHecmQ6TYkZpOiR+bLX9Of3eHPMFg1CUlXxba1AfgnvydpCiA0/quj5v8sjAcZeRZMWh4dUZZwUSAm9e6sN5bVP1WVmIcCcc4sOwF4cBdLSjywSjIuvmLY843SOoK4NSdXCn94FOMTsYv25CuRtZdF5ZUR0qwj8nPDU5JsHB5iL1wklR9AphD7diAjJxvrohweq23is1rPrfWJQyAWlI2eB+NU3EV/L5t1xXmmNxhzaQF09IeN5I3eHmVFTSDiniBzOwRvgSV+v5Lndk8CYtz64bqPPC2RMe3hddM18oS6ZIiiNl5G8IUkDUCeWfGBVyVm1bYkV83AtPnmVmnU+5iT8+9G64kpXGih1ifp1xDKjgB5Lukxksr+kr14P331PKiF3uXuITpb72EayQkMIgQYTCYsAOot2bbduPxaMz4=';const _IH='d10edad5f58886a4265acb8c501877a30a3be66e9e627a05dff0df7b1bc3a091';let _src;

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
