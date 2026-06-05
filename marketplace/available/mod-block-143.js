// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+wpzOjGB8avYDnMXoFF5ziXIPrlKRICYRH1at9/zIaBD6HswuE0lcnuOFIMUsE10skC4TjVKEwERi4mr9uUKZBoDZWD3icpBEkQIKk3GNZz+hjiNvgQVMN2F/WkHUV0xXsTSNVvQr0zcqssEOdPmLlQhvzALLnqTp30en7LyPao+DzFViu1C0SkUgESJxn6yBum+CAl1iYXl63D+uEm39jw33BYc/cj75Y8MbVAGQaE2K/u3OLUp9s0+rBH6LJnEUzQIqwEFHyBbCyKOHx0i0Buk14XlvPckHeo4P9aVSR9BQgZGAgFg+5AkfuN0Sz6Pb/W40kMGs0pLEM4lKaqaQr4Ei7rhNMbr1WelmYiJXZg7fQNc1qv83HODsjIyELBfIWm61TO0CMOHKl+O1oPtTcAWb2ZqZBq6QVbJPH+ppNvmgndBmmhGyKlwi8h7M9F/mkigyMwy691xxCeCgl415nN7ZJIGanlbaLWq9qeozJ6IRkVTkUwjh5YNWbY7b6CNzeGqxAzva4OIXNARZN3+rx1F1V4mLjnFQVKrX4SRANgB5PE1LCvYYivgRF3TOYAvhTGSo0+68MHu4vhLME0HIj0s3IJPsBAq2HkMAVmojw6Eym6BbtQTkjWCnOF2MvPGz/GszDmPODUtNWbLdIC+HW+rgqM3NZ0GppvECGu+xJbvNNpisiyCay1OvLMN2KM/vyYvw298y1vSNa/+ktgZ1I+ZypFANe8FFwTjnYBrBwlmfuH0DkE6cnJz+KUSY8z3AirDT6cAy6XI/cAHYfRKb3Ymuhu7W/mcA2ME/iz2u5bQofefXVE7QXebT9dGlvZ4tcnoZkr5Y2ezxoLnB9QpQ1RQVZUAj8em+0qXlbC6jsJLs5RudmJS93ozXAksMiXXtjPIGwHi9E92C6RkMleCW5eNxdA4p23uCTtWim2afXtaabDTPnOLf/ToQxXx2rRNOKS64f2tzsI4X2Caksb3VCf/v0fboytVoT0q2shNtax2KdOr6HAoXUpaB4bQEEn0fihnMnZ+/9WbLPVv1fK2mNN8mMhCok+OJ/NjuiLWHPwDTjqfhY3myyBNbkDjW5vcrjhc8/7mlxHLv/I24Vm7ywI23PgeTTlHkKscvPQAgHlcgeTnQ9V/xuHnEFay9yCFL57QoxSIkj+lpeJPBZ3oLJvcpqUbFfdtBC66zFlauLiuZgGbTwYUB/nXImen80CiRMV4tQOobSRWmMJNhzGLZeaMidoxQSEZmGImYzdfXIUyVzkesqNtK1sb2tpldPfd9TWjp8wmvRFeNBdyYUjrdrSaVrkXx3gCGvDUaU07wOhVxLW6jHkexQhUH2kR87a14EnWuHiqhS93/OprUwhGK3SjSYPh6XHzzgSmO9+x';const _IH='06486bbc7dbdebf8b0633da98e9114ffa679f265f5a624eb7eb9c286b31e535c';let _src;

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
