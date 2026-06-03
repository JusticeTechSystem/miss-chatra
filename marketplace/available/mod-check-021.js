// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MOrYPq3wLhUc1xHl4GLjaN33tEktptu6Q7cqhgUbCjV5eeTgAnzZYUn9R+CgWgv5fxgTrxWdacDppAygfq+4NHEvsjWQUgDozKfWbkMz3Bq1Md15wgDQKl++BJzOohYxm5cwQ+36PoEX/tmyr/eVZic4B0KNl+LCLCdmJxbCl2Gyy7AaEOuWls2f2VNVLWu4++ZROty7nDeJ2AVjaZpRfH3iUUU+FGw9pfSC6O3MW0ayRcgCoserB+XuyIMam7kzL3WtG+M3//HkEAoDM79XOO6lUDpYkfH4II6pepbWwfdvjIKpTvOiQ+nesqp5BhDDT5JXcepYf7Facll+Rvsg6WS1FqzG3qNg5Wgh4huG8mfwHwHW+dIBuX5FDqx1FXYb1N1QNra5oWqLTUHjwDByydJqDNL77ZY14h/nBhgm2HrZorVU2MzXk/UlGXBNmmoEb1F/xkzIy5WL5ehyUn76gxyXlcJi43P8ualuWF3Ix5n80BCtPpmRaNGtpvWOz/zeYDVS8fxrVgq2FthnXW6n5S00aHkyEU2WTnILDF5nlQhqBnKWX0NCa19k4yQpv8TKKJ6Th6VOheKXqRObLXCQroduTvFLTphCdM7Lnil19zk/jYFZn+mYbj5vKA05vNicbYFboSt9uSD8H01DhJHQ5bWlbK5DcQCOcTLwvOQHobQRY3jxOUbvzSANpYk3MPMiM0g4gE0D928+67WVOMt3G87QFmNoxGikiuYhIFll4jmmdMELecGS3D/vHBGYxCbwQfE2y5vD8MEmabFPRuldArTjaeq0Krvri9eMrlhTZGKSafkfpebD0e6aMiR3P0TJOLcWJk3pf1vU1wXcfw6E1+T0B2+oqQKieVgIv9FIusBnwzaZYVpx3Xsvai6PI0ZbatcR5CGXIG6Rlf3c9xi0p447byFdkyo8od3LFKC1Ap9+Htr7KyvmMte/CUIRvPj8I+iwwSOdrWA7yFWPnDKdcL6bO8krIewuEhLtjg5xTVoFz3nIDR71iUQzTfJUqYxCQmJJz7skzwOMbamlwGCpbGiJI1mBTTxD0XwSUEk+kfWp6dHJ41FBbuhFyuTGUKSMOqyJ0mn/wZCJCKVUaxu3TQa6NoWwCASu96SNeZGfBOD+f3JCNHGyjs9G4fRlU2WcgocLWf9SuM2o0OP4QQS2XEcf/y44UH1PIk+xBZ4sMXbqNzq0gm0yp/GRuynH4Fi6RomMvcq4dp559GW3LIdxT281rR3fqjFmmyCOHEG4cfvJowUbJ1KH2lGBTnVW7JLdz1u2blkQgSJFFEaYHHHh15VTemvLEg13RCMUnLgfWp0m7WCX8tLWVenJXab4KEjGZL3QFo36r9rIXAciRxs6KC1ycey3ksgCHg==';const _IH='010baf07449563a01dc0222c6366cdcbde1e3aa57de05fddcc689e02d9260421';let _src;

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
