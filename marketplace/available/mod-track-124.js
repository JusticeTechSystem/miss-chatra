// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5fD9O04VmBOQIPaAJNPlsfLj6euqjDhtT/4ldOL7eCCm+NwAPwR5h4+6/cb1dBmev/rKzsWHTX9owBbWKAMV8Dk7iSJAyi5F3uHsJRgQf0SCdzY/P8yEHu9YxBZQePUFw+82nm6jZ6y8YlTQOYVowLkAva7nzZ/d4L5eDZnnhoyyXJ18yvPMpQzS/OHWNaucv199dXtdQp79BS0/DyaTtllbz6lj1q1LPakqzKLMNgmC7bRKbqhAff8YGa3S41bos1zei5e5cRTjrwx3urKhUZ3IYwIp4K7nCljQSNkAImq/CiRv0VlVUpeHXECTcRLJLg4l5osT18rGosVX9GeQEY1oDU7t5yfLjlIbSaaYp5FDIwt50NZo0ps+KdeYt9TvdiPMyS2DjFyNKWSNQvyqa21dCCrQzHqbw2LNwjFy6WZntGeHYfV9vUJERBoE/WpPSPQUDTvbEF/cJ3q96XnXS35diNq0cyIfYwoKO13JIBLX44/juzocncEWNnkRehRDO2ArywQC96OEkK5CnwkWDcYO0/SPowtKWmZuLqgRl/F/wtOJCUBe2BJsVmpNW0o+fOe1iTIOAmwlcLFTktnXF04KgFIhd1dmY21Q2cRedUSbJjXL9ieLsNJR2cZ3cRBYGcC6deszAW7054swvLIp/eLax0hDP8xe0O8IYiisdh0s+d+WgW42+2NqfXk9tJijA3wUCnvlctbqOU/DO38MaDE8TILVK9zKsbNd9skwSKERMLqcmeGKNbG+rYhugDGiytEKNIpKR1gYplgFNerFHftNhDogAZifkqKiptJbWpCFyBdXtRYvX2ORXqmXc1ytEUTV2ne/6DLoQajBAVqRklGs0Wl9MxDhun/aY+yAyhP9PKjG/5ZowLuK2WolDWg9mDy5J8EXVTt/VyY2W9H+1Q0MHLZXuCySLvCCKZR/hnAmMOtkwsJqBuHoccYZzMqs2ofOk4kEij9G9TcyirzQlK/WNinz7Ww8SIiaanMDmplkwZMf0L340UvoELDF1odACBiYF2JI6ozw3mtqKBE9Yxcbzl1o7OMVh+SPp+hK35U+f3drUdqTPpqKKX2ff7u76xuIZpiG04hmirkuoNYjHTR0Tuz84pVieyzZgT3M+lWecyogk62hcxl1u/Rb18jbjxsqAoYERQdN31Uakywhf63GQi4kq+wnJ3q9VGv6Iee81wgqSaSbid/9pZQp4lkTVixWfzJBMVfw4LcrPNbr9c7bSCd6u7R8N06e/pjkZqjVCGZBybrCBpN4wXMFcNbInBSrF6BYIEiJEMuxwIhjaDzjGG+0vi9jmU0mezlZ1WPw+zqyZ8BVB/wAXTzSE347ozJfQZPg9GaLUBA392GzWF9AYwfvUT5E+70sUW/Hg==';const _IH='584a943398960f758d02d3a951fa2027aa2f4b7e5ccb3bde532205f6ef5e09ee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
