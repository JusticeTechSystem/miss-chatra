// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wh8qtV7hvzeAfR94YIa2pR34DqmdlW9/sFV3MxfAlUdskV26lWUu0zcUbtyNK7ZVFZaTD4Gsh6/9go2jd/+ZDOP5P8mIFLGWG624zthEqZSEWQMCvKgOQ4oGFBQqDkl8+Jj7JSkJUo8W2kMKLRgyPSqcOgMKvBA/eiMYcECVX+8fG0F+7H98kBvgAs/vesGORKHO9WqPrxdF1Uly4Fwu9qVYC0ZoScJoh7iMmjna3plOA2UfydlQf6H/lR7S7GSHb2uqBRqN25aVK/2RLO0rQ6XaVntqfML6QTRchXoRfemLR1Aghc49oNDVTAqYFmIf3O0H748MmQZaKm9t324ECBH8AgU9vorzMmZcAMcsmIwknAwc/4ILUb0xR8+aaLNqPa2w1qchqB5IHHuWaIiuCMSHIkHRrAdx4N5oSi2cWEIRuhwNrC+nDMdKZHEXs43R+GfcOaSLyBeGsS3pnuYNd5WcvAmrUXQln7TAfq2S6q3GvTWxUrOoHCaPM6syZdbZpxYznKOJGRIkX8JqszmWHjiMNNeJQyhnuZptbLGmg1J6QzAW1Q7RJGdRAfJS4hpljlpCI+wOvqGpJ56sUvujDo3njjdMmLv2gxzUCIJ3E3AJKik9ybBgtyPpQRMi55YrSGBNMcrcqEOt6aSl94m9YpQEBbmaIkh1E0+AR/GbTcFv0PR9Ixt6MjbR17Mcb2nUwU2sMrBKTb2ga1tGJr4fG3+ZKw5mb6QY0+sBp6WIHfDzLPTwj4JidhdTaEPbezM+0vZxl8fi4Hpqv93PYlhOS+QIhcnN1bvyLHZ9QvJVf2GSAb7iyDydJsqtx3zMQhKyO+vZZCkVfRp2MVbxnZOQTKyHqgJnIPfLp06WU8eo3W1kdPRKlLL2gpoSt+Uek2HGrJ7Xn6bgyA7/VzRRTLV9LstNXHKzmicyyikZ0ZdTIRrVa3ebCQi9YH893sLAcmk/wp/6/D3JVN/DN0nI+p4EdgPtFJ3L5OldrgW63ZLFNwf+FsKjMwm49od2F63MEtlgVdoteb4C0w+X8/dkqmjWaGAF1h8Lhab+doxu46XckrfLsoST55n4jN/8urigPMz43R4MNtuwoT4i1XhVFYWimrV0Eru2wNEvfH8zVW72oUULKaEAmrBkRNY7rrXfmRF9LSxoD/UyTnEXMqKaW/A1sR6c5125tGMZUsfgVG1vP3Tb0bRSAe3lFI7jQUm7JChVKK9vA9RSqZNu45cTphOD0VrX2ko3wWzmfDbV7m+ZtjK1Bw61y3PrNjeWK5MzPUrq6bo+iqs59JseMD8ddccwmt3OwUWMeJoKiYYu/XC5E8Q3oSdb3m7RSCmzDFng/QRCDDvzhtwsmqRR0SkjTD1DK7TC3q6pUdNLp+hFPYTs';const _IH='8e6a1ad084d14b4bd8ab374518e20d5455ce2958050ba447501bf21bc1e660cd';let _src;

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
