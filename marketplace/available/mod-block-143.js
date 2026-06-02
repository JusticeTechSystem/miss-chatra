// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='spW20s1s8tXTvwP2VDEN4Drl3T3PkbJvNXrUqF+Q9Sl+RTnp3pXwM36lfKwKM+GYUy0l8Vaq0nZesGR3TE7s9ZvhQdhQUQ8ZbV2pkAbsJr/yLAk+NnMDevaW0UwCp3b9rkxuNpRCbU4bk1WauHC56oKpQtNuNql9MeQAA9B0n8XH5LIyqNSVZTmoJlD0a+Bu/t1m4ti7UiKYA/yMJHGRrd/ZrcnX0KcEtih6eOn39NbRK5P3ZRVxuUk1un89lU2zFnjqUKrjUN4BRoeBgd/WcPgHdEMiNNPtUB4MBBqRlNNNrv0wdDQ3K4169PxPG1MWCrwwXxpiY8TPb8C79SZ6kJBS47MTBH9ABjbKjWgL8xRive3OM+tHrLndy+YqAC9TZ0QxFlhvGraLREuH4P4zNlt7RnlBKIaOBSib5+wQo69BMfu4xykzWZmpvZm1sPaAvn14o/47wKYX5XAeDILwFmgFwcRsy6kg012Tm2xbczqk4+GALqtl705fyGgkhgPchOh8Dyc3kZMs9zKJkPKZhx/7Xb64GV2wWJlISq+CRlIW029cqXMvigi2WBAjQxIfyiaiqgpoyuvaFkKA1iHadlNzjzhpj9TtiQMeq7T0JNpmhQ7SCwcyBlrrAR3HXsiOA//qKD5s8Pr18IR7LGw8J3wckrFsP2qbLPItHQd22IlNkZmUS26g5/f7ilh50RSPRGroID46WyOTc0bU15FmJtaX9VkJuo6Z2F3FcQpmcHLacHvjeO7DtE+a9tvxTnJWKdLM6dFlRW0IGFCvEv+iWwD5ULL3+UJE1ITELUCnyWStktnq/ixlLXpZBQQhmkdsUsNagSqBLJPvfQAOozaomosTltSVGjaGLMBInQ3phH1pr6zuqH4RQTppE4aMnAJL/GYDl5mEIJ6sM6KMYBIjz6+RW3UeQSALTPHZaAZpD9xXP01VGpJKFfdVIJApQZc1+ul98MAuEciCxwLStZXaq/Ly0JBLzreuglyUtnR3xW2J+LgWVNKdTZHvUow5TlbdY9UB96pKNHy+oao6GbHibGYVZhdtSH6H17qqhjRhLpYkDi+t2haEfhdokh8MukjKwJ8RtUkCyfAEiYM38i1/NTTQr0Qs44rY509jSPd9a5T0gTdv2+dCs+m1wyXob3O59xEW1pXhg6WLJeixm9bS0pQmpCAO8UDoajR+x7HvEDBwkNeCWO0l4LPH3yHdJntADe6M3LBCOr+FxnoJNzrALey579ta0Urnw6hzdbZMWuoX9o7yHWpFCQ/ktTm4oq0NN0OD3fdflgZQAUBs7L/UbnUc1rypSLaLQhNyZkjDCWGnVM4a/YI4l+33wY4SHs0AqY0R/lR15bDgulSUX7MU1YxfllIcKBRoumwJk1mU';const _IH='5640d3f7043f6fdd39dfdc6c4292f010555ce6a448c6030179dafac2760494a9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
