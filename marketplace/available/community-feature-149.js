// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k2pUffwfhnlqh0DinNXW7bms1gynoAK7lGw5uxavvha6aUPmpS+3dCCOYRVCwCVTgACeXv6msfzaIkBcEEkvsUd6ohdA2Dtz6QCkYJRb3S+TF1Ng2MPoAZ9w3dobk75u+kyjfHR4cq8Z2KzqWQIKxkHV/Xe135wZVtL6AcbMM+kKY94Ec5qVqmjwIEkeYSPEqTHAuB41LPIZlv+3hR/e4YU8cqjz1Sw+H35FAcbJ/cHyfiB4oCzO0DZdjD3DnFRtzLFA2de+UdIUTZQyDmzl3I4wSirpsRqCy5Roi/XZzjl3v6O9SjipwFNVTMnD7I0MQrlQuLFj1SJP30mYL8fkT9w7E1RqbH5+6+nJ0GUUh6mkS0jLNhZCgZc2twzSHrzuKF/5VJ++887RLiRbAWv1XfZ8AVBUnpirpNzjyX8sO9Q6GRwtyD2KH/HV1FxbpzDxs2h3e67zwm6iOtyKoG2fJ8ubQ+iV4WNrvIZyBKdkROayEAGJVdskYOgnB92U/suKop1xOGCpqgz1WTkpDyrhJauyLO0K97ZB0EJGv3J7OS3fZS0Ed79LXn9cYMgp9FaIJZVUGdf/m05llPsFBNWN9pxA4gzzl3gCsfMcbhG3nYzzPtPWN0MQbRRo27d+aSa+qWr05MbBr698/DAljxBkRLAKmmBta6RwRZtcp0I4pRljFQrV8dvJIv+NeW7MQjEVkZBtdiNjgE4Js/sEH+2kR7B4fuV+Z3YUcLkKqyzV7wngP8XJuVE=';const _IH='cf2995e4f27138b0b0addcfcf29c4a5a6d56460ba6fc6012c9efd36803fbd842';let _src;

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
