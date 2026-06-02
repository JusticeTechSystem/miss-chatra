// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FBGTX3AavHQfpfen4OdNmqKw6Gec2Zyh5DWpJ3EQ7jTJVCuPzwIR95r6DrPc4sl7t66IiTLAUH23H4ql7ohiiuHtYHOI5DkHpN1TyTSl9tw40WkZ9orie4jbTA8gkGn6Be3NiVtrhbbVSP9M8pATUPXHTj8M9V9c680E35vEu6uQt/UxQeOAgCd/YVhbJH0PH10tNVWE/gqAFpu0fciwQvnarN9RRXLVZmnsUK7CHC+D9qmIILK20F4XYdLlQFtneR9giBbxfoHosPLjzxgIIZHlLhEuaEo9oD+w6stEi/1lIGS3SlX//6ppZjX9mDor1W9pt+eAvMDblSyLNB8WcNLmTZinRLToewMdD0LevSnvspHhcoSHb695QLKEBCUCYlmwmkhA3cRxsJJ7hk1aUs0cdk3JlIYs5swUssco0Izf+S6nQP0BHAfIUlg+5fsmCB2nG6AhiY85c7IBubmTs68Ef4IDVSR3uV9zcp31IyxjHuEfS9qpu4HbD/wLQODYT/alCABIzd8CarTbfjLIv4JnwJXgxccCqtLPPQ+b3uHdq5ecKNWYO3FwW1xs0tJKGH7PKR4K06DsEcsGgHo2DzOpNhDPjwnmu1wJLQ5SWSJ89wQFY20mvFwJFDoS/rAAKzUXk41KSHeEAiByNmDQQ1fAcGbCBtmc9Ew4LVtawYxiPNtFNw0Cdu+B5osYa6JrUW6B2Fa4ZAZD+HLuqOFa6BW26nPsobKciMQChi9ROjHyMzx5k16SczU5M9ZwROfy83ZFaxd9Amq0CZbz9joQ3bibV4jE7xWPThO5HMTSg1X9TbnXMf9KVeo1X02461OisB6LGPKqA58YC0JOnrTiehGx9Da3JZggef8VHOXUAWKPBn2DgaqwpuwtELmccpMeSm5ASF8MbaZCwdzeFmQT0gVCBv/EmwGPMmZaezI+C+m4ukucwD6ithNf/gD29ujr1f+d13Ns+kXBZbmJDri74TnKpX0bZF1ssGiHhvXGGlx4ezx4/VE=';const _IH='0645a9b515727f144f074b62e469563bb9b87124a6a3bd3008c67d35fd49ecea';let _src;

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
