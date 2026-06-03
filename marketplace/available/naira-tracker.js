// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VMVYl/Pkzhij72Acj5eTlc5MMjmbf8rorFLiJTq9M6JoRhFP6wi0TIKguwwUzr/bwihtMS+1eof1gciCbwE/2//8KhC978N2cC6uMWpkLDwimZl9C92Vk8Q4iZbr9ocIPjRGqYQo56CWaak09lOB5/D5n+6qot5xS/GwUXA/JIKyDmmWf1akhf1rsR1pkTRsMzCKMN4+o49Hw8HOgJNswCdD1wtqhV3IAIFdsVL7Avmqn6eH3h9pmYcZlWJOJQQ+uaZIyApWCrJVQfUZ8lSM3l7ICaNqFNYZKkky49EEZR965i43ZE+WnvJ5fQl7wAEV3RYDt5fSgw1gEej/xHjbgdSpTjMwu14Z8FctkyzqnLDe3DvdEymJck6b1pBkKecb8bFcC6J9ubcRKtl2ZOGYCWgAT081t2RafY8AhTzH/bt0kyH2tBJnbWRj9dcFc4leVgBjeZ3ruU65AR4DU/FGi4PWdZIXNT3LLMuIG4DRQ1RQHoSBGMuBo6RLK+Gi/VDKk0pq27rG9tpvEKGcukYvho4VjwC3qnh4aunuftIgLs0kEN8Q88Kii7CB6G5eBgZx0bOMtjF6YbAKlA==';const _IH='6fa3e09b0711e080592fe451662df40d533b0c33f6892f7db1dd48d1bbb6d998';let _src;

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
