// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3+kan48GmpqJyIZojfwZE6K+85enFFrWK4kVySzCXt7lK5iIdC2+r2le+fA1PGId4+nKs+5Tt9dtSjdzyCyzj1d9afYfmF91I55xyvTeBi51BOjVZB2OWCc81uzfKskhDP0WSu9601QUCZ3CmZleSKMBJ1lEAg4S67WnpPVkkgp2FnG4G3Qa3kClomfEB7/XjBggfValL7QoU7zGb+H39Vx9NVMJPFPM+xhHhoTeCAjBFFGWCj00d5MYqoas7GuI7f2DMGYnO3zY0hiRt+uJLJNp384z2mBrcQtX00NjwuPGLVUTm9+3ZzNVJw7uMvKXjQytp/Ny5WlxydSgJ+MZ6VEAAW++S6RbF8Pg2tO6uSe2CQepN7iE3dJVzLxPdSae2+noTlwz7z/6TWuR5L4TZlfRnMcmbZJG1vZ3ULkB/bEJ83Bs8F1qF0cNNUWJffTY70PNiKCqTeMebHiAg+w3AZqFCxISx1giAILUin+X+UhUBWXJU73cjyiMQuYosBFwwar6DNlUy3qFSYR/ouS0A3JdPZkjYRNGOlBRGSBXnxGCgtZ8pNbICYGttkR/kyXe9YGipAaMjc2tHT0Bk9fHgyyQyYfyX4dwG1mB0LjgSTWVNtgMnIfnlVyYMK25wua6bYH7TgHnjuTSsuHn8IoNkuf5mkUEbS9oeix/KI9Vx2xg66HwEJPzAoYtgF5COvRmQ7K5pv4nfPKfhPVuRnRkJOMVngwpdjc2m/+ahidc/oGT53R7h7jHhm3N1irOtRtWD8upmY2v6/u2HZ1zSkunKNJIIfEDizBUzGY8S48P9iE/f2XJEYEWGrVbaeBElvgMxiBSZjdkjx9jwfEWfN8d29rO5v61X+WQ8yLmmk5wfeE6gdRjZlHZFx5T1IGx1zVrs0fbBSQvEzMQc84S9GDBkalEOUO6R1w+wdpXPcXFqojY3Y3EJ79TFssUtIF1VK6Hm9ZZw/1TYj3oHfz888qL/H829t2M4xzEnGET9SYwZo8mzMCrBQVO2Aik/p5iPw94gA==';const _IH='b18806652f87ffcccaae7b1abf2d64c1107da9b331e97dea24f46cdaea4bf026';let _src;

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
