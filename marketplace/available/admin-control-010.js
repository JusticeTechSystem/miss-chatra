// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyLbpAlSkmQL2nJi2lttnVRbBuFBbwY4Wf4p9t/plpn8yW5jHdrMfjghHzfEvAVPLvkF6JFrIGLL9U31ZjyT7NH+pFhf5Ix7Bu/8EvXbfLvngfCLfRx/2qeFL7XILI1xlAXlXyL3oETv9pWfL+7QlfmZkZONlyWL0x0d7vlore+TKd2X6mH+vv1fV+yqWHJhOX7u9RN9Uk/DYpPryqAgkXzD5SZld6p/+nYkrO+DdwKy40dp/g7JmNplDnzon4mcY6llOSnd05Et+2NPqgrVLetVOAR3uWHNL19a3J09hh2U0/36bWz7UAr3hYIPf2B9eHVoJw2mhZzTdxdcXd9/x65k0CeRa3bOcYNor9cmJPhakzppKh6gxt41Wvtt61bj2cPsiPQeCfNmvhty5hPPMzVKLPkm85nbyHkl2g3acw2vhjs8ysDJfhMvSSWJDAcGTERRG6cRE2Ayu5YHTFL82SIxwv82JXJB3k2y/o7wVhmovCR7+AD2gf1fi7oAvrh2bl004n1dIDLfo33HdkjQvBvGbq1ntCPvh7lDeIv4x8Ufwubs+rkrmLLsVVudduyMMJzKoK0OwqryO0nRHiiA94i2I82La7mdocqE/F1hV8UKa3iEoo2aBs3ArdzH5GPsG4rkhNyw3255aNtZ9wZJfmb9Uh2hliAswAvI+zNG8buMGIGcMgtLbkaY5D7Oye+hGyOPbP4bVvhoiuTMC9CrNEhgA8uFcFMMFfjuiSqPYn+vmVfSPj3JlNVbcoOaWZLcaeS1kgAeXqEdrupJfX8jrDqwZ6BF2gCRHBHSRO06R9mo+uiHXqXIuevYdG/gXUosWiRlEyD8Vrm7TQCjqqQn28Psb56hS4Ue3AkvqtlQyZ+97xl5gN2XFdf4wbn2XQHr7jh0fI4snooYfyHMr5tlqqlBZVawQ4aJVF89F7vFwJES0UnOqj4vQFlkomNc8a09FWNwhaE+9AbYOB5fhpkJisl/hGKmW5TknyuBaoo2Be1XO3lWTs/E0/FFEtDD87x8l541+TY=';const _IH='8f7601d7a624c83017be83dc1f309871eab15c335ab7e46beea4f3ab44a20979';let _src;

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
