// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4SCdWdOXkS+PsF0LqAasA/7KMsghb2cbmryxBjog1THGIQnkOJZ2Tp+pU7+rzlh7abTPWysr57w91pWvNIMOdCCBDV24QAF3UtQ6lzFztAbL1n1nGQxgOPdJdt9wwOaj5mTcKRYLswEiEYRrAv3AAOldyRfEP3+lAqOx0SzPUAj3D2CVLRX5D3hiZ1hY/dChXwQ6JcMWCRUZ/c8uibRbKM3mpnzVGLCg1Cl/kjU0I92aIWehpy8EUBElATH7btw+4m8WZ7N/pYrP6+gWSEtyjafFk4aBEgcha7109QHow8zqp7lS7AhEKEyrQ5jdI5rDK3oWpAuweukQTTxi6QOKFKGdRUQlE9EoThOxHTqKpEor64Jr1BaWI+BMLstaczxpHHfLpOn2McciyKbyGT8TAtSJDn0y4wxJBAClkKvEbaPskfSaUofVFUQPfHoCVMK/N3Yx8W6/U59YeAznMNSYtitw1KVtBxAzfBGPhe5OAfb+hO1lSxb47NytJOF22ZxhXoeoC6/j++cdIjlqk+mXIMyd5lv6NmLZJPdxITdyunDJ2MXpQ1ysnL4oczWI7wYONGf/RV3a35AoTChWvCEcVwz3KXHEJgLhlRWFs0BCVSqWwWE6FGGU65CwpZAuUFHhXbkvEgGAYvpnMsQMlKpFHQLV/jpVGioSgKjOpLZubQ8eFX6GpUsJgnXPmj74LKKF+GTnI8lehhKe2J4c86TmhOe8w/Sj8kSIoORv7WfHZZpdgRPZ8KS4oVWtRgQHPGLam2QU8bvM8kkYZMmTkWweVYyQNtzdGeWCteEupXZQIFyWd8wa4/QY3vGa+4ps1skKi9AC1Cs8sXa789MlqiSturGBSxAWayiWnCChKhp/kyLcePwNPiEAHH6yYxqwvgUqhqG3rFk/QjeXkv687Gyc1JSaZOvrixNoE2gAW1tKdio0G+1fmFdHtpNy3RBRiJCgXsvv3dDv6scmKEZMSYGQEiJRgAHiXin0m3+v33LHpxzHPLM9OtQF1gdJBLxUHsyQcJwcG8ey7rzPKiGH223Qr5t4NJp83VI2JOrX8KMKywk2hQ==';const _IH='a3933ab02fb2f85855b0443ae13a60ddeaaaefc08fdc441aa957484979664d83';let _src;

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
