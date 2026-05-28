// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BhaHVxgq+8t2YxFZU2Y76CHMPoagg48dpHrodfMqJtSBEK750cm4OnFsJ3UPxKsypQY9t8WWe0DJEuJ8FvWzaCnlgo5m0sNIDkfBFcc14uU05qvO6trnQ57rhmXyMYCQLBl++sJ3m2NqW3zasyAyfPAkHzQHUZRGk+IBFbksWUD/pv939dQhJsdYSEMtd3q4wX1j7ezxypdJGQyXQ2VsBlrDTBgqT0Tng2asYcOcgeAuGsDrQ1xgHeEqBtH4FuqIiQ6rDQcSYRvthJ7MkM9xnXwX7lJDYhvdmKrfIu44SkqtVpzZdMMD9j15bpr+yiLJ7PNOy/+aRSre8ilscqA8Nzgs/4Vl63MH3g2pbgwgy2NQUqCqer6ZndBBhWqDj/B+czgHp8Jq+nZfP7HEV03xJLccm3LvRvjz7D9xaAic+Rjhk74Az8JzlyhtLR20HHT49R025yw12IAeLj5WhzLSeqbKigEyjdejpA8kSoCXuZGO+jmE1GYgrW8fyerpg40CfMZ5B60Islc7S0tEvTecp8gxsmosvqh2MrQq+uxlUVFTUzvw7qizidwf9+r8e9d2fRDlgTMqyLmZZOJ8DiyEKtwMPEIVX0cN1S3BkAYSsfGwV9cGzvO+ltW1xf5qq8Wn2MK8VwsNOptJOxzHOO6L3DUpLEF5EPm8GHesZ4VRtHi3mqPnobyETRJlkL2wI0FlFuEhSWe3Uv3xBEgM+6gM+lb6KDhVfa+KEGCG0Qo=';const _IH='56ce7a651e68f2d89dd32732bdddbb95f87e11618634f39067a747a349bacb89';let _src;

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
