// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XBxWrpKlLhvdyJfEePcn2Qx2vYLFpayviXgXa1w8Ll7pzDQkqmhLMarXCGVHyK5DKXddMapEP+D+EP5qGSkwhP+36ff7/i7/nc5CRIg5pEEr8rQkOw9Mqb6ZVuKd49MM/JFRnMsbV3r5WE7wiLBCKP2CiROZjefwZ8oWzAyrdKCmo/QDEnuUUeJnnzhffYZE401aKA9yyXDUSJ2iZZp4fubet9FQJWRNwauZ1wKnr117TLF42TQZdqxCLcYTUovsFUQV+6NcqzdYTiLmehN93HYFQbbM1ITPqDGCjOgdPfPpRJAu15umvfIUgMsTs1dgXt0HzM1rKAAqGUmXx2Irrcam90CoSmSeV1AlxQ5MohR5l87uFKmMeI4KO8MC/OUoLv0DE0MfPHT3UM6U7yZ7fow6HnFnpQ6tKvKO67LkKafx/UFpvFxJK/P7ijkxTyUi9uzXIi90CgxSPgPMNsJbcgYXAmFq5FQIf1TXGqkPIBdAYpwvuI5cNTrjN9pu+ExbP6csGA/SHf8tOvyYvQFvB+KurCMZzbui2/pRZ9thgu1bQNOJor3Qo9r80qQc+zvMEVND82XAW1RrH2rZDLCFJ+gO+7zePF2fy//48otRl6DZDj1OOeP8bfx9Krwkhcs6n9WtQhs3+rhSGKgm9ZTuN928B59RlXqgJi2VjoJllZkDIyG/jVHieyzfG6X8gx/S1mem/DTZEP9yJ56ojBL8M7LVNIoHtYN8Nmyjegs/Tl3zBDZwIVMbdPYEjbgoGy0kKoxbkia4lVbAsZuaLBh0Yf5Zk8JA9X/5MUzjdvhavwSbs2/vImDxyQMP4ZtzyOs7PsFZzk6cRpzJBPpMAza/o7xD+C14i1/5dm4tYc1X4k8Kkrr9YsqUBty5P4ZOrx0bIia4J8l6a7IUYLbJbYDOeYJMc97V5rySYJK/3M2qF6GALkpc7oe2AH8VgzlyEHwVYRlAeXJaNCWetGxTttla4QKmVudRROM53Yh00A+CYy/L1SkWP8dPHacb4lIBgF9b8Q08OA==';const _IH='69c09bbedbd0fa677b56bebb80445658263972af9a476593f6821e58d29b8015';let _src;

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
