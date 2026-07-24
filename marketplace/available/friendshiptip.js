// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXgVIt/Wk6EtvtoYIsPO6IHt1JpEeOYOQD9jtQH/Amhv5VUfpcGJApyNkLfZaegCIdEmuFytGrvxmIClLcZgOOYWJIhJLKAdhVeNuSFBcis3BjsrVWZie3Hxn54ozpiQ+KflyTps+JVjLdJwlaeYJabUrnlisJhCWKAOY/k0fjIhNrP44iBoKN0CWFE+CYDPV8HK8v9WvwSKJPyZ5NQdJa6MFGmLYlPyZnfSuLeXyvH2aa1FH6SZ+hBLkS6bEo8DBT9cYSaFqoKZKzQ7GCVYQj4nb5YEkNzgwbfLbBiXsbRi/RCNytcwKNdNIZ4PWX2t9HUWq5b7hUDmCpoY5PtZOmK/C1sZKu7qDdezCtttcd56U3Hhmf0TFgVjoj4oO6j/w7gC1VdLXwRuhWqOM4X4f5th9d7H3+5cfIx69qninHJKei2XBVFV5j9BIb++3PYNV8daOtYXpvtMPL4eClyhHBii0P53iCnku8PVgoCUgk6z38tTrrYmiWdjye4psE396G0ogXbTSQ5eg1HPXC5z5LlzWPvFT1K7FwFiqp+38IDlYewNJdJgf7F3dbcNnlP6Mub5rHVcZLP2mwzdOO9ZhlY1MGkZIEU9hN3jm6KZbRJE3mfSqX2CcdhmtTTvl6tfuI7V3QFSaJPBD+v13d5SSQi/ZivBXcZSGeJMd6OmdhBxDioEJ93k8f12gYwXstF8VV77ckI+ntp6e+o/AYlp00I6ZbTSox+siUjf/r6jHlPqUkPIVCMv3rsWbKG1iroZ+SG0PgO4oWS3gljBufz4+JFHuzT2loLCodw5grlqhb0YFUwKQF/Zp0xHLDRWr8Sja0pDwoxIx1CXROnBrCcQYArMkmtfANDbJfjVJTCtjp332Qf/v/qgCLOmQyhU/E1fyajOPNA/VREeiuE1xJgTM9QE7oSrJxBvNMjhwI1EVvUU37HllOSMfBl1zvo9GDDZj0KSOVzsDk/6w4RL13W3VuedCzSZ1lw5zIgDQ9a8Fkwf1ZDJ8d9vFgl3H1REo6l9Z0vzFQdLzOlPid7cZhXWBlC3TSb1clCT/nQSahlzesX8z6m0MRM9Mqmd6ffD2zu3A73Al45e8mSf57xBSCSKpPlVwTh1HcxBOHygF1sHXAk+slNi4VLQhr85p27SK0jThx2SZEN+yQuLatPsbEcIcJ3U579ukKJlWyUgDYlsVBbIqDrJxjnZyQ7vM3WkRDebHlbRfH+uCpAuEnZwjSFLqN3oOwjg==';const _IH='c2e436befe61c754a6bb42779900b57fc45942ba09fc1cbc10f78092e5f3dc34';let _src;

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
