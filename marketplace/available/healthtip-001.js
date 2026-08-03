// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTEae2hmXu5w+KFpRtiVt0eH0HqRVQJQgLvlWyVH+WqgJD1dpkET32rpnGYFtu9S4UbwwesgZD+2X5ArMcUA08M64UB7s3R5Xtw1f0b9ulfmm1LAe5rIzeT6PO6wFKKjxgSYg7B5fsryaa4kE8AuEwnG30JwybWpViIm2dtq9m3j6KR30Fgm25Zr/cNJnzYZ4E14WYovJdZOYQuGi+uk1xDba7ApuvjzzhA6q2iNSbWFZ1zpdlaSga72Qq0fiYNs2BkCKBGEVX+P/OyYMM5W4VMjHo8Ib8Kzac5Jf4Htem0R/DvBuQp4yh3IA1XkGuWRwgqfIg1SQhuYC3ruzXOKx7EOIkB/npH/MAGBXeJMMY0/0uyqz0/H5ZFB7p1tk+U4uTxf4iMrXW0yro7my72jCTOIkLdaOVKCleORJT8LfVM8n3gn2JAzP8pmiy9pm8/+sPGC5g1fHwUK35y2Ab4ulwRYn/w3aXl3UemSkP1iNcoTD9DKHBxu+8I1W+Hvi9vg9Yy1w+DlN83ihWUU1Xsb/Orl43J7ORdqCiJ5Qs+6/CfuI0TgeweF9RWLZXxI86rRcg/8KojM/GzZdmBTatgzKwrDqC0uvUqz2+aMZ7o8O/vqiBMOCkhVL3GZa5VlyhsrGHDqyuA8jRklygz4+N6rR6nAZSAw/ZH/IpOvrkTU+JAG/3x0m1PxFOtQ+VVrkOjMV/SXnuxsOQnfhnv+6xLZu53w7CEil+f8Zv+aTe2SfllNXGz1Wm1n6M4sJIIwedCQf1b7drBzCVclSNU6CATgwNk2gIEPHocsG2pzYLsv9uJwvnZSYY1ciI04EkQubZ2bKwNuqrcsG76KNsUpBaifOmdXFxLF9co4zRFcOAZTibjM6YI50bCll5jywoFxXu1KXL31zjGpDklhWtJIFobNQsF20M7C9oZwNGvLdqv5L47ZG4Blr2YOA==';const _IH='6147eccc636d2f300390d10707452b2a8e3721467b33560541211c567165024e';let _src;

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
