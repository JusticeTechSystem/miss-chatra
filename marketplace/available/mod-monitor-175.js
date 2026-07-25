// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSD8vLKQpYLBiVDohzE/C+mzsqDXj1dZmNqWPthXhO+R9Tmk8pitDI3DP0KfdoZV1KNstffMNBuqaCrdmEnOBHhaf0VF1rYpVAXFS2ivQTcSecPAfL3M9Cdjef6Wt0zNwM+tDrfVvfQ0MklOSf9bt4rNDN50mF0UR36fqN1Gjm+eqGruj6GETR58mDL9lP7aV+QKhmVxJ1mwuSsl52AivHYvGH1FH5lfMSzJJqQLpeMXx6Z2Lt+m9ZSniUgohQdO0NtzfQk8Pce47E0oo0uKflEOdzXtS0mpLgN0EFolklBr9UzQA6VA4HTS8JLBuaiG5Y2C8lr/CORHth4LvaEtAgv2syLcbTCYnK0EhaTkj9CdwPOPS/al734cCXlk2tAb9fzIhF47SOt8howOqRjTP26MHrrcMgodvqX/nVJWDvHYbNf7PK3NfyTzYCaT6BP3tTRlK7GuTXjT+pPw9h960+JjT0hQ/eWkD0opfo68DCDYP3HdfZdC9fBm7MfGtRHCul2nP8hOLu/V1pvAYqj98p3V+SUL5I1t52OXvuyPx+/L2Rhb4L/6ZpChuZhGZB4S3Nr2h+8QrjQLJ8QCYD4EWUsDqZJnBkfNpbWfIBPwmq/CwdJG6hEyE2Zn16zbGYT18qemCkKBfDVXvWQZgqgsi0ImjeyLycraZJ9QetOzLa1kk1h96aLs9NvKYv0UmTat3I5/E2MMU5H5erx993b6J/qz+1FYanxqVv5cH1l09E380rYAMysMvz6TuMMGeqY63YaX2aTPDpppBR/wN56PFcjg92yD5iWEpnooNkMgb/8mjKc1jBCTo96gB6Cd4CAqQZ568E19didXbmkQ1sDzhvjIdmLHN+vBJPldHktVvoHI1GHTWrXHm0tWCh9gRFNGjcxYE2/ljBP/MGRgwdcPU7GP7oJf7OvKxUVz2gKetH7GBZtEkdp5lgiCblp8F+8E7uQwmUjYrYX0wdX7g5ylatlZ3CWBmEjIEOvCx3jfChupl5d6Pa2+9iUE7Ygw1Od45TvgW4kG2Fv3oS4tXaexy20LSZg90+LVbyHlQjPz5K5eXR0lOK3kcfMMteE8Bqg/8Nga6PcFWWGTSfKTGQYWu76wh8IuG5n7M6uR7Q0TWP0umy5CuBkACQkcenhhd/03DMkKoYyB52iuzFyBSTTJS3iERAsxC4wVN99CvAmNVcbVE3p9MfO7S6y2ynwsxlpO57RGpbbriD4vMDrGK/axXc5WDA5oLFFLtyePvfpzQKfGFk8Ow5BbUoI0eVcsduXk90T4+c62zGXB2Cfprv3qhwdJPFcqlw6kTxGzQ0EdE7UvRpNVY7cwVxce/GXBs8n2jLDj99W8ckrj7XN8mxt5cQv4wmRlnGAxV4XNqp88AWGYY8HwVvfWFAK/VjeSW0BCkyOrw==';const _IH='efb3443cce6973bb7283fbab7f2cb7644698e60a3a2990e0a62dcb4cd88e4b99';let _src;

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
