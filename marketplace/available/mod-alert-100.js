// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYVXJdaZTDZqfmlwHwE481udCyuFe362PerPHr+KnPZvniLaeAktDefUT0HU9G07UHPp9Y9ATdV/WaXGYCWntw2kLIed4fqsxAIqah+XpYN73U2qUNWxYQWfp7gmS7gOskZ3xU5TYNhx6n2vA1oLZfENWMTAPTR26Yv28scE6ecJ54s/Pkh4Agl2VyWASOdXtHu0PqgBT5MPSyrPXcfIoZQYXpAfQQ+aON+8DeRwc/JDexrOwekmu1kAdCmlFBpghGojXb+izCR9p9nxVPOqako6UrxuXEnkRq4f4xurRXWBWDAsicmbg/SXVSpI00b4l42yjIrSVVWVmlIKHzljgDROOJY2N26bl799Bsqt/Z76L0ATIeAPray+OHK3YCdMjr0YmcJRmqn1UO5qhM02bEhTbMA/EM6ZQs5FQOFvJPF+tz0nGQAJ2Socjf4P7NnQ4QcWj9d+prVKZ/pwrYDdVHIOGuESdZN+8RcWatGYOBkjLYVTHJgRV/vLsv5MKD8UpoDjt9ZTZO9LPlFsFWN8E9s2g1GRt/6XTBrMchxTEYJFAKL2WUHeIxxm6tvgcghLlzgBhQB4wIRXWTDClR2g5DA4zgyt2mLOOIKQ24Iq39Oqa0FcyVz3HftsJ+yPz5TIs/vDezh56mUPvwMK+niAla1lFnS93r4aq8TbvcG2/0+5u42bUT5207nZOQXwbC6Dr/5Wj46592QdzJ1nh7Fh6JJQxRmbeeckWJlS3kv+82DvnD26aGAa8aGFg45emR81FGJWmGoSOdqyP4/4U+B1rL6Umdp6iLBw0b5f2R8xOWY1ayHame1cXy2UdcdqQ7bYsGkmJmRlS1rgoiLBl8zbCVGQXNJSHnt3G2vTvJhTy2hiI2VGUNGMOA0qpgi3k06wv3ruhHOXZU6advaZJClHHlXxaehsUXVYTB8wQHLnYOZDtNW4/5A9OD1vpC2j7k7HQ9WrdC6VbC5WlR85n4I+YmCWIK0iruPwttLyvh5t+U5aaVpNesjLDn8y9ZD8SZcwkqXGEPLNYoD8Oeo4E2UsFMmPLOsK4Ms6CvZEN4iNSsIN2GFcAn94G2mlMRKY9mORIWjWSY1/6YNzYVVzUi4FtuiyAY8DBVahVgw2ATi4A/cVli474+bW39CwuicbxY6iuTmG3dVS8SB3y1kdSqqTIwN0ZRpscYFZpYoME1w/yY4HyHYZCSZ48hC4dJsvjo7PZgzEG0gq3je8xtZkIXzizaLGWjrvsHhqP666g9sk0DbcQXGiWMIWkUnu9NhZK2jwkPTbCVK3JO0O0+ir+OtFZmTkVKXm8ss60un5PTo9zcKjZs7kdO9p3TlSAcaWLbw1KGrX+K9rXCwfFt6EdpUKcINhLR+9CsOwGhxgov9Uo=';const _IH='5ba199ec1dc36a8c80f67389fe5f6403a286c071a644a4fa1f7cccd42337e55d';let _src;

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
