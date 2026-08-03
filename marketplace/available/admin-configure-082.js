// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSov5K/w8rW2CzqR08UXJytmwJNLb0ZoJe0ntSe4FQtgXuJ2WgxibAo4KjQocwN7SbJL33ifZnB4N+dNJVR7rCD0r8TccTYT6djIxg9LpE4aSmikYqJXTdXV0mhiREtMyyeYXjbx715sw3pBoJR4lcjzEkewGnnLJSYk3q73bimTZjeHLzHxx9y3haNkuzkv8XjQGmyrooF/hs///rH4BokSKaznJbvbP9ttCEiY3tl+Jf8l+MQ5/vov+OJA8ZlgGZT5JkJC0IeynV3N2aUzWhdkwfDOVoJ829KEF7rwVTHVlgmc2pYjIo64HNp/LgnEJHke3jrmRkP2Ie5IB/ab8C9G2jhrjUkzIm+q6x78HdWvcAjTLL1LCSePYHYUl9w25g7Yj8yRJtge3ANY9IB/G2wR4SEKzaGZnsTjF7/PbGp3H8okkTXxs+VvzC46/49TjJAmFPhUL2rlL5/LuLSMonKjbw2uxG21wZRqhrcUDwpJ8i03EwITUEM6uwcxOIcg0nl6HpKEPmSD/+SKqYubhNMelo/y0P2Xi6wBPstB1HZGd/U/L3CYVWpqyNQGxNi0NW9tgrxXPibdW4R0DlJEroA9bTSa+WeC5y3oytmIggZlIMOnV+5iN/5RzXzsZOqPSQmL/9vMvLYF6gd0IVq3wwyQnw6XwAJWDryFhsAjGmz3p/KkUUzK3LRpnfTAJUNFiklBLHG7edQ6CZshflCltLica81XntKPIHFNUzCW4XRxbZH1iojd0aPRxHTvgOFH5jxMhAxX/xSf5OzsrL7m1ZmxTCwOq4NmBymGOJNaQK8vYFHwJa3tdFGClQife5yp6e+KckcV0bTqJkrUrYuz04QjfrGt9DavEakN2N5JZja/3aqo5oB0wUSzkobwjbqXATsGGi8duH9d35q+uKThaOKnEF2smT2xaQJJpYM1LD7n/FT4hxnbcqoD5ZtrMMf66Z9mTlVqDZwdkG/+B9FNH+ceCjP6DdDmNadb0mJdazI+8XmjoFMqTyX9/5aHFEUpsVfAcmIIuYZ8MbGrX0HllKP';const _IH='923f5e1539b2cbb8b5c5a60cd1a8ca738054313782fce7465510714bc23b7e43';let _src;

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
