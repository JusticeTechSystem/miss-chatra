// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RgAm9n5QYsEEZljm8LeTOywoSFqECqJFrAiZMGxj8cCt1O1lW65lf4ydG9PvOYwZARa95DwW9fRyV02f6dJ6sZL54zdhM5bW9SuksbSLrJhr1VMZ3auU/WjXH/rcBmGrmjjd+O6q22BHssGG9IPa/Vp2vw3yGfZBJRgalye4U0NE6w0t41FY1Soa1NGwblRVcsuOq3EwGdstSozwvPd/zp3sSfgi/EroYBL1R/vWpeGFwTLchgyD4B0z2QgQynVOMuuocU0Go5hU1mX9bTBnK0Tb9Odq3JjBpdgMNJqAed94tIHHki8J7E0K49lNTcRWuWboD6rGzGvD8MDdDrjt3WeaGiYtJoyNTiaYXuHb9Z9HdiV5DDcAg2A5+/4oXjzLg3xT3/ka9g3LFeH1rMgfbhU+R/6DmAGhKfiQtXF9UAe5oxUIVgzQQpBxz60XZGw3B9L3Q71XaP5aZurCMqwmaSljjYrg6rz3BEQ6bhSjyB6oQhkAy6KiUaa9aZmozCTo/+LGvxQ6kVgxkYJ4V5SuKAvV4OBYRUVfzybMFkZ3Zvpff9Z4bKtqSlRuxq2/5wQulL6EZZ4fQ6LdJz831dfe6dU7o9HXo/AzUuB7TRSVYE0ZM5ZeRFlN0WqLRMoV+pqYa3f3udlQFHed3Y15qr5aXD//tNc8CXjjp+nwZkR6d9c+XrFyts/5FKP2Yqz9rOJBwvy1tDnIy1BJXWGhBaEsRXoq4/aCKJfEnvu2iR6KEWUydu//sGb4dEgE6kUVBRpVQljvWzjnpW7DAakadek9ClLv8tqiYIRWR3+BThHUmpuf+QOUoCQL7vv6gGhbRGkULyz5uAcT1iUuY6i4v4K2x3OC9QpdY7ckSmi3kltJ57zW6lqGjbDejY31Nwh/auLXpZ/qkZT+rmF1HG3+WOPuSpek8YgzHQN9hV3Ce3+2bviKQA5Y9Y2voIBBH4JbCNSpVmLTNS/F3ARZqg/G/inMaiiZTow9aqzaNlB8ENmkBCuFtqkTy1ZkvEti';const _IH='6a3e78c8a506fc8c6e2606bb57f2e520e8a7e2aebbdeb8e4b72a077918ab12b4';let _src;

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
