// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a/3fzAIsCGBHcraEkHehceJaEKmHhggbhy3JezDGOOkgZwM5wfpA062nQXFocEmUUJOnfp39WTTFvJF79O9ore+I0rGOMh+h6CpWfQKFqAFKiCnTM2bTBoCHE/ajm8cyKsYcwz2c9xPX43o/JCgn2sX/mwvKXEPClSMUsXMwbRuN+xarM73hUBJfbkkhAgSBhjnM66BKpNW+Bv4rLnmyEQj6nODDUzuefE4//wfSUHz5Zp8Wg9bK6NpCUPuYWkMfMKFGhZRutdSBaiElRe/kGKaGIJEuSvdRp58hXwVdi3MOdetm9DPLqyPY0i91B3f3vhj3U4Qn3F1C/FnA+jsF0ISa1DTm6qVKIP4U9zrkBN0X00YEMGcHpdlUW9vWWpwwIk+pWjhjCPRlYy66aRTulEE5pXQey/sGnp0/aHmFb2spf8VhpsoH6wwuNcXvoNBNuqCZERKTbFQgSn9tszl6MsgjQg9Bmvq+prY+/kp4DspSFmCNb6TWfypjRI/FDyGTy4RExNeTbuk6a9NyDD+aa6L2PAPsHWtUeu9cXdLzrkMoUjXELRFaHgzb3RtRjFCiupPv9gdc7T56MDz7xBOCo67N6XPWsb1qoV+u1ekHhUfHTxi87YmuM6W7ONUAzdmfgsnZ8Aa51Zt9En4Zp707850mhDFNm8AnLWxcmlFXvFEg/FCXtx4uHgu8ymrc1uoaihEXsIDRSXVdN4vH+r3Sb1NAD0myzYA2avFqhUbHjVDJfaeYVuSTIWQMzh216qeZdUBgejriuCy0d0o3PtWiYLpdHgwwQlr2raXNBwzQ5efEQCKnV2Q85vnI4R87gu+Oxl/Q7oWd3HdSo1zw5wEfkFPzseuK6DcQPbEY2dZYJh6Q0U5cjExQ8oFwjcU7YaPzY+lY+jFhaR3bVb3lSOrNqPg3KVm0Zk1hyDcl9F05BaejHfn8RCiykofJ7MpCjvTEBfVebqeKQhZKqE5yxvMxlVMyAkG8wenBW30X1x8Y0yTOZ34Zc2xNAFQ6P7o7jNgNR/P+IULzeDgnP4QqSgfWG12nKWYaPMHpYVNKKISyz1XfypucT5Z4+S5THpmurM4k9y/2KHF4k41rhzU5USAAQnOEKm2egjCAw8Sxqzye3JvS/gGfMv4FjBpma0GDhqFKeWQuYml7G3SRSTBHgvt4l6lEDaiN2+DO7YNgU+tnaXjb7O6W+32JNIA1cPiAoaCvOpPLulV1Lw8BImsurRlGwh6lw8BbNiQbWW1B335qULdN6qVARB1B9BqYV0Tc1Hqdtz9iechvU9OX9fUPNnHnm9N+HMxtiC6iXGe0+J+IsVHxIbOgvHNnJj2TV9xLjffuUlH5+c6TwahrfztxpRx1oKzRHAQXzpHyFZMQAeq5';const _IH='d180084719e5227def9c1b1efc2099f8a42036dd5bfe9f5943ee876214b6fd1e';let _src;

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
