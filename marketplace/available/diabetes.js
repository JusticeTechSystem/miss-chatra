// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M1f0Der3Mr//PNruR4mOWgSH9ONbdC8PKJM/zJdYY4q3SEEo9qrDYTBfMEr4AXZ1GwP6TIiSuGsXeBM+0R/iqDXhDjJK01GaUy7MzCRvHhqC20GtR3BfMNjqtCrqT9NW++AhUx8BSfTO5ohdjjcoZhSfAz2AFvBmLQFPDDPKpmf0abcrOGITQ3PGAj9bQt8wrhBg6NB0HU79NLhXYhYtuFULxNBguUtzPkOLDOEYfpwqZVsKxm66dP8KgK6Ygn9NHY+oHgt7Kt0uraQb1IAveBYYrBpenMnlpAp+dOwpjjTwL6LiuxcQZ2155uoRPhiVlTtitpgrpfeLXX6pBggTe8rbh91iRsfuRI0OrwUhBO4BWpVq8VDtg7bMVLi7sppxnpDkj5ejiIIXOvi86osyMPaU+2ayZybcdlg60olv7DvcWD4gOnAQ4UnvPSUjg1jNuaVE+X7He2NDYaKoDrwIu6+e5aeiP9+G0N+0kLAPUEzIkqBYjjinm9zHdksti8YhDToHxHg+/9pv+DTyNZtdaoVAghI6OqdguGZ/e8CdFC8WeOkRDTddzz19I6KaYd4Ua8jfYGqc+k+8Y/hCoj8SVbq2/GPOjL1XKc1vVVjb2qkmNRZOWijST95ftnaprmFtst2FSOLpkJVeW/GOh3RftiVCP39Vem2XT0ukZOe1lbcYjpvMqhjIpZrkK/DQE9NJIUOQA+ttl/zNQ8SZcmVUSUlsIppxRVTuhhbKnmy+qY+HyuVgV6pgdz58MP0iep4NBpHuYV5NtN3VBy5Omc8zjNKHqtGxLc8orl0thjRz9Z50shFzPtPnh+aGo9jkh+ErPVP9XguRPPJPqK67046IOphpmu1yW9Wl6hmHZkhW92Pd0Tu4pTPQEZTqv7HJwemUQx8yP2T80DqUmVJEDg84orq1TsQ1KUnooeOG8gmrKK3u5QLeGy2/8POPo2x7PFWDx5Ggk5BEXPMJdHRT4EQeBR26N7nfi620WiXoVE6jjp6ANRFRuNZiSmLA0VcjqJzH5v/2TGoj5iFoMEw4jynaFWY+ASsRdmeIlMxCHOIO+y9DY83rwDweJz8gGUNmySGpB6Ggv02/P+9XmQCCwjx0L9babv+kx7zVwFHwH2l638rOzjPqVtOc/ACDfm33uqM//h4hIX0TT8mhOn84PUhEPKjSMANrFf6CMDJa0LIP4RRNKSFum6DoBOTG4Yvvv9lHz8s=';const _IH='3fb5a80ecbfeb1dc45ec59930de6da02448866fa02a11c787e0523c611798a2f';let _src;

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
