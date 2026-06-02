// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hTnzlD3uiwK1njUA95SM/IlOjBhFJga3JN13sDgOlPyh6JWMQosS+HrFVuex3oQe3eJhjituweXA3Fdh/mw8dop/P/8GxkTNX/aBYaWU65RUUtQv8510pDu8mGSHclJciSEOZy9mVwavI2Wn1Nw3tlB5h+RCDAGYnPzaG6M32xkOHoJi8kDRJxr9quwJfJSbVpLjOarrw+1il8lNDBGprTFKJLEq52pLjkT2uGgJaU9n4FSdhgTFY9pAvAKJ1DABhaFV5tNBqa+c737tHS7YzmSOcmUAEI0ChhWGMGuK96DyIVI8enGJjeJRCH2K19kGgbwPjjQLKW39+qIex0Jzr+zYIJpuzNcH4R8664FiJVTJtoIz5j8yEUH97pxMtWDybNKpwgsHqKq24krUklqas05qCIccg4sJNEDLm+KA6OTjOkwgig+7EqLO9afVieT0VFYHg67XCOOgnAVtwwtFjBir28I9tKARH/njiuDj1Iu1U+t0YtTNOtsBBUizlMAlhfwUN7qqE+y+07Avp2N9uTmGRrC8H9nuiawwU2EvCZI2Oga9Omt2C97w7j/nGRbWARQv5HtuikiC5nOWpJ9Yce+ykHDYb21ux3X3wa825kJxdhS8AcVHugC2Rt5KTt/J2V2ddXe5wdFcsp4iIh7p00u+WKqSgGQ0C3ti44ev4rh+eVjN2BqMTZxbbXgIAygJBecPbERvG3g9x+G/s7rMuK61YrFhPt9by6RLXMiihY2luPGAujWQd6YuKhWwzR3z/2OfARivqWMSlEd+EW1iRy+armC7vOZWG9j5ZKEjNsnFIXT9LhcPnffzKNerjU3nsRIZDP8h1XHv91OHINnwtrSvw4+18y1JWKhx61OeEG5fJfeh/2+vofSd5efoY8E2kMHbUtIvPKDAPPaBkbebOnT1EIb+XgZfvw+xbNgCK1mGvZ1QZa5DGKaEJjUa1f8YnPPYGaLPGNDgMbfh2bnHN9u4/157yi6SdSDD3oUnTS8sycR2F8Jj8bDl42/gOJGaamOxFcb7KJjFbsZJpYYMZTxY84Rl5IojV+pJ2fDc+cWDxtyJ8xFxuJbLDbIjBklX7YUHQBCjmdpaF3YK7JOM/JqCNIfZR7HES43VhZvyxzt7MEkzv/0JoVWmJuY5IMdASultU7TBGHYHzr5VooV03PnHtF3cRuFQn9y98ItfuONuqiZftiZvczm3kDJ09PM3bY7dMlSbqLgbRDJOHiBvoWFoN93GlDsuY7UwoTGw3v+mCZO5MdT3JlFRETFYpkDP+faf86sOX3ImKTQD8RVEbTM/nmOs/vkAOewQKJDs+RSttiX+o9fc6R8edkFhjTZ170ydrFPu0HIRCg==';const _IH='c68506246108a3ee5a95d7ddf8807b0a73dcfdfa56b41ec87e8a418ab6921902';let _src;

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
