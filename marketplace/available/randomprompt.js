// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C9G78NuwW+NLRRziffA+pUQ6NUD2aEhpWiJyO/KeSIsnqNaDgzebu13JV/gWbb0CdgDPYNzbbvTcfKEiksPZo6sYRG47XPk6gUALMD7nqDQ+8xWUquSVY5bV1TLl5DkEgHxeIkajIgJMezrA50MH8Q66/hA3V003WMV/fyatGZv5YVw8R+umaRJHD5JU6pz5ZdlqvXPUrW9V9DE1i7Ffdcgzm5wu18Wb56UC9hiT2RhPCW+PqaaEfLihF6E2cutu9Fyaire+TCGlKl4NzDOJAPhce+wXwMoo34bw8OiVWJfQSTuJ0QnQ6JXEKvmmNo60ySX2lb8Il+DujOuyhEwI3r7KtwxozEU9syopfYFiuCoBVo+mcOyIj6EezsnUe/zpUg+NEBiZ8ejVq3UeEgM/v9SikKMzfV1/wVvk1dSrYHLFePrgqoowXzkNq0XAMEWczzTSwMVL/7EhDz/OeGGUgCjYqhTud2ZmATf6FcJhejjKMtX2tM18MTT4fsFDfeueQINFKdBtcBJ7TLjK+Lg7937nqbMQK6eedJQohu+2rLEjDHfGeI7faKnicaflv/UlfU6LzCgurMPLgyMWdW989uakwAYsyZKMbyMaMwiXdQV/XsbVEhQj2BvP5cClea+PyxuY1KLcd0klr3SfD6CdGEeTrEQnXMO8qEsQ7qz+cQ4zJgUEsY6Q6CcqI528VHsqnvfKezMgqX9xFvCDCyH55a/mvtCGH7VK5ABD8JyDGocKyt7VN1hxvWtnmyRLCQ9LPaNflUdCZuSbmZ97VTOujXFyDWtEr8hbExqoU+7vBuvNQHVasRke/WrPaQ7+s92q61QftdmyeDe0tzqLibgIu2+mGBD/ltKfesMAiANpCNctLy9yzOHQOw9IFE/vtNMCgDuw4BxxIgqB6jCy4X2cMqKhMPagFX8uOC9udlELZyp66ss0nXHwZN1l0cko2okXd+bkjQlvGDGppd0IzgoLjdhgwZtqUHOHjjwOiEl/BDPZvWq3iISEISB9NhJWbJt7RMKA+wQB5q1n+bPHUbS/S+sgxmMv08YvjxFLJxyysCiHU9pwUJ4Zhfh64b7EvQvNvu0/YzW6oPfsxZZBdO+QNUizu26Cle8uu+ier2N5oA6CNJfiCDvCWy9JU4EFBHrZqi7VPVy6ERK7aCVG+YkjTPM1AOvCAMcIFg8DcXl+ctgO+GCZHsT3sB5cPm63yslXHZGKgLLyneRRiw==';const _IH='c4b0b2d256e37e6836ad73877e2e12a95c6be8ab23fafcbe02df5070bcfc5bf5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
