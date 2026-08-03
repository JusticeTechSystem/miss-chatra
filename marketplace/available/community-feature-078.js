// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjST6cM/3A3yjQJIBlvub9/2YJ//BlOWRLz38LeYgZshmAWaiyFj/6NEhmwjgPKe8GQ0oPfuouPA2NEhABwv8ZgFEvHysG0OKZovXHLk6wrGRJsA+usdwpKnKkeLlx00ek775UWwjhYoMBPxTse8xvGIGRRet4J9xE6zZAqwhFy1taWhI1dgYy1QaQ2YuNb8k1/WMXZIdBHvzKXcy1xOIe/8I/77ri9C54Ds0eyDZHLJD/KDs3eO2aWqeaN+qBGWsKCFj4A6/thWMsRJJ6Q+4Dkq4EHk6jcyXnIlA7AnHbx0j5jjBTNFRB8lONCfHYRvKlq2BWLrmOrz54NBsk6n5Hg1Xn/NwW9dpqP+HqJIF2muqJtZqMbuWmSmEyJZggF4IbkhBiofktqWKgftPxkGnIDPWNt69OhqP0YgQ1SO97GiRRq56QYZdD6Vz/+QGlSOxDBlINiXmOjjdZy7+MuYfu21zBFuBbTFTYbPUR8NtQ1aLepZWbrnVG8219dW+bvTK9ZlSIxduf1HkEX2sO74L5YM06fHOZgrVVADSwOkUo09cb2vHBd4s4oomHfWzw0hO4ICqXU/8ONoeV26XpUKJ5oFKMlDZ4SFQsgUL8L2YZu60W+b6Px7Bgl88T5Lle8yFHMXn8Kq25i7e4Tjon9uHMZ1LMTndmyFhiNEt0BZ8NWReY19O3r2AH1FtCt8Z0YH0hhnvW73pC+xmYbsRUqivLNUPt1X3Pg=';const _IH='04ede47f4e71c492356a0292c633dfb1761df4240eafe91c2cab7b3620745010';let _src;

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
