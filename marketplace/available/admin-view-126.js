// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZLbMoEQiy81oBBbLW4De1d3jgW2kwfLvwbDeLxA3jo7xXYsZwwqw1DDU13Z/zAPUpLOZuBLqzjTEPVFqzNe20QEALiSAlf6SMfCpugRgbZIxu4bxpL2C33rb5H4RI6ad2DXL4oDkOg9hmC28HGMeSZMx+ZjsEcrTcW7cVsjFRvNPw+rwKPd/JfKLM4mOlCsYQLcePQ1nGym6oaBaN3D4beo98jHMNdePCNIFoqU4z61LLtaxgunNvv0GJHV7nqEx1YFbb7qYYgQEEkloO3kB/LCWSA0VL0NS7K9vw0INOFVIhEixj30EWigW+TtRQJ6KF1WbiGrZAcQ4ts8T5jc1uTVJOSbQwcywMNsFuTwm16go2Ru47x8SA3TlCkdNXmfTEAFlE4ull406wp/JiCoQr2O0Hh0zpTI21B7pKZAQEB7jGJmRwdEMrWZXyu4T79dAiNdnrDdjavc+m9eGS+loA1dGOdEzQYzMfZRayWEjcuYoAfrgyI/vaxb3TxyJh0FlaRUlRzE53tStVeHhlHhEX+ZOQDStPUg0KcGtK68t6sKtbVN2n0xISjqEXVQuVU0kmFOL2dkUJxkUU8e7N9QrrThlpdW6T6I3k/tzfFxi+SUyV8778SbEGQECK0EMc/HX89pOVCUjUE+bRub7RbkH+RgYgpYoyBASr03LsptDb5cGuCSm4ORoR9UyQkK6elp1+ph0cWCVfpNgnEh/p+nRjSBiGjJfdkXaDMVek+po301W/MpLm9w/4CVyNOR2XMdKR/bQ7IZWIr6lIRZRU7PVtoAjWruIQ6CMb4WvaAntViNR6CpfdZPybi364JgVXgpeBScJze5Rbwi7MV2Gb0YTno90yY64CKZQpZj3HLXMuABBMT9QBVNL+XsVIR6hMlJveMVja3lbKDOcIiJ20VCuWqRB1I2gH/kZg+vPZ4Bb9o4N/QXqHtoYKG1JzisRMRRfylSlb598KsmF8fXtbcKHpYUOlItutAqIqzOJHejHpTq9w3s=';const _IH='d28aa1141f9f9df9e43a4270e3a156029101a152111f5bf5d12261a5df2f6a29';let _src;

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
