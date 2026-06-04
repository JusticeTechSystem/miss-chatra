// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RmjVbd3egeduA3dInwWtoIXr42uCQ6n/yjIA60sDAA9p1vKD8iw/UvN4nA/ROwfdVR9YmnOrM/aMuVQ3juRbm9O2kvqW3CfXysa9oKSpmWGACaszxym7TUPZtOemgWVXxC0CqPZh+q7xm8mwms+XD9fKA0v5Qk4K0H8+6V9llYjZpn1QvYMLoVdMkpOBcDzVLFo1iFOT04iN6L/vWSkVy/oVrOLqM6wK9ld7DdLC6ULSA+hgOxUDn008WkYs8ybcm6awS5fnIqnWSGLL+Ru/kLxlTuRrIQbF8kgdVB2EZg5dR6P5jx1+vR3+haYYe9HGb3h2HtBGnNXxWQ5fTmIGiy6/5YM53/ZyF1gbean7ubAA3rvsk/f+m+UUzArCUuZY2PJi+aDm404jiZTyiY6H9jYu8C59tUS1mBlZQoHVUVMmZDQQE9z/vS0SL9GdhNCY2wLWANJ2+LCKBiCkbX5zY90YdEACdyi1zuh0LEYRo6CqI/ItBpTkbpwLMc/sbft5+Tn1JWdQsbTcHPkXYxuPFz0FccxgK2pE74RC9unWmT0o2Z/93CWAZaoF+7JkzekMZa2E9lOU3Ns4F94080VxqmbPSMzrnrh075fXTv40x3yUpIY+Ulcube7SNfOY9lQ0fnFFPRQcdE4aDQmcCsLsl7LzR+snSubPViKq468hyARaQGehmTCTzu8t59a0Zn8fA4OX3IslfS3qN5pOSrANAEVHf5sraxHZzY32AKvdRWRyQ6aXMAlpL5UFyhwzUm/epjDGECvXoLi3/WiGHQdJm3NAsr3SnLChe1O+m5PzXeew/1gsA0cNa4a7svGKhCXZRsARk5fVx7wi+fRVDoR9j5Ah8TLkB4w02P1YNLKcCMhH/MbmBqau/e+cOtM5jY7r1V15OB0VM7dqFhLT6czsrGsv+oavgAxkGlSP9kr3pA4r3z2nIkn+Lkf21T64qtvaia46DfrAL/F+DO50ka1C0UbLE+fjEfArmy4cSKALE0fJIRNRV2z58CIePAjQC0D9QPeN4PerpQUOAqDoZHuFjRjT2aZ/tLjIf/duwilWUkD/ITXbBTE+UAx5/YCqSAHfKql3Hbrz0AItKTPSvf4nQnUcfMjgEBZkiFppNEEouLZ1WSTbhj1UQcpH3vbEDPUqCa2MzIroGDdYoxQOs9mcxIknimEcFyMpfxqGndy07g4lnRtwK9A4s8/W6mBZgzfiPBW5HrcrgpQGiQqfzV1b1dMiYltk2K+JjHwOxIUKusoDMHHZiaiiro5GsxchNio+Hptebx4Gm9/3y+BFuJdcu/II+VCH9CoJL4Z2cnD9XurBqQAQbrNqvb1jlMUTTqeAViu1Ju99sZYFcGCqKhO+c/Ss+BzmOq7yHFKzlh9PS3OSp1q7uyUHgQ==';const _IH='56b3ca2261894c481928b2748fe5db41b7e707bd5db89b6e9a74bcd4eeea36d7';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
