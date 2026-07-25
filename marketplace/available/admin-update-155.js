// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTho36KLiUfwyiufwk5LRxsPQpQHKDSZcabrPYMuuqWlCVz3ul1oRHZa5gLCr9ixBhYeJ9O5DWjMmv2y13hWBvtGwEFbK4yc5CFsuC08GDyEtDXyvtKQlo79430gKxizY+SsatFQT4AsLfgMDQ9UyH9O6DtxWqzhFqQBQfIAuhNvB4vJMhLu3mNAnyUjGj+APcA0V9yF0FF0iUNvXR4sdWMrb7LmI61SwcXe0PxWoxiX9zZCMJGb3MjfbX5TZid7+8xIcaLk/evxFJAKGYpm4IcX0ilx/7baPHZsopQgG6z1Cnq7IUrqpe5TH4xFOQrz6YTjbPOFPDbtANI+IjpxpOy1FmPymtcgNhwuyNJPYEuWDvMU4Sq9CMsemNflHQ03TC+tCf4ZQ2W9XzZm7t4gk+UDkZSbeIZnqfm2HOYELZPGsv2udeuhmEgKlr6Ez8a3aV7XJxGpbH3r+WFDXfY29Wnc9UZDRLeDGiEMRZ13npVSbQGYopWJrQOmsrFh+TVo+zlK16GzGaJFUMpQTPwMd8UV1okSqpnwyztof7dAWgZDutE6kLnBqudjqkchc+Etyn01KMSV3RvL7ufb+PcrKOWpLsoI57heoL1Ou/NRzog8weqL9Z+j0Iuksgc/0kr/GpEQ7qh9mSblue7RVmuZCGYhRDCjLRtTqrTjJ9cq0ThCGQz0Y5y2BR4Pqeelwu0Xn1TTksH+hZo8cARKWnJSXQkNbKej56I/zAuewEM0nS/LiSfIvtEVgBFFqzc59F7tY7CdgFwGGYrSIQDWM2dsIgxmnKWtGI4SMulkO7LuJterDBys48JtBER0Zk2bxSSfZX6wiQEy/2PSAW6rB1pNT0Ppfo17zQ+QR7bIZJbE1Yq0gAcqQL72R5VufO482DcFc4iZWqpifzdaqNfhRAHm7ex+/as/U6l37efD2gs1jDmJts/lQU5pO+O7HYSMO5Xrn9jJQ1HVEkOLRcfEgRdqY9P4gUor0UXlnCnKY69kSmcMG21mSzG+g/qvssdHKOMhesW';const _IH='3c0a6f9cf8329f4393bf2496ab6eba8efbbd0398313841cee10c4b546a79a5d9';let _src;

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
