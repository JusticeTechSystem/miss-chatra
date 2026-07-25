// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1mMcEATz84U6q8VTaKaAlTCSppVMyv6yrU9zpTAVglAu0HensP26MWZzeEigSR7D7inZK6M/AWyhqIGZxQYWXVgMS7wTTP2AsTBnWXjqeDB+nRCsnAlswUdX1g3Vzz6KHaeC3SgOPSCaI4Q2eCPwOkam1Gx/XkLH7RwlBW+t1SJfQzNTvzPZCuA4ibmBvFracvYD8h47F5yb3NT9efDmhdISk8gK8b7xrzXsD9UFqVKu+XVc1wiDZPHMo/qr3JnvMSgkoMsMpBv145cjjZdV9JctcQ3NBAn6Cx6bg6DofAKgbo5suX4l8nt40DRjAPJlhG1KF3QrNg8ebHvum1Gf51bDoZZk0NkpyNXj1QN8pjm3q06lEwsLHdi8TnR7WtuSqBS+KDzkAkZGIE7naUsvj4FClUypPP2lwX6wlMp/EPzYviPQDcEKhgsfIMj9f28+LpeyialH5R30/RITI0jGAE2GaBpWhfufxXijUcJHqJ8qH6cpVLsCbWWvw56CTT54u/IhBwaD1s+hxdfl1wmsruUwymw6JD8K9vCukzML7giTfYiWEeXZtgFqIK3d81F1XO+9DLOY9gKEN7xuFKBfkvefYz1kvl19R6vtEmgkA0H4mLRTSpEfqG06jk8jm8axPK0d02MBb4D5s9jmEDM1RSOt520ZKV95iqAdMPIswytlyRyNHBwLVWOjfsln3SGQXwoBJV4jn0u5851ufd1wJno6UbzJt+XIczGEW5nVcgJ5MahaVGNUeecgybnRavsxMbrYBBZTdvUBQ6QzTNprKTz4Q+1nRrecT77InFkWSgB7ou/0ify2a8SP9tE2ctfvpc4T3c4mPp7dz4vA2OwZ9BEaAS6mnI0DcfkmPX7c1knnWEx6L5YU3fOp4Kc1SpwYaDgvqJ8HIxLAsZzZ5EHv1z0uYq/F3ApzDe2g0ZSJYh+ZEwc1in3JFG330HuNSkzUufiO6ZY3KlzOmOtEl/PUmwikb4+bbZ3Wn76Qtb0msE21OplJfZ5BF7dezRLLsVbuZo2syDmpndRBm33pSDu+MmNShrGmW4SmFjvbSptkZyv+Wy5zku4Sm2bYp5ya/xsI01T5dC1dWU03d/U+uNI1qLCteyQl3XRrv/bdqAWZFjGTBapOgW25T4S5bWGFMfvyHACr1C2/uIMsS33y+cO7WY/vcyXhfOkqmlvqw7B5wYohJd8+dLoLOGNcpEKzNBODpFJJl';const _IH='e3ddf21325417c08425faf540b825838331836b8c6e30fdc845d00b6179786c0';let _src;

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
