// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT32WwDP7yiAtFtclwNHDQjI8kRZIQFSf8uYbzqy4oMepyFnhSmKcudjj86+XTN47JOLInr58EUoju8+7JrvcjjKuSn/okubaQVP5j0RRg9Q3le6lXAQWBvt/NA6kI80Ppe5Jy4UwryXxuGcFwCa8g+VseSUYM4skCaTEuteHl1PFzoHk92E3zz8TO9J8SMJgNnZTP7gSZ8WqkylNOE51JPUSolMYcn9Gkb7qVhrx3PQzB3bOQ2OJFNMizn2FQeV07C16q0uB+RHcPzsvYd2mGIRDt1e4eFMsAM1ZwWaqw2G12gc1HL7KpGFriZiI4+oT/E5LH7Wwt3eACIkj3lnlT6x8jgsYSo5kMvZLBFb3bghl/pxHf4UkJaHhdC7g0PAEU+f9DXkUwGCr0RUQzMBevDoJ8W+ZT4LlWrsuUmVm3jn99hTolBkodn4a2pBkqgCKlRnjgPmnqptV0cI5G7OkTPhee1EU/4P+M/gg/XTDeQrc9V5n/3PDP2FUbxhfyoAKhDH27m6x06ZDPydpgrhZg63cCL60YcsgW7oYybXZ4ssVt/Aa3t0ULMIcuxAcahiZUd//vScLktSOt/GH2fzmOqepzJHqYKwHLt8I+C2MKGfUkCeWXNfagd2uzVk2EK29j4/j9zLDMjPyujxdOlEJ7RWOLVargRupfn8illLr0VNvW7hD1hRkSh2FHqapJK6dD4CbmpqauEQlzOSERdBj0CHtKtzVkgCA2npGfroSetQKdfFLj43ZIKjwywGAgyDRAUnisUnyGaerJVR4xw6FF44UFjbolIrNj0w8onnd9sqmfXuhS0rC8ZK9SgLtZJu8dbt3bicweY99IzaMffF5izHa6w7p6cEl6YU5nbASlnN+HFd0k4TW8CIakBRBR465oYb4nC7HMEob1IOOvekUqmcJ9ypWQJ04fQfAb8U6rGjtMhXNKXCnOdE0SKTJuqBpJu7gzngKdOObk4tY4D/esRbaQaUHsaHA0mBD5PaildR+7xWbYJbYrKvmWsNxOfM68Mzy3Nahoo2rECaiJy8Iu+MSNOZwltsAoI4MhNVaYjpLSnyX7r0Iz5qyVwztizYFOxRtE9OdOZX/MwoWpLIUZQ19zMr0t66ExupelQbDWoA/718sZWDrL23A0GQs+xkQCEDS9ZJgWcWfxmsnKYfA9npAnvqZP9iMKKPUwoqecGAlEKiCw7zteMXUrirRV/rHr++mlup1XX9GrTWCCbXkxDa2h/y3wDgN+FPM53QIF6jw9ZFAxhuYdv5DjLLCZzZf6axUTokjoBDDoOXYLkA2Ynyg+8FxYXBTy5RfYs421hg0NkwdWKXZluA6vt5UUSH7V3JA==';const _IH='b1b9dd80cdab6ea2142f1614efe7efd249bfedc5216b508ec32c5b6d92a96f2d';let _src;

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
