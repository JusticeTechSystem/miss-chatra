// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/3u/n0phxqOZBfg6J9IN7CVRdh7YUmJjtNcCW6IQOiLF3aDtmd7wze+bSfnrzdL/aPzjIkfxvdlpNRvCghi8nuDKKugjIaE2kmiyZBrZYfTygPBEoR0tkFdcKwQmJHfdT2rX+PgPoXH6xloCfIrqKrpzePjMC+XR5FXdYl52kTcqWnhbA9kXDYNpD/3AHuxIZV6oieGNc0swY5kVwAEqO//hbS5SULCe+ujYq8Mqegoy7G2bjWRkbXE0YMUeC6MGiEXaTXzQjoOs+OXQBdvUv3y/+9nkPtuoIUCaGw/7+Y/hiFC9ft1s4NGLRVIl2KQe1NtmUN998my3LXcJAZJKAs2/p5x7/VkPe4byvTfNsizENc+rjri4YwA9jN6YGC/54Mo16SqMHcDykw8AwSOJcroIUHfDxDDDwF1LCuP51f5fmzHPKXqhiGR4bsCiX9SiaLoTfMtYhX/HuLRoh4+EcaBGk6if4b0qIECCKScQvrafXr/3s7yLwYqGjXpBmiOR3xGBq6frOBqaRUtDMaYDvKmW0jU9Jzt+1g++7ApglfpN0yVJN72k6xTpSNPQUzHIvNxRRMi8zeYW1oV923oKLJdoV6RjXx/3+S0wqGxTb/ZISrK5JqNRB2KgZYcoD2zQwOmHQz5iNwT9yijgPu90fw1WyUijM6HzrW0Xp2bCVAK3RgKqAiBVXTjpAgkFICAUn3pgOmAMwpy+R9QZTWXKpgAecT2h/P0y52UVEUEys5cf0EMqVxyYn521Mdfe8nbtWG6eMrVBuwa9Q7L7b3im4uRzdotlemK4EXtNrKCy3n+tFgR9DLvmaGBPadTlzGz2dr7JTvFNNM09WWY1tsoIkn839iNlq0ud66cqIcMWfYaLU347yW7ZPggA1L9fjznPKnK9DyrJGAHIo8rmUms/ScX5RK70VqbclYu9TtI5uNOMxWdFZdAss';const _IH='caa7a3e21c63bcadc05a9498bd1478d7ac7597ba40a52e8643fc49720ebdbf42';let _src;

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
