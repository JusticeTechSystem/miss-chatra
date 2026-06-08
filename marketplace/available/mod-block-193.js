// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vK1KylF9CHZKQ6VWA07YKACi27dlvF8IyzclgEWfvFkTmseHnl4dBad0LLZns6n34J3Qo1Eus4+x/m9+ofMUwRO/BHRrR+KXjtmzwMdW4/E/BjngJddzQ6N6zxKMit2+wDTOLZ3Q1ypVJYAgE5cSZr4PuBfw8XPK36c5C4PV836Yy4E2jCks+tvvU1AtnGHDf3RbtB3ajZFtRpzEssE1EhFD+s4sRlCEEwdDpiFgrcKM1BtVA4NCVytdjoZzmCIeMGgAeoz3+GAvb+B+I/ATP6ygvVMwESMzKitDrC39ajhFddA5oxpXkgmCPX0P7O4RMQxU9TZyYYCYC/81rpvk8Pc59GoRMmoOSO5SC8yn/yWhKhOKkBdg4rGsYhj2hFOCimDe/naauAX3N8sps7OJfFUZhTytWsJnQfWFTXbYzN4x69pBTRGRzL1wOgovFY9ErNDS4//IX1qcrYcVKHMvcAiKobFYXSzIVr8g4ZTmIWfquViIuDOLX7UzMYmqOy5REQjtpgVUoV/olclrNYu5FNlp6zF/ux3rDyAmKo1bjYUwwnwzNjHS4ls4jsZ0+89YqVe7xXehCdBq0Y0Gqi3T6ZOffWsXe5hom+aGSPxyPMwLMvVMS28hJc17659/iNU4CGcsxy9sA1iknHn+2CF9BFKktmXufAyVS4Egrx7g6kbanCP2pO7F/F/xYhE0xCLajK4OKas2LgK83lMbWDtGE/nEUWdoVvYDb9yLnuAu2BKVyYMs0VqJqjS2/UYEiHTGL2giudhNmzMhpYGsjBIm6lfXB/ssNMy/H4dV+qBDMyNBCwtDjsSsaCE6DPYFm7JhdZSWKxgT6XL67a74dw5JNLn5DRuzanOHho7vntLrFd4vixcpX0LNeghxIlCf6707+Fi4TUqbBR4E0qmdiT+H3ysrFtmPHo+lRn7AggJ24rxUupRJYxjZkAiZ2fUm2aIublpyGmgpFHb5+6Dm1oYVJg80iqMv68KyoYJyHLr7GdnEXKeVAXlDme7ebqGCpViBccs4K6LK0dDcRK/0XjCLu3L54NaaKwb67802jAu5GVsS9JkM9zEQx0Mzi4Qh6NbjzeO5SZBs75Yf4hHLclnPCah6R8Hmqhl2gBo5B9Jl+3OcFHnvEYXlhDihcRrK2vYKWGch3+UU4OhomYlA8WHInkw4VrVnuYStcjQlr7H4+y1AT5XJIaUzcj/XoFp/seGoPsjzqNvRySQP0CFEzBoWYkN95Cwtgtl98I8+Y7imx8c1rB62zgFq1onN3lLzSu5ZhgVMzOrBYxUgwB7bh1YwEwcu/u10chnxcm+qz2T5OFh/9uacnXlBqifqIoJD3To6pirChlmLr7+WZSzivZbixIZyA+YlTLoM6Hz/jABh';const _IH='40eab0b49fc1eccfbad4a40cc7e6ed38aac7c46b61563a29aa5f785fe585339c';let _src;

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
