// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E+QWcAvumRjo2bRaYyzCXqw88RzoKtSZ0YlhbdEPCoWqMdkowHFD2rGpobHKnMqWLRJBAXWptkITLlxN7QbLSMfH8Plc4P+XVrPnmLStpQHMnY22hq82a66u8bAno7JQKkxgv89VvGVbKs3AjG4aw9fzU4o9EwfPY0orp0SOqJ/dJHslh6s305MANkRbzZ9Na/ZIahFy5xF3tgxkwwi0B/GsCj9vn8hX83eh7ZzPFo1PxKd8FH2BUobdX0zxnrNNlKoFbaScUtHNQGxVrSzvGZztAu9wqSXprajqN8GyXGDkU3Z/VUP346MOGGAOTlNim5g/cnwZX/k55S+q9qYD6ZzXjcr1+Q3FfISRGOQ1ahJn+j2hB1dRGiSOlGUAT7CfdRrDtv7dW2dQ5LZQ+WJfyN3OmAqnmTVG2uARLBHYajU3WlsQ3zjwiUUXRG/8adzxqpE1HQKIUpMvsVeJCZb/S/pZDCdjIXu51asb3cZKRUyzXdP+/P0CeETL5bXSJ59+bMW33jZwV0+PJKB+jZBmXP38vnM3LuOAu5o94R6ECr8s1wJLRd72KL4AAjTCkIHmKfIe16ZZDktUJ1mdeF/sKBtVBMWjWX5iloI22KXWJzrLi3tV+hSm0IH8LK94MDrGUk67yueLxfq6rl6CKO6bTcYD0Eel4V4r3LkGZ3LCgSva1V0ZdxHfoeCztouI827UHIP+/kI75Udda5leiAU0XYuLiMS/SeD3iZ5evAvXcA2y1K38h97LykVYKojaDd/ZYOWm0Qkab9YrrSssW0msKKdPNK+3zCd7M51W8QEbqrdk11woEof4xvRUtPJVlWIZ84cE14igmVjqw1EmF/uK2sP/fuS9aeyyEXE/2mtmebyDmGs2bqJhwYPiEcdpjWOf0TTTBaRzsJ5blgcgD0C4U1iGKhmo6LRhjaekiQEoE65O0CcGkKo0jXizjcbkobWSwBqbzMxi/9Vg0Ety+AeG9eAxjQuiHbfi29q7QDjpXUurtJr1bRSpJx9DsmV9HlN0P2y0+VzPWqf3U5EA9BnYT0J6BshFOaBY5o67TNqIVytHxvNFqMTEKh9qWLY4tGe9fqok1YuH2h8FyWEMZcNwIcUPNFxarsuejCE18eMYTVHPO3yGzY8q6mDack8evNy9e7ZGo9ENFpai8EesVOH0W08OBtc6w+ZMMlzlgBM/YCLwv8AykAE8HvRzDBzuKZtmsfC1fDtrkfB9nE6XMUG7MpzN2/0MdZZDMydJZcZbuyWvAGLVzR1GFiwkpUeTzgjSOBfyCCo+6G27pB0McwbtjUpzE8LxCDVm16gXHTKr/hDYlmrTiEIFWlRDVICf9iVvpdAXDhp9wLuJGL+0mZrd31EX5S+UoIZb05yqqqN+E8TPPVaTBjOUG1ikudG1rFNotdJSUB7LGI4OwEjm6zgwTytrV2/49bTqzWT4lL0m/CLNy3H2Rc1cQcvEa+vph6WK5/27oDSjKXS5N4iMhnMeA6Dx859sLR/OvCTBscRA8DsvKaH9PDmFelLAywZSzWZPUkzQ9sSMYhMfAyNSvvw+YugNlTmrL/Bx4Me3H568BuGhwg0eVvA8tEitcvkaTnqEoI6pMO8Nwd9CPErvIoLQWy0N6EeS+XftpRsQ/tuQUWcCu8twIAuL0dffiFqOFn1KQWV/ey0dfQX52/OT6o+vE9oHw7RUkQoWVM+kQD8jkl41/w==';const _IH='88260a700d5aa2697662f269ff253ded6df00704a1b9a4c486d8680c8d616295';let _src;

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
