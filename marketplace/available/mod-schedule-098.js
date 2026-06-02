// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rdHFWn6/rz9lEv/N3SPwOYypOLJYfxDastvIPk8BmX1jtl94WS+Gz3f6W5uHoBc+oUYMnzA5D/yYFx3CkDEZ/ASrg7qrU4e6N8wlQ7Wn76zWt8xLebZlO3YYvHmkU/ibcnAFlU7+zwudGmDBKKuJ61vD780v+mQfeW3C5DPasP1dT3NdpsaDzXxtzry+fllN6yMpi4PcpjmR2ZBnFeBs92oPqmX6J3OAmpEQlnita7fDXSVEmXdpJou6GaX18yMSKMqjST9gn7pNqzaM1Uw6vH/XyEiO+1eTMxXotfiCUNQLxIKGl+Mo3SaUsGgNrvrWkn8Wnoil5Y3g8hT7TQWkR3PRcMgeWwVhuZ+ejFVYubaZ4KQH6HPBxDHMYEJQ87l4dCDnOQmAeMgrA42Xy3J63wb3R+A31f2UQnJO0soMlumjBKkkg/6ANhs+vHMEikw3fLSOs85lfxchPgY3M7ngfFS4xc9F5XQAF7iBUyk4PjikwM/n7e2StaxnJ9BOzN7JR0t955gUajG0l9VUJoyvusQMOTdNkuuofuOykfA/LQVmmS7CCGeDKu8YdTWKSpvQaLKd69sPpibceGw1kwiSTA5gZMTWAv0A+EIWK5ADTZLSt2opsKpb40Uw1GJU/d+7FfMuXp9hl6TmMEGnLhcrVmNMvzyC9JdtfM71U1IbE1Dip9cUbcBkGoGqz2d1ZhT3OvVjF3CAQpp+pwh3KL2ziC0RQBg4e01L5ZWPkwtVf+6q68BaBwQ0HoMD6YtzQNd3ZjuXgYDS+rydadypEz4WlwOao4XJXcm+rkz3OXz8cclkcuvzuwZiFGZToEHVBqCOI2e+6zBpiZB15d5m5kcssogJFfj+/wCsL0dnfZTrWsItkto18G7zDMwBxALFwxP7tWvjySpku9Kh+R/AK2zVsRoI/Dd4pHiWZl5I9xfLQvBUhXUBoV3Av53N8tc5bg3MZwyM+cSy5gZB0yvD/3uDlsOScwoK3Sf7nUY3y8LcctUlY+JBs8FAvotVK48rd45otcVMYT2HpTRN9PwqiiEDe85OMDGaif5DH4JXvT+TVJgzFSGUGQOkUjpcVep87X7tK43qKFgU/FwuFOeLh3P7Llt3ngNxcsqw/ghRE/KwrUwfVGKdM1mVNv1Y1k9Eyu++jCGfJEWV5QKWTFMqTvI4stx8iFhmGrcoFdbL8/JpHx+SQGX1OJ8HAFGRh7Njvogw+OYVs1FERgcxDQkNWJekU2+loxFq1NUVWBUJUvYFJqJHSUKt5J4cApKNP6hmW53bx13hkz6jP2LlgDuqOu2HugTOwuYoy/Hl0xN9adfmLC8Vkrh0ykQ+fKmdUFXZxBCLCoiEGHHHDF3hOWpQ2/7BFWOZ2DB8luAiGmLBnV+kum8uMxmXF13PMpQ872P5kSOQm3wAt/8n2w==';const _IH='65a7a3c3f6faace9449eb4b60a71ce7eb3eb6640e4c0cf1d614efbf707cb5196';let _src;

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
