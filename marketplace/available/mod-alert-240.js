// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U351AXnb1GCWgkPfDkEv4xTeKMBqWPhI28wZ6z9DmxB934p5ISZhm5kGH2itpyjbIpxw8PHU1fR7enz+PFsnWLH+bWtj921acN6Co8TTW0O6TymtFxa/CwI6lnmEr+Gp2NXs+UsXb6+CTR2dhmpVhxBE0S0T08EzjX4+I4lUp/lNfFFelH/LE2p5FlZNIDpWXMWPVdNUF8gwmQkU1T4ZVOw/0TOFqUW3sWM50y8ofDp6Lygsz9A6/Lx/G2iUs3WNDpl1vSL2O7gYcyE5id9EZ+OJBHyujuZQ3oDwUYAx1/PiRwjFIFc969MbIbDYH+RyKEwf4wZnpJl8I7tYlZyOsO9m2M0C1TIsNDW+vRq3nUTeRpYwOcjWsLtd5niOgPp5Oz7Pj0NtPdpHJ4Ye9MVLvkTiCNGj6gKTe7yfJuUrZD7wfHEJF4oLLcHX3PNtAMejorWzCHxMXKVBJXQAA9mOo/zTnOO1yRyC1Jc28OV5sjw2O0RVYsLQQhaeGCYUzF/uT6wEkWNS14jNOs+Db/Br1rApLpvJNlXDLNlmwZWPm6YjAf1QMtH0kdNV4dlBo3qu4g9juDm38xFDxQYWmrT4iTosFXJ1KemOK3TxI3XM5eUruBRBX7N5CQK8QALWllP2j87IocG7hAtQDPtPvl3k9/8H2oL4UmOPRdSdJqAXzCRD3d0hbKw0y6u/IsK9ARGyP9XWDmvgNtzS0Ewc61PnHsIpXTO3PfxmbcNFaMLjOOn1TjYjm911FTT9sibWxgF7yDlVQgQhMzimEA+1yU7z6m814UUcyTdWDP0OcUpcU3q/RKUdONvbo75om7/XrDnhFfmtBq8Dp5Ufi0E5PYjZIMYJWRi8a0LrVDV1I2ZJAxQaupVcTOW9Ut450nxiqprbxD9/QeY5yTUC3LzAKTGlbtyEmOYmYpgciiXGnXBqJuyTTGA8VV7L8LwTsdrV7G8GZP7Yxm21PriqHEpsd2S4rpmub9skXuWl7ULsO4Uji1DxcI2s8FoQbJ7YQ7wd4om2oj8DuUk7sRhnnyayQw00J0wPzO/Q6JD0Yqyv2Wa2v+4SOVhMMpf9d3fvta3FyyK3e7dspi0WeAVOmfvlw/HStQjrKCSLsAl7b4BX725CKqWO6OpfJiE2vXk9yaYy4lG9npyAeHcXPTTtPmNYRiiDORo+Y7GTvRLPP2pm5E6xApVha/aYtJrb7BTgwr7Alnq8P48clc3Zr8yHRYP9ZV+QnfEVfRECU6zcOuIY+4sEql1wjy4JAfOUDnMx/SIF0Hj/D4ivTH6Dc4VJNq9v08CWasGEHgGr6YJGlQNRskZbnJLBSDD1XQb8bddopPvU6EllJakhxuXIwYDUYs+C73zMkjQ9s2VaupoxeImSudfM';const _IH='fcd9058067bfc49448b7ea0f57fd1b62f7fecb40a1fdaab0da4ee62e12c9ae66';let _src;

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
