// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VfanF0mzrRXXS7pRzQSMKU5Xeo9RgS+IIPLq/MZV5fAhMVjX8/zJ21D68oZsgdPGBdVZ8lyPMG+l5qo+8ult1OSYL/s11WSWCYWTsD6ZAe3yTzhFtpM+cVcUw/vv+MfkpSXeJRm1SiKqSF2yjPEZk5a3LLbmkSz2FtyvkF3JMWcP9hF9/p9jHzvtPwPUOot6h55EDO/p22fj5a6qO2+0x/1p35EHkB48Nx1760pKOrXeFHqhPNfyvwHL6zCfQyUwnuvQvoy8fBZM0scL7ePbq1KX2QEmzY/pvgIyDVKAAI5/TkpHu48f/Xtsb3tFw8VbohH7ylIHfFc9uCnJ/rITSEkmOAJwxNFDI/z0Ycp24DqZ8Ss0+21OcDtMGzu1RAklXkaAlTZuT/eIUS5i4vyXClpYrDD5Y4gcJ0WCHVffnFzzgdO1rEnzvyoatQvV0B1HtkC4o336PlTL5D+N36h4882Zt4dUZW+Hv34PtR18er/xDBLW5pYvkCiB9PLH+4ulZzUYG5emgKN6FQZXclhYDQ7ru3brdq0693w+A2j0tqxSoehkr6OisLWLMrQJ1BGl7p1JtPlZlNQhC/Vyi4y1R0PbREXNA582K20YGp16vcJmJyWCUWxs90AnOT9G4h4wz7b1FPMGMiSt1M7Q/bEihcI1lW2u6xorMSFC+NHxGpdVznz278NZzLC0iKPYotbLKlc5Z8WkB3ehojQFpuxgaJFS0oFLB4E20eZsqyhQ1HaAi7HmGJ/gBzhH4NvyaHHMEybBAqTWzUQmXRth6iSm6QnYSvdjudpmSWHrcyFd5oSECKlXk77cpiHgsgNWKuEbje7IYergaMxsOjks11+QlW2al2rpFetR6pvwvGrcBBUomxmcRhoRZQnzSMdJirBapXT9qFCjtaiPkJTzq/XXkIHFIV9yNPJY+TFmTaFBG99U62+wYQw7q/Mc6YEC4MnUs3PTopiyAZdbFAAQVYklY7vGT0+VT17p/mUOVAYiFdaqRphd4PqimoNJozF3DofxQVbKo7cOvWSZCODzbW+jsJ9Mlkwq1K4u2CuF5a2gsAQW4ZVilurD4HUGBmdocuPNPLze5YT/PGZ//9qtFVFbjz88czxBDsAx5NOXtMKyOLKUCTDjS65zBEfViafiRY6ZN1hFDCWfoM4Gv/9Y7TjMca0VgNjAYKl91iVvlt/QJO41BR5aZeMd6UqIQ0a2LUhbVTRdjMxQlmQSAfuC/A==';const _IH='fd039088790918f0b021e1ce5184d3db7ffd69d4d7366fc9a130f4d6fa18e6f7';let _src;

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
