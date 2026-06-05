// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7V1aSxQQXSetH7srGjHFnY3wfUNJ/a+dNDFFO1K05njSIHgQC/di7ZsQIgikns/2ZgSa3geJs3Xdfapg1vpnq3nK8NG1IdQt3h095/0i7HRpx84BtDtlbRC7Bc4EFVXcWXvQVGqR4kO+fpNBv/Y4GGi0vw7OpO+QH1eTBnSv0xrGCHE06YFOWUTjWLFQ0QkTkI6j76Sv0lkRwG2dUyUU3cGwdBn/T5nvF5pLb0/sTkiZNpTUxCdpsJEr4sl5EFwTDFQo8wjv9FyNfaS68wiSS6k3eSIdFa7UhEnvXqOwtmdmf/vXeMSpwVnyG/icnDuqSdDdJSp9FnBp1d0zvZIiY7xAmAWkWKmzpUK/1iNFeXf8H7YHZl6OjWB3EshJVBogfQG/halZh6WRBKDBz7kHf/6xvCDIQfF21JRRcIdlP7uHi5z/jciDURIV7zQkY5/WR7QsrYLQ08OayVSxclxHrsH25FPGOHr/IvHtGkTRwBCVUKlm7aFIWMZ1GCuTsgOEOC5AW/fmKSNkAZFfiQ8/bEz1ZEfZKwgm/fcW6y3ZVddX2qpWrc12hRZAhud1ZxDdqLyBsQIQKiSYIEnw0N3iUrx4hEbb6VnPkEjDWuH339aHAloIz0lKv7u09VXfDyNmARExC7WABvYVfI6fGYeNhDuS5EgitG14YCgiVaujODekpQzoJDDkxzNhnq7Wtj2UDSztsva5DlEuDoSpnFgX+0KEP/u9XfDw1r+fPqD6t0FtY3HKJ5tlFoFBmMVvmhEofyWphopz1lEUaomVeDsb/+nIT5MoYilEqxbkrA5in/anLRmGR/RPgKPRV9+L12MrQgSVrbSc6EDRryRCI5NF7Wml433I+Tmk/35ArUYlJIb7Y4ekEAgVE7LhyVGDGUqkOBJnpocBiVEmvyHkZJy/9BRFhe7+16x76l/NidU7/HVp7arbMvX7AefDF6bjrrEiZNQY+AttkahL6yTAxvp9t0byiTBx/kF5jORA9pB8I2etjxGjMH97cVg6Mj8QVK4YkkUZQXTuee+cH9jMqWQ=';const _IH='fb2895ca5c98951bf3aaf31b06e8d2782ef22cb140350bac67af7c38b95333c6';let _src;

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
