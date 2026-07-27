// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGJC75opQTWXSrBiAMN8oHkezKKKbwi8cdgO6MiXKflnojKGZl4AfGQ0q5jhvG0P/FBElxocInKe4ve187Q5TOrOrUwdIm34rlnLKE/ygp0LmSDPMT9TDGuAxs9aEUdhrwD3Z/gzHiw0i0PXarLIs1sqT2XTwsF1pv6+aRc6Bf5dq+K8z1uNY5YKapbayYQFWG7gZqFtj99Rneb9q2ATNMbdLGL2f/DV6Vufh2HIOyvSY290gD6Mb6HEjJzC6APk+J6sOWogclvbaKJ/lL46+zbVfeQsK7M2PoT+QqV5sh+1t+xeS5EYsTPm6TBWbAaNz+azzavPkJ8Qgi7JZKeScWLPz3WTxrr0Lq9spkQyy/T4QUj7AJ7MI1mlWZNMS8KDPNthwKQIeVeyzre2auQfdH/AfrDQi07zt2IMQu0nB7B6xT0tsX956NiZeivLqXSfdP3UZ2cnMWiGTwVFLg6MafjHEI3CyLhsHCSEo+WKZIqRIBc4pKY06+SBXFpq815bkZ5XnO8DREBJachtvarJYw3FKgcpGkU+oTakztYTkzgOh8vuyO2JjcMkTlaN4RFPTpqYgSCkQz6FMryLJ2rS8VdJVQwg8Cr2tC4roztZ7zLZcm77ABmLQUf/0EC/lqSRgr4c54zBDwdF2Ouejo/wcvfrSddr2XEq/T6RWyvT3GdLV/p+pfLAvIqDc6WsR1nSlRUPG3g1KxbhaDVnY8/GlQY/GhMWciVBXHzhRVVLdb5UEbZKRqUmlXf7+o+9qoEOmvu2XwBcDWHEYl7p7bjMed1qWZf+qbVgbr8kKzRwX9dbRFsHdBYix+d2WN7IznAN/1PP8nUlqSLvJ/pxMBWVccCMdso6FSTfybfETTKaI9CASgQO0wJwns8ALBtLnMUVAgR93c8hmfoTquRSpZFeUkdCU6/u1CGt6lIuppNjqX6dT5vWmjK2fudgrZ8qSi9TF2NxASxtuboECPIun7ZIONewcqnzdY5VakTZzcBCWhiLAaWAgC2N/Q/BcEZMo7kf5dcEbjB+yMYQiooaOWLEe7ZTvNgGRU4DFYN3vjm4o=';const _IH='8e50ec333ee202cafe5cddafefac3e9d39f6f432162f0c1262ae8322a4e954c3';let _src;

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
