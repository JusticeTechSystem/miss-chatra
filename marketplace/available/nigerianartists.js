// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8MmOKvKPLwMrGi+khOa0WHJjd7xUWYV5d2GCcMpvjDSyGNrVoE4HrVQcplvoZG7nvt7atBG11JuT9M/siYYVIg9lYlPcqyKBTLAgqA8w/Tunn3qjOaRZwLXwBQtct9NDEEtjSkaRDi4N9gj4DYkS8gUqdzwjUyuYc1SIdOgXf4DQGVX5qrJhLjQHdHkpFx0Zo896zQLyJjVQIglVr+EX9eFEgjiR2uQrGc7fVluNpT8em3hkcoHjCxRzjqo223Y8daPvG84B3HHePpbvoCAoGb3Ra81WHd07gjRE4IRHhksaZcgUfyo6ion1dK9+PDAsslEEndUkUJaS1Hy/pv6IiyZQfwVbL++IVhj0XUiP6gxfyN39Us19UlNUPRpbVXfsSH84ASycgWNvjZu9v4PwjfR95vmw3ePI0lxC3wFV+Fmi6T3fiZFAthlTNlL2+QsR7K/ECgwhe59gjEsbSYVk1IX2svCI0mgzAqUMtxSuxST8R4y/z2AVHqxc7kUajDmcBHb+IXhcqx1kjD/AGIZp6d1O86AE24QU/81NqSboi5ZJcCSkV+ECGcaDwFx+mscvkErf3S4jFLCSFY7tyCqxUBtgHsbAmp4N+nylRa9QMCf3xjKly7jwp2QjKzcfGxj5QJcTidVMVaM6+MnKA1Zogp6K0CRxnsJrf1wRXw7Q3zqeqB7jG9E7IvSmQDdMbDkHXaOYFS+GP0Mw9JpA443oxSk4ye8XYi67l2RB+HV+krebsxOpbWqaxvqe+U0u6q2CnHzO6HjJhPf72uHTdLZfZTdA+PH0b84SCclsSTQ46cFmoqUT3gDRZfCcrgB98eU2uZihPI0jvQC2vGLr1zVEJHUDRswp1HTJYIxTHJNm9G6O9R8X6Vsw6X2VfjMM+xlLIgoLmSN7up/xLhe7xcnby+572cpay1F7YS/ptzphMLgIWWmmZgXjeL8bMPAePsf4aI404NblBCgN82WHcob2qRzfPlQF4m5gMgbDPAw00x7WxMC2kU44Squ23M0+tYDy7HbPYA/DigJXsvn/IeV0uv7FJGb/7ahWp5+oAOBWfH2qS7GuXiSCQarW/7F+DF8vgImSfLRbOJiTR3wCLDYnzajMmMw+nwAwqEV6qhgbemLD8aNpVAfv1g4NQb22b+4/agLQr4vAfDoc3KHHYvEQmP0w/vQc0D0vWNI872sZQuZ8ETUYzlUUfcIE0xJUVUlc3OLc9j1EjGWeCh7CquQKBqq8';const _IH='b84eb777fbb33f3ea3fceb4b2e3bc5c3f4d60910e91382b0447d9b06f44eae52';let _src;

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
