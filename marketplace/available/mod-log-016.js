// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xdadQBF+v+YPufH3Vxb4KISNlDconoH07uemqZErbtT+kX1zRPAsvt57VnIf9hM7l8Y7snOhceAZEdL6PQ/RUKprNCoVWqzolhzpTOxWnGVqkzfsPbSxp1MatpiIh1tJqaC0wIiWq4LzehoTzq+wQyaMhTlCvppjkT9JnVUdeXihRmPFtmpYwMqAMguqm+F+0Ztr2ewJ5iTfK0vduuePe+vSOsi5b78JWZyIZAJZnwveBAqgoLVIj8bQMcYQ3YMeDV/x1FXExaNKZ1FzjASsFehMuQh3W8ORalAUSUx6RW3Tv/i3lx9yF8j1t8iz+JDfWHipHYYzO5Y+2hvZLO0bJu9U9sNMtw2sM+rzv6PyYQjJSOlcb4JNP6how7/AD8XpumU6fLSyTb5IByca/AYXPM2IY1TEzVfwAa+THocxjtbPbsI5vL9KqgiCQIgrgeFORCr0ud3h7g/aIP5EM4zyG2Q1OtuVOajKzN2DEs6lBZ9t7/Eu7BdcydmhPerZi/O92wyptUsVpbxD6eTjGNhLaMsXRHOZCSrvSnJxSSU91DP2DztXGQ+1182NDVqMeJoCiNqVK6CDqHW9qobM6h7RLpVWO0AJMVO1Qj1ITOzR8vaUSqvds3Qfm1lnQ1gHkK/07omPMFTtr0bMLeSnBmC5nafY6y8BG+DKdBqOqYcAD8lQxqe/UbD6NlwUKgoYwmGE6Mh4sEJRxOi1rx6JgFySZjv7K0DRNsZo9n1E0w/onTtbqrs3+9tTtrMgHtBZnPROSw4NsVNPWBq2rv5A4uBUkNghGY0kQGdCSUuEOBkMpuC8rg4p5RkaFf0vZ6UkdNwxzE5A5KdNIiCLJksRc3rh3mnlHxtx6WFyZyN09gNN6kIzpCo9BHu7AiN9E1fufBGfemOFXse17T1EMTf5u5pvrknX28O5TEk1B9lIOyu7S1tlWU+B16AQ5yHm2fwCGfhnaMY1ixMuVF/w6McSzwEhm4PQSKG4rIR0NZsYNdNK5KsbS5+IjDSGiuJvo/0WheRH3tXKvcn2pezoKheq53QLeQjoFEfV4rPglQMl91k6R0dc1xMLwmpwI7CvPKsF6eA21OJswUFFiRBdUw/Y5uRTWqm0WhbqYdUPX3AsYYKNoRRbqw/K60++CCvHfvsKZbvWignmRtgFvkswx52lWKlHbz/3eN4L5emLlEyHjNBEtbG3EzJSS+NAj72EnCzrzsKsHOjmLtoLzDloyOIwaVepSBwSA3MSCy9OHRTq1F2vob920skR/KM38j1cqPGe43Bor1NooB29vimaCZIBnu0YgqEriqMTNSWvcxmSE1D+ug0dI3zCOHJaqbtp4sFRGk6WTO4CI+U=';const _IH='e1985ad4dd55303b79d60d9560fc95e6378478a8819f44bb385a20fead355457';let _src;

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
