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
  const _b64='Koirb4IHnK/kpXLZ7dlPeCr7NuLG8DVdIlaefT7DbBW3NcJ4neT+K8B+GSTMqjPfht+1RI3pJyTEZgu3ppBLryYTPUW3SRKCcqhUefyQdLDQSIJjsTl4jfbL5l/l96QKcPwQvuvtEXltrb9lxw+U0NnyfVpgsuaEmtv6al8ctQVmW+W8k30apqeiTuoCFInHFVZ+zCnY+6uaBV3tYUtw74ncjyn1jSMcKmoavlPBr1hax3h3GnXq2nApnpCImZ1z748YPOyUR3hz21mGqyLMLX1tacZoK1MArU9jd/uW+81FM6tCWX+i+3LYDrOc6V0451YmzuV0amxEUQcridW5WYPvwRSSGC2fhKHGVEi/OLHChB541aVD7g0XI58Iiu6J2167T5Id7i3S21ZLqPucNZ8xRp10oUmnqGtctqh6uqwhYefprsu8oCYmK3qWANPkD3plMUya8Z5y/SVCENcFOypzvv2qq3iEzLEo4ku6ou8FY/CdDLz2dnWCYlj/m2/mTWwKHaxKeu6QbL9yMK0MbsGkPP0dlE5vH22ctlM3saoBiQHNYZ3K2iHkWu2g7K3tvPAxO4Lqw7SyKSSH/nNEUfM9ZEmvc/YO6U3xYtXaTkTol12RkYd9g5h5kHTgnilKILsbLTmKqiIPIW7veIvDfcjpcSOjA2+OVc8lPREXcnx6YM/iaw9Aeqe9FxnmH4bh2A1bVpRwZc+3zi8exGK4We504mPeKl4TAE+iO87mLQ==';const _IH='f928c2d796c4a31f998e24b23fb3df06fce8d6ed256cdae4e7ae99d588fadf12';let _src;

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
