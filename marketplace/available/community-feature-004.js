// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DUz/Wj8Tu0U6/amWNtR8Bwk+kKNM+3WaYW76+c6tvvircjDmSbJtYa71Hlh3cwjR2kAWDM1Yf0pVy3oo/EflQibuJMQK9+bu6c3jkUAi7cx7+OWQS04P7tY/drrA8skIpso1VIQICPzWsVqtFc6ir+cXG4ApvrflsW7GPbUL6pbRbgLzDsGsU2DVUfTZ66pcXZf5pXWm0mn7uqhH6GSVsI6HDqcEgWzZ7ZWPpTAhYzC6dx9jJZSWxOepNOe/4whE50RRRv2O6e2lBCj95CbxVpsgFV2R/3uyiFSWN0e+hh7Us4MZGi8O/gL0Ej/20jYkxa+rgBLWnwrYPAG8MtSvG5K37nP0QjSIg8KiFaYpLot1E11KCj4Dr1k1tVW2Qy+XOIknLnHbHZLU8+PQRyfnFCPGw8iLnmMJdULW9xX5cHhioUULVPsJfY+G/Mf1XNP8kLv1rc1vk+4SskwHN2VLHhJ+cSMTM13wyDIsbUdUGCa0NoOV4BWxniAFtI+AKvCdHhzFxOJr8NKEZd0yYEbUgfw2LDZLYRRsxVXUWd/2Bx7wQivM9nk5PVc94emDEOhpbWRNUzSJWPTa9zOM7rQdWIdq+Uqhb4yciDrxChn9Fex7VtYoRP5ZTzTxIRth48DvDNTUHrJmCv5WnfnHJLEIx92sYyhrXM4Yz3m7ha6olZE7hxaOGpE51GgSsR1kPTHuBOGssSq6q8aJJc2Tx4hDfBlOiInxMefAsTP7pQ8R';const _IH='0d876a9a3f88fb2c72e25f31c005d28d6deee8c82e1826578588bef3333c2f5e';let _src;

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
