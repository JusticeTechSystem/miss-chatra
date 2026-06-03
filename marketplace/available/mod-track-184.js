// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jzu9fkfPcJHg9aKdURE8no0x7/ZaiOGE7GXTGNuGtvhKijgsWd2nvVtH4dDftOGe59Y4DYvK64XvbgrM/5q+CxtqRaH6Pz2hNd7GXDXfCnon0v0iT8C8TO/HZCT9u8gfPahPW4JQNJ5ZPgOnf4tLQCYJjK/8aC98Mms8x7LbsKCA84a/hyZf0dokyl9kPbPRUGc5/VIO2JBb8OCyJCNYmdVtvzbZsajNOokkFbTLSM0mgi1pU9Jli3XwBNKXkbyf3SzVvQbvzfDYALiG2fwGK4MKZvmaF3ygESFGlrJMOw0IwdcVYyNu+rEU0jJuQQYzJAhpNjtob3o5QV0PWtSQGkPbOyXfCJ7FNu6+9I0gYeNq4XCLpLPITpHTstZVEI+r37aFVW9jWXRGDnKziJTCEKWv1CZ1cedD848ZP0j4J/XdYHBX2AD3tiIqym2lIFf7x49MFMPnHEPlOgpg31BRR+JnVH33Mp/zM4ZgL5wtT6+aTQ6fA4d5gapibE8fAJ0i92vBtSAaTfc0z8ODIG7OnMULbDAvCzzuRd1X/eKpXQMBFkpeXO1rHxQ23VRi7lu85EwxCr4PhYa2QCagbBnwceE62YHlNVuw7CS79j5SehVWFLSnwGqTIijYc3tGNOSUnWCR+CQ3jF5HYarBpZeFV8qc25dZNH28l8B3CJeXaV+rVeE3pPZKJpq/Kxe0SUtJcCorughItZlq9v/5TdzYOC2fMqzM6O5SE7aYmOYjCJL8Nk2xVGnitF6nvQUvhJgJgr3r/rDF99IYu92KzhlQAH8UjDg5nOzN5EKyLUNSGU3esXukD3CS5aITJK0/++ZvqdepRK6QMIZ5rAiS+vxcQm1mgmFC9GmrIO6yhyf7UzYSX+87bcFTE2SQKrmyxy8Tf8o4CaNxkdCPsyzd7+u1+2ihjgWJdNT1gpwxwkywxKHeCkZJ1GG6OkvlXnnatwRfRJa2Z/qTvci/ebFmanaxoHryoQbImQyIs9PTaRqI4DbYKqGzgdDj5z3JWwoP/HR05+MLub0JBBi64kQ99S5TaDdnwzFgz4miNZ7/evBqNp9zLwsI0jbRL3RVWaBgWfStbLaUfx4B4zPKkCsZNEJHXhqlO8qlcz5hongpTs52vO7VhbVt2h8sNksLUuh5pzvuU+uvaFkuhW4/1GrLztXHKa1t288KG/WA8O0fFlXOQ2tIlh0yqsstJOAFa6T4r6G7xf/jJWZq1V9wRVSnW6CA5x+dU8UIZ3wG5RRZS5HNssZfgO0CRKTl2dEuA5rVaPVxOzQ7wAr2alNfAijgEzYbMqM7bsvk0S4n072YMqpj2YE0hC3jF+w/qsJ1xN7tWU9d2FMYzpXKXuShvn7rdogSRzNfQCe6hK+cBvwrJd4a';const _IH='951f55733f47ce6d13f437a17be2d91e635ccb9aff0ee8be316124b179db968d';let _src;

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
