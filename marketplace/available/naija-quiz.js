// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWLbGAdLtWZINaGBch3m749Jkp1vpMXeD7vKbpFUHt2sTL23utHlhpK+9rWEGt5luncvvyf1Uk7PDzsJ+dzJBaELjIL505LPguJYkxLpkKYs4NYVKRdx7f08Z6U0WJkPmZjwmtqrWJiBxRRpw9dmKDSSRwixfvQMJOUeQWFMXI8Xs9zxavZlsjPVqFgK/oD91dWoh0+NZYV/61SgMz73TtlA2viXx+45uYUBGyFaEvKXZSuRUu0RtDdI439gjzt3XwgVRT4f4bK2vMQQAUMGGcL9I30pmqsFzaV1ViHjHYsEvOZch+3oHfnwesIsN4M632nO9B4gZBWP71SyIDXnvbSFGofMasm6FizcRSi03MieGhiqt+dLQ5bQNomgvV+EbFwZi9LPsOv2F+M730nOx+QTK02NRlPF5kXMwG2o1e3jXhcOHM3qO4gvTeItpyFYtLXdoUKyVKbhMBIa454pmdg+xhn1bj7o/4uDLxPjHqfMeGjxUwBrpubNy27LXWSzlBWYPkLZEG01xUQ1W0zcO4bNu4jwPbLIl3WQjmMNtBwi6ZFISnrlB4ZVnUd56LZDGPSqypRjx5YCf4FQ==';const _IH='38fb86af55d17b6c8bf6fb53bf09a3ec09acc882c85c0aa22b9c35d68dd632f7';let _src;

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
