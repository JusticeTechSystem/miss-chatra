// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xMvB4gOEUMOMn4t71I7+8Jm0ALlhoRYbOVIYa1KDxvj6rIY/EJFP+93aZxAf9apuO6YRHFiX0m6OwBF2qy9QBtfF2ieuGxHT1yiipynRLDdFaPoU+Zbo8enNo95mztZaT3RsjyrFuoRkD0IIQTHx+PYX9GlmJO21APUvH8iwZO1BX999XUV8QhqKoQ3Rq0F7jZHvTcRqSJ1wGIWR44HQM0bxuQgPn66UmIAK5370SKhwo2cd8L4LG6QPS8wzXJ1zsI+ehiukeEqZaksIPPvxlhA9v4FPl+Ywt6zSUiqUSGBb60Pr+31pH3E6NyZK1Q+xzot5Dpr7CvPM9kD0+CigJU8WlgmnpJzgJS1xVKrZFxYqQH7pIo6PvPAqD430j+U2BKg49qb8Lz6ELSWtbdSOBteupxuByTYp9vh/NroUkgEKMkbC7S44sIkMDtXg7GtMKwR+5gkEALu2lIG4UxtaFevpNKUjDYXxtf51Tl8R2twcHvbwO2HyrWH/H2BFqDjOKfvkoph8aPSGZl00g/d4XjTkmfuE+XNn83emY8fIO2GSHDLmj1va0ZIbUIZj6UQYXacXvAP194qyFnHUPJb19pgBWVQHVw3vSmhDArGmvr7kBsc44R8Rvo9V+JxoOGis7V6pdTqT7FmTICOi+ye1mKT90pbpigY2EWmuymZ6ZAvePEU77Y4Y54YDxCxx3G20soDO33pVAVMV+EH7l/PueoN2xYjWbSUC';const _IH='5e45d0883a2df6d533622401472b4874396271a0c84be9255dd88ced0e222ad1';let _src;

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
