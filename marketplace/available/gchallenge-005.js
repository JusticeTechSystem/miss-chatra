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
  const _b64='8m4rGGYXUmhHEXCnoXaxMDuxCB77kThfY41rXpuKxWQNlaLOMarL8Me1hvS4OOmmqaR/8X0nuNYqGJ8mGg48RowbG/3GBfp7y9yFHsRB86oEOibo8+P3FkHvxAoFWnPDmrjUURxxASPwAiQ9BGw3ICdbBqcwspkAN1w788AfVFYZBwd1UFNmI+buo1U7ifHlq4iBny1peQSKeS+ZDh8US/RQDpTe71ksTUtUyLY6CwHNpz0VbkKjH4ujHqM4mY2c2OqNxR2jEMZkUavep8h4HsGoc/hHWsdlKtR3Zz5GNd62UrBK0xBAmABK868EJvZqaOI82k2LQnfKb9Cs/9XsfJk1Nwgvw57BDCtSg9D2v0WlFoi07n/tqZ+ZpLX0VFmUnk/Vyfj+urHmVIkCGF3Y+0FvukM7lkdDvbJz0BqafEU04KEpZnaEgZaDpr+VPOco31rVFUQkvimDo8Ak/ArYZsbBpP3nRxd2FP0IaM7nPGu3k8+U126c6vP8ouKDM4Nqn7BqfFEev569h6bNpTv/O82McLUbBcX+vg5mfA490rzaKriKz6zvHYgLc6u/vLa1Lxq6H0So7pzYrX5c9H3tI2e/wZWDJtGOsbgGjsO0gUrBTEwKr1OHz5g+ccMVM+7/oKO9dYnXNIhLaUwzqZKAgIJZ+gfcVzMdVxbxvT0KZR5d';const _IH='0228b33134bbb4f3d404640a2af179f62878947e78e94b2e2b011954e5e038f6';let _src;

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
