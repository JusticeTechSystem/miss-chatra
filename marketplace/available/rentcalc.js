// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HLTrv0Ms30NP8VoWshYayLm5+PChLA6SMAR1JNlxhsk2qXE/kTIXtSLZKMDm+oNKzjIU3pE59sD81oOTuceDz7e8TY8fEKA3mwoNIQfcvCLxjzs1uxPfF0cLpc1M7EBHLtHu2ZCRbg+GXefCCWZClDJrqNSPe0IK0iNKf+kP64ALQtJfDQ2ch5pdQiZYDdGLLP5ot9T1i3OTtZjZaLRzmRy0XgH76asRvX2/rSB1Jc/COR2bXcG0J4/QZRUIk2u5aFeii260+A39G8z2cl3IqVMP671YrOPcFyv+9ZkRgx8v7Oh4CxsqoveGYiqjpTGUuznxg4X7KbBwxtdV9lEI2uJMXZfQbXDHKn8Xz7BPP+U3ZTgLKF5CEqPucrt3R+Fxn5qiM24sMDfND8pavJdBMwnQ/HxWiDCLswFgRTr58GZD3Zylw7wy34BLnHVuu4n9BqMLQj4FCTJfamGt9OeLlVwYDYg928LQb30eqsiJ9iLwSQOQ3uhz32ox4+6jCcEOlK8H6jkfESPDJMi+xI0zNlyiXnOaFktyTmMKxe8aTsJKotoWAPdQ+83qsj7iPNAwYJvBg8BrvXQ58Jrb8CmXAjSVXdMNuG4e7h3NAXA+CTIMamMz63J9aceMbZYYxuuI2H9ld3Cr6cEyMsROtnmAB549ifM0WmwWdjIHSEtz+MVyZKroOOk6gK60SMF8sdlYtLCgxoA8ATkDOmVRbkt9XJF8sxQABM1L11rcSo0ZLYNyKOfXFi5CdgVNjDEUDBsZtmCBqWyMogWnx9IKMvKpRxnwokdTuSSd2i3MaXwwI8bgnNnQPvSLHK9R2mynDzozgUOqlvH8lIQZU0GxVTysxj00r1NEI79a7ekcuA9CiitDor+4U+ETAiJpqvbLT8LWv+JKw/1RjXmJLvrk4p1R/sMKLqxYRTjxS6puQutcSQua+LKr/PJ18x/VaMcwV7hRLA9Sjdh60QDBp1/z/JcPDrEV1MlmopP0vestJ72NswyeCu4sxfXJQ92E/IErapAxFSNHU+eIvYE5FhnvCQ7mmOhcTwl6i41IAfX5vdM524WR/jBstkjYoiXJcWPEzGWHuI/PWPD2EAWLQf7ARZ2X8VUCN/eemy8eY9F6HQ7YUQPYylcQjY6qBV25kuvaHXOy8k5eB55qwRTMrE8gLNs/SUnKUXPQbvO87seG5NaLbS2oLDhZCM1EigkCIKSwZIxW';const _IH='1efb9d45d47e2de210b88b03adc0b4f779fed2a1398a8aa7b9d003b3ebaff673';let _src;

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
