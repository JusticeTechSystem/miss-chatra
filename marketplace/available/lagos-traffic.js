// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o32hOt+jK4r0D4QHtwr/7YVQga4rUqghD5Z2vxpl4SeUen+UZl75whBFSZ5iM1ep/b5rGO4i9jKdKtsrWVXJk1OWPiQ+UXy1/Lz3bDeREPWP5j714bXxdLsFCPD95K+Dp/Mhg48ME17dTg4Q1HKcRvzhELhhokgz9xtYHkHFukY8RVrFHrq8zxGlwFJY3HIq3gtqR7JhdE3exVp5znmsPndet9CzXVtNr3vIAODyVJ49NeCloTW6woGTIqpi+RFBFAkOQ+ydV0pjWbvaQTc0DDLiJ1T7quY+baqzAYcJuKiR3D6Agdyqdor+hsDDnc7qJFCFPKPBLL+cPs61cMKYJdPlI6Iw+NGUg3cjBysZMitLWKwh0OhX3ThVvlyZvN3uZ++7vbPt8fpaRSqXJdIU6dB6Kh0xUfwJARVRCtbGpuAN6We8s4IkmrhYNQkROzcBcUdabiLSidzZK5aKeGfNs45zFp7J9sG8tMnkYePnJzci4XGIqAcz0RzE+Sx7E+d5ZFs44pgajslgG9rUMm3suf/G+Mcd+sP3OONkVjzOpI5+gxlhkK1srr8jRRSb5ObX6mD3cM4mlTI+soPo10DEZvs1JdDYQEWq6OyEm5k41HGKvCdzyUtUHxbqIZKD7fzJ60qV15KPqUZiTb1Oa2Mw+CooO9+EbkYzd1OAwRIDnezAuK8NdltZVEBYlmzhJ4BiVlXfYJFnN9BplsPV7bPznyyiNf7JPWN/KPoZ/UBHH4XKZeOkjExba9k7o2bs/gnQmPT0DluYmxHykS0XEqJAExd4WlCBRgGs76vvGas30PmhpFoMAause3iUyf2kwBP74GUS09oFSx4zS4dj4p2Z08YhviqsdIvZwHAG98frP/7+K8ykR3aMZa7Fe7HCwC6pi+vCkYoMKicCuwYZbB3VwCO5JD5LfJ/h6sdH6AyTefOzKzf7e3OGIGm0+eZVp+xZXaLNdqo3Jd6aDFrjAkpJJANBcAUIf8wJV0zfdfw2HOTU8DP9kiE1ZSu/0Ltgi739Vg/tGTF2rGvlTug0lkA0m1e/0CtyBcwDEAtbXIWROMZnf4QgYW9NEK+TKiMZ1GPsRHEt1P5Zga5s/MNEUm5tqbB+KL2rm6yxtpEE89HJjezZL0HuDE5eG0DxTBO3nuBt6baoRQfiVJ4cYIV1x+YKLLjcv1oIaeOraAHEzQ26RsBIikYKqVUzvn41yEszc2SchPXzBYnSMy+lmHQbMcMkjq4oGFDsUglKnIj2LgWo3DuUI6aGf6vfDPNbHIc+fhX8L/US7jX8vbaKtJmd+ywG+TCJ7LaG0LNTiN/E40rhngHJt9VyW6M4CWwaORt23l2HqQVV/J9Miru8TzQyRPHpSfi8u5rtLfgfPkCgMwz2UgU+FNB6Mp5EmWn2PhUS7RSpaT3Q/l/259zr4WAe2beDJudbsyZjQjiYFsC/BUweDKZnvWnevfjZh49knAnabyMU/UzS5P4pons6Cy8H9CPqatdmsPC5F4f6T6Fs/B98ulj9rEqYWEMe3MfdFRj/nsF5IwHcrvd1H/xTTmR1KMPlQyiTYgyzV6VCPOudOTsFhWWptB6G5KHwbEcB+ElHJhmvtfSg1KFMrx18sbXCmISryI8cqWhFpRY3FdC4Lh7urC+yZ58/c3KxEmBZkPAuWtJRRHzlj+QpGkbY/oKL+CXfglcjVrvYO0GFWQc7j1OIjIcnNnrEQw==';const _IH='c0ce12a05bb1725c5e98e2c25fd8e2c9e042f3d14f496d85ff2fd165a579444d';let _src;

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
