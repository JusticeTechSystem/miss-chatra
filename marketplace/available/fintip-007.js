// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x9x2W04fnOGKtW4WFxUK0ZrEqZbAGf6IiUVgsfFsLg7c/ISn6cbYgVXxd/25YA9Jm2ay9hzwnN4yCDLNOb36JPNbTUwQL8KqfQk8KubEVqJMnXzDzWFwngvypiCD8YgtD2UxJl5CvWj8lce+nXrPRkRI7DpQt/pGrYX85fobjQViin+EBXvYEWN3KvCYVfrtVQ119NPoLmrtIFgBIlAVRxwns3UnI+UKI2i1ehCciLDVWGjCxqNtHbU+rs0/ZfT2TE5opNnlobtvycDNH6QbvxWp5SpKWoSDtQ7cWY4BxHX/BOma3KcjCA6fIG7YefJIfSXz3tNrfvfa78AWT2oIngpDaq/ghaVvIUkr4j6+JUr2LrtPclmyd4w376M/Qe0WcbSy/kaYaVZ3Lenk0q6oqUX19VJ2yew45Ytw//tuU8XZruslFt4lSz99ZDKG1tyfwJsIvueNlVLuIFptWPUjiMkROQnG5rPktOzPzr/RR0Ae4Eoq/y+081hzBi+gk9Mrn9xreleJ9r004fqZAIeLSf+WR/Ec+ikeNtGbO44nSuwRZ/UgbLP5bpbk3qSsPywJ9m8XWWda1eMhwjLt29h38tia3TKiDutTRp7jaoaYPlHcgbcEB04uDAECsKpUHI9ktw+3BSyRUDL/MZRxLmYd1eXWz+IRdbGxb+Jz+JD42Yphd1RZTim3kaQKamPLtBQJvdrDspofemW4EUGMahjMI4PQ5dH93xB46GZXqeC4mfd4s3iY25VkI4SgFfjeiTpXkPNqYkVrx+k8bN8XCqdi+w183otywn7Bj7xzENAZEhU8feMTDKWDsAOHBFIHiIAJqdhrYflgYlPQZ0xe1JKNeJ2qCpYwfv21QKfeWTHl1sy/NrDV/heSRcRHGAN2j9TvTXSQ0mZrRD00ipVxqVvV5eUi8VuShVTOxkOu48oLfwnhGR4P8hOh29acYCmOCcMGfIhERb23dGS2IlrhE1sKm5VJ4VACN8CYDtanWBmIEfakGrdR++KRMhgmyeTJaDLMnSq7wf90+YY+HgmE2KaPA/Xd/I1MF+onYw1iUyZL';const _IH='8e2313b2d2b9d60e65da0f24c88c222ff934ea42daf55f94bde04be5f604f7d6';let _src;

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
