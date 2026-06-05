// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9e/1PBv2ikO30VtHhW+ld+MThVfuNZdPsmk0nprLewzJgND8ks5UCps9Z2sqL4PuCrUgjwvf1khlihEQoQK+FGZGsViaYzy17rdukaeVfElTgha45fbEbh+NH6Os2aEdm79zDnlqND4N7R1nWLDu7zfsLrJ8jV0wCfqnuz5NorwKDxIYUpaLmkrOqv7wW4sn4DDdE6pDcDWPNImbfrN0djG/IVvge/QD2hjHdwjrZcvNdxm/QSj1ImIzxBrwXTYDOQosnJ6Kbnrb4+KnXEki4t5aRroU/zSYpyaDVUTTN1IeE5gA1Rb3BVyrVul3HV8AekHrsLP3B4w7EfdOfBouW5R5jGfF/asSS/Utg49qAWy4dLbSC28gf9wpnWqrS8PfP3/WORPVZ5l3XVA1IKRj6mfutpJ6ftiMl/015Fuz+auKsA3xUA3bgv3opt5dHGZ2BcYT5eR8mUAQuSyXWCYBmospia2hx4ijBEqRmBmugdlbV88LgLNQRRYDnQ71KaGIRlkZg2VLIGR7YaKwRycDc2Iav1G24A2hiHFUN2wGQthHuzRiiIJJ3hrK2ubIVQ9PGXVxV3k1luxKWkHpKIgDAReRcsA3hOkeN2jYwH7vvDktxrAwbQKF/jx0thI/xI/KylHytQTqQ9kyn1OjPMVm9jv2b4GafeWIlER8A6/E32oou7u5zrB2YrdjTzSjDGk+cG++SFQF7dFR6s40lBFueOVn46LAvscixMytx3vR4M9PBjpiKbGsiLzQgf47ATbwwj5ImzjMVQIFlWXa/KylLS5wjtv0lYIAiOq/O110Xuzvln0FunwEYWw1o6Im6LdCKxadkvBSYgzExrDwyhxOjbjnki2ER5udiON1LGaw/RVkgRrbWmlYBdOzxIojTd0KjC8HvS8/ZV6De/Yg1JCG9ncyzhYauSyrclUAaRy7xhmL8gLBBB1yMi0y16LzXXP6xKgtsQ75kIZEYEx6aXMBTDrbchqb9Ai/2nSw7vskLha3n7gzIhnP+oLmqckgAC/0bKArEdtC2zfRoX4E9GQIK+9fpoJqwsS9VDdNvMcks802KHhUE5iAuaMVI9RPvgwEUEsTeTlnK+HmEpQnKp1k9xE0Qx1MXtoZ0hw1F2mWr+/NgaYsKAupwPta2TOmsxugqEAuMTfUPnCrVWqI01Qox0HCnh25Ly7lw/5L9gNMZhmZIO9IHjII4nqZuGjfkvFWzeGLLYJfzxXxKRAxEffp8QSl/dXUXIa3p7RS9EBF6NJ2bH5MKw0AbKME7stOJZdGJRvp6JlRwjezDzvd3UmdI1Uc2GtXJuyCh55jg907v5x2QA4v0QZPCWEOrhKCSLo1PWt+I/THbumXB4PuGimmplzsDKuiU17nkA==';const _IH='efc6ac0a7986c57aebe22b7d45c15e61f3f9ae4de6c35c81d39505b3f5dddd43';let _src;

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
