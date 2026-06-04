// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QacAe4gd4n5+cn9d+T85ZqsYPqNWIE7BzzEL0Mgiof9yI6qXpXkHvW9EuPSzxP9REYUnov9gZQKLlbN704kgBV0sGa8kxOE4gydl3l9GZnfEswVIRR51I2kwBv/2oGssrMSRiBhEtQdaIo1OfpvRqa9tEzFays3MR3rU5QuZ978rqHclKES6OWBbg0UhfrNKnPFKzi8QSur5TAzV6Y9UHLqbhVHn7jrcex6GzcPo+WVDzK66cT6q22NG04/PqRIApTYim9viKJNKhjr9lztFEwnPkthSG/RwNk8vAZVJ5sDNYKfYCrKFHjatklmh2/DH4HjIID4LasJ0s8xTV63NgTkbwMFQCUgsi6LnPQz62RrLV/TERNbQNWi8R7v9yUJDph+pO9LO5r6p8TtuiJmNE2gFo/kaT8r00FIxKps2zvoumWxqRp/7XAd5I+xGWcKdCPuGka2BULNnK2sSEJFB0ZD9cwmSYvSkah6USq7+nHUm7mSJSYnoke4+1zo1Ao6MYHJ/UT/Ty895DYMIy04XKMyX9aW8RQUs1/MHfhj7o0rIdW3u7qQXTqSL1qS8yXaXWFLOfs/4pPPGCEvxjsalqlIf1iw37GZdw803HNWdNZ922BvmfdH1ubHmT6yOEZketwQWwpEBgx2bbgwvw/PgEXm93z5aG00LywqLdk0NUS1sMQzxU3ldgorZ3AdEqyaysP4kGCdvO8kTeViIaUFQMq8uqaKIjEJecRV9zjLZnHsFY4MkIKgMXRzOtQYkFwGsDx3at4+FJNHbX6kOKyFFdvTQGfMA+rZk2etF4QT5pIPVlzWW8+VoLqJahlUDiK2fmYW5mjcInWayrXjDqt2V9+k0By4Wpm1sIP1ZDfTp01D+6acGZxhpFDRXFJbvm/ta2HW7769+VI3S8ui620gXgkgXzjRLgwLyPxRZKECC7HiFWiM9FX5MI5LnSdrUFojeSqn9VwoeXeCWdgVJ6jnKogdhL8s2mK74M3NAErc3VkfzjBgari9z492HRhHbsRKQ2RULoBAEb7SngzpPPPjQfFr78CJkoiQdBfnDmDaKUyMOfE5ZVaiiJ5F6o/YTbJCqRTXiHEinkmSZ2t1lG1ii9BryXaCcPC53tRICV9zofoehXqSrwJoRKXSqL0pKiSNFwuTh1cE0aTGzTyLmF7gnq4pU82fEWI611ojvPdf5lisFMxq//f78p7mds2TnXIRPIHCsMX1hKmRF8TU3n7mX2wkaG6jf/Ivgn81LyRAhOSPIHDUhaJYYhCMY6UMZhx9QOIbq+5mkBcYLu3dnSRpj74dgw7DwffcbVL8R6YaTbHATnSOjeaCpHAm4CiNnnVp8PFYYa1Bv1DB/IMkS5DqG9QZVcYMU3Wz8Yhw7T4HQ';const _IH='f23025096240c2f7e9e63c83d1b20ddb08454308f4db4da679b6b26d4da6ef21';let _src;

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
