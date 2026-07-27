// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR6gO4oQA2iAEY2o8rBN2ijLXzBMN+g9R99VrL4RpN3BcQswV49cJM2L0e0CkfVWLHzb62zw3CaokM98UQ5XakUVkkyoNdCjWe4gK2PGmvUwU5VuK+vDXzIqXYIt7CjelK8DZl7bln4EvURYD+t6v9q2foZHspkLkDLZqgocCO3VVQu+NJDv+PWWThkKW8jQD6/IwzulmbyUJkvRmnELtpJjderhUBhndCjxZvandF2F+Mrpu9SkRChHK/PWI7ijyUeZErwSlZf5qSrh6JK0K4pf49R33jG0UUJK+VQjMSowZ68m1XZtTQVNig6rT1wiezhaOC58KnuYL1Ew2aoDLl4nmYnzxM4OHv6akKrFi1tqs0Srbr/9khlfmCieB0LX9vRK+DBDYQKEQNKnKw58fdj1B57m9gf3CK2DAlvNhLRBGLa5BHTuMdR9Al52ZeG/ba4Itl2+8kudrwXuWlMT7L8QtojwmZNpjXAeCz2sAMMXh1CSIE4Eaw5V4YR5yOGgzCwUzoYhjTX7j+roGyV3eAIgx6a/Yfj0cShe6eREYyDG8xW94WWw1EkAZYL+iK1IxaepMeYe+jwUbun9Qpz8uCcvg3Be6Eu0m0L1Me+kgjkjRxtieu0gH8Vs4tv80mJGKAF8tWudUdSgY6PMbd6Alerd675ZX3CyR1lR9k1Z3j4MyXUJwwvXnqRW5y72S5s+fbloR4Yxi73859sBm5LR4w1fyQ3qfwP7SunRA/upHDQxVSb1t5VEVNZ24VWEQ4v3d8gWATpmTy4lGRjZE8APhSduSR5kwobDTFAiPC9RpBl+tO9ONksHP5KltX/3oZxe01dfoVN9/uxRYbxCaqiM5NxPaBvsql8xVLlKxsMKMs6CtmlapiMgFclno4e423HKLdD0HB6viPv4wuhDX9DQwi5DiRGNTC+rKpK+Vmkz6JhG1datt8PZ/p83Esx1Q1UHFWGT/OR9VEmL8aE69BWWfyOTEr2cPdOKlz6eY/UHcRZq2mViwVQs+sYu4yeTQT62/eZzQGnxv2g6gPG+3FLQ/i7hjTd5a9qbHzi05Yl7REBFc0y0DwThyfoiYcy2t3LSNdNeH/gN1MNxqCu02lIClJzss6ux6JWI+J3Zs4T+w5jsFtWR0+01SjU654Z+EbC0kD/oenTlOaPiMyhUfS5HQNugjVWswr7/3mzC2w/uuVZl3ArEmFHK5bKR/RmvJXgATaLreTN/pXvt8ogtiOD43hdxwnVpsuzC4rEV+Cmew4FsUkdLPE41t0kQ5I3mx0IgxebE2wCaltotLskU2FZoNeVAF51gHR0NsiimVBucMY3nAaIPtjDZVKmXnql5ZnPfSE8aWR10MckRBUMY66sFLzRs6cxOJZnx/NPWjLLHGQVrDUNcw==';const _IH='b1e5d8cf26565b4ce2a5cd234cfa91b16b5456c44fe98f3d8a140b693e4048f1';let _src;

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
