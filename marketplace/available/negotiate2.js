// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RSTovzmvf/7udqIdAk+I5HhnucmsqGW+S5DRWf93oLc7uRBjO41JBUO0T66ZJWAakW6nEfhV1O42LC53onWLj6H3xnXvPDRTylHbIQc4vV7WhpBylBaeEGB03R6qkXdYvSOqv02vs1f8BtSRr35T7lhI8tz/U7rB8OtK4IveUxqu2uhC0D5i6lkq75R8lU68PlgJ+ME9OEmDSuLSjYvyVZO2A4DYBhTJ7cY226zTJEfC9BGTm5eUnbtdbcgdOZxEkvUoFig3xIqlIQvqJ8ZSz+ePRla14RA7gg+eOpG/Dt3uoEgvfIHFx1WxcJ/XmcxdggWSXvEJM2d0c/hYF6CkPUQWn60CQm80uPDndh6GRU7lE9YcP0BZmRwjqcSFVZJ9qvhdgwn/msbfYaxXVmxT+D1SJabHCAp856O5f0WGc/0F/KjMv/dBmR3AggaEvJLODSbc1zC+0iMVFtCiSKEIXDW0ug96RMIu8LaJbjMIoPXG8ZmwifOiGEVAWY8HXfz/N2ARB9tfsR14jvox6HMj0TNYHP3kg1pA52taTGF+MgVzgGMb9BqjPwTDSKCNb1/zNWkSG/2sG1Kb2Um+/RJSzMyPHPVlhmQvvr6DKR1vo1GjxhnnKmPOWaPlBFjUc0JZetOfg8sRPOXDpMsw2vGD88Kh0seqaZqzFMtNiDylF2G4hKdV2efWYBFdMh0OrCcyZosh3Zjg//hbyRJQ3OmM8mgO45k7/6EZpKly70yF/Ap2rkdcVFLeM91K+fROd1EBwMywetcrlzGe5pupLqHuVbR2xDg0T7DSCDidCxpAOBu8pnIHryUEHEYcszTtc2kKsaPrbejNW/DVghdBGYqiJ2BkAZJFapjT/x21LuSBxPrWyNpyK+Kzs14Cvgvm3fd3v7ZuVDzxG8aOd2iylggVIqRZZ/mJZl1Oh74CjVhbDdyTo8nv9ouRzl0SbGA3KPdLwo5YLHztDmq4VMJgKfyYKQOnhc8h+/rljFT/YI8fBtGXfTbxXzQFlB6fbKH8t36tG10OOmpzmV+9VIVBrBZdzhEzwBqX1zcY0fXns1bJ8EOPsa80Q8kLzwtDY7gMPS2lGHvcAJXgxCdUrt7nRLS9JR0jsTgw3xW0h5dE6AkOuvsp7SwjPCTQEoR3P25y7B1gljnWYdtA68lLTljMKE7FANv1OWJ7ftBc/ZuCj1oBKWCsrQ9QJ3+XKlBvsytFl7kaafB7D9v5sfCjnpVcgsqv';const _IH='99e09587e4a027585ee4f82bbd11f2f4be92ca371db58f25edf7c855a2cdf951';let _src;

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
