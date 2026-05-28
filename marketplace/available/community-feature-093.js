// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E0kx6TfFbN5CMLaz9wvswrZLsLMHNVaXDbJ2mm+OFBsC+Mwin2+FxocbGBOiYej2vdC7QiAxXeX0ZDmlo/1gn8fWcrlJlTGEypvIHKDgxTRquiwxlKHAPi60hAhwQIvnWwyZSe2c48turuxT253jydfSe6QEh6Nh0KDHqpFVzJP6m6BioHmTczPhfb5119CQuc5RecvLaHFGj68M7zLY96di8iVYorhZwpn7JD2axTLp56MTnppeCYnJ703pUZxg3kwe1YaAacYtDQglZ+GkTKkhY/WExq3GzUegbrwMHQliidphwaiP0D7DfabFuQRVYDzrwh0J6SijqN7ofPXJRXQpLCRWYy3H13bhqKCJpLODX0lEaGy669Sla5vQYJuOKbzkgrI6Vv5sliAOAb50kFFBLHFwcvj60lxjEG9OKIwKleAzB2ex43tO6G9XeUktdzbfKGk4DTZz6/qSrruOBc2ZoWt1sPl82rVtmSN9e8qDCnhJfG4Ei+Ctd1JK+A7ac88v6fHQiJK6nyv9jTAeS0I1fVKlDrq85LfWUXOJ4c04ZidG1tchQZPJFROFKM8DyiFTliI0c9eRdOn/rEW9/9bKkTqHflX3TN3ZOHuLaxVjxraX/wDXwtGwhJr33vwuDgrAH4OEO/uVyJipNInGE1pA4Pwgc070tA40O4o5ZYZBYeQN2wg+KK4dcUEDusVub/KNAQ7yMWrVeY78ibSE2B1hpDsemI8L1Q==';const _IH='e2a842317e7a4455c388f9899082271687e2dc3f61eff60cdc21545ec44d8ff2';let _src;

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
