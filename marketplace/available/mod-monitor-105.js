// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l89HO8fN4v60Yyhrn5uYgG04G/P3ybzQnDTX04v10HsLFLFr/MHx7Y47wzLcyWWa0s+3PQVu2RGQjqfmgRqTR+MORjVEEVanJ2scpmEQU0sDP5ebQ4qe2PJiHfmtVZGYrrHiCc19IMBJ3+2fKGn/gK77VRJVNT8eHq1vdCMBfr6tcBEAT/OP/+Ealmv0tOPKpa8H6BqBradJ9axnupcUOqvaMxGP05NGOgfF+R2U89kn2mEFgyETmNq5hlpITwArNE11P5reribluuXelHmTIlnaqlrHaP1w5sH7NSGB9UwMcaIGTahgrMfLxcyk5ug+jzbnSs7MWFiuX9WoV5GvPm+qrmbwLFLJhRRh2bTOwolqE6AtNb0fd8FSeYKy8oYObKUks+1B6APQlgEK31M1M9NUYUWGNysU8SG9GbTD2SHVTYXwiQ2WrV+2T1xeXVC3TTaKha7xvYx3fkvNhBz43pIo2x4uOYYtvYvka+qb2K4rEqU/bO2cv7n5vwv5YmQSkifhoLNNJEceQzCaPq6ddY52atQUHy45X5ZNDbCdYcM5veb6kpN2qeuxd8WR1gsIVtXKoNjVeuZV1vDVXc5LXWRLP+cbktv0UggPXfiJcTdd2b14TMLWy7GZaLjyp33xnj9TNdWZ1uOGWDdAQFBL9DgLxFrapNsoru63NcX0KB1OvssuALHHWRrX7gYFfeNLnZBcUXSpMgVQ5twG2TDBgK9ezYuNsK8Ju7ZLtcELbkd/ntSl+8wYqwgDBR45jSI29UgQGK2wtDu9VVzRffgqoUfzRx8QNMkTCPgmQxAMvKU9j0Ux7KseZtrl1BHfgKN39Z/m2b1UbsC6EsOoibbWUoUsdF0Yf6uB8W48955+BByRyjoODfHhSPM2nqCpvQNN5JHyTLUdDIGuZlXgB65eHWqE9MGG6F0aRM3C9tu7DoiA4FBPlcBqwLGQ2gMUVsq7L8pNnWtzNNRvNQQ0yuQEX76S8nITPL9WnGlKYVxtsk7bgX7cAyz/lq4VwJDALaTxgDMX75pCC1LtLvXYfEO8dGln2R/aZ74y6fcF9lpO8bPPQAmjEnzC182i0zdn2u9lYPG8cbcUZSY7oo8vbSzBjNQZnwHJPgmM/iw1unQtw2qxKLaZOGs0dlukMP/WRKYP2WEafBIcAevAC0WdDGkCY/sCu/EvoVW5VeYsB2V5kWxtt0rdgH29qomYiUAfYWGgJLHAQGHSF5wUggvaZ/yQPDO/cOw+2Aew6dfHRp9Xf2xIwcZ/X3FgDlQIaLiTXCOsV0DtkFvIrv+FVmG1qGHU085Wj0hOHGksqWR4Ud4YaYwZyTFQeygQTDOi340ZL+sECd3QxgAa1AOz+hqLh6CkBVnmVqqvP0cAKfxGceHdGWzEhvPI+eflGAqMm9MzLfmz7Kw=';const _IH='506f9b15fd461e32840161347052989fb93750aa21422e6f9fd96e7967502f91';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
