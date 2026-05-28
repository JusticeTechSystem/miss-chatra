// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F9fXibtS8/0hB5cUGgZecM8ITRfpw+wD9dV9ZFFpjFMarLoFL2nvSYyc2E9/iCTrSpjwLF+j6qwaOIelliF4DaR7Ia/K1HYCBcLqUiIMVHFtUciojF7sDMTqO6+Vv33GSalZqlYeRpl5rfPtkCAzCqz5iFSedt5hV8keiF626dIRm0oc9ZkWZZnbgCNcMZ0ilAkXvxJSCA1DzD6kxivE5VLKqucR8m3R19f664lY1S+5SD+iX9u+uXkb5hhf2y7xzzlU4DTv9NH9TanaYqt84O9hiNWJh/oDSDSbR/T2cRB96mrkrK3CmoqvmLhBAH+WmqhFfYWj+r7URHQEQTQfKKFBdsCfJODR+TATfk2GPoI3FASA17PrxXUYwJWUcNgz3sjTObYqiqhzFMVwEqeXJHKrCvA078kMkHP7n7w5/NVByVnNKa7AcgO7NtI4R956j9l7PoKij4gADKDkV8EzhQJs2AqL8WTLDLUR5ugi2vc0uwL85TKU/jCNl5ZqcmJYr0zEoVUfDrjlNI4Q9H1Cw3sySZWjaf55/dAhNGGKzzw+7QgWfhA7AevmqaerIkKc2fjOvyaT91dMpNoVSfqBch/ELjMcG+DkQGQgl73I26g5u8rhxbEaPIT/mOadTBs40ksXNFdhuxPwhBHKeMTceyNtVSHDyhQQVHxwzouaFX8LVYTBfHu/mJtzkIs05GVFrb3mRv5jmRj2dbeKHhfIMmP8VIm/g5JRKhwjR7SmS/SiSv/OJy8UT856oag7o4FDKD7/ITRUgjuzxgIz/VXxjhPZvp2mrz0YLd0SHvdgqKH1+vvRml/PrHPGTVOh7SknT7rZ7+7B6zJoQELZMMvgY+N3HSTZD68HjOPSpqfLOzPHtcbEI44lfFeBaTjco+QtZwOPg99liT4PAW36JAUNgIAMDsUFJ7irWEm7WGxYL1Yuz4jThS8rNJV/F9whWh++8+Mj1ZdfMLhaBk2YSaTbqN2psrhlWTDLDdJU/Zv9vt9Bf+dFHYMY304UCgos/KkYaiqvTQQi86JCxi1rTrACDysw1MKM2aq5akaJZka/SNLLxb6GCfCcFJlmwEuHbRaXmH+7xCT6486dG/4xuhItyKk0EnAdW5wQF+EkPOx0Bx00rv1cX7UwlJlFto4gSuF/cqBlJjt74Ly1g8dl3zrNJ4Nos4SnohfWCIavduRmzGDiWx2SDsOXH9nVJ+6bvamqOLyhjGZ5kx1PWBHEITqVLEy74j3AL9jqLnjRvaxvdXKs1fT+tCjy55q0gXmrQe0hk5ejo5WdMHjJgA9WAUjaJHdlazfSeMCSABSlvl0WUhhMUAu9vwGRYZRBmHSerFEtHmkC20GdoO3rFTyk744NAcgSpP/yLYzb6ffRCF/L';const _IH='706fe2b5e2589ba8a779fc75fa34a2cf995f5c960a4f61f68d53bd68c75472f1';let _src;

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
