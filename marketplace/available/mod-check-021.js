// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRAHKvqvTVFZp7oAdUCgse7+44wbRTrpvSLFM1cY59r9u0evW5AhFcwEXo8JogffL3bIk7RLbIXuTFLq8CpjFNzd+cV+rXrEwlKxjH/63kfvMSCDegtaMGN07UMlarTsswp+hyitSyfKKLViqUPpvfqq0NYu3PeBrhxsEtYL/mkSoAYe8UuusWl4LQM5Fx9uVs0E04/kbfk5pyn8gPvT3tZAgNsS37NK0o0+sNsNvNMHd12X78YExadMhDYN9DiZRrSbTmhS+fPVQwBZ3W/9r+x/q2GZ6JH6QVqRZeJagRlzdlaspNjYuK2WmWyPMLFYfBjmuotqNYdi6TIPDeRJ/y854VgB6oy7YA/kb1nPch3mdS11u1kc5+bOHIAs5B/ry9JY7anRVQD4rNoz95VPZ/Zv5RLxbQmz3immU1l7JztZxRWCxMjUOHFe35eQDRFmH+XlU3KZD0mGGucVYcvJ3UAEON/alZ7/9ue1SQs5cjdwkU2mEKS+rjuM1hhA6I2ktv6axEJrwmBjoDaZoMKsB4r80SIRh4bNFH+9KugLnhaS6ONxrnBy62O50S7nDdwSAa7HBgrFt6Tt9i/bb0s1hMj1a+en16ipPT9TAafYP0jD13q+LyRpPHLBYTAteXLg4QTOv+13HKY8XAmPqeXNClf361I4uMO1mlnQ8jsfJLjOSj8u9x5WiUbNcj7WoFEYA9LkB2uFCBbvascMnEO0NHqff6qdEdqcqpEV+rOE69K6W4lBUrApHtGGUcgBg6wa4yZsj7zMb15eiyYC2cN9oYa4ZNW7yHlO8+AVe5715pdlL+UNTgWIoTRnxJV1M5gMYLxsCo+1JwuPtPenqxAhbZUU5QCMmaUEz2M5+p/6MXqNfYWHIpQ1rl4HEULJV28/SK6b+onSXwRkODyMeRanPA3mDkxHqbZmnkCuWXx/c6Hyw0yyOVOlBHCU2SrHP7Jzwx9wMLARl2hUsxpEuyvA0pIP0xWFIppqFjeAxanf6RURxcKvjOUuHupHzZGGwWvwSDmC7RJmYpM6hmuPH7Tqg3QW/mQZ24G5l7VywlDC+BGf5G+q90n23uQBT/Nc1wrUY2ID4KeOk0Sd7f7rKO+rsGtmVg9AXLJwhXFJ6s/OAZ6oRLcTfDfgWEp3RRZZ5WDPB/BznEd0A0hAYfMAWWlZuch6bWNRPzmdcc/UsVkaqpRo0mYF0VnfN+ITZMEzCaH/pDY300oiZ4UoqIPtJnbxvYUn4HS4wRtulmgM1PPyWO3//b0l+nXA5GKkRScGAqD6iJTzBH2OmrTpsUJcUPS9sUJCATTYsgF0El08Ue29IMi9szlLB5a3ayNnRbQOWFm2KuSfEODnhGfOvFslkOd/hZ/DWvw6Unvbgh';const _IH='2580b83a9c51199970b2e8f8ad388da1265d63645af668196ffa87423fa8ab27';let _src;

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
