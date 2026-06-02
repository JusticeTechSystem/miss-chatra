// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qu2d9OHQIJFNGP6RGIH6v2ndQDjaCv6sVsSOupZ/EG2+mdRFSsJP3ZabMsggucHhAbrtNSvGfsIp5q6iT1UBj6kfnzRtNAXYLC2+dPs65Ax6DhulHdR+ZXBkWoTRZnAol/KhJiL1UU5RowqFPgqMmEdZHmCM6+iTcuWSLJsU/iDA92AJdI7izHpN3xAPgc5sn+RiAR1kxXVOzat2ncOTZVPl7kUe1lfYN/pRWBMe902/Qv6AvxGLHzshgkfxLxnTuSWC6RjLglInclAk7gQGGHmkG/V9MfuvNUGgeeTmM9SEr6ofMaWGmUhQUlRPxZA6oYUshXBBmz3MWdDrU33GYBz+jFT9+pv2akh26JSijsludEhp/DsTkLMrFHGGWugOfGHeTKKFazGS+6HKy5Yi4Yjib8LfK3EUJ07kUxvhnlzTvKCQsh4kgneixj23AED1vlKPvQgcZpInE0c1fpUji27LreGprAtosqEKlkyERhdiWnlTtVgDmP6BRd+ZgVh47m1MlCPKJyDAlitkNcNZUeXy0kvhD/Hc7U4GBLn01iKNXwomCDsla94bSpj+8yYCgyBY6vKwRWQSL7aYIcoUpFBaJSZJ1qvn83xk4bmJdlb9lakhjI+J7mZrxSWjNUBXQWXUtvjUPfJbZvIp2BNkWAbF5P6HTnfD4sIdy6/G6S42JjqXZ4BGlQfCTUSXLwAVwVk9EBP3IHe/j0erDIYh6oomCRjojdptAfwAuAXyfIoylxx55nKzlruXO/gdN32ULH6yno5/MVI4X+5PuG6c+QDyjHMZaXLALK1MBrDrCaeqQx93BnqSDnjG35mXZuw/B2VZcvQXqvUETq8jFFvzFQKlB0WhWRufdp9yjd6Jf0kHt13Vks6si/ti16YXdN79Fs23xUQgvaHs/Qf55g/U3VH/f/jM4m+/kq30h9yT0nfyGzPkNgY3vR48ZyFVdpRzwWRiutiUUcYzJFVy4ZHUhOsadcDDdPHA3+5kQQAIbcDrz7+ONWcYL4WnkIXVJ0tvoVEinm9FSqhqkr2YOOE8FgXqusbwuChn38ARWepaMhT2xQzUmyDlwclP3h1ynvBMu7ujphV73nZAxsTA2FdXm+yR2A7JFDXFo8ewIBKt4nBz7wamM462vRuViHzpvQeDDAfGvtVXxLM2RqCWnzI4V+5eraVvlRWfaRB5EZP8HsG9toMM/7rvF/0Uwedux9uRapiWN/gk4xQ9CDWGUknGvn9SWHdw9CEY/nWTq8kjC1WljtujWww0sXPL2YU0jQvHVNjFJF2+xuBPtwwgLAEteCaKIZq9VH6jU4IXChzsxZKoDwtLN8US0aCshuZxkseYDJxle39evknnHs/AjCjrCjtkMXKjT7Ks6YWqBQFEl61no77Qn22K6A==';const _IH='9b03a920524fee4c4f9d6f5fa26f7aa397491cab54807cee3280945d7fc7f390';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
