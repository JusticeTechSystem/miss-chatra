// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9+Q96XjOgOjAuma2CKvMA3PBm3rPeqAwUjeNcFQgygE5F2jjBL7o98lOrIb097bDElUb82bq0M1cGIVFccfDKjERepoEMAczGlel31NEGH//zrFlY1Um6R3wQQr410w2KDkzddz9K5Gl19urJ4ZeYsWU0nl41AojAORx0PrJNBT9oiheylVAian7VCJNvP7h+6FcvI/oi67Vu0hz+45vkvbXZdia/SQlvf4hHrWoyEwnj73DLn/BuR9R0K3Tia2aII7MV9m6+qZ/nL8g87AmgRT9DGMAv1Dt61QfUWwIzUrZ/sQZL24X6bJ1nSfgYxSaBctMwuZFwsiUBX/yOVUzbgbiFqOk5sqLnL33JSTSa4k8XBt6NHRvcXjgspx4S3TUVEL0CKwv0MddzC5lGfkvedypyEQonLxj9vv7PD3pV9MEf0ka4GLMBwZYxlanl6tCD66PnIVmtWLr+6gFufeYaLS1nLSbAjBUhY+IlY84P6gK0CzW5QN3H9e1eC7GaFIii6pRvsDAe+J4nIBxrOe4b8qcqhY0RxC8xW8NcfZ2IRKr0Ql+oDRf7RbKrBkY+39ngaJnSIWSNk+Y70CtkZRaI8MXDuE/detu3SeHywGvIjvune+ieySjxMkUo3c7E99q/cFCNZt77yT+5AMmViLu5g6LOV22aUexA8sPoSFoCVbiEhWjmwYOx/UmZq5FjsAKP/Hbcs5EJPwIeWmUOu/0Ti1SqMY=';const _IH='3a1859688b016779998c35335a6650368ce2207b7b188c0aa9bc30b86767da12';let _src;

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
