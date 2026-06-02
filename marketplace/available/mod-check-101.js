// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nAVrC2+Bky/vqJIyNpxOBjogQEmz53OFTrnro7I4MkjBOS4pONSYu2NsgSYJIqGgHgoE58pBWoVVjQyvXsE2jTpiW/vDqgO+5T5BfUcsetFUxqRtbh7uQ9CnugOPj9QWNFCTIHh34RbMLONIbJO6FY/Jx+KA29N7K2GKuIdu2hT++9CAURSALVLTv5B0E5HKSOb9j3eu/JLmFj8HO5Cam/zsWGJZyiDt9d2PlzXRWYkt1fO6fK7pEs2S8hDHMuNr2r9K6vGnFCdRghc70gfkGcW6uIcgvbr2QaRTTVUvxIfPVJqUXhlrtOmyGO8pAaB8pF+6z65u4S7qVkcuzIktiA6YSEulbUmB1IFwbVmIrOin8nce3ZBRUEdnXi8jd5fgzB3U51Oix7aTQRoysNKlz+XmPFLiz+DQu7dRQhqemuX2daFwXEgznKlQEnBA1sF/0kfAb/pWoOlNKRAOI8SGcY8y7+0tlRSr6+Fri7xRKxP2aHkqJy4vE1476s2eAlXh7iwyvJOIPTu8zDy+VCMkSp9tvgV/nc/8+1eG45qMl05wcc6ErCC4a20PH6tMVPio/zOfR9hk7xmbu0AtJM6afSF+MgpsTGVG2ZVKnLWPUXCyzYyHqWHBQLTvJLT8Tp7xR0j8SE4oh+OkcX2hJX5FK7seYPRk+Uq1ALFIiG+5FEhGoObGqLpuGm8fslg3eMp2ZSePI0hiJbnyksBlc1DJPr/uinYvaIlKw5JaZthUOnKo1bnEmD2+QX9bs/eKFCpzcDPB2HJtgJ4KYFLTpUXtVf+Cae/2oRlvd6hZB+bYW9pXCYibCPnX7Eb35RlkB0M17NsMgN82DKp8hRSTQfviEqxF4F0yyXG2lluWWvmMhBVTkBkD3mz+vZu5mg2EERUlk4Dn7G6XSgs/7Dr4hQZAvZfdJ0JMIqab92axXpJNT5D6/T4+82PBGNG5+WCWxJAoHqJ7sAlgi442DoEQIPCjlz4xtWl5PVE7tym/pJleMlwN1dkhk2WF+3rnvNkzZ7qPNkPZXCEyVkVXKKEeRjhgWq3oMRFqHKpJRvNfM5S4Aj8GmQfDugOaGv1NWQjqGXBZO+8gbKxxpgQcljHwICSHka0CZeW7M4qo19O5y9g5w4/FGTMvHtwqHRXDeCOHn39owjL9rvla/nN9YAv+v+kDraDwuX7hLo+UqGnnKEyZ42IrOik+ZTd9gH+Y+R08zhvvRSgTfo+mnLdq44MGf5O++F95Z0kZzGzko+6xWYmRI6lPwlbYEwOMPATs1eX8vWy0M5uQyeKWVP8pxHBjUtQEFV4FOupmbNJEx7keODgdcUxBpik3Aw4c2yVEU0sPmWAH1zC8jpnUxOpIZ74DKDMVNSeEOVRiNIdiZ7NFyHj1';const _IH='a233bf5421274c7664b4ba93747fbfaaf432fcb66494765dc037113a4d115f19';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
