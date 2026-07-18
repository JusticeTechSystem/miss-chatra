// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWGxhJSTig+LxhUmy6Z4Whlvamkor/Q8FhJVdilpqre/Q0Y/OZa+w9COrC5apCmm9HF6meH+Cf2lTfYA3Xy6KYMJa9Mn9/br7xcyjwpuHUzXOzxpdE4YNAET2GeW8b7tMOhnzUy1zae4d+7KAAGhlwHc52irEYvV8ls6PhOBtm0nKl5Djd4CHJxjiVRZsh0iwhwvFY8bC+ZGhrmAtPY6Gthg8+oRjSHT4d0nes0OSpKhz26753+K5tYfpc/Z+0gk3vK9hDbFnbrrROYkVRmkZb17xSuHrHQTmFw2zEi1n6S1k9jymp66YYzqvsYiDWZZ+msA8B86E4DpBAIxKXSFA65874S7YnFkwbPwiDI5PJwy0v8r6rr3gBOqksBJUxTRM4UPbEGit/CKDVnKGi0LLXiGtNWeHXNd4PHsnkGoxbWGs3jyLxUa/zKls3VvdyMFBNC8LLomBmkjXxXcT/7K98azEn0GJQMbPnbydhKUndk5/yKwBeTKk=';const _IH='c40ecb0eb788d647bd919a29b61b3f6aad0d1928a7834e1fc976e0dc59a6c36f';let _src;

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
