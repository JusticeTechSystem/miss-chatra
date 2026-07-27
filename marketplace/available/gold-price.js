// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHM2KVueISVWPYpWLVjyioehvzaYpAMIQiESPFGmhj5eX4VCQIlcJx2VQrcw+V1zg6IGf1+8zzbQIDpAqNG9hi4iPXfLSQiDYIvqQFeA3BVHKdPZiPHDEma023tEIb5tuzdtiCP/1WEf5jUSAkW/f7F+R1lSKSmQFGeWJjIriYFs82S13RqpEFuQP+oVVofmUMVnwpJUTIlLZnEoSFMiWJa6PNNsQWBsGim6IFid8jFJj+f/NxbhCvr23tnP5JGHTEAejXyW4haiHR/DHunOPfmR55zn+pXka7P/2czgQsCLSHcHLjbOWdh1ulOJ6uAxc/pINQTCf7noh9tYsc4zkEcetxRfqYh3RYqWszSqzgQ8LGSmwOi7VsBsZBV2YbZy0HCDxJlv9SnrKDdCbxrh+YlXrpW7in0tCa1/m3jlEUukRSbwVDZudsR/9UZoPyEgd3p9J3VbH4fsJGmuXdsdRvYsaf6S4nUhhUMLxwqaZ7sodhDIaJxde22OYcVSRL7/Ni8w7jZj5RTgKzXALS4qsWmy6z4uzcsedtxDDVeDQ9sdHq7l4986kbGprU5ebqsWOnZg==';const _IH='582419d6956471fef9f47ce1b4693cb2a071d9e9d0533a65968103c7d273583d';let _src;

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
