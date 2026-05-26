// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='41P95qMRefmW9DLyyKhDRHBnKOuP86sPfFsRSYPzV3rWhUo6q3uO0rCp0L/pvw6wwYDAEKHxne+hth20x2CCzFW8RgrXbVtjoztLsF+UaeJ71VBCaE42iTZqmglE1oL7Sd7sY+q9wsKyeIaf4oiN8YE1CeGr/Fo9EIPuRODC7Vz5bnLYcYajFWl00QQL+9iGqUlua/I6S0iGsP6o0aWyOvVBMg0ewXNLWnp+VAj3dQfeqQmSW5Coc0H2wOgWdpzx1S0WegQK8HROEIq3u72Wv5J5Jn82POknjwikZKkKjXpzdR5nbttZ3e1wVVvv38CVt9jILK9dDE0J6qkc8XppAEErrFIVMZb7XDuGH3z4YtL1dMQ80Sj8elpP0HG9OgJK4VzaKto/RL4cuJM0pQ6V4T5oA65UBMpC4MUOx54o9necYHwVf65gyhhGYVcLRpv9wvjQWtJgeLPspWIEeC9MJ5Oel07QORVaxD7m9So0V96eVWm+J5k0CCX7e9JwQMcTScitGUvpUtlW7KSiY1F0xfTDWPI9TpFx6nzMAUF1qP0QY2xOcnjAXQ/aboGdpYs4M9gy3CEdBSfTH9B5HgSpeWsNKO8ZJDA/1J4HN9V+/6+FNER5cTXXCWlmU+AAeA26oN7qCbalFcJzZj2r2fYhLrTsciYvT+pgyVh3f5ExBja8anNGhz3oQf/r+QCqmQMqo7EIRv9udmURR2QmeyAnEvLo6FU=';const _IH='b67c121b06f965b89bd609a095e8eb49f459a22911f7b4235f3b6958adb5b54b';let _src;

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
