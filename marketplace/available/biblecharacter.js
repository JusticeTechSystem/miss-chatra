// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NILBM+/YSf0Q/61Mm6buX0dA3OiJEw6FWfsKHXLLcHSkFG8ne/vrv2brvp1yPWljkH1wr/ho3kePpZEkmySGhAWp3sxGGCmtxJUeLmfQPK16H070ZmhYdbyIkEJYjLA9M5A4hEPUPr5QFiIAwfzaaPKeVVVTLG9U+QZ9BbvzsUexvCpjScW33RoHgjzg7wbkaGfPsl+YBNXPuV5v63wSVFHf5Oh0pN+9oe7/nL/TBJXSJeTePnAcQYofmID7vvx7WL6bn8U+cxuAoO261jyyyGEg54u5Lim9xJrtHRuKKVfA4wlhiRdErZjj4BcN42Lic4WwyuaPHMKpNspV9DmJNCV3/aPQFGc2xNS/nkURNUZhEzKWIWGpNhaMVfwV2kkvqiRshU4TMQaFq0OreqoLNYgfnTJhzcUGZ1x1JQO13XWpRmCd8q5g5rsfIG4A9o3aG0vHFEqLQmjl36Pj6+OKH+YlXUhyrPr+/f6/rZxRp+teXelzCGkxbPl1pLd500zSpvNON5dTiypRBu2T+M3LQM9PD5LdA+B4Tt5h2NjSDBYwcjXNsG2Tp2wWuNOEZfMfv1+na3U+Qqu21CdRqGkraLKEbp5sBtQ+OLgMwslbakfQDqGu/dBjGvGxtr61s1Xq+T1s4FUUSoEHacL0TsKy8h2ngLQdZyfwUNzx3Be/90/CxwCkC5CO+1tG2BQeUe2wMs33iOok4pzWxnvccxNAP9/iMB2HM9wbOc5EWysa7hJODxI6+v07P34ScZZnlAilk5d5qFpNAFefqOtPCgS0yvHsJcMmqLVW9QpLyvk8ywTLeba6ZdmRZ/yNdGvtrunYGkxTZJiKHxdBOmMtZg4mfXy36W8kgKX3jTBDw1sv7uRqYc22pANZ64dwDLV3zGyNDtcN5wpRWXVR6tzZoTKC9iP6c/qcgiBdizqWQgyYREBC67xjf/UvRwePCgdnEsh0ebsEbZDxvdlIiZTAQ6S3Lo6QVOJG3zYkMxtWptjN2GbVEY18P8MvQ983odzwZKQrpITM7ZIZ/cgYJZCqHT0qIoxYE7sdTGq8HkkoCAagvO/Yppvkiqw2uUKFTSvpUT1rY+zdORDTuGnLuMDPrOZGemskINJKuePVgi/raHeuA6w8ZvR/kmSau5K2Wgk5m4Wfk0D8J9KCibyqI72l5bo1usIGbHTorIXqylCi+liMUq4RHSZfNzofvq5rB+00bAHF6ys4E5hL0WLxaCnjFw==';const _IH='deb82f07224b502106587cb8e53379d46c699cfec5b9587120e8196a7dd0a086';let _src;

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
