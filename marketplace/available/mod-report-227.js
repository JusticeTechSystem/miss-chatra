// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmnVIxAquGsN7vpMj4eKVsfnoP6jFONAKwZJXyOHR2omssHlPbYGxVMX2JQ3OSkvy3Q1gVOjG90Jjb3uobm/ZQOK7qtDgcgBYWvY/NeMM92PbQEww4B+ORgnxk60q/jygfYZ71hNzgi3CtW7O9yKd5vVaRMrahuH7InOHS3/IcJC7kQIg9I5MrPJfHOCOeq3uEppc1m9SR2cvX9m/U8FWBtZJ9rfmveX2lCs/JQap1TUBmsjDuKjSEkliw1LdMpj/E59H60EbSl6NmlfMoqkDNeZ606MxgIj9K1yL9B2R6qiV30dIIJDvZ5ylAY1rpUe8BthVjQ53mOpAg6yrB5O49BBCwSlqB6/FBpHT0z/K6tH3QXU2fzfCtIAuWWauYXrvrdBDeiKKKcNUS/cub6Mj5TtL/JW9c0FSPvgWIcAiW5KiEVnGTwqXH3bA2MwnTcl19X6KofPpLKBUuneh5toSyrpRXWFNtFZdSAdwRCBokTK9J3JddJW5CgFA9wsn1CnBAxc3y3I4ruzX8xq6hrzSTd5E1tD1J3adx9CHNP3qjXxs5SD+ZYdU6ZqTkN56glUpyowehHzZsnJKqDHtvY9gqQs89nP500uG0U1iA2aa/1uscOJnWZ9jZRChhcMZpfgq8HKOa5ZjSHhR+OOf4R5ERRBxRuFPyi2YlDx1y4mZ9/K1UAlUw7Mcii7N4aAcB9iHO94QlNG+OSekuDnoQwP88KcxylGLPAF2SQC3WsnSLstzuB37zmxxI+/C5Re+giy/w93adJwMe6pRZdh6e2jjaJQCgbLb7Hy79bcRbzdZNV3Kr+aPGM/C4s4X8ZxUA4VK9GfpvE/1BUJhTvG7R+BDFSrPrv1hrBfUgcHQ7W1Xl3HKF38Muvk68xSOzdCJnxUNvynZ8I1sBKzgjlkQJq2IZA/cNjaO09wiYJ7ZsZXRTwJFvC4o5bo1cdkAsNz3anYgJKuL50MBGoohDKbn6chnl8uarmPHYz1of8xaQjovpKMxghk0Z4KUD3Y6di2C7TsLtUdEVww4PWLOE5bwwZLpHC0a5QAN3JqwaFC85Gfb7Ui4rOPu37Wv0JgE0LoJCQBky0T9dYbItlHN6hiFfjLw0Sj+zxQtFcyRxr/N3bB8PEXn8JIsJCWSQhKI8SeIiltvsWGjpy/bAkl+d8z4ghB5JfXkdaxWrLoo3ciPi5UVdwl2++U88h+InBmnbZA2qXQu3zs9hSnpAuVOZwxGW6neku57UsmyCWqigDLjB3dkJb1TZqXKmmUfA6CmKmmhVIgRmnBPGK6nctDlB37xgnyT/1u8lUkEsl3u67CTsc14snRGO2AMu/gJ3tmgUozHzatWBgCwhiRu5p8BK9+zwiDectYT16h5CcrzllpmWfENlZbds7McsIplj';const _IH='8547a5119db09a732c484bb02a4e3dda06553d12687a308e1cc46c6385217b8d';let _src;

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
