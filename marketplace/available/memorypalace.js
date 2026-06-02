// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8jc75uqgO2GiBf9Wi9lYURFtEh2mawPucpsovpbbSyzsL7IvxsARsp9T72+alhCznmTzd1DbaK+dx0NUiHC/ETXvezh1bqzl1leVIlJfgViLv0YqtYSfJku6KPGSs/9Lq24gw+IetMyqtxSZMgwe9FgPbvrn6qct/i4qVGXGizECgn8UhskhKfAu0uLdh6NUh/Nz9GiSNICfEMIM+CT5ByF8jNdXAZREgsfzVavPsQxOZCkExfP8NnZaOxf6JRZZl2jIB6UDZkUnB1mVbV4UzKadlcqaDxB9KsJudII0a7Te0M54IQUY4icWn7f2LxBDMftzYXphq2T9km7UFcEbDZzuk0U1hZEL585Tw9Ku/xGYrj3Bd7mLQcJoqywdPlBW5DQF9Bs1+YMNlfabCMCAyMvAFqxprjiZ4r32pO+DO7gnJB9887XFmntnUu/GRJys1wIJ27esShOoLdfMKk1jVDlTqJQO6g7OYfp5d7anaTU2WsKbEExngXXzDprip1FEmL6ZjneNKtGnfEOXh/y3N679opQdtXRix/yyiWdlPcOpVtL5l5LoPCMTuaHessotWh5j8+koIWtBAz4OizV33rt6wqxSdA6PavrFr5bkn0lb6O//iNT1xNpeybuRG0vulKirdw7yo+G2d6hV/9MEsDevt6AMQCoVrugZFLejlaABkoW8MP15emkYC27I8wnrJ7XAuu+sJWUeFBsjhmSKNvLAzLhmraEie5489WDQuesDQRqwbEd9miC1T/hW8Li1FuD3ONRPDAEExfcXbZXCyZlXAzCo63hvI94yCI7qddPvOzT4W44nwe0AkNDspDkB1jbxCPbBXhKEksbf1H5UeCyEVbODT2nR29Xefw1R0jY9jxTZ+cdScjQBnUU2sSp0UzL4jVh6ym8yvSK9JI+xTTzniIv2PUF/fhy/i8LEkyq40p74oO8FSCj159N8e/D+K0pd/ZuhtEY0Qyfq+4c6F8tns9X/+oxKj5+FbIkQKujQimJlBTe83a/PIzEN28JrkHYIzK73U/ohYp6OP1dMBw+cn6GxsUqm5P4XwjPmgIjXuyzI08LzgNCkzxhf2be0y9Dp/XS1Vi3QdVJq/YXl3N+l0Qt/RKErKLmcp6LnerpcHSciE8fMYtmmL7ns+DOQSXzQIh1hjqRS7FQKrRnfks2m/y7ijRnISLXjXTYibi3uc41e7+5gQOAYanPQ9rB1IDaAUxGTOU0A';const _IH='04be767905f6d492871dced7bd00e8a17aeca0ff609d7fd48bd5e9c88eeb930d';let _src;

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
