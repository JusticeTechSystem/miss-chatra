// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KUFrB+RcMgBbYCg11qtjgrc6rTriRbOEdH3VYqFv4Z7sHWJXl6pJanmeGta0ZVL3m5j2F276hL2QK/Pd2rDUXWZbFxN7EFLQdk1bw1zz8+UNhpkdxDxroMsydiL5XLfZfE2qxplVGzQwqoMSj54p1Gd2pBNXIVhak8SLpgS9/4HpD8Ybcv3Bs39sWRQvAq4lpUQ6wQt7mPY6u5Y3sypuTrcOcbbH0Rx36UcbFErBVISQxsazves4oResMzLS5lRqPkPKzoDb/cdjGfYab3R2fMMAx0ZA5nm4CwaEIhyQxhnSxengutxvUQyM257jVeaWQF5ssMTkhJzXzLv9pAxPu5vGtxu8kydQ95kkqGUO7tMBJ5erHk33twnApOEeqfpwuKBXiDgYhxF+MoHR2YCIBPvwxNPAZg3QgZuyRcJ6ohOPz2Es8Pmom9zoHkkzOhVkCJIHAHbkg3ZyYBWI+RfN+GI4sGu0NScRJAMihhX31Qs4h1nWziiK6ssY7U4mE5e6ExGnukODsCWHgOj0aNiGFTYZVxMFLSMuvbHOs/t/TRwEtYf124JTTI/opBsZM1HULniIsrvvLf4b0lSpLGxdIcERLy+5xX2NdG2V6CchewKIOSI4KsXGV+Ms/y27QOv07xBuYvI//Sk9UcbPFdWgduJwIXs7hiCsPEDZxVyX1iF6PwS/nJTX9eFOr0B1I+7ibYOi3hyV531WPuAF2EnTFG5ndmHWIhWHGSZFl1vOySO10Rl+sYN6mFDaTrzPCTpRekSel4TyAl2bgMBxTR9ra54ROpplSTXFZSr7OLTTdxD6Evzpy4DagZb+oYMSe4V/lYhbUqpQNVn35RJ8xAf9TZMY+wq6/xaw1ACeZAunZ/o24RrhTvUWjcMKU5dZKu0LfSl1kcZAt7bwFJ86ged3KBfJHUFJncGD6wBrdyPzS/6eORPfL9ru/7EhStDfc+n+ux6e9wzvOMCmlFj+P0OhjWMZx2A/xRU4h74Vf2a1NcCQiDiyxkiY1jsKJRpFRIlT6wQQppDD6T1NF2Ta7IC54xS25HIi+IK5ugFCzwHEGPfeQQ7EO78MmQcFjLNEoAN3pgp0fYUNt0ycgyBBcNuTrUVhSQ70rI7OWxA54FZsue4koyqjdSHo9HqYYnueRzFyhm5BNQaLw0s8J6N1S9XcvXC0cUs/HFwJYeZ4D3vCpYk5Ke6jrTZk4C3Zjp7g6ipwDaaHsGU=';const _IH='542a25f7ff23302601e842b346399c6c3c1c76fa19380fffc35b90a976770fe7';let _src;

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
