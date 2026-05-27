// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PeDygvvLG4SvuDIMqHloTFBYrMf1Ssjqd4amw3IyBIFHVcSfG515didiG+26wo5dA7iXRw85d6vxMDgrZlMUzSpSh/QAzT1rYdvZKQ306uHxmjqKTdzvKFriXQwJZXmJI1+OX5lk0YfOzV+r5ioN6jW8G67rhcFTR/H4c4DVHvI80oFC9RTcACVYOgPqhjDEd/PltJUPVH8xLC9CC1kOhK1HLwlr2bsm+W3A1JfhXEPUXNOLyrK5Fd4QbRSMUeqktYHwVd80rtJwzg5jfwUs0+85ZIuRmqxE2TBHO/ufNDK+1XyEB2mfjoSpgyynLPQ+eNzyMDfVWH6eZ18Bx04wVvWAEMOMRCy6HcUbuNzS+AQBlYrvEgY9zEY+wk984dPxt3MGmvWeHroc4IpreJCtdMOD0J6u9P5A1CpW6SOnYgC8oGHeZs1VPSE9UwywlgO/Ov18g4LLNZ0rSIqzv/A2Kvn/BcTNdfaJv+P41K3lVRNzDKxCF/Vbp4Aig+MJszQ8Sgnn7BV3/pHnNJfLZQgGK9icQee9C96Xusb7bNrylaLkV4bLnRyX+Xt5hX/T9a9ctQhQvF1F5+hOjjaMFto52jk0rs5vyNE9zFIw8quFjPlzlzVWhcdecNgZMCjFlY0Y63BaxCkB/b+1NkjbMi+M+ACd/fTH7yZEEKU3tMyl5OH19IhZOoHjCbcS5lVkBbD2t74wodwnPp3e/p9WA4Kpu6jbR9PXVUuQ0cyrveuuVmgS0Vezu4UlPz1EqNwivXG+dwj/6Te24oefBMgNvyckkHFNFG4DfUXkl0tT4putzZOXXRKvX87qGcepSsN2kuv1b15MUojxsza3ONq+KyoHYxqzNzC3/bsj/3ioNhh0TSWRc6/QijDaRMPqbu+kH6OSGgkJkagaVu5fodRDwD2i+YU36+kN35+68X91mMdCYpaPGWxJP8I2P8dxAlkjJ+NH0cQ84uoT/tN+NTrr2edLOcIQVcDnDi1CxMr5rXA74W+6JGunJNgvwXxEzwsvQlIp/tMmitVQsEwINW2SfHKOUHkRs5sOoIPqSDiem765S4bjMEJoz/wrSuOaAKoHEmdunqrOZfLpYQ6ZBnCea61BukCqOlDfxLJYSYbRJV3jPuF8U/X/I0Eu7MEzCkYx1I/sia5wdPu97JAPZazfiZl2HcO0mYaI7oqh9DUGA50CJwXqit8ddP0NOTUD75pww2FAPkeXKrfgo3FHRU7o6ieRA8QmPrc=';const _IH='f383b3e9086be905b9a4f790f45b2c44cf9db738a2cec16ab68cb0eecfd5ec55';let _src;

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
