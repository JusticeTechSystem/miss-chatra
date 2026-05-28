// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h6llJph/qGQyyix0hwBaps637qGdDTa/fbprDa6XhLfzfdkNoFCXhwml/fdbd4jf+gacdmpmCnEZou4M4yuVbHQvugTPSqThHTf48CRDAaA4GZRWruS/d7KnRkBMQTy+s9u2AE+eneDiWKKu2fK2LebWo+c7as80s4RP9bsMgvOrA+6aOg2NTS7m/M7r0eaOvWItGbbUBDNLVm1fN4Qw7FDgXeQTO2vASSZkk87zwxAEs/ZvTHC95zBkGnXLhVqHVIRvADVJeBV02VwFnx8l6DO6ivjuFUja3baGDiQlAKN3PUe3icUgXtqS4goeup0EvuSzmrkvIrkqd8951Q1Wnls9qfT12uCa69DfBbDc9p5ntN1fM/1HSzVzErtQzWqbAlsqgW/6ojNQKmlz6G4z1ZaXTEfUE3o2L1J1JD0VUrZ/bJsQiiDNzC2Bl4cjErjl0MRP/FEPwobBsA5K9gTF9kQ26pG16fhHMV3nWOTm1z+4TAvLn+PeaEXcXaEo5ZQgzI73bQZGfdzg3YmGHGCBkH6hlzQgZSiQYQ5DhdkWnSTqgIm54f9ri/frgcwHN/mH7DSXwdPioHAVQ8Jzbwo3reNW7G7QsG+aCo+oy1VmNb8Pu/4pkAWcyNnflxXijAOFNbF3TQn5wYkkZq6Vn34BElFoE05rNxXuCr+NT3anUETa9Y0mW9xM0dHQ1cr9792VOfaQuApN+KT3sjBtWdGbiBj/GOfnSfDBAwTKe4CMelnINYiMSXcaMGvelgBrs1MD4g4R9571TQIywe/vucuMLh3JeG0CyZlfaVdeBXeVyHoe1kmu469fD5Yd8ckziBjCEn6xV2jeZBldnFUMORDTA8YOXqey0WdzmrApY6qNXSZhxIC+ePTj9kcSZUXZ2kF8vtTRJX2wlDtRVUKYB0NUOGa6fer0J60hCF71JvgjAjkwVy2GtQf0CQlRmJgcmkV3V1PUhbaH6m6XQjajUAC6OX8+xHn7yN3VHi+9aH8/t8DQ0ASTJaXwY1kTOUNC4yrHzAADKg==';const _IH='ab0e34293d661580622cb5146f187f2cdec48c4d660d4be008875b674ecb2c99';let _src;

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
