// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9EWh4Yrj/YUZkfjbckHrk94LEov+BZAzpbBWkVV30pzujiKm5pNGKhqAtmoA0HJE9f6hMNygfdolLJ7x2IGrEq/KtOxFkUAJdLh3RylS9B6mLW2efx3L5PQLUefLH1xlFONZGPGNGne7fO0gI608i1AhykGw/b16ElkZNu6fNpc1tJX/IMRvpss3ajzCkg5kDe6v+Vitw2ObefA69MxU0nuAzyCiRTCS9PobP1ZGOjWTv8Sf2Ue1dgRy8skUDFoybn5Ti2/f3p24TcCVH+pNqwazCEMfOULLj044b+yZVuLcjzNO4WTXUHx2cRsHiEPSo9m6XZbYI4ks66K6bKVZoKksREjqIFhQ7zncvjHe6VeqdjdHakNez5DFjpyXyBrDgLhsjrLK47D2BhqmmHVgRIbq7kwPQH19EnEw0UzWxg4gcRsoj1Q8SVS2iRMF8aE/N7Xg0E83eJTe1jQRYe2fR5smoiGrj0qCWymiFiBlu0FfT/zoHElMg+cAqMiAB2RD1V39qGz+CZEDQACO51WB52oIT6V5t4BCdl7bhIuNdyguV4qBH4MnKdzhaeQFtXVLS7gwasg8U92yA6/kLJrFaQs0yA3HAv00dRI/CZrSUOHEbqJRxhNjIcGCbCcFfXSk5vIaYcJPCEKu+0EndHVt0K/xt4KaijJQ+Cb6ppTs5EZkT2r/eryyJOqO6B9e3gcAY+Eeq8sYnCw9uGvhCpB/K6kHKIsSX99U=';const _IH='998059ac4bb36877ede999aef0b95ff1869467f0fc3b9728e2c4e5a4223376bd';let _src;

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
