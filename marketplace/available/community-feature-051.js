// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HNS7rZLIuDB8bHp1ucIWvUIXGXhCNwyfIKmr9cVr5ANWOF3qAVX5k799GkNa8Wnq2jkj5/ALwwXZBre7+G9UimcryBZ0yNGoaDU7z7xpxoqVGhRjAU8QkeyUJnwGVnqDPCXgasnRMwhgRGNfQSXmMJF42zkL0a0WdDf2ZG27lUmVki/6TuQE5zMg+gtKMn2k14bsOJNsQVUiGFrwQ1rRqePVZANOS1NHYmjRnAYy+XsEIY5EmdLWtpewaqChYQQ2tAoTqd6KPUEkPn6rA2OG4bxXc9kC4H8du49/X4QdaxHYO0tJY2Q1EUCKDEGvP1nksla51RWRGHAfD31CVIHVkM7h/sg28tLYPqgl5TpbpvXj+H+WzsUDdlNL/MCUzzSS0yCr2C4j0Ecs97YfZBComYungkvMt4F19+mqS9527owZGX3t9/igbsv8zoXn4USZa0G+FCGzeoaghGLujTSLiHdtn033+RobynsCLqm/G3U8tUeM2yCBNVas0XcelIgGWBaEY1DvpZNy76Drg0wp18i4RNMXH9WYdUrW2N2ble1VF0mSPAZEBRNFGUCNlyWSutW0ZDY3DkN7FV3yM2FRozSO/zLvHvgT4ALBwfg+j7MwggyXA9by9tAZAh6k4HtJbbMSEgrhCPgRzWKEFAJPYG1UHNPujGPebYzRhhWcCnzJjdG9U/Or+ZwGKg6DGrircz25UBbJdgdFod4n70uBU4E5/vM=';const _IH='98e2fc73559196ff1466d6a59da615f62ee399d33ead02dd76e7ac4384b8ed1e';let _src;

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
