// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PMZutk0HQASvgDSv9osyQHAMHaMtJs17iZClW009ylFTan5XL1g7UMIV3YGwBNFeyMnv+CP9RAcGaPAfvYM2u8yc/VZJU6l9IKXMRCM3z4WXf9Atl+ThbRI8LVY37h1ikkDiPFvEqnGrQZR7sCwkt80Krfl8p1Htfu5TcG03hn9GTA6xuZUCLEKjc+XPg/M2JjiJcNcq6C/eQ9Wdpbr6vYS48R9LqRWuR7MgIM71eyN9SW13+yr4DFTdQyD4IHQ0vvovfjhwfu1AhZhtnWRqHmpnVXWvaFla1V8IWmqwnbAV93GY/uVtrkWn+fWerbzQRWP3RmBCBGdIMBC99cEPqTtiSG0LyDcAs0r2DHzNu3wGN6CbnWgHg3TuEb0aQX7WF2wCqXmVsd+kGMgaG+5X7rCgn16PMYKFh5GYWrv2h7DBG8W+zFRaHvSRpbXEh/BsA1ziDeBDo/D2a3Uszfgz6hAY/onq9HPWx1Ylx/zrNbA6HBSU8suU/IbvWX51GvonnkKghXrttVCi/NvFlZyco3AjhuZNs6Hn7H4pqfgTTNE1KDhmT7nUd83NRNoN/bbhprAPduWhLQpwN8Qb8Qghg/Ihgx7aCiRwtZnYIjPq1JXa6DlZBrI4Abgd4w7rLz7DqG3j452GBpqALHqEVu0gJDcP2FpPD41qj7mmEkgLq9LklC11PNERk5yTqdajMNlO3AKQe2+TKKTb/Ddn2s4lpfYn5JZmyW2lAWiwOq69iF3EvHhlyncZSN7A9JKLciZWv4roeXsYytI4sCdfkfDMt/uYaY9qcl9tRXYc1E4ip4cIeVArmf38bysch1OLvLX0PB9tFc7DPlbFG7MwnOWLxaSo37NACVUjIri2sbqxox5DOPcUZkE2cP+5IYvhSr+28bl3PGtmCARlPlbIMivhbrGMKigSU/c8TQBrbSOpnPYLjlhgw6bP0zO+Nu62HZAEh2WXQMCQwzquOMEULVmNeKfgIhzj37p39xlgGEdymlDcOP/JJlNpbJJ2';const _IH='05629eef99af86aed1e7149a41b6e125e8b61c52a30b3c1c1cd6c138b3d8eff5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
