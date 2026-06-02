// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dESTO8N5s6BLXwee/nSSVF/IiXuzSg4dMWY7sfYmCwFn5lqggv6seG8n2Q4Iuw+Xm2Bqf+QqwN9lmnK4hKwYli7YrB2bcvfqI/icecoTE1V38qWIybnF+7IKipcJtACUXVK5zYACiML0D9HVskxFHbvSHARDIFkA9YuExfkeu4pB8AUUMVk817NdTV1rNo1zui3Ti8V1toOJEjaoAHfG/mwTl77me0xofsdMaX9/eoJIXaA/ONRoxNN8zeEGAq7mZI5gcs1nB8rkQ2szGEsQw8ojLlSuAL/ZZQkOl3Gn4+OaP8dsTpCujwdVsLAlSRj3t3ShV232N9UOcMM29K3ydQHQeMim6D5DvIUFUJUkJR3+PV/0sdSeHeAR5xCzAUPoqQ4rIwJ2Nk9gDzESa/DdUbYeXdiuCdp7QmaDdlaF+LaU2xPqLv4RcrIq9MuoOc4VhTc6IvzsJtRTelSfzqK4bcqy2oav19MCHzGQ7MU+zz5ogfBire0/G5Vuin6wnUX7uTZBxT1CRsrJX6QuOmJWdgdtSlrOl66ssEnCAFVr1l9vbCnFP+G2DwPg+NuEKeww6jeIotheXhsL6Omlh1A5liZjwHwOlJIEaAfiUZEBTIYTQy2Au7pYHHLlhUBTktSp+RwmKYzDq002Tmn429LKdN/B18EZAUZWQm9eZiHTIrEljMQe6Y1VQVeU5PvkN9nQbNj3p1l+tUnBGfZS2QTbIJuqNsvYqE9LC4K6W48dQjx/uMhBNIUrRIgOM+RaNuAwWhotUkHkV2C0HdiCP7xRvXb7VZSBHEDV72oI2AUVlonak2IsHpif5mihqLULzuhoUjcb+DS9cJMjmBbClTRqqmbHnIpySfCGCLyY61m0fOVe1EFkw3iSoeNS7WHBJ6OmxH0HNR6kiD44ZZgWWDyMHQbzQIHod/l8p/tvLi3H+qG7q/aOnVSvk7XvOEDe1bq6KoS7BInDy2MHkQTZSPg9DyDf2A3dblGRKRO3AGBC4lABgU3BVQGgUGlZdAMv98P/82LbPv8a8+1e8fMVylc7PGqzg2pOFeDe+MR2bqcPXODxHaCZGVqbEKMG8ITG+RoGgfP5b3sVmxcJMDEjQjtCQR4kEf96BI7o2gWUUNmkF7FI6TGs3wffhixqlSZpGqVGZJ4nqDFGuqxEpaF6kxR4eltTQ1Bscs5vP5BStHb9yEIoi/boONV3/47p+ZDputICCVxZWlU2pjoSftbTvvcyDbRKzpIU2cUnYCyN+oI2RnzGNxUOTjmUhisHHvAFZ+uYogFWUj6Cc8BSApBTUg7ddarGLE9pydlF4m2qcDU0zBYD8kmHLv2SPtiSImVkB2vip7WkAINninZ5voas/wkC096MyE3hRMdS0MBMMT7Id6DE79BFclX6mQ==';const _IH='1da5edfe4d7b94025669e9e22df4e7794b05f9baf402f2e33950ed9d1065aacc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
