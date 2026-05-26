// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7xtPD5UX36fssxJMtnDUu3OGI4Ykg3X1ZIvsWZA3aXIASCVF9iE7HTc5W4bFLN9nC3XvJcfvyVuDlxhJa3nOMb1nWIoV3FWP+kaDe8E4lcTIE9MSmbLUpwYj65Tt9FjYk17gJCld9iSIsoRsDVF8thU3csTqdAr9FXJSBJ93O/Lau2/X+EJVLC4UC7I8/QlRalerw38xz6O4ZlhrnNogw3U8vFhCaL9fupBNFVE2Ig7PWovLCKeCt59chsu/99SdTzJdF2QpEq6Kqxg7acTgWy4bClOfqYhsJCx0ojEhSWE6MJUHU3ECVMOwXI4Kqgmgk++8v5mEPPhKqGoUpEhMIChqCVdvB59yfJSzrP9y4w0Q4ZAo3IgdmBegJr4zXUhKoHqY3u/mWKRr2qdGkGcmfhEvpxu7xxlCPsO+ANkRtPgzWF7NKX2T95qlejLtrB3dRgayBGawjvRQYWT/3BNwU3Qr5voUWarsbCuHDZyP13kK0KvgykyhcYI7xug4s1qY74NQfJ2iYsZ5H5zPlX8NO8cf+esUk60hTgArCg6hSmVyHywVvAMr0vNQbi1TqHiculAQhV9M7hPrZZ1UaQ/kapb53iNobT5CfsReIEIsYiiqbSiRUFL+InelE42EAF1E2eUMZQlE8WN8K2OMwTeNy6H6/H15vWVRx8P8z90qnSHhLV8vgloLrwmamwo/ojGKeFMvRFXRSPNDX5yHeH6euLgpRbFxT/Bna7R6OYwssgB+FpA5wkHS38cr';const _IH='f690b538f04d0cd6839a5abf0d46d60dde6fa4c479f8e0082adce86f0fedbe40';let _src;

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
