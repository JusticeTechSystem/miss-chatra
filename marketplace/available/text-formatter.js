// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='336hPlB1rGo/mIKL5FqpLj3rZrx7SqAAH2z5Y0NrNToXffHn7KnsspA5WvjmYMy18/rUg4nvGfCBKYnlpcJDtQPQW6ZFCUoeCJf2fitproMI/m6Fnx8ezKbo0bDBFuD9nkADgAbZY+zDkHu8ElVh63tmP5fCz3aEQBGs6/mKGV78gKRHgckrpi5whNTDQhTGa8afVLl5/v6pq4bB7gc95xM9hH01OHAby2WckPVrf55CmAdmtoXr+BaZAdb1jRwK0n5wXgsn8dEsVyMssyHugDBe30wSQKHh68t+ym9QvtyYOHTI8S0ap9FTiCnM/3e2th3nOVfyMIFG61J5FyFlqhWY2DT8o1AIMmzNcuJEL/a9mhu+jt/Tcmpc4F26f2vHskTM+MaqAdOGjIojr4IAiB19uiSzq/nSmJE5BlDmJaysJPSODU3ZwO3sQ08/OBZfncdKWNxjrB44UXSO8F3QQHm0cKBanq8qlwqNYbI3qxnMWGYb7G2SxXMtVA/LFJyYlaUArXCGW3P5aPAThLJZ5X1gCd15jwKOH6xHpf1zg5pPZQCIfNZAvbchvtdiRzllJ2lFyYFzWs8xYnG4ckYG5zPzGbnh0WjiAI4RT/ZfrV96pC6QwiviHn20b5Fu6flvOGzuu+pvgUWa9gxma6IXZcK804RcMyq9hxlWrqBODirqaN867jSTn72x53s0votJUFh2KSxp7ylBwKsKQushLxfGRmEQRvOEKIvzsVsoUlcrZYPiSbYBWtUaxUztVGB9OTarMVXQ+Y1W26ID5gDLN5XLImYhRtrgA4O2Wutiy1GetOIlkwIega5nOFLxOQqNBI6pZYee59Eckewmnkz9I888VIVI1KveR2dU33BewZw9oIFd6FTAkNv4gz6NKkTXo6FPfVL5u78/W0194ftZGZ5cIU1T17+hMTLcBLRbPxOgzUREq/3Ntwj0SOuQKU4JXCz9ncetIibqZpb2aim3iiDW3t1FG0TOw951tgC0AYXK0ujHCk8XYcuIFe9UQ6tj02xVWs3tA6RBjYpQpawxfZ1BpbVAn6dOjTL0o1RBDv/RTzTpbiE1NBKOYKBYRX6s2KqKrhXW25BWvTQsRoyIrwuPcRO3I4aClPJYDkz1UZeUgnvpZDgCo17dzhYldZftZ19sC28Gn3bVwQYJH+AehpCuzybBNs/NHmbO0PfJ6fzOUGvxOjgQb0O++wPHi1TAoa/MPg7PAHgXtkb9blvwSLSFaY0Nz/cBC0Pcm/5qRlkVyXzRbjTsikTws0ZsfDMRV3KKCi8PmiSryS7dc4fXnq3rzw9xp7DaHv2O68bf9UnYxWZi5KWmVDjI7Cyw79z9fAsIVK9isDMnDcnGIoXN0v1FFNGgUJWieK0epLzzQh8SZIo151U9Ft4UR99pgIWiFzE6c9osANi2v9R3DWGngKJBG+f/UkXLqY9tZUEqiVNJ7kQxBmlJM/NtcFPEsFCyArWgrPGE1sQiJb6DQBLQCaqJP9HYlsl/MuPwF8neF7g2KE0POpDIasM+prQ8rEuImrT/G6uGiaADdhQJC+6+a0gjFUB8+fh/dO0nW3+WyauBvsvEnGrKu2l8FClpLcCX3g+Rcl9SkHS/uU6yJ5KtHzsB4bLkZvagTqIoDE4gv8sCvchnGO6pOHHqAZIpCj9dRVsAekEO';const _IH='6a5347dfcd27ceac253e9bfd5d7e0a6e2052b74d388b05edb966f5f596be8d30';let _src;

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
