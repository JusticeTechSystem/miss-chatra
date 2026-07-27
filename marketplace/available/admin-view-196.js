// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVsnRiFPTZKms/A5WikY2rmJ8/ojWLmhEyUR3drCojggGmbrwbT7rKWk9q7TYzImbJ3OnI+J+Jpj9dtPtK93G0/d96pwpJeUBa/A7SwHfAzC8HL8hXNPqfXW+j0eFd+umLPOOeyvIR3+XkIokmUmZY59CKRWgu4tX9YiB9uk+RO+9SBensh3p3mQlmY7qbZaaZRtOjukuLMWMHJo4x2UswZTIw0X7Crk/klarFEmZJIutyXxQMZDDBB9+LPOY8yWcH35woLuwhvqK+LG2ETuIXDkhL4dWTfnScB7xxZNFxzUh0Nx8P8lBPyCvRDgmemuNw7ikTMq+6Y2lcnC4a4ijqenaXEydDurSp8H5eql3PYj6YMz/ZTTE15FGeWnsPn8N/VC6LGw6et8Nt53jdcI6HK7u6K8+X7DLNfl/xN90MEOAyBmi/nR/uJUAT1L61eC4+/nwK0R8r6NegJ4s7V7Y5mK5DFVXiReLHucynqRZSFNA4piCzblOt0iydwqTz/M0uxRQbdqUsQMZue6NHzOwIslTGEvC+TEbKhnRyF1rPeYzgu/w3c9xGlcPSoqHlR/m2MaQczruFCHJhevcMiaWHyvKPFrRKFPO7JHIJYIGB/HS61IU2IQwl/gWrld3DCyDy1cKShl2hb8YqDvFVPESUJfRGdYmIrHLSibmG38MS6GNOqezHz5dfYPDHuZLP3S1I74VktDPyzyfBLqh3Q13LDbKMrA19Xt5ARAE8qIaxQqhVBgXG/sn18fD7kwNyPZ5JQ/XEAmUaMtElfaUmJejSWkh0SjI2jZWtys1Y3iE0mxgGnCb0CgBNGZ+TDmbz6Bp2U+dAKTd+iKn4RwP0/Azz5GRmGOjHDFYqry40Q5VgUUS8PlNVy7v9cnKhS+aGAZn7VNRyryxN42XLjKxbHGqz0QkqneBCMYxxaS8D0uQ34/giJ2S7GfFCYf8I/QwHoboezq4HfcxeB+ayGo/ffYpyJAJ+gPv3ksvvFnzbh3WbzgPWXQ==';const _IH='793fcd4dd7c1f6a58087a7bee76acdcc12565d054e29e8bc17c95dfd257d7336';let _src;

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
