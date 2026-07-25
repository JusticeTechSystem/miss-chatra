// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTui46ZoFu/fRuINr4w6Zz1jU9h6xGNYvShVE8F6tFZeTQo/YcD/LDyYxON9e1O+bTHTJ/BxD4T0/PanJHaandVc+fiaieCTWA/NpPFZ7LKqaU/pEm/B8Zv8sf+Y+0r9IttmoI9JpBVZvzZIhHln6OG6G9nOD078d1Tsi0gkO8qa6+SlO7J5dOZMW7glNVSp3uhTYR8CU4EyB/27MD5pAUtCAuTf+A889RCmZQRopjjrO4DD0k6OycdiOmwZGCFr7ysugDF7HxphepEY5Z35s2sepu3gcxN2vpQ3Z1njqxU5Ufnn04ro8vdJ5ywqUS4HORiVVm8xtoRnfJxjwrotnYGftwuDiTtRnFuf+SfTgvl7SVTAYcffAr1kzXbsPcLDexqZr3alOuXOgU3GH1kzCu728EaYHfW6J5aP5lSS9GgroSrowmma9+lzEEv2AJHK4CIGfpAklFbapTpexzptlBHbFfIhESxntRYaM7jC2Rpw0BSNM7wFFdY4LHVeVeU6myIYIAe27NJq9pWApTMBpxJDFp9OightWqjfOrliuXhEIK5P+6UKoThydyokR2a3qtP7IcpbleYV3skrIzrvC9j8ZJgRQ/qrP3cybe4RxuZ8qsm6fV0t9XdHCQqDtMSIj91pcOv2/L1jNdJ4l660VeQ8lMf7hEn9ZjB6SbqJlZT8Z8XY0sc9frbQmJvmgoOjolMmuyP9DzdwfGmDjiJBYs5rSgNq8bDtjC7GRLbDc74NdXkd8fD42rwSYN2LQDl7xx88w+D12aou9rkuQV/hJYcVhnWQxeYtTMHk5bgVoeEW5QK7xKTkE8GLMwwOnLWmBG1CuogCvDA/4mRZH2oYixT3iHK/rEYYzN7PlcwEAevtzfuQqzJVMtqtOdOz1H8N+e7/Dr8gLzGbZu7aBeli4OoJ58kHXcdrKLylm+PXumWOCLJZleqz+oGnXNgciaznxOFWKZtexmRcYQLHfRvF7rci8/cUDIO6vi9MZe4u+5tfoUoS2n6GZrbs0bQNUIVOGxg/71iko/tuJ0P3aDTk2f1vF5PHHM8E6H2kunV1ojQIMU=';const _IH='4a3e3c54e65f3b31afb5599154d6afd96b055012c869640cb1afe1629b6fa557';let _src;

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
