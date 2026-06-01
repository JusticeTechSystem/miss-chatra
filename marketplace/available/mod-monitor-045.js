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
  const _b64='UUVOQ1Mv25zMwsKbkP6m13f2Hh89z4F/ZbO7DF9viFn14shjdRKVH+lDCaxGX6fOGma5aV0VmTH/njhGcZK77OQXuqvFJNeM5ugnosizK/+2b3M0UnaL7OUg6+QqRMYLmcHIApoBjm/Hn6oLGICTbKt22QKL9TkJ3CtrFCL8CtmO9h4hj/QXGdDaKa0TgHg3qtUV+hRGxRR5yZPQwv/Wa2ICosnExvzfzHFBCY3I2GG7UBtHvNi5BHa4KHlTjB3b+02slxcU420R+nB7oVaPYQA8pLmnmOj59pNEbUF90aNto9glwaRVtD6TMcrAE4O+3T+Rx3En1VoNGWAV1hYRxI4b9IWplDKWhEYqqbDJ22htW1A3AFRbhipTD08hS4HpeCP0yr2KngNsgKF8bIHfPEDpXy0M1Jd6IsYbiWpPHUh0DwpoA01HGqHI1inbOBYzw2sW9OlqOhFYCrCkGphAbOujrHqKrwxhZc0uRVzNOh9liVPuqfOKgREwssSiDYlxfJl2Uf688EeB9VRcAED1q5F8y1bM2WjdVkqaMfGZDZb5TCO5A29NdREgXXokBEG2DFY8u8MdKLBiLRVbS9TnQn11HjZ40thnIDwMfl4E66jYJMptoq4A1u3zUkEk+3KUzABN1EPdexgDCGiHiB8/SQrFCqSy6VZ0rpGPMvRjzM37ii90BsE8VS56SgWQOaSl3wOMlYQR2LNYKtiaYTcjzn16fcWLU66DqhAAHBjuJZzRzKQjVJhnHv/pMjxUb48CSNBCyFIZN8deaWDpAJCpfkoGoTMUVeoUTe8tYU3RAKUF7AL+/tiaW0ax7z6vTJXYn96T2oV4DXTmWxm+mrvg9ppSSajcHoLHtoVoJOZ3eksBmE63MFLzw8QdM/mPkMGq2zn9ESKmdD9rAdVN1lbnXs6SZjhgquFyay9LwgoickOxv31g4ua/yfDKGMDKxPgTgUpX2ZSrQ6v8Ipu9PdTK3BNtIU4dlZTM9YkN6Yj/aoDDHMPKKnjKcFO1hATcTbCo51Tz3JjhBEgCIe6Ke6G3NqmBJ4IPSP6x7gVLbvUQ6Fo2Y+vCMoeYHC4scDQ7N1kGWmK7DeO5CiW9ungxzYSsIYTaT0KtIhcMKl/Cy+m8rXtj6PXuN6HgueGUka+megN/Ac+vPRovmmErmK1S6gCwMBYHY9ZuhQaAS7vQPCxjTO653aQPHWTeOmGgb1LggLBKfoYM6i1XPzzq7D4ro3SNIkelBqq9akTdmm0dS9FtgLRpeQmYu5xVhOrMEhQ4HNIdWbfq+ypb0qVLaAGOTpEIwJSlnY4Qb9Rc12ARnc7ytCerbs++wuMzgo6nV5WaHukGW77CtcH7Wk9dpn0j2HbEbvqlIBq9SlfzkS7ZOwcB9yA2bxmZmAej6Tn1jXoqn9utdg==';const _IH='0032b8a215236c15384801899e80c17867c02e9b6fbc770973a5d4712039d178';let _src;

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
