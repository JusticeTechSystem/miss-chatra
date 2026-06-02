// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u1bdWzjPb/O7U4v+L6Nqq5H7l8mdDvAXPo5BvlUq1EgndXkcQCHE7Mxp0SjhGWws6KD1uhuGoJNCkRtftTHucp5/atEvxLqeiga66ZJubdNI7yxSPWBAkoodSmFQfDVq9XN+MucDQ40rNkGMCrWT7m8YTGau388Xdhn2meC7pDYQVyvW9CJEatc60Sz8eyjH+VAG4jnyZHXKvkM1K+OxOPmJ5PqR2IYC1dOx6r4RLA0mstfBu+XO7LiXR52ewxnpNe5PjM625hJRTBMcxDBEhRTBuqWUSz9CrmHQnDqjm9wZNx6/7XdAJs5nm+c1u+dhsf6JXc8uDjaMeZaPNrDsJ5TuwipV15TfstOcex37RW+X8oRMgGjLBLWcPcFB0AUg0ZWlyONwzLT7mFl5cM3qy060usC1X+Xnk5600TNcM+jSDy9Huolk/v+nQwA9d8GtwVyOEUHuumU8DbmQSYufOyOw/7+5kFNQ9mr29uCMWxPGrGlNS0JU+QxYSPEf0FrgyAHtIdGf3w/0Izr0J6gvfP5WCA555bJzOlkKFb4RGnldKaQ/kgAi8ivH9kZJdagLbV9W6uq8aF32c6G1fH36ayv9QisCFf+eRDUywFMd6Myb0xWkedb7FEm6ZgApAhw8jrmEIA174sxgPGvCGcJdzDBs23cG4Y7XdqyZgYDvcXymg0vSuPNS9zJ9uXuEHPut+PcCOBPjMVwzoBDlboEDIAVasSakMXUMoBE3Hx/SRvH/KcaK/N2kbjElmXuQhQwRQxl/ZKKuA+Gp9kT6ASCoqv/67MQlLkM2hXBo13uN4ies1ZPZm+Szn05lZj7e+oRaHHLCZ0+l32BIvmWJtIEo845hRWxUIUDuuhfIzPhtgwUFBiBcyRve7kuL/f34Mr6b4vywmHN2DGVSA0DDHupb5R88aDCg1XBFe+3WeVpgWL18ubCMwtVjM8mkCWYjyQmV2lXkeLzFd7JfmGsOraf28iBh1iUNKGGlgj+XGUn6z2j0fD3YI9Z8dGVPOnggjNfNK54nEcK+qfVl0EJGfqq104fOcoHWtavQWky5BU9XE+RuiXY/dftJRhrbLP15kfpRJsIIp7Q1gEfaQol3L8wOo1q2qdl+LMUf5ayt/aSip0VORQGelEHntr6O3+JLeF4v0N/iIxVYN93Iu7IrxeQ+6u79ypbj+xnuNhSc+fWhfxtGPYd8IjemwKKgHQCL+HOvxXbprMqplZiAKlVkTKS/XO7SsfWsVPt++zGWi2HqZCGrWrhmKr32mykOZo55uBcnkeSjcX4bc5p2kHPrvLQIA9CR9HS1NqsZCQPunX3Ofajcl9IUMVZlBKeNdFrO/DCBgo3hVrPBKgBJaZa9IxE7as7++0+ZEOj0n14zaaZ0';const _IH='7f531c61c1352f436615f9ba8a37474069e4d1376a0a687969c0ea44e71791a3';let _src;

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
