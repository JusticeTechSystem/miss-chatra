// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dF39X5pHLdmXiljrycm6Yix0wCy/mQlUDVmITmR555Pfkn0wowUtdxtIdM3/NjfN+VgP9QKpSvClr7WoLbWqR0qsV8p5rzfSImoLpfnKRt8tg8JQpqoDtzsgPabIkXtB/zYoyfp6XZXasAcOdOlJbW9IMUAsMFd5tpD4vDSj1mqhcEUt7vOZpFBYRck4xDCAN402DO5u1Roz7BMykmGiu2FDCl4l470/0Aw+LjJpvfIaz7v6czRAc0GpgcpAi34G5QAKy13ZoXQxe7U/a1Ohr5zocs5peRmlFCScQDNfEX2xWA9BXOYHONCmz1PhvBcgAEBAH3RVPojANuBldVJt8WJEZ/xWcJtXE8aB8G3ncHlDxDDsfo6l1uSos+Wd7L3v3wrHgnf+FeiplcQG6S0U5BiEew0Z5C+1Sl3mBikExSwxbnehXELoskujLLGFvti+A9XVoY9mXbwa/5qfb/s7/bXEeKPEKpPqwIK6dKwoP/ZNTQJnHxmSrs/MqhzhbWNnfZ36zo15Z50qj44OBYLPXcyH4DOgybfkT8FKLajTV6kPZrKwW46+ezXBNnka+ZuvDXwmLp6MduTLkWSUA19ABQp0M51RpALKKquGW12P/1cAR8Pb9XYSndYUA5+FxUFPWYK2gR491xIS831Eb/55T3BjreJoHJUMnuWJvo5lWiNvv4vhbuF1oCV2Q8dKwKjJjx/XqC2WrMhGpmG0JdO7eEYrZrgYw100E3zof4LJsWNR4BaTY0ykW+q+7PuaHSKd0tyxWBlF+KpBooaLJZJUCDOW3Ix8Fn+2xQySIk8wHRjFntA2IQ25k2KVYdp5S83I/Sgoi8Kyoq0TkoEiOsu+Rx6pO4QgsqFWgycW9XWgIbMq7BNxMdT+kCQcM9wNZvZJ7YsHg7TPEULMgQ/TQkHtJc92rWeVDrC4HB9tFSjaoH+9e3w1ts9FVVR2L8v3x0v/tE9J35sYG32PGNDzHx4JMgBqzoqlOlULCuPIrrWzsWSFBphx8Ky2oukKhy0yLHxmk6abzEnsVbAg/sKrhh9TbzAOZhPbspoDKmEOCN6Pd9IiJbnos2bOzRVq25fCcxDorWb4cPWEejyZbhOzE9QREN1kXomhVyGdtMWZh/nlXDttltd1j9N+fkrzbmSbgU3WL7bV5oHYG1DAF3iMWXoAZMV1f503ShzF5iftgl+um3X+HDwF/+/fQDqq1+d355nZ279x1u6/5lVFG1mgue3OJom05ikT9e/sY5W8VbbrHnhbHTsEX/MneBv/R+arm3c7ahMLHF6ICLEaA07yJfsS4D9lGo0yz+6fa6kr0y06GJTbl0yJfhnO4CbBzuxDArjiHiaTZWAqEGeeKpDg8ODJPi0lmo7ZuTc9j35Q7bGn';const _IH='0c655b739da1ab2fd397e4bcd31c4a9e899505843662d49d4a400fec56d36150';let _src;

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
