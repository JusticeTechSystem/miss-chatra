// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IGbq8WSuu99HpKWVvzFe2CNXUwW78C5tdecjVXfP9KMGDuNqs3hZdqpxoqyBRf2QkQI6UsAsn75SfBL501ZMdWNbW8FO00DVTs3e52ylVIknNPzG1WxlKdS3+XTlOeyCTEArUewKstds9gDu0LD5b7wZ591J4XuTaqyNSCvI1wgFpQj1d0m9fYYYK4ptxLRlehBFooBD1H8YY6Fzmkk8ldX2kOSBvbfbYumv3lmqCepPFO7mMJHRW6LfP6pikeIaLjn3qZ1Smqm/8Zg54QkQI64ZRdh1Z6Qzub87RJU3jo8aWq9bPfJ7NTtXNJi2Bk13cvZ7cCvDb+nu5lS//wYwnKBSJJMRipz9oxF3adtUxriDmgywHN5blZN4KcHtiorwsz1rtutpnvENOOKmyM7ZL0WBY4PNJpsyDrwM2sX+GpC+OxQedRn5aZDb6NLe/gRabHpox6MAH4ixchAqJ7Si8nbvyLJr3IKnlJZsVQWmqd/mk1uIiPkoYhRjhzCX5ugqH5D5gQ1P8/s581eZMUMNNddKcTbuxvcOChC0FzpVtXb+QMWyEFOYNX9xKf/VkTk4pwZLicWGUmpmiV8T+t0=';const _IH='4eef8d39067381faa64c98d9865be8ae5e42dcf178676a468491877eabd70ef1';let _src;

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
