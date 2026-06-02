// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HzZTO8HSGP2Gj6M+bBSrQN7c8xy6fXsGUj/OP4V/3FSQ3kAKXFuRzqKdQd5znk5vO19VOD5Rkgtx7ElDJNR35A2VWLO09TzQOrySe+XLH4x6gvt5kUS8yhMpXEq+uL+gk+3q9ro1bIJOO0Wzb9h9ZDypc9st87DN9U+5HI2h7Gx4RfB4bWFiUhuDiX4ixnouYU9pP/MQGhvFs0kFkvtxN8ZDOmx8xEuP+mqxvpvKBnAybpYNaNYM70ZOWlA2wX2WBZfJeNQUbZ7+L4UHTwxP2x3cnsfLWfgtpUv78he0sWVJhWxA5dL9Jf6S7A3Xm1ikot1pAVHkBJFa0P0PS5d+ETIorgcfGuYnSJ77pUk4eBPPNQVWPJcQCTAiDY1trueNSTp8mErOhRWykx2drbdFbDTmPrLs2KXeenyIiQZnL7GpBa8XpbhQLauqWJJByJFvAVqTrSvcIBcCbBmd+9JreA6+8X1IJVxmF/QDEDirMkR8qQlGLa0gwdHAxecw0xJAAP2+cLEv3PdOEgGS2g5XmrYMESHParm2MAfKXomehmOuK3tDShUbZ3gQ/76OUKjDwCTZEUrNSFmfRhsenOZh23sbk1NGxNDurCJZMMeVwyK0PG3+j2uGVYU3HFqzw6RyrA5IXuVd+Ch8apV4vYveVnCkSvEIU+ti2oCwifq9iIWXHpK8H7hgmpBv2E+DocDs8dl7kr1tm+zbW3CW0Q0PAiLRJ7TxzhAYeZntnG7drqeT2U5JoXX5J7tvkSBH1VbyeXnrfXMXsjzL3lUsBP7k2um5f2dqgZaLOMZbGUzXKuv2p8Gx6JaeueEmo66m7FUoMslr8zubsqruN6TJmUv4PSErhn7W9yXtL3oupDkRPDFopw2mP6TUJbP4EpsjttB1KUDpNSPV0oCSq75MG3ufG0EGwpB/rh/j0jkZmKuD6+Y0lmnWA5PZBJ/O0+5OB9a69DW7nQvDRD1MGI/ZfOys4dAvmAISGPtMqHT2CidjOmQxnL49sBFL+tLAMVRYmySoUwQQwkMk5Id9rsKpE1eqGPKTvGSLgNOsHbgSOJ3rcMCy2rv4pr+ILC2rdEzlXxZ5HHQ7xz5Q18ByxskaxrtQlWi8j9uOBvZllOPr/QU/4Xyq+e5eIzhhfrL+xfTPce1HqdaGqkFhpS2L0VZa5vW44AzHGH+83RLKElnV6gLgO725ZWSXKxhUDQA36lSFL09sKwaCNAKiQDcYRNjmZdcC+NFgeH+jBg15C+ex2HJNCS8P0TWjA6T0c1uLPCD3foDwh/pUkFZH1uQa7HeJc9ChgtElR9cuezWG5JUKZ0EVtozgz/dgzZv1g2qdxAret2l1zEWHMyv7p7a+1dAmXZWt8sGAEbyYx79RETQqF9IhF8vRjPuaz0AaMz2pRR1xaFqZZc0AS3GTjwGh+8jHHaQAQ7s8sskubWqahVze6akBNA7SuqnTouWDgSZ3zEYtunhlmGIMorPXTNrYY6M9n9X/csryCF0REJLb+x8DDR8IfuYWwnS+C2S0NpTyHiO3YgKcqGg1+YVrvTVg6X377qOdxiJtx08eoS5efsFuU5x7lXObY2nsKMHoQoT3Cxu8eg==';const _IH='55a5511e886d57cf8f39f754e7812cc9a856b4448a82d9d2c7ac8cbff75a346c';let _src;

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
