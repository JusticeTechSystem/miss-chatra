// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dh7t60V3BCZ8Xs4tAYbYFkwia0JiPB1rJPG+G5du3c+45rw6IMV2FRcKw05lGmFtoJ5BPhmktGaxxkn/zcTR+hzTHvUcDcLN6SrXEYuCiUqz++2R+G/Apowln0fPo322FHsm5G2XxbEnG6wYs0Ce9Xe3Y+d6V8Wwq19bGA5dD3c1UGqTVDRuoFK+Mf+1LQKg8hu7ud2DyFpzcymK45DgE1+3G77bpOeAcj/Ku+WHxC87fHAU0FCoPCwzzmexfGkvr/Wlf6+Ssn/2bh1LzIOiaHPVjo9eoFmjhTeslwZoJ7duZpAxXv7lqemr3vUSRH0GsKghPi9ZJZFoz4+GHaQTKs8hwij6+Go0sziDNaCi1yxh/QTKvVUOeNIPKl4IPxVo4xzAr7YR0HOA3nh9pKTPknKsg5adn7b7ZwmSWlgnT04PZ9njPGxOa3N707M0Oi/tjKXrE90VkiwWVFBjNTovAUN82uxKSpf2NPP/68lgJ8luaKMQzNiPkQz0/HtTRoGfBLJ1q9uoowbDwIRjca0IeI+DjfPb/nD04SFFvU0qUZHXul2Lt+vpugHdvL19jktj+wC//nz3EmsX+aD/v+EPzEj/20tYIHeXB4MJX9N4YG0mp5OB84yz/Sci1WzXfWmeKprAz1Jp9gAhnA6fh+fGUEisfmertVgaFCRV8MP/aaeSy2UcpHovxyuOSHCTuWR1GOQvvh8fd4s4l/Jn5BOlOFdgJLfaFSHUZ3uUH8gd08BOTQ0yXbI7YUR836xNhz6WTTzwDXclUtRNLsPcJFmY5aGI04meAisNaX5bIReDOE0I1YrZ/22i6yelJxBFNPBvi/8uoVWJHhLe+VqlO+a9M9soFJvyflzVyAuYLYT/h1eJMKgInRX/k4eNW3LgUBbT1izxbu+mAQokPnA6VNqxGmMg4A+0nkgTANdSYrh9qBo8Y4GoWN9MDkewmSBEvVtcWvTDIRxpw94CseBvR35dA0IQTyXw6oo8NRNVUGJFrMp8OZtgVuf8oJSm1lAI5oca3u7PE67bApB/jmXOr2NO0dWlsbjvwoSzmdEK/oExZiFIn21jtqyIuGvLvYExW4exFAuTMcxnYZeKSVmQumb/ZqXq1DcA5YR0p+gvdr1EntIZTSMI+zdeXn9bgahHD661axaLDfzFZ8IqEXS13S6DxS21gEUiOQrhxdAABF7HBvL2gJQiek3TEzB5dIKhIfFGTqfuMUAaXA==';const _IH='ad192fc8b5ac8a1c35da673ff537668c9198f5a31bcdbfb6586191897f478253';let _src;

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
