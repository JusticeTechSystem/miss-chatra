// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqh+c4VWvjx1Uzf//Z6RetGO0ROKFyRVl9o+C53UJCNkueW+SJs+4ttYxcMoF53msBoCUtiWfaHhE24Dd4i0oOwJA/HtmXCaYbCuGjZicnPlNl7dW2CZsZKc/ienD0KK4DIsh7FeAs5HI9hB84pjzkNZZARKUUWDa+JWOls6c+QUzi0flsHzOgEU6a/vwSjHY8uBKJ3a+Pgboob4LZs3szQEZt6kje7Y+tnZnkZ6EeSSAeL+egYAWDALYySWuzs0+8jzvBHbh+/oBvW9RLwuyxOh9CJx9WZ9h7OvLJJpibzi2c3bxJuwCmTqYKkXAxwMv+Q0HPhYpIv0geIH33QZWA2ve/Umju24MJoQl5/kbx93DesW4mtjhnWDhH/g5HOjyZBs0ihCkHCmDPGGxmfkJXPD48sCLDz2T082IHSd26bvJZSW9PC+XsQZoreAlNzFqhAVOR2QjRV20xZspCQWIMp+CY8Xbz6Lr/NVAnEoFojxnQ5pp++Umdmg8/OGssfKqU5zzG1IwNIrByLCGW4LFRtgD77ysf5247LVA5Z3GqYeGVWePyWGBdx4qrOPyiXoxyuMSYD/FjjMqUIEpp/zWOj58vzN7gWwkMlgSTW4boCkx+U0+K8jCkBHuHkI+TiO1CPMyHR8VdYk7dtxQFEE8XaI7fRy9gwuHFaxvetErvV5GGDo3MUsZmNVM09CZLwbqTUpCXoQz+GCcwI6ILjQp+h62hc3mwUV0OJygvAz4iYMDZUT9FVUtt3DKXMUhhurte/+V5Yk88wHRqF+h6kc2CirCLRDFrYTamFMW5S/PztudiwkkXJYojz1sKlNRPYbp0wbOfoXTdXV09rEJQ04lMe/gaWYLJJ37hoBpu/7/cfqp6Ww2F+liVAfDNCwe0JQY9ulnP/X3lsIlMs5UKEoqtugoYAoghiN4JxXtJK3Y7nGe74M7SnY7taz9s2INF+PPboGX6F5iJUJnOywgqPZqRts1Uz6HBpjzEjPzHGkBlVJD2PJoJ2azO1fHNdq7l3vIn';const _IH='0143ff3862d6cbdb05bfb449b7bbb765d2e2a151915db29b7abc091ecf0e57be';let _src;

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
