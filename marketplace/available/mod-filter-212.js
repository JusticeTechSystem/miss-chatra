// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9DaPKRjmvufBRw2QfsfuwdBj9iehLxLu9VN4Tb7LWRGXagVsaCNaNbdITVfYsGI1GSKRSLQFglX1CLaLEgmG+KHxotFW0qzXAUQoM2GJo0ek64h8tCimxfeYLN7godA0xqw8GUgsu6z4+skbZUBtYu5HkbEQZMhuAvhLASffWmP7kebmiA7ariyW2XhrmepreVyumQGjqrHVoHA9RW+fIaAr/FWFsHYOURdbXZGYzfitPYCDCeOX9N0odpx++K7gonH+9PnoMSDniBKnHVFPTHEXprpsePbjUkFTF35kO+S4JIbIoMfmd/xpvUsPgB4fhEZgopWsjlNVjIVFEIGjdaGN0RRJcazLY6pUOvQAU/1vvNvap4XjEE/0clROdndrfNax8lUHL8bWBPPZHcn2gsH6ZHqxmLT9BsoWIj7ry4PcO0KSPYlwYq0TWw5OLzsxpSrw7Mm+dKnfg1JMJE5Tbcwfw6cWjDrL5ih1plbR6ASqB+lYZ5FtgV0bEOwCQkp7v3Cow1OQOoxQkOoZOZss4Zvz1SfA+9PmBaFHP72Xmy0NqsAcBRYo6VM2oobOhjDhaaym2Jq3RYxfUkNjZ2XimUyIvoTHS5FMFIVC+6qwpJlsHNyoGr1rUJU1ZoxA9QvG9nnfr3yv1F0r6GaMJtlrIVc4NuMbXXBvVn8hGOCCpy/+LkElFSRUeNwlGsbxUBgCpIN+WsCaOUFupEly4IS5uysI/Pcl3FgawGfEYTvSDgXi4izJB+xpGvLpv166QeOkV0m7quN1qucavMvu49z/IGhfqD0p4/1FHIwXBJxf7+yfQ9Vi4B0GFxV2MuiEfMFITKPAJMsZnVFKzHUad9qseF/mGaPEmvN9EX6A9/jjjv/IXbBbp1zCEw0EHBhn6e20/uVZdRc/sFGWh5fW69m2jJAkn8zeQklQvlNEnT3l+onMrxofGtXD09rSNx4FiOZdWkQGhAHH2ZZI93hxEgOANpLbPWvEBaoJzl4Oajs3q62rr2R4jqKMy64cg5nFK/+zINVYW4+N2NsY/yjkBVgcmnhnEcyvvcj/2R2UuupU7Z7gfsL2JUjZVGkYJ3AB9x/q/aFd8LOXs88EinwDdGPodTWhdMQoF0LX2+98ntObs2jEQhsPp0kTVlWSzXuifPfRPqdpSNWhN1zBdF7giI3eImKKcTY/TWsJmFrB0gazDl184GERh1LXKjQ4l9tagMVcB+SAR/wGI0voc++ljZQc6EQA9BKUxkAhNi1lI/ngCsFCPOHvQmoaXd03IYuOt0aWGFLEPCyUDCGUlUO5Q6REzb9bACajEreY9n6mpWTqeicjVSdQLJnyQdvIt23yVuVAS3jpVMRHvdZUtIILuSEDqz5qlodP05F2YzdwPJ6sAZaH6W2A/vfGqQ=';const _IH='27313ad9c533ebb0459a63066b5e5756d9d857ddf84f975290c4cc1f34552396';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
