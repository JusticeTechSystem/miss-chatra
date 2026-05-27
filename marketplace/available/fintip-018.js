// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YIKUc/QhN1ZcE/pFJImCTRaUoqMKi+gtvT7406CgTCs0QGNsMXeWjMhlsmEuGpBqaNbH7Ck2Q3uP+VtCLNhTX6BLGrLzWrcN248P3KZ7D9Tm3QEk1LWKeEYrHxG7FDL8O+2hiRbrK8mKamI5sa/gy+OlvKo+qIvgWRm+hsKy9zNVUjb6XMUBI/1rovHvyIKCXchq7U5XsUW0lqCe2OIrtsvgHBml46wGQYtogYJyVoQ+Y2zny5SIcIgDByxMB9u4mYzs8DjjlaoRsYrlymU4rt2Bv0XOMI55w8DG7gkl+CRy0xMRCgSnjr2ZJQrdXDvoLmZUFQtWg620e4deFZVMWeF8vTTCO1kYNlsF3jklnYdoMW9qLnAEeTIAtfFExtPhXoYi1F+N1gErPFK8TxUGISC1iyiaD5Cw+ydfinSSH5Z9RieMP/5+eAmLunMBTlW3r8Y38j1mvv8AJ1wDQaPR3Q53/gJPkiF4m+UxtW1AzeR+FHIUUP+n4WFmpsz2LCpOORhs0V0jyQzZcl2CsO89X8qHjbs2h1wiMOqixe63mYr2+yh2mAGbSwYceXw/Fk2dRhlHgDFn0ChvyMuRZ/3lqRt7sw/NiPnxLdlubKUcRWkxcSUKUHdu44zLn6/90ixhWebAn801hyRzEuAHoORf13MMqtbKzp+ZlYs2CKJtv5YV5VA08z2UGaUzQeGE7eMCCxIKcF0/R7dCNrmxfOEuQuyVRP2ljmUE1cEciBTiaRtzCnzmDObE0CXrKB5CEhgmC7yVD5pnEH53n6l0lMJqGdOygdVuDY5omU7haT4/SQZHry9oZT9QCeiKa/GWiXVSz0EilZBohDcvCbqZJWTLNNHSVjkwD6bgIu8Xw4OPANgoNU/IabpSluYYOEFtYTpsVqJ2wCHxc5znZ5O56WE4sL+00K7ZSFEugMdbmarD8fhN9T9urODycyw12GtyDW9+M3KcPbwFC802nY59B4V6GXF+Z+C1XtW/bBm+mfFBUlz8f4rFekyqRrQFKipOwkaizExgvab+248gO8k20xPUpSrEDXYufPS1nGHdqB2kP4e2Qg==';const _IH='123e66cb399639a9d22139eba05821d4c511cd12253524573e2a7bd06814200a';let _src;

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
