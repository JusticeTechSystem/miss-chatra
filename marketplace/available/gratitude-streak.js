// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g5kjWZSrPPv9dkX0f2yj1EsCCFWEO4F+RkbSX0kQLLDa5xXtqG0OnF4E4iEiGzK7Og3SNDWJwIsPScPp+IwYYo8u5N0WqY2eHBVWFqgnVoXrHfoi8BGRQLMZit5qOOzorXnEO9xzrN5j0mXvI3yr3CIfTGn4b6DBOQRCxhaoNCBbmT202ctxzprh3gHoQT3N40RzNQ82NYifOjgCZPwucRBCd2GJr2c9kWxhualc9hYlyvibAhzYwlJaUhIN+G2DasYxgmhOlum6/Rayv4w9BkZtSDrGgW9YMaItwZNWVZCgt0pNoSU63ULMSCe6Up5q68bsxo66hbIPnusgRqHaclgmRmDmmwqkfTo4NsY6ARgGa4s+YcNyW7FhZ1lMlte1isHWSkJtE3T+TVA2ov2k1gZRDg0pJ8zbVTip1jsQlYQ+pcdIIgOQKIuiEWtFI3fdfgSopsGdGYG6kjxp9kU5qYBTs7lhKFAs2zvoDqxOb1El3L8vpYY2';const _IH='cd83a341b8d6b337a0c7edb3064bb7a528c8753fe58e55a4ae951d7a3a2cafbc';let _src;

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
