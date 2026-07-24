// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjXs4qTd9JXj0lF4tn02aV1UmS+SyVksKwPJ9OPqZv1+VWzYJwnDxiLycV/G0VDNbHjtcH2w0i8EqyK915Zdv5OdahSrrh5Nt4muvaqkBA/RgE7s2xlRMaMfspN3CRilNcuhpx9l7uFeFdydIWnSnKz7NbTl0jJxis8IPlzmpbUZKYAIv42YLI56jiRiWDj0EMykUcXSUHMbNT7g/pyyg/ow7wJ8F1hc5eylV4e44CFrKlNDlVdxf+xx316BGbSfHblc8y7M1nSD+DqwtZEZ+qCwFQ+X8JbdRQoD0g7oM4b6+M1xLie+9cFNCZapIuV1AIT622NIDXJoTllC0gRF4bplguaDneB6GNsjpXdM3zuZw7ofeaRwnUSrKn6I2z6hzkN+1FefbfK826pzByY9g0F+XqV0BIg05EXcksOtXsE3+jTcSTT5fufe0SP9qs31XXh6xXm4sPbKHUXwf9w6WbnC+cXLBzR90XgugC8xsKB3pVovL19xI8ladhiKWTOAJownlGE0ctE9ucrBqAwX1ttEpj+Tw6eVHIIjTdOWmKdtDDLP3ac4QA3CVuZSuNdiXpGTacnuExJaOsIrwe1fTjSfCYOj0+M2H6EKnuscyD4TDngL33oAOwnsGzvwhf5aTshWMA2YYTF7zdIrbmjx36OitzjJdO8Adx63ojrLldC+LTeYg7RnfFVZyCMoPVgFdr/yYjpOA6TOyY65Is5DHMFTsUug==';const _IH='e1fa35ce715bac654a4f5b432b67b3d7d8866a228a54d0b321315605a1b227e6';let _src;

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
