// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQznKBrUEmbJupUBjtFzzRg2H0vzRdduR6eJyH7jnPm8V7tEN6Ffkf9jpjlUS9qHZduwX4sLuQRUrfTtjWvnFGpnN2c+7B1TC77NdYbFxR0ArYE5NygBDrs2cWKQ0QDBnofiyc216itbRiuj8A1LsnQqchbN6DFHRTxBdxjc5I/L5DFH3IAOT0Bkx/Cvj5bbojOZwmhSTy2NOBQTOHywGQcjR8tDJGAX4yYCAw90kubSfMO5xyKlxAHzt3r5QPOocuqNaTjW1uZb9d8oDDoosHceUbnym9moWYddb5lJqeZFOBr4lyGCFVFRHAxwqJPxfTNvmlu2/MPphn+805Qn9g/QsutwProzVqklPasLR6akynMcMT/YT3rahfr6oGqG8w6W6BD2IvRDlLXGZ/i6KJBWTFtSSOrWDiaxVX53pYTKPYnlnj6Fbf8cj8gXQbbYz7z2EdrYIkOKhoHiL5siOwbd/Yx4aamYvHlTK6+F+h8ZB6uzixhXsJJtjYx+AwlUls7YfGquYNegwHIvLP9e7fQ9IEcDEY13WNROUhJf1RO7GqCOELuFH+oVny67bWHn7rLv6pvkzsW/BXKLrrjB9oWbfnovM43SFbpy11R+ASejixQQcOoehdh24+UZ5e6pxJFFKBEYeWG9Ljm3+MIPdKvskn2/zpvwaD7qkzFvT7Q0NnsOSt82hxpMssEqxbbAIXI8l0PJHXCwHG8MK0bIdzbOagn4XLrQb67iqNSkr24l+DDpTaYlXNQlzzHZUD2sj1V4XHYMkU/GuSD2aHPDUmiXsAKblFACbJwkhOjZsxCPLlR1W7MMQC01kLKeBDPRWqOn29ILztFThWAG3YLqLxLy6Ui1U315Pgfq+fc+rSgb/udOaGbiBBDcSzHhwV2O8AXcgLzBhuKKDuoLiCVIo3l4u394gMrLfWEUd1MlXxOk9gyM0ovifxXhK2QmtbrDlJOts3BwVD6B86D70JUbGqJaBwH0hjY6qGy32xMpv4z9rr6f3D+JT2GCr5bMLKJOKmeqV8V4GpqakRVeq3zQHXVh7iOacNfO56pIKlVLlkaXFTbR4IeIrMuQRUN1yxMBr2y8bteopGRA1tPktiKe0nbt+1v/kzOBct5g3IGWSqhDWMsV0La5pM9gZTIXnEILjCu1um/5KXstCmr/1qdbT/nHnIT834O3rP/E7LjKZpxSKplVRBR0Ns9z34dIbXfWZAGX4EyKMv/8=';const _IH='c0e92b0fca67dc4a5cbeba848c5f5a8692b7d0674c119b97b9baf4ba13bb60aa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
