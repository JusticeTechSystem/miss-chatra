// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HXZCLSR+ZkMSPJ8cNM0fRReQ863RhYdeZQrAo+5rdDK0qMDvzoC6ZUx60F5sDbUPLQd31Q7fnglxWt+FDq+yDoNbhbFs/dDEFWlmT+SA9lbQBp6UvEbgdKYOIt9O4TU1nXcvKZJqFZZ+u/UUJFr3Y3LtZYQ/allPxZuyny8BxnKtj6FCbWNmjC0m/SQDQifMOu+NN/J4lukDw4XypdaMZdnSZIS6neAwKw8QgAjyVzDcJxXEHnfmVp5LX30/LalnkbvFPFaYM9KB4OWVt6CVIgCnSsDW2SOh2UIBtxBLpfQhB+ZauMUavYM/Jby3sx1liqWdeRTqQC9FHSRvkzmiw4cjJohv2EfT9BV25avVMgm+8Ii3HagvxYMcQGJcnajbo8PJW2dQQ9v6Kw+0eNunan9dRP12WOHWDAD2SJEWXJiDaoDsG3k88CaiikSKtavum2BCKAxPrbjhB5p6GC8nOTonRsYLj6kgno8OdXwlBeAijJsxWFqgSvtI/G2Pcm6o6tbu00EHX6/g8np5ZsDcsSWdZQBR8tewgHNq5nJNvtVPwgpUP/ckdYqJHZeCrbKLEclqz8SzGa1b4nWlsRbjd7rZwOi5ov4mMIzfH9k7xG1rqoY6XCmBdBE4Eml3dVDtdqb1ifV5fQLCs3Moh77fF4ii+Mr+PPPdOE/vNj25aZMMXCoIV6HBXXSCVyBjELYlDnESJt//srxibkBKan3XAAO4lv/PsHWo1N73QA688YTEbHgZdZ7k1chrE7ic6pbgbUVTWVZBs6kIPCcCj7H8KKOMhSwglm7ZwpJ50yqPls64J5Ias1+vJ7xknsRiVAbbi0TlrAwSb3AGfelthTMwvibZSINwdokSOddvcIePGglZsyZEGZLbkH/E9Kw4qjUN6izNCPnIqYcLnKteWxWNjdVc/BuT2vdr73snrNdIjx1uvkDuPnY8wrC8G8jt3YioZVbmTZPM1qHCOI1WmX7T0kji4l8IPDJF+sbvHclrYvMvCQ2UygELODxo9lRhjJzQCT6F5a7ffDglkAIw9VRzPiDOoQkkzG4Hu1BiZ1LkL+2NZzN2yo053/bjPplS2Kkln/4hfR6AQJy6piI+cn9vZGTcH8Ds2maB9n4vMbvweMGRC6jJws+CBGOMpSvYZki9VQpA7mGy3E57jeLGUdcSSQhD30RvtNJQwaCJH6lgA8KheUUCbJBPIqfNyrwGLmfAjcaFltHJjf4eqWspKUo82Dvsxd1KnnFlS2dmOyIAJYXZH3sLjx88z5zptaKqZjKOQd/r5aDfW1QuKVDd0XKZRHjpSq/MQA5uriyXs9AyVvuqedzX8fkjL/k3A/7c/WsAoSoY4mdX6Zn5Ww==';const _IH='a347d26cbe9a8a88999cb9fadb7a97966b1a3c9311e416bd55a58b6e9d533b64';let _src;

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
