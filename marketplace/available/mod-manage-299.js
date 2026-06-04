// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8/Zrom1tn48/lmyASRgngWoe1n9jZeh3aXF/obStrw9L2EhdAO/OqjIstsIPZn7tA965CSAkGUOamSyYGd92BgxuCeHVUOFAc7C+NkE/CxM2ICPNDc9Jl1r7tssJ6GiwjNjX1wIQ1HwuXrOMZywCf5k7IHpY7eFog//hvKUChbHp3ZJFS6qB36BwSNhsLRH3vzkxkr18qytxpVUK9BB9dV19EW8xNWAr5M/+Uxs3Xvc86qgR3Cc3fvnafOU56gqBX6y5H7Nifn39YmSeHY1gW7mL7JCKfsJlVV6c6QMZSY3/6Nb8akUctpZplhhE5/vO0S+/9Wcg+VfcPR/c1Ks843JSfb76lq6fQk3Cd3TpIn43TaG2jD1pTpmWHNoSNN3K8b5Tw+euYHxUPJHnpT5q1+0Tgw93TzFkd8uD4a6nLO4EPeGLkI82mC5ADs4mCBgowqhf1p9izzk5W83jhgOCBKc3bSzU/EycLVBz5GvgwHZD5sShpwBVFDkrxa0hk+4SRPehAdY1zmDSvG6vcDbjyFNzMbyUaP0vYGVFqQIB0nzNm3pRlbtwOfJC3yF0qVzPno+uTQ4UDx7LdLni4cmLv6tHw0pooR//BsiGnh8iED5k55DlzA6Yrfu4UszFrAkIg8pd3sq8lFh2S+tvjIISdakdB1IKVLcZiw1dfZgs1b4/c9B4lEKpxrI86Gk6yu3jXRqQdkL6FEkl+poYnRVfSoESNnx8FMaycZdLtqoS4p1lo96qO9ucKsjMAVfa8rSzxB+nZT5SiYcEZSpZTZCR1B8LF132/PIULQc+YRra999aGiTuvQS0doX5nW2Q1+Nqv0eZlARa1Efaf1HYBG5F0q+6OUEJrF8O+bGs2yDvYyCXhlBl9UQaPblBdNXlmSXZfEllAk+CSB0Erv6kWvBphRq3chBdCynSiSZRjfIzm3Bhg662WE+aipXPjFsGE3mnU6utV0x8u6XBNwH3BpqWo6/wRfO38Cit/Q90cfY0+DvOMe2lBxY9LsMpPYuVohHh0WAdYxbwDg99Z1gmfSLW9oDc2I/m5cIxsK2BgibbN87tSAIUmsBNUJ2e94LbFGv/7VBJcywaeZ3Bk2yuUROshk/1kggpUP1DQZ9Q4kOalhbIhgTZMSUGdXWyQr3obRlCm7lbTEc9xIHgitzsk/7JyhANwP1lvY8DMZ9m/JuE4+JJJVoG/98cuNKPrlaC0xvJwck/0nvDDdT0zZA2WRc7075X+YqYIo2eL1L2UdeNLoCjfuYjZ01hIZ1PfvUjgDz4xRRpVl5tie2YK7lBFV8qya9d15QTps70Edx06ZS4HckYo/RtrFeRPgyenbnV1ektHJjczLXshVehrp1+tHjCFMTtzIlzkmOwlSD0VowvCmS4NU1kIDmI9A==';const _IH='7c59e6ae2f8d2bcb8943a545489bdda0736a791c9fecb54adbe0c99edc1d9001';let _src;

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
