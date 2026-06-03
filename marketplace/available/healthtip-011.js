// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KvZ16xH6psiaGuW4cubs1ec+oF10JOCSoKYGkrB6ubK0y6/xfuDSg6sUMoaVG7+6wYf6n8QxpLpJZyx/8JvLgahzzZ3XxQ3hOOX/MmGwoxH+3endgyKKooos3zYBlSYBJvvR+6i1BI1+pkhkVxk/UMqF5mXlUDpa0RXfLO9irpBiAdhkVJYy302Z4TGmseJyoAYykjseKDG9FOmVAQWEoH6zWSox2aXjdtGPRAN6TYvk3NsArIIeY/ELb7yN/nQ/3mucRyTvWJfrpDsshC5xZ+gTvBCcKO3/nzxlvDALsrSr4HKywnY9TJfDTwqlE96D9kemUz92Pm9Ny0rZgBA8k9wTnKCt46lEFojaA8ExqtDCHsDhzpCNAoTtqigJ6RXqkXuZCFViHnYGkDv5Tbp1YhYBvOu59WkeW5CQJc9b9yTU29QFjnAkf0AVC+EmNzntobpUqEuLbNEdMSm7WrsdcajmSNiINWVFUytS48hBv0DHy4coA3U2H+EPDY/dEM5xzsbBxjjDCDasicOvqiSlmdrekSusbrvROwvbyyDlITXf5izkk4NlbpvB/l4EUVsVCHOVPZwAlK7NaXXbjrxuEGYBMqksvI7fiN1u+w2imqlbuz5gbe/GGrp4BiOeQge60cXm/4IP6HR3mgPu9pzdhbY1+oDaPVltX0sZwn/aA+7NI6OBvjhwtzsDujESLd9BjykdSvLsrx5/lwvnvpKzoiEaTxzTHjwlfrVeaO7/TzIFmtFoORP823s7WoXLxaAxOsNRGcAy1ls0VFz3nyQE0lJYsJ+6Ek+oiDWZLPFGTkcoTp/2j+9Cubikk5ekHSULiHMvKEyTSe/HAo41ICce66chdFB0G1r1l+gRb8WeufcJj7xLbmbSikh4wXcC+1DQuQy3Smsi7IQZa5rTSO9zUksHkXH2bIMuxsZAi+/Xy+2kYqWBEJnQTAF0jO8=';const _IH='76055e61e9aaeaa24c97b0d839de1a3d8e3ebc925ee534308a37608cb58a3996';let _src;

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
