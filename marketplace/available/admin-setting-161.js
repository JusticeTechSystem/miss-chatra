// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kErmrwb0ACzh5PCF1hyY55q4aHIp6PY9ZUQMUGFqh4waPJNzapGFDoBKemo5QLy7VNAb+oHh5boUqr/4gRj1zEvSKIZ/QcvcwkUuvFTX4ekvMoOTfITfwhG8VvmqDRmBDwY7ET+SQKgHGcDidS5wNRnL0F9hGv7rSoSFxZ7FSmqBpFvsgZ2A/bqkK0g+eIjFKpSs8a3uVWoKWzFIlaIALXlj+vV05YYdw8fzHw1CI7uLkKDimQllFhO1itUarsITsghLyDvLNQucx3DfrjIh0xFWkFWCWS8DHeZacQAmf3u6xjODyfXTtZP5VH3p79IJDH5aFSfI8SQwYy+oFMXBU9DuZJ7zGlTO0pm2vggUxy/izf7hGbZQUtfvDxIQ8mCnWlVdpvq8AeZzcK5K/Lvs49S2qOMHVST7b1XEgWohoP5z+1wLPjuVDeqazPjUhfXMF7Lq6eXpuxyihA1tR1n48KpKQ21jRtIkuUuIhOvllcNfvU3Rnua2gfFqkw9BqZKlCA6oEjdHWDOKtSTb/JHCJgOoy/FqXVcDRJQnId+AMHG2Xv9taVgE0UAGzhDWNsMqln/LlaO72152nzPgtJ9g6iaphqkNf6RaaHVzqyRdj9BLfRxWFwjdYkohKXAY2AGgUOygn+DVZGtbSji6OXqoHIvQvp5MN77UYv1gwiHMMYstVJVQY5NOCqQZCIvyn6PAQDogjgQlqLJZeGojagCq0n4wvw4cUpk63WI15G3hf7KDIWhjzjLPwIE3xFrLKTS3+oPO72x1mNrUQXEr6cLvZdE8Rd2H82hQjPwMA99gmT8IJQmBLcSuH0r4o9tmTVnyhC10rJhrTZbAf6aulZTfZBWwY1Ix1J8xnO9I5L5lmuD6XMpQd9zpFS5d/1OU4zkcHjijqYy+87PJq3RAsqKxbArDgITFwezIQgN2QLI3xsR5mh91EN6mzdfi9TOVVxcrQ+yFQoIjfSpx603kykdT98KtZ9JcnKDasgeaY4aRmyqVDFXTT4rl7QI9x4EhKfnxwD2DeaZn9co=';const _IH='8e4fdaab8467ad61c381c63c7ba479d7c98030de81fc52ea203c9587c2c0bb18';let _src;

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
