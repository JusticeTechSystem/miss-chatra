// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dHOayisteIUokqtajIfxGCSPgqSxlth0S5CUVofNVOg8XxVzuZUV2O5DmpHECceMuDlOtgkfMgh1nN8LtjSp02wNtAcVgCFkK0attFDrzdc6cuSS/0kC1oIA+5I9jcbEtRbnzP+RCTajja1y1QphqeSZTRWIHKycfjaPcgAnObjxGpGoBp2KJrXbFmK8dx8oG2XuzSn0w6nU7icabzVvVj+4pjb0el8mbJvM94KCRXnHijd9aOyWLKgJXl6O7OTtyrQx+Fgoy4u/DjZtlp7zMyqqmUG/aJEllSY+yghoZnLGYb8t3ZXMgomgfCGVZE1z1hZbVy9NkeBEN/PUQVc+ss4SW1z7oj2lD130UQohsVkcXKPx3cB+b3I1gY4IfkpUjZ98g/UAn/nC5XTSXLJ4kxUNpRM4wQqORK3g74aoHjoKjygl+A9z2Gui7pQmlU9Yb5ZceYMxLbxvLxenIDkdpqw2u8JJoDQAb3MX5J7Z1Jw1uTa0j+WytrEXGw2xqfoZgPGVML/oHqAWhJFebuftKJuN2i6jvhKt9N6mct6r14UMeh2JS9naIFIlHmdSUFe3FoICILXgjWGwGW/H0FrwUtL3vnBoQ9iwCCkLQRztF78iIITK7oBxtn2k8cjdBAaiNexpM4iKuSTPUrfoHZiJmLvyWmcfvOSL8Jbly8YNBiKd1fQyGePn7tjFE/EuGc3vzGUTlnB1YCCggRRFBvBmEhpLcx8sp3xbulAwEAp08/xr9Z8hFTe9aJdvI4eI4ipwek2mzEf27Gpct2BEAQOwnzf7DBKPEb/n2a1BSdyPESJyQFip6GTWD2CDnrV3R3YAyRAxNTCRAERT15ORU1pDNl43Ym1lx0Da4aNtX73R3qoz9OjOxfTSjzSTu0/DsGlNhF+Vv/o52fiW66kyMg9+D5Ah9TwmDb368LYd0xEQiR392d9mr6zrt9SkVwM0slSxV+XZYLEzRgQmoB/EI9TLPTY8cLCznLkFmaZlN42x+FuM8HoGJG9f3giI';const _IH='1687f90ecdff68cdb237bfdd5811068362f4b0e28150699edf61160cdce38849';let _src;

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
