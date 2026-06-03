// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bTwwxjkfd95Cs+30oiJv4m1Bl1VhEHXhNcVqOpcVOMvsgrBQEs2p0dTUh3N2cqBpZrLZqpKaohhpTP2OlmlxxmlfP8yOh3boiAFEHuUZ6AU3Y6tVy2TBZowT2aWTIFpatQiOgoKmfN13h4ztm1XCYrXS09vC6b7MzbRom+kArdDjhBKpW9VqGSu/HIT7cwY84yxNTjAkj/IpKWTMDz+mA4jZE/V3ELzzGTlU3yTIDZsYngkoaftfbuHz9mhi3/vXNWVznrfiH7d+JwyGvwyEyz147lSBVIgFUx5Bnqk2j8Z25LF30t+d4WsyWWnsQS3lFeXXN7NeSUJDpWPLZzYWeIWH53xVT1andlKiaO5WU8dfSykXywEFBoxkGulV2Z5QXYFEU5VfYzwNBRmZ5l32qCnBeLx8EgV9nFHnvvt8Ur2dIEkVnyQDSHUYYQq8cmUQpGxKE2lWb7UZmlsCU+ugt0m1mfp9KaztiMZ3IeYxsRjofj3y3EigcZbWUVZHfTRjELxNT0W/0NzxseRRKGozE8jxZF8mkNyr0v/ldVTlzDF9i5dhB0VdPkn78jax4AVnQHtGtdS82ToXXVZ74l1T52E/16U+ZoAS5zpeD1eOZtzV1Bi6wUXCw6gVU1TPa2OFUHDGtwTnzw4JdnSTL7ftJxvjW2fwgPc/yJtu5cppnt3TBa2D5QNX4Esdt5HXg3HP7xBywQjHqIhrNB0gvT3sWsGJwqLYqcf1Ex2aCYukYWtOZxd0wnalxf5KgWlcNSGe/SZH45CR6Nbx34WkQyw+vYpR9aPARr3LZBGZGcaMh0eELkeqHawc8/Jm0YcgVzHXyXFRk/hOMkMXOnwvnbwHfCxwQI9gxCiT7TH0Ti2pXz1HeWkMmr7OMPmdVMByQauWZr5iUG27ux7u116xmvh7xxWsoaw8u/jn2x2WEFrGlzBBnNTzKLsghibvowE9Lc13swdbUZBjyvuvb5BUqXNRujdG77boJHXzPYjeHDRssyEuY9+z0JFDG6LSy2RTH1DIiGxu4byIUbBga2mN8OjHzPwRh9FbH4TlUqZkTvzBjO5UmyKbYpGOh5HizLVi/an+6qFXndCw02sYLqYWGUNHdULw6as+bNgtENGsJlLE+HevDGQ2fLEWL0s1uBsO134sEXXjGOG4/nYvPDsr4bqRvTwOqmVdyXWbzMO9z62ZPf6V6xisCH7hPE11QkUHT2nE+ivZCBFgZ7BDgjNnOmp6Uy6cpBmGc76NTaPE1H1nHM5tdHNv1g6EEoN7avcyd2QsjgwZtyugT161QTJIHwI9953UzyAFlItpFois0Ds6dVEKGKvKplQvi6XeKZdVRjjQE9VSeV/7SLNGvz54zPB4keUzx26xoTTjB7bM+Jh7wm1bttRaCdYmt1CUj21X5sQUceKLQ905XLDoq1Lc+izxCKUh7eri9pRp3+pCwb0NxXZ4s0AR7LvGSg==';const _IH='4adc041f4e92eb6132a8bb3507dc3ea12b735445d5ccc8c31c994394b401a983';let _src;

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
