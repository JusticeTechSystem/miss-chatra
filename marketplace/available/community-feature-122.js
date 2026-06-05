// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s2nP+k4i4egXOVgWQBGpUaU1esBfzgzzcaPsmvsmX8v4BplW5bvII3ep9y90/iYCWKYNWN1qqXoATUq0MSsfszDjhK3+kQvDcWzmkYdOnJhBGqt6lMrVO+/Jqe/gypIw7jKGaxlsEi3QEc3bZcwhN7c4FIdEc2lhbC5Z68SkNYeCnlW2qwdMbgFM5G7j+1vSQr/37bRnz4tu7EUEY73ISD7jnYNMisyDOhRybW+NbMTTnqChIdmk6F1kTLK7YcEiwYehW46j8xNqFRcKFPKKtfumIUwLxfV1FvA4RSXJLThQJjj7x8apQGv6IUmhudEfhQ77pJXkdNzsEJDwMmOmlXV9gCC3tJVnEtqBJ4+rDOF1MMbv9sm/8EpbRFOZD434TC1oadU50Leq3OXWZ/lVgv/5wUF/oowov8MroYu1NckOJQ/V01LCb46iS7C+9bilAPj4R7UhxQsJfK8jGwRERM77l10odGX2jNa8z/KiIUY2JZXEXPO8KBh+KgW1tq53K3AlVKJbNJYlyypDshAIreUoI1BAHmeTUY3eufOiMt59mAKgU874axjsBke2z7C5GAW33XZamw/loznmSnu0t2l5w9/2ILKW2V7/tTHHgSPcxqndhosxuoNoWyGOemfj8UgbnK9yOh2WsflUqN6DbQZRC/ktDP5Yd8LAMpogn+hFCLD2eS4utjlyLSWhjMkPlI8oY3Sxlcjtk1aR/9v1p8t15H+fY+iQNB4TPdXuPx2W3Bs=';const _IH='7440c34260d83d7aa7de5ecad3c9f7e1dd2fc3c25478a8f3b7a44c59db4b8083';let _src;

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
