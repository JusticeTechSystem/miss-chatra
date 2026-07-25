// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZhqgCrfHWItBs1KA9F+BtIQ8/HkybHDg6w5Wu2pOHQfMFBgjIp8lpNnN/BolxNO9ZKca7ZbGwBi+lWmt3qjaj5e1NrjTX+x6su5ctvMyBcl/rB6LwtJRYNDwgCnkObntYD0HMxHutOCfk2v8XRPo2bcxBzftLvNUFmC1kuTbQ8TyiMx+Cwzz6ybklj50rBciDg2NDzxmB6eNHLhwvtZqgOsKA71s7uq5SDlSixzd9o57Km3pjsuPo9IRK+uYvaKeJjAkYZcqA/3oLAfvK3+T9RC+JCkENWLXC4Y+wcG9cHS7rtAyFWCM4z/IgvvGKexYGSdHLWIdGDO2wM7alTqVv/ExS711ofNg5Dn6q1Yo7/H0mmkqCjTQVbia3yHDGfv+tsiA54ALMpW3ry/6xIQqDXqasBfAs0DQWPVBhySiOAEwFHjvknje1vdDgNe2tS5IousoQUzU8vFCCnJpDCnQIOVsLdMo99ooQ8XpCgjvnVUesRV0ZpqDNYfHkcvMPq1JF/KXsGi49Mhpi7kjqsyJ6XzNGAkbSk9YvpHeCat2grpAWewpZpqY9EqarlCVOZTrrxURmTxQ8lxEr/umPgQKCXX42YNuCABEmwU58on+DicyX3Bjktgzc0sOy7uE+KnhiGyIu2TL8uQNtrhnGRv3W8M+vh/poTf4unwlHo04ihRWeEo6zUoxwTd56MUh8ZNF9cPpgJndi7sbG+YxVitJJVkvE+OK+nl/t34BaQBiO/r9J+WtIEu9O1Ao64BSAc2NiAOlw6mk2ov4NmIlwi0oTEwEKMi8srn9EfrL8j3GpoSjgf7Fj7rFxI2BlpB0dF3VURC+3+YOkX6tLfg756a7Jt2OAWFiA9LC7+3LYAT4JR8umXapXovJlS9GbwY+neSr7jrxTB7fEAf1KGdfBZhvrW4h0QfQInhP6Y48aUwGCpdx9Xt9K4gt61iaetAoSDTrmuT65wsMIYJvY38/Bhn0D1b/4+lT+j+gBCUw7YRgkDlA+mDa+lcmTqu/3dRTciqg9FVqUxv9+RNOp3flM7iwLTUde5ozNEf7GpV5lULND76JTpbk15FWbTeCV83+2k6O8if896knVV15Hq6ZXXwP9nmpxcO1FeOXlB0dLD0EvQ1MmT0wvw9p9WAuzlTWwUqmJkAeKeTxrofKjMVs/UBYQlzsehQHA/ugUrTuA0HirG3bDKa7d72gX6pVGi0cTwHvPKTl01AVbwzWXwngs6kBSi5vSR8Ogyg==';const _IH='a225f26718f000e907792aa95e095afaa2ad4558932c7f9b371e2898f2fb853e';let _src;

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
