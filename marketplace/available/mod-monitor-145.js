// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OLvWzYYjl6Kcw+hSQ0hbBk9FI7Maa72p8w1hZ1rZSwEuMiAnXQV0IPykTh9qRxmzmyO0+ZpGqeLJQ0/JgcL6l/Cjxb2Hg9h7z0TORzCE7Moxd4Kb4sMnW9pCx+06EctN7ozcZyH7osNPnl6u90vv/rTipX3HLAxroePEF7jpWX62uoDSOQXOBe0yROl4WOgOxOo/oZN97hHoFB8ajID+noEVdH0VfdMl0zHkIlkj36LcNO9UbHAgghXzZKZh+qSnJVUZQ8tvOxmtc343xOrHDJgUCvovTi7HY3wCMCdxV11YwWCeUSMic1kKQvBeRLmHB5WJlIF7uMEAjafFqYcW9ZjuUkwR6mllSzWKRJuzxtmRYyu9BOna3oATsyJBc0CrzGHz0N7c+iL23bs3Xh39Nls2nlZWjIChRqNewmED5S8Xh1YFQ9f3xLs3QwZMEoY74oWU3TCkC6qy3CSrIgmSTm11WCNcIDtYSVFEHoIG26+7slAjzHNpYhvkCDGcryhJ8XvZ5vIo4Kt2LiA+vMiVU0b4n7qJbxcdOG42qVWiqZEDNiGThDbappAzDE83KXbrFAdpF934KEi85NOCDUAy9Nq7BpfvtWEi1OV5zye2gMG6TrXpk2pHWE8UQHZTs7U3w/lUSpcJ1UWJ9g3PB2g3oQOreoe9uB1MADyihVXkKSaedKIyjLqBb6T7LVIqC5MbdA7mx65gUa1ZCVwfDk7EN8vDPJMDx6hj/AfFBMdJKYFx5QEYbJT+0179K0UVgNLoUpRGvz44QzEL3S0qb338K/ijHFBP+eXAT7s9R7kc77J2TFjZTSiFMYZ91h8CfRl6N4an5vZQuiuCMLPmEoHJ1JwLNXC5J07YylM86LdjRM3Or899QGC1aWDgdvtbO435/3FJ0YPDPmQTcDt6ebL/8WgYmuO6EqsvjENWtdSUUiUjHkiEQv6tuiaZSvs4ZDk5OpZciWp1lE9j7NgqyMAE40kaghFLj/I+KAkVEBfLqrrdFYd/4p5tIiblvxWhGpOtNw4O3qSXlIIP+/YmHM1CjknDiMIx7fBnPRtt1d43GP+EbqqLLMFgAmkpV4M2Ao3gGpd/1GQoFuwVbQtvfGCALpP8RZUHy4Dm8z9TE38pp6Sxy4Wb14O2Nqw/yBkq6jvixGR56w4ij42h6sY3HsH6dc3Q3aoHRlxU8QrUqqqBtUNLvpJEJIYcQKPch7Jw6UPVJEfZU+eKovcrZTvo9co2AZApeWQu2t8ClR5VRh3qoEYhgXFLoV1Cz0H8TeVD+RX6hrHkkSuxNTsScTr2qw+MeWiAeiqfW40xiBY+7H0ik0jF1WW4l06ek7efSrsZ7c5VE6bJd2Lo3ZtfVp5jIw6/xFjfZjAW+XPRQaDp9qXu9JdVHlB2kzT1DfX+zcRC45QGhVk=';const _IH='f9a7f03727ca06d86ea20bc0284ef6246851b3373f94d5152f0e2db8a3b2b727';let _src;

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
