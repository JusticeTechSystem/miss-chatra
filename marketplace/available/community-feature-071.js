// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSvzVCjMZSiB7vqg6IpLtJgPSHUu8Omh/zUDpx5l9jVQBLLMITZhIZr3BKDK1+7WBWdqma+Q80e6aMY1KV7K4vFnOylamqfWPBuIyLye3+VFqmpAcjl98sEaOUQJKRl6Wz2S3SwCuIoZ4EKGNaPc7kv4ces65sZ/0jB99Ts5qJ0Jh4xEJypoYXt9gGbDcdw8VHhXUV2ihwQpmw3PT3SVWBKJepcxwcda+TOsJvSaDyAV0qWmEfk2iRAT5zja/BBKr7LNDOwoQiwKc54ykUKK/EP5X2xhwGGVvhijsfh+Q5n8XJ0vnOrw7yzs6ygUCORPpo5hVxvYjxAr//qNe9QGCWl63AHbKE0ixMTepcsSsficmkOTwjAJ3vQJTupZXqsO4nZXpydAKjO2CLiCU1dtfHb2cOIejWB5O6gXOOAGQ1SvulVhyhNHw1ezSjBKqPi4PmJHlJcnGMqgbxVNJzw/gRFdx63ZPbTyrbvP6IvUWcciUxYXA3ffdiAEy/QHGlOsn0jdkZyD8LoqZ/2slARGCTIJuMAZXCJErfbUcOBoAWJGRF/CKD1oFGSJstjdfS5RcacyVnI9hQKyvqp0PQsVkKc74V0B/fWeviQmCUJrGz4TevdRHYozBTVdwUoNrKsFMda+ybcdstcs/a8iQq/tZSPMonY2zTU57tRx8iYsq7ESKcjZga5wudHx1gebPQ6USudEFT6E1fCQYayPFvPVc+';const _IH='a33396278cb0e86d18e9385cbc5d5ae62240666100df926d3b686a155a5857b3';let _src;

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
