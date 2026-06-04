// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tsfjd1zvo4b5jFB0Bx4wt88LbpGf9/Jukm6hsi9iCr7irCugYrYTsy/ny79R757dQ7ZrlCBd9rzZqZGoefc3rF9TpBOZQDniL5Gf4q9jzTErAwcZdhVQ7U8jDvX1FTTQ/SUMFwb+aenUBWMYpWJl1nZUULWEeQHPOOehFvBT3ETsxkCjREWzSZD+0IG7mhYfzGEa9U9HffYc0jKAb/6SXRl3Jo5vGT8WLenf1wcSqTTeqtPrgcv09fmJR19mnNOxG2Aj9IC7DCHrhfhGZNRgiGhUQfolBRvjMmccO56XP4Egg/Zlu0kGj1C2MtFaJGAqxdnCjuCVSB7YGopkbOpKFCHYQZv3mqWtrZz+xlqpYorlcCPnp+TBqrJMobozmzVMB6uD3NrR1hbQTIArvmnxMvupa55txNxfurNhYuovQOqtwfjF3QsibLKftVOLW6FY/bD8VsvkY7JJnRECaD/OFmEDtEQGZOBCMBrhxxzV4tP8DueB1LrNbrvFLgFKpX58qiuXf2hi9pVxARtzsWzTp1mrFCg5mSZDh5GKIVZ1E+xEg052W69UKeCxG3nKYJ8kiSro4knumsDkcZNnL1TMF/leKCqGEf5xt/2tPaelHsEMjNpNb8ueeJWT/dQa/+GM8TXNeyku7SAl7hxjV1CHWJ1TKLR+Oq2dTKFghKdGrBeDyAd2TQM2x454Ag1MHcz3N3NQx98V8buMF/j0nLyO3XE6g4YUrw7ZTWQMJdKThGbKqO0slPeFrc+H7jU3Ur6R185S6/pULu6+Nv8iEXee4Ygd3f558QAT/hcNG2XmdOxvhOwQBLL2p1CHOmzDk0KovIXiaEvXC5T/0NxPct/oZUQfV+Nj1jK/UykSNqj+AiITtMp52NdHsTf0GI4XiDuMDAPY4HNvM+FrIvjqiToXZXi6wZKbC8E5PkHH0Qr35H28d86DnhPePCxE7Mp13OZ8REdb2NHCeB6WsICjOJ5wAny4aiVWpY+Zlqrny7aNuRP3MjkbLeEOdGyMn4asOBLVirDN6B2eTbLp64Qt44PbaZuut/g4UQAuiN8QXOxVpU3h5DKrbH8+IhNujTUhhW6Sq6JXX5CdlYwy2ZhfiflmCDpoPVwDkhpXeY1t8Po38MlyV3r8BiYZ3RH1tqHReosvRm4Ts3dBjFV6vqEB6yYm8tFCYgKIBgd2PuFMTn4zT0lDdN1UsTRMwnLD9W+B/PWJTz96NPhsCkb1EqtPuDDXbWFA5kxYTg0qgHGAfalpNdBTtInyXifbYA87l766lRFobNvEGTT7cZjSU7NhBy6TPfbF9wcxz4IkVnjJT194NhOhhXBmglbnXZkC2X/pdbeMlLSH8vxCuaayGTfPd7phx9PiXyXpqVpYZvXsMqZMXxvF6ZSolpIm8g==';const _IH='bcf05be70b16df61b16ccda1614bff39708ab1b691876c1edceb61c3c2115dda';let _src;

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
