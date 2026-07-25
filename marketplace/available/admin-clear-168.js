// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjXwi9X+hqE6QtpRBpGYSmXb/bWdpGn2HXNPUhAtNG2WVErr6852/SExw/e+JbfFcibDid0OvqX6Z9g2cBu+If2yxT2lVdjI2GPoi+PCeJ0FrInuDDmerGpjNVoBJZN10QrEJDp+hhdvvOy7+a0hzhE0hRBv80wRHtCze9YAzxNjamPIS+JjRDl8LUDZoLNzMB+I8ppN6C+9HT4cBhBSiEXmxKHoVtwNiZ6Yd8ETVFIp9SJ2nEt7wPT3ropkqFmOs58lV5ABmT+M5t0cPm9l/SB9jBQ7AAVYtcojhA6qMLljSk14ozUyUDwvuR62QH6j9xXLzo7gebBVfHcddtF/QpyH4YQf/Eam/Xf7wWDCHaZjdG4PgFR7FaYVRt6z/qFOzFlan1JF90NY3cz64e8le2lWaQ/vu3ybgUopt+nxzMU31SEuv0bTTyLcVRIYZnpdazDnmCoiqLsFv/XCmnLLp+fsqfp6DwWwiIRrVqhzoV8wlElZTlGK2BIgkhxfGDAK8qPNqPq2dlcwZBohyxi7rE7H7Njs0IeVAi86YT2DE21pHv86hOAtsvkrMLA+qrzSLKTVS6UbcyW6rHi3y6qr1h0TO0/V8sFsE4G2j5PCEnROfXGDmQK4tE3fTMtJlQFpYTkMSWpJVmToPRJ/cEHhRby0y2wwJKMkzWplWXVj7pslbJg/+/0XN8nfY6LGhlCMmHYKAry43mQUt2QpWzerEEKJMhG/64MWMrt7ovOh/S16bj4Pq7ApMxWZ0VWOqjabyz0xFlB5dw/Yngc1/1cIgx0yAlKE5yb0oqtA9zDifIm+2QaeDySjzyg0N79VrBHx5h+2moU7G6ILygdjqEei/uOdEk1gupN9jw0q2ROW5Wat+lVRZSyGQ2URYtJB2K/us+iYMKZipyA5vJW9Cq9aV1ddIJbJqjelae+vuI6NdlcLdFrMmnSQc3WwoclNjuXl9j6MK5g8YvhzcTdxQqsISWR+CWUd2uS4V7yxinNYGgUq+Gk8FSFqSUCjU=';const _IH='7a0e0a934491b3560ea34bff5bde0b5e8f08de731ff215d0c9cc4bc5ed6f4f48';let _src;

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
