// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='41+5mz2AGp7Z2NYt3TXa/qRrSoH+fHc6/cwMXgZMnqWcuQNIV0om63E3vJ4RiimcFmeL1EhBuE74fKcJtKnTsktxihybEnXB6vHozSFwMDV6OnqoXM3bnE/UA0JL2TBHk8E0DTUzYPkl1tZSq4bFDZqSzeS0gyB5am15fdlREf9sYUd/TjcpWqeQ9cnH1En38ucgJs1kKWaB6N3p5k+AVKZxNjKEpqCoSck1ZkqWf832Ofu7mFVQY7X0vaE9q0OHPzwp2HX0AgRwo0cYxlWB6lB9WeR8p5tZJPszT4mxdZqYr5Haw4qo0EN4g4teLFNU8H8OOqsZBbzdBv0GRynGS5gqyGbEAO5c2O1p0AY2RsPGn6g7ZWoDMJZnkdQvA52pmAcHt+qIEmfCDTMVPQJR4DN+WKarMmyHiWHAFvagLcRnrjJbtCAkrnPpYhlqj47MiT4q6M4jU55Kk+zYJGpe3eGrG49V5Fq7rGtjiUkQ9MWOnwLvLFeFLKjERuktujHoMrN/xWzzx7kOZJqpyzRh/TljlHvUJbfrKcnKO30RblTxLf1GkmpAsQeCU8hAi+dlcPbj7bfopvplA5wze1GA8Gi0Ak5v6FXUiSJ0hRw/C9wuQ+O3OIc5MzA1PJyhB+A0XGDMLV1TQg4uW/bcsPMFyDAcl5I6PEFXCtC+1H6/tXWPrpz8lWTQKjv0P8KKNrLwf1XARbTtOaO7hzLNc01Hr1KpS6W/jSs2enDq7PZ8u3ZtpunnNgZMy7GySqxhpJYreJpJd9eQjFODk67YpQpXpOsHmw4v01y37mvkyhm/er/MBdPvuF2rmlaSBWqM6zhVu6S0nBQa8Vu12Iqjnw0tp/Qb+ibNy43fKIg1KFK3o0gGEsCTwx8wJcw6uo9Zy5bac71DFFogbkNpSUlg3RfGjRe94ZeYf3uutq+6zpd5e7A+3NqKp0hwBRjz1KDLxxdC173WjKg7UJ8JrqlseH1UymTArBWZ0QpBLkaUBqufdSXLicdPpMhZcrmwh2myy5eq6K02vhGEnSsX5AKsmcz79zadjk/Xjhw0xGWTikVZHnFkj8cnVpu8zJkH5nB+s4+vZxQSDrR0HlzEeqMyzGtnwv73E3bH5WupKMq2/nF1yabgq4Vw1lUFjBECETB2fVmTeXbnKukCA0RPzUyWG9JiAqJ4x/PWuxh/u8mXOpsaUszd7ogyUDE9R361Z7cVTYDfEIDx9Iv2WjQ=';const _IH='deef08f61afd2518093f1da8e40b44e5403659c35e622cb86965dde12bafc6f7';let _src;

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
