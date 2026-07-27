// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhow2P8U91Kqs18mVY2uJ4/kouz4XsAHFESYLhVno3e3aJItFG2h2hl9t7yIg0oTRc3tmmXGZRNy5lxQ6fwjyvZ6s1TvEIHSNfmO3cYwICTewO8q3IlLDZd4srfxkPJmOkdyukJHYoe82XLjFlfkLS0Of8d5H1+1NrGKi8W93WKyJVajOFpxPyx1wECA2H6Bm0vaGhU2mljn5QLrPN7m7EeYVg091wkZhLNO6RgpKsSQrhwdVhWC+oNnSou/0HeT0J+YAYi5GCoI9swPUiFy241DICgho1E41J/aWHmHl3v1ReJRs8AZUlIgt8AxRSuMdV4+vx3za0jyxmd93Akl+LtmwZ/Rr0S+fUrLyF6Pke5YxCzc9FqMEi0518YS/WG7YkGqjc0L2d6WIR+FRHEPA9vH/s/m8rsTYVpTdRPY0AZaexa8ekgJjNcU8EUIkvMKchgqymn9GBwbgWveZS01nUM3qAijWqcp/a2ZWf7gFE4TtJTGCx7D+gL0qAfp+74OXye5UwIEP5PGKW4Ci3sK2J4Du5RCTrU7IVjBg8+HrLan+CVjB4+sw+VL+6DsuAnfoA281BO/QKrkkkfrPAcS16WocW2uEdceWueDTqmKpg5KlDf29cs8AU2Y30mLh5MQEK0i9nc6bre1KUSiVRWP5wSzZwgMKp8o5q3M3gL+FjLlOFf2XnidvT3q6371AVdV5fG+fPZeOYX2+z3fzVHT0pZaSRwZRsBGnBgIJGNFk+2rUv3Mg9TkTS16g=';const _IH='4b35e9ac804c6be6c998f531618e942d5d8e30d4529b8d6dde2ab6b1974fde02';let _src;

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
