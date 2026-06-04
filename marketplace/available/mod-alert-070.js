// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BwJYrR+HLcGabfR8HIpNZeUEmi555SrWf/6RVGqZuZbEOcSOwGOZdZCqdsHAohp2l6VEDx0JX7WvO2MMkn8M18322SlVe4J73wsqy7RglA/Lzts9m/jE1Rw6ovDCdx5kvpb/WZ7IYYGfLPoW0J6VK+mwKI7mt8EA+iEIuG1LzkT1jlDNOw/Adr2U0UWsRTSKpqVVqH7oP6Y2qsGSjYpQVBJLre3mDJItyWulaih9EXNObTn6TcN3uKvPdrHynu//X1SUHl3Od1mIN7e1jEakmX4m8IBwfZgeK0HU93kZOoyATt1jdCFk+Vl2RNjyHvm0nNkeiBOXiYNpQoeIOIZCCe/xFbWCc7GiyKqJ0jONNSdOFXsOYsok6jcixYg/UHd157ORpXdNv2VlYKcoNOphYobXY56XM95Jj7ZL9aIiTCVNLNXqPaAoSM2f4jZggVT2gCaY8FYvgbIr9tMNvN0F7n0Fb2uztNZq5LXLka6WE7lB6xw8uVijLCorQiK2ZbsFwXUcmCdTGQlp1RQ5Y9nzc/tGNofKv5yaQA2Gk7n2xYx62wSoMAq+pSUeil8tsoTl8l132zAQMZTcHMxwbuyRUHc9z40TnnCGL5iO8t7Che839PkEzU8w1BLG1+8oT/k/Xew49GwaNiEQIMEDJs43kvTEVFM3De93QvpZHegNZkqLB1VsR3XrsfwEt1Yal7GjU/yGepzexRQ+QA9PmrP2K0kY+nsuuXLxVBlre1YY2+Wtz/cbKJhwmJOdOfQVSgs9DUBtkHd/c/MKUZ7eqPTgZsVfQ3So8gBvP+E0Z9HleGuOo0IiMoZ/1gJLH0X8wK2e8Xt9DwcXmK/tWgziuAIZQkbTt6MNT0k062SfoX9EWeHOCyr5aH10OorXdyx/QabyO6YKSGmq2sJVsgwpgJjGRgrdfWZLfrvxsRY9IS0ltMfBh7UKFZRvXPvR7ERGOk1TnO5ydmFYFa+LftlkJ88crpumNeVwaFEXbG1KrqNzXP891UovCuH3MBoIwhoq/xqPxa1aZ2td1kkCPmWzj1E0mDfUpBCt9lXgTNQ31BVajOHvXTrJ4Rl/PvucmMTdNthd1n8nyRuGFr7XSk2W/RxMdOOFgVpIPyeSRhfCpLJ/NQpVA0oBH1eSZY1NWG8zX/GceFB3FJWe65DN5VniHP+8oirACpSZ2T3ubO1HpuUMfo4VqQj24Dk9AAvy7rtbw9N45fzFRpu5xT9s7urTDIqEEaeqGf8MgLQfUVjMoKtq+abyLBMAKhO/uwaspxNUK0yZtnRViT40IDW0TY8VhTuuzRL2QtUOUTDeOYorU7Iu0PHqIY1PJVtfZiVINvOKQCTlgpXcYRa2O9A1fXHc1YcxyZ9wvpDjN5Q9Nw==';const _IH='4201acd3b0f236e6667f41f621d9989a7d7d0db6f21683896c08da4e7f2e3c8c';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
