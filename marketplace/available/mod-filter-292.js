// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dhzp4G0GhCK+ENPZ1g/cQPNPCC5jzgovBfGEu8Dd+KWtrcOJ3bGbNwRyGTQA3qm4xB/Wd+GivH5PvTC0S1rRGz4aP9Nq90Si9se0xDj4IUzszzy42cy8SY8kSAU/gytMcm09cMx3SHm4UvOAW8FDM612q8JUHA873IvWvlRzPOkYe/7v+iTYuuExqtA5DF8arz6B5848gNDfwJItskP0Ex5SC6sBuRTux5RZjAng3x6tPxBvOXMuiIiaYgmgqyjlnaxYGJlpprnCeG1InewA7NMBzua3JmDuqsoUWY1PXzf8wlEUbMpL4aEvBHWbw+Csb6UGmxosdkV/YB9XZcywWidQ4RZjxyoHUhqOuE8bHl2ZPyMKNB243/s/kHEGfR6maASqSveqsYPe3yHGh8VeQqYAweJmg+9gWrIWs4SUxZkKDEDmIO0OH6BGJHYJQxd8UvbIIYBd9PPI2iCNA+U8y0d6Gjo5WYuYDzwkJrKjVV5zPw5MgpSXHSUD2npD4KdzL635ClT5mm/LVm/Ey06/GWdi1MEk+HW5OwP4VwbyfeDP7V1r+4lO/dSxWTxbbYCGZhcUyOgLD1xTDHpINEI7nBUpD40TApM7pF6d3sVWM5HW5aUkMgGzems3J2ErnWbhmYXTvXlkJqMDSVjJanvzEe2SDTepaO3KUS7zSixQyXC47D8SmVn9g1fV1RFRDs4WZMWmj2U4FGk1613SUSNe1WklI79qSokCKPCUsl3GKIsvvtaNA3Y47CQyZNkD/lo5JnULF4I5KSkkWOQeB6ZKOXCiDuVLItucKCiV47o4U/BSokrcA8JMklcNloarsijFcIvg07XZSS6iYgSURt2s9jFHH8ZJoTy90ZS6RR3VepodNo7a5eCDqol47EJdyDj6a8spTmIBGQwOrLsodrb2MK7H8m94VTxsZG0Q74SOGB7OFNBYiFDRDi6hRQEmO10XVahA4VXimTECYfasp0xs2kEWK4yygeI7EI55BL8Tl5ajfjqtI36HTVRuxclOd4cd9OsCJIOMQIlxhV1kjoFVFPB8ntiQ3dUi12N45qzomUF9uZbeQsjEIePpXOMdilRP9LLmyHyQgvc1Fpupnqo0JBwqVZgcMXz1xWbmIZEbi33pap+cuiNbQfHN7Nh94GI3k8wf2LF30AHeNZSzaE4EbimwVkrOXrCxAwqm4euvG+sVGtlD/EcCzGVO3kVokb6xG4prrRHbr8kchfxU5tdYHZMGMxyuLN02Bou84GZnQr6kE4FRuX2UvsbBPRtaFdpVrfA6009dBtx23nEAGv3xrO8GoE+OabJBjvR6VjggQVpWUAEXTWRU0NHAdZlj6St8F+yvO2/DNpSbMg0cLsdvxq64D/qMmlqB++sMOcWv4EyjPZJCgg0Xow==';const _IH='7dc2f4a10a44f111e5e14df96a69955743139fe84ee94403b2672dfe310a60f8';let _src;

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
