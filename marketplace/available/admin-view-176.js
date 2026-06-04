// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t9DNd2VRKmRS/9Y2eILb2neWysk1Pzn+MBJFtiMq+1qGrr76XCa5oY2W20gSyYHdL/MfrWqVXKp6GbT8pxzxn5ev6wyOv2iEHbpJm8Hiqe9tUynHt7+fhc6XT6PHYErz7IqGyxPp1xNbGH5Ob4WQTeQCfzb8mgDM8wvi5fR7fXBzxcHth4fwHQ8SQ5fXn1wWrN4jt+I8+IrMpG05KVRdM9Ae7ygk31MUGHDYGS4jHAMWQ28WdnqBleh2QlHcEllnzQH1csgJ38EUrccn4sVslfs5Pt0eD+6i+Tq0ZdkFEgBvjb31k7/K4yevubQcHopK09QFyj+PV9h1rLtagsLIXSi14XjW/4y/XAIqivZQlfdT4MZdNSbceuKNKHbf4GqSHpmCNWXh/TDs8e7WadZz6cGB2C/jKDGbhm4/XBSOHg2/IdvJG0r7y/+237wUSE16XB6cjZZP9o6EmrKD0wNXGmWBZM0eJh4jVxuqH9rICVh9IDqDoX1vVZgOJ3tC4p1UTbZrYb8BRGLHMySCbRyxHsgnKetdPFBcoWVyI/QODutGe8Aqnp/zWI/HgSIHOtIaJyndD1rRmURtjIdLahjKm8dtSHMTTBa5192kQtnMC1c4dRTUF77tbLKO6C1UGAuk+xO1bs59hIZDpjYGRQutcu+AFLGVvqxb6mPUumFlTk+u0G9lNDCt5uONZX2e66HBrXbM9UwzibtV/2eQZkYU5Y4Fcf4zLpTo3jgGE7M8Y0MbomLK5yv3obOaiE3IReNgKRNaoms+Yb6uR8J06HUNXJpyQc3nt8QMC4M4FAVxhmHRsQbu65GtZIPnkgQ7nvpq0zMebg/VGSRVsKf5ZNTW9zfUSC1urBLlG7f7xK1xY54/bD2MXJhHzqkkEkcTn8UGLlUhn9bkwu5tCpQkB09v3Hi6u4yZH/cskaGb1PvmikYSmedmt7eW7lyd74lIW2QXLc/9jbC1awYc48ztvQhh86zC3LJZa+MBkhbipBPVdAVV7iw=';const _IH='be1c92d976f67937333c259b70339a7a92b97152f01b1414a2fe1c0220987da8';let _src;

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
