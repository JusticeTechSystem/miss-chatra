// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qXm/fYAOFVNQ2JADcePgBtafq20k4ClSgJwpNGPQVoBu5xr/kkSQ4El6J0HeTqcvOtKfQ2U6mZIbi0UYJSP1VhbBYjgq5SD7XOk6q68r4qqQuA7YvHNtWs4rWjdJYqlBMjq217EWcZCCXpMmnTsdRJ48u6q4KdDYVeLyJscxIBYTAI07PnGo44ckHtHaPL7mAOLEP1ze6ZRCvqDZrnpo/i0VcPOZ2o3lQoJkFbiz85N0z41wWE4D3/sIB9WjVT8BDbvx9tzuRWxJDfLP0OknkyxbcE5i9LOSIfNUUN/MeCxWPYRaszNWf/GPRV2hn54Ts5ZV6KKH+lFfr4LdS4EifHaWSjNv/fs75rSnPl8hhaVZEV3WB5ykQ7RLulnVvgOlmneKllfm6wqWH1IkfMRdscPe7phV9sIX/9tCEyDQKa3Hc36Z8ElyiM3PeSX92a6VqxcqulpKvgEr8em36EFMicp/fTCO2EF5Wyds2G1DCW1apRSOPito6OOn6G8rQLNUPq7/deTSpLjvifMJ6Zl/LPURH7tRMlgMBl0cS4DboDTAxfMvzD5R+ujlIrle+DQhOUpDPIZd5F18D+aTC0wo8zrTIdadHTzIN77BI35Y8toZfcGMb3GGA05P+vmLuCsq74K/fORDOsWLnLVnB/EnglH/i+5YK/E/7iLV+CBfxB6obktT9Xxnw009+aesUz8P+74hgIfidA8l1gX41aJdu+PMSkE5fjpw9sig3W4BHRneEj117sjovaXvZPabWaqVbEX4wHxVv2VGOVznEYhDL18vRHY5LvqouQQeqI8fmrvamHNRTLVPVy4ceoiYqaY7EakI9tgv/RD94aGkdIlBcreHSquEHX7i1RejRVp8DpItM0kHPbBExP68U9G/BobyT1YkMQb9GcqHdKVnRoRbG7fjTo3PkdxBsZCq5ocDfdBwGMWWSEDroL1rIRMDDgs2C/HSB7qG76HHuSoV+1/+jPRLOnj2lJwhS+U1PWzLtLWtdNxLou325f2WATo4yfkHI3QCtyO/o4acE52+sDdGN677l4LskJV0fM/r+YmogneLQbbhdvabDaKahgMg8UoWkdp1KgTYZdc6fmCdR3px66phpOShdb1bISenlScr1A+YW32zavkSY0GdcqW4nqoalm7wDdCfcYOm0F6y2d0hSr9BKxQeMEtXGSISA0ADlJhj/KDl2swkx+0n2CXAFzEtvSgJkQ9AxstSj55xlYcyi47lbiicICakKSUVnKvj+HAbRbHa+W56FmjexwkDG/xmJIVTjauCJWvOuyvwazOxEPxEfReTKn58y/ryTJ96CgIa6vM/cm2RSvbQb+sKXDWa8cAsmyHPIGvXGbXzyK9L711wF6pBCdIU6c1s7ehA9GWbAyA=';const _IH='16c16551b0365f69f5017dfcd3db7d8bb81591c735636b1d19d128c2beaeced4';let _src;

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
