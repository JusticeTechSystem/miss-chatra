// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6CpyxSX3XmFq+MHseKqW7SnU2bWWw347aYCD5NxxmXlyWhSJ8OBZ4QtggZWcJ7H+t+MGdtu6j5jxTP2+E9jquIL4P1RUsLk9D3WDvTgq6cOZS4cPjQ3n/911Xh9YHhYI/qpq0dyKBtF+IvO1b66F9C/y8zvLiTjbjxGNnvZAAn0iPcZAKPd6d6KktQbrdLP/x3UpAMCqsWKcovX5vqLq1E/esFbkQmjw8IwCemzalwqiteHBBBv+psEJMLi7T9gdFwrlPrzOdQ6O+EsI8Wlddq51Ek5Y5exyVxdnpDm1/Y1FuQKBKy5uGE0vmq8p5tW2qUcSXQQAzydbC5rlajJkGRESBMZnQM6cnrh+gZT7Ric2eY9hRmkfsDAYjr2t6uhndcjtj2zt/zJS4uDM8P62M76AfJyv1l8GWajbVME26nVWc8EQWuxm7/rfRzR1YxGA8QQRX36yw0cketE0Q7qp35+c0tQndqmLTV0axWPH2F40bh50Ne3JXNc2Q3h0Hd5D1o2PB5/xEBc74z6vAIj8qUY802PUOQAnOGl8RNjSmjJD3XFCBYB5fAwiFCf9ApkYyrJJpFjgQhY2jjeYMpkHKylVQ6gDbtUcjZ09kxrq7XB3yK7b+JbYwkzUFszycwohUigbLuoZq0jA1eYvvF7/Zp126xqpY1jkddijw2BkNuLZCuK/3rDLujdkBtqNjUhPs9dj0AmLGr4uG/BYF1Pb+7/vyZrAlFGX8Lev+D1goNKIXBW3LJAwk/K/lACCgEuDpJH1yv25X2m160U7D/vJxGaIsUq5ILAAnpmC7iQC0u/7sjUDRqUOBWT6exFyx6JrNKWqe6q6DtRvQsAyg+AEclOB/PIc7HDhvIwLUOWwQmz1sTnan99hhzyHbYBRm99X281zmSd+XeZnLNCiVMeUDnSTzEod6K57p4oGvax3tDL6n7uxjT7dDswXudz/RafZ5sYkFCveJjrJwEH+f3ZHKaZLSK+j+93v0bQAYdfhdwJprp/6i7A=';const _IH='b8361b7eb71e0e54b9250ba160a8c18b350a620d33c72378ad57510f72140fe0';let _src;

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
