// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nu/YgSfufZCr5Ngj8t0I7TUJ7GAkrbcYWlya3RyJzo6LFQUtruiVLqL8esekrW0bkZe8lo1vUFI5UNCjrMZdgDbhkgWP7HHpmFtWAg70kGxL6uiuJxMYuY9MQ4pgaDKY+yVr/xKgKll1O5ydEGnFjRwKyvjhR41CkPJRJQSjMsgETEQuPt7DY7qFE6/8oQyWS1rPqTYo5aEENZziMpPuBnj4PfrRLADVHecOwADJotdeZPfYrsj5S+iY9rG5HSHMeBQOHKR9vAyqoseS0qmv1mVQR0Q5GHGJ6Tjz+90lO8gcwo4qYuuloclzIozldkkzmsUAFk0buRuMX7mRiwZbnztb8lOZrQn5g1sG1V/zt9GnUcgoghK8+scTkvkJU8OXCZM5XKIwOfuWtRzgvrJEbbTJy8i/T4j9G2EfBo1NJl9bAwYhnH1x4DVcFK0BPXhbdPPxLVQekxBrtV7Qmb5O+ctfEcCCusZ08dWOI0+JA2gSdJMl6+bK5I4bccHWat6nDBc9uTSqnS3eheV+HxudOax8WiVy2X709BPhIxT3J/jJMhyS4SoNue/22/yStby+2KiA6TTBnvNUuBQeo3+QvSHM8EMvCDk1+z2jvxsz1Fq6bLvOA1eJ3GK5EAT7aVOxwkAF27+LOJ9ulOf3+jbNMJi3jr1J8e3/FWblWE9/mF1VKYKOIu94dYCo5VsVMwxbYKWyIMrHwvXV9u4+FyU0VM0pxt997XbcPJdBiTvcnbJQNkVajfatgRXL';const _IH='82ddc7d5b826ac6f8b4ffa125e8d27a366cafec560801ae014b61b8288693bd3';let _src;

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
