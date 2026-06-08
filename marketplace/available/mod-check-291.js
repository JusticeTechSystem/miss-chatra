// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DtUA2gR3SuaAha7q6hRgk7bqtPMfQ1fTuHtpZoBxxCsiYKEgJ0MHUf6yeWbyvZ5y134N1uUeR43mF9KbMyktWabsY3XNjrfFhYjuthGIqr7YHz0dT9NehrkwA4HqWM5c3AbXVMbK/aNDZf4ZTVJYnW1JfZaMsNdyTbTZVrxjGvIW2rPNGoeEG/aFkv36Th9N5O4oZjRguGojQMArKg2FOUHgwvnJ9wr23qFVaZ9dn6BoQ8itrIQnWGZbSmnJUgHI1p2ZfCHXVYZafv6r64mfjKK4Gp+7YIAW+Nvv0mEdcbBubDzTrhBq0s1k5ofkvnLxrg1/vuamtd+d0aZQfIuI3B7Kc5PtJ4ZZJoNIxlO+njhWeR8XuZ/uh41oC2ZVoWIgXQJx+Zq+Kctro6bGiinSfje+acBmnZeAcmvkMj4rm9sPF1bb/s+ZugVg6NZcq3xgKLZDCaHtgVdbtzDxvjBGAWJNXISP9oNfp/uX/s1EutuqxZyzBhdi2zeK8nV/CjQZvmKZVG5UNO0OCCRRIfBbvgbn3xAo52eQxpcBnpuY4jZYcarNK5PrPlXFjn/7bQyIVclO006F837IvrF9hRyyj4NcgPKNy8XynyEziuzTczvatLb1DkHJmWj2LGWKZCKimNMQucoWba2cjTisQub+/YalkR1Mw3twgzKnTdNTIxxnp3MhO5vJTUJptvrl+p6tAbyYhy3G/WPC8YZvTm/rf4IgTFHBnZ/ftJbaPRZ61UjgNUyb15bPfncYkNHBVZtdyQCPCOeVfMoI1QILjqorf1iabpGfQkJBwtl/B+J25wLiLpx676b+r97r4koDNTrpbbKsZU87BTW2nX0F7pmH83EX4FErFnqhkF49YPYCx+uF34Mp0ePUqhvRrYwW64jfe/mc0XgGHEnwsRqog1Ui8tUdFnSjxFzZSGp5REhilJIpSDPaBfCBqSTShVICw9/EndBYBkGNAFEB9CSzFHHc+512oIbWjm6N1EJoHiIn8RVCUsrICb2G6OfvQWb+AAx7uS0pAqiMeLyRiE2yZCaNZ1+bLmfNFWfGxXgnZuCkGhJ0XuCmk0pSFLSMqWLy+i5BpENOHe8sVZquepam0EUczq8lE+5edOCF8t6uzfgKceM9H4NfFvzh5sax/qd4ELU4VfeS+V+lb8z4IRQq6ovFlcvwRsLCSsMR24EHA3bI9TpnJJ/gPWgbr1nY8jVpPo9fp6HSBgawCfEYVj3hu5OlNG30h4laVca0I3RPuP1dpWJiq4/5E2HJLeITNg0wyx37vBElRT+0WsanYwIfuE+wIzlI7Tu0qO/d0n+sBhKtlT4LkGgzEEyzcwI3Gxs/iFjMRk5zW9Y269nw5aU4RNbj5+YrYPTodbNQizCLRWXP';const _IH='388e4d8464c692c6b453c89756b2a758c667b3eb7ff534dce4d6d5d23ca7365f';let _src;

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
