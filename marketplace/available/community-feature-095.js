// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UL/oz3g/NugpMrhbAnqaE8hC222eKUbyITy0nPHaXUfCRsYvfrX7DpJOOXZNPKYQC2sC+JqjgWVyAFRd1+ZLyXCpfMhCOlMk/zkH1d6nWUPFWwOZf4HN3vpJC8RQtPYUTB3/wVjfr2PNmZ0absbAoRGYnfxqR/rob4THSyLPQNpTy6dniAIrYpnrGxwwmiPHHHN4NSPz6crFPyH8xA/eMLAmyC13IHuSDkDIK4FJmkAkusjnmBOGehv+ui4jOktgrHiav310wmsV8HF1dgJigzI66vOnruGT07gdVMhcGVx6SHpqP5oS6exV8BlIWwMhOLBMD2R1qrfOcmOaCWz0eF5qbR7vDuB7LuWpDrhwpJ2BXEHUM4sSYUcwKEwhS5qJELZJYBOib6Q6gAo19lOQTkiQR8bFxud0SgLuYXIgcZCiv37ffMXUAOLRomiVZPUV9hc8Te0XDgGOVRUKeapYfQ9zL/zP8F99OxHWnyRPWCpwE+/+Gi+pj8q68/aSbSNNcH3XC2/44gLAneNyUXIeIKHZ5koXKzmFacyVsCcfyoUkE/+JVfxd81EXGwvQ79C8m70PXSSxq1DgzkT4RyitxL6hqMlCz/AFs+IQNbNHkGmSdvBCUHx+kXcdw5RVIoXDKOn+FuRyXwGuS4Z4VMsX0ZBY4XfkCAHRlwhxYBbw/jOWlWPnMpcjZ2YkuirHfK8Zl1v4ukVKj2h5zn+f8VbbTiuY5c4oT7BPxDNCvD9tDey2sPWaa/A=';const _IH='29bd8306f5616e8b6d9cb36e8c4231258c486c5c6d3bf57531dec53a6111af1b';let _src;

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
