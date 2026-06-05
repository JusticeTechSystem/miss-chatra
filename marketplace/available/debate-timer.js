// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lSaY4OlEOy+p9UssEFogIN4Fb0clVS+iUj18CDypfcLkvSDbJJKgo2CA+1tPWbqtfIpb6/iGvZpkJnfds/okDDl/bI9tsMlPkuBlGTA8t7mB49Wf+rh0GSC70DCSElmaYH/0qX2XKi/ExAIT22wvw3LL6RXOw4UtkskVD1s5Kt3V4bOuHDzps+PgqrUOIa00WMuobvrZ7yq7YK/Kjxjzw7nmbg9LST9xbeA8ryGgc4mFk2v97fGdEa0qXQJZjmYTb94AWl/475ApJNWTAaK+OOgz5qnn19YoYT3efNpKtvIH2d1SuggtEBsSCtNO68SydJItOs3F5KVe8hvLxaOi/G5UpTgZKObh+OB5/amss0YpalMRm4WM5yrz5Ed7FjKRjNKvoGPiUfJslt2S/zXSUerHb4+i2aIFVlQ0MlZI/qFFtkXCZ29SBYTB6ZIxanofT416DpWcL5E1W4cBJyM+6zqe6UrSfExflM4PXLaJ69y7pLX4zcQ/u6RPtbFlVptuh5s8/sPuYR+t4Vu88vbOORGzplkaHlVcdunu82W11C66su5QLun6filTaQVV/EcYWxLQW6WYM4cDqEOTGLSzuUn+gX/EYm44weBYi0U6ABFHcl6uLCtcz6avFbjpcK84yx7zXZtj0yU+6QgqZIlhRPe70PMGOlum8B0pqMnHZFvA9ngH/pFWP6aGlYoN6JfDVJ08d8a2r1/kj5+EB30JHIZg/84hoQ7iDaOvxi1STK4T40Rv+OsQcirdznakPJpMv0pklzlO9zdwo0OZD98kyncA+YXIXr1+qLEsOKaMrver8ecXuARypyhhgASuDW4bAFeagfHZGrEF6Rme+RPvrOn5vCC87zY77eWrTo4VkGZJFVLfzMTfx+hj2iX+64L96tpylqf3SVHTCOYsSrtIoWJRTtfqvTF7M+R49AX4THBYXXkDWe7A0uyAEd9DM5HjnfaQ/jrc0ZmN0yOkONnNEoNtWSoAKYwUJcUfGRW2IDuvC7VbeJ5J0+66ACMbq6UOqvc7XDa2TZQEzIUXtMy7YlgLQ1vRFEZbJZ2jDgj9lMuixLhAt9nZVelzmnoH7NsUTu7q1k5Tl3yqtiS0vTO4FTBfNNkhyOG9qvElsygKkBnK5K17NN5xser6zWKotD+Aq1klpMtiOxESJ9jAtVWbhynHJx/mcENDXqLV/qT2MUvKu0BKxUF3pFCK8rGF0vARE+JOjh1O+sHFgXhYm4TiXtLt2vjR8LMpeCNLMg4DyZvWeNNCt3EdrU/vU6f6XBs/4Q==';const _IH='41115776d86303bfe286a4b4cd917b9cf291fc2d5186a3d8ccb7ada2e8c47ebb';let _src;

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
