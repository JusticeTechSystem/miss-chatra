// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7HTb7+rmPLJEp1P/x8hmEmolDlPj0rcnqF0jKSW8UkXIChfncSwr+bMhtcwGOKbXHQOousFvzevaf3l62307TZpRjZGMQCczn7VyeKMWrjwnisJyiaMSvLEeXm0K0a0S9EXqZBRAq4EYw+PhW8U4ebCxQ7oV0pZwYZJB7PnrNFxspo7gYR0gV5J32Gg6i0VcPwSwBcgzfYK3gWoWExix3NowElm0DPcpiZy+C5XyMJ+oigg6NGWzuTvWA3Q4VTkLDkhgLza92Gnl7JyFn0o8xbDqfKLchaq2kgPfDhvqJ8q4o+hLOofReXFDNB+kLjRvbpAQmT3BH+4vATDCzRT/BHFDSHUAAdOoD7qTIkBB5h1R5an4Or+E79DniYSt3qv4NXuJ/F30ymnSpWQU1uhQnaJZMVT9mkaI9hrzvKVW9f+gLDxaomp6pvc1U2p26QIYOgDUuejhWNQaDnqSEDu7PvZzbgO+WZfuLiksTa/v94hzTm85LRONL0x3kV6mwWvDjkzsXPjlbvqKI+z9Tr8ab4sxzVt98jTVMIZIri8sxybiW9xoQ9NxyqtBLlu+kDOCrDZ95yQ9wv9xwdCWeiP3pSkjnT+juwRCx9KFw2OzRPTAFXWfm8uiJDrWAZlxRAKszsOIgcJdN6BzBjdBjBL5XjkoV5niwICayuzAaPH3xP1pNCC2l5+8He0ZxCFU8fIQwk8TnAskaUvx+ouzZ2lnUDeQETc=';const _IH='a25405d010f3de9926e5b6dcb814ad2e0d538b6ba3180585c31c664a92cfa0a7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
