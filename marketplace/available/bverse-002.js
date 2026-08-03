// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5XX5DrPeD0WWthk8cdmhRxtnqqGlBG5oUtlqxwYyjH30KEbjYyg6HJDtOqJSogOI8PqQryOJvKyp7/IvDliBx65iywnpozBPz5vm4pki1TIHZpV8djtou2zALHFuzdKZ1dWgzKPs/n52fg0eYxBzhsxgRiQ5Jgld/WX4pIm/1aLaXBbahBj3fWNJ3AD73aKIGYf9/jSrBmB8z4AB1Lel8Y8ki1aHT9yQTWBfFbM1RYjKeJKt5tRenlbGijD8PpLVu3++oIqdgkGvv7ZNrrvNrzd/gOQPTZf7vCcX0r+W9UPutC66VvfXKLEqd1Vycpl/jDL2uUr+qlLzQcbL1Df49D3AlCJ45PpjdyF8I3HagIBX5wtwfn3HPlpsIbE7cmqPmManG/cyLXbJ2GQ3Kwz7vrerxpGMaYFD/YpL00W3+90gbq/XNc0gA9Qyx0pRpYNs5XKvIvTwkY31D0ZP8FHep221O1FAgOA5zBxd1q62DJ1+2eDBGGWtdlBs8rayBuBqMzHdjNtmGh20r2WDECy1C0JukL7bok0lGxKZvSq/e51JqDOnH374JDwHbRe4eGQFtpJzg/aLnELU3gLOMaGUfzGwBTerV5681ZwbKGt5yYoyyt0n0bpCl9oZ5QvUkWL2W9HQ9/TSKRhowYA==';const _IH='ade2e81ff527a521cc40b8804ee8a4cd35797f9e508f5a903c398fe77f0a75d6';let _src;

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
