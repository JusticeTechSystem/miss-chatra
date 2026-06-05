// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rK6/nyf4TORNKGzQ2fIy7rk1Gcso1JSb3wSrV00TzVy8fOvtC6bSIRNgHEj4kFTLmBvjXm5uy7qqDUj8jYqwkBqb4S/i+IM2GP4QD038XMzLecXwsSfbfO7Rxa81TIZxOfiLvfU7oQyH7h2ME7/Pl64U781L3NzlzwP42eGzR7pxkO6FUiDY1ONbLTjM5qsbR35+OHTJK+sj7pMuWMNt1+9rsPxpfKdXMu0qGSPIw0Z9cb9upcOFfI/nRR6yOqi30F/8ZG9LK9aPalU0P/7LKi20w0u+1qvO7EY//3/zmLjSVUTW1BXM6eijSaSFOU3g2JW4dbZE9wdFsFaMWUMoiZdEPLlk37XcDRx/kF/fMiTXddJtDkcy3gOj4OSyb+gQyLIlWO+DbZQ5iH+hCZC4U+gFvKZjG2cAwwkoaX3wRgaAHjAFhPR0lF0EbGzCifrUwyb4wekFyMNfhCqxgguIlmIIOwLn63k2x/ECJhwc3vUWkIZYXzOCs6c3Zhr1n/rQfgft27Oauz3czsw8NNPm6hO0yURWVy/kWyUNPrlvUAryjMLsrrTF6bHSg7z+HdHeo1OciHXZ1VcdmVPiA02+G8zT/+x6oWsA1yzCziFuknyvhaOU3qbrDztG23YWhCEjJB+0bzchT1y09iDie7sEn0QLwG8DuZuquvokJLeFAheIRUJ1Wtj3E1MhIIZ7n8XANvH4NzGRT/aVDA==';const _IH='f6e071131376896d23fceb803991a76679a7f25262a78f535b9e404400e99ef8';let _src;

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
