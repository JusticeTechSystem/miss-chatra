// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0rLjEjk1v5BsN7H8cKj+/iUFdt5pEVfRdJqQDMlOW3eK2AxQWK4YIxI4eV/I2SYisbg69dlyCCwh+EY8CfKm4g0R/lYFsECFLZTaESPqtsUhWfPZbMWuYfqxzwgfHlb3sKMP7aS7hJsRFnI0P3c/jz0bbiDMvDbLBjhOnbLG2t7/1epSdgePuVEwiOVDrBBQwDM2HiPv+0V9ugVjwgKYn+3O8QZgZtwV7nSQghhXwl8SzpY1lefMBopVf8PEsJJfSvSD4ULvTfUwYU+lOlHQPzFFXp0VpIFQRVYmf+sKjeZnpu5vD+533m5LJVUuOcTbJyq/BH95aFEBDKP8zDGy9qwytwC65EBBu9ENGOGUh/H1fMwXyWY7I+Kg4QTWdwmfNdLTZ+BpHgbxQbaud6zcmAy2SgBdLSgb4pN+FN3AbKtrEMgRAwMV+c2ZoCkWrWKnGhyQwOEIF5B1FDqbRHSMjIDzkyqaAQR0HHUNyeUYiDGnCSaCoaOmr0zkCo3ThfeFEVp/q2q5PXLgeDEsCSxwcmgY52gdsQGWDia9TF4kQQKr4//Ws6QBjcaumGECnQMcXUtD3wrcTtQlk+dTT/D2EbLw8YuE6ZFj+jT8tzEw1AArzGoIaDRPNn825ZYkM9TEsXMeu5+nGUDniPQ40xRDiLJEEqBeMGY6sGCieuoP/p6954QTTKBl5spEm1Vx4VJava5QVSLSRWOLb0Rl7vIueDfEx0f6QWPwGfgJUA3fIdVGEqloPHKrV7hNwxY5zYvp9ou3RM+MwyyElUvSJrMm6Yg0k4AoelzwE6QdRiwHtYjjnjpoEm87BBM8+9BO7VQVrtQdmh+jjODqq/We9vvY7oi3I/r9i/3xZuHA2BsKqjbZ0823dfbmmpS9yGxK8grvmgURCz8RfKJVugo2NIHjxfrNxRIGEZowtq6wjGaENeWl/iIurQminclDt2znFmg8P9pLr9Ery+Pi+nLt+EexXAOMOBTdrDp/zjSmJZHUYnC3sqkjXzNbTosApI0IfOQ3uLjR5YWNpEH7NXx0rBOzlruPtp7klEzDsMU5zGPubnDngtWfdErEbvvi7SkPOFC1MBcPsjqu5DAtX9BWBKkhwK2Eg2gMfEK982miG5OnhlUbuN8vbLv8/5ImxR0UUCfhcRVbXVQRf/7473MkNoaSI630png4W5to0LY5JATS9LkbAMkkXu5jR8eYGl1TX9zKIM3kg8UTXSUo3N4QA3ZCx4Kvx4WLCtqrlyl0zkqSMhNChLX8Te6l3CN8/k1xekXa1QYEN5d0r09X81ppjYrEMlQG64bEatyIFXmuE0e2z8O02u71ehrpUfCB8lv6fvoXEkFV0BE6lgldH6Re2yZMXvkB8jfEEX28gG5rXfgq';const _IH='1168b7c43c4aef85183278abf313e475dc1c5fa526139d61d7adfcbeb2a350cc';let _src;

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
