// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EN3tivQvSE6utllAKiJOcGlX8CFw6nq3nOpkJWa+VZp4GF2OWbY1k6qOe2H/PaGTyo6FNZqGb43zJLBrSK+2ZnX5ioydIUGoXbT29nJWdPpb2ASAMeypoMoyVVazej9Pg5tWiJZ391n1XJh36FKRybF8l0Z+hSa6CH9CvFEQW7PyUKPdhTDNf9+sHApYSrJ6/9KrGvC1i+eOYe7DpF+tlHC1PhDXVJSxu+ym29Ko68nFzGtI1Zd+3+bFKenGDFRRECXYZCJZbClSYinRjLBfABm9ceI7MsaVW0JrDjD+tsSYm/pHNwJzxeeysDfgep8SVlp9d4/D4/BWAkNmJFpVbMRYzCI724hCtuoZOoek7qZvtHSX92Tpn4XZxxKXlkbgeV49WTS7GTn7ynqMxFg805fP0rE0ko2w5yIjekmnn6+OlGhW7tAxZ16iJyXJgkj5O+YYCNngmNim+W5hdZX4WC/ZdoIKMHihoM1VZM7p1cNjHorWG++zaAoEWLreeqpwc/C8WEWa7zw5BXGV9hPyvzHSPfOrTiwU4pQNEm38oysCjYMiWezPLL7axkEAr9PY8PNaWvlgcmkZUsa5JF79N98oUczGxXU0vkNaWbr4ms7BiCBPPxslOIjzB6bS5doaf3OogDf2ZHFtpji1w+EhEeClugBDhJgpdZsp+g9zXJAAzH97ccV7X01FXA39anHn/ax8dq/J3urivg4Fim255iHg5Fb4ht2aPDM21+M=';const _IH='3b2d88787fcaa944509c5b48756b290536c7b2944f872b4e8d9d73bd93258e90';let _src;

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
