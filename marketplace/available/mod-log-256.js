// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i0eriphx+Ga/INu+ahnfPrqb75RMOhzZGTY3dFto21WxA1YqFl7MxDL2evcE0hnXNgFzTJCjGMmd9camCFvAWodh5V7rpS9adnyY5K4XMWWLseLZeoHqGh82xPBjbtlz5xgoQ+ZnjrJFXVgPUUKLrCEfiaEOYRh6cESiaRMZVKVegTbDWPLbUtjN/QVvsZvlszLAqXKl3ohjVpyKmTKHfsXCUfxMl1ErCiVI3LoSHQHV8ouHCb2uiWDpf6/daefIn48BtjM7vdvWgKWAyYbnRnKy+y76xsy/NuzY/fOk9RfQq/yGBKfkAPNZPTHhCEK/Ps7fYKvFCfGXtkNqlKkBZCfrASMQAjV6P+DkqnzZMkltjaEV23vIdFQKYQjW19yci8jzzkyzPtVgIMB+FPJ7LR+f/LhhUJilWEVzz836gFPhSTxh4BCYoIdxW3A+F2xSB4UTStqwEmGzNztnTo9MNU/ZNWDkTVtAyf3XSVJmGOkiYPbodJv24PwUBkt1h7uO7P28dPirJcjjo+UTkSF+vvywGiHdlI1+4k+9QvwXUYE0ZFynEdzZh5zmkjnpzS0/5TpuZ+tf7j3vU89p6lxhpyX/BXGi5tZWAxK+wo2JmFFLDHWRgOPvun//93X96PchUoZyDJvz2bF1pKQRGL/d4GEt8B3jcuVsNcP8tsEVecBokkcdkTTaZfugKPv8kEFtp6vDSaO4EUBfLL5odjXHxbMi1o3Y+5ZQWEp0sWZ9ArAmbrBND44uCMLrkU5hASf5DmZ/Lh2WkCmYWUZraqvxcoFOAZo6HWhjWawYDm0oS9ut3nsi3ek7aix3X1aMEMvvjiBU0fR6K6IzuL9s1AHkK1eRoXUBcpD0N5mSlas5ftahQn4UPDTLZWarmyVgQjmdLPf6LyBLhEKMG4BpBeuYBsgP3g7Glsc6H7493knA4AAosnLOaEkOWdC2Os5LX9eLyJEpUQ52RqkLLf8ynjf4haXI2pR7v4dDG0pZpUhSyycRQl93R5DfahAmfc5S/Woe8sGYXkKv+uv73pXxoHwO9MEGCHuFZ/zrlTmNssfiNegdkNa96DYYqcYt+00W0p4lhSnhNEeqxOs+45BC2v7fW51MODA20WhYVUXRjnTvDLkbrNKhgDRFYOvl8UwLpSknZFnTuMXsDsE+TpabVeeKljOfAaKfIAOIZranPowPdsUuD4ZeUeHctdnEB4cfrhYJELLya3moclAVgXFc+upGpal/9mRq3ua+pm/zjkIrLlHdlxU17TpmxTgKGlTaPsSP4ih4IzQeTu2r5BKfAp6vO9asWC4aL/MvkrH/g5+qMevLaGD8dPYYlr/fHte9DoTrz5+u11nj1Us3Mw==';const _IH='176fd3be970b9ddaf825fdd866555f7d96ce10deb206a46879da0dffafd61524';let _src;

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
