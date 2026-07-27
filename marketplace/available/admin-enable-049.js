// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToz6JlSC9roUd0szGZey/hsnnnZ62D3wWnu7WqfKsHsHTBkXnVM/Dd4FDG1Ku8SXW9DwZFMO4tWO5BE4QraabCwvI3P2Dqz8KXNZ0aRD4vgkD3mfdrR6deoYap3jM5X3+CTeyhbp2c2DVbitN4Oido+wpO0xVTO9neBAqVv4csm7iq9i5NFZ07T3aTHaS6l+oTaeSbHaMJL7m78nQ7IwgTHm4B+FhZ287V1soKW17dY4H9Prig9BgiM2RUmi+xH/46mZZiEmw8obL6n9TBOzruBaLJo/mU/GhwKpog26yS+ydc9Gcm2vegm1SmxqoG4A8L9fAkj5uElW8itpV2SaklfdEk7uBJeESiBDbSRZfvxoB2KifZO5Sa5MhnFzoVy9JxkE2akcMDY1RkFsGu6ImlSWKUfMSDTR0fDvpHcejlXrKe9A98bZhEdvm1vGF3ICCb9QJzxTCXl7sf4WdsEt39yoK5GRVkJfBQYAkz7d2eyoCrwnWKGIjFcrvg8b7RcqOwSDUvZN+jpWdjVw6RqFgWP9VfHcvo9ggfQ+1CKo4L5nyUajuokYJ3lteohD2MgVRrXt+o0bMzV76222rwqLKN5Atbkmk9JAKe/oICN7z7BultaDeJ1TOzLHA5fvlE09OPpZ4Xa78YaIB4R3LxYQs3pL2cAS3XX9sgnYP0Z5/Mndw+Ww2aY62U+8B50MPV0GIa3/Jh6Y4X/WqG9pp99jzQg3MxjLSymyO+SQFXvw7/PEfbqkZUpricl3Z6UZpiJkcHPiY5HAXaGUuPTnxyxaIM5R3Kk6C9AXAhTPPMRFFdYvSwrGwRvV0IA3Ep6/KBUgeQV0NsHuthbcVZgr93zeHN2oKbX5sq8oRb2qdECvQEBL3mLXpKNQ7LPpD9Eg8Qd6Ea5Ecsjk8sqQPdVyDbMqEh6J9TbUPiC2oyh66sUTIZAqKiYiSCSQuHvBVDMMa0JqZrX8i48Bcak1pMyWM5IWivLWCgbo7zZjhiPFbL0iC9NtzCQTWGy7L6APCprD0=';const _IH='9b542dd04462e22f145302bce5900a96a2edfd3d3eea1cf0e2ab111fc43d70e5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
