// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9G1xZffJH6+N4LVMi9zxZz3UX0HL1DNQjfolWcVOf3vxLbF2hdk11nPAtWLtZmLNMrka+n1wAS6rR7WuOMBaQiIxJ/WUUYi1y1x3XOOI6z0eOeBa9JaT9dy7x1CVsU5ZXwOoqi5F9lrmLs3S1oZT3+x8itGNJxo7mA5IBplWqu12n4xstgF1IR/fvPUzXc1taayL0GO8ikTseILRulb1hs/bw32rLrLCsW7uJu0lwjF+p3yQzlNv62zAvIZOrU6sVot1yELw4cFEGBMMjYSKjSdJYUGw0EXBzYI2DLTVFVFtuSEFPtNGEPCqAeVJqic3nV8d6M47ifhT0o3+Q+unqUc0oppGCx0SqCLVxwsOcNJnzTvha0UjWqcXlFzreHElSHTzbaH2y8ogfa8WdOck8OS6d1Kz+/CxEjcdlOxdw2m9TtCwosahmZSoGTSDmy1pm3nQAsWp2RkOAdpCJWmKLq7/+A5JJhenoIN9nsTMaDf3JWShfLH2IFOc3GM24BbwwK83UgNkMYEQ5vtactPhj/Z0FOvCDi85d8jMeTXiZx/G5HE7XG9nZITGvDQ8VYCySWNC1NawJ++uGrKR83CrSYUfQSWFGPpDg/NOJ1211YYuabTokPM+eUoNSUX2LNWt54vzOP9nbA+rx2zy2tPJMi8epzHSby/OBH/mwzhRTI2H0ZKHwOq9FPBMU3OgihE1SIHKy2PqUfSHR8qGPmAXME2GRIwbvpnRU80KaIHk5POkmsekMKyQto8lBOge4hrMRJPOWvPYVU++JRgfi4CGMID1pLOvwjOGj/GiRMi50p8DKEFVtLuyve7ME3VIHAfOZdYGHfEViJ3nAAN877F11qA6yld8EdC4ggLx9Y26E0aSGYKdM/E+2LKsdGhOL9xe5RP/5gh0W0tWvoAUsnMpovmPZTO80qyzS5eIgPSJ6/Xy/1kYsB4KSkhsx7IXOHAu7oluAw//DajXszXLzmSGNdubw7FOYpcrTlJQOUOTWbbP6WtSP3kkp2bZST33m8OfYSoPcjloewabG8kbnp9jP/CrxJ2fGjtx2hn+2BSJ5lt7XWyXr77UYKlzIwKM32ZHSQJleNzlQ1K3QqU/kjmpBlxOjX98ZatZBLgAptKZ4l11Ux9ll3SOionvRT8RJ/jXRsRGgCsnYZUaYD4YYBlbfaLOt9yDlUd75BNJZrnR/hrKbHqiGjDWwaiOnZ01EcAHNcGncqVt3ttJvb1WobuJU3AlRE6RuxJ1fKM7JhBg1G6rj4gkKEUaBA4I1VSu6bz3tbKbOxtpcm2F73SBaTs5LlAJJIFu5yn740JqghglUj7pD5PsWgZGMV9x1gZQ16dNCTnEkOg9U/zvIlqgLCiqFgZnSNV6suBi7i++TV+zDeYxOJo=';const _IH='b6b7aeb5dbd0698b2f1cfc5ee749a884104ccbbd0ec373211a9aad1dc63c998e';let _src;

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
