// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s7oYIZx/riTMIUJvCIX+mjo3Emp6XETkW26O5SxpSQh7JHxj85RhudvPTqNBrzJ3bxqpe+KJTuiLxoTTQYATCrVaTD/Fy/aiEVh0g0u8cY3hkTqtMyaweoJ1brnSx1uhPffL0skP9PWkWhrvQx4CuhCOutzdJuFVLHFxEhNfYnGajLXHurCkvL/mY++LnU+lOghmDDIkz884XGveUOrxE68RP/IsEYJQmiPtn9q3y/jZTp/Bv3NzqqrWjHlEM4lHlXQtraw2CNjleErzFHNw8/9Yr7lLhbtSdTDgtr6l/UV/u+F7Xi2l6dzBRrPuyOc6GEIjvLGoZ7FRX5FO9UXQGL5QcjHdd3gu0c67uNlAZ4pPhkmElyJtVk3b+jQ0pjpWmPVhybFtEmKJOamXaNEtXVgTz/OhucH8nKG+arQz3h1CeY/YojBpZmXU7XAhNZxnVNRKUrsxyyibOtwDQoScUk2ldk+/Dpf/n8kQU6FkOzLbXd07//rsWDS532j1hGuq2Wa1hyPbDAN96dH301tKEnemhFpXRWm665Z0AA+iqSNb3xvEoqc4LKXLhsxpg6+SBV/HAvnzsugV8cETMcMnl3n06Wpk00qjbCIOP6TTY4FsGrK1Db5vr72luv2MJBd7m4BajpnRJUNFDngKqK0G5a8CwvbljBBVXrSEv4hoyKnkGvtO5b1zA7WPFaxXmyPa53wYLt7fc0kE+KWoMybyhdWzN9K7swEu2QTTQdZmg3NRZyIIjRz4cxiftE0pTunM+imJNZUop0Gow3O61toky0pfIzMNt4sAevWNkGlb3U5JdtqJK9gWPEdZUlt0i62d0THj6umv60tB70/26AS/ZAm0sNRmy7DIvn86vbdO3ZoHI4r1t26RuZd4yO9tRW3v1PeoFeITcXJ+LgbGMmRP0TOeZYfB+g58UN0FRAQKGFG6xpG7swOFYZyaqJCOf4w4m2QwfHGs9QmuS9H0MqXUOPtlmlrwY2KhG9PRDQCFTH793efETh1R67HLkcY5B6mJr1NcvRsaKnA=';const _IH='56d4d611042c2d334dae943acf0a093ca043ca52b84c28d9d8343b14047a8f20';let _src;

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
