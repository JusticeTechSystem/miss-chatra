// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LDKeyqS2Br8DNTmjKPIUaz2tZu09OR/iC8EeuBQtyuIEv78QHAgVkdGdHuDrULTnXnQ2DWK4Y9J7F57yOxSLixGT+fy+1qNOiQf3jp1qlao4Sk9sXKprNwrIgGJGPDM5CtIDYTjZCWkpUVqst9KTcth9H2xqL269zsjcjlRhEaV8JgoqYd04YP65LgYlbImcwwuNYERQi7txts/qGGjg26zeM4+9RxJxPdO9WYV1UWXnb6trSP5alLP9HKBJLSvcS9w2tKPDhAXBAoaRvfhq87WQrPMQZDPqdGAUAEC/pr9G1k3PVpqapw65pK5we2RL1R8zHhMBdZBCrZofTu9gl7EEFQ/Rdou1O8Di1m6b8z+aBCP2PhskcxQats/xIChiliwoQE0hp/g0g5wj4hP3dSM1MwJlNtSrOCaz76Fj9qqVPYjKWxiZXRoijhKpXpO+VAHoHBUjdtR9PZY9g45diYB78O12FhO1eif0JDn57XBCAFkc8wQ/NRjn2dmZyYQDfL+qeea1sl+p1emy6FI206gSAfyOGw9e1lezsD6XyNpbeLXsiXCI3iv6rfQWBuSPgUitD+Ah6ccHPzyCxWoxYMXHU2deyHwwfZ68JxoxvJC8dMLcgkaCEE1JwpS/aw1DvFlPDkM3wAFe3HTikhmf6ItNauQzzU+K9O81UdpRrPczaUQaMkZhKcV2FZZGkmkzwOCt6G6+lKFYAztPlefW+dxGp4uCqiwndqQjQAoWouguH/17NHfwxBxu69wA+cS9HJwBOQHuxt2viPQajC9Ek6KCOsAkwc1MGu8EonNbufkoHMM08GUpQTO859/uOXaveUAUWtbNOMwdpZgNp1Hz0GeTD1Og3dMckXbMXLqbTj57IhEZQz9U+nIPudEuCAs9+lkhKhUCnXL1vBoVPK22QxJ+UHedpAr6H8UWmLDNU452Uqr+6duItH2l/1GV1a2C8+W70XjeQZo+l+s9W3YlC+To6b8dIB3lfHtF6w==';const _IH='161c922771a8b5aabf78690a4c8eef04db137da41f6b164723c4e211a4d49665';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
