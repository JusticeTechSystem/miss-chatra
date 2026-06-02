// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CcAQeBQ+St2rChLjAm/DTOAyR+Y5NJgIRWxbv6vGjVmfSeInSje27/F1H1kwVykMbZWD+C9f6nM0nAs4DnbOiCb2DORj8KStkHIblXQ13q09gHMgfoQ57q7vXS4jmy7szqjXPqPRYCTRhY0yT+lkKFpeNEPcEVA6tdifLq5gsYWY2zB6hkXlrnXfROgmY/Nz3AoL0PRIEOWjWB5BmkYIe+hCD14z8gjXQStdPNl2u1dPaO0c61h4BoaNauvJAumTF62ky9xTFaBQD05Y/pvdg5q1ZQ/2LBMFaP3Y+31lsZekiNn5NkuhTvWq0VVG2JS/nIXWwTfYyuVQBM682wTfFzmMbk401eJKS/esP+Vj6icMIscrr8C+2mXwQD9xdyBW/3+eoj44EneHmKQiXxtFcXnpTxtPEtGXcxBbF4BEFW/QeHVBgZ8I5x846+t21jZcHhGIS9GDYQWGcY/DtHqYucZ94ib881OmmR3AUlF3vSEVwdahchQPmDdvTiflznFUoFNB4rZWVaA42e/GMOLTI5OqFSRS8QcW9C+V69fRee0c8QR6rEg7kCcN4126EX2dWO4o0JxDzVomb97JOQxmqDaj/IHaHgEB4MR00LinV0ZWJiHjfA48wb255DkMq0X6HGCYHJH2Oo+5LK0GqLZtwYmzr1/fyc5/v8kd21CtUX/WCBUJFLwmMp9OgDoO5XHIncgx1k+2u2TsWwfZFMnTBnEYa1B22UDafmHLYiTgSXi58s9B+a0=';const _IH='e0a74730ff0ab56e82ed8cc9df07f8e562b9c52609a52f5caaca65c3fe2345c1';let _src;

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
