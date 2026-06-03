// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EiNdQTQ6zPW7QkjCkIzaXNKmieGogEsxC0mRVhB9R1/l/TjBE1n0oQeUGvVAQOA9IhRWDE2nVqEaXGR1XF7cCVqELmrOosVrZ5nO1GRYoO7qVJiFhWNDS5ymDZj8evQW7YtVlAmhgU+e0T1tyXFGSleiDi6zCd2CCfHCraf0YFsGzSq9BsXFpia/L4Z/DpaLWGFjuc1bjnxFy6wQJMRKgWiz+MDzmOr+Wk2advLw8POlinkhc3ePaycwmUVDWHrgZgoLFmIuOfXS1i8v/eF5r/oQw9wWODftXBdxmcPhqs6YM53y67BpDERgYQeuAdKAA40yE+WN+LqZBiF5PwdJFxQGiJWwCB8bycKqf6pmt+2YjIELcLaoWxatBMj4aKsZm78nrQp7RDYhB38FP/vYAeVi7hM5Q6pNrHE4MCh0BMzCPR54AvPPb5skdt5U+8fsqZAUfA3LMztGJZLgi8+f0mh0D7U91Q7Tkg5/i1Z+aeao283CdLyW7ehvCavUkz4FmvBM64xPCE/txzOeTpPYXA4n7xBbpH8OHzNiLNXy4YDLi7gbOBJtcBZ+rDh+lY7TWl2cY84YpZtYcLIdBKjzJgatrt1hek2mn9CGTQ5icLvBHLVIccasqH3kQuLsRGVBKZoHTXWaCbCensIYgNWcJ40vGT/pdeUCdXwUvgX5ZcSIxwtDf9BRNZmOjmdD6GUJCeoTIu1Ebq+feGI3pwhLyuUaPUG4YxXm48IsFmRBBHKm6npLGYPRBnpnX8eTIu15DbKWC40efBislSVbkY6y9dzDO3iiRpU5zTp4HzWEEcK68OfgdcRj4VjVcx6DCa7Mhl/5n9SUJuJ71hX1Zph22O88eQ29FocZkDWOdsFsQyk/ndIWTTlt/m5Iv7Nw+QYaPmInpSjVHGf66Bfu48nYMwZsWedxINEcsi5Wm2zjzc4SUZ6c31NSeSLFmbM/RPQJzs4+FL1rbLPxHIZBr0Vo+u1SRA+aX7rW3cdqD4avIX6UkK6hJGDW7+svjuLjzMzZ6XQcm8luD9c=';const _IH='8a58e476cf9c2ae11501a09df484af0c1dab233530e86096a484e9acc058237d';let _src;

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
