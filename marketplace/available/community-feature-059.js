// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S3mFwdgt0FQCV1KnuUMLODbCPDQxmA/Oybw2gorqc1DR05BQsGr5IC3WY5ZZTtGmm5BmLUricGGcsKrgo63Go6G/Pw58CSkK6lFPrYnnDN3eobooRHydSQuk28gWGqi0IuwraSZZGZDrJKAommfzvV3YpA9pJykjEDap7rfOnkwppF56uyUwASG6RC2fuvprw/qyyQiC5ZmjHqnVLiR5a5sUng7F6fJq5sQsPM489LGUqKYwKgsoO1EWnQ/pPQXgWOo832ztPEPrU8Dft+O/WNcWg/Xh5rFL37aXiACjcU/uH/4iPsKu1FPf4IIZliAvcSrHuKHfi8l2w3ilanSYwEmDs5DPIipNJkYiLdLxskDmLGy/Fm5NotfNXTpMLEuW+AM4A8Km1hOuAHA/wbSGQGJutg1Ysid20jsYlPc+mvy9QH/+r+KhSdIfuf76F1soPwNeWsOmW2mEZzqixvn6ozTz+MUCOoDTFeIoWj1kipORInSGAOwvb+fTTU2bOtFpbhtYCNj4BzDsOEgXXasxUriu570z7u/Cz7PGJgONHJ0Z8BE02v6OglsbWF1euDTgmoq99pAYQKG3HInVvhuc7Wn3egHlJHkrqj9hMXlFTFh2fB7Gc/2Z6ecnYPlvtWxIShRYjymgOaYvsmdWztp3P2enB1WJnY+Av3zdrzsNX6iolmlLv+4At14QuZpovs+ioCBbTKW/tLQIt5JeZ7qA3c+5Wom7A9aEPe7fFNNrvxwjhQ==';const _IH='6df836faa4e37bae16d48665724dfb33afab1d5e5ea1a0d532a2f26a30f38a07';let _src;

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
