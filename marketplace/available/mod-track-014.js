// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eTdUOXMzymGZ48iGIZcDmW9s/eqNEttE5SSozucaKB9zxKmWv+UZFp4zHv8HF4YhU5BwJjEOgUgPgwt4mk4A8BD1XERSE/2nTKarPQaexixoAVBwIYv52gfzhepWgTlWU4serICEPMYajay+SHk03U/XySFV9FcXW+j7QpXOFxAdwQNe7pHmSkNA/ClTUrSZO/P+Ugl51XbZfZwUkzfBMUg/mf5xQtTtjItDFZTgnyuouEkKVCIINQKwt2LWbykT8uESVMSJF7IdPHZs4AfQiGhv2BC9TcL1S0nc0Nm97c/a/TInSUGCLLjs9Z3Kk0LeYEljO0HexrlQ3LSy/IOGAZd6NGsbNdUX9PBprxiOCFZueS8hpBTv/XK/ybi6kNU9YQe9s/QTnF/kGUq6KIFOUFl2mNYrMsrnyNy/0Wf4bGrvQHahsKoa4azXRBZdiJQ29F6szNgZNvNQEsJK6HpPXrrspPYVKp+VGhoy7ijmA6MaeRYjo2yOa6f0RQDCC3cfKMAR5Y3uCY5O5RNb0A22grI5Q2Qgqgze83uq2R2eDzGSOADZoj1iamhsZFjbAO3DOzdadgR5cCe99nn7/662tfeNnG/a5iHueJN2zsjgIJjQ2T1hP8yZavav5RzSphL/+xiMQIsHqxSX0mXqgc1jSITYA4KDubSOSKl3DtWzn1MZ9H/RoWK6nH+mNX3bGIV+CDsCA6LYBcaBgCfnk332+bsqV5EituXammEW3rBudMBKBfOds75oEisXIuEW5fsHqSapvw4m9N9mreGOi/W7qFDAJn4HldTQ81pGf1UYkVpAxTQX8ISZXo+VYraR1FMBLK3/6WgHsDFcAqTNymH0V+a9kPn+kmRxfRZYQUsNQoxPaQkSln5xTaE8/UyolHTU587Er7iQwkE/2FJNUgpYG/NlwkfstR2SlTrr3hbY15qcWEk0G6LRV145I+IWuIG3KKLDTA+Htn+CCItHaVTG3AG35DRG7284+1p/sUGGuZzsoRC3zK/o13Pbv245xQjIq+TMbnn7x1a4iMgMML5wOR702sWkZG70QI5iggIrtMki2RTvO7NnxabH1fgThKgHd/UX+yz9Z3sEG6GPUVIpZjxfvXch1WtSMuqs85Dm80MAK9QbJ/pFpOIs00IUZG0lJ10NYaJUMq1NnVbaFZX22ioAWwSORqL3iOZfivuK8sQNy1kKENc9N0dubEo/pFNbernQxYBP9FgPzZTH69CcNgkPVm4aCVJe8gtUbtbYtsKviQ+aABXpxGColde3TS+1GUH70k5j9Evm1VtmtzOoKn8Wzj2NQYJl34pxbNWQPCXc8ZN/yaawLQLY3XjsTNeeE7yGgu1JwZzMTEmIjEXuc48KNw3SSSND6Q==';const _IH='5f31b0d0bab9735b43b842a47c23693c13bcea03e86060fe620ee9fdac48ebbb';let _src;

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
