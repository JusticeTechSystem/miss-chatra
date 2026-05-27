// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q7aNQeXZ1J+ItKpiR+l3IbXrNkV2j4tKRdAkBBu/GjmSV+JKOxLiYzbwc2C9htH2z6foH7VZNNeUVWnwlBFuKTdzV0EbQQlavx9V9DMJmONVmSU88nHaV5IdNa9XOGSVagRHDpeWItVe9c2yvl3dWb3cG1F5nK3CfJDMqLI0CmCO/PEfIjn4uAih/evU6F209GBk7Fx3goTW2gkUFM22TsOl8cW7QoTX7nBdWUw6L6OhxVSXYs49w6k18b33/uct9J96Lxn5b3dbdTrQ8SyHjjo7uhQe1102g+d9zftTkKfmPd611ifEUxzpWfMgo6CY5SVHWz4s3XfR1BMoKAETZCxMt2n21tbIItcEFYiaabonUvSrqvQ72IrfvsFrIcjxVq0qFASp8/vcYsdZp8iM48p4X4W7CKK8kxGf2NtUXxAL5On8S2fuFb3ntc9hZj9qWASL3lQPuroyWEy3h1/EO18702mLAPZDwJP+T4xL36Gn4yOnvQuZl5ZdPzFuC141HePwNrN9K7WCOnqI2v6WAIniN1lyUWqp6LuJn12mCHNEvnhskU6mQcyV/MwqQ6XS0e05wfOYqUlxANLX4lhywe0Z1V7RbKU/fVOPUXk3imFqPR0I/3lPt7D7rEjKw4tGcC8E2GkOAPZv50oLUFFB7gQPGv7UoO49SCdk0yGrq039lJgNRqb3uPyD5p/4nIhILVQcIpDyO8zS4+IOjRfwb3ERNRM=';const _IH='7e6f7011f92e376320b8ce54452aca122bc7deb4e8785dda52ac1c0606c136d1';let _src;

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
