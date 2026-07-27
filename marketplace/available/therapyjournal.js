// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNP6tzZdns94WcgJMvvWo1MbNHFsudtRbTKgycXIEQRs9wKUkstecQ+kSEkTRldWEwn0epuGx1Z6ONYRAfIHOKfo2D9ElplKsg8IGsfERDX1538Wx/KncgHJ5nKcDOIWxMZPUyFbDhFl1tJteOVsboUPozQ4RV1o9gA4I22BbJaNvVZK5zvtDsyqrvn/Ut7HZEq3IKhmLS8JWWnGdrmg6vzDD5jLt65Jgq2S+WtL2KD6EIyOOK1MLeJhxdEeQY/HRKC1wL8iiHxuKEsI2m0ItE3/NY+DIJs4DT6Yev4txHo1fDC3k7yz+rcPmAv8E9NINt8C2LusnqhXGQcFkuSxt72DD2au2lSE2jOpcJmYXBXM0FzKq5QRkJ+h0uDTkBeX2xQjcTwg4c9qpuLAwGrMsOtsA3e7+v6NJf48L4CWXEKhlYph9HaZvu248ilMMkUiHoVJx3ag2lge3Mg/A6ebxlqoMMXCKPzrlUToSkxQGjUViBEQFJ3OlNMXm1lIYEPOlXmgYwPpbekKfIslm2fWS1lV4ARIvbeZ9NCcvUqW5mk3CbxEd5gm3PZQYhNQgzFoO2HiCW63TvFOYO5iofyfk1dULRlAu4ocgHVa9gHr5HSHTYM5B5ZyrvTlz47ZNUKRkpGegDST5UbzLUH+iiv1gVpIXNZbX1WKsoZo/rw+kqnd0I4W4B0hUYON8ld9xnUHYS99E/3/pX1q8DjuVdDEfl7VxjYvNQgDLjmXHryezULc3hB4shgZ1nWtCcr15UEA72J6E/MYfbqyVw74Xs3sM6W3vQTW+hW4Uo0umVm3hortKxjaC66rJY5TEs/jtmvmA1Vbo6Z3y6JfSTky1hDP9nTW4UaANZ/x/SwrgRYS0L0SS+JJKE7JMA+ZP5WOWbhT4ceeF6mrFKP/l1qY7KOnJK/KBP03Ikwuj/L8d5SiydNAahOjO/8ljiu7DgvjPP1THLSH/1kutEO5TYf9FKgBxbieikuxqe1Jt8a1A8cJNAuyMPEqg6eDm8cwybR1wGfhEek0N50wCOSfxY0Rt7IBJRjzUPA7hEyd2M/VUtsYUX3XdRtYX2UYF+L1wsGa3RYiJtE7/39Cp8aK2V2yIS2G3siFJ1Ju84GDoNx02QQsKJrM7cd2t4CDr7ElKGFUv8ms0u3xXm92k4l/gj8IcbgxahZpClVVXIYf1gJ9Tpr1NsQLulOodO9PI1dLDUIUB3E9cHaVosWTp7Rkc5IMKLvwkkfw==';const _IH='484ba15ee089664c5d1a8b10f3285e1f6300a32b03936d216665bd0aa52a64de';let _src;

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
