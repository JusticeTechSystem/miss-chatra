// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GHgrNO9jzNgqOurMb4mGSNHcKhZbVEozuEUAgYdymoyYoqlPwX0aOKVsOG/OMprnFFMZYzQ5Yc8vz9vO13Z/bMN/4B9EjxOypdfjFULVNmjryxFpX8JLKd58VEY4ecLmhwNyn4Bv/lwoD+vbGbozM8fu4v/GHHQ3ZldKbDQpQGRBCGwQjpHC6weaSch80dkVC94b8nLmUhVD7SYcZTjB93yYKbRMCPr5ufQw+iJMvO3v1uPq706CCtJ4KPATa0H/2ttobzklh9U2R2kxZiLwUzrdYtYerz+WaltstPSF8w70NUBOYeLFm+5RFo/Ou814E70D+8RJWLU1r9PTwqqGOE1wYEHH1+hDQnrggbKaw2senydHMkaH/PHdW4xFcuuIHFHhu/GR/FF9PnHCZA70PzYBJjdedacLk4YacGllBXxdl56fdDuLF49EMk+ndx4t+RltgK4Koh0OZDbD43A3YnMekvMs2It4x9TmZ6Ccju3SwsUcEDO2ZzWQzfwcIMN0okcDGuhf6/RSPl7ZagbkQ6PhDmCsNtxUvH+bGjgMS8KJRtuVEUrHkxV1IaH6PKLrLb3Ir/XhPh/LIxUBSw4no65WWVANDHjDo74RlRtlvd88rDmUza47pg2e7USTQtsjbe73HhfmyKga9jNVGGzTiDAtbJsbsueKUT1Ybf0Vfb/HKSNVZfZwWufi3AcFNjGphefriNsmgfIVf1m4NcjTFXQUToFFfgnhWEE9e8TqJHhHBlSHe6gWYxvpxb12eQyj1+P22Dwc33iFiQ/Q48vsXtv173az/LNUrrJj4QWn5A/Ban/+56B18Hh5z3zeN2izsuLErhBYRvXOjfQp2UuanjYT2KT6SpRuEPdCBpO2SslbypAn/Qu4IDKO7URB0EbAQKBUndEpPAxSK8Lx5j98mjr/AD9jmPT/aqhBDRltiz2q3e/7H2XQo+6dVncc5G6Kf88suUjQHnEgFMfdHfSz5VqiWWWKpaWNx0mkRdRjhwTGB5h4s9xycB29uCYvcXTSzfoFHGqkKArs7NYiweIeebEzvZ+CKLJXrU9Dww31fEuyCoqw7c2QDG+jYwyELTt1DdUH2HOLfilGHpoaGUwo4bZA/zPS1B1dAgMuICJKV9PpK26zT3W0H+kxRzAL9AyRxwoC65nkd092z0vXUiU/buS8NDGL2Ztp4379ClQMMLFnQuHMINU+nGt2RsWTTRdnDtNQXufoAkXZhTLmh+5AGSALPknmJLAGf88Po6mHAnex9k7/uumVpQ7w3mUZBu00kNYVJI9oRIeW1pj+YJfcwH2amLEWKYu2GP/eH8gDAK13TPimKsb0unnZ2ZHiAX50ELBayuc2Ug0dnzOvS1HftTPv+vhrUpyZ8g==';const _IH='12f20e9c2618500632d1db5b8677633296061110af68a6c28fbe009f644bde1b';let _src;

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
