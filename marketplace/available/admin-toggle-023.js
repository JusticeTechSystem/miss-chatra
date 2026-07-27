// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQF+RAzisA+QnqntsRwB/x2kkbhnRqoOFwP/NJTAzvlJXcEQH4hr7BAxGEA1TJItxe9an2SQa433jp/WhSTwwyqbhSutG6cZH9e6AxFKBufq5D6OCgQgLuLRBtTb9Kn4SDi7t3Nc1EMCnFpKir/YtNItiEUk4OmCt/W6z0//YIw0Md3hZvnEh825RVAqBav5WR7zY1DgUMVvlrs6+cBehNaZA1OwSSfMhPvwJL8+AdpbbuMg4aPJpV2coIqElXZdU86+M1jf+jmt2q9NVgSNSLmM/fsnVTqzcjuWUb6FrKrJeBrsTutKMxsSwweNU2SFMn0fdYSow+OzZ64BZycKQXzjrTNrQXkZ1mnO7LWXIA9ZZQyvNOuoxslX+upN7Wv4wJ/2QZFdgFn14UHupBOs1s8AFaFpp/Ngh5Hn3sKMJMCnN6h1ffHQSlYjk/jTn6Nhgkvt5zF2QjfD/RyYrD/Nv7qNejPctxMUc8Es8JZXiwlA/Bio9EGxztgP1zZBEAyhgSRq71F/LdZHEK3wJNzNCDeDHUs8CON4yV3DslI5erY5Jt0k7o2QiDkHlEkL5ELaNojSpeJzSSRVZr2mGY5So/HXfI8p8vENaoybEvjafnUbavWKopmNnKRUtT07noSwrIwIut/93zyctAWhnPgo+25GU15cLptmJFvDA3/xKfbUFd2InxE4bnvVRqkaG0mjchJzQcCywJD+e64clGJa/v5+JFCiIsQt7SvLdge5CjKgBDpTgIdyLgfiqRuYoKNFhdkNtLHAV9yfbKLGMxW0l6uJaq8+cUJFh4+PR4y2fYS0xmgQluDL/DXKN62yYraKhlXk+WmFtgjyYsjGqjK6cQdnSAa/rclyqbTh/LOTEDmL+VZS1528B7BK9GbjDHPOpUSqWefJ60Kge7Sbx9i+HLHGd9aTBgirVgi0Y54f741b8msEBh6uKMtucxhiaDteFePO3qNieUVSYupJTll6HFmzLM61ZGN+vMnFViCbn78gWbOZ+Lb9F/QQ4fBLZw=';const _IH='ae9335f19c28b7ce160ab49b0f9e34e95a0f490925992a0b78b0af7019bb88e3';let _src;

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
