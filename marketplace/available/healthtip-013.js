// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+5uPzMOhvuXZ5Iru7iE0Gl51SjJNNwcMF8ChKBMGd8/qO/rTfbJZlJZE3NMUkbgIo0L30mROxnDBV/IlWMAN0lxqOcZO/dDJLwPmJPA4i9KqI+1du3y0SYCowQRwsjmUrIaGYPNr4F6XKOQtF8uyMG19VvVNgt0xK8IOB/JM5lnhj6F+4insAFIHcU9UZfD21lqcfjiLw/fhVczz+CAt2joA/jLb4Col85lGn2LWy+4VloeUoMlqVn7GOmvaztYFXp6ezVEDMmyo+OYTfBmw5OLx85gYkn9jKwwxRd4lTdt3Kf5kYKacwGdMMI66X6vl4huxF31FoPFMuvhsM1oqfJWcfjz84YKWSSSFrvrm5hVbBJrIcab5C+tJR9SEyxBhlJuDs0vkuJJ5GdeNXNweNbhb6JBcWFHfsOdziyupFGep9PKbuviq7P7ziB6WD7E7VvAxgjFXXvqebHxq6IshN4dkl/KgOBqhQLOy3p6yJVFgOzlVd67RZYGNxl+Sg+3T7xqHU/97jGoey+fo8C7Th5v8gOqAqaad3gp0zYVJLf8AsNnbf4WDkT2uh+JfkX01IrP36hNoy3y/kGS004TSoW4AyVlqn5Q/atSOlULxkT4p6NitiRyjbAIMAgtgIIF4uI7Oz95kZ4Vt4xxTUhUneT7052ctiFaYONLldXDQiHGwQWACVbVO+qGjIgUxP5P5Epe3fKQqWUyIjfZt3Mv8wkbcPkY6i5eXRtD1X3gB4c9Qt3+ut32RgR4wyfA7xUAVSNyt1LdmVcPK7aWep7sxsEVO5LdcWYLRgqYCZHtSrnlfM/yIQ0uGGj9AOW7GtieYM9U6nD/1cc7ZOQKu5qxaYq/sEqFG9PApASmvrrcoVKTfxKVfIWRl0wZwkIVl1cQMouH6W+yT8xL6Q5DweqsZ3c/WDSTXBao960C7BhvfIGx05SLHQPZQhLoy6tE=';const _IH='8c63a3195c4d5b7982ad2a643833d55a079b1d93856a7dd594abccdb7e41af4e';let _src;

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
