// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GZea8lyBbbn6hxlaey/IrX+QbOPN9H9XsDMGjLhev0Ok0fYhxWkXwwCqZD//UQ3kIfsOh8AXeN/X8teBWGg/iBSuaBkekpSziwmp4lXdmzc2/37kqTrJUVhFp1ywXVraltiK9rQ5Fc9Pw/UxGyx0yveJTfLy5Pwwj15X6hTlbEDbf85lIYUr8Y/dcYdeCM7ZWmRr27Lp3X+3li+g5egJLUgAzub0f2P3fUeTNuji+4h2IJbqgWdE4T2UdMtiw9tOaZRkelLeRSvsjnsxbhckSnZMFnsIPYlJfangWQYWSXYY02pz/0NPrT9jDp7ueuQHTj1fTjqrJ4+xr/WZ/EBfWA3qLep6b/c1eYbejbKyfUMYgl1r0qfdT+Oqm5wekOJEhR4UN+mhJrCKv+c6TVf7nZtb7CwcHRf9XhaQ1NqmMKXWYwmpdRC5oEjtJTHhpbPooSsaUT+leZSUgYK6q6cprGrewUSAV4g9Pvo4e3pKzRo5VJhp1aOO/NkPA7+Td3gTIjDqwkPr/RO4CBmwryrYtv3rcGYox/vFccOEOXy/QV1Gom6T4jQT5b6HrJZzIYDiBe/FwZmIoL3wVXOyO3iv79Z4o6LmESRqYkTPjNB+4Ewqaq9zmHSDu4FxMJUaKTSKuQfxz3g6WvWWGupPHOyfI9cAUgXFqBlHYvR+MtXiZxSByN5iHTY+5sMXSasQdd+qg+ZGH/rdJmejXa9V3v79xoqrRc/dGM911o0Lre4xg62gRwfgbR3U1EiBT3+tOrOe1LA0wpkT0mI38WYS4n616T14E4YvggMC/Rpr7wnb0V9G1KU29MQARhbHePvhOow21NmuEuWvwL5UpbFridN5sQAUS8o4HgqPKvu7j40au3ETCU+T8RxoSDrBaMlkvrQ/4478fGyEBwWfIx0QKhEf7jE/nhJ9O5o42K0Ce6SnyH40H46CSaLhjhUxJWwP8pYtMRQi5h7aMwakIVNV4tcdIg/7amSZqERh8Dm6czb196nbGxyTY0drJ6NL4sagkdqfTlp9KS/tExMG7lO1g2LiI/b0eh6M8TR7QdYEe+A7wAzLO8VGV7BTYljKzOKWXSbMF5Is7xdlL5/oNpPfE7RC5ni0qZYmstzLG2mbymYv5LodMiyWNCzk9bTvfevWQvtEoC+smYbo+yPymRZ6N2gRZgqHc0ZiZzUPDQ6VsGRb1SNBwWVMzdhiUfS7tXXqBnqBxIfT4l6AaNS4vd6Zi7mD6dqfeDFxG4psfJBvByfd6S1xa8jap6zK9rQ+7AGJ8+VS7U7EWhui/mzSA9Bbx4x2Kwzalq3+PYq2FyrHFydV+bQT8QczxidAXP4Gw/luu2dpt3ELrvljTkQz3XzNBXAhoaY0Ghlg5lO+X7dyIsCj8IjPaR7AUp0cyg==';const _IH='098e26d38dcbe736318cf4f60269074af85e4db0331019006c4107db1d00a1f1';let _src;

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
