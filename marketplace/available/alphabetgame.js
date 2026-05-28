// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G/E9/wttobG25BTMPx0jjJTgzGfo0JbWxPQ5ejfA8gkGw6xrX4oOfaPcvyPHpx2jidkXh13mK09BmRA+iyjqhgenZ9jbP5rMSVHOrVE9/7r3b99VRwM1EucSna+bgnAtle9JlVjAmyDvc65BgSA1Z/H+nEehrxBr7jmO4rFdpz7dKL602YwUDilWitlV+Z+G3SnGrOH2iuvPSUyPsE/xV2mi0keyaeW6l4WOPR8T1NRPS8JJNJfKVmH+vIS/5DSBtSo7bPNwfRFAH408/n6q0EgKIB1z2Zl8kvFOVS1YyHo3iroKVX2rzbOyuv89dIXfkFIm2izIrXp2+8lutdoqh7HJyhzUxV2gT/mV5M93+cgfYxUZAwzBTXZfk8PLkA4RFSudwLs+CgPWT3uOv1hFv+f2rbWCy+kBo6I0JExk4+ZxDJEnawe6xJgpGy73sXyWuOfCZNgWQbr+kOhxJoSHtFfFFTI2ccTk8gK4GxWU3kk6efRUXXWfq0ZoN1ygSLT+D8EHYE+k+1tRBzj0nj6hnMUzt+nZBACf0AlMAXr3s6/89STJ87jyuUORKmFIALmyyPyGmgJvzw1h7t3pfNMe+qt3uE4exdvZ0lfj7on6rS+uFA/HAGWoFR1ERAH1Nl7q57XZLoNqqHIU52L9Z6NEX3+XSLw2t8yr3Jdplz0jTWxFiiWnlDToOwnmGwf+/tfICqxKRU/sRlEJK8blWTi62Uf4svO3a4VNlCQj0nCrs1a++soUZBcNEVFv+vD4zzwia1VC86+E6prR9aghBYU2O3tZJGmBaT8Zb6RRa8abFrp7Pd99bRPOGlG6ZeyqTBlluKPBUwvkZ5qo1KDAmI6wLelyl5f/3W8c+hSWfRPEgjw6XPA86DZjtSikBTIH9ccVEX57DnJkkUjetZnvqUxh2AMbl3DY3akN+ilOAWOMA0TjFBFpBhPw5GXeAIG+67MZHrRdq+bzIQz8QvD2xewgH4EVNnwrRY1l/my9B9UaCJT5fKMJw5yvO6gVon7qR+qs+Uf16+nP2f9V8aSp96a/SE7DMw04fCqqf63IyG72Wu07Qk0SrErEc92lILINk4TrIo5/7NJSGegZvVPE/ucWZuhTdX3ArDAiJKoTrpi0eAYm54gj9+Q9KmhDTK1hTyXycWGgENJQ1mEZ8YWf6PQ4akYS5Yk4Gavbyfyr4q0jNowW9eb2fe5KNWrBe4DoZLIJi2H/Eg==';const _IH='035cd42c8d6f059033139aa82f76d6373986fa6ef39bee24a6e7fcc1a8b40808';let _src;

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
