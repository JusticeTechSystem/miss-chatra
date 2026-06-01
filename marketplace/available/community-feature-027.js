// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzXhnHzIL52papZIltzXuno1WfKxKQ2ucR3MgSC4PvVGaRRvwet/iofG9IBO81LWV18GDa5UzPTXPky8JzTtVLfsZ2Tp6P/FH8orS8ALsQfQodHjnmGDyDYMuKbQjs4EdpXQiwx5UnO84ONjaG/hvb4IhREuoYY8+zGySOlO2zI+mYUUR80Z8nNQjQEzuRuxWnCBXyZe+uhljfdMKU7gTYlq3zrHJ2zD7T5CH5ynAxTRJyxtvvUtXTDJRYZFgK5svOLCiIKijdxAcQWMJEQmOfPYw+vY532FcbhUWGwanNKK0/Pv+cnq3fLPHJC5ge8vFCDZ9oi0a50+Fvqh4vWSPhOSMJK+kt/wDYlVngeCl4u+hOhqAz3smbCry8J16xIxOhhtZEPyvetRbna05968OvK45tBm2tOqCvC8pxPpt0VfH+G8IZQNHU+myCwc6DonIV3EqsPsIbBhwQTrXEfs/SgRH4WpQsrs67Z42B5DkB5PWUpgG7ddF4KRQ/Zn9qyQM5b6gt5rgOsXknR2qr3y0yCmdjUvUQ/+gpnetX7f6fnzdgmBHPYymkhQ2thH2rFrb1lVyDWh1TGUywUp0zJKaDJAMMT3E5QyWFbMNGFUJcTt0JMfWUCHU4UYADaRFt/DpCoPdEPqUBoe4vI9H7p+aP3IunvxGBgFaybPFrJTRTKjdIWhsRoFM7VF7zVOKLo5+cOoWc/O4x1cikkowcH4Hi2zrr5O8MPEwxAdrBI9x3A=';const _IH='377784b2876c7a3dde9af7186df47a7ed44d670c49febcaa27b9600e050681dc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
