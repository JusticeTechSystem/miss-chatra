// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nX5xOOamFYElTkq8m4KPkTWKPB3Fhh1aPrqqrLmNaiJdutdRS8iHnHeSuYnoA2CUxw8fT+vzdHiEBF4rxWj8y1rNuEk7TKCTAiBGQA+OqTGMJBmV2NTdJIBNdnqbdG/9JeT56mZ6FARKscAvtLZ6GI0E+12/8VxJYBt0rnxrWvwyj0TDb52tBNHwAFQOdCjAOiGHx8QtW/uOuwAJAbwWePub1Zn4dnXA14YKFUcoFbh1frLGKB2u+ILHIWkfpIdSBq+IlfxTkaSrJqQj1TXHz3ZWcV437WxQWTHKvma5mS52wxxlVkv6MBarqGkXsxHnR5EIwTPofRVZU7ePXeHrSU2nXsQW8y326L6Mp4WfDU26Ov+RumKo6LvqSA5Hj6j/yfMHRHYVDMh2xST8Z0y7tTpIQDas2yoh4u3NsijImfg/Wfe7rkf9cn6gMVGNXNJcLpEZ4U/fIqT1vEwlYGuE9jgRq3Dog1WAK1NAqSYvY+km5ZxVCl/nXz+ELc+4CCHH44IKkbSz2YuUyMO8cvgFe49H/OT9LvSha+SVBtm4c5GrQWSenmL90cSGDN1vNN0sAfuzm9X+hJD/gTKf9JYNz/cKOx5gw1jmPKt/Aolhjo7AR7TaS6hbwxMy53Ec8Abra8F97igIgEGzHKjqYguf2ZpTVES7SwtXDBfJsBfOtIY3+gy7AlB1ofPQVVFjIKfwKqxPoWmZ3a0CBbz+JC8Cbn5ekKxyc2FeaDzpGVbiV/kPiv+576fTuKJTuTmBEiFvGMWSAypU62BF84AbCjdfi0lIbqGKnbudHJilQL7Ug5nHh1Ib6UFlMt8fo4FMRKttiuf4PIY0h5lte76/JitZNCOEYRlKPT1odnjcGju+QZo5OGRcNzyPuolV9WvfT9ISPWd/MnwRYRM+gt3R/Ag9N9wx8KYRjWbZdYT3SSy7MEdA/0PXt+gCYsIOH6mf6KvYdjOvFaON2gkIGox1IKs5mwterhW2inauONaeaydmVA9GxS/SDXHnC194K7wAi9yTzyE3/dzqAna3Jp3n6fG2XHweHmclBdE08TnKztqTu5PcG9A5knaJRT5qTiVj0CUzS5roc2GhUX8K0JRbpDqjb0h9Cr3N2sxcUqWHKPSzgevJVF6pCSzN/igcmQvpTLQmbyZQ01wAo97DIjDvMWdJJ1NM3imUkyU/ILC0/P1dk5JcmaHHWWbxI+FEsCdHEr29rMhoRtdfxVT+kLTQu7cJkKytq9wjP3GPtBjhp+mwOJtQyAXzlB11X73LsoMexjiXmNXPQAoc7C+IjmdsKTB/8qb5SV8IM9L21kyxvW/C0JJPugcFftO9wC1kGlFrnUAw9Ds4btMIUrEypejwCzijnYXZoyQBq1RdLd4iBRs3';const _IH='1a828fee1dc73861a077f208efccfe4dfb572832ece4994c106cb055aec394ae';let _src;

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
