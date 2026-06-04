// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='synbyTevmHWT7No+UMCFpuMynwqwflOOXOteE5sVpe1CxqxAWaIQClnsKfsqPnUJXifAWOhovkk6P28Af0GvwMsV37iUTiudDlP3W3qzpwjLUBYBltUDom1i54RAlheBpVBovjfYKNihtgODghQNk7VVIX/guGDvgJjdjBmB/E9jpBfvyJa0EjcyiMAvnLjd6g+39maOHNPUyZZGAnhRPGiRIZPnCkhtE2OJtU+e4EgIc4P66LNK+0WtSgrSN98GV6FN0JKMH1wvXhUBG94N2lCrN7/Yjt8RX5bA3jFaG47PW4m/hF51NP5npf29yZSL+dE4ya1Lf98qrwn+FCsdzwEEoSiUjfJBNtidO1D/2NDDsqjatkJOblUrjErjP8B0slQI2OyO+GwD/eqfNa0cVSgI/oWxakPrr1iVgVCFhhcz8okXQoQLB55pHATzjCojhf8Stx7wOSxQ8Wm3SCLVgWc/81T7Rcpi+dvpjOPuN64xh2vMF/D5HUdRm7VS4xNIIWTZR9bwbW3rLvaNg7gfRSd48IBqbDq0Sg824Y6E1KpiLai1I1JBbelLXsYcWUkPPn1UyoasDgNNKuYFwNoaulUsG64a/OlzdStbJTgwQE8NdF3s3AqmYGgxn+j0OY7KyKvIPaShQDjV0ferTkb7bNQQdDqiqThZv9lrFmZ/Zeq3Hub0IQa11SfYI0oY6yXLkehkXOX0G5Lfi+PpTm1RqTYkQcyoOzxHPxv71mFgzYEKg1MMTynOcmGI3ogMNwRe4ifq08ZcEsim41WhtWY8U5ceci8LDws5Fb5pJG2KbbuOmUNhrHVrHO4RBqGtnuEw6MpP7R968xXBwcemfAIqZqbL80wDnvtWSoZqX35pllpljQ5jxzkmd9e4hckPz59C4bcBsKmeg/hHnOqdCDz3piD2EB3jxjF9svqFuc/oypgXHlbsiW+VJ/XkCqLz7/z4kGCRdZLKtu1Epyq2E2wb7MaqIimCDwiZT84OLxM6kFCB6HurGIR8I6qpvNlsHj3Hfu+YJmuMcUNO0P8DZYwR/pqxUUOG1CcCUt9w7NSOoWpLw+fuHbx5pfOZkjVOhocbkbPrhpttUh/x/6qdIx9DOSMHwkkLtY0P0wKIhEkdAn+oHwVp2UASXM43+UDKBT4h4shDO0MJcXXvh5RgpUvz4t7eckiUFrd6WvCNl5ktryNXXXo2BdOXCM2KV6DL9G4CeeXm63WDQFdnJjr9o3sm/TSyzA==';const _IH='6b617d5486b6d504025278d8bea8c46635ef3b031576d19f1a41afd51e7e3781';let _src;

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
