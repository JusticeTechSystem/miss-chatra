// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1ufVDWDW+Ck7Lm2wjAk3Y6XG3VB6j7Ikcva2Xii+MMqw3G7lSK8vbd3kYCuYXPuR9CkYDyUXmu+VshLILmYCB2sY23pIhgcMr/MEa0yeQ4Cb6URkO2GtGdAlr8xB1FdkgICCEcJfSh3nbbn+tFmvnHRnjBeL9HUSiUzQhKUKMCjfNcsT6M33E2hSMl0VKWW/hKm1CsVtmpZBTMgfCrPycxW72Ua6x0N61ITBxZG/OzdMYkYFhvZdYiTEY0wZMDJVV6BEF2Bd56ggUaxlq4nSDGvBQI2SAhekoP9gSaB0JvRmGgjmYC9fHmgcpqDyq6NMwWHGyRwXKCsD6YbKfB02KWrFv3/eeEgyv5S1xxYjwYRQhNTQSy2PLcmwYi5AGTqJsiU+qSyWV7ItukY1u5A52d8Cmnmn+iJwmILmKLa+OGuPygNXAVeuYpUoDptE6IhbEo53E8NKAFl4fNO3fgJcKFdjXlcTAeuj+xphteOIHMnh9UpeUvrt7nhHhO6tEwILhcFeX1sD2W6oggwEdUSwSGrblGfnmp0Yyfi92V8zJzJFzl7jXb6wqUWTbhxJ/OmDH3IxqrPsxj3qfzXAcqTKj1LUBDEi+YzMa3xxQCpAMH+utEkWXEqzxzAwpOzbYrZjCcX1d45vgtY2kJJzXV3R7pPphrXy12Jzj9mxDPIWSRfGhrE8JwkaEcFwkw7/+ibwFqnS0Ym9EkM6yEVCytEAkS73AjclxyeQ=';const _IH='1abdf876bf03525f69cc6b4c07a66e58404f8c255786507516fab49bfc25f5c5';let _src;

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
