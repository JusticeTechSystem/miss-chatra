// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kKLblstNUoNfzyBzL3UWTruDCMKkjI/KfRZ6ncirtAp93QNi6VMqDnFuDmJYrYim/nw9+KNgfM8rl6ZO64gs8ZnUfB1WQdkKX6s2DfpS8flBk7yEsHUU4YT0x2bxmc7X520IQm9p4iH0veZ3sah2aVdc2HJW+S1DGfiEaeUOhstCqW6p0JjzP/W9iVEgJpJpQAsvGTDIvSqfQr78/+1Z3B7TPTpSG4s3XeqeXt3P82fviiTn8ZXDfILRZ8U9/+qYzgNHPVmYvgaqiNwWxVZwZNAClZKx23jtnx658m+xsQviMv1d2AvTE/Q3S4qOQs+s6p1Z3NKUp8+sauOSyEiqhLN/K0fngLItkTA2BLJ+CEM8iHoDIUfw3qO+H9ASblLsyLf6ZeVUgufK9WxGkcAp1yvsV+7SdVw9JzD4RckfZ81Ghb63X6AmB2JRyzrb+qqc8Th/W5cgSHOHS2UCdTHRYjGbLQcCk39Oqcs/3Q09O/6uOTmCiJE/23ZV3lO6/WXWb7VHQY/Nq2pyYO2jUAwpOiuhN18SVh6Q6YBAyrx9aK2JEId6Q1U7cedrfmCcTuia1F/fgHWG6ztno48YoMuHQoFcJWMp5/cZgc7Ck5ji+uW1rJwoCaomgIq07eXDTlREkJl+wVJhx6787hOsz8NmKbfIHyFWhNrEFb0x3ys+MZ1dooH3kA0Fpzpc1iarD65T8DZwFzuN30LHcEaOsQWq/WsopGSShxZniObSJ9PIf3JpR9ysoWwsx9ZrZm19CVkuajhOGSF5n357S7z4Y2eaaXffrlabHWS+L4UlkO5tam4cxPkkAKB4cKs2BAdtaUvpbFzDHZkNBThBzwOvU/xiSZ41+tRibgxcMYu0LCOI9t1wTwz+NV+/TjnmSYsLSE3AAsmYYIXzc0z5ODlTCfQNU02M5wqAJvamE30vJ4/gx9cEmg08RwHGqFp1CX8gY2mQvRah0MldO3Q4+9xysNh9rz5OY8eTSJdW6LiJQcNUWPi6PtAdQTpN9KtN+8+f6blhjTz011krfIDu7NEnzNsT7mS5UXajPaJNfZZRAvlp0kj8w8yGoUxFsz22kxt5rJf9ArVv7zJnKqpxWgrCEKOU7WNKTm+Vp0bZxoBehQqZjFxkNk2HHkp0hFhhGYar7aRolJt46nNdxSWdP8Pv10LRL6xn7P7FF9vzLaELYhW6W+02t9PZC2N1+rfDS5AIkQtXtuZvYnLVOYTvxP9/KfI9zyoeGgY8keDlHkJvNIPXkFWyaJXfKirR0L7PotxwJgziK8Zvl2MKSPmeUY7mlTVSWUka/kbnIpdvHxxX70jZEIVG6QnHasZBChCznz8GIfhKBlgZwkFHnaj5BWg1hg4E4/kdYOQmT17l5YjQp1Atdpcy4Ixv4axoUMKD2jscv2NwGn4=';const _IH='f2bc86d71a29ea275c4e1fad11b9e51a04fdb60aa5ebfce9eb9f5339f2c98821';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
