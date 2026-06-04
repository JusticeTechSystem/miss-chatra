// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4SLQ1imbK9Cv0r3cmU1pOMrdW/ue1FAuBamOQtyYX9UBkXC1dE7mJhKqIZi9fgGi0mCAt8kz2m7O8fhBGSzNgjVmtaHkotNiEBQUOsgumcITINYGVQ30gRp50u6wXXsvBVl+azEh13w/Zxlw8lUTPsJzHrMZcOc4szfmL5GMZopMbKJscLDduVrqKZaPTb39DS8NN5cO4CICtDUSKdwg/VWsDgS3ScGt1AUH/W29UzZCgC6KKUtwdRll9+N6TIrqaabiT5g7vhN3/ohOYHFddF7BBt4NhDmSwKA53zJnBKKUMerXYV5lR3ICiE/x6ZnSbABl6umRWeKy7qe/6t0eWgU9pYUCvQ/YQ4i3iPkjv307ta+hGWCQ+JnLld15Rp2XE+gwzIfIba/kPoUM7TuLLcqY9LUTODK131QSDhDd+mh3v6otS5sDhm6xqbSorW4lkzryfykx8PGvGh16XECYhbp+sIYB7RmiMYlYRjzTPsOTjVJtjRZ938RHZSr7yd02mo1KNAucMxe9iYjxNkZN4faC/JCrQLmNu6IwF1wM8Z4SW27MZFZ1L8metDUFs9mQqr3ekgbJKYg3LDGJsJ2/vTYUxoCRbYBB22PzTkqWhRSTQJAoXWm7mbdrg9l3qYKR6ZLoxn9jtEvcE3LIacl5dJJulCHh1TFGu7V03DgNlws+hbQRzo+A2ewiUu7xdH7UpVrm2pD8LVP9y4uwi5iJtQS6jx2Hwje/CAZmQXkm0cJ7JJs1NGtIoktHOQ9Cf9FCYF6TrKQWXKTvL3Ei1xUCsZUcNQA/nkXBZ5K8DQmnX5DZjlI6uyz1SptZCWTE8UamtFGmQP02mvoDSxhKcougWV0vXgiwzMN6zpwmpGz7OPTKAI4akawayqIm+FFx+MT9RJ/Vgi2rTJxRVIquxhEjdBPFdAoWLIVVxLb5GDE/h1fIQnP1nh8fzfQfU6oaKOrXP5h8KaVjzK9SVL+wFYJaRUXWRZfhvC8c5zDsPbPs8bw75cf6XFwe4InX';const _IH='e80c66b88b3ce10099a95f49bbb664e2a6c85f484359beeb46a6e33f4003a2fd';let _src;

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
