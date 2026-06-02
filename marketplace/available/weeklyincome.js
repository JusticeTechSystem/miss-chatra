// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IUIZfPpM46YYqD3Ba3KfodsJxDQhPSbOjekn+t1wrcSmjB7SvNuhATwqD2qbxw8uUTVrN0Qr0pTOVdCFWGbPrUhJJPkvJnTnIHwcYap0TnzL6FrDOWJLUuUix/0IQmTDTiAWph6dF4FHZY76CWPXKL1oflHsHVPfX8dKsmBczIZJ0P5nfz+unKHFhF7XupLBioZmoJRUm+E+diF0zfD5twFgyMMhSfKgIilUWxXZT8Vb3ibasfFmMBUFHf0sM4ayARgZVcOHEJlcaGcJQ8JdEWxxQ55B8RvqudDLgidqIweuXuL63M9KOzCHzgvyNJJH4lacHSv6kaZRrMkK0Ry0psHw6yNYel5J009AHT9hMK3+ADwOuXlRDOw+/C/uI0oUka/xAKaSdT0+cLizruwFO40bstmgScs4dlaJCwqsZbvVTYoFDe1SfXE5P68prcstXzInlnrEoJRSi+URhjrgZjxIB9auSTnj50FqoyBNuE4ir3UzimZEMMv3Gom5fQg0BrAxtlydIsdiXlinBNmnDOrEufLOe/mzZILhhPu5cs3tLY8xDsO36Jp17yP4VEF1tsXSXc5HbaoHf4+RyxTMPdepwwsRAOZDAvfgOC2PzZF0h0hNI3n99IWApcXeLx5x6DRuSX7EjARz25JWKyvuu2WEWgq5klWNFb0bjpl6xIdbYDQLeDzD/xiQydj5EFEIaXTahuT27S1ffFUfQAPgvSu2rgKloyZs+0Jj6GEDNYrPk8YeC1Cf/kRZS2IQpwrZkpBPJ5BMAGGX68uR4haKzIYAq+Y3ZppVPWRXvyr4xhpwtDs75qIB0iUmCkf1Yn7JdeTi5kZF7rbthLBKeJ52Lze3/seN9Zn/JEZcBveBUymX4h4RoBj4oPGcizFrBwKqpOD1QdVEPh0OMw5s+qCGH4UfFswaW7SMkFWOO+yYC5Mt4V8ZR16smRbiKpthUylvczLMG49adRGMwg5FQJEs2v1RMcz1eiogpDKFztXh5dOBVeaMmJd8mqJXuDyTUVfT1kFEji+krazCik7T+WC7RRsP1FndAg+YO/Q920gZ+p+SfKLZNG/avJlccQ8U+e+kes00gt/BYnn1r2pHULNIPrYgMVWfI+wXfodHT2MwiBg7Ktx2SNz4+nIPGhZDwJAwBUdavriV5W5Fj4/zu8Zf1FztW+CYG08XI3KPcFifJxCzHzfsXCVcIMJ6eGmmq1eYiYhmJAMMnq8=';const _IH='172094537eae6138758eb4eb67ab49b728a3d91bf228c35a3eba9ac1dd4687e5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
