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
  const _b64='T0JGdjRcu4TXu8dX/B9uWCvUUfWeyyG063vBOR7CwfU5XpiklrjHxFhc9m2E5CtKRa/d+fJM/mIsqovPcrp1B2Njbd54oiU2kw3dguiAOD7QXF12lUCSXn1ULgYAQ1nOWHZ+WflDYxUbJ90PjaylhVu6hKt0lKpK63+UgMKRYg18c8oiTNc7gd3HVXo5UxMEBP8xDshusQ4/mdIy0YbfBdnE8TnBZXtNVMqaGQZhLXo+2OclMdX4K9oWPimXSp26zvwYqANSN9xR7azX7vgXexX5TKyjGcE51DviQ47GibkiBhure56URIRMvw1XJ17V2AzcGaeSbhRWaUuY5aXS954KrbTi8QAlWQ0Q8MrMC18hTr8tMkAz86w+63C8kO8XfCQu0fgPfZJ3Cv3PFkSfmz62MqxaB/A/oNqznBPVrGdbvJdGHjp5hS8mJ/e6UTBJb5/NNP8hspuXMUcra4lXPJ0vMLXzRK28PemjMOZHw15HRrHHu38Oym9NpnsxJlNIAbt4dBqxJK9X56u/yygNuU6+y/y2ETAWGPhDskhwctLPWv3IdQ3EAM+KaxUJiZvKr9tri+Dv7fmIwjVvGXGF18Xyttp2O1ebuY2HI5oo12FRp6gsF7ifqKTeyzF3B4TRLHhNm1oT2TCQ4Q26rUZHixAHHzelt6hvgQde7rid/Ldz+D6HG7Ozd7/gockz7gCro+uoxXYGFCQRCAZeAnY4pqUTQBoluV4fkOxzcHBsXl80FdnJ+1UmRgeSwZPFd7Jn/fRgvIZyT4mEdtunRIxrqzSzYvq39HInf0OPV6zG0XFeF5u03KfK96DPdIC6IuJ6QKHz4I+61r+H4RKSNgH3XTdRN68svK1WDdKmQIaFUEREKNqZa42Maxk80Zd1PtqWMcEa11Xch196zRJrDsmx64MXs8GBIehfTGYd0llBeSfjo6bgPmbixCwugyyWv3PYd1+2qw5BjgrO8ewre6O5RId7NboEu1PzUlxFMkmcVx1uPPrbPgGwMkKLf6Z1eQBG87nkqZygYt7Lu799dwsYGJaX0j7MRT4=';const _IH='b32f28993ffe4f1ac497f00b477f82b83e1ca2932464626de0ddcea0061f0976';let _src;

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
