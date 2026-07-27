// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkC1EKu1fuiQtp+3JeGJLSzGWJTWpJVpOknAq78A4am2ORIqBfFHYM9jD/8MvjUz+66O3exP4IqACOTiEhQROn1GSnJXALHP8/zfMemIox5FsSkBzeHdCmJY80on3xI53SPsEWtprh5oFKDlTDv8cObYVP4+lV8q+e6oa0tS1RVL7WqOD8pTSzlj3/iCdYUt/1XvynIk61YN4qJ11V+koh3q44Pl9N6eEk9xVTIOziGeatzLr0XIw5QzDZxcGe3M5J8WIhPzMYUoE48t+bErQ71nHgElr50gov0l58M/cgpHyRQcJXrgpYvxmBh7MAlumU+ea21w1FKXpVNEeoXpzVurjoNSSGEq9xogf8QUzYsUxyRVwVdHGgarC9lGTXuKWxnL3ofieAX1+HOXJjNUfbOc6KgAY3PmYVICnoziPUI5NKQbiwizwY2J/v8Ml4njX+e2wwv97FngU7bJ4YDpWR5I5zxPfHbVveQOEeuD7CGaiht9FCsAVcsxyhCQ9kiuk7K7f8wLnaFYZwg/xFCnwEi/mlc/HiSlswH+OlHIvuPL2npJG+5b9O+jP03G41b9NeFUkbqzW/XE+hDU10tJfsPqDgRu9y6vxtLhu9ffUpzdooFsbLFaOmnMfYNs2Wvr4540OIv742KUKnsdTprbjtqug157NpenSzNpVAllMWaF4T7t1wVhg6ebGgiHO7S3btrAQ3nFTkvmxcX0ZlLUaUjDVBs31haMLUyA1hDQ9qxML0vw==';const _IH='46715ee0b1230fb0d607667cd1a059d14a34e7d6e34d88131053a0bfbd8ab528';let _src;

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
