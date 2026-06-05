// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='htl6oz5xUR4cmq1ErU8ivrmOjV5JvIr9dl0y6z637lCIAhQRFyIpRu0Q00K20bYG1s7Rf5CbJHlcN4LGGANpBpEttnWMJpDmPJvqtVsXDjFjBJ40d/Zwp/ptpsHdqIw+quZvGrY2lGTPtuUUeKzJuaGIfuUJEKpSPiocWyAh5dcesucEh61T3gLA0Sw0I315h/y2ftJYFt05xvlFjSoX2Rp3AyqVfDQ9XJbcvGuop0mZ1kRTkwlxVB1g7cKqEQ08PJ9T1zsvvNQNhcVFjvcRV0dLSpcpJ6kTLr6ClET41QlEbtutgE7e7AbRihMPbOg5HaT4R9b+ML611wB2I8ybRkbB8UQM2bhbgPj0I8pIPhzY27BihFdkR603qZU/vDvT1NwmQdA4WQBxQYVVZzpxxBf4zLuaW2OGMbbGD6hIEQvwKDNIS8PhjUzpIPrC62+F4ZNLkzKBe6p9euRWF2O79wvjnkfTL7WqJIZ4GviEU0x+BUjTpUDYSQBxm1o/txzkaLI+VEDsrul4PlKMs+3dbvhkRIJ28WHiQQ5arZ8vpSxRszxBHG0wq8mOa07elGJWMib9Y/SphTuSRVG5aem43Mq5ANn3BJoxyOfGTbc+F2ap3M1f9JprCvIEGZzMW/KPmrUJTPbv6E1mb/PlwRJMiiAN9KuatAyeAh4ie6qYWIZGpeqTiTvE6KzODIZce5rIDXY+VP9+ISzASQuVPKmIMOALMC0UpWoOtO5oBV+b5x9pA+H9GHU=';const _IH='7521983845c0093d47b98a70a1779a25ef6cb4be2bb9cafb65563660c5e2a9d3';let _src;

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
