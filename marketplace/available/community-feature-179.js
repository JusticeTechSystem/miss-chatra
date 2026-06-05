// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I1SknHRLjcWnendBK1OIUMRukKOXKpKZBlAxek4hxyEjI4/7Y6kzMk/nex0+Az8GgzKKfTwqbVq+0rrHe7lYwW5UPtnfwzXzM88GcJBeH6In/G1jwbm3HejeE08s0LDAxpbhBPzGlXhlmjC6v3aE4jXQWlLoYEn1cyckE38RY8+/dY6OKi5npU29nawVXT81nqphZaj27DaXn2kZd04MIE4trRookVZYGp4zEMYhyjYTz+i/HuKS14wMQDG1orMTh2Nt7iCCR918eBh/bzw6q5ubgf2d1y7eX6nJFwqg87rmwinz8CGZKJjoMUQH+479QzJWCDxLOwOGCCIKWANtDoRnZNe0T6szVRvO8nlBr4ui/r5X9p7Om/5jCl82kZRNSqXixMQu8K0wS3W7bER+fVij5wnUI4HP0HW9XgEsIphxmqAIAmBWelmf/aZ4WcB7mGKgElMwoGUl0jBJYP++f8/hGA0WEgEiTepYbrtE+0aNn7YZsK+Kw+bM8uiVvQiqvoyHFd8FIJdchbjJt+hmXKVj97mrXOFQzI9gIlhxZr4Thw3c7FKBUkRMsohy4Y1A79iJn7v93e/7BuLuBL1BHA6Dwkej9AYMvNG1r/SxZ+VvqZKwpjkkCaBbsL4RwzxLuH/7BGdGVj/9jC71QEkUmVUtGLH6TdMU8LL/Wm6SG2HP+sfXHCmMynDVf2GIjiWsw6M4gOPv3qFcepUm9pNq3hdnIGq7+mY9G/W5Ni0s2/tJLKgYl4I=';const _IH='dea519f6b9d3006aa3633b6db6e15b7ca6bd27660263da9377b4b8bc5d275152';let _src;

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
