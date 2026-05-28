// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Fx9JbxL+KLTgR/8cR/sN7RYBTdJK6ymfxvhRrsBMGKuKQ5yPTNHMzf+Ejb+yZJDh8cjHTI0ZvdtXArC0cJMF11yTZ3ewkLV/aLJLW1iGhaPkPCCZQW2xucnC3ydd7zlVKShmCGRRuNYlQvw4LBA/0LOFN+OwKRhzTARUaqRL8SX3zQABUfMFNcX5bI8f3VsBDKeB7nBnM7bsstZIAluN7u4FRBgbeC8TH/GZsUTID3Q39pqa/cA60rG22aRBk8uIH0fhJkKFlJPK9D1jJxLQh81Rex95w77c1LP9cbV1OtZRRwJ0gZ5ImWM4H3eRkqqE3aoyuv57ATzyzjd3RP8P2pFM/zbMGTjvj7gz+ehjpi9feCIB9x3WorYkCcrOx7sLAyPbXuRB9Ufd8uIugaGPtRIGdFFvm05bOKgtJhZpxzcFNEnl2OvzkziN7yqj3i9LrDwsa9CxVRhWl3rZqgwxyjcXsO1io4wcWp9byqdzW8qWYzOI8kBx9fD9PddWjOcX+R3sN1dsSgBAh3L8qOHUR1ULMCFElv73RUjrLoTtSFVrAFfYvXjlKVxolKDzKH0ldpiGD6n379IRATeBfRIi/ssCVrBPpKOxVx6KOtzF3PeNQjHhuBQHlPC7r1BKM7wUZNEphCyVPt0mFRMX8XnSumRRrJkREBYduhJLwOETS+UcdMpwm6s/DKjoKFUdwtUxTKnEbA3z6W4vV2VmsGdbVTPN48sj7Bp3kaAIIuGZk3LrqM5jOl9rTtv6RT3XBb1C8CZBj2n86L5bmexrEnYQiZ/B96Y9WEDvbCDZZdM5V7RGPgJVyitGpncLt0+KVnrgk4U0Nqd+SSE8BwPEPcUd6wXA0o7wcCj7RbM/Fwioi7xrYkptSDRbLwGs7uRG6iboNRC46n6fAJGDEIWrxZguhsUavuhylFLl82ThNwglOGxBSUlMdqEQcPUv8U7rBUaqEfbnNu8AXESx7vdI4y4OnM95xS2BD/rGDimTZ/ci1VLdX26wmpzVtOKWX6WCQGIjqPJ0zwR6t2H+pFl+tKjqam/z+7ufETztPp9FfSaN1+/CW4IFVDo3FXPHZbCG3G3wvGX/Ue+eeko+aBXSHd8f/lv4UANMkf/42yhtWWu2+XMz9rUTZPwBeV/3xaUh8bYgRqsMdh/D/8p/AFNvNOF4SuwDk33TfBCxxKVWFrb81Sz+UvEVsg79cGFSTVjdSZeSnX23Xd8okHJ1EmkDAD6O6zRknnRwSD/3B9rihdAZi2rkRcASIEhKUCrE2UaW6fgFkCq01xyfZpH4v4Tg5X+WigF+K6CHSowaSJsdqSEpHjamq2DHAYEz2iGau6CmQhnhWEXyvqfilrNjf1YO1bNgBZVJVqAoVS5BvMehT11';const _IH='afd86209cd1324bc35d98a7b03c202172dd6155b178d0d3b6e0779bb41357afc';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
