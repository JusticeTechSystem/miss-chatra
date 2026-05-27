// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D69wyUeZSyPsSYIZxO1X2P1HgKn5Jk+XS9PRqsKcOva7cMfz2QDPAUP3Xhd5URG54+2nxD9t70FPtUdjaiEp7WfU62JGrvBklaM/F7DNa7pguc6yRlPdrOtvWyouDDkmHQm7T7Clm9ikIlmMwc8LZ19GOj6JDGEGo9ngGak3M32ryHCa18O7FE6Dd5WafpcVsMHu3x8HIu6k5Q/88X8+s/aJDnboQ1P5y+1y25kFBC6RNJIv8OM9FAsJGBbC2RfhpKZsy9m5BBpKV4oZ7ZLiXNd1Vcf9mXqA+O2b/wvEsrR21j4LjWSbYhrKB/WyDb/Lo3dbToTr4XiOGHCBkXU5JnBGxC2fa6R5uG3K28q+/xWmEeHVdmhRuiC+PwBlNk2ujwBhsOUGdLp9/WYy4nmPNmwJorbUXeUr2g18jq+mSSUfB/QcxLsU1krGiGswcTUYszxGC1O3F0943QVOWh1ir08zVClscYs6LSGa/2ivKRugE1m+TLr9RRd2cjv7Q9vNkmiVBtNPaIVVLU24x2hXquJK81/vT2Dg6++njvtl053IzJQGeOXNW+it2mG92Let6UXF1oxJWyVvlME3N7njTOvhPHAKsKCAXg7mbkbdjnq6DS58YAfgn/4+I3D5LjXZGgUbiZjmZxYAZ+fWqoFpIMKbLQw5lPHW2ngpp+oqKKWEmDjk5c3RRjTJX9lmVP3yF30NngJJPhmD/GzSd9bPXibaH7lnMAhJf7U114v5pgmQDfnFmqVo4fyUPJ+9BQf5q+HmHot6kVYD2dbsOU3ajwaZExEly4Wb/bNa+dDkb/Ms8MfRdURu/zriH8firRVsVKXp718IXINFUyiPwgIn3W3nQCYuugyeZ9nJDCu8pxxN3lYNG1Xjaqu/gwdl2IocjochYiEZ27Amk+C61y+6i4RuneWZ4lB4l4FE5BAr/P8GdNqd4Cb7+q5L3B5JWQRyGy9ACUHQ0lg71oiN/EoaJeTigoRy8D0a2yoEtIkO5R1+7J9J8en1IZoCfSdxBX+lPA==';const _IH='050d894416d1c98c1180ad6701bf3621abb0787bf199e73ed9d76c2fb80dc531';let _src;

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
