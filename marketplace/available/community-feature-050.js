// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2YFTpIJ/0wgYi4jz5/wqKXTZZCyfgVgH6zNzKuj4uX0cp94AkOODPqpSt/uqQ/JJAMH0nMleoOfBV0HqVSaRSQZSumNXCtcBXlRei3S60rYmt8lW8fIl1WRIRxAYrJmC8gyo9vqFA8OqNlthiSJzxJBoxHeprIWpS4XTenFaEXCQIlKkojdgkGW2Z4GRUAczkfBLRiO/JbvfOiVVcE/zkdEnEncIa4FVIN3RcggOVnYJbB0y/GPFNCED2IGR71VM9V83XYexQXL3NV9UAsYkZGeQzqlzPN63Gkr1FI4fIE+14rZzlyUcdNyVO+2o0ihse8mumWWYAQNtBJTNBtgxMomIUzqVbtThMPJRTez7M3zIYX3GI+uvVuat1aiwpyQz/1v/idUpnuFdI6lo4uqhYK7qLvlxK18UpTJ9LioM11ZuT+LfFmMKOmTb+TVC9Vp2jdn3AadTGRx9xa9hYTdcvktse/xH6z7elPNovFnE3By0E6cUwKA8yHVxFI8O25SK93UmFL+yZW7ZoMnIo9RvCvGZalUwEYR/f4xymovjzDZ2vc9rnlPnhwmGpEXJxO6HvD/ITz5Mvz3cc1LK5SVlstzxtvcNM3zTVnc76OGtzb7Md26GsBrb60qBqKbew8hg4dyXaNey0oJw84oZEpUNftob8QN7FarW6NjbZcuGulZnpHhwl7ckhg+gB4QIiE+Dat0Xi8Ii3vcKBPHAaFCLhQl5DlZh4paa68gvE3+Z2669fm/mhe0=';const _IH='b388df2919a26b7e43aeb792bb9bf1e5c57409b79bdebbee08088f73f25b0a39';let _src;

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
