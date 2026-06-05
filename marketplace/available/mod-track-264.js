// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aZaxar9fDA6mO4JLDiqt4EcXpvOWuI0p2DojgAfdW+6SzxeYWRzq6mB1+1TgSsZ98QOc9tyJQJfO4R8kAOzPOpgFxVlT9yw2rBnRugt0fGAUSkMJAJXHTDXCbPga9uJP6ZHg7fVFMvm1CVi1UTZTgLRXT1tx+UfXpD87ifhi70mkg/pvq7Z1dtKHTvw+yXXVTX4LOCr2NFTSkgsoaFul3qT2WiXPNizJIGtRhUdDyLhvWLvueZp4ySL4nhOcqB9TLTiqIvskIeidoKAkeZiARUsqwVT5vRYTwOVYS9Om9meLQuP9RTbfi3JgFiWIxCo/eNCb7IFUsH/Xs05sQVulBJEdDmJ9rckUCOaNXKFtuY+b7sIvO966+0SV02+IxJOd0W5oHx+xtAwUw+a6Zfl5AJwFuMh3TiEH5n40Cypxdhq6ZsSn9foJ7LZjpayYPWZl56A9iCALtVSFyNixwes1QHZe9ExmvWPkVkEyyA999td5d93MGUcqRNziL7qpeXOdJ/os387EouMjeR7/KQLG5L2c092IbB3rOLJJ14EamxPePdJ45qzADRNy6QQzEUSD+RQykIBEU5zNlQ5/LHGzTLP8EiZpYwuV2+wAbDksYD7bgZybRzOHHrACoPHPq0NlwYDgP1c5s4MQJW+drf1LiUHNc+MuWC2SXFZyRUmZI4xjQCIMyJ6kMGFaTQ/W+FTXl5+cLkqGjBZjX4OH1g6x8XBKZuIBwuS2e6tdvKLexrDUKZjpSjGIwoD77EfduR5yhx2eRMKnEjt7vt10FsLjcDLeOIjoEzxvBk+iklNx58i/t4ouJ4UuYN5LVq92fgE/Fxp11aFHe6Dubv+embyaZQ2/5PPe66G+pdIF+NbzB5WDV60YZfdhwYyi7rH+OdaI0Z92N6drO78mLRQ+SDpC59CQ6uVym3mhP4b1XHNpG1W6OaOiC/kzEbbCDR0JqMkA6PWt6aKPqZhSxZv8l1UuRRf9yfdjBIdLCwPyMgh64TdKcUyn1s1HGMsAZmNJTuzzKml49RmvF7/CX0BwWp4VMnPwFeTvXThG8avukf150iXqNsffjXAzwVQ3tef5wUIaHL8MyPzokwEm7RxK3eo6rcWVmt7062ax81f7VoVx2+6ocNzd0c57ZLIta8vLUOOUq+M0RX4OqE8Pe567S4hO77D7AHasJ8tG48oSL9c1gHsHqZJDMTGkUtHRHbF00goFge897FMwwDnU0zMUDfeCVG/PX7hewnSHSTo2f6UwfzzfESKhlNiLCHjQASJVZZ3m0Gkp1NdUw2kuQ998mtDoXuLVBCvOH29g1Kbsp+knBKH0qf+5fXZIpXM/+V/xVSjm0GfaonihBJCTStsbI6XTVN3hjqJEFc0tflmjOzG+';const _IH='4903e98ca4eed35cd28c94b38b2541e01e0eac8aea2b7122485ee3f124a23052';let _src;

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
