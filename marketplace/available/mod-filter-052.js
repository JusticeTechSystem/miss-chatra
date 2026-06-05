// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VGfIQlLlbTveKz8Sp391ip7Y57pn5sOO/uA4UJhCnmTVysx+KP7mTCG8TJ0EtV3DicqGhP/5CDio3SEd2e1PvRmNszYRQFpfH20tYpN1tWcEyVOZyJC1YgdcZEJdFxkBJK+kJiD4csy5ivEd6odjMQj0eSGysev9jU7iaVqisQ0Cmovjwf1PC56r465/Xkv/WyJk8SZpvARUGF6+u1DlkjEqlYels68atUYUwW8JnQKncfxEKR/8SNpunEHPGLmvvpR1jSnIQx30enNGG6nwMsLHhL8X+X44jJhFVH5/7ss040vWsGn3k/Hu5W4z/w/zFNafk8YPY8HxUVE5sC9IYFbCqMZ/Asuv2OBJbKcQzUnRSNU034ZxkPKJE32unSJu1N0eHtVerZCU+QWW1Xqz7Yhqbi64bnHK2RXAtDZj0AWSOLbaojYElcDfcgqeySZjJQVvGgVGJM2nybK4XJeojXb7dWNU0DhHYNvPaQSPJwnNDC7zWBPdivjHJ5IPjS80wmkBSmvG9dgfZuG2LBDFw/Q8fOwEVsMULn5yF1TyZR4i1AEZxupaffqON4NW7hRfFL9e6+fRfAsFLWU5LUK11qDro5Fg4N0RdNt/jZebejqgbkDxULpnwRBFK1tKJJn/NTh0Xy1JFjxETFm+dper8a8uy455yH3rbCalAXWgLM060c4HA8dRXP+ULD5NiKcyxZTRx/mhIo/v0Xv8XgNhcWSoBf6Li8Zm8jM8EDoJG+Tjs9wTq/Yt4i2j0AuQtSESZvUuZfGWyLKrXVpkWTsfYQmAaVvd/RzIM98Qb6FTNUbjWAjD1dXK6TUUEr8eELg/Qurowu+tHnjy6nWTz3QLz9aXvgWGi9OAwsxij1W2kHUSYUPOkZjpO/yPop5iXbFlA1pphNRofOuAnZqb+NIkXLxUoE/3InM630Gm9MDHqzG/sXQsqpSEQBanV8Mkrb/k5fWm0eNrCHsQwYW9uT8YmO369QpgqEBd7Lr3feyNMc4fQ4hX88LPzjJJlCe0kUk/HJwuGXYlUKeURiNepgjWYa/TVvpNBYFFQD2kFLp5yKqRQDpWp/JMIgpVZ/sXDTNxIrV6yVb7QtOUPV19aMFN35gfqpoy2fko29StV7gwPtP++9XJzb3XBeOh72KvoJahMuMj7U0YK2Q/zytqOXys1K/M/o2aEF95TfpXnOM2Z1IGG0S1C+IaC/OwqZv1zDGEhiDnztrr7FVRMFgjCfvlIlzaa+Z7fii2jDAiqMLvCUsJqzlHr6PNg/QBUfKqKXpXiFvEmYNj83fNxQEGy97b9j+s7DbNT4nTR0xuaRSiveQ9hwCy0LABbESxxBGSwHj5mPEUd1fBn7bl7xVp/SyX/KODrr5WeXFIFo4mRM+75Zi7f1g=';const _IH='8eab4fb0611e55cfe61954c66e3b444de2debc048ab60b28e9ede4c55800788a';let _src;

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
