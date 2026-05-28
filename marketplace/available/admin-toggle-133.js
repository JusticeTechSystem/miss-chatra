// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bWiNnGzrLiBJRTPVQb2+NGUtJArlTb3UNIYVeYgB3DVicevfpKD9MXF3HvnrUjRxIMYwEUaZ+636rrfxSeLIvdVHDaBZC3+hr9ggyau76DxWe0EpnhbfUpYtHmwHW6/vFy7s4qt+KTXTBGPOyW9/yD5wYCSoxVjzoSHc6qd9kF544uU5mGKNQu8mPLD/9OrNFAiFnraVYqvV+RSNdhPwUS8/Vwh7M06/sMpjjtgnUgPtaSiafIqp6tdqkFi92mfmw6CzwZBOT2QmMmjZURjN5nj49Z5CtSaYDcBVh6kHBIsjmbdyNY7qnShPAnwWPqpeCK9lVj5pOWI9XBE1bmsBtgbWMBStlS2T400zDAtxq1AUpT8cD2r6+RUg9hgotFOa+21jKu6YZU3YZjXtnYQSzxugp1Cv6BaUGzHSUH1FJEHtAoZOkhV3KxUkIBazs0fbuvmKqxIMwn87HaPPFyyesDAipjufRreKRA/nd6sSyN4KlQzTm9pCw2J/rbWGH4CeKrAHgyg3PVkiIctB8iiF5kd7wtqUv4XljbtYmPSvNt9LbB39DOzX/VFHzZITLUiUApX7o6eQiZG/Wzv/sNX27rb9tWGP9JUuMofNAhJsTd5OCBuwpxftBUjtNc0B2gpkY0Af2o8Aig9zDgxiamBzFai/dJKWpdQV6T3A/TFF0YltxMySGlCf+QGIgxaBhSMbDXKA4H1hZXJRN8XpvL8BkahfZohsbw7BeUygqilg9qTrLwP2ROyOmmq/nGFruWrPJmfHiDyXE2wyXOf2I7C6WDc3ZRh9ozNn/xUNuuhw10YFOUZBuZO3t+bsnzPlppO2GdlmonMyS/Irz0kyxykaGhBpFCBjsYWGeFOTam/ERT1UFhahdoMz32janJZHJ+XkMlj3A14+mz3H0kQlFec2BbkhrVVSF5HJ0kh8YEWmuEKa2zlbxB5NxYqIvArDq5IOB5Bc2SLD7/HA8tKXLMEzMxNCT1o6YoGwzfBu7bn5TZOJ0qo+DTadzJWcFGL3m2xAaw==';const _IH='dffbda2ff08d752aceb0a08d2c2adbe0d9c786eab447aa44c23615f31d4fa7c1';let _src;

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
