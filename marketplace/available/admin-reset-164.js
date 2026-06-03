// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GEDTqNvkeS9Iv/I8r8svwu+iIlQ9zWauf3Co58kFWDLTyQh6UBJnoeSJhnMICLKVNycKfMujtkNWGIDbOWWBp851TsbP2jbW84K35UAeYZDxctK1Gv/A1TlIHyv2dp0Vmr+jcZYGm1GnBxeZgtlHmDnOTRNO90IbDnuAVt6nTFtOnIpz7RusMop859+HCSpr9g0BKchZuSFE+tsFBOzsnpRuntaBbierhjh0INgC2pfacqoMEgS0NX95+pkPyPeUIkAh9Uk98W5xkZ5s9AFYvnQYtj+GtYYsRhwBBOM2o8tK3hxFGfvMKBA22V6YuCk5xW95EambQUAfA0oGR/TA7OISAFYo38Yy8ec5v8Hwwaw47DDKZs2nwt3725M2TZWnF/Ap2t1WNSumlPuZv6ajjqP7lIFnSviXsN4F8j6aC084e2XvGNNY/bwuMOLtC4fjNkvLuGbRm6KFfJLhI5Q5T7TblwO77U4ROFe7SfUpu1YZ/HEeo/XnO3zRqAohLkKkZHVNHWEXZVnGLFkmfkq3n2RjLC7SwZccE2dKaUpv+hqePU2Q+1CgGpIV/z6Dc1kKT171A4tbE/IQwWHWI1E0A1D/kdnY3M3UitwapGE56YF3FAPvvIYZC8n7DflYpQJuJ7a7JkqUCwuIfCBB08q7YW9vx/8YabCWgnHQO/oVBA4fRa6NcDto99dT6bDsemk00BdGLDR0voJbwnT1FD7MNsu6xHlNES3yJ/uYEYJxr4Ibv9KFJMMhLg0JZ8yUKnN9VOlX1eeZIC9prCuWaebVKYKqLfIyhhrHpFIyeM0PVLwTapEW3EEggYKJD3kvnwM5/fF6GPTndRgWGq1yUK95VyOsaQsUphUtFNgPxlVXtYtTUyUnLMRCFeTuAKRaz1zPlfeO691QMoTvkhrJ4IcCJI5UXWCSbxhn9hu+n4xlHnx2d9FBBnCJHM29uIwcWEEgrh4jfabrJ+ko/YXrOAj0WtxXSIQLZA60yw0KBSgVoVm5DSpzfSa8q+Y1';const _IH='c1add66b71adaa9e7fd365324213691166519bb82c8e51386616849410563ba6';let _src;

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
