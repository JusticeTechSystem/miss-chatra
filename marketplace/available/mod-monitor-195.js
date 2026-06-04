// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4FavnRtCfs/b5nhI4FFcJ6YKV1SZScNg9mxNcfrGDIrVxFnVqjmxqNEnMXINfX8UHtiFTjZjX/WzXjqodrWHyGQEJJyGpaVH2chPpFqKf9Xn7WCh5+/4i78608pvcYnjqkQm6mRsvmqFtn/NMwonC8XxojpG0H+zetlhfbKTIeUafNGs79zZkgnhbSdmfMf64Y4C+6K036W7Yyn7ORIHpQSYUXGmAEWxUUv3cbitEjTS6WHLzu8YRmoEjxYldkcxWKEU/4yX+dHL9rx91GhQ6DBFuZhpHPEwwsyb0F7T8noUSMEa2BqEqneT8gwhx7wf1g571Cu8bkqAPCl6yQlKNbrl8d1wuorDO5T1F76yMgyinzxD13i0k379NuTThdnx/xueTYWcGvNtdmoIwMfMRPqw+YaTaueJPMmkVNgBbkT9NyVMhRc0icIv45tlAY0bTEKgLayfZXJe96w3UFzUfZgHE/u70Nt/RQYDUohdRfsLGtVSUa6/BlOYNindgQA9oW6qFutq7bcw1il26OWzYESJ8jNHl3dLxdnt2iU3EmmFVMt9jMCAyEDLxbCgHw5Atn5k7tUCZ2PM597EUXsK+/WYrm1NOFsI1xTtOju+/9wcJDHCy9cOXjpdodXLo0agpQKwrptmqbxfbvSCQETlsYk4H2OcGqxUQ8MTLaWdUeuwXAsio6bwrBRBofV41q6i+uaoxyFY/TaO++HbHGc6r0UhJRZ4sjsI/boq/8pujyNvu2plRjOXh892FkPZFuBw1W1Kn+Dwmn3Dwqa7e4MOvGm65P75K++HGSTb7xVTMJtd+GqHi50GA4sAC5atnc49qI0M5R5Cw02kGB3JkYm5F+X43Qke2vsgw9accA9tEkOLWco/OTA5CYCGWmStXcx6K6BNieXBewpuKr0bBFgeMvh8I1TFidH2JpWilGEkf2FM/PRHw0AzOB9eJFXIiIijOU7jKVbOMe/ZWGH6Zje8uNH7UduKY0hn4zwO1JEWrBgFI3baD+L+t+sEQaVfCDrY/ynNxvOY7f0gRTc4p81t6DD9CAT64SyGYwllS0I27ObXlRSJadZuUzhqtKJ0B1nHJlds8h2BTw5+dazc79CIlYvZJht0ySLLl9f+swqhmwRwCtYl9ennbShVLEIH0mqnPvwXzkFbNAnlOdAbH1vrKARA1FgzR2rofnLPOwzG35khgrPaRNSn0S7IYyT3iACaw0P1TyXcw90+nuawQodA2AABUDyJ0T6EMvagI+D1fWAPmf8XbEr9p+xhtvRscbKslNxAqOe3YHV3gzfotBjdSgVEMa+m2l2lOKjYK/qxyiY+AZCuii57Z/tXh9lXf0RQAMa0ejdDfBPqhRHSHw4jdJgyWfEiGM6gMjZX7dpKNPOc9wTNyrriKvPjtbRvFUVWjuw=';const _IH='a1dcbbc7313760179696b9d839f7440c2cda278ca4aa139aab2ca542902e22e8';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
