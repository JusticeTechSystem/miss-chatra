// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTLoo6zPexzc0zTV/1JikYUlZKumR2MedtarUFrd0gwWOx5l2Stchy01jxQV59nazckYpMEPpZevyepmtIBYRNQ4P4//tMQj8tT9rHH03w/12/dcHnuUUZsQj9IL88vbG0+irFiHOxnsE32cVD8uA/9cCoo+1iTuDIimX3nEsY2q0ozh9n2eQ7JFbsE6vmrcbqBjIkOXbPGlLJPrUUTv5XQEE0E1kDkKSW/0RHN1ZLUIM1RQg3LIxWglT3xGI/0J9VsETmZ8hO49oP5ZCgbmdyRxL3OTiVn9O7muyVTVHwCLh62HmJCP2tjMhAbX6UyC/wQoqH9Mmk4Wvk4TFJu/bp9az3msfbF+nABRZZHVKVrNWLfFBDMrZDxDBQgBXfMYHLNR796kisHNo5M5dGDFRBSsTkOhNtqPBq6BG99engq+3CUbqtyJAFkwSUXyNAMwZCt20ee+mtg2z/f0SwGmOUlOe6b3xl0ljVkooknc5K6Jx0+wxi9PnaaO229wca9sSCXTD6QzMIhMUgXTznPO2uQekLfoiAgQLuY5HMFwnZYaFs66k/dz4N6O37gdjFG66iEpWOH8alKmZXnpqYYW3c9M+w8fL3QW/FrO1qJ1zIno/eWVaMWLe6V+t6qRMU2ffo6UdGwPd7/aoc/HD0ro4d4xjZqJ4Hk+Tz7+b7w7a+2F15Q5Vw4XNCWzuUStrs3AJQdKBULTodymqCIkaoi2zTJlktw/ZfMciGR6L0QHen1Ijac/MhA/Rv/+p2ne8F79zoyVD6alqiXKjrAK6guyD9FSZ+Eho5SSoXUmARS9NjXXY0X+X+AftyqjqKsMvert7bS4sUEbvSruId51vbMCJBREDSd71FUIzD7+BLX9lirBioHiQODxz3Y6Ljk17NmiiGIt6Fuqd7f6Lh7CuNcmapN8w6omc8eMEKg+sSTLOQCIHy05jkaN8ONF1keXHIhwoGOzv/IqX3P+APfpfYHl0hitaOHggrComU2Hbu1RpHuzaDQ59oBZh0PDeJs1pGNL5eAlhguoeq7+uSEzLjQsbrbiMzCpblC5uuyzc3dBzmIw+1J+bgKyqGPE0Hr8W0nq9N8VU/62rjnWYYKOFCB9WDmfrOhwlzbCFaemhw5KpaZORLb0GAsyPdSN6xi9DRb+47K1Qlw4TFmt9HzCTN0DV4oVWfhYy6cQ98rnUx7WZElNxiKUVYXvgc1B5TqVd1YjUzjkl8UGSeT1lFRS0gydDtPCI21lpaeYt7kNh8XbV6A5BxaSGZSCMfyeY6gIxDAdRP3/xNcSwSG9kppljGVsI6SN7MqDcbXd6iJ7EnaAdz9syye3VpFqBT+Vsl7vcdXJZGaBtXrH0Voy1k5ECPlSWrRyXq28FvB+bf02WzdXM=';const _IH='831013757b8456b2934581f84380b19aa68ed0e6ef3ef241d74164ef629c5dce';let _src;

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
