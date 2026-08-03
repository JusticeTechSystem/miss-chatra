// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOs6AfP9KAFljHGOCYeIIlC/UEW6DAv5eq4EijKJYo9LZ0vvSj6jh0UuXI4qkM0ixYqVqhBgEgKUzaSNa0LQzXKV8IWw6VX51MXsDb4bIAEHoywzB+AG5HZYh9ED/BkwJ+6lJkw5w/r14RHSjQ4CftbNL+1dykfav2tTOhbr/AvRswlKXeEBHe4qJNm3bAHe5fbU5z5rsIcNz2lTfUoV/Tb/aAYP9UE7IgcxZkofnjLb9MXljvwpJJJtIGpV6lde7/D68S7bgl3ZYSw3LMIsDBsuO367fCF66utc0DpsTF/mIfuNomm4tUQH6zjl/Vv28m99FMagB6eDVjGj0rQs2ErnCkDf//GJEzUOR1K0i0IhB+HbAgqFszy2Gdqlk7HTEtZysQNQV00QdpQCHq5TfqFbfO1x9vp7eSZ3zb3CyuokVS5pBfZaqBefUfZH+5Z9x+4CdtDmwjFDcCKL2gzgvgiATHkUxFRi+/MEjjk2Wuigyz9gmfEHBugIireoy5PBn/zTeeS/Ocv/jnCDc0gvGMQ2mmoNfLu23TEt7ejI/lgXtG18or/dSR9xj/8CFkaAqRV3yh20nx8vyJxncpenQkO/mps2FcWRNacAUJnw+ULdDtn8Z2MgmOq2sIu65VTqUSmc9ePO/bSKrj8tmdjo2S2leR6X3tWKEfB60s28XOOu4MBWSusOm/idEOgpcjWV9buunNAhp1KMXQYcoD9OECKjcIK1T1kK5k0o1yMqUNzauAA69PXmSos3Rx5S9SgABGSN2G0Ds9W4kJ8mNVrpAg7E71zh/+adk06rGfFcrnNApZftNrTbVK+PUmo6r3sANfXRylmH9bcsb5pzvhLG5K9HJrRpCodU+TFLxAMsxZwSPu8JJARKQt95iK6MM1QQDCwYvnz853WInbo0JrkEcMn47TTiQgCFLHmqz3S4EeyRmo6dGbzN0OtX1ZIeAsQS/SgkOg8izKwx2Nj18cwfqfMJfiUT6OVLfrMGB7NAl79qg8Sz+FpLvQcajpS1nNxkyQq/krz1BVHAghS/CFOhXfuxpzD8gOI2Sa9Y42hYCHEAVMZpPPOjrFhOYwDgHc68jd6+x9x85BFvbc6HzuN5q5AxV3o9TJ4EjdAiaEReek+JVgPjkcA8ixF0xIOh3k1nzNocdujz0HU63VIw7DjtjmbYwq1dIUQMCf2b5a8/sKw0wJR/FsedxuTykjpMlJKI9xHZ4Sz5DGj0O+gHiqgJgAfpTzM+OMhRXjtI3m62upNHMJ4nkPZmuVF3M8nwrq7Y3j5/lx+K8D4XhlWEmOsuJWtNgAoXNWz/rXUENyJhSDQrBXdhTyrPrnW/IPBxCow8ZGqHo4tpsee+mZpMrZzAwvG7qKDbPufNgk0jjJ6Hi8tBKFO932buQYXS0cYmEIsQ==';const _IH='cb75d49f23e4da2c25e87f901df73e9c1ba51809fb4a688b6038e5e20b2b7cfc';let _src;

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
