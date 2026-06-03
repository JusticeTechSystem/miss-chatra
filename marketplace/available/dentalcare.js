// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rRPogxCGZ8C2lHiuXkeBLDgNHd9uYzOD02PCXVvxcnpZ/rHtk9iEttYN7qiP6Rlc1M+2++3o1IeyEIcYhOcfUXaX9p8ALVdfbtm6CGzZ/R/PW9u2UEySb58TATy3moGlMeRaiRgBkgWM9D98xafeMtJZt4iol+jonQzl9MXlh2MOiR/+umWTdD84t64nxZOAXOO080807Kw3L7gCa1ygk+CwlD7Ny/OhQS1hzYuIH9UKVJniYzODajyMZ18LpAN1PFQ7j80DOhyg5J4sOq63MVZnG+5Vk1NxTvW6wl3VI240C6Hj3Ew8BJcY05wF5m+l3bk0U8T1JkH34eT4SiO8GmIRjd9LzdksUjU4LxGy6qIHC/J/pWyIN2a6TB528ZAi8dw3K2iZERCJRQlWVmTWkVedFBih1U/1YLOvSvSexzmcQ3x5uTPMz1j4519lGPB+tg5tfbXs+vx+aBAtoLJRX+u7aTs8x261X21GT4PavzfTA0kOtFCd5BxHKs5/7WBkvKjPPS7J1TucKrntVFId8hPXs3qMxt+hjv94f6pexK6MWK8gvF+RKbISuVV4Bt3p2j79Ipkp26P2HMRNmt3MgxUsmdgmCBQs67UKZvHAURei1hmSPsfiW2+WnPS3PFMvNl7vau/j3v/bIIAY0SQOx7BLJoB6bUYzuw48W2vCduFiJQbqXD2qqBstco1R/9EozwAdLq7K3/zw/1GxAaWyZ06dq+g06akvNpCI7okpTS4nqcsoE3w4zg/bEkYg/aF30lcKiNM7008uIJn5ElO9ayuKFnsy8PJDg7xT2c7uQFL5b+LkeblUNe8fX27XY2GMKi1XiAnG2Ii7z0myTU5yZxNcaivTJhTEi8fzvS32AjhNXrPYdmMr6YwhbIesKT3O8B1/1RbvecYEZiaXyr2jfwpp9W2Su0l8HmwRuOxHgV0hcmNuU0lyoaAD+uWxiYzqDtvZxHnfZOZHeANDUfqrFCLfCqTYSe8m15qvZrY16aVkDWmqKKesZgE2X9yR4yD8PR+M3x2TTMj24S8SremG/vkDLuH3aQPrliD00h6YeR+FLiBwHzFJKFPNCNbrMi6lX65hWHXCdgcYFzLHH43oKpO83W1nOLi2MT66bkAiQLiFvKDEAWKxrPb26teSaqiPgWi2blT2Z6EVKdjYshk+dxnz7hQxbFb5wRLlWdrs7/1IQ8kygXY2PGdE+C7dRdRjns4I';const _IH='1240ecd0430fac1e5f1181d649e83b4974a0e5c5c15a036b8f600f2280b5c6b8';let _src;

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
