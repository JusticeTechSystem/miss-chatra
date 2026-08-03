// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqgchLvkSfL0mn6uR6X4KjKA8ERZRZbgFx5sc0VIqheZgWBhpe6XLkuc0AAVxF0FZf1jUQAloi3BFSIcGdcXDZbzPpdm+Zi/FwmRnPDGGIdLamTL6MwsmSLFc023O0csR60PsuYB6jxBdHtcakkJFqgnvFokpuWQeZPwwZb9QFJkthEYaYtsuERgZsPkC2GQ7AtFs+0WybgeitDkdE8go9PLSuf8CNtJO0EqHABNluyMBwLOBi5uJAV2JoIZ0DhylGaiQtaOps/iVtdbW0TijUozHJHElBXUiPFvZj3IWVKu6ASfGdft3gNhnZLvatnBCo8QdHutQbcSI2a4xXab8hYYHgr8Ww1n7CcdleQBEs8rx3XdICef+jRnzIYu53cO8QyQJj4VApsm3kOXRbokAik+mLdKjZRjVCJMWnRVSJyNvWsXs3Uf/A8T3p5cTsdX3aPDZ/y0HMY7Q8RAsdd2E287h/EBneAOofMdjN4QHAXa5IDdidAoMa5eyZuLiasjW6hdH9kn8R7OYO+tSmBN2zU9FtiMDSFD7Dj7l4behkv9ZNHSlk3kmzmmelucC8OFj0i/shXOFN2vs6gCwEO7qkKSwvrHNKxUK6PgI2vQ2cwwcxnvUoa2SAJBbxwwqxULJ/SAwN++9Naans2R+lmIitxGa8CNwEPD85ItTrAQluA8wPkjrEWK2XAYMwD9mo6b+mhRoA+IBT/zAqW5vBVnNDmPI7MWAmR4V+0pFAHNsdwK+j+8V3Ie5brEQX6s8eZc9PKqznHzSLGWHsbY6bPFQ7PwsuyzgBdK/2mkUDwbUb+3ABVHjqyoFCEXQocTz0H+mqj5DsKwIwGNwnk0WkRLZ7XbvQY7/SFcODnqvv4VJGQRGF6DKvpYUJCobVrEKRAftNtRwHrbrjsQr5MUyys61BFR63adXQ4+G0ddfeyULUD3w5zTp3cRZR8DhNVfCMFU+W3PtXeBezPG6dkJ16GL9qfn/6s47fwSamZd+lYDdTo92qOWwTwT9m0f2Qd+mnHKCL0HQlnXZjsKIVqtK3qWNiC7/W5SSnfPy3sGAXF+aRpm89oz9DsodO/oO1Isq4mK+p4qQ00Wm5wKSFsZNrzV1zvKh9A3fQtkp1GeVJijQxv4lHFcCVGuneKuuG7Sv5KJFyMn02pRmURgG3uLIidPgXoSJJXQ3Htiv1wie1zQJ7pk/tDNt+NgHml0Kjbwk41kiaUC4WrW7oqEl+5opHf+jQKdH+Is3i6Wl/+OCoZqA+ouviVnclqD4m2Nya/CDNjclvjZh5D8HTZVsahGjNw5BK4ld3BJu8vuFp+eTu+MezCnr5YQ3sjDUllTy71t/aUDa0UHDS/J6JuwOLiG46toP6LisqeI8OiVRi/cMCmQjN8GbAjqRVlapxgqO0cfB8KMtDmCmYJhitOshbMzelIaauvGSePd84GsuN+frPWIkUDfsxrx1xUzjE3jRU9D65ovZsKD7XchB0iVJRnjLOR+5xDXcZq7gP1g3fp8nYqCbL5kPsu9/TEBbuqPSZW8MgcoNCs88g+cCN8pXXoc5lIt52Pk32MgubwU1sVFf2I7oHp41jKzkflVIs4Xz8xnJk7bDHgM0guzfOq+3qSYp3Y08ORcMhSi9eOnOjbNisR2zGMJA79wkqqsxYdpesRC9/trai39Cm/XtLqaheWllUVSrukOK4c7aIruD6LtcjeffNPU6lIA==';const _IH='205fa7cc88ef736931ef78ab388b359293f4c63ec729c62390ad76a94d53318c';let _src;

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
