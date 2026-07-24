// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYwVZNhYA5cLVV1iYikoQSUG/gLXEweTBqJvUVtvfT3a3Vlqz/grp8Ssy7NmJZSKnbCncBbrXaLIsgVv/c1CWYYebZEbIifjTM3PYRbWFPBFtOkRMOzA7gu4oCkpohB5gD1eYIf2N6f5MiNJP8V9WziiWI3rLtMHfL0YC38wDGXda55htmYucE9qzHATX1CvaeTYXDwuGeChnm+AbvWWCxF44RMKYOId0+mWQ6hTQgITB59BZsHRbvryk93ms2u6vJCKROOjPPxWpoglvE2mmD/HNaRXcCPF0Ifx+HqMTMH7gZVMpruwG2rQEJzReiyhPLhVIhMkkJTQuZgQsu5nrjVM0UoHkbTlru4JN+Oo8D/SrgNYULZMI5VxMPlEbpQWPNxuQemh6tfQRVmEvYpMbZtzK3kw/LViEWfkrJSmycurBHy465qSQuXZEze/LFL1Qo/OQQulp0VZAt76LjD3BeUb0cEKaKlVmUUTWrY5cfpSb8dTwjVWVl4vN44YiOmehL+zDnEROq/jxbV2WDDNnHUZfityKzS2e1BSldjDINRQkdpXN3O1dlwBXKlCmcUPHLf/NuVLIo7Wp03oH3iNMHQgoUHdc8AFC8g13Qll1hkEt/3T1y0UUaRZcu2RpEU1E4JgV8n4RGXckOnM7K9+YajJqna/A9xmLkcdmG+c+4doDWpAnWtiKrBxG+O49XcFFz5Wni1ZQkssjpt2RU42loqUqnwI3a41BlgdpkgZfF';const _IH='b1289c769738e66795cada7c77f3d288bc9aca9e8c4db865c93631efd790c076';let _src;

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
