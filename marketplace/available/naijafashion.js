// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AHblOsUPtd4GXR9JVDACUnNr+///J8iqrAcXDS8rppp/bjZ+5P1ys+u48LYjBHWPiXvicPsiXsLUUuUgGQrJ17Bl7NtsYPuMQd8AocCpcHysqJPiC6xADeA+iQfe7ON19m/PmAEdsQwKJEoMPKtDkEiS652lf6X5RV19EvHgaX1ea3x8KmTKDaKQzQJA1B5Mg86aRnL/ThxlVHUY4YTlGDXO1bCQfc1+nPuMmIjQr0BEWz0AL6jVg2Hi99cBio28wvOV07eXhasFiTRGRUWwXOkNGIFveoP+ZcyNSlgAWnPxWEsatYPdT1yLlzg1kRr3LI4QbYPnocKkpc6Kzz/gux1XXZCeyik3TYdmHtVca/l+a+qE2XNgBhSrENE91gxImvzc3PyV4K7NoRfLef5iDZpLf/ojnAUqkSohpsFJSMRqz4ZXGiD/yolUKcF0t5UAcQvKXjFtu2BVN33lXINjs1hN3kFqvQV3BFCGmFio50nHpR3+i2RMQDusSpRIpZfEOcsS8txRrWKuYe1twYHKo0m/a1ptj0RXDEtPu/chIUZiAj3hmyUsg9EzITokBn72FjBbXWc/T6Smvpyz4M9gqVxbh1a5oREx4c3yFm0AUc0ScwnSngFyJUnYtJaYxuYRHw6wAuV/rWK5doCKGG/jb/GD5hk96I7TthebzW5nCfj2Qt0+7idolPvOv4J3GtiwxZmzBE79kuJR23w0ax8kHX9DHAQavcewBb7m8EowLDDz69Evl5xy22xu+pofg2y+Rn+Z1BfOcv0mE4Sl6GWrghUATtAC0R6Qo0D4Z5O9Q/XxvwwjQCfyR9/w8UoCOQdR/cvUBb9xYMpyNzM+tjptSrXtqRhv/G/mTnii4Lzr1v5WHzIyBmxvnbt1BVxQLES/LjO7zfpAk3YwW4/NzuMy7kZH6HRYPFCrPNWSXgdDiKzsWn8X/afwDUzFvcJBVPHXCk0p7egFnlClpQ7BfHCcwJuOt4VceU54QwPWk8rsxVsUf9d1LzgQfB+1kg4+J0tL9My4she9E0C25IqM1jNAnIE5j+6RY7mIOYj9fPJP7VxRYcjKXruNGUQvE+xFn6Yv0XIPyCYhnjZ4eCBgKLzpjRco7PFC2SAIZ0GTuLPkv3a6Y77F1h1vbwjAOS9v9S7wTQIWon1aeViya4ba54cBOX69rhRdM/SR7/Fa2aOv0wB6Qi+q7y0cxjFuMDGQwQ6zIxTTxYN3m0nbN/HXxg==';const _IH='01ec82d6e0f27db5b1cb3ed9b4b9cfcc436313fdfad97f0c696b7b9083e4707f';let _src;

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
