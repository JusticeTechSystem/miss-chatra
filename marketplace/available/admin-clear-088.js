// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u2Xu98IlIR1Ew2RseYB6CWj4j9OAFod8ZItmgNhEuKSkIwcM0uQ7Dtb0YrcWaTYvJzyBAmZfzpqQIRIl3ZObiz8GvF9Hk8uhhoYc9AoMdVLpQ030qU9ujUKTCuSOeNOCSO2tKl9BWjrTbUAw6DF/zWZY1aOIDXGmVf4ndDpBuuR9ZB/7omWW6ph59xzjgCZcCuqbxJWedvfel9PrFsrxOL/gpI15kkSXQe8ABoH0mrE7Km/RofAO2xYwbD+nCCbIKboeOs6Ex+9JsSZ1HWwBP35VrXBqHG4A5pl0FBzUQ090uJR1BhWulA0lk7LZnvtCqOEPAXwTlYwbdFT9jWURQOqYtks/6YNiQWqk1TOR1fK6pPdxNlGwfoZ5RmlR8Vkc8IjMdE2iReHRe2oracnEnwwXbLKUnKPRSFfb9idIaDBzqxwWDDrbab6EJVLI17/dMV5CddaCwW8d+Bh4NcceEebCnnLEbcs0vlbIKYYsFBvzyYjKIZeu7yEmHFIKkFv4UoDbEkb9Pa7XlhRvGSNZSHC/1YkqB+ODB5It1c67gtckLWIOSsCt/Nyl32UTmlqEaXH3ZlVKmbzPFLfDj2oiCQFxlnbpsU7r1k1+exrtI2qh+Kcv6Awvp2WtLDV2hQ1I+BSYgVYkBFmws4tZWK3iEvumWCkzYte8R3c/0y4qP0kqcFsfrge+3I95dLTpqgS1kwZcT+nELDOHUPuIWrym54vwzlWZlqXABLxD762JIpcT6QeW0z8RHaNWodzKBhmadZ6G775SFIjzG10CbpAcQf5gIUs04Br/iZgUuToVWaHBk2x6vFaiXSG0p6UIoCZ+XrZqku/F0Z+Vi1dofcJwyRTUgE9uxWsanun20Wc2+PIIro7cVDO93bnV4ETDw6eRyPmnNFwKE1MkMQ/L5j8lLR9ky3dH8JYtMIetj4rB86fviRTWjrRUbX4JY62aRGnR5MOyuVTHbQljXfXDbmzo4vqz3bKPVmIeVoE7XU0q5CD0EY0ek3w=';const _IH='4e770670253154d9e7b111b102bd97acd1bd50f8099ee18ea3846f9ff5486bb3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
