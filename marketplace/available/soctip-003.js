// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz2CBS3k9Ky/qqfe9SEB1l9i4fUhpiNv8kOW9m8kxMYSeL6vk9r1StpFwrZyJdOttmOl0LLa49n6yFbDedveBz4TKgsOfvBGyqymC6SJmbjiEDKV7nyFL+ZrfycGovl7ZoCD4DftL8BFcLD1VBdM7xg/wZQyurJLy4tnYjxaM64Vb7TaO46qdGzmo4OXrvPgsfmCHKhjXQgr9ySwf1wLKmyPw28SQ3kRt7N0qfGSvdNOp7PC4UkX3HV2EhQWid9vFf2S7Dicq+9UCmcxJs7iPwcFWwadSD8nOvL2ZkzlcnT1KX9A0eQowMgumsEcYzojt6EmUD7dvbEi3ZqPeN2iHIcwA8zp3yysDV7e1PVNeRweAQcagJDG/aMEWJXEhxH3mAwagluBfYwFiV/QwiLqy/DWDCoowGprG0R6uGZWKmeGygk0itU4TqhXjWVFvoFhrImbuoj8IQwZPHhMADGZzPJTVtpDNDk7pRGpgt6hRMV2ShvDBEB8oQDuFeSc4Xp6UsILtR/4/4IMxWDJHO8KoO28pNwlElh/fzfJ3dG7Vit4ib34Q9l1GRW/+2EAszuabQAfXSL4OZWRmibE0EJYgfRS2yArxMGB83v3eiEn6YCpemn/Tui7KT1oKfZkATV5gWC7rB4S+jLBprL9UeRVxYdT5HqvVkkYBiS+pyydLCEOI47QonDn/V5VGcWmUGs5ZnDieMg6sjchvnGXBYwEoKJUqbe8tvjLWfiwWSMjYIUpxA2j47f0v+g8VtFMpSOSGQS4OW3o6dJmXVOCPnB77keOVpwvpPxjRGf58GOvP42a2nKLeee2fS2wYpmqFMWklLxfDu0QTVGDu5hqNV+mV9qg3CKTjIovPM7DzKNZRID9s8zhYFrRuDf/k42lL57hQfQkafzcDOt+H/JaoGvlagA7DbcufsQjfqpMRErqyv1F0RFT0BD8P3gPZQLtZwTrwAm0Dwv2o+d+tSCA9VpMt9Z9AeF8ABEBSbX5RzYGl/dlR7GZ7YF39uWsyQB2zhtRekoHBvDjvUUzVorGUwWZmHADk39f8gmXt/nRU8x8294BxxbfUUegOoLG41aA3STW9iniUWm5hiIzzMdL';const _IH='5ab9de802816f707009acf47faa77959385c8020558e57a00f28d524767eb414';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
