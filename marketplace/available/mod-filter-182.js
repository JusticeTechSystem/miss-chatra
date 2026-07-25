// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHce48OfGb0KYPIcwOqp53YazAp0NMFZg7kHleY0bD2d+9Zxycr0XPY7qFu08EkwTLA8MCOKzfFx9d2Up7NINDGu2oykf56tJ44vToNmkHsIvnFmZAJ8QTgclVrMzSSDtMHNAmzmeInyDTptfAcNQCPetVQqWFIQCFJLCUg37Sj/Xd6hGgQWvk8TE1/pY8GipGFIoohqF4grVFAO2wGEXzAJC4bULqt/3bixzr+PY4Aqwig+a9DL/J74y6ZuwrOcA16Q4Flec13Zz9R6Frnabt+yyzVTvM1ocbk7M6EuQesemyvAbYqYZw8u5iEZf8rktmyEu1CUo5x5VdwApSbW5lGU3V1C6ITwsS5YdkQKfPSoXUD+My1ufmvu4ByxCI71Gy7+/Mb5bq4YOyRLiOK8OZnTe1KBzctpbpfSz/r+vQfN9aEkuInWi1T+SADY80Yiboy67TfFymDosTwr7E/g4FkqDW0IC8ZPrbgY6AWjvkhJmOhJG6JNDZvU2i6ThH1jw75lsDxVTPAZ3agcSb0HeICt/cuuNbkuJ1YY3NldVh7lK+fA1Cuf6KMpu6vTDcmDAgHzSf18snjLUIy4i+RX2FMLvheiuEsXYLEJUzUqLrXTtSUV5ONR5XNIxmfRqFQpbD9zxJdo0sFxASLCkRD6lFdKZmVr7VhZfz0vQvI/zTqFLhuOF3rqWDbs1VC04kvHzvJ9/WWQV+ok5gCIfvZ3PasOKo1LGPZwlbGkGffgTyTddebi5yHzcnK1OhL7bLqn6oFZDdBwAvzDDEkvj/nXquxljovLHAZ8+ip6oM/eB3oS2hy5kG07jihFp7tewuXvI6QetZnu1CN592bQQZKvmx5EJdhsrgqp5Ic3XOEOks9rhdEgdfN6vpE3QBd0pzgmVh/5uIjcqB7+tZ3xqmLcPAkz5S0aO0S3EIrGjg25LBF+IHLKOJ5J3QhuX4pSeVb33QDjl+KYTrPE9E2mxLHJWrUhzkmBqsF7eoUcqCCV13e9FiSVA36LO9ShmKO0L6cx9nJTlNJurKa11MsqTvOlh1vOIAOQNe9Mvt35NMkFcx1V0m1iQdQxyttOeaG144bCV6SBEW3cLJHPwF3TPNYbRoaIIyyu+nQQeUVsgZ2ITb3/M/3SmzEp1+2s9JTiOIKCLUIGTgqoT/IDZrs5a2AceV5+7e9RVHVdm7RY9Lt8f60UnQINPxMAgYSz8+hS/hbrinBYLWNf/7GItXVj/ly6a8vcC8KC0w1C/Hp0jRAYC+Xf35E4eyVhzRfCi0h9wpBzse+dBfi3Yrf1dCtdYZV69GWMyaBpPudOAYfE4WL7ceymhBrdqYYeR5ghBb5yeZxbgR7oO1tPFpdyZSkSYr7lhMDg6hiirma6/nNHXLI3r3ettb//kzWr/I';const _IH='b277c65100e8dc1b82b0c693394a8a0967235f2ed80d8a7ff39a534a1fd292c8';let _src;

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
