// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ok5SVD8bM1prVAO5FiTHHJ9qxO9jh1xpyeyQWrp46407CCUqWXLyo5iZKuR0lAQaCYSBO6UC71kW35Q7K3Lc1hFI0W4y0WMsVuf1tdNymtQliS9S8LFwNsyTcBNCkz5ddut3Oq0xypT+DPd8mOE2Na2E12fG/bnHy4I78VDCu8ctZ26VVhC6zyIJ2okvI2ahvbXFAHAbEpxJtvGmrQUvSC04Aqj/8XpmmRHOcPi3Sh+5pwdHBHpeqCFIwOiCR8MTgK6zJeVCeCUUd0mfa/NRh0lSjT78dTludG2jpPt4/YZ/nNye9cE0uRUW3KhlpYcHS2/2c7hzGMm/HLdb6u24Ih4DCF0AD+LjRvXTszJKpz6EPbcJPyA++v72o6hpZXa7ZYjAIhXVsY3omE5V6bj1K5STrlCrkE7nF7xRFVTsJPghBj851sUOm2wlueaRziUOXNX2d+CtzeX9E4+dc3oeI2Ps8iFX6gVVcf6SMJl7Bqgn8DblL9I6YugNIeQRIdnLj13dTsaHHYAe34NBJnwo8sAyMi5Q75c6wNQ4dVAtMtu9xw/tumqq2L8WtA3+xg1tAaWHp3lnowxcqJLHnBnljgrBEn3YXRRlmy55YxFuEhpFwJIR1Xpf+MSccxdDoB75Me6WKxR2ycGYUhTeGwgTqs1OANce6T1jjHaDljfOlEAGv1t5aVB8F6uuVnWOue+2evvk9p3G/ED39I4cJx/DITn4cbsEpZrZLQF2ZGz/Ms7gX14L1FzuXLupykuovRvk6mrArpvSb43aXttZIJUZVaylF4p9jy5QbVqvsF03LrHadvy7IZ1iG6cYHM2H8wyQnV7RoSXuDG0fIqu6wotYTYgypnTXXKGLpvbwiSKnLvQ23B7qPggtt+2u58dBLVWW2LcV2AX67oi+aAsIi2vVEpAPcAg3OtKSHd7NI6BmoFQkUe8vKGBL4uUzc5HbOh8BzzGfTBsnUTbeeUO7+dNsCdR2C+wulXUiK21d39Z/NlFgKHCBvddyw3kxQB+kEKPi/c1cpJVY+XFqqy1ztMmtgi4ZkKRkRsrRgXMqvjupO8/6Epmo5P+/Jghrei5ggPGVp1JAZlt0uqMSp5k2e40lGzdWPNyAyMNNEkmqdgbRoGt9HBh7dEoMAWY0mzyzcTEHe1NQUa20fvYhw1NLOkwGc73Y3OgbVOm9St7MMEjb2iYkzD4M0q2Q5pQPkJ1lEXtT/JVcNb0ONhW00FHrtaMOwctsMVANj/PeYHSSYJX20nvcDNI47K62dZNN4SH3DbjsBgeA/+xF6Mcch5IMumBE+CVDvCRKEPIcfSZiC/zQBesdgtscMMVi9FRdxXP56mtIpaepwNYMjmGTC792VEHrtjhUQjHpqKsXNvYNcFZfZfIXdiUeBLaOoOp/fNUME8nzbhJAaz2DJXRdAqTaOa5DJhxBwI0QaFx9gGkeOUUkidcE+FJQNliLnQlFA/Q8//VqA7aJENHY2pEIGrPimsOi90SM4at7/eKEGfG+g4mVSXD3zIBEYDS6iFD9i+TZL0eTu+okvCUjStdibGR4Hc7vemx8ealBJqy1PjEHgqbH23f3QimcPvRK0lAPHUCEHiWCrsAC00LLJI1y2/i369WFkJENGNzl1plGrew6K7evWcJJiu2z1VRwDXTQNh21wBBSiRLM31mSCZFO/w+EIAd5WWL8mSYwkCne7iqAtGa7zvdPsuMprC3tRVE=';const _IH='53b9c059e3110015209094ca88066891459c5830039e956c58ab47af47204037';let _src;

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
