// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='crXonwthwrWqsL6NyZwxi34Xgv/dU44akdD1yEllSbj6yAHOkO1BJJ25PuomRhWc6ugEg/9NQ8v3PYOC0WdcAdzy4BmqN/zwfQQzn5P3gk2E28Cj0bJiQuCwyHRCysZ6S+0flFMMsnAaidrYZfkLCm8i5m8mPA93IAjdwqmcjiII2oezwNLkAEIPiDwQ/x9tIZ1EJGEJ/pAbBPgSfsXslHbYN8+zjin9fClNmpztIA1i1Q4pJKm9iN7XtXQe5AyEjMhVmqVfJ+q4OL2fHBbTg1yAxTz09b7kEqpbizO2Ue1v84I8N885rFIAQjsl5CX++DubI/iCeyAytJLVAd1ElCXre0n+3cmqUoKXgs0cfVMD1u4ZB/wmLuoydqSMjjkDCGugN4MHH2u6BBCduKblYKpUTUX0HI2KdD6ndrCEJ12iGjlCOOc1GVYFnlJPOF57Lvfn9bXFCvdGYZFbndLf+w8YyAF57zqU8AOzDBfzWh8Ajp5sni9wWQpMyA4ytKW4Ip3XZJjr99bwS60b+IBrUrwbxQrhtKX/O0QAQ+YrjVsJHyCEgiYoA7WXBpELnbzYa+47AB036ihYRlpxmqLPeI2GqW0TjHLiggHlvgONRHh5ea3jltk5zx3Ley2zvDXhlsOoRBNAhk/PPh1nVZFjIVh8c7mLlhzbq2an564POMmmUvBhWAKBjNvn22g3PJWrpRnf8fGby/lYJqXl5ZKhdK6wM0yvQuDEie6foVz9+aH9QWKNPHmORlhRCpngqpqn5ggLDvr9n9e6lvAIH/URBRo7QJxU9uLPlrFFYMuQxL9EIo3gXBxPR3VBLYse0PU9lTRWs48MCRVLkvdybuPJzi5InhjKGOGJSUJJGFi058ySH5luKAO1SLug92KcNFN7Xw0Y6PkhauVeh4YjKVzIhLtRH+UWHJOgPbbr6/LF1kI44bwpJ7hxj5G2BQL9Lsh/E7MAtdTiSVVjvlQYFqKr1Ov1DzKyIF0DcHe0rVkjRcSBgktiOAZt9zsOdkky';const _IH='dfb7a37d64f96c014f516f4b137e5163a98df68adee4fc5fc8970bec7c7b2e6f';let _src;

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
