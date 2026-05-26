// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oKl2GGXyw9yoj+oGYbjqdhKauMmcuPasaEnthOOMobTmIOqjxl82QoS00qh9whnhZ4csXlh2vOW62vPcmlEZX08Rj7UWM0oOAgw2TjgrLPruX+GKfKkrO8RNqsNN6MokHiRGrvauQjyxfitgd+xh3vYGjPEI+s4Ui/xS/VIRkeJRhI0PYz8gG0y/NcmCnJywq4+3sHw0JfgNDGkSuHAjpjrRSkuAOy+zLNXWEo2k3gHJoqFm6J1s6kH9iXi3ePpUUacUGTZJHxtqJ+oZvA6Avgy0qcF+aRc8ioIsM9NRtFU3cSGnVlzPYeanks7c1FValvfHcIa4ZV960XxdtLLIrebDTtzJIaEXgv00Nvui/xFKTMvPdlTCRsmAK0oD1T7XQwK3gfvDtsiOhathVk1INLTiKsoXZU/QYHRtgDBLhsjuZMmeJW0asfL+ropCN3dn3OPQz5wFnJ73rusphqiXeTqrRD+yaDqa6VuWlSlGvPSxOmITnLbBXAIoZuBVbHmWjycdzAF7ePC2O3vSNme7Oo9MKxJE4NXLujCO0hZmSnTL31Gw/Afap07FjD5w/7RSzU3o8iuZpPDwpdCNhAfRmoOx2sL8QL4cwZXNjxdqCOzgZ4qoQHbGlojhzVOsRlnh7AfrEZeflxjXeqlVrVZNv9PvJ3jTi7ICeGTDraSdpTcp8WclfJOHGjll9tJXcb+UCJfT618ALeHyrRs+mxOW1kFf6Bhf1bimAeXIE84TlMZjHpDuSymVlRpPK/p/eMA7KFh39hIxV8hc7hVAqDWEFF+E+zNEsH1cX+VxR/1sNarol5hor0LiZyTibN1F7fBdWLqENF0vYrN2uCWKGkU9cGewvwjKWryqqXwSUunwr6NLaJb8jkHYQn/J69jlrfUmGeSHNJGn6AkIbfELtuX6r/aHM6Si7CLdS6YP/6M+aANpPwa/u2djzQyqH9Ep/DLzhwtgiwP51RwmoOT4RO/Lfy9ebY7J0wn9naaZDosAg9OGg1tM3wS0XGSCQaYY';const _IH='a92723c537b71ccf7725c7e5db0b5ba5c422827733f3b32f9e6a76d87c063b73';let _src;

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
