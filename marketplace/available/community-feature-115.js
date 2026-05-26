// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L8A8CBb7yUOT4lo1xnKzf6lAAuf23c/BPQ94WlkRTshbGDMq2oRRWZIMjjKevL1L6v6l5WSz++JGC7FzdIDm6I1TswXTsBK8/y3ESLoZdSTw9UjmATfJp+4zNfQeT7qOMHl1dDRa4e0/OvSGtk/ogali6IJHB6aRv3IlxMi0QN+GsE/xaWk5LoZ28560jti6zqFIxuJJbfpGWYHeqzsSs7ADVm1pqQkbcY4DM32yOhmWMST10WKmBdWHiJ4q4W84Aw2SnaMYbumJ1XPNvkZjqe+IoBTCH5xj8QA9YEkBmFcEpAvs8sC1SpPieeu31HMZ96tjNmHISHQ5Bwy7hvFwdCGZfRQMhsQaknlQhvswnJn258TEYsuWoYABiwgpIewELGVSOhwovgoM9TQE5Rh4jOBhCFKQbRExW8Kd8SV7fiHovELNdI7r0LRVRwlkm1cGE10vXwEY935P9rcrcgUL4na5vaMnnqtRiwyR8OjQIbWI70cvScl0bPNfaipFNZ179iCTmvS+4K2pJ9V0cgEydKUugp/tZMF52lsyRmimg6tZ2vCbd3KfKGyj7/UYLCJbma/UZxCZexqc35ISAdUz09DJhsRbH+HkUPSgCYbvscHEgOqiCNJrBAIhP4Nv76uLFmQd0/ZAc7zOrwHxpEcr6iZd0S/O9p824m0QAq2aGFFzhrtTfSSfKxPGNKXbh61pQ394U3DFHcvBOLFEcS7gt+fLBhvQn+ictvS4uvfOgMaBxSE1ldyHAVb8';const _IH='5e1389d39a011ce800044384b5799ab37c71a7a3c12df0aee36180bcc4c7d7d7';let _src;

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
