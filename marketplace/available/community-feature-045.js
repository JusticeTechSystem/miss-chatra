// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1C96eD/Q4dHRWRWyA5VWNNd5iRJd19RJPwLl5+9UFKk+3aoiHdqDX41sQM91MzI8aD6wLTLHctCyp0zJbiKxA59JpttaXhdNIWQKDUXsPunOEt3afIQPD4KOJOoFnVRSF+uwTzE/slq1lC14E0nDr0gNxGtN7v3Xm5Z/Bn3I0Yq9J6C5UtYno9CrqkkXyOVc71uLeLpiAtAm16ew14BMgQobjFIwIJMMpJR1FY8W9YF9TKGaVXdbkzMyDureE9oHBm+quq+tFg9CA8aO17UCUytNGsfM7mLy1nq4910PMm9xPk2ebsLvTAU5qSvraFwOK/jEK1wTqUdVbIykyEcRjpiRC4G4NDXLeL5340qniC3GFUj+D2nHfqq7BRvR2/jUHgoMKMhqQC/nikSxWjlz9s/VWOQHJTQ3kSMogxuVWrQmIqsa/7ipCB41JSpiFXbRLfoVF2R0aJC99KVPpmFC31N8H6q8sAuKQZ1GposnuCemi+YjraT+sdqgzErOpUn/QzP9koQNIWNY5fvKNkScX9nnMpUiVKBzcoiKcsakV8nlqaC04NY70wVw0T+sG6aH8UfJDWYkZjPPLIChs87R3lmditxbS46YUYXMpu2Pbv7UCawqHv2g9CHbf26PVpe/sKWLpKECOULY4IqNrxZ8bTKngzKF1VPxYBKTZ2vIKp/e0qa/lwx39TPhk24tw2GKh8Jpkqtxabr6sUS22NLco3KNmfALaL494uexgGbv+fw4tyoKH0h';const _IH='da857d405452e61624c652599eb4cbec87186808dd67069416c4a6b232eda534';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
