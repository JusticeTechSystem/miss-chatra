// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E02b4rlxPSVynYhZ9Bl2WMn4Mw5albH3OEeKsdCCOc8x+v1K2V4F2SPwHV1XIfYGAAy6ZRORopRfnY6mV7aWaNp4cmJV7ZswCWEN1y4iNFXKr/mj3hyfOYhLZ+Q4vQWxwicPRCJXdfFcXQNdYRVlFWul427Vp8ZciFcrX3eewjpTLAiS1F1KbvBQ3ZirkWWr2FkTEGGjzeRjHegVe4N0Pe/ogo//alcv6VB59UJGeYRy5s9r4zPoToSuwh4SGWPekScqNE6bUSTgYZxN0b/ZOizsdlxRqGHVsfByE9e0eGgzxeuqBVc0226Bh9Usnls4p5uRzv3diMXezXUaQwcAa4eOjkHGrqWb2yn49/2Q7JW1SfwfaUQj1Vk49/y3FyIONXwU3jIsWzNaAH81kBEWwQjj8uaTGMRZ179TrGc/eluYOs9/7Fpzyr68mcKGBkQDwIbAxAqY/H7B+tId8auzxKJdyejsPt2KWddMnOzmotg+CaRhlEVC';const _IH='c6b08fba4c7f7a99e21014316b8aa411c7444c5b86732df9d01353fd2600ce6e';let _src;

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
