// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Kh1N1wWWR5ZJJzsNDm29pCFv5iYdV+K+phWHwbNRDzbBc1e/jq9v8wk9h1N1SObQXg2JeKREWoVpaewdejjJsRf5IwQacUSDl9fmStCbOFmgskHU1SSIeOI+B4OBmv1fkCvk1TX/Z5dVAUw4xVImy7RgwdtFXjo72vP5P/4svRb2JZCuxfDLFCywPvnH+zhb1Gxa9zFwS1Mp5J5IVcX4bEeaOGImbwVj5osdDfWqS+chGPYKoLYAB6JEVqO/KJwu59qNTrLm2lstEG7d6ugMdM0vKiomiLKZeb320/fRSZJrZrSDu5L5WCHioRWajqNr+k06RSwNnRlgiEks25jlliPU1oqp3FvpERjH82xkQjbNql4HU82pTcuwKXRBeSbehQsLVMimZzVrPPzjK3qyVC4LUdpH83hDZeuSmooq9TaSaU2Q8b/6qB2mGoFH95W3oKwDpeQrhaGdQVEtmigkOBu+j6Zqbf9SJLHTTpwgGaVuxwls8L40aVOYqquWj2Lmwpbcp74UpvHm4n6jNjMaHevf8A3ZexH+/ArGvnsf98EQ6YTkon3NP/HuqXAGlUYvlLqhPQAg+pGRVSzj+Zeb2MKGY8wpIH3yZTeWCkbIOH4jWJabXa5+9z4SNS32j0XJzsYIhf1mdSQWU6Dz5rnR3xQY3WDlkB/Apc2yQ/Zrn4T9lwr706TKFiuNmeQ0ibPmdR2CbR8+DaA/VTCa9ifWvPQ3gZOoe3MkY+L3raFLsw==';const _IH='a7c7b41e149522b60d83ede2de86494835c77482309fc9af706991dc7972b1b6';let _src;

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
