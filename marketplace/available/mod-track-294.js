// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8la8LniLVDZqqRZx0ORUAgTLAjjJEs/T6+vMwEdLYCyplfs/NquO5BpOzmVbJdV0VIJx7p7rTGVBSd2/KSuCaxvrqvfEtQ+IGOcl04i7Q2zMQKaXvxol+6WHMT5GgvRk3RZfWrakLmqLImxRYB7pj6V69LFJVjE0RebxDIDhIr0b8WuN3z+Q/kqw1XddsZhJeWbkB5Ho0OUS2lAw+eEavSJGmIY8xqtKDRiim9KSCYNN9y1ukpSoSrbCfYeBvFItrXrgtR1NPHtZlF7Q9ABBb85BWUmsp5kqeSJPLbmnDywQ3/5a4JNFdr49fNIIhJfwhs//Fa+PAAUenOgfbbQnCKdtl0mm+vrISwFQrrb1nHnUqdzQ7XW5v55ueqCVv670ANZE37dW5pJGmzlYcZYI4skQfgNyVWDPaX3WEKkPiJmjNN9ZVd2kMWmTVEoaXWQqqA38+nhcJZribWj01282CL2E8RLVJFn0DmYMaFnDTxK4bl7XbCCkSadVV14VYqzRpzw12S7QHpaMPz75xr7gcPRXaHNdhsMa+1h3gqoeoi/Q/BIiSuneqFHYn+tBYV3xpDKgNSLHULPO/GKKNz1Q22z0osRL2n5TtnyWh/BsNOiHNqqQIMZASp+0s8AweK2Mret60P8GbkRNVEZ70hkUAWC4NU0ZP2C5Fcr6EQA5nW5E4CyP6e/Fae0ObI0gbEpcKUylH5MdYGkvD+6Pehcwcw6clyjDhHINTt7uGPGLKWeDIAoV7c0Shdt64gAe1wejAG0vRVLaMoQsyIJDMsd4EySSnSnYwmfS0WR92/nKg+6hCTpv6nL8qW+6No9E6tF6wTL9XwTnryfsAHAy3FciEOSAyzzVhVYpykaHLpkHQGrRlSb18OHts1y6rwhxMPGkXOShGs6tDL4FZx3c3NqWEMwus/D/9AY6chgSvg8b27tSTsj8BEPJAivOGr1hzzseoUiDc1MrcFKenAbXlJoFAmP8fQp6fFsBX7vEeHfuBv5jnB6dj8z6cBwsT6UsVuwtoEhsosnVvSEaBJ409hylKq5ya5xevEVMVnN4DpQSIHC2hFkji25YTMH9Go9bjh6HEmC/Hczn0R9FnFDXafr0IgR7eScq/F58SiilJqPC9gMF3JecOTFhYG25Lmxi3/My8KyMITYQ6XxXHlgwAa0D8VpFZwXZ81hy8TTnYLldpzAeKbkiRtHhzM/S6JyH9v5Eoq94lyt93UI0f5HZDnBThxabjOaO1+ymIsCnAT3AAs1/RTOejk60pKqk/sRp5sp6WSuuDCeP9ae7GRo+WvRvOhEzrwpMF7ksQ9Mhvoolv8HcmfsH66B4IV/XRojNkqUjM2UwYfgWo4CM4ZE9J0EQfgb05zKboQJlAUpjhZNU=';const _IH='d7c2317b3732042ee27db0ae02757e42776528398115beef0e7966b96a05026b';let _src;

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
