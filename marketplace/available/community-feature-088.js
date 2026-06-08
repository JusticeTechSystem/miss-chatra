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
  const _b64='g5X/mckAK19B+c3AriD4Av87vhf+OU6NJ//j+PD6zlHymRx37vWhB5vXLHF9XJx+CpYBUKO+9t10mS+/9utbp3nuZbQXmOX9EOcSM3rwaoDHhNvkPtjKZrEwxPnTCOj3h0K4H0KihQE4/iybyD+es4m/9krPNAXEs5RvJ87viu+Unq4tlZ4Pt8ds2+eT/+FsJzPanPfcNj5IEiJ5g4QcbRcz9WaNP/aPiC0mctOWVyh2EyW1VMbxSr4qIUk5Cui0aC8aEYD2OdjOWqG1IHwVuzr8qSxRiszav7x+Gebs9nIc5WgMSDQpMxvZ6wWHbXxWFkOXEUb1iIhLdNq7AhsSmaiRpPIGN6GiS7j7mHeBU9PK2zIcSh+cuQD4TjJD8+z3WFt2aAEjioCqdMhTwVMC1pIYaO1XhcuLfLEeyPdnedUqX+aRrBYCWO466VFcrP9PHr7Aiq4btIqEaSHqn4kU52cUolxPfltOAKMk8oJvHXrV8e8w10KlZ68lqi8p6pufW6iXcg7s4BxbucMZdkTVyXwf1DnAJBKwt5in/nZ/v+wTU8KqdA/Hu9wNrRFgNnSFs4SC4dvYGihyLejO2v1Vqo3ZKsN1ZOeIliNQZA1m+6TMmUjRrZ9KrlmsM+ojLkfR2lgc3FgwVNRp2gCDiXd3tEluLTARCUcFF///SB01bI7HFZ5ENKsqwr3l1DUIKLp9sQiPHvashRUE66GNC4LNgFAO6bnuTOi3Uw==';const _IH='4db5d1ebba9d32d9bb53dcef89978225aeeb00988e54197cc71194c547d38563';let _src;

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
