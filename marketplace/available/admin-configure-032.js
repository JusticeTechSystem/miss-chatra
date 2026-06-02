// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aZyC8oudNkOSPbgoREESYlDMN463Ph1pGz9iHbEtR6DZdsF3rQSi1Cw3EI6lWYK9R4+Spot/24qhHnVXiN+bBSllZji6rs9LiGX2S/JWaFP/hrZCJuUKEQKAqv1tfFSonmgzn4LB5kM8zbZCHJZfuLhjvskcOdU5AlF6HB7rRWjwjUDsdl3/ZyWJAKGzBZFmiDHAogMrE9/bab4sadRDzUDhUjWu3FoHvaCEabtYuZMLEl9NCHl1onhQpNC2Aedhe1eBRNkL8+lzYazbv4zrtbeZKZkSFsb1MBKjKLumH9UA46baV8F5MLg+rqbgwehu7oLLh9oeFqnFR5RyMqFkHaboTajrMPtSSg4HNJLN7IPHGr3YdhXOA/lKHtguvaAySKL/BvqxKj8inChCCE9EctzW13MEJtF53BL46KX8xZqAlc04VD3wl9XU2tZgvPkhxvNVxTQubtwMj9BVfPjFWxrF32iulJhVwF+w2oH7jUHlXKIdXbUR5giCf9oN3porRgazkzmSpnf0XW93FuAYMosIS20ms5KGrg0O2UcXrZv1UbzQJldsAzkP4ryFympfqoXlxyfblZ3tGIc/4LjlTihOUU4uQQo1vHyoIobYFi1h5oYq+r2hk4bqmISUIrorVgba5VJDKIs2FbdyTvKh3/ymW3D9c8ZCyjz1/ZWJP23PML7ma9nyo+F5iS7JM+gFIUYPYE7Jr4M6FjGOLo5yJttxi+mDLkdL/5Qt5MEpYfeTdW5SYanU0SdS8wEXvtRDgLoi+hs1uEpg3LMF3r3mAr06smsbxs48V4gWOUzN1bjQskebZ44mMdc1e57rjIvT74Y5e6ytokX4hi5GVgFU7KGcylU/S6SoxTmkimVBgggxDPGxpH5jyAfvkDY8Hb7l2MrGqGDPIEDl4ay16FB6Yiug9ajuWd46TVi3lOgZRWZF3abJCpjwwDr4D5NDbeWen/jgRei4UT1P43TLVZS3XN4+PCi/L44GFndY9lgme8l6459yB2SOoC88aozlCMHZRpgUJweNy4vCGm175h/HyInU';const _IH='f0649456974d4a5fffb4053c1b54c35ca90314c91c82d56296fc21c3ffe874ce';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
