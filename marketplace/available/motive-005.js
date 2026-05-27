// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qngap+PN+g4TF3F+2j5PTxQImOSuZcUpWS+qBatH6RpGFR4PZztIk9l/B4R2458UPWSNVfrdcTSq4JYyJzrBGumF00HncHbFdnSbg8cbB3oWz258La0Dp/xdphadyQCzahhmuun0rOF+HqxlOP3qEQB6+GxSkqrBjyBRcUrA0IHTEcHuHLJq6ujkiWgHBHyPz+1LpqbDNwqy26PYwZOT1Yfwo4W2/G05JKkXM6jAJ5dDwqwDWI+Xjfd6Ljv/6/IaMRLJw+qf3fX/Q5L9Zl+GIDuRh+cnBhVCMoBn6v58yc57pjwdT2TB00nthxdpVxwCGkMkU9Pvq3lMXJkDd0gtmaKfANv9K+R7OADsCRCl4/hkfJwF1Ewy321vMBchsA5ytJULzpsx2EJ79vujxABVnRRtkTQFE7USDuxoEkXtxBgVgP35yMHqBy/jPKoSJ0wiUIuTpq0Bab2JxpW+77900wHkusqqiwL2Reqn8Q45ZlNmf1QFcJKiKrFNTy1EPZhgugaNVjsWwXUDXfQM01mHhB2O57NC3axxnISKlzlYjYvQFAbnE0cV6IQHpi9kTf+CWmue/ukN5U0CY1oU6qvzXGvULvBjXf763xvTeP9Zy3zwjiQQLmtHynabEzLa8DaSbDLgNrev+3oYp5NsYIEz2E25NU1SFpxC1RyaX41jrco1gdKWiofYCXcYU8Zge4eANJL3JDKvBSstCiSxVJVi+vDfahP/2qya/c8eEebBwi1OO4YnnuChlsgVb4wu0F9lIhPampfT218r31dhdP6Ro1cdMsKLQEuS1ohudYoxasRVGCNk9qSfV4Yt90v67y9Wc2Ucre6jCIA/3NKKPCQxijUD9Wtj3XcLEVHEenpfFFEVQR+9zUDvUTa4Mb9zsn8WalcjxaXLbg9CC4JjMp63rkGQ/UQI/Lz+CqQKzFZemKhxfbuPlIKu5cF8lXKRZ0zshDLZHU3TJjtPOGpCfV4JD6wzbNNBV4zFN5YGGxEUlRoHrR1H+TF9P9y38GVFi+5x5b2llwPh7sgjFiZufRI=';const _IH='fb2756d84ad6a301491e3f2a740f52b56f5a37515f5345d194d1c456f488d9d1';let _src;

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
