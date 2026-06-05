// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h0TayDT7JwTi8R6sUzq1WfbDpw/Ep26F3WY9kuMkyibJypNzeXxzwbZTLPEAiLJHZXviFvOb+BjE2/0uoYWoJPbFDfLoPLiizJUEwKvsGR52UO0cqkgsOkyV7g9/6HDVISuXA9e/N0P9fR/kEestEaoK8Uw81dJbGKo75taktfIbHHkTVKB79wvTRWFArFukcLXDYXPSASLNRqfc4S9zVGTEIYU6ISFEe78grljCSJpoItUD3M201D06bWbWapmfvSMMcnpdqKnlNtG1VZyCy5Prb/72Imm57pb0YM+wkPzy89jnRP1uHnwqZiv+f1FprrjOTC94+TFSW09a1x2Gb2jh1wHasK0zDx7YFHBBFe2RK8jomrygG2Vy2Rqiuk+kTL+hmUlJ3CGNtqOtPOCZWLJkj0aIOWgjxkTr1MevfywdwYLlIy7Cu+TYjtfqu5NWmmb/Pp11bppKz53jv4UndqemYfZtkwH/6u5vuBRC2c5ylkLOZ+okNBA78gGZJEHX/nf6g562MePYpEHetTVlral0QwXxt/74bKo6demdZanlZveNC5m961e9Fbcx7AlUxY/eGT1QH+QllidZLdxJKEoEvWTZgydilhK7RXWfvEwNBL1NKMpvc1KvWI3Rwebgt+cJ4p+rYj5Xc7LLW3CM5AuMyHR85WgII041vKHeIDqvyb4thGCofnDU6FiexOGtOQYclgVvv44TScZp11rCyhO3HhY+hfpPl+c5Fsys8NG2uvjh3bSm1yUTN/2a1amSp0rI6r0TSRfZUw/9DG0AvuhiXjWWUsW+aCQre5I6GCvPRD43X+s1X78DKf9JY9amZ9lGdXSRji/EolksLDsfvN2Ji2z9z9fn7y2mYoZBFZZdnbGZiFG1VuWoArlnwhN2PhYqMQ/5rH11Mb0WRNrtG7v/3gxlgpahXSfRIFRP4usfRdJK7NkgJRdjHpg8lgP1pVX7Kv4LdRKXx1f2qoaW07AsqLZq+80rVFAsF5gm/UHeWgaqpbkqfufj68YTGnbleEhXeg==';const _IH='e81550bafa2ad18ac25985b51a50c6d8210c8bde67f28940689d02ca10e04120';let _src;

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
