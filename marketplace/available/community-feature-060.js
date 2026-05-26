// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vCjpANjnS0o9hN/BoIIqYohU2s7Lv7EBltz5VjFm0Dki7rfWbrwpmylJtgUH1WysnLQeygAfR57Cm4N2rQNKd9s0eu51JX3NqfzlKP5Tne2CFjvc5WD5qc6MpgryNkt2jVVkNb7JvW4I92Kzb5oDToKaf/4HoAH9vzg3DYwA7QlPiWc4xiaj4k8TLTGz/jPDBVpbY1mhDSYtl5XeVH1nodSd7JaORQmsXDvB/FMJpns35BK7SxGUtNgsJ0PB7zFlDCxVcJf2Sc9EpefZVRZSzQ1M0ifxBU0Sv8ApHz3lffj9/RIvyqfGtEWnaFbFQMgQC9f5RAQkVvqdWV3hkex/dhw/Mf+UNh8lwxYuQZh7ofTtoDbMjQghs6upSRN3T+fzMbjqfQsbG1HrAHHcPAQ4hNJa1mBas8Miqf51vDouXnPAspyRBlbRCq1jkOiBr6IGlTiUIqC4Z8mjvmA1NWYJwSdL9/XUMma8splcdV/NpDD3J+Mq4Ghm0KjdRK1Aq2itJUqw3YI0GNNUkqPmkntkyCCzTng+fvsZ/ANjgP8/WyJoYjbuOO/8tuhkCTUykGpmVvuFDJLSK3ruhYyGc9TnlUWMzxsNOQGUiDYaN9v9T5yVnhV9zQysiEj88EEtwtVvpsrmewBnLw0S5aOdsm2270hCsnebsHW1pw0VJOS82QlrnXr5yEpGKJbvmx94LcU09xP6BUcqilorAUZv7+K1t8FRI6nvCm41G/42MXzqXq/TKuqe90E=';const _IH='13db307cf9424319da96df515b7322fd33b1adbd65992e154ea59cc123b46655';let _src;

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
