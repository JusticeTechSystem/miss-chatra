// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UYGyDBN2pQSQbGdAco60NO9DTXMBIyvAsYqsZkuqs+PyfB8fnHkFjdgoNs2xww5MGVCgbUw1gtFppxrt262aosXde7qGbGLFVqCTavve/eQ3WRHl5Q7/U1KurG17g6XkB9Vy0Y7YEjf30Pnnx/vw47tqzlLYoxBl2Awz0nySGOgnx7eQZPyWNrnlWD48qQoWRSQyQVs/syzi4IRLg1zXbey935t9cUN3U3afdpNfnB6UCmGmbo4+EzvKBT3LfsmnS4xtLT35eUvTvVHX6zsVf9jK+tnpzGK3/292mzDbCNu6z0uGLcks2C6EM0moU40tOPQxeK5ZGCRHRegNORGzvDe4YuuzzSk1YG8y+3Gb+wN3sNppXGhGse4OoXojyWz7dCf9r7nKKFJ1UOyhzsuxZbW8fPAXOKgaN/VdkFvyNUHceRqQJjGftcpLXBBGjB8B+YfQ6W7UGYF0shM8qmGm6ntBuomrUDHs6Py/lcp+CkWf7Uxtak8eKS9lAX00xQEci3UDAImQYNzQZW4ZAj3MlpbsqkkBUL0dc7CHq9IE6fPOv7+oaG5YSHREyOAQAfRwq5G2nyhEPiC2KvSuU4e9m4saHEDtvdLpSz5EBEL+qS3/ZUqaA4sJBmLe2S8Wg97CxRKWuqsbc4xm9dcxNbaUovcvCktDcdmSRP1Pq9Fu0h7fVBAklP+dMvCeuA7660GjCHMm6ts9b97htf9uBztzEqxz6gSs+9yiHeyx4WPvE0ATB7DxyQ65nM9/ziTWo0ljEd8L/KgzNNGLHX2PiRgxGkibcsGvabhbmVnpoc9snsAL6kexlH5bG+g2D4zCAwcKQ3z2XVLILP5glydgD15DoLHn9cRTKU8AtLo2txwKpBd31/i0JUwV0gThTdCoqW8fNn4KuQNgU0nDVDde4rmG7o/RXmbhM0HwaCzjNBF5c4LrKfv3sqP1kgfINrNL+bJ6dMaf0COwv0kUvZ28LIX/G1EzDvrTcwnqh8tsCdcFKHFXTALRyDXmVjjfOcVlIQDZuKXYBzj6h1Tc+mu9xGqNZjbPq3HrF4VKZovS343suJupcc35sAqdCZoLZezX+fGoCP7G/+YBJDVfnKk3O+j3+E8hXFiarGKOJy8IWBu1k22bwZy++hwPvMlyrzGOyNhxlxuPKKstZJHI0igQwrZTRH2BQgLVdWiKCMXwHUZ6IUNQeNP2VbAV0Bx9FNSE+1zjWi4HuBnE8h6EBfPtqZ6nuBdy424TXdi0YTU4nQ9GUbY+yZwHaMd6IqM204KfhaxJylvWswV466g7DQNVxSjbxZCnf4HHRkcEbsokTIuhy7ih8HGEIMtZ+tTyVe5OI1HykJSNC1A=';const _IH='46d3477e178ce4bcb617b61419977de96a2d7683b77aa1409d89686e60e39eb8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
