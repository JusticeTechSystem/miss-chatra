// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oa+iCVKrfReUeW6S8AO8hj0Zoh4pfsTSitsLkF/28WKySSBfOTTEnth9Me0MnkY+1u8mV55sE7HOkyORFN0sSAw5wMSQWurAXX/Afin/fth4QgWWWjocKltfBFhuqhyj5ibpDNTbQdGOuYoobWwIuu6bHGZy2H77JONcCqMmWQwb1z3u149cPIdRhXLbD1UBQbWSh5JmEom2eZqHE6WUjU6FeEWq+zus+cgAdaaElPF/qML2FuPOvY9Aav2/cGli3KxLGmqRIqqWxvOeV9Zn9F1MmnKtvEZXKjzXlYfv2RwwDUUTDVpas87uM95GvXfIKv5xLRlED4Lr3Y7rp8oSGnh4Z/5uGhqcDbl6u7ZXf6icyegjK0V7UhsOmwnYQYATqmqbHhqb+fLqNM9bwhbooDDKeszhqFxlDOJ4cNRZoIAdIb49efmr1f+swT5WHlh9JDjoMgXjcryLjZZw27AxYWgjANbEV8g9e0CyBFX3+/Rl/Elcdq5HgZX6vI6LTi8eXHcV7jKfqxJKHU2HcpvXTs7OPLsiM+5X+dg55yIqC58IY717079LsjT6Be5avMew7NhJm1g+m+ybcs8NTsK9BSH0gbwBrLP6rt7GRSL9nifWnA7O1HYsEO7NWArxuf4yLWLG/ldhxEcpyFGo4JSw4FziupshMQq5T553aflQEwXsqbWrQscL/X8HDev7K3Ryu39G/x5O3UbJFI6y7cZGBHqk4BWm43ZOIbUrhe/PIfcewLQ=';const _IH='5b12c6554b0bb9c920fbdc08024a488f8e8e2cc33647a6a362e65fff6082b2e8';let _src;

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
