// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q/euPdQV2vOfuf1wXXDgMqpcnx9ktcySBKm9wWpdfIFt7JsLyu3ZrvQXmZ74qma242XBrUMLcwUsKDzegoouavqgYNBnUp4rr/Le99mEFfoTwV2RqaaT1lAnziKPWaYaRg4dNxW0ldKOdxurEKR4grcfLAucZ9+VCsNH1dxuh6Ioh1HPlvIlP85hAWgFThxGBeAZheRch6GjVsT5xsAjvzzAYhaW1ZeLoQXCjkx8jMmGRM8ELEDek2ycpq3LKchN+6qW7sQr2bG1qxX1HweVxarrQ+UAn8UqVMNGQdGI2Y48dkoPv9YK/kiARmZhENgBI4NUWEdBu78b0MOdy4l937fl/KNe2TQCNyl4FdV4Pzlgn07wSeXwz8JT1rWrNbOM5G+8eKG4awHFUOOsObxGBBcITz/mSp0feVtqv8azTA44N5fJhCzDbfQANGAbrhNiA3pxiEwdDKYJSPhVRJ+qeAzfdxbuhEY4czY/sR2mDIQo10F/hQqeFcxhKcld1qa+mUjQjMTSKEXCcZ6laepmI4WIk9uUMl1BVBcr078L2UHBScG4f6L3ywcYjgrAgiRQp16JcIoRdjSnXr8SosDFW0PhAh97aqwyEEOExub2pARzFYE5LKwIoXAhQNc7wb7s6TgD2g+pW5HAn5S6ueysSx5ezWS3BtZJYur3w3AD0eWz2CvfGSLNP/ckGNG5ic3hLH6iR4uvJ9tder5JhEiwtJn1TmjYKhx0NBCxngm7ZLF+fS52arFAIZ2qWxqfWcQowE6+nVMUO8dUgSi6+kMyJs1mYs4uNDHp/OKPIamZp1o6BAPRU5tapWVSoyKyLZOv7zfKOU4jJhY0opaZ6bgBhFRCT9igM1nhYsDo79BIvpl/eaJYSzgTNOmE0w2vPBEeNMDsP9HcKVr0+WK2eicKDhruTai/Upld8yKU9NsVUX9wfQWbKAVtBfwnrPG5tcdIlWoMtLfEaN+mfABLjZgVdkHBxd6bCh0kiLSNuQ==';const _IH='e8adf0d9c3d998c563390eb03c096f8656a93726a5b53975fb7294fc2636142b';let _src;

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
