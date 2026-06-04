// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HOLRU2E79fZ/6iqYknezRryE2j9lqkh63l8X1EW6xrcrxkBiHEWQseeiOpAcHg4kExKK7MQiC2CoTeNb7R8e8otXq/hsTs9/5SY137N+bMaH1cjgoK/bah+t8fJdRck3G97sma9H6TqCe6JuJA+mQyQJNFQZNqLgbzwNVWy+YIgApw9/h9VTIoEecHXFtbb6m2G4u/21NQ03nvbiOyECz5LN5VcSWOrWog58/vyiXFe6+hXlq0vQJrn22+pYMoZjoMZH/q1rjQzmM5P19CcpXlY1jGrJcjGE2RjIuuhvML/36wFiv2qAAwP3JNXtW5pZsTVCpA+vlBkj1BD9hGCb7sd2VHnA8iHFK71hsvRowBciWWh/81IPxE7VO3hRPxyb4gVWGVEwt7U8dEDUTqR0dmcBqqMuSBxPg5a2dMoLyjVjGsiB433rds5wVgxFEPmjC9PU7v9pIreFBouXyVo1ggteuctrbrftEFOezTunOOZqh3eo15C2rtyyehMhHgOzXEK5kvXkqZMs2eGOeyEV5MnUnHGSikfRNIW72ENJ+r1eg4lROPlhRmkCcFEv3DL7OHxnJhCABKkamixhyLWfawgUELLUejGzvDcY9uRVyUTg5vivovpMdoZ+iN5RO3xfFc2u8pfbZH9sll8KtSU4sode5HHSdZk1zaMBi+uGBSdpKXyit2uE1UZzQkM37eseuIaojYWJUks6Eud1nN9y3uR2qnaOzrFDlqOqQ7AfollHp5Ab45juuMqFW88RJMea1LvcmfHTq3cC+WPpWkXACOkIStDnby4lIGGttqXIjH6NePXB1s2WNJe3Gf2rex9/zXVgj558+juhODMc3zP98dwR3iaM/RX1yie2PeBSyilJDBYhwNlarFMd8CECjnliNtzYjmXlPKKI7kEljpZG0NxZVlJGImmkJHWb2uGUf4QWPIb2Vyibu2vx2NU0AY9piMZxBdmqx/u/FD/B27XUTTWfgOXSoCtEhQL9lIIzS2s0GecUXJbNhoIR';const _IH='4adc05411040b4715c258880d65572316180e7a70328a35ce808c3370d7ba0bf';let _src;

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
