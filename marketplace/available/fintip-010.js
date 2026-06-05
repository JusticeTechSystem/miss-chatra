// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oz6S2cnyKUAMhXBLDHe6cZL/yYmINVbVBEO3Gbsm5VPqSVixDxIOsGsHOOC+O9cb7nvPkTeezp4hPitj2yrrfIhtoQksu1knW7ktNMm0Y1BJN+7xsCz4oJMV39mdSLf2zKpSiEAiLX/E/Us+bOPYBDhcG1McQ9qpAGQU6vdyTVwOY82a4cfh/N8PMwsE0NBpEPEmjbzGZQFdw+WHxaDWYZXSF4Lsx1FFqNnQ1v6mx2H/v3U8pu+A4EyA/HbVrA3Ifd6yIhsNa+5W5/Jcdcx2XpOkSDIOMyyIeNZZrEplvbqDXk3ikqo7hqJlvZzSzECMNZACHgzg0o8bahI2G9qxQpEWz/3Oye8YxKgLyYYpDSOol4ivJwKImMykbtfQ121S+26z4PSilULKc/roL9xIA32BZAO/6Tywb99zGdYATX5kzamvmiKq8kh9XIQM8e/Zx+GWSDacSZEjf7Qj52osDETUvRYlBtoxsFdeEmtXMEFjeYRULMiNFIFFMe+m04JdfZDE/ZRQgDcwD3wYtokJ7iNMjXsx1XuFnVCaB1XsyXXqPqjeqdf5UIbpAf0KroE0QXsbCl79JbhC+FG2FwN8kne1TKZsN/dcZy+T4doA2TCYytPi6yDQdkd7hj/qFsGlh8pLAj8Mw1UiH7UnBy34wpLkoWLbkaBwxzNIvmqj3TCq+73BdTCNIoqcfZ7gZzNABVKS+frrKi/fAHPBsM/N+hACmD+OMC2vrbn91Ft6ZFkP8EQMJxIcRbDdDGqIICU6UclrBq/T+VYVMgB7pxvLvQAqdK1lmpO1Hb99eEqk8d0bm5trKPKDC/IbdH5X05JFzeZVNmelJwaOqRai3wGHQYl6aHVZ28562uBbSe1EzLsil+2nSvoidtGfrfathyUELglUGfuJNxoYlM9mpho5ibQv2e2EN8L4JnpxgWx9bTp7klYqZrwqY0w8jvQc8EQXdZ7vCKObENw1/0CjfbzhziRMG2WnuT92cOfjgwAbQC+iXogI8HX+q92LfZLDl05cp1fcttqGVREePQVOJXwSCJmsYEmeECkNu0g1BfYAKnhr';const _IH='ec0985b48771f126fa93d455279246b66059d57d13bafb8fa6d163a6eb29f540';let _src;

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
