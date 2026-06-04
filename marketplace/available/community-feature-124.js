// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RDmmv5VyOwNQjoSe22MAnjIR59cozXIj7Ne8g3jkIu96uCEu9zZa3sEJcr0VQ+q7XrgmtXz3eejXuO+A8bsmHp8EPpj+TLJgY28ebUrF+YToVZJ/ytx6Byg7RTZ9BGJRki2Ce0Wjz7BDApx2vzFxFURCWSE17QDjXeUpwlL9Zx8goEyXtcdt8Oqf9k5F4O5ZpMhSdoqejYRB0kNsQA6AuoiiGJnZPGNxZO4F/8tDem6i4EyqbUqLkQvS678bd3YAt4DYLHGqSR7J7Onh+oTalZJj1a5s1mmlYYqh03R7oHnuESvFKWYwF7CezGwO4lJ4ye4TTyUJOTQBlaNuaj+YY4IH9QGU+FPW+bSWsmnbqIf/5n8yHZd7luw7w66SaPRyjEg5WGHOJ37jh4yL6JbIGdf3pzFU3Y5pkVVhR9S5tcvUo85thS4/Avzm05lFHL/bw6OZd0rl2t3iMs6FoDz1CF4MAWQdwu8F2CzZQ0s1tHMxSS03+Ljz9JYy+dR5dzn/KCLGZkKjKZ8DTXyA9rLDC07WksD3F/xrXKTweU8XdWM3BNkV+DcB/QHToeTkcaqpZu134Oo3Z0D/lSGoyEDvd3dP3H1WOuZnjt1rb0BsvnopM+zeBvUS0plLGq/BYWRfKMw5ZUqUeWw87r/04+m8iziWv7YHQURNbKySr9rRFPkUoTN9aOQPY+wyeMJm8yG5zeksWcECC5eqIyn8mfJxJWW0gEG5r8fvNlKyzrmpS1YnkXfXSpA=';const _IH='6f464e4f14f2f2c662534fb49c4d774dd3d671e40dfe69c51d7015fa06db1bae';let _src;

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
