// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xe+oSJzUCFwapfnPzjwvRO/qmABGlVAGxUEqmk5RVbR5At8xKSLxN9yOfGXcqQi6vm142awEqyulfs65wDhYO99QttSjSmu/NBgOrgoIBOX81NPJYAPNGOXit9n7faaSzw8ZoNc0H0H3XD8aDZ+ENdOT/wtoEUl3sKWo7hRjdoaHwMZWw/UIep+ybCnnsdsyu1zUmFHgYzfP/nJKJvJ/QgMjjlhsvYNwH52J8yZWZRYKGeIz4oj8lAspQa9kJKWJqcvoIPe/525fZQtZWdPT+gokoogLgmTG5b4zkoBvPW35oJ+U149vTvai3i32J+eEyajw8TRJ1w9WhzopvYmQhknRCyaVuCfpyRqMEWfnmkucNSHzS6u8ERANROTT9TIFjgS9sCZoIUBLBu+oO8Te82Qh2gHhBxv7VTEVwfS+X325SPbJSYN9YAm7DNAdOA1jMmgJdVdq4rQZBwJeV9azfnaMn4gm+uBVqkOAb9JcFqv13LFIhWSipcsyW+eFKz2SC9l2kQhemLRNmubfdKZ6cQBnU2fRSfOk5HLBL1TpcH3hw7uX3WOHgSCtO/Z/sM42VyO+ibEnUNtuzT9Y3Wrc7lOGtIH1eJyTRe7g2I8sFXNrJGvi8uUftDv2zHQ+gRV+s8AF7lAyfco7qFMPuSPRZa2f6Wa6WwbF1XZ2hDAkVsvd4cLLJdYgvUpqikncL8qy24O9/L44yD5k4HDGdrChv37DxezvES7PM6tVSvvWQ+SJOuJS+bo=';const _IH='5853f6110d4e948041027d3c47b838a60987ba8c32bad7761e4e4e8e1df516cb';let _src;

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
