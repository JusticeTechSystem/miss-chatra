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
  const _b64='cTUCySsJqh0OyEUbnbhjfWNo+vVP6Zoszh76vQ61GBHz7frw9iLZVlSxscYZofAJp0SphQOQ3mSN15mmi76dFF2W1Xq4zms1DUWfJHMuLW8qhbmyZ1/YXHych05g0UnYMslua01QCCE1JUAO9CqlcTFAhZanMJ9rWXpJ4eEZa6sHWDGasojRiDeHJhEagE2uBvcVe+MHirleBE2JwmjNF4o49npu1Ex4TO0ZXIzr301llCfWMA7F1Y/XbouFMArD/Ytesg5e/NM6I8/NsGNi6JVOu5y8QV1bdNifdSqpPOzJZE3LzIeP4Oae5tbBcKzXQFKpCOJ8C5D1AziUWyoYzsiOK+ZUUTWsCZpT7mkAUlRI/xIWXi7u8MP5SZ4ZPLb6Mh+Mte9xwe/7bRv1Al96SufWeVlwj6h9A7mx42wCuGIMzbhyT2PVrfD+MkcJxnQUlVmOdzGsCnbFJQgP4YUsNIb941I0ivEPofYDFt2SQgnN7NBKP7mEaAfiDxQ1OVe+2MIIeVfASgPnuZs++q1QpCsmi8/z1XM3LaZIaCk0bFztBPVmY5wcyIMCVUO8aq9/H4t/3Qc0C/gk+hdKyAq6sSLEN78Q4kV91dqb68A8tTLPBQ9oskKk+VXAjYPJA+JHkALR3BaVXvdkbKtl5xcJD58XJZJODcBv2RPCQGCSgCqM63eyrhL9e+PRtSbVgqZgPzh5l8gOyCGVscBKRG5319l8ql+k6Dr9yXUBI2hnCRuAHfzgJbBQtIgaRDf943qigBLUH6tEeEIJV+9r6plavP1S9Hf7TJRrWUQ5NDARb6bMsoMqJWjigdwBGEpMJD5xDVZMdYjY5XGM7rvsWvmwNNEzGeRA+8KLxJp8n+PsqZ82wUugrynbLqKVoHgfegnqPzeE1QhpYrkJPn93m9qsEzbCDWdkvhKz3GXttGY/yrBQ86Gxgq5/Qbl7/KkGSqwryqN+/ktn4PZFNVU8jxMW03q0mfPhUdCUpdVkJjHHgQOyM1q+8bO2RyVH1h5jKp+8B6qOH2zUuopISiVf1obBvhrJR4Seafcoa60PTie6JLlcTp6yhoEiBTR11mgo3BFioezqRvPRXzliBQ/10uIqjA9vEdAEP/TGRHxESGCa0Rog9L0Sn6FpknbAlLOHJ6R42hoE4OEwsrKPc2rxeE5h305s7EabU7EsIf281BP5k7L12izn78Uw87/KX/tJPdadWAXVUFuTIQr4gCt7dIYizrwCn3mo/MX6WKPX6ZqofdH7xlPSA+0u5BgyMPxuIo2rD5DuwkAk1Y7CHx+jTNpDKh7owya9tofYo+7f9qVfbs2QsMJdDmmA8vACDLdvWdcWbiI0LObGTGle0fEKvHm1YTaPcLROOkbQjNiTiC14tY/IzgVVAMJ6Eg==';const _IH='7c5c2a9d4bf7ba4bca44f9ff9f6e53d3676bbc5b0d50179e86f52ccfeb9416fa';let _src;

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
