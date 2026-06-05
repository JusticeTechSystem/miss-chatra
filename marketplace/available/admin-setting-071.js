// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bMn9iq4JaNRMG1ns7kAaHvLx1uASmmPzxyMKA93SVA6NyBJF7VkDN8PeTV9Bik5GoxJ2d5YPFm7aWO9vmju4KhM0ZiJ4kQwmKEd//tCwAxrFFgcb7MA41SHYkRvL87UfD/QnoKJKRGBwO3K7KpRYT5adrnMrRdstE4iw3uKGYGZh8w7zGploKewPF63gliFs7q1LoFwLPoSSeQI0ZqXLdcMhmRbD33CBT3+3g40ZDWy9UJv86obfavluK4KUUNQ5amjWF1KD6obN7QB1tRK3wJtajPSnHMMu97dmqFtdsbULjdm4SEowv+qVUpmo4zZQD8yyEFnNLBO+cB2/T51vUIgY8gtghmOFA07MVEaco159VeavzNn7phzTVbRCdUlbG+Mo+S//bpB8HKcM2PotFxZ4uEz7oG0Ewhj6ed61up09Hlci6UlIYnoRseyn0oMAz4F56SUlT7yKl5jAeJAxoN8eAWTJsEf/jALwnc2zNdZUZ0p2Inwvbsfe5bg5UMkBYKbYb9/R4Vds4KpfBqxurMuyxIM4aJmOJ7xG81P3cnK6fPP7Oeiemvi8zXZjp7VECUbpEoraDcYsAdKMvr4+q+OBcGpd0buw7auCtgJ9A4hkgV3oVOxWZwwle1yIGPJmnyIS8lhegQsh9aV7BJ6N7Rq42pl2oPBnyviBkwS1eGHBMrxkqvnUKwQXO+5o266eGFa8JNmJwC9ItvBklRYBz10HlsLbU6U6/ZsWT6qjRt9UQXuvTyek6yZ0Dg2dXfXAmTQpJJHtqyKXhZihBmizaXXhcgjEVJGkhP048JBppbqQDG+WNC+AuqA/G8ODQb9ickd9cAY8l4NyX1edraec7/lxDJ7BcZM+UJC2cUO3u7rmOBilQRmcIGSavIeGqIX8RIf+46D9T40zahZzlTdNvnQGdl2tgUUznlQSg/fqSZ9shpMdwYoDHhpjn63xVNlC+vjbGuTIFbxDLFalZFIz2rUP7RPzf6p9bEOKANJNbwoperZWGJVzMshFKwBGG6sfQab8xQ==';const _IH='a3b94910aa9a72c6c73bcbfed53fc363ffa7a75a3bea28017adac9c1b9d950fb';let _src;

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
