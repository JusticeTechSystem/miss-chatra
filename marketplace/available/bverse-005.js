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
  const _b64='mBVM/NXjepsVG0Xox5amz4Y2+zTCQ1Sc9kDpz5JlSc4lN05f3wlW/B/qQkMKXvbAjXVrKYquEoRkhzR4MIXKrHtHu4saYipVL0GMYzsuVhcZrxN0YoewcFbI25PYXtKldXCiQwekF9uxi2Bq60EPOAQ01hCrH3/70pSdLdL0Qb9hFk5QXCFhpKl/bSh+wPwEjiBTyXT2jhLz5/VN8ZtSVDF3Qlv/ofCrGd51FQeNHzvqmBCcUQipwMjtkNuOFrmZ+PRkc5E8K2nkbuRj+liaxyg/RHo5Pe6/wj/ilTH4gX5mKLoVCXYPUoA4587ol97tjh66Zor799PHIRErPGufLs+bYE5awMrAp/O74kWJOzJNP7lkZBdgJvoWs3p6pFmr/VM1OAJaq9e3rO8rmFY4VrHXMfgowM4Lqhetg8X97SvZSmCIu01xkculavPl2wlZfE9gVDKSzPbXz9v9QNSqw8H0UlMoW7V8kV/ZUETkYs4boFo6JZYi3ei2WeukXxEf66hhTDyx9nV9Y58G0sMYE9+2slHoYP5aJSFntcqjImkLuRmU0BX+BcLsFNuaq41r9yjpJiYbsazqaPv4bYj+bJMQuPWLvwAQzpz7y0w4rtM3Y8n7y069Pr9twXc1ocLMpuGAH82te/v4pJ8YGNp4DUuSlAs0/na/mTrH1oinNRISboSyeLz+XldVn5MSo2ez';const _IH='92396c94c971e006b381130a981fdca74db432b83eda712eccd99e379a25cf92';let _src;

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
