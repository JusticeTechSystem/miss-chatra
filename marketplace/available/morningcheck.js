// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0i0nbV7hlTJu2ALKGU3yrVUaCyxDv6HZCk16IaYm9jm6W8QWb6sQNyTvO7AwWF1H35H0FaR2U2owbWNZY82kI2rS5Irx7NBGF2luohDlSMsud79nl/tbkHwTyPqqGSBc64iZmquLlR6ggxkItTI3XzPAf0Nhhl+RS8xwhXAkv9kfvevqr9wBpSTfOUxyZMq9Y5goodZGloBDwBSwE5BOBJX5cbsIzAFq6pDJ1iMCmEvEkzH8Eb5FUsLg3vy+6TbFt+Jt0qZIkdBz4b6EEzPlUCmt/JZZy6WUH1LECgdn711o7jVo7DMlOEDfNz/VZpAIbdkVJYYnpkTN3zZq/sLxKL2d8EfneHSRo//4xSlJSboFx3XUqjNqHi6xANQC+m7i9m0Yq0WlcScqDkKJEcF1bGVnAG7wcdlU537Wt6xOuKEx1fZ4wEn3A8fMBk+b59hIB3rfrrQoyiN9demdPVyBLsCmeK75G/RPKpoU9lQAtjap/DvSHt49KLJn6Vu0OjPL5r8hGqXwC9qv3hgmXR/T+Sn23+H328Jl+nFiEyWzT/ZKk1DN0an0DPzdfeSzt9GUPVbtDcuffe2WgodyVdkUElETa0Dq7i3F5q4FkPMhkar//kVzYR5GNPkZAPeEC8QsNlYzr8UFvoGMO/PMv1Tk0xtxGajR8S3oW7pw9m1FhRia81QzKZwxjXox/y14MJVSOXhuD2NKRjQMPY1W90KS5h0NZUCpffUB+a9U4yUt4GUf/QvSTyasW7hPpWpIMnbjc8/pLbdyo3dzUbFOAMFQFfh0KAeK8z/A+N8G1Ok6kV2YAHyEglQn+tG38tlPX5I/AtLsb0z6krgV2BKPJKDuyGygv0PTs9O+fq784oafgeS/zW/2kNkt9ttdMSBCUCcNJKyBUVb+R8Lhy5ojxEzRm/AyBBiDq3HGFEq1sI4lwHnXYpTItRRO+aXcTiZkc5moeUIomcmnl9bn9Zcf4kJINCkYCqhiUSg0gGwG1UnVOD3SKC+DaIAge/oiYaWNxyPNkMRyI/rjAJgMi0aDfC8bnPaysRxbdNq85o4nlhG8m6OtWjJIPhO3f/yEq/gK5nZCwxthsQVS3NXNUKovt6KGmISErgMHUOcMQEj/2F5g3t2fMSTX/YC/gOdETZER9NPlp8LbQq76QdtWvpNWnGsv83DH1AFzEw6JzrgSt0fAtsvWaj8hx3BDMKIiMj93OkJK94UjZR93x3sw';const _IH='eec6c6e55a1d82d1687fdaaa57caf3a294415c0f8757887dda0edbe8d10edaaa';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
