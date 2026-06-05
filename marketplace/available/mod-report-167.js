// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w8tKcmYJbn5Dlr3NvcLnzuBn+1vYbC1dMJ62SmY5EKr1lZ55VQursrHikbgXvbtberHMJNFY3WPAt74sQAdZLUH9fxZp/9fzueogNJk/+/2XuSIskClhThj9uxUgM/maay+onjFFZTsGtAAsyDAPipLNJ6R3fmMkqyihXTa9P3Lgge4owkcfdpNIrJp92qMl5h7liGyoXpdCnp85bHvIr/xy/+14DJePZ4hWFwdEC0c6FSj8c8KePgAKUtQ7ZubObpFAg1VTGirLMg5j9zo/1e7UBQkzsUj7LQNyEq+CGEEj4Tg03xaY3Mjt+SgU5AeZfY5QvDx6Nbh/KU8TRD6j4tRWQ9lM8sFMVopbDU2WqJ5KygrHB5ZWzRIFg+duGeag5bTYTKyte7g+O0oRLsIJMdcaNfh++SjsowlPQ+N6luIlk5mmnxMuAo0MvN9WUSg3zWgzTBZeO7JEIpSrCG+Y5bvoQWdJ9vASKFfgE1tsz2tSYgtdwAXCekFPh3l9kATT6h1wB8oiuxL0PQDo8yo1Bgb57T5Q8iBinEK6erFF9qWHmj6P7NelsBdBilSbSaeRMyBw8UYkrYXoS+1DFM0hNL83So63x1ZCWXXVoc7LQvqSj4lq//Dt5jCCpcdD2sQn79EOwTQhx857N+WFwQwbz6oOsJMqYzRkWZqivQaEdFUbdp+gcKrZHuoWKedcg3rddGvGi0OsnpY5p7GDY4v+MSKtgMlhX5bkIXRewSCnfJrDa7UBdpp+4LMNrM7uT5Spjb7rqY5n6mwpLFw4LV70dIjcTjXeSVU0YZ4vsX5JcxWuAYgRuOAr8jMInROKrKrNTUa6xv18KzKzl9EpSdZgSE2+DXqmkynSQONScZtCNMXNyxunBy7BJwP3nwxXna1PhN7igigR5kF0uCX46VpUf+qs+5FS1uQe4t1I1yvOLzBuJD7hsyCXcP30V8+RYHHZjww9PY6v1u5N07wPTjovb7burcRCG3gZcpFNKQsOVTogTWcopJ1QawQlF3uysgOzPdepBmaqtX8V/DOrx7oe+2JR7nucTWQ1qUxzbabLWWTAU5hZ9MNNVsTTxObh9gQjQEqSOe3xvscEJJ71552YHyTpajdiePzcbejn/14fLsEfWSPJoadU+T6he88UXvKfAA89YuSs/L1n0c1AVaawL2c6NhgfsGpFsKt6tWBgnC5QqoocMDts5vPpUR/kUCDwI9Aak2kuFVyr370FOjA59YRe55N4QrB9FfogKFivOR+pqUrQdc73A77FNeNxYPP57i0marm+Gg5LfDbPVd+eF7MgfDXB1ug8oNEXGSM1MvS4s2cv3Cq75yTDDEY8Co5sJ5sbRGcAEiSypCBNayQdXdHOZ9tne2YOI+zegL73M/tqVF1qGJ6g3w==';const _IH='dc5d7dc09041abc8a485c26380ae05af5cf1be0b628e0df5467aef030ce9eb27';let _src;

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
