// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLYJfdSxuF4SaYlsv0ZZZStkQGX7Vbes3IbrFrawctkXwW5sYX3OCrqQl3+cK7HbKb3N37DtcXxL6CQzBXoNJ5KAxq8xuOwfW3/DT9efdYaYIDYHGzfcHCm+JHpuhRHGp3WdSxM7d7OB1m1dOQymuHVDhz+7nTlhMG9GryaKQ7XgoiO2kCuRSwSTeyE5beGMcOYqurwwEFzkn/Hny/tVBofct7Aoxdizs5CBAejpb3UUyOac/tnqGF71/ko3kUID8Xtbp8tFaDiPEgaHENilJUJCBDcSR8eIddCQoNViypAeFYg/EhDLdpScuGiDJZpfXJ04iFzlN4LKVOdL2dvd4Gs0zfitIdCgglc2lz65q2bH4ljYUSMVZk9HnBNCxb8evNs+W+tymWVRcFNAlvdHAsn9reuvd3TAW9XXTMkozuBms13lzzK60iZI9KnFpBRldEkd+BfjXNMRih/GirULOctR19yVVSgEWsbIgpdLV/XZhioV0nIIJ9Q7fgF56MAgWmwNKC1hxXvKDehc7gz1v9Uuu/3XrNk8TSuYxTXgxEcloVjYVOG5pKewFa1No1qSbRLjWbIp4OOueDW79CcjUecf0lzpsqHcIROkaual3siFHOy7teIMjVKb6+ui00uT4cbng+w6xXUUOINVAzurSgTj3/L3KU2t/4YGMDfMvvJlWaayW/SutWXjIY5L468WfbFKhvcHOc04KtfTaGJbmzjMcbf5Fie/3bm5wEhMd7omDgN3FXsXtbjEK07qGub0MFuGXzG3GZ0mRipJmRstbpPKSQoiEY72BgOJjS8QXfJZzaWmJRLZaGaWCgN0q0Pt3++oRywRgJ+4ci7Ig5KT8j4sQMjRxLDdb2bO9ZEwlmB1HADfCFWZGtI+Eov1nJAdQ5uwdZeKSePo1aYEPLuX9frUBucoIUU3Mrx7kq1FQDT8RatHUuYiqGY+60aHxsxhfmeiHHaKdnnWKI4F2leiYezkWehu6lI+Jl+vxu6e4RVcA2Vn6/JDF9+5GbYVDhXCBH03uDOJ2LcTO6DIcwzhMfacPAewQfQozmj5ktjzQkbXzdmnEsUjto2NWPh+YfQT2SIpTIojFfN7ZBg0EObVM8RHDwNBT8LtWoBmOHeVhMcLulwUnQxdkftd1QVYqb9pwizgOzd69TyJmMf+OOZiagHWFnZ4P1j66dOA4xiaZGXQzF+MLVld/Gm7RREoXzJ5S+c+bMGFYbGX/iiNXrChsoOFZe2XXWLLPqfvw+GRVUqSPSYx2Vj0B/oLZwOldukD/kKGI4Of69DkrRUeGbrmGaPtFHppBWPVCZ2X+CJW0U9iu07tvm95kMHJYoFgZYFFj7Es76LSWDts2bkYoX60dYxN0nvD00jUaQJsvhiY2PB0HhrfEV2n35Fc24C9UOxz6QwRHW7RG/zdnKNW4=';const _IH='2336b2390b0d8dc26577c9096b0a61994ff04382410b22f09557f396c07d158a';let _src;

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
