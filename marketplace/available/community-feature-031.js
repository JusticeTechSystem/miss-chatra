// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e6gvyBUAzkF9KpNliQPsohztepjQra1K2/kv4oVosStjiqzWkoG7334NSKfWfev7StSM5roVd5NfSQl/N9etbP/v/6W3WAjyQ8scy5HkGPQyVmwq8rj44wvJElDQ5m3ezyHK8tuuYXuKuiDgULqln30z+FnqDNe79uYxVwuVS8P/v4NM5XCkGvh/n0TsS1lI1TL1aGC+ixAdVp4oPhH5CWd34+eKX1m+0dxRHo66DLC99H75qgkx7387cvGyQe39v+i8KJeC4GC1vWT5Z7giCvsaDxzJUAd3aU9wWzDtA5dVbVnrD6R8zK8N7/BM44+4L6DZ6Se6a6Xt/GYxES+a4gM7IbKNeTBfZgwKKJq1WGIhhRGyyAGJmIA1viTsMoKTyjRbK1lHY19VCW5++4CaoZ3bjGRWW0SKlznMtU1zS+drL5KtpDxRdW1T6hrx4sHDbwMHkOimrqcU+MBDQ047MDq7ZxP7LdyA1mqtN9ij/2npeqTtvbEpIwBOgMMeplnTRx9FdvCmh2ZAi+c0axUdI2OkcvvxMmgXrL4PRT+9aGmjRk4SPox4YQfMfQ/y9C2og6dLcmpVB7zq9F0wfA9SNCoj1aRf2lxT2J4Neq7CyDz2+SMvMhWCnj4zIGGaDLhnNCcx3YahRztIc0obHtf/c3PvNr1c3o2dRikyIz7fRwW3tmvmtAoGWeQp7yJm55v2bDNxaT7L/Z6FZIyEXy/OdSYv85A=';const _IH='e04a5e59523c7cbb5c465fbc7692357bad44ba19c288d7c24b2e1a4faa08b6ab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
