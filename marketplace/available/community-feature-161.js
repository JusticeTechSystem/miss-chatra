// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VLrZawkNgivTVwmrwRZqkTCs5Swwy6W2KheSaqq52P+hROYiSWx+ogz/xp3Ml0liL9mZqIBiBUFeMSIN/u52vwSK03zjbOACGVGc6BV8SnuZT6soD/QzkjWRHXFGV0wg3zCraLIh6YIwIYmYlsAidTz6jG+Mo3YPmqx7beiZn2iOGCRcrICirwTRwyXh5JLaZqREhOAa4120HnYNhYJdsDyc/MT0ogTJu6urc1yRZYw+YYLV8VkzetE/Fg5IiodJ7+zPIuzyHtuOo9QiLRtPYIxDojIiIuCBTuhBVh+og1tP0lrVKKzuUca4AuqMjyqS6aRLWRaJGC9maYP4wbJ/dKPgfXC4fInkc6084onfVM879XL9JPHtN+SJe33DBFtX7ENwY0O0zbEiahkOkRfoO7u3j0d36qomRf4Um3dVGZ5IJG8uwPxw4npirpmeegvt2idwLzKyRx6K+8VqwUHDKyG6Ih3jmbhbyhv1azhT3BS8RMgOzf+ziWMP/Qj27SCuvg7Ax+7GUzFIUn3fjnL0CzJlFL1s0kSH+1IF8YEBWUuXJpKkN5AyzCyustIZvwob//W4gLkiXCh5xpFhMYemkt2ByzpBhc9KD7/GJzXuZ5EqPXzWoN3fvwimICmBUHk7SBUiVtZ/y25EgFeePlzZWbW8EmB4snYRAwU2qG0RGs39rGrgtfBIZuAM8FBCT8N5JfxGLPVr//nvxnzoDnJmAtUZIrtWZpIy';const _IH='24adbef63b51d3aa29a5342b7fd596646da9c05d3e244fc7faab23b1b99da1cc';let _src;

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
