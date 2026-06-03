// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yCUAcAx+IDDrIaKvi7qzpTiSvSYAIHIVd8KDMjYut9H9T5jPcIPdH3yTohXoY52EbiDisTaWv+4Byam+SBGSCqHDzZYG0lj/k+4sBCG//tJguID+iD61/Q7hfjAjJYf/EFwlfAoVsAqSKz4/0EqLcKyDcx0oKYobJQNE4QV2Z56z0jKOZ0SdBVIq9IXDuAVL2I5b0iITvnr2Z9Ni14eUY85kmn6zkEfFkns2NBJy+0EQu+YU4U4e6m+WpPq6cdFnHUtQEKrDAARmosfkOrUh4H7EmEtS+a89dgapPeBH8jNooxC4G+j/yPq9DGVj7hHYDMkkd3Ur8ISLqrTmVK1jpaBurhOBqN1kaNvHcyi5Zz8c/8dKCQASVnivwIPNd8TbruHu5/l4dcfGjz14wQJPo412YwUb08ePXtx00VCqkmck6Mklc1hTDo+OPHMGR3IVmYzyx0qBmNsQooQmXMbsP1hv/JcUUUtZA+ZDfe9d2VPwFGerx50yZubpzXjl2pzzSDxmDkjiGHxDHLqU/3A1n0OCPTc4YYD130SsgXyvSGOhHPRQaFjC7LBRaWi2Odh9SnrELBrZFmIgqq6ZZHZp9QwxYxkDEiO3S+5X721bnq/wjX2TKQgrgwPWWT2vzjH3qRckV+2sPVzZQU9egI7ybRAiuuhvOHHbVxq3R7LNQYhVeZxQHgMOBGl6WGCXW5Ef5nAiCMDgMa9ttgXy21fisKQux8cWJg==';const _IH='879377cf45c2e56858fd952c693ec027176a1403e9fd7f5f4c38da93133f2b0a';let _src;

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
