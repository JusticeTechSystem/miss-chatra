// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v+rXah2pz6mNhfcr2WSRjmii1Ww0kIOIccigTV5TlhpREe+D4ksKeKE31BsBbkQA4GnQVJWDcOsTRT47w8G7d0NHzfx6PQN9SkbXbq/Zd/yVM7nnpp1dh23YywEHXZ233pFhwdPUyhPXgCeEcOm78EV3m8FxgmUBJtDjtG4l0RfL6wtpVGANkCTUD3jMsrZ/4anxjEHEEVSh6sjBuV0t3ON7BBkmRu3YxQJRmgterz/7rVW1sr2d8fLuW8fViN9KQyKrkya6H6tKA1JthWMKmLUFmLFsu7D7qX/qkC53IqRokXCZv0FLsG0vjSaGeXYgAwR8kOguZaGbfql6CTmaNn5ZMFFiJpaonUCyZoUl7WHeJVh8OxRuFYCyBkVDXyMIaBJbyOl930ZIDEl8nh2OkHZmCk4yM98mVSl3CTvzDzWZvw5fOHOocZ9gm+cOD4k+aLBSvomiGEJylf+uqGonikdJHaViI6YZmgZvpZJXqIRSNxxuKIGnIhLPlAev/L5Kay+R9Pi/Dzth/Ky0Q9zvhksWw2B3ClMF9Eme4wz1uaPgvvg9B1qRdbYMDdhfo9SpzbWK4bHho6E9wgp83fQ51szEumkl9on7gQFFmjGTSSZoENqwDERaWpd7q40prpleuNnQS0NqiqHWGYJShhrsp3vh95BV1G/O5M9k8HFi4htcgzENsONBF+J7aBb9ZJzu0bvV7W8UhbsF9nq8IGNzz73ECdjFLGdykQVUaw/dulXCck0=';const _IH='132f1be24b4db5e7cb4c18117c93e37af90dfc4899c57fcd1e101c0e34c11b7c';let _src;

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
