// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxtJuSiT40hbln/wL1fS2BhXrgYPXTE1lDSAeH5Q3hCSdvXSUJ8evMt2djqnA4Aqsh4MlmmLQmwH2zJpEDag01GaCW0ZxucFr3GeAyKQJXabFELeYUnw2Cykc7bYb+1szEUsNEcgq6Rg906LZhf+UMvgITdsr8TiY6erPr2268/wCXibT0u339zKkN0mquXlYCHySZ4PkdchgdpYIVFWchM/vDS36+O4FmwVPnRl5dLoWTEckOPXlPSidsl5f0zjhyLLhXISp1d773Me57IllAFRnj8CmGBwxdCWhEn0wAxQJ6NFx+dJtG6gQMxLWmaXa/Hdt0HCAwWqtmiKuI5LF4UYzoFagIle6O2lu3b0Qg5qgYeMJEkvKH42hbhcS7BTTcOh16M7lby1O6/Q43LerK4Z5g7BC7BKCjdneP2/Zh9Zun9TgLaYeuD+Oh4wSkVNXrH9J1EFlNf7/XPXTnLaEzXLL6KuhZQ9TwIhvbkhBNTPphJnxuHF3Mxf6u44rOKNQ/JqwDKPGwDgfO7+SPQiCOkqKP+Pk0Swz8SG9EySYXb4q90dpHOrJNu2o6DWSogIPsJK4TwEYXBFhqvxegf32wXWn+qoFzXNysWRboHuMJgtVsxI/83aqAexevt3RlNfUREtIXOs/bfMOJzzxrn+NVzLLZN2kIdicUDyXZSBX70o0/oeyAnPzAaWPeJo2p0NlfEbDI42LcZ3o5idHoHMx3P62wI/';const _IH='3f7106bcc62da3455e9d224b2a1e37e1c88d3fbf8b0c95086638f7c69481ceb0';let _src;

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
