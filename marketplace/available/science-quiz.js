// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS97D5PXq4Hu5gbz2k5X9ouiEBDdyjCTaMCci/3eJ/QNhNnpjnFmeQwdeNBCIbkmwar4ZW/MjxgOjH1aJM2kS6G4HnCrivj7u4Ix0pEJR6vSE2px+8ZJsRUVVWmHFGfsgtNWMkDzW8p7n5BnxceDJjTmQZGmqBzNqj9wEyjGLaZo9BAt1gUHQKKvA3jRIWUTStysXZMWSnj2YiG1KhNzbiCmiFnX90u6ZtFlWUIcGqLUr7NDoiVtJ7lileY7eQpCT8kfQvG2FrfR1gwDACbmktiRsE6Fu7zslmavcrdVIrxW73ORdSs3aIZSIt2UCBPKAIoKkC/p7hW6nnkWELZqs0jRngVYN/GC6ZMAHbyePonswethhRB2V98eHhnffb/zySmbwUPk0r26/EYMjJZzaKrY9Frb5uCDK2dOovvCAVKczF7+ar2LB7C0UHku+r3hmNlwvChPJ8DSZ5NLdr/njKLATNoquxyHE245Txp2NYWPBJSVbnhBIDDbCvoprjO3wTlejL/9lhO8Fuj+w2YRMM6nd0Y014nm2rt62rILf08Hh8kAvjFA09vN8i4PwZWtn5bKXhtwR+zalAqkKABG/4jGxSrZiuNW+w/T9sukBp9943AK3XgnWVswxjpx6jNIh6X09SzRD9Ru6gDEgSB85AjsniSXsFXOv7CLIvkj5SSDPSREtQ4OgQSUlQksAbvH6Qtfgy5XmMYdUpWrs3QAZTG5OI1SDOjRQznak2GuuSBwVW9amHUYx+5zd6NTBUiFAE9dS5G78oB2Az6CRlLgl8q3Cc9AMDC08dURC8SASAx1D7MDYuFqSy9+jZQ5Uq8b6fLhy28Jthhb+KJhBddkCb2K4aYhT4bqbY2bMFROepGlMDYSXHw6nWW6L8++12HVRxrExL7aFeJBiVQbeWKGyJng80T9qpBLSn6jWYTaHJQQW05KmkUvl2f0qKVvQsY3jT5vPYBy1/XbU0yUuBWkC3L2EWBWDtLUSKV1OOJyxEA6uHnfZCeRSL2PqS0Gn/U3WdW2QLCxDP0Qvy2hRHlPxdNn15koDzzQfIMt5rVTOoCUXuxx38JO+b9NyatYswxXVcO5NMQeudq1KxQEkm9WffOtuxlMWrs+AEpO7x6N9j4GF/hFdocjXsQT7eWaAkvmUbXFnE+vacRUx4p0yedzBDQWCmVjWTBMHD/yABKxkS6q2Lo4g0VmjsX5PgJroWa8UQP1MWGuI8uVo6yq0+cw/Rm5EL77QiG0TpDOYnrPBiVsw31QpFEL0eSRHmewlngpwJkNFk9DyfUY4Wd7+nKqLyc9G4wrqL+mngZgKsqq/+ZEr2vaU7+zGF4B5YEg35Jagl6V0SOK6FyNl0ybbCQ/a3xB+gC8QdTmQfasR+kl6nVnRstC5eRKeT2oVDpt82XOC3z1qV+NCjjO5MwU1K2tB39G4x4V0D3owg0StSoLPCc';const _IH='8aa391b91ec85b162b6b4715c3bc74f7ad9835a0d44f5067fc788081a33914d5';let _src;

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
