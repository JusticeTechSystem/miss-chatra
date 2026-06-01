// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxrX8KfR9M18wKCtF6n0DoCkxJXwhAd2hGPyoyngnfx1/0RK9PYp7xBFTkADfecnydNvWreka3hHFEyStLcokKG4n0RkIgQPhyKg1uNPF9mVQu52uRbTlNcfA1asfpgF62nDdPOifX/b6ClUF24OSliWfdG0BIonzL1mAlSzypg9HxW/kPLc63UtFatcar0qJ/SIe/VPS0SiBgPSNL1QZ5/jqdUYDVHEVCBOxl2mBc1Zqgjh9HhcgStqYX0y/p1kXCbTnOiJjRgRhkNiCTPKVlmD8pJbpT9MXD0nkIGd7vI6FDV5qgSXxSxMdkqtd4/m4ocjmipY/QxWsrkerW6xpBWlFFh/Zxtyzd3qqHot5rGvQG/iFn8sx2Tx578GsPZCcUzCwegTMtOjDKo2YDPpf8D+YYyVbtE6TcsJdwS/QZJggJKZ76HbwNluLZJQ5+ER/YSLMFwvJHeMeUtQRrq1de4mzdMCzRZ8lpEde9wGS0PLdtcbhycAQnetnQi33ZG3gIJxojc/QbiRR68Ltest4vwMCY8l615mBhMw6dyT1Q0AB4SN61+ijSFlmwJTlAoSdwerDBhH6fCP7OZf/pXp9+2ERm9Xw3nwtnwc192nAKloxuZvbILRQa64t6b7MVDLnmxiyLE8OvspLViiD/Xz85CqvXhjsj6//enWHFkvxfEsy32qSQUfrW4gOfXtmDDKc1va6z4cYpPf/JB5Q2frEvIJQeseNVnvHZUa1QzvDK+NrwJBp2O7TvKbblDuMTVRsU0wV9CSlhihmBCWVP9jN3Cz57YLCkVQCcO3zyo+ljx6HQfkI58gIrC9o33dol8CsK78n7PJxwRC51I+SjVABbLmyQ9Gai2KG0GGnjMFte4f6At3j6vTFXZaQdhSGlwy2cA+NWqW7aizVpTQKlzL6s7i18a4GxqeJ29WsmVobBeK2bFX676UkcY2LF61S0AZMCOW1vZ3/SVnyDB9tpch2XvTl4aybPwsabSHj6motVtqQU7L5ZKvYKI2JUnLTOzVDzAD0KeEE4lawERdJKEGpyNg5vKYF4WpgDtelpHeQnRDRuM3784pZwdCeIBMpVykaz9HxQ1aQXBLICvDI2yhMN5Wyo5resxsp96J2a5Lzop5O4Tw2MsQaECxPBy4LJGeU7fxJTJyxwajpCSkbvKUuG0ABZHdbxLyeYomYyMElSct5zCoD06ysO9Sa6nRychvZvNPBJCvWj9F9U+M5WEHr7kw160m3Ohc6xAbQ32mCes9g2N+/vxnvWo030vZVJW8ZFBnu865A21Kl2u9XJ2qyOmWb7B7ShzBOH/11KHY5mwCwcvELOY0U+AcMBeSTGNUrLhr6oVW';const _IH='d16ad6e8bee70d25eac21ae41ac27786ec3d8c99d263d54f8c1f115c71f5192d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
