// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mhp1e/7G6qkdYdSWGu2aEaS9/vBMoAapfZsIcyjk3l46FqAvFPTJn1VSADLIYRLzO2jsOZNBlMuuU5fJgNwJ6Mw4UGupJGrORA6nY5FaDvrOiq6DpB4Vw0ExPfkZNN7H91MmZSg0tPoKEO+BcSHT0jYWfTuerCebIhj2poTzCnTWT3VzkWi3mpjZM0fh0hvxGf6rpM7smLO5c66wu2NcjgJYSKqhZJuIN7W9RSohUxG90sH/ht5v0Hup4WI5kFP1NX5hzFCMeUUtMAz4Vb1L+bDzEg5uBikVgw6Arby6ijQ0VAuCAx3N0hT0ksaWD80k5J7iJj4/wsLlF87rHD/oiLi2gGv+fePCNtOF5phPYYfAdBvzYu5JZgD2Tm/5X0wjQN6h2oGR8GFcDooNtMYLIjzv/NHu+KCuigzHaK9hxwPSMVddD5ueHxDsb62JkKDBdDXYY9Yqax1F12rZhNXG96jWG76VUj4Wqq8QFNHmMNM8ROjj+XqVZnfIMT61/qmz+ne949D5svDl9kioYGeabd2jpMmaMrMRCxlxFqOhvfFTJx1g5ZWnScNtQG69ilcWNRDwh9B72r2U01f8GOxCAU+8elJajiTKSzgh5+/CrDY/Z1qFfZqzzl4pL3cuVqWXGIBDBzuFMn8AGR972xB3TGHqwueIzFSaSvE5G7a26eGlTJu6YGGYBKiedPzLWjCh9ZUPBgwJCbR4xCWMQbgVTOAr5Blb0lF6E9Rdih+wuhxxrqR7pqJtDteJq/srt0eJCS6hV+exElR02VR3fPw1yNq3juhaPi8LNEoRQii5wVPe3C2ZnN1ubUfocxyi1lFXNZOpRbjPthU9Mzzqwk+JfLHF86h3L1C5iOdivAE73oidVePJHe3pN0IwE7OVCpvbMTtC2kZBPpSIsper0JLcOtakkz3qHZ/V8tRnbg3UP7U6C1gH6fahe2Greac/iTplwOJN+aXXOt0zWF4GMdqiaUBic41e8j0O5qkC0eUZlaLDQ1NChRfJqs7tW3DxxZjtIDgj2+uxyIkUgz49iguFs/B/m5OMk/V/AXWu3f0OkkaIDnWITfnXtNaWPTX4yz6rO6HS64byGK8hrPBfdt2UULT4O+WjqRKTV5prU3MkK68nCHGW4OoYWtoGYV6q3Ki7RVvpvz2nsu0/WZa3d1M7m3YeghM7vJs7/AkI4ps4F4+on8pyT+Ft4VBBYOUdf/WG8cLJIdco9A5jgDz2z8Ob+YpKhJZhnDXOF1xKMt5DgsrMTVMkMBuGF31o+S1y2+7WvWYGRbjU9w+QVu/NPnoHVfHiSDuN0VjujQuM86y6khjo6Ix4uX6VM6rszyVzj6YsP1OSyI7SUt+34f11s/7b+y9E01pMk1Or3xyp2cL/57t+5ARp28h1I/m8bnf3';const _IH='b6f313efd28d6f6c6bc0b246b44f065005508d9b51dd4f50f5a194d7f046a1b0';let _src;

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
