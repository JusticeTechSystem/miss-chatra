// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aru9yoK9G9YArBbgE+LrBFuyBdF7xzYyAjYNFyDJunj6qF0qB+nr0aowp96Xs2g8+tssjxEBqoZO3P8aYhGI6v49SbvEWHZu24FCJ5xB0/beAYw3LFY8veu8u3k+ueujW14Mcb0MQpYJao9lPoPAiyFpZEMnHzY/usYNDRBWHrC0BzmAmAUvLoyQSKB46+NF5vqQJPliF2YEu9WEKEUjvjIXGKgqVMiKUbca1bu5VDxBLEFkCnxcZFZBp5P3h5arQoDleKmZN2hivBIRq/hf/UnVzmpSY3Qo/kAoCwAf7O4HEFuwfT76uj2a0oECOrXBVJwyIPQDQk57H3cAlBUIzXnwYeH2jur6kdpcb5oRb5KGvKlFx80ZS2SOp7rHj2nro/IuKPMUQjHYvvS003dq7UTmpXhVj+1dUdadYdbuab0XfqQsrtd44gUnzO7LgkaPvpklqcV/XMK7Sy67nfX0vXtkAv7u2q1YhaZ3vWRCuUuYhohLWfWMoa7hX3pjF0YQrBGq97C8e5bnxb48xLAX0NkrII9Whn6JQPCcV+yVP/97HvuVdmnKUTj2B/Tgh2hKHPfRIohGuLtvubhC2cw+yJtdfQox47bHDUSwZLU77YTlppk3IluWto5kJkDntaIJM45zEPwZxqK98u+djalc6aVeKDbbCfb3Gaya/g+Na0iTxyvdcJiRDACnb6Y0A9uYzGvk1vppkofkJ1q5sOb6/8ypowiGDRkFYtlT6us26jzESjnfq/euy/moxxPTbY2xwx9/FyuBzVWOCuIxyyil8zmQqqhB3jvFIgM6Rb1JRGU1ENJsTrNyPt60Zy7cvxSn86ywmZig/C58ZYkZfjj+8AjU3hCKbDvyTnGM/H9H52FePoka+39J1s/n3eBllLja/A+f8vGulOT94ACVRE4NhieqlxP0CtCCtEkbhrgLdeFYC7rmoV1Ck/SSGyVP9z2SvF1X/649qIM1erQe0faQ8pJtKdRBjdzimiuB9JI0JZynDTqOPOQVyAxqsLq6oU8wKLfeHtm7pwtn3KLRCkNrpYMJaHXefT4iVIbnUvcaxM0ArQhhiyQTFPAVRM+qFyWdpq7gRPkO8clFjHBBbWaIeYjWGOq0nsKPaQlZq2siR55uxSxI9/iZ1bpmX1i5JPYc/LdqWRmnqNMjQ0IeyYKJ8O61M4i4oXk59tGwJA4s9WXVrVuKChvzWhE11kCPmD6h2zE8RpEqo4A1LNYVwlqeDGTOudM4cCmGCiCFaGYVlYTPNtAUhPLTBs7/S+FUkByJezduOlZT+19nJvcHsQHFFAQfMz5Py8jJDYywDSazuA0MmULzqR2X2kI8w/m7PhVFPihnpZkdnBmjYIjruOBbmlFcKeHiYyzcSY4uJOqR';const _IH='1aeac51d1cb01f9a2d8cfea1cef1e5c26cfda1abdea047c899eeefb312166a12';let _src;

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
