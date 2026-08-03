// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkneGiS+rDTmu34xUUNr4cRXqcr5sFUpPS/5AWHEkRmL9tCzEY9xVm9uNAqrAT8c2tptvrld3zHcMEXPt30gLTGLNvwCr5zjosMdYthg4XFQoWDdXNUaDWj/h9R4oowEgvJQGNlOYTk1DrHa0jWUK77Mv66oKNRLTNemvhz2nOxtcSCcdyH2f3R4uzbQ0xeydFpR7Ig1f2y8OW9BNnSFUxx5/QGHOMbITXLT0R/IAQMhLyu/0hxVlP0DbbhHYoyFrm+gYDl9wVzEi1DdoRJwvk/7A/PSsM4tjNH/t6tnv6soEMutFG85TEG1hL9bnWdGFh1lqMIBH4F8/JOJynRtSBRNEf5wCkiLoHWV94iLmHI64kG6bwmfEFZ5N0P6SmOIhy63KB+Pbv1/Hn3ysXQQW0I729THU9HT7s9j2TavqfUxeYILcMH2lUg9amEma2tKME2Yp3yTveUU8UgL6+akaclPtE9MM5hPdwTcB69LhTzua1hq2R5UZwO1YM4UMFk6/+xXwwmh+/0/if9vg06shZD9ltMktWLOhTHedoAC4HCAn2bobRdodAO52IUsg53AbRBsUFRi5OqxmdqyoRbxWEfWP0d5VNuPrx959aycmo71YJqHqCWT9kGofZ5IXxnoeo+JwhQTow+6dL7THrfFaJPC8bKga1lqzC8MNGAHzkPmcz/2QgKEPI5X5dnz8jfxzRA5PEkMQGpUbLXvuWDDmdIW5AN8tsVKHSj1gWC10YTEU9HNejbia/RyzdUZghJU75MTww4VC4hvD47NvbblYyb+R9Gcp/UvOppbj29biZS3YGHFPYiPqwkWo46oCT0KknmIiS4c1d9S9I3uuFKPLb6i8Wtg3Tt3WVOvsq+FUWaZBcuBAyh1Iw4HMZN99dv5C4Xx//b7R8G6zYvX7FcQ7sNYp7cu6jgy9XHcfdnt4HIpQrU6P7LbEod1x2ueG851t+9imsS8leKEAqSu8k5MZF1HYWi/KoEjED+F66OTWcHYUYvdQ=';const _IH='9d4db5c112b269cd1934a92387ade015570f8684b5c75e9debc2065fd1e0587e';let _src;

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
