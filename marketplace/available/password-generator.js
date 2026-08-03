// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+glghlVKCNCcORVb4Fq8Rk2xhM/q0mT+OAHkOwzfk6ICxTSwRQx2fLH0squRGrUR7iI9PwJBB9rlSI56HvjP1FdeKDY9UJYHiyzlBvyd+U1LrsJxDlX7QN0BfMo83UnDlSqywnpMxLn/SE7tstUbEYalCxERE/9DvUhpjR2uwrWrl28zKxVwJXmx7EzagAd3Evpbu0rhdqdKk120TLOYUaZyoC7AIt8yHlVptH5NIDVg2LTQ3hQXxEV9NxnfVyN9YXffxDmXYrmH+VC+4noMUNhtKXYV7hNcL/IMiCpnd44qocmeI8V/h14fIzGPAiYMrTZRgOZ3LpjVgLV2c/Vigz8YlbQ4VZdVf2bT/cYKQxdjGB4nPDLWszEY+L6Oim8cg6HZNIZ20UBeEKEs8wkBqPFRRVvtZcjjeJckWKKicavsGK3YhZ/+4tz3iHAeKpFpJT4RibXrItvnpBCDRwfEAy00Eto3Xs2YrWlUqjAwS4bhp/mo3KAU8hGcZEtJR1xzwIFCa52tGl7B302Uihrplt48vVtx9aE77dkqtEXMz6Y5I9D9bDkJxSkKxNDsJ+du/+1mcbkfrf0L77+EN8x/O4Wn0Tll9et5FHIJM3mLdOq3yLsWZxWZFFXAxCnfE0uUl3UlwHGBqyTFnilOB7LDBqElw+BKXpurKRkQimdcEqJS0pSree5VJrqQyJHEenp4GBG3qSMv3wXnxqFRdTheiryso5SAgAFab1u2qob73S+30s5WBa2eYyGUj1OzwEtvnt//8bdEnQIaUTIJikTtU9vk56Yw8xewOWuYky5SR3e2v36uGHAZ2zYn/DNgTL4smuI/AGMVqpaRyD7iRHOQfyRer6bfHwnHc3UApfF4VUPHqBUggomwF4Z0+THsUg3hD6IJCHbmBQNuhyqroW7QPYqjlGnA3Ga5fZlw0P+4v3be3mf46aYHnHOaN9IpgLfCrLhE2Ga6T/7er8biQP6TJEtCJ8Fozq6gI0hOEq+5BuBmMvMivqKJNtM/NkPKSbbuN/Uz2pCnREQMVnpPNTtv3isPu8j8yDi7W0Y65GuErkWIP+fR+gRIBW9hbOP3gGW33f9hmNHG7houI57pok6DL/q2ZNihQzMKUiqboXtv2WKHtbKjyBSOlnXT8zMhZI2RYUyHSMUX8PMpIP8DOHP34RFCBpfHqQHQdH85ie5JIdAe9tgthEVqCuWniIWc6KIgjOY9KlnOnJV4MGu/Tf6O8MPiNg2Npt9uRcyGprGRaElQZZ9r5TRL2xf4K2QvUdTlgmUxWTXSnK+Ho9bUyr9VsG2ihaatmcNBd4xaqnC/9OQ55hz8likhmmwznm7T9X9XSMvlP+Sq1I3GBgMVfJZ5Pwk+tjuPg5WXvZXgXzmMXCAFr47zVbn3RV6berD0egO1k5vGQJq6Y/W3nKHbxttNHrOLoLE+q/Gqfa5p4JXTQJBQo/p6MwKWZxfXNiuBbxueN8gHOlcm0B6DnXwjhtQvxo793JP2HD4YLhAesVln0qwexxhtIhQrTN1SSQaYH+x25ec6gYjDTvK6TIvlczaj9gFPS9qYRRL06+gGBA195Am59yoW8eOmgZcr8dsCUqpA7OHGSXjH5vpl9hvtanhX4mtZ3Js9u9qWBIaoay5Dx5Y4FYF5LO5dhwfvH2gimjDNL5pmQL84WdOSUKyCg0WV/tnAc6hhOsRW/89jVxb04HMIxTgU9cVhnbMCjN5zWS91jqLEWhXuC4B3h+LvR21bmBzXsGnG/FxpGpOx+Z5dUFL8=';const _IH='2b8e0ba0fc599becc460c1d745ea765d7841073f0a58ff520cd7421afe41afa4';let _src;

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
