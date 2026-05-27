// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NaR0oCRmPrDUPlPMtkIXtqFAuSDIkMkQykHPmUKVPuerv/Cn5hP1ALkPfeR5/aA970i3VKqqqFKAu5Q0y12yyquhz0SDR6Nu7ytveM+qFLvbdll3ZxZjEqMHM0eXeHSZGZODaHGkrtZ4Hg4nLI+w3Cr9QtwEYrZwxQxCM9V+JsHEJ2qKQri6RSSSXkBzfYKfmwtLx6Rn0hZAEtUsDUcwE7jDc44ob+yp6tcV5zCqmDZS11gzLEvUOT0nFZss/vk5ckLoagzu5b1WMGDyT8Ow3TqPH1nm6ov57xWZVUpqGoDq1cEURhI/YrdvBQsB5ca5YK+RpmMtRWolKYBAZPBo2Cxu5gAuPCVIrklfFowzNKkvKbYPAU60FWeQzxoHMLw3K3A0Xsxy+r67lYOLUzXtG6l5ljuC+kSLPwNam7zV4psvdBS7vGqYWj5H/18hVbGNOTBrdhWNfguf78lOzcvTVk+wZpVpMuYQ+QIgFK686ClHTORQSWEI4jw1wgTbY4TDdTq8kY+FWaCcre+AkLnP9eOlw6HMxHLRVHQVEZStu89tpr3+1si3ONlqUaT/zLFCeFDOeS6J4F4g7pvg0cg/0qmuGKc0ns/Vzc01n2DiqxULa+OrQ9D0OCM9anHnQo0yeQPW/VdTmZtifci/6siN8Uw9TI7Hc+Y5aeiViSO+mzaUdCsiqq4s12Bk0PAhaGUVZRI6XQpwA9T0a4Icsvt2QjTIQS3ZuSM=';const _IH='c1f8a448d5675795e0bda3b4418c5e69655990b8133f97336251ad776f65609a';let _src;

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
