// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jFaeC7TdogEWJOWrJ/dXVrLg7KSDF11Vo+tSeBFH0aD0lxs7jGGy7RBS0ChA/01ieev5CQjRruAHQpkIf+X2MEReHSStNO06YZbuwv5wEb6P275MRDxdBHAWszh60aDFUqqGtXFJVsZ/E6CGSeLye1cPqo/rP4ELe2y1cThuslaAI8jsMWjberf8MzfvmdtVXp/g5UHzyZK2KDCtYj4F19XBtIOdNADqMNsVQarScxNleHc285WzOmhvoC+7epsjnsO9Z7dlRaJyTwA18Ajb/7ezibf/G3eCZRY89UPTvcKcb2qJm+af+M0aCLh/eH92lqBGV70v62UA2mMxbk70jimmMCgUyrfmjR0xWvJvCaPmTayQpr3ix0iTboyB78oPXjHz+7IL0Br5EekzsET0Qcq3XG8JrbiQOybf5QdCP+72hmhrFIE47YlPTNYGQMzIwZTSf+SwI8Hbipgdvd3Dc4iNjTX36lWsADZspiWa0bK1t+X37TOSNlPT4LLXSS5Iq2K6BnhTKLKoJ+ykRMQLNORqn1h73MNq+v610AzdTsfWaKJgQlmsUiQexe4+mx9a0ArQhvXOIZAHTY9no1UwJa1aalXnK/D/WHIUgfuxCnQny2B+m9yRBQcvqTD5Y1ITK9KgllUHDBAtg5qkHfxviGe/spBRgZeFDEBZtNlwJwvXOAkrDlPXO9WudxufIAuFEbpXC/q+rGJygXR40j2j/AygdtEYQMO/vi/4jA9lrR/j16Q=';const _IH='d652438206d43501bcc9c7b4d0d9d853315d93ceca26ef50a9c89193f9b91d42';let _src;

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
