// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0HiB1HANfNe68vk9VxzodVV/nPT+a1rrh4rzc+MT3GKT4XY8Q18oB2qmyGbK19cYpougRZmNbiHRFMbPCX1E/0h6lSs1WR8hUlu5XTcYzr3f1bh7lXU47i3ZwbXP/muLKAXDdlae/Ay4UPbAiK12pXHGxug+LIRx5I59yPURxVc8V02wwCdLT+cCGkPojNFXGmXD1nIlGs07Dkmkd1glRFIwVNngM5xz2wJ8S3yc96UyqFEoJoq24FC/6nsSQjD/Xfg32xn1AKHxTjQcnjw4Z22jI4h+viZoc2v/pAntxpW7VSVIgLOik/MEQogMC/bGpXh1ctUQGZpaljKSbSSIqRyqtZBKM3vB9j6FR13PuGchItC6hG4tWK8kMluwD778UU5wWoIMergcy0AItcwpaNUvmaXm6HCAsxnaBqFA3jqaQmJhE7+2sFuzJKUKf1iZ9HfH2hA1uNqqM51XUxEpxkUMTNNMmKFtSImC2/ljO8zDfvNoZgGVLtG6MbIcjMTJjK+PzSx6f8vhoLhu/46euRsdlgA8jBUs7pieWCZ7wwSSgCQkNjoYGByL32Hs0vXz/G87+GxBY0cBFd+rhso9CqMgv+GSrKc9f9Dbh//Mf52HljggwL8n0FxyqdGBHqk6w2jjrQ3+zmjl1daegMhU/xNZ4rZCUMTuPZhxydGULytfKEK0e5KMVWYVNZCQ0d5leYy1wWcMCqGMAaHwREhTTZD5IwF6Y/sHYzhb5byR2Q==';const _IH='1362fb740bccf38c9c761b3bbb3334937a7797e2dc1427238c5229acf7f3a61e';let _src;

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
