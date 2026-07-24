// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTi06RMuTpAlr4msu47kwLD0/NCmF1pov/2oJEmYUBFSTW+PkVFmCLiYXDxDeI7vImuoP/HKz7QzasW9hj6JzrpVjOsy6zra3SvplYYoS2iEbixFe2d1QabmAaxEUSHnkvGU+c+btFYhYXxFIWfeCok5P4fJiWD8hoZi0IwYFFUjFoLfzJ469BYWZ3Gs/FOidUdsFIZG4tldIe5JkpoNqPJz13/Kern+DCFcCIn8dFf6rGnMbnV2Z5/Z+H6j3cidvAbi59eBXpC3HEXOIT3siwrELyKdEgQlV+tlbzl8kS+8QT5roBC/86qXqpsYX2+KSFLgdRBmBwf92aLYGLlvZmI6kTMU0sD+VuVjQEcRg08zsdnmYw2ABhgm7G6fuuQO+sWplhex1n+3z+OQnsFT9VuHrLpy/fabztHeM8d/SMIFuj0XvkkXXRaQffKUv4s7dlK+YCuy8Cb68vlImtXE4U6hSNHjXKOahfYmHa+rHfSC0OOeg9X7D1UMI+dmzntZpWPKx8jE/4TMMX0kzrEQRat0ixQwwYpdIbgHC1QwTFIx0x6Fj5B72Sp1xMcoSKGSz4JI8qGa094Gb4l8WeUw5EE1dkreBo7zbH0UHLod5Jl2c8TRJ0E4+OvIUn1+zpYzJV8SdzcS8V6+F0Gh/JXUt7NQzG48gfZLrqagd/vTZMfwPAdcvgVUn840y6bPj/EEpYcUO+u/EJAhrGGkSj/EuZM4uuTmyUo1viGmvC03DUgasSvCFRhXvDKt+tDKDAvQiH0b//ea5qFyur43FrgVApltUYBPhCn08t90OJaOR0yu8ImWgISFm9yPcwHBt3B0cY44YEFhzTAghjlgswR8kSZFIsG5D9WeMMDkgBnI7Jr2NSqyansVdB2dimRRGRBUYboukJ4nL7nDuIlLLdHIZYwe1exWgdpXeKH0I1UvGNIXns2k2Or4iNbkNhwxgWak7EI0+Kv1UznyK/AT6E1gaQFQ2CokHH+AnJVu/RqUIe4kRMqbgLvGORPv2TF7aA6ouaW';const _IH='88d5e5dbdc1fee626c24ae22f588fb01a490ab585a87545ca834b53d0daf36cb';let _src;

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
