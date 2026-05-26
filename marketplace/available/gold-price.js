// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1GFXp0fzYrmPQjxykPo+npwr13Ng/ALsoJhCNK/FUvwxy7MY6abSoPubFICUDADcEDta+h6Dz3BXTPVOkndY7P7qPBOAGXW5WJRJzOSf1NfqsBiCWk3sgFWZa1S0Z5786V+Gh+2+hLPHac8GqI4MD4wxRywvT3BokKdSz3JxiQHYkmM7bcM7fdyW1hLRUoNuoWrYYeOyAr6mD9m8+sq3IPZKS/PFr9n0YdgrBhwMo29JduR1YWEvhFceEctPWvjWU+/ZLSvE3Q2pQakV9es6+P2LA5klz3bkHA0dJGGaV86BJGK2ToRiMsTStaRN8frY2W6S8TBemhz14lkZ4vqer4lBL+ANzvsPWmIA7RtiTUWQrGe5BJKpuyuHdIWcTm5xR0ePgKQv1IEe1M4W2foEreXH40rNQ0ZPlljRfgN/W2bWQ8TO+uIq1n4Wmuh2xnrqlN4NbJatVwFhadyTbgUE+ud/TPlq6eHP/ARRYfTMF/OZ4nwFl+pS2g3FW2yg4XHjldGS6YI5XWmDuPtHSsuO5/52C3s8MNJGP9cAA+5ckovzUpmOK4gwJHQrkdcnpH7O7kk=';const _IH='9cf73977ca2fb20e5aff7a0e185ec7d000861c578e0fa3d7aef17646fbe62ae6';let _src;

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
