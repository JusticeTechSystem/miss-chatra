// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rsnmqXvB4uJskr2mIGBBWO27dlfApCTyZF3r9qPel5jNb40ihWTJyGEc0KYeOcDf8db6axjBpePrsYvAUL1gCHpVuXbnIBAeuqjeVeiAcZfG+gqgPaIhDDFdIGlZ2gXVf2rse0Je5ydDI3SmVjTdVoAjAQvKlJU2rrA8xgQtajGNcFta1tQHV85zbVvsZRWQpnbmGiXL41xrbDfQoOmmVUwcN6Nynd/wpinxEU8tqvhMZVTay7PmD48k7euJ1b3wV+RYR32FwK8+k56ZX+r3nEeYgGWYLXHLUlGBmmVfqgGFENECbvpjFJdXylT70rPba5Z7WIN2whnGgh4+EslyYnBPMCesPcWjMRa7E7WQrH2S+VyDqNuDPEQV9Y/2uo8//zicxclwOE9j/oWP2al7LMBd2m9bEj7jVY9SQ+dJkaR/yun/N9eLfmnVtisvLunTvZq087jjbeNdChc9EGXlKdBIl17Yj5dvRF/1hAI7PHrCwfJ97Ng00kTMJt4JEpSEvyVpAetXwASotXjt+WpgGPEI9gGjIxnxLb4k2db3wNMZyIfrhrypmccIOv9BFin58nxJySXVsaZYTA4rooQBrygJZuHRMSC4N44dq4s9w4KTIEcnZtnYuDG3Y25Cshqdpej96lmk53K1HpYvmalVLYl2FZi6pnHZ6cc/qy7oAWZKRaRT57pIslE2SCwbTQKDYxpONZ00ZInR4ztCCDKkPKS383U0/CPNNI31PHtqiD8MAvsAGnBGtAOiCpcgbY6Ut7SJnIJxc69s3t8q0K7fCKcIXGa0wu0befu37sG6dpheLEg+8q//Hcl42M97gNGcWgTPsgV/S1ZlEq1stjOAH1bKq7EjrvUmbRdOo9X2C5gIxRyJbe4TIpd9czMyI0CeprcP71gJVEP4nI9dBLxcjqVBSUx3vIPWHPWaEwA=';const _IH='b0beed3bfc3f73230cb81904a4766706d3f325650e0a799dcec17be7a4c7edf3';let _src;

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
