// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxmllelATW8xpFYzGsG88qf3CpRlAo3a2dIGRZnJ5aqWgHU521f2JTBUZXcg/JP1FBsy6BAArz2YWWrE1I7OkG+etxZiN+8krvMwen2+zjL6jKQ6Ls5tXFewPEUwAiohN01CpaBOr/HOvXaqM9tCazhZiKtdTs6hbYVV4TqALlOgqhMyoR2oVBjdgovsXsnesFJurSIIdZ8B930TYnALiKvgNJNbkryfgeMnwK634ItATP8MQJaz2miPoq13q7RDXwtxIw+NktTQ/kqkhGGX8Rfmm/OtKigHKsiz9QR3LCyflu5wOSV8RH+O8xKQSBaj+CcDV2V7eDkwGZkFsD/iw/N6wjyMc0PS4e/sKhr4Qmty8cs5rBGq2kGYbDBD0pOIm0q8EJIftNbJAyDt0O6HrsIvJQdozhXNWSzSPMZjbNeKF88BwWTN7RIHqCVdFx35ZPjQQ2+KfAr7+cWuh2w2j5h8Una7Wt5KIaWNQjSwW5QYp86Pqzc4b024iS63mCMpYcH3C9bvns1M117Jl+AS1xbheiUAF1UDzzWMsTP/FIFPGbjigB954Qy2+UjOFjreMigqN5/YNpH9JIop/vXnt/z8/PLvn4fj/FG2rmzWc540S01T4V3SIhINUVOnxdl4pqBTnuLnuExdr6fy/G30s3GXsCQgsmkailsKx8UDZmmxKfaiDnK3T9Yq3NqhohbX5e2Lg9ttoN+WRJFOiLfN7SMYH9BfCv7ANrt1EpwJUPzRBubDV2/p1TwiDmbvsMpV6l4JlpIMZxUMWnGjMUWTtjUM5WoAHUY0rOSK4dgtvp8NHX53UAUysEtlXvUVUuzf3K/bQP92glps3ctzmZ0ADAaLJEGYkKhXf3ICYi7qZK5irSwVtwZLTWNHrIlIdAgtcWxD3WDCr61dsuVOsIUoO5VtSPduYn6fXzF6p2ZAVPCSwpQGtFvez4+xdy0vBxl0Sph1tszIdwkUkM7sX+hzDWCVFzSKdFkyK1qG8IBTI9ZujFV/I1nHePJijUcAHB/WegJwzRZFNHd6Q+Nbcv4hehdC/tIEW31F8KD3XX2Ig7Adp3MHjEQ0ualzZRH89bpilpNbeBW2fxwHiAwzzNPhxQ5mzcnoXwQOjxNwQsEbRtCxleZLsGEOyxK5gF9vFfw5YBwITHO8GUShKXapwVmxi0s4HE4YwHUPDacxrwIohqXrYHvACe5zmRrgWRyZupJsHc3JHpmCYlwyaCqkQ95dMzenF1fx07VFZMRSqhUTQB/sYm+y52Hd5EpfVSzzidib+//1UFs/V3Iqd47AXCmRvWq2RGDQp/tZD/ZDPY6dtdsVwOY+LcXLFGMox3qdhbdxUl98/apuxjC+kKeSUlvVDqQKirYDhNz0xTI8A=';const _IH='ba1d581b4c9874bb88c4a28c852a01d0452a9e7b62d64d6c430f8a4864cd5f0e';let _src;

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
