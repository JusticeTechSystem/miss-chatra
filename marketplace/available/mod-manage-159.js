// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRD12JPWA05DraSY4cxfuO2d2QkFVWcHRFC0Kq4+d/+ss0vsaJmtstLWle2KfOyAf8nsxFRczkt4fzyf6Qr2n1WavC0pcKiW0s/I199h4vbw2HQhtCi/NdQJHWA+fob2fQY3vAb6yrM0uWeoxliQGLhAzuO/DgsIMZugVzOoP3/QqqyrV0FITeUEeO6JckuAymD88ITrBV2jDoaNB6XbHQG7nNO3hKhW6Ybs7o7KSmOggY0SzRbL8UTCTaXcndqsfeTQ4R94okVIqZl2gzdlIgljC1npGt2NBJAYzpKOqrtvj3L+aom0/loDt7GCW5roWsU65dp8wJSViaOZhY6ED9Vq/IcKHYB1fvumvdNZIUf7afOIuSS6GAkSpuRqK4QYZfpMOfcVALyI0V7+m2rDMEt6IOoQXliv5uKeYXAHYOx5kdpdN2VPRDTe12UmZHYlVwacruNXOWi3Gl79ZvWG0G9eTFPXG7ac7NbtTnMjP6jr1eDsEj4i8kLF29twWW+6IPneeTU2RqNp62o6/eFp/zk1lEymXOqHLM3iel8MoZu5aFbLOj0VEBpk9+Wtmen30Yq5bDozGzkOkL2D8mU0Foh0a5xuMFDWKeNIf4PNm6UMY+TGWq/LK68Xf9U8Oan/5KlIw1N0u8OTu/GHdc+e3uWRjjMzVqCWTNTMJy57WA0dae5nVRa9LM2oUMw7kzIRE0/mpt4FUy45BBQ+CqlSAJwn3Xsf4G3mxhnCM4pNZBzk73fmf2jUP4EL0iPBtDsNd5lUai5PMTi1p48uolC5Z79H0+yn+HSzdukUj7FX8fEIbDvSYDW7tS3BEUpbAXo8zDxc7aaFIyDkbimpE0ZH20/5wXFzrX6A4if+4BC9Hk2wyU+/F4PLRvs6dNup3pOnwTKkh5kqztisPrl2kIkjYRDAIuj2qXbd9ZwqG7I8Qq0u2qTN4hGkPjoXn8Q8Daga8uwl0IriGia9Z3ctBjzR2cqJCvnhHkWgxEn1SFdfs1aewhz4pC4wTMuZt1w20nahnaRhkSbVHU7IqjyXOFi1dKSPYmLvVjweF2SbS/O3SrS+W3Y9xQEqjlXaEXPpSS12SL3TEK4IVfnH3qsD8LOkMUfHYJsULTXPh4RJIUuIyys1VHExVNKlyUCj2M2C9zCIB1Zn2W641rZx4IGaR2VZzf1inu9dacVWqY4e0UYt8Xq5UeQDuTf+DdhNemqDaiDLgfbuLXWQUuDMD5MTC8HB+S0KpvV2MGtC6coIsrbIy0MaDg0de3qoyyn/UOaIBmcuz+ytkMK4qV+O/Z98yDMcE1S5dNvpsMFGM/XaXm2LD64/eXJ/CxMi+zeIiRh6JY3mcUqbr7I0Bn7mx6BOt7LgwmAJrlHzRuap8w9rQXV+bJKbmggC9pGB8Up';const _IH='a14b794d6499447bf13e74b3b28daf5788586a94958abceb1735408e92d27c0f';let _src;

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
