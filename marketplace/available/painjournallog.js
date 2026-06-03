// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6mVUem/r87f4Kzj2jw6wTChuSRTiDgnYpyVM2NwLU8LcwgYPracyRzczl0e6pk2j4dTEPwgKdXxUtB5XQIXB1zWTn2lGl90SgzGjW56zU3VYKotX/vUiK7IgwqIDri4OUKOChYGLjrT3EmUkQnXnleH/k03TMOjpW0YFXaaOLCsE6jN3bsTtYWvcqr+45lEOWo1UpGuHLM+PIA4pzWw6nETSEsHeL3mUOlJOdPoWqC0oHDk8cgAzYq5zaM+IyTwZWwu5ONTUKpjEdohKOnbrhApRHLIam2ud0xZdiMNLvB9yX2pPlct6ybdm/az1xXEC0Jy/qD7nrvls1fcaYFKQ3OfJMtLPWhBMrQbVN7UMWe1iKqJLcUwSo3D+9X+rDgMS/SWvROyuP2XiQqC5gVYiIMpDXM9eCMbxNKsvyJW7J4Ql3YwqVldf4Px9DVcxtNpJCCYivbdcNseEaN7eCAg2+3z076r3cUXJhp7rXv0fmWZo6p/+sGGp6yfFadNNf1KG0+MQGsLjtwWfd08HKRN+RnjX3egd4S7YUilWw2l9IuHYd0DQZy3ZtToOsVrDJRCQo+5kwU9sDGv8rtrcQNjUXTl++ZOMU3CuEaWsfYiamPyrJXTAkHl5q08bzo+4Z45mDORSqrIauOtKLOp+Rpxsgtg0h/fHEAjsxYO5ZpStW35VvYc1W3rJU8oNKQcqxwvHxu4Scv7x3pgkeAfy2iaD9D8Qa17adIrAD339pBAMzyD4DTATDLzPbcioDyRjPvKFpcdD0vFxgxT/IK3+0/TQmyAxWQWrDPk1t8CWVgup44gogYXMa8S7c9oZeK/HR3Sa/nhThCEa5OXSPPNQF17Hc6m+SxTG7L6v3UpB3C/JAHsHhsMONenIw3pgSxLQcCPYnfwzhTPAIpRxFsUAPnnzWr88tBr9ypPfF3AUXAmnxw368cmiGkbLG6QxNmNx5CUFEjls3mjsD5e6gC4Eq3GhRsflAKmIqMvYxnEZnGwrWK3AcXnmB4Z5HYPoNMq/RcBym5BjpkiJSSF7h1h843mzrkpSb4vK0VLdqcDn5GywueWyymHdBz/hnFuLHiPMTITcLewnSslwB5dn7lcNia4sB3tcrNtk/ulLoh59g5qobEO+wtC9RAifmL9/ksvQ7cPwa7lUhhkAN748tsGtNg8I+XDvYdXxvrNIusG2m3Gf747OjPC2ZRiTCFvO8gprP7lAyldpSv21hQ4L/MA=';const _IH='229f39d6ca90641a474fa3b554ab9eada5f1183d3208590db13299a3b9486cea';let _src;

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
