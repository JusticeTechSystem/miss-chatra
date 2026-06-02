// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L4LSMiGxX6EvdAXBl17eg3s5Hi7r1JRtsvEFeGLX27Nh06Ob55Oy1Nll5por9sO4NJBQJgKWwo5Uts07425uWxSiAKH3JFRTLhiySZraDP/BRIdwIg2mahuLRe41+N/zMkG9ualYFQO8ayKE2YgbdTDZP5+xVf1o4DkiVZXTp3dmdBd41pJuoAbFDusyc8kYuEiNfu7NNvndyJDu3stnGCJ00u6ypkcj0zyX6gCqB4Xrs6N2TAlJbc+CendWs65bVDL+GrHWeYXe9FMgLaQzSCC6ljgktCMrSaT/D0oLM1Vl8Gn8H3ZoJMs6s5jx84cgUe3PrPrJ9gW+pnqvI5MiaotyNEFcRGeXXkyqC36ftFljhLBQjlEfOY+ZFofm3f5vXrGZ/tL4RLNKqb7GVMATo3ILy7Bh4N52gn/mSMiJDDbZZ1HZ9AJ/PGKoQyVUUWW6sB3PKLleuhN17x5bZ8a5Pi6CgMOjnWmz5yA0f6s8LUaj3kRHZAH19rqkfVBD44+1szJpeDNDrGk2gR+K1Al2uWbi4i7yhNbVmgTZHDTUUcOfatK5OpOJrbK7fRkTvtbZ2rKCTkL7w5sd0chmU2fnBGVmsn5ZHBVnpU6IMiJMUUru6f/U2Og2ILSfgaSlCPKzYZ7fjNZ/xz66R65Fwfbl4nICKP3IqdHEY91qpAbmePONL3xL0CqAqKO2B3s2Pl3iNIfNkIOVxby4y3bM4bucB7RpaJECQBOPnqytBmLz8FxQx5yRGjY7GUw5kqiN7Zd+q5pUO7lnBFnNI9toW9DKYCstmxmuekJAL6JRBBD8nYiEPUUQ1DxGsb6v8vqSY3AxuCsoDPi82pwmKqQ6M7X/rsjBxEeGthipriJUuslpFokSfnFZNPNxzNAw3oX39Z30vwcf5WYptmKD+br0DkGGBI5DQpY0iO5VpMAnSxRyld+CqZdxllpdQfbsDPUNjP1lK/kMDZyaZOpCHCrrza1ROnAtHAeOiOWZG7zRvIRUpCvI86i7b+77k0x++sGJzrH8Dxw7yGn8pgCL3T4i123L4VVOcZAH/7kzlqUaZ1tpoWyq5q6BdaMTcDPcLr1ekSupB0gxDD490WCssaG4Hb50TPRpczAl1hvbS2AlIGpP6X3+C8OR5I8/em6f8XGlmhppT1stdgsHg3DzxEl0S9zMr6klSESUxFYCRdOU/0KDh56PrZABWcbmckXOSuvSwf/uQm7lNakfMamwab8N+G81WgCK4qDVDJExdxMn+M/oYBeQy5AaLuZRqatp2PfhaLMqj8AcOHPLgkSZOY3sZMxVIRxrOfrdGWmsFpdt9NcUrVi8vadmzc2QkpNZml9Zd/NrMTaVeR6PhqCo9q9pVimxxMiqCL4O5xHu7Cm24VzAGmYrIPqDfdJUPA==';const _IH='43be249c8fba2c9be5b9e4526739d38b860daec836281776f7ab0cd8fbaca398';let _src;

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
