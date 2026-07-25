// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQju8sR51vIFBylYg2K8poNWHsKusw5tyc5Ue4z//LAhrCATCzZQR/W2b6jWKQ3jIS3aEymP/wmVFV/yt6+1BIpHzXHeexp7NaYAsIKCshooSS/2+i4PX3i3Fl3HO0jjRpQwDVQcWz9mCXIJ40xjEWrNZNG/PFxSUTGH7+vdfEPAS1B3oomvG7eLz6OsW6eSqOvmPI+YBDczurM0TnjZmflPLXEdxHHZ306XFneYDjwL59jg5ksbhb4oSSwfauq/y2R4Cixds/pDxmrStgwW/bUq4SGoKSSSWc2cdXlWIvMlFsxs7y2Depe8J6GVIyOMyfLNu37V8zAoTsj+spIRJaTljJv8HGa+HFdgndvQmXiKFZiAnca+69PJWJfPR7jUrQ3saeKNa7vPj/oshy0pBvEKgCFFufgKGBpcQwFRGN5PEVnlkWIGCSqk19uqPIL4YaI6bED2qxmeqQxNKTryCwogYJaGk2560ur/qZN9kQKvUBFGd+vqpsDrtUP0PFWkCNgrarCYWtnbuuGVgfV/1LITNtmJJTvkMCoyw9Ni/JisiBbNOAn9PqBuZhNvLXHNsEF25yPjjm99kvBHNnhVxxyDZ9eNcr19GhiOka33Nr7I8ukFti/ZzcIW+BUMTCyVF8tSdIojUzqp8KFLJECEV9/3bwrf/LCztiS8Mbgpc0AVVmEYQUyUXHvgjOQ0sWJfd/S6zpB1mqbEmVbkB+MCdCBTsrY1vtX5zzjX+B57K1RnNvVqPbXuD9HW++vMDLKdVhxk2Ome03T2j0TM/LO2+/mmKqrDleok3gi5EzWTb6PZzSiP8lbCU7CQYc5BYR2wbVQhFIMJ5mYPwI7WyJMKmCIfF4QN+n/34HqYXYWP49aRkpDc/YvWgD14tFiNsLYF9r9sM/2M+d8dlHzqLTw8LMAlqdzWJE8MNo88PJRVZfkLDjqepqWLoK16lVdR6AX10b9+fAPnHr5x6LbnrH9T9MqftRp4jrZSWoN55pJMwlgckMmaTgL4g/NOdcOfqACc5yGd3rtI4+Boela5YrfM8uDh5ZCBlc8eu6I5NilEQygFw9Lb0A8Xy4+e77LmG6UEUgE9/9Afq6++Zm/7bMWsODGvaUzrpZsrwpvi+8juGYgaRgULanatIhlkyLqs+SRMUEOAijRdDfCULPu3mA0H+8ty8J70aRHqbwar32s2zJSrYz11XOfI3P3qgBuNpwJm1KxPz1OujR+xoKLlATxUrm2KqcqJxSwpZqbcNDicwlAZh3i3CxAlhIPAGe8TQ71taBeEWfqbqV/I06ZzEFP4DvVRJx1QgTdi6Jgl5qL6BV0ZFm5S60rC9pztwL4DffkSXHiTJc3ATOEMjJSGMTDdZSteZc816bQzZ9zIIBCWf4=';const _IH='9c69557904f3bf669cb0d569ca66f973e20e9f478aba4cc6af704f1f33f5e393';let _src;

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
