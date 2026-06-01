// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwAi0NFMDX8zUht/m0iCUkPop0M6+zDc2fOslqTgDjS0rLRNF73gMikttcYVSV38NbJYzrnxrRShiF320AF/f+SLpveg8bY+NTTOpxWIbQ8fOZTjtt5HYxPx55TJiyVl8lYE4CJqucZPzxqPXOIJQd8+JCeI7xVV9M89uIG8xyo4VEWo/UKty5F1RtCOxG8aC3TTpCUy6/DSwjUcz6hBxQZ/kkCooeQFdT0q5i0bDvRdXw6BzItfQVmRsvGkfebthzXJi3m0V/tkhjDEdPuCrA6vsMwy6mVsxJysb4lqudbpJzZXRK0iaO7Y72DAVpG1urCQoziw1/4EVpMiV4MXgsxWq2eXPD7Jn/TLgfcSn17UCoIgL1b1YDUXqCu4xYkgoVdwiqZZqzlDrljwVaryRK6QBk9HZj3wdsWyjjK2SCAfpEonklxbTPX7okzz1yNmmeAw0SIAkK5NHgCT9DdzMwjz31Blcl3d+fe0kY5yLPLN4sWn9GYjgsyhJWmM4Z8b+OnjnlgeGboifS8oycZO32QoNum5g12knwnTx/mZ/E6h7+HZwX/HqMoZd2bLWVTsYah3M9lbBtWN7aTRnulDY/9yxxZezAu4CKl3RCEiRalmeXGBasyLS3Nc9/kQiBM253cDSB8tgSbasiEt2AChhCAbAu0jBklLhKXsoeXVUgAIQpUizYpsKc8gEkY54iU9Ca4TVQ74iPLk09zPfw1uwvTAnW3eE8jZ2qShDxO/QPNL+Uj6lgeoiGqCX8QLNLAyYKoieHK/iE3XFtW+lAx/FcTKtbzstfERKXck6J31gawnSrzGvVJt8R8eq7Xvz3VhJsNpHTFblF07EDwzrS7o/0IfzdAXKH+mXhd/hXSYBJgbqcolAtKsqXfLN+F4GhQDUoWyl0nU8aihvxtK8UzpCzQYYI06J3YXuYcmJoqvX/PzyCdijfabcdRVDfa+HH+dv7YlXLAll+yb4bEjO4hsW7MOpxZq/tLzValjvNW7FVpYzQNXKdFilPliD1vD0TM1QlRZb2yGfSxO';const _IH='fcb637901103c2bcc9d4dc68f11a85ce35d4d4ef3b366bf0b4fdc08fdc11454a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
