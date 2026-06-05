// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nWjcalpLNQmUYlkbE0hsCymcxxuZvOx0jVBY2jXdn4woVREg5uRZEbw2/Dgh27vXYZTuDIpZVwi7EwgSHyzH2BQKFpKOIqbnYuLCUFwajIymm7iF57o44XTTFv/GQ2w+ulgtF0o9FhVNpWBfSTalNT6ngwjENgkcVQ/PcDAyC2Sy/kj0OEh7VhTZeGI8KiZi3Lm7c3R4f6WVT7BO0n4JjFGj6g6enrH0m7XjIi1k3Gag4ResRcriI61adn9DtIwXA2LtaUgtzYbZKfJGpbKfP8Z8KPVvlZ7/RVavXawSU8d03Edx1b3T2/dfJl1lTb5RS6MpCcpbtBfAX4IuK6zzL+F6qyoiDnXhWnJXgQg7/YDx5fhKVoEc0GWpR13ambwsxHJcJR/NYar34DaEUdRqT6cXZzVB6yyW6LxcYOIrzKT3UnxVbZVIRhj73vO2izpDnVgZ+hA2FFTgkvSL7cZIAq/AUIcSJIek0m3EE9kxGam511eAxW2UqChHGooV6LOmt4M7XTxALME8AOyi7avNROkFO5vqq9kq3zMD7utBuJuEzKAkFV4kNcqNnBIpZL7xTEwMLPLcxGEiNn/gwo7BvOTvGrfuB14Uby6vZ6kAgTq7cJGvUNipLLLJ3PPdlk9BUQJ+Vq9Szpt2qrxOemhySv9Yo4U1JEwb2PNy1JmuGsPFo1ccsgsTfqEyiiZsuiIDTMM8P0bZCzg5pXDOYcKg/iF7373aoCyYKQWPoSE2tIhrzC8RbOAivG3j5fR4mUfJdLaTjeGzmXtGOrrXK/NKf5/KmFDNqY4I1pgq5S/i2KF3N8VsKJIXCbO5zrNWt0hf+7lfynyNZRdnb27911oodx3A8mz1MRDqJ3f0KniUhjAC1Cq8aFRstMFa2weWytV4bb4HDicdUH79JT0AzMHwEEZL2SlUy3UBoeVwiq/suqZAr9OiqDQMYyIrPhLpu9P0/t9+nCovuMlYlyVVESlFcu/x1vK8WOGHYZU1YbY4891Rt683gK1XmihklWaKPqPiPg/yw9E0uSUyaiiQwSYmMk0V';const _IH='4e87597874bb1b8a4043c01eea3a9f233612ba9f7f062a77899eee46c34a812a';let _src;

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
