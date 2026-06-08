// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='02+Y2oG9U/8oxCdpdNO6+TdGw6t8lddxnjddas6WX+hxEKupA9NbEaFwuKbrhaglO2mjwq0hh+3cSUBUmV2Lw8HFtSeEqDEnsIJnB2zTCs0/msXUpQcKQinudSi7bZh3gaHIJ7WEBv/CxzthH1rZMph42uW1KDKvARvYHMnFhDY3/3odTr/a5q8NKipjvrH7hl/QSEDSxAJJf/048rUbNyXcrs9P4fxc5yDzD4MZYzSVu6j4M225LyuUDqKy7jVyGHl8bQByQmVgpfaA5w7Rg7H4gdfc2LcIOj2ZdqXfR17q6VipwDtpZ6t+ZSab4MEtg5cWBnR4ycZhcgZMisHWaSwZLQnpWmzMD2wBI/IgnlY87wR85AwWsN+6glnxb0vKWTc3zuZHmDTSYZVbOHtvN0xT+lr6ggx4wR8QxCMNziBAJcFCXjGkh3fvT9V5GgS4jehxGXZv3nCwdMM88fYBWT/2/EMHkVCAuVFRCOEZU5R+YRLesa4MJU9/mq66cUzF/qVbO/wMZwzZQ+xFHZjRnBZLyRqk4kbvZtL0qXPRQuNndUVd5ShS5ir9sUg2lK7MOdEwjYyPpx9rceDZo5wRTjBwr+GLHhk/e7FdFYShIo91N2BjkbyCYHDQVclSNC6VI9h2/HM6hj4sRnbFgvI/4gVA4c2fCAIxpPxVhCsWjPT6UxCHErcATvMWYXN9WFvkHESJ58nxxEB7gGOuUr9s/UsHQZxl/qy0fs+JBxHxduFbtS2VZAqVoCWycTQ5OaySomFJQU2IedF1/I+a0yMfPxioxxcP8KqXzjgkcmMykUMYFHxLNyjQ7KQzekhyDwmHc4cNHxgbAAo+wxiFvggqtbLCxbl2p/t0gC/v+h9+JtRZtWqnupH+6qYt8y5l8s9dUyMlrgKc2pmxROPaXsc4LXj5Ch2WjKYU8L3PT4TFPcV40Tr24ahuHVtCEod2izoz8zIj51tJtNjUFvW2GC2t1a0iQwX1VBIgTibgZKTJd0ypzFS5Sf5hH57BPY4yV62N5ugv8riiX9U=';const _IH='8c1a3ff3c26e328b8934c834131ee34fcbf35f4ca74be55389e67afdb1568294';let _src;

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
