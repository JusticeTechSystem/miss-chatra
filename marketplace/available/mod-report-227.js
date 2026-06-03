// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VYPL74bM/nOBH7wBxP3307c+qyhcKqsmuKC+C8YKaGcvK7ag1GYiFp5ZXFm4HwY7ufZck3p4pMQNBYk8y25A1QFHEqtHFKTukz3l8xuucYP1o+9XbXdnVFdhEZ5jiK6NsHwejSCAlhWEBwZ5N3GfSMKqxYwa+ih3tAeVGGQYe0lU9R2nqW6HCIKxxarcNJhYJ3uMg0PTxBEIw3hh5rVhrpNLhzoPjr600y+auURygTlGJ0eRIbfO8RgitWMDHKNq2hR5jZGZlV/RJFm9h5YyA//KoF60pKTtvgUGUaQovOFF5XGabA1HSsL690l5JgkKxR8nzruQT3DDrz7941wZ2Ii2VoPXPmHCrq2FkKM6OA83N0KKzmgRLIzx5jLK+MgHa/1IWHo01H2DusX9N/hByIsmwL+wDRbo5HHNeSWhnJ31Ih+Dg03EbT4sAK9p7XLC1lReOUhqVt9xrztdvyyPh+cp9MxRmYwXxHd47h/FnbQPruvAdltRzsIitsGY8YRXOR6izYSGAE0SKTCvl6JQYoihxlh0Zq+dflyyCqTslRfkN7BqZiWulCRkriD6UsXWctVDcBKBYjiLl+bzLoqgWmarug0CpsbeaGI+6GtD316I3gCA5TFYlbpRIA79sKIR/jGrBmJDlZKAr52lMAenYJoN2XTk+EUobguX3uDp2IvLoULglpaZzBDNAkwLyexI5wdN6x9U4EPPYoyLs6PF5/11SPeDexDjUsIx549ipzTtF94Nw9DQxDCAH6r6qKMEskOq8SVB1wEhoIYFz2e3206yH0jk587n3qm4Uvo58OJWE+8XVGGuFXyhisv6Ke+IFZDD5FllAuYV/zktLFNpvhIwAVaRsV8Ch3c5EIpyQ8bfyS1i1x/MLFqgm98BjysNTavQvMityFQi1Pf3pRquzwpqZtKPcqK/aS9yo50vPc+LHmcv/xLTQAon8tujCoyeQLRDl8yYyMPY0RMJThLrjcFCnD7FVXKSC31tXbgZ2FX9GxDinnr4culqsxTbDGzYyJFGI89F0k7Grd7IAmhhxuHhnAp8/7uDY3TSrmqu6F+bW1nCSkl6N7ZmGTrCGHL425s9y7Zn8PD6uSwCqIhb3WWbwvUzLBeib2QL7afPh1oFuQmBfhLgV2hLLPW0PYrqvzL5AWCrgZPw0/MAS+NIXs2Fj7p3HSSJokkHvAE/uS7i12sKkit9/jXOJ0tbe3LmUl+lSUeeYEYNz52C3J3n7BgOGNx5YYa5BSN5UFfbyXUxqnDBnDNqcirnTFFLWcTrFRAAcXhi/bg9twvgaS8nXSNWnuYg8c1C/p0SNJ7e1x99ykPLbVkAv//JomlYh6neFF+4NiAonnuuvuRczrpD/h2eC8BQucHHmm1Q3TvDHdw+O7SQVmyCxA==';const _IH='85bf766951f24058fe71affb5dd1d39ef00b1f8dc7997f2ddbecb69f538c9926';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
