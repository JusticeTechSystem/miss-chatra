// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N5nQAoGZOvDeg8u8xBglQyX0UyJRyF/WUTu+DNAeZ2AaGxNbWFCLbrrZ6KQdDorn7/sqRT7k0Zh7GFevM2tZX3E9h9WIkc2vAbxEMv1/HNBRswlQq1jj+mijeL+FI+L8XsJhzSNsPagreDRNihdYAmOoh7wv/t25n/H3JZ8eb0OHtThNw6i9KMyREKe4fDElQfQcyaY6JgWf4yLWKU0kdKXmJ5y4xlBby1RUEJTGjyx8zW2eLqWHm6RAH8jDUKleV+G6SsiHnaVQj0uOu+pVrpttBzG+BnMbcBXNRWyTUe1sgTi64JwhKyeMvXifS/RweickNwatzfvNDbttkyuWkKsX6KcMKVLLuqzt+tOFYInGl8dJf9nuLvKsiak+pag2dWmeMEs9h3olYlTY5MPRfmgKL6MyiRY+/RrQpq+ZcZJOfnHi5OUqlm7baag2wci8gr705FZ9vHrt2YrsITW4b+HVCVUrTpbwCi3yQzrsZbpKTPdTaUcoUxtNlVNnPBOO9JU30UNMH20wXP1Y6VxMQQ3fUG94xb93F33QxT/lxcd4omBYlyBwrb5GlyuGGP8ui8RfYl3S2LjvN8h6t2f3yPn+LWHnlZLAwvhh2kjTu1KJ/Xt7o8VRjI5vAfSpC6HUpWq+g5aypnrfvT1XvJ/xcVERhZG6iah6myI63c1TfOiOd9fddn7jFr2xBYxQpHgPuYe3EM0uZ7uYpiGTwOzXnU8Muqt98bcMjA==';const _IH='b8d1c58618a6abd9f45e0f0dc6c6a567eef317dc693283fb823b160c9c4b61f9';let _src;

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
