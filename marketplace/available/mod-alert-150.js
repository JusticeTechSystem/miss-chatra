// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1RVsN34AnObVo4iWCH4HvZ/Z1r36F1cI83S0cIrbtE+QcwhBe1vrEW8eWBENH1418H71VULH8DbigCrJXzD+RzpXV7q71r/ojCKm/WuM4X9JGzV9sy5RqmmpWQfwEhBfaDET19HhV3dNcsDdRNN4zBIMwuGqQ0iTAz0UoXwkIm9SaujoKkvOEK7vgdvGlTAAC/XorprRj823REfxrmrk5aI+heuKlxhlq8OYNZMrI6EL+0933wa/IfqFtO6B0xnEibi0I92KjQKJa78G5YvqxRgYuMEBkncXBN/TzKDuuyeuvZ7uALhnLQv2VkVKiRj90BBFIoQJJXVmaTqUcDWxPVwc28wmSN8x3GyRhGvu1c2NgZNWt/L+qNiXkR2FpG6jnOaRbrK1AcELVoYvQ56JiH3//tbGc1fqEe7px153nf4QxkOaHFKl5B+3LWzm5fJRhtDxlnsIBs1A7zgca36KA+8tAvJdfjhLJKRG+guhOWWoITCFn9xmCU25Kn0YcXTFIJX9e73Ej3cJg2s7q6mLgpjQMZ6ybQy62URcLO7E2wzUU/YRjcey8HubN772iJPek8r18dlTtJS+cnQHRQAVtv4kxkIUhuKuwta1hvqBJSmGn8kg5Zl7z7c1IQcY24A5ivcfn9cQIcptCrdIFtjIVU9byjSbMa6j2+1QgXAxO9D3w6CYfe1/Hhjc8U4O3DQj5rhr0gkyMAEyDV+sJhse/o5u2sCn5QT+OSn9iXVqTYodiT01oigMQG7lG8mLUddCHbKrIMg6uxGUQWMiCMtLTPySifWS0Wudb+3XR2ryv/l+WFCgxhQCX8m9EKWHwnQa922KcP9HgQur0a6261uDPJEpZQZqzKoAa5Jt2nyAPoG0eGUN0+biXy9JZkrj8S9ovckGDPrGG63zFCLlqYD/duo40qJJmyrikV1l8/zM3yW9WzqGF/ehprCvdUcs0u5BCWCMemh0VtzcEF1/3BsgAUiZEoKDhGvARadahkAIUsRS6HTXIg8oCzqePSJ0sis+VLokXyKhij2hBpvyuPMkodt8o+JSzCVuZmOuocJhXWLJ/LEET5pgMsN7Ha0frxs/Oum+qjb7K2Gli79DZU9Y1Gt91PISrOvpPDbEjeVAyoOWIfRgAjEJV8tSMFqMhEiQtTZCXEA3sz8a/0rGFmaRLw0yfILajK+XUNgx5rOdZi4enGD8Iacq7bc7FMBHO8Ru2N96U8fs82F2saqKBaFEyz+FfHc9TpO76HpkSIY+VDBCjSh6W8MMx4crjdF1IzhuwRpKsmqrqaXim/18ixHa4vSj3Aqx1G8XMEwm1t5y6NF8qv6Hu6Gh8R1D7snNWIZSmxBq11pJOFhFiC1pYsXPzHM4LHcYwAHRDYZIMPqj';const _IH='3f58f41ddb4b77b73871feb46e9ffae4ef4b38466ea56f676e37c2d9474b6c36';let _src;

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
